import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 80px;
    bottom: 0;
    background-color: #333;
    justify-content: space-around;
    background-color: #013163;
    border-radius: 8px;
    margin-bottom: 10px;

@media (max-width: 400px) {
    position: fixed;
    width: 100%;
    border-radius: 0px;
    margin-bottom: 0px;
}
`
export const Button = styled.button`
    all: initial;
`;