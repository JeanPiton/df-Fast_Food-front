import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

type Option = {
    name: string
}

type Selected = Option & {
    selected: string
}

export default function PageOption({name,children}:React.PropsWithChildren<Option>){
    const nav = useNavigate()
    const path = useLocation()
    const selected = path.pathname.slice(1)

    function handleClick(){
        nav(name)
        console.log(path.pathname.slice(1))
    }

    return(
        <Container selected={selected} name={name} onClick={()=>handleClick()}>
            {children}
        </Container>
    )
}

const Container = styled.div<Selected>`
    width: fit-content;
    display: flex;
    color: white;
    border-radius: 10px;
    font-weight: 700;

    padding: 10px 15px;
    background-color: ${({selected,name})=>selected==name?"#1C400E":"none"};
`;