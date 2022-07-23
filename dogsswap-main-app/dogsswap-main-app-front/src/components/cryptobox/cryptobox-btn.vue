<template>
<div class="cryptobox-btn">

    <q-item
      v-if="wallet.address && balance > 0.05"
      clickable
      class="cryptobox-btn-item"
      @click="gameBoxHandler"
    >
      <q-item-section avatar><q-img :src="boxImage"/></q-item-section>
      <q-item-section class="text-subtitle1 text-bold" style="line-height: 1.3">
        Open cryptobox
        <small style="font-weight: 400">You have 1 box</small>
      </q-item-section>
    </q-item>

  <q-dialog v-model="gameDialog" persistent seamless>
    <game-card/>
  </q-dialog>
</div>
</template>

<script>
import { mapState } from 'vuex'
import GameCard from 'components/cryptobox/game-card'
import boxImage from 'src/assets/cryptobox.png'
export default {
  name: 'cryptobox-btn',
  components: { GameCard },
  computed: {
    ...mapState('wallet', ['wallet', 'bnbBalance']),
    balance () {
      if (!this.bnbBalance.formattedWorkBalance) return 0
      return parseFloat(this.bnbBalance.formattedWorkBalance)
    },
    boxImage () {
      return boxImage
    }
  },
  data () {
    return {
      gameDialog: false
    }
  },
  methods: {
    gameBoxHandler () {
      if (this.wallet.address) {
        this.gameDialog = true
      }
    }
  }
}
</script>

<style lang="sass">
.cryptobox-btn
  width: 450px
  max-width: 88%
  height: 50px

.cryptobox-btn-item
  background: $dark
  width: 100%
  padding: 10px
  border-radius: 18px
</style>
