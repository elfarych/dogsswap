export default function () {
  return {
    busdBalance: null,
    usdcBalance: null,
    usdtBalance: null,
    provider: null,
    swapLoading: false,
    dogeBalance: null,
    dogsBalance: 3500,
    dogsPrice: 0.07,
    wallet: {
      address: null,
      chainId: null,
      balance: null,
      coinName: '',
      btmtBalance: null
    },
    dbWallet: null,

    bnbBalance: {
      rawBalance: null,
      balance: null,
      workBalance: null,
      formattedWorkBalance: null
    }
  }
}
