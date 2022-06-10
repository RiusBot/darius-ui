export const loadDefaultOrderOptions = (channel) => {
    if (["CTA"].includes(channel))
        return {"test": false, "duplicate": false}
    else
        return {test: false, duplicate: true};
}

export const loadDefaultConfigSettings = (channel) => {
    return {
        hyperopt: true,
        target: 'FUTURE',
        orderType: 'MARKET',
        stopLossType: 'MARKET',
        takeProfitType: 'MARKET',
        quantity: 30,
        leverage: 1,
        margin: 0,
        volume: 0,
        stopLoss: 0,
        takeProfit: 0
    }
}

export const lazyModeRequiredInput = [
    'api', 'target', 'quantity'
]