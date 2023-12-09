import { IonIcon } from "@ionic/react";
import axios from "axios";
import { checkmarkSharp, closeSharp } from 'ionicons/icons';
import styled from "styled-components";
import Swal from "sweetalert2";

export default function OrderItem({order,funcUpdate}:any){

    const obs = ""+order.orders.map((obs:any)=>{if(obs.Observation!="") return obs.name+":"+obs.Observation+"\r\n"})

    function handleDone(){
        axios.put(`${import.meta.env.VITE_APIURL}/order/finish/${order.id}`)
        .then(()=>{
            funcUpdate()
        }).catch((error)=>{
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Ocorreu um erro"
            })
        })
    }

    function handleCancel(){
        axios.delete(`${import.meta.env.VITE_APIURL}/order/delete/${order.id}`)
        .then(()=>{
            funcUpdate()
        }).catch((error)=>{
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Ocorreu um erro"
            })
        })
    }

    return(
        <Container $done={order.done}>
            <DefaultInfo>
                <img src={order.orders[0].image}/>
                <OrderInfo>
                    <p className="title">{order.id} - {order.name}</p>
                    {order.orders.map((e:any)=>{return(
                        <>
                            <DescOrder>{e.qtd}x{e.name}</DescOrder>
                           {e.extra.map((extra:any)=><DescOrder>-{extra.name}</DescOrder>)}
                        </>
                    )})}
                </OrderInfo>
                <ButtonArea>
                    <button className="cancel" onClick={()=>handleCancel()}><IonIcon icon={closeSharp}/></button>
                    {order.done?<></>:<button className="done" onClick={()=>handleDone()}><IonIcon icon={checkmarkSharp}/></button>}
                </ButtonArea>
            </DefaultInfo>
            {(obs!=""&&order.done==false)?
                <ObsArea>
                    <p className="obs">Observações:</p>
                    <textarea disabled value={obs}/>
                </ObsArea>
                :<></>
            }
        </Container>
    )
}

const Container = styled.div<{$done:boolean}>`
    width: 80%;
    display: flex;
    flex-direction: column;
    border: 1px solid;
    border-color: ${props=>props.$done?"green":"transparent"};
    border-radius: 12px;
    gap: 20px;
    padding: 10px;
    box-shadow: 0px 2px 10px 2px rgba(209, 209, 209, 0.75);
`;

const DefaultInfo = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;

    img{
        max-width: 50px;
        max-height: 50px;
        border-radius: 10px;
        box-shadow: 0px 2px 10px 2px rgba(209, 209, 209, 0.75);
    }
`;

const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .title{
        font-weight: 700;
        font-size: 20px;
    }
`;

const DescOrder = styled.div`
    font-size: 15px;
    color: gray;
`;

const ButtonArea = styled.div`
    display: flex;
    gap: 10px;

    button{
        height: fit-content;
        border-radius: 10px;
        border-style: none;
        padding: 10px;
    }

    .cancel{
        color: red;
        background-color: rgba(255,0,0,0.6);
    }

    .done{
        color: green;
        background-color: rgba(0,255,0,0.6);
    }
`;

const ObsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .obs{
        font-weight: 700;
        font-size: 16px;
    }

    textarea{
        resize: none;
        border-radius: 10px;
        padding: 10px;
        color: black;
        background-color: white;
    }
`;