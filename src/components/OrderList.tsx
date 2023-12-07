import { useEffect, useState } from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";

type OrderListProps = {
    order:any
    item?:any
}

export default function OrderList({order,item}:OrderListProps){
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        let newTotal = order.reduce((sum:number,value:any)=>sum+value.itemTotalPrice,0)
        if(item!=undefined) newTotal+=item.itemTotalPrice
        setTotal(newTotal)
    },[order.length,item!=undefined?item.itemTotalPrice:""])

    return(
        <Container>
            <List>
                {item!=undefined?<OrderItem qtd={item.qtd} name={item.name} itemTotalPrice={item.itemTotalPrice.toFixed(2)}/>:<></>}
                {order.map((e:any)=><OrderItem qtd={e.qtd} name={e.name} itemTotalPrice={e.itemTotalPrice.toFixed(2)}/>)}
            </List>
            <Result>
                <p className="title">Resultado do pedido</p>
                <p className="result">R$ {total.toFixed(2)}</p>
            </Result>
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid #9F9F9F;
    border-radius: 5px;
    padding: 40px 40px 20px;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0px;
`;

const Result = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px dashed #9F9F9F;
    padding-top: 10px;

    .result{
        font-weight: 900;
        font-size: 30px;
    }
`;