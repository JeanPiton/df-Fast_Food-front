import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CategoryButton from "../components/CategoryButton";
import MenuItem from "../components/MenuItem";
import OrderList from "../components/OrderList";
import OverlayItem from "../components/OverlayItem";
import { Header, OrderArea, PageContainer, ProdArea, Search, Session, TitleArea, Welcome } from "../styles/OrdersPageStyle";

export default function OrdersPage(){
    const [types, setTypes] = useState<Type[]>([])
    const [menu, setMenu] = useState<MenuItemData[]>([])
    const [search, setSearch] = useState('')
    const [order, setOrder] = useState([])
    const [overlay, setOverlay] = useState()
    const url = import.meta.env.VITE_APIURL

    useEffect(()=>{
        Promise.all([axios.get(`${url}/type`),axios.get(`${url}/menu`)]).then((resp) => {
            const type: Type[] = resp[0].data
            const menuItems: MenuItemData[] = resp[1].data
            setTypes(type)
            setMenu(menuItems)
        }).catch(error => {
            Swal.fire({
                icon: "error",
                title: "Ocorreu um erro"
            })
            console.log(error)
        })
    },[])

    function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        axios.get(`${url}/menu?name=${search}`).then((resp) => {
            const menuItems: MenuItemData[] = resp.data
            setMenu(menuItems)
        })
    }

    return(
        <PageContainer>
            {overlay!=undefined?<OverlayItem data={overlay} typeLength={types.length} order={order} funcOverlay={setOverlay} funcOrder={setOrder}/>:<></>}
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
        </PageContainer>
    )
}