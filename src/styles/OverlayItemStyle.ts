import styled from "styled-components";

export const Overlay = styled.div`
    display: flex;
    position: fixed;
    z-index: 5;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    padding-top: 50px;
    background-color: rgba(0,0,0,0.9);
    overflow-y: scroll !important;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const PageContainer = styled.div`
    height: fit-content;
    min-width: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: 40px;
    padding-bottom: 20px;
    margin-bottom: 50px;
`;

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    color: #9F9F9F;
    margin-bottom: 10px;

    p{
        color: black;
        font-size: 30px;
        font-weight: 700;
    }
`;

export const ProdDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const DescDiv = styled.div`
    width: 33%;
    display: flex;
    flex-direction: column;
    word-wrap: normal;
    gap: 10px;

    .Name{
        font-weight: 700;
        font-size: 20px;
    }
    .Desc{

    }
`;

export const PriceDiv = styled.div`
    display: flex;
    width: 33%;
    justify-content: flex-end;
`;

export const QuantityRegulator = styled.div`
    display: flex;
    align-items: center;
    color: #2B5C14;
    input{
        display: flex;
        width: 80px;
        height: 24px;
        text-align: center;
        color: black;
        border-color: #2B5C14;
        border-style: solid;
        border-radius: 50px;
        margin: 0px -28px;
    }
`;

export const ExtraDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    gap: 10px;

    .Title{
        font-weight: 900;
        font-size: 20px;
    }
`;

export const ObservationDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    gap: 10px;

    .Title{
        font-weight: 900;
        font-size: 20px;
    }
    textarea{
        width: 100%;
        min-height: fit-content;
        padding: 20px;
        background-color: #F4F4F4;
        border-style: none;
        border-radius: 12px;
        box-sizing: border-box;

        ::placeholder{
            color: #9F9F9F;
        }
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-top: 20px;

    button{
        padding: 10px 30px;
        border-style: solid;
        border-radius: 12px;
        border-color: #2B5C14;
    }
    .continue{
        color: #2B5C14;
        background-color: white;
    }
    .add{
        color: white;
        background-color: #2B5C14;
    }
`;