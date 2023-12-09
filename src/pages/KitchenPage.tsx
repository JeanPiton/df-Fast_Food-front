import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import OrderItem from "../components/Kitchen/OrderItem";
import { OrdersDiv, PageContainer, Session } from "../styles/KitchenPageStyle";

export default function KitchenPage(){
    const [todo,setTodo] = useState([]);
    const [done,setDone] = useState([]);
    const url = import.meta.env.VITE_APIURL;

    useEffect(()=>{
        Update()
    },[]);

    function Update(){
        Promise.all([axios.get(`${url}/order/todo`),axios.get(`${url}/order/done`)])
        .then((resp)=>{
            setTodo(resp[0].data)
            setDone(resp[1].data)
        }).catch(()=>{
            Swal.fire({
                icon: "error",
                title: "Ocorreu um erro"
            })
        })
    }

    return(
        <PageContainer>
            <Session>
                <p>Preparando:</p>
                <OrdersDiv>
                    {todo.map(e=><OrderItem order={e} funcUpdate={Update}/>)}
                </OrdersDiv>
            </Session>
            <hr/>
            <Session>
                <p>Pronto:</p>
                <OrdersDiv>
                    {done.map(e=><OrderItem order={e} funcUpdate={Update}/>)}
                </OrdersDiv>
            </Session>
        </PageContainer>
    )
}