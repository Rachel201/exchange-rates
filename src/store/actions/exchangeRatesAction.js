import axios from 'axios';

const basicUrl = "https://api.coingecko.com/api/v3/exchange_rates"

export const getExchangeRates = () => async (dispatch) => {
    axios.get(basicUrl)
        .then((res) => {
            console.log('res.data?.rate?.ils', res.data?.rates?.ils?.value);
            dispatch({
                type: 'EXCHANGE_RATE_ILS',
                value: res.data?.rates?.ils.value
            })
        })
        .catch((err) => {
            console.log(err);
        })
}
