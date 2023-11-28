import Icon from "../assets/hamburger.png";
import { Container, Logo, Pages } from "../styles/NavbarStyle";
import PageOption from "./PageOption";

export default function Navbar(){

    return (
        <Container>
            <Logo>
                <img src={Icon}/>
                fastfood
            </Logo>
            <Pages>
                <PageOption name="orders">Pedidos</PageOption>
                <PageOption name="kitchen">Cozinha</PageOption>
                <PageOption name="checkout">Retirada</PageOption>
            </Pages>
        </Container>
    )
}