export const loadDefaultOrderOptions = (channel) => {
    if (["CTA"].includes(channel))
        return {test: false, duplicate: false}
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
        takeProfit: 0,
        quote: null
    }
}

export const lazyModeRequiredInput = [
    'api', 'target', 'quantity'
]

export const exchangeQuoteSupport = {
    'okx': ["USDT"],
    'ftx': ["USDT", "USD"],
    'binance': ["BUSD", "USDT", "USDC"],
    'default': {
        'okx': 'USDT',
        'binance': 'USDT',
        'ftx': 'USD'
    }
}
