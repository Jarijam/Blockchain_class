const carFactoryAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_owner","type":"address"}],"outputs":[]},{"name":"getAddress","inputs":[{"name":"_accountAddress","type":"address"}],"outputs":[{"name":"value0","type":"address"}]},{"name":"sendOffer","inputs":[{"name":"offer","type":"string"},{"name":"_destAddress","type":"address"}],"outputs":[]},{"name":"workerAcceptOffer","inputs":[],"outputs":[]},{"name":"owner","inputs":[],"outputs":[{"name":"owner","type":"address"}]},{"name":"factoryAddress","inputs":[],"outputs":[{"name":"factoryAddress","type":"address"}]}],"data":[{"key":1,"name":"workerContractCode","type":"cell"}],"events":[{"name":"AddressReturn","inputs":[{"name":"userAddress","type":"address"}],"outputs":[]},{"name":"SendingOffer","inputs":[{"name":"msg","type":"string"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"owner","type":"address"},{"name":"factoryAddress","type":"address"},{"name":"workerContractCode","type":"cell"}]} as const
const workersAbi = {"ABIversion":2,"version":"2.2","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[],"outputs":[]},{"name":"receiveOffer","inputs":[{"name":"_offer","type":"string"}],"outputs":[]}],"data":[{"key":1,"name":"factoryAddress","type":"address"},{"key":2,"name":"owner","type":"address"}],"events":[{"name":"OfferFromFactory","inputs":[{"name":"offer","type":"string"}],"outputs":[]}],"fields":[{"name":"_pubkey","type":"uint256"},{"name":"_timestamp","type":"uint64"},{"name":"_constructorFlag","type":"bool"},{"name":"factoryAddress","type":"address"},{"name":"owner","type":"address"},{"name":"offer","type":"string"}]} as const

export const factorySource = {
    CarFactory: carFactoryAbi,
    Workers: workersAbi
} as const

export type FactorySource = typeof factorySource
export type CarFactoryAbi = typeof carFactoryAbi
export type WorkersAbi = typeof workersAbi
