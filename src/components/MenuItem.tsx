import { IonIcon } from "@ionic/react";
import { checkmarkSharp } from "ionicons/icons";
import { useState } from "react";
import styled from "styled-components";
import backImage from "../assets/food_background.jpg";

type MenuItem = {
    data: MenuItemData,
    typeLength: number,
    model?: boolean,
    func?: any
}
type TypeColor = {
    $color: number
}

export default function MenuItem({data,typeLength,model=false,func}:MenuItem){
    const [selected, setSelected] = useState(false);

    function handleClick(){
        if(model) return;
        setSelected(true);
        func({...data,cancel:setSelected})
    }

    return(
        <Anchor>
        {
            selected?
                <Overlay>
                    <IonIcon icon={checkmarkSharp} size="large"/>
                </Overlay>
            :''
        }
        <Container $color={data.typeId%typeLength} onClick={()=>handleClick()}>
            <img src={data.image}/>
            <div className="Prod">
                {model?<></>:<>
                    <Info>
                        <p className="Name">{data.name}</p>
                        <p className="Desc">{data.sdesc}</p>
                    </Info>
                    <Price>
                        {`R$${data.price.toFixed(2)}`}
                    </Price>
                </>}
            </div>
        </Container>
        </Anchor>
    )
}

const colors = ['0, 255, 0, 0.65','255, 0, 0, 0.65', '255, 255, 0, 0.65', '0, 0, 255, 0.65']

const Anchor = styled.div`
    position: relative;
`;

const Container = styled.div<TypeColor>`
    //height: 250px;
    height: 100%;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: linear-gradient(0deg, rgba(${({$color})=>colors[$color]}), rgba(${({$color})=>colors[$color]})), url(${backImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300%;
    background-color: red;
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px 2px rgba(209, 209, 209, 0.75);

    img{
        max-height: 80px;
        max-width: 90%;
        width: fit-content;
        position: relative;
        left: 50%;
        top: 0;
        transform: translate(-50%, 25px)
    }

    .Prod{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: inherit;
        //height: 70%;
        //margin-top: -10%;
        padding-top: 30%;
        padding-bottom: 10%;
        background-color: white;
        border-radius: 15px;
        box-sizing: border-box;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .Name{
        font-weight: 700;
        font-size: 16px;
    }
    .Desc{
        font-size: 10px;
    }
`;

const Price = styled.p`
    font-weight: 700;
    font-size: 17px;
    margin-top: 30px;
`;

const Overlay = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 15px;
    background-color: rgba(0, 200, 0, 0.6);
    align-items: center;
    justify-content: center;
    
    color: white;
`;