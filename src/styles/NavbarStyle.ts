import styled from "styled-components";

export const Container = styled.div`
    width: 100dvw;
    display: flex;
    justify-content: space-between;
    padding: 5px 30px;
    background-color: #2B5C14;
    box-sizing: border-box;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-weight: 900;
    font-size: 20px;
    gap: 10px;

    img{
        width: 50px;
    }
`;

export const Pages = styled.div`
    display: flex;
`;