import styled from "styled-components";

type OrderItemProps = {
    qtd:number
    name:string
    itemTotalPrice:number
}

export default function OrderItem({qtd,name,itemTotalPrice}:OrderItemProps){
    return(
        <Item>
            <p>
                {qtd}x {name}
            </p>
            <p>
                R$ {itemTotalPrice}
            </p>
        </Item>
    )
}

const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;