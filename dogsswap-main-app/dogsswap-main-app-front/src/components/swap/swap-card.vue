<template>
<div class="swap-card q-px-md">
  <div class="absolute-top-right q-pa-md">
    <q-slide-transition transition-show="">
      <q-btn
        v-if="!settingsMode"
        icon="history"
        dense
        flat
        round
        class="q-mr-xs"
        @click="showHistory"
      />
    </q-slide-transition>

    <q-btn
      dense
      flat
      round
      :icon="settingsMode ? 'close' : 'settings'"
      @click="settingsMode = !settingsMode"
    />
  </div>

  <div>
    <div class="text-center text-extra-bold q-mt-md text-h5">{{ settingsMode ? 'Settings' : 'Swap' }}</div>
  </div>

  <div v-if="settingsMode">
    <swap-settings />
  </div>
  <div v-else class="q-mt-xl">
    <swap-coins />
  </div>

</div>
</template>

<script>
import SwapSettings from 'components/swap/swap-settings'
import walletConnect from 'components/wallet/wallet-connect/wallet-connect'
import { mapState } from 'vuex'
import notifier from 'src/utils/notifier'
import SwapCoins from 'components/swap/swap-coins'
export default {
  name: 'swap-card',
  components: { SwapCoins, SwapSettings },
  computed: {
    ...mapState('wallet', ['wallet'])
  },
  data () {
    return {
      settingsMode: false
    }
  },
  methods: {
    showHistory () {
      if (this.wallet.address) {
        return notifier({ message: 'No transactions history.' })
      }
      return walletConnect()
    }
  }
}
</script>

<style lang="sass">
.swap-card
  height: 70vh
  width: 450px
  max-width: 88%
  background: rgba(39, 38, 44, 0.5)
  border-radius: 25px
  position: relative
  //box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px
</style>
