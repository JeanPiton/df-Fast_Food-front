import { IonIcon } from "@ionic/react";
import { closeSharp } from "ionicons/icons";
import styled from "styled-components";
import finishOrder from "../assets/finishOrder.png";
import { Overlay } from "../styles/OverlayItemStyle";

export default function OverlayFinish(){

    function handleClose(){
        window.location.reload()
    }

    return(
        <Overlay>
            <PageContainer>
                <div>
                    <IonIcon icon={closeSharp} size="large" onClick={()=>handleClose()}/>
                </div>
                <img src={finishOrder}/>
                <p className="title">Pedido finalizado com sucesso!</p>
                <p>O pedido foi encaminhado para a cozinha</p>
            </PageContainer>
        </Overlay>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    align-items: center;
    padding: 20px;
    gap: 10px;
    background-color: white;
    border-radius: 12px;

    div{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        color: #9F9F9F;
    }

    p{

    }

    .title{
        font-weight: 700;
        font-size: 22px;
    }
`;