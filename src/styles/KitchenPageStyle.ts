import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    padding: 20px 50px;

    hr{
        height: 100dvh;
        border: 1px solid grey;
        margin: 0px 20px;
    }
`;

export const Session = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;

    p{
        font-weight: 700;
        font-size: 30px;
    }
`;

export const OrdersDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;