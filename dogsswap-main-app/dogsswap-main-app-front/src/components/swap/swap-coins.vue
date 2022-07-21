<template>
  <div class="swap-coins">

<!--    Coin 1-->
    <div class="flex items-center justify-between">
      <q-btn class="q-px-xs" dense flat rounded no-caps>
        <q-img
          :src="coin1.logo"
          class="swap-coins-coin-logo"
          contain
        >
          <template v-slot:loading></template>
        </q-img>
        <div class="text-subtitle1 text-extra-bold q-ml-sm">{{ coin1.name }}</div>
        <!--      <q-icon name="arrow_drop_down"/>-->
      </q-btn>

      <q-btn
        label="max"
        rounded
        color="accent"
        outline
        size="sm"
      />
    </div>

    <div class="q-mt-xs">
      <q-input
        v-model="firstCoinQty"
        :label="coin1.label"
        outlined
        input-class="text-center text-extra-bold text-h6"
        type="number"
      />
    </div>

    <div class="row q-px-sm">
      <div class="col-4">
        <small>{{ firstCoinBalance }}</small>
      </div>
      <div class="col-4 text-center">

      </div>
      <div class="col-4 text-right">
        <small>~{{ usdSum }}$</small>
      </div>

    </div>

<!--    reboot-->
    <div class="text-center">
      <q-btn
        icon="import_export"
        color="primary"
        flat
        round
        style="margin-top: -1px"
        @click="tokensRestore"
      />
    </div>

<!--    Coin 2-->
    <div class="row items-center justify-between">
      <div class="col-8">
        <q-btn class="q-px-xs col-4" dense flat rounded no-caps>
          <q-img
            :src="coin2.logo"
            class="swap-coins-coin-logo"
            contain
          >
            <template v-slot:loading></template>
          </q-img>
          <div class="text-subtitle1 text-extra-bold q-ml-sm">{{ coin2.name }}</div>
          <!--      <q-icon name="arrow_drop_down"/>-->
        </q-btn>
      </div>

      <div class="col-3 text-right">
        <q-btn
          label="max"
          rounded
          color="accent"
          outline
          size="sm"
        />
      </div>

    </div>

    <div class="q-mt-xs">
      <q-input
        v-model="firstCoinQty"
        :label="coin2.label"
        outlined
        input-class="text-center text-extra-bold text-h6"
        type="number"
      />
    </div>

    <div class="row q-px-sm">
      <div class="col-4">
        <small>{{ firstCoinBalance }}</small>
      </div>
      <div class="col-4 text-center">

      </div>
      <div class="col-4 text-right">
        <small>~{{ usdSum }}$</small>
      </div>

    </div>

<!--    Swap-->
    <div class="absolute-bottom q-pa-md">
      <q-btn
        :label="wallet.address ? 'Swap' : 'Connect wallet'"
        :icon-right="wallet.address ? 'loop' : 'account_balance_wallet'"
        color="primary"
        :outline="!wallet.address"
        unelevated
        no-caps
        class="swap-button doge-font text-h6 q-py-sm full-width"
      />
    </div>
  </div>
</template>

<script>
import coins from 'components/swap/coins'
import { mapState } from 'vuex'

export default {
  name: 'swap-coins',
  computed: {
    ...mapState('wallet', ['wallet']),
    coins () {
      return coins
    }
  },
  data () {
    return {
      coin1: null,
      coin2: null,
      firstCoinQty: 1,
      firstCoinBalance: '410,306,257,565,823',
      usdSum: 155
    }
  },
  created () {
    this.coin1 = coins[0]
    this.coin2 = coins[1]
  },
  methods: {
    tokensRestore () {
      const coin1 = this.coin1
      const coin2 = this.coin2
      this.coin1 = coin2
      this.coin2 = coin1
    }
  },
  watch: {
    firstCoinQty (val) {
      if (val < 1) this.firstCoinQty = 1
    }
  }
}
</script>

<style lang="sass">
.swap-coins-coin-logo
  width: 30px
  height: 30px

.swap-button
  border-radius: 15px

.q-field--outlined .q-field__control
  border-radius: 13px !important
  padding: 0 18px !important
  height: 80px
  background: $dark !important

.q-field--dark .q-field__control:before
  border-color: rgba(255, 255, 255, 0.1)
</style>
