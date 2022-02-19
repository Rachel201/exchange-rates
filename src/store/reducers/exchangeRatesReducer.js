const initialState = {
    exchangeRates: ""
}

export default function (state = initialState, action) {
    if (action.type == "EXCHANGE_RATE_ILS") {
        console.log("exchangeRates", action.value)
        return {
            ...state,
            exchangeRatesILS: action.value,
        }
    }
    else {
        return { ...state };
    }
}