import { useState } from "react"
import styled from "styled-components"

type ExtraObj = {
    id: number
    name: string
    image: string
    desc: string
    price: number
}

type ExtraItem = {
    data: ExtraObj,
    extraList: ExtraObj[],
    func: any
}

export default function ExtraItem({data,extraList,func}:ExtraItem){
    const [value,setValue] = useState(false)
    const updateList = [...extraList]

    function handleClick(){
        if(!value){
            updateList.push(data)
        }else{
            const remove = updateList.findIndex((obj)=>obj.id===data.id)
            updateList.splice(remove,1)
        }
        func(updateList)
    }

    return(
        <ExtraDiv>
            <ProdInfo>
                <img src={data.image}/>
                <div>
                    <p className="name">{data.name}</p>
                    <p className="desc">{data.desc}</p>
                </div>
            </ProdInfo>
            <ProdPrice>
                <p>R${data.price.toFixed(2)}</p>
                <CheckBox type="checkbox" onClick={()=>handleClick()} checked={value} onChange={()=>setValue(!value)}/>
            </ProdPrice>
        </ExtraDiv>
    )
}

const ExtraDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProdInfo = styled.div`
    display: flex;
    gap: 20px;
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 12px;
        box-shadow: 0px 2px 10px 2px rgba(209, 209, 209, 0.75);
    }
    .name{
        margin-top: 10px;
        font-weight: 900;

    }
    .desc{
        font-size: 12px;
    }
`;

const ProdPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
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