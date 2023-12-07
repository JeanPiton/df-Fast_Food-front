import { IonIcon } from "@ionic/react";
import { addCircleSharp, closeSharp, removeCircleSharp } from "ionicons/icons";
import { useEffect, useState } from "react";
import { ButtonDiv, DescDiv, ExtraDiv, ObservationDiv, Overlay, PageContainer, PriceDiv, ProdDiv, QuantityRegulator, TitleDiv } from "../styles/OverlayItemStyle";
import ExtraItem from "./ExtraItem";
import MenuItem from "./MenuItem";
import OrderList from "./OrderList";

type MenuItemDataWFunc = MenuItemData & {
    cancel: any
}

type MenuItem = {
    data: MenuItemDataWFunc,
    typeLength: number,
    order: any,
    funcOverlay: any,
    funcOrder:any,
    funcFinish:any
}

export default function OverlayItem({data, typeLength, order, funcOverlay, funcOrder, funcFinish}:MenuItem){
    const [quantity,setQuantity] = useState(1)
    const [extra,setExtra] = useState([])
    const [obs,setObs] = useState('')
    const [total,setTotal] = useState(data.price)
    const [totalWextra,setTotalWextra] = useState(data.price)

    useEffect(()=>{
        const extraTotal = extra.reduce((sum,value:MenuItemDataWFunc)=>sum+value.price,0)
        setTotal(data.price*quantity)
        setTotalWextra((data.price+extraTotal)*quantity)
    },[quantity,extra])

    function cleanStates(){
        setQuantity(1)
        setExtra([])
        setObs('')
        setTotal(data.price)
        setTotalWextra(data.price)
    }

    function handleCancel(){
        data?.cancel()
        funcOverlay()
        cleanStates()
    }

    function handleQuantity(n:number){
        n==0?setQuantity(1):setQuantity(n)
    }

    function createOrder(){
        let newOrder = {
            id: data.id,
            qtd: quantity,
            name: data.name,
            image: data.image,
            typeId: data.typeId,
            price: data.price,
            extra: extra,
            itemTotalPrice: totalWextra
        }
        funcOrder([newOrder,...order])
    }

    function handleOrder(end=false){
        createOrder()
        cleanStates()
        funcOverlay()
        if(end) funcFinish(true)
    }
    
    if(data!=undefined) return(
        <Overlay>
            <PageContainer>
                <TitleDiv onClick={()=>console.log(extra)}>
                    <p>Revise seu pedido</p>
                    <IonIcon icon={closeSharp} size="large" onClick={()=>handleCancel()}/>
                </TitleDiv>
                <ProdDiv>
                    <MenuItem data={data} typeLength={typeLength} model={true}/>
                    <DescDiv>
                        <p className="Name">
                            {data.name}
                        </p>
                        <p className="Desc">
                            {data.desc}
                        </p>
                        <QuantityRegulator>
                            <IonIcon icon={removeCircleSharp} size="large" onClick={()=>quantity!=1?setQuantity(quantity-1):''}/>
                            <input type="text" inputMode="numeric" pattern="[0-9]" value={quantity} onChange={e=>handleQuantity(Number(e.target.value.replace(/[^0-9]/,'')))}/>
                            <IonIcon icon={addCircleSharp} size="large" onClick={()=>setQuantity(quantity+1)}/>
                        </QuantityRegulator>
                    </DescDiv>
                    <PriceDiv>
                        <p>R${total.toFixed(2)}</p>
                    </PriceDiv>
                </ProdDiv>
                {data.extra.length!=0?
                    <ExtraDiv>
                        <p className="Title">Adicionais</p>
                        <p className="SubTitle">Selecione os ingredientes que você quer adicionar a mais no seu lanche</p>
                        {data.extra.map(e=><ExtraItem data={e} extraList={extra} func={setExtra}/>)}
                    </ExtraDiv>
                    :<></>
                }
                <ObservationDiv>
                    <p className="Title">Observações</p>
                    <textarea placeholder="Adicione uma observação ao pedido" rows={4} value={obs} onChange={e=>setObs(e.target.value)}/>
                </ObservationDiv>
                <OrderList order={order} item={{qtd:quantity,name:data.name,itemTotalPrice:totalWextra}}/>
                <ButtonDiv>
                    <button className="continue" onClick={()=>handleOrder()}>Continuar adicionando</button>
                    <button className="add" onClick={()=>handleOrder(true)}>Adicionar ao pedido</button>
                </ButtonDiv>
            </PageContainer>
        </Overlay>
    )
}
