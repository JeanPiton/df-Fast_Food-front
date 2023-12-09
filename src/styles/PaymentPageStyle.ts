import styled from "styled-components";
import { ButtonArea } from "./OrdersPageStyle";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleArea = styled.div`
    display: flex;
    align-items: center;
    color: #2B5C14;
    gap: 10px;

    p{
        color: black;
        font-weight: 900;
        font-size: 30px;
    }
`;

export const InfoArea = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10%;
    margin: 20px 0px;
`;

export const Session = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;
    >p{
        font-weight: 700;
    }
`;

export const InputArea = styled.div`
    display: flex;
    gap: 20px;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    flex-grow: 5;

    &.code{
       flex-grow : 1;
    }

    input{
        border-style: none;
        border-radius: 6px;
        padding: 10px 12px;
        background-color: #F4F4F4;
        color: black;
        font-weight: 700;
    }
`;

export const PaymentButtonArea = styled(ButtonArea)`

`;