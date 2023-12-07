import { IonIcon } from "@ionic/react";
import { card, cash } from "ionicons/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";

type PaymentMethodProps = {
    name:string
    method: string
    setMethod: any
}

export default function PaymentMethod({name,method,setMethod}:PaymentMethodProps){
    const [checked,setChecked] = useState(name==method)
    
    useEffect(()=>{
        setChecked(name==method)
    },[method])

    function handleClick(){
        if(method!=name) setMethod(name)
    }

    return(
        <Container $checked={checked}>
            <Name>
                <IonIcon icon={name=='Dinheiro'?cash:card}/>
                <p>{name}</p>
            </Name>
            <CheckBox type="checkbox" onClick={()=>handleClick()} checked={checked}/>
        </Container>
    )
}

const Container = styled.div<{$checked:boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 20px;
    border: 2px solid;
    border-color: ${props=>props.$checked?'#2B5C14':'#B8B7B8'};
    border-radius: 12px;
`;

const Name = styled.div`
    display: flex;
    color: #2B5C14;
    gap: 10px;

    p{
        color: black;
    }
`;

const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 1px solid #2B5C14;
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    
    &:checked{
        background: radial-gradient(#2B5C14 50%,white 50%);
    }
`;