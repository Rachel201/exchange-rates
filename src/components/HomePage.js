import { useState } from 'react';
import { Chart } from './PieChart';
import { useDispatch, useSelector } from "react-redux";
import { getExchangeRates } from '../store/actions/exchangeRatesAction';
import styled from 'styled-components';

const Wrapper = styled.div`
    top:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top:20px;

`;

const Text = styled.div`
    padding: 20px 0 5px 0; 
    font-weight: bold;
    font-size:20px;
    border-radius: 5px;
    border-color:rgba(224, 16, 16, 0.2)
`;
const Button = styled.button`
    flex-grow: 1;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    color: #e01010;
    font-size: 16px;
    background: #ffffff;
    max-weight: 16px;
    padding: 10px 20px 10px 20px;
    border: solid #e01010 1px;
    text-decoration: none;
    &:hover {
        background-color: rgba(224, 16, 16, 0.2)
    }
    :disabled{
     background:  #fff;
     color: #ccc;
     cursor: no-drop;
    }
`;
export const HomePage = () => {
    const dispatch = useDispatch()
    const [pieChart, setPieChart] = useState(false);
    const { exchangeRatesILS } = useSelector(({ exchangeRatesReducer }) => exchangeRatesReducer)

    const handleClick = () => {
        setPieChart(true);
        dispatch(getExchangeRates())
        setTimeout(() => setPieChart(false), 5000);
    }

    return (
        <Wrapper>
            <Button className="" onClick={handleClick} disabled={pieChart} >Click Me</Button>
            <Text>{exchangeRatesILS}</Text>
            {pieChart ? <Chart /> : null}
        </Wrapper>
    );
}