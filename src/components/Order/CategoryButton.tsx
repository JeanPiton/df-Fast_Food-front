import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";

type ButtonType = Type & {
    func: any
} 
export default function CategoryButton({id,name,image,func}:ButtonType){
    function handleClick(){
        axios.get(`${import.meta.env.VITE_APIURL}/menu?type=${id}`).then(({data}) => {
            func(data)
        }).catch(() => {
            Swal.fire({
                icon: "error",
                title: "Ocorreu um erro"
            })
        })
    }

    return(
        <Container onClick={()=>handleClick()}>
            <div>
                <img src={image}/>
            </div>
            <p>{name}</p>
        </Container>
    )
}

const Container = styled.div`
    width: 170px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    align-items: center;
    padding: 10px;
    border-radius: 12px;
    box-shadow: 0px 2px 10px 2px rgba(209, 209, 209, 0.75);

    div{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 100px;
        max-height: 100px;
    }
`;