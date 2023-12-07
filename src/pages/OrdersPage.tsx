import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CategoryButton from "../components/Order/CategoryButton";
import MenuItem from "../components/Order/MenuItem";
import OrderList from "../components/Order/OrderList";
import OverlayItem from "../components/Order/OverlayItem";
import PaymentPage from "../components/Order/PaymentPage";
import { ButtonArea, Header, OrderArea, PageContainer, ProdArea, Search, Session, TitleArea, Welcome } from "../styles/OrdersPageStyle";

export default function OrdersPage(){
    const [types, setTypes] = useState<Type[]>([])
    const [menu, setMenu] = useState<MenuItemData[]>([])
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState([])
    const [overlay, setOverlay] = useState()
    const [payment, setPayment] = useState(false)
    const url = import.meta.env.VITE_APIURL

    useEffect(()=>{
        Promise.all([axios.get(`${url}/type`),axios.get(`${url}/menu`)]).then((resp) => {
            const type: Type[] = resp[0].data
            const menuItems: MenuItemData[] = resp[1].data
            setTypes(type)
            setMenu(menuItems)
        }).catch(() => {
            Swal.fire({
                icon: "error",
                title: "Ocorreu um erro"
            })
        })
    },[])

    function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        axios.get(`${url}/menu?name=${search}`).then((resp) => {
            const menuItems: MenuItemData[] = resp.data
            setMenu(menuItems)
        })
    }

    function handleCancel(){
        window.location.reload()
    }

    function handleFinish(){
        setPayment(true)
    }

    return(
        <PageContainer>
            {!payment?<>
                {overlay!=undefined?<OverlayItem data={overlay} typeLength={types.length} order={order} funcOverlay={setOverlay} funcOrder={setOrder} funcFinish={setPayment}/>:<></>}
                <Header>
                    <Welcome>
                        Seja bem vindo!
                    </Welcome>
                    <Search onSubmit={handleSubmit}>
                        <input type="text" placeholder="O que você procura?" value={search} onChange={e=>setSearch(e.target.value)}/>
                    </Search>
                </Header>
                <Session>
                    <TitleArea>
                        <p className="Title">
                            Categorias
                        </p>
                        <p className="SubTitle">
                            Navegue por categoria
                        </p>    
                    </TitleArea>
                    <ProdArea>
                        {types.map(e=><CategoryButton key={e.id} id={e.id} name={e.name} image={e.image} func={setMenu}/>)}
                    </ProdArea>
                </Session>
                <Session>
                    <TitleArea>
                        <p className="Title">
                            Produtos
                        </p>
                        <p className="SubTitle">
                            Selecione um produto para adicionar ao seu pedido
                        </p>    
                    </TitleArea>
                    <ProdArea>
                        {menu.map(e=><MenuItem key={e.id} data={e} typeLength={types.length} func={setOverlay}/>)}
                    </ProdArea>
                </Session>
                {order.length!=0?
                    <OrderArea>
                        <OrderList order={order}/>
                    </OrderArea>
                :<></>
            }
            <ButtonArea>
                <button className="cancel" disabled={order.length===0} onClick={()=>handleCancel()}>Cancelar</button>
                <button className="finish" disabled={order.length===0} onClick={()=>handleFinish()}>Finalizar pedido</button>
            </ButtonArea>
            </>:
            <PaymentPage orders={order} cancel={setPayment}/>
        }
        </PageContainer>
    )
}