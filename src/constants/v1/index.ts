import { Interface } from '@ethersproject/abi'
import { ChainId } from '@pancakeswap-libs/sdk'
import V1_EXCHANGE_ABI from './v1_exchange.json'
import V1_FACTORY_ABI from './v1_factory.json'

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x48e15ABBcb21C7f564c1B5Ae08A9f7829745F6D7', //TODO
  [ChainId.BSCTESTNET]: '0x10ED43C718714eb63d5aA57B78B54704E256024E'
}

const V2_FACTORY_INTERFACE = new Interface(V2_FACTORY_ABI)
const V1_EXCHANGE_INTERFACE = new Interface(V2_EXCHANGE_ABI)

export { V1_FACTORY_ADDRESSES, V1_FACTORY_INTERFACE, V1_FACTORY_ABI, V1_EXCHANGE_INTERFACE, V1_EXCHANGE_ABI }
