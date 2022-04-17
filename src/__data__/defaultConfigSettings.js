export const defaultConfigSettings = {
    hyperopt: true,
    target: 'MARKET', 
    orderType: 'MARKET', 
    stopLossType: 'MARKET',
    takeProfitType: 'MARKET',
    quantity: 30, 
    leverage: 1,
    margin: 0, 
    volume: 0
}

export const lazyModeRequiredInput = [
    'api', 'target', 'quantity'
]