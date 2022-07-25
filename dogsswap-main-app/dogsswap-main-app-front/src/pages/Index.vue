<template>
  <q-page class="flex flex-center column">
    <div class="flex justify-center" style="margin-top: 120px">
      <chart v-if="!$mobile"/>
      <swap-card :class="!$mobile ? 'q-ml-lg' : ''"/>
    </div>

    <cryptobox-btn class="q-mt-xl"/>
  </q-page>
</template>

<script>
import SwapCard from 'components/swap/swap-card'
import CryptoboxBtn from 'components/cryptobox/cryptobox-btn'
import Chart from 'components/chart/chart'
import { mapState } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapState('wallet', ['defaultSwapCoin'])
  },
  components: { Chart, CryptoboxBtn, SwapCard },
  created () {
    if (!this.defaultSwapCoin) {
      this.$router.replace({
        query: {
          ...this.$route.query,
          s: 'DOGS-BUSD'
        }
      })
    }
  }
}
</script>
