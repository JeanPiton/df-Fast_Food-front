import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 30px 100px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    gap: 10px;
`;

export const Welcome = styled.p`
    font-weight: 700;
    font-size: 30px;
`;

export const Search = styled.form`
    input{
        width: 300px;
        border: none;
        border-radius: 10px;
        background-color: #F4F4F4;
        padding: 10px;
    }
`;

export const Session = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 20px 0px;
    .Title{
        font-size: 20px;
        font-weight: 700;
    }
    .SubTitle{

    }
`;

export const ProdArea = styled.div`
    display: flex;
    //justify-content: space-between;
    flex-wrap: wrap;
    gap: 10%;
    row-gap: 40px;
`;

export const OrderArea = styled.div`
    margin-top: 20px;
`;

export const ButtonArea = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 20px;

    button{
        padding: 10px 60px;
        border-style: solid;
        border-radius: 12px;
        border-color: #2B5C14;
        font-weight: 900;
        font-size: 20px;
    }
    button:disabled{
        border-color: #adadad;
    }
    .cancel{
        color: #2B5C14;
        background-color: white;
    }
    .cancel:disabled{
        color: #adadad;
    }
    .finish{
        color: white;
        background-color: #2B5C14;
    }
    .finish:disabled{
        background-color: #adadad;
    }
`;