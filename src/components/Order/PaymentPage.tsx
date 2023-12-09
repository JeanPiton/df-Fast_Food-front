import { IonIcon } from "@ionic/react"
import axios from "axios"
import { wallet } from "ionicons/icons"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { InfoArea, InputArea, InputDiv, PageContainer, PaymentButtonArea, Session, TitleArea } from "../../styles/PaymentPageStyle"
import OrderList from "./OrderList"
import OverlayFinish from "./OverlayFinish"
import PaymentMethod from "./PaymentMethod"

type PaymentProps = {
    orders: any,
    cancel: any
}

export default function PaymentPage({orders,cancel}:PaymentProps){
    const totalPrice = orders.reduce((sum:number,value:any)=>sum+value.itemTotalPrice,0)
    const [name,setName] = useState('')
    const [code,setCode] = useState(0)
    const [given,setGiven] = useState(0)
    const [change,setChange] = useState(-totalPrice)
    const [method,setMethod] = useState('Débito')
    const [overlay,setOverlay] = useState(false)

    useEffect(()=>{
        getCode()
    },[])

    function getCode(){
        axios.get(`${import.meta.env.VITE_APIURL}/order/code`)
        .then(({data})=>{
            setCode(data.code+1)
        }).catch(()=>{
            handleError()
        })
    }

    function handleError(){
        Swal.fire({
            icon: "error",
            title: "Ocorreu um erro"
        })
    }

    function handleChange(paid:string){
        let p = paid.replace(/[^0-9.]+/g,'')
        setGiven(Number(p))
        setChange(Number(p)-totalPrice)
    }

    function handleCancel(){
        cancel(false)
    }

    function handleFinish(){
        axios.post(`${import.meta.env.VITE_APIURL}/order`,{name,price:totalPrice,order:orders})
        .then(()=>{
            setOverlay(true)
        })
        .catch(error=>{
            handleError()
            console.log(error)
        })
    }

    return(
        <PageContainer>
            {overlay?<OverlayFinish/>:<></>}
            <TitleArea>
                <IonIcon icon={wallet} size="large"/>
                <p>Pagamento</p>
            </TitleArea>
            <InfoArea>
                <Session>
                    <p>Resumo da compra</p>
                    <OrderList order={orders}/>
                    <InputArea>
                        <InputDiv>
                            <p>Nome do cliente</p>
                            <input type="text" placeholder="Primeiro nome" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </InputDiv>
                        <InputDiv className="code">
                            <p>Código</p>
                            <input type="text" disabled value={code}/>
                        </InputDiv>
                    </InputArea>
                </Session>
                <Session>
                    <p>Selecione a forma de pagamento</p>
                    <PaymentMethod name="Débito" method={method} setMethod={setMethod}/>
                    <PaymentMethod name="Crédito" method={method} setMethod={setMethod}/>
                    <PaymentMethod name="Dinheiro" method={method} setMethod={setMethod}/>
                    {method=='Dinheiro'?
                        <InputArea>
                            <InputDiv>
                                <p>Valor entregue</p>
                                <input type="text" value={`R$ ${given.toFixed(2)}`} onChange={e=>handleChange(e.target.value.replace('R$ ',''))}/>
                            </InputDiv>
                            <InputDiv>
                                <p>Troco</p>
                                <input type="text" disabled value={`R$ ${change.toFixed(2)}`}/>
                            </InputDiv>
                        </InputArea>
                        :<></>
                    }
                </Session>
            </InfoArea>
            <PaymentButtonArea>
                <button className="cancel" onClick={()=>handleCancel()}>Cancelar</button>
                <button className="finish" onClick={()=>handleFinish()}>Finalizar Pedido</button>
            </PaymentButtonArea>
        </PageContainer>
    )
}