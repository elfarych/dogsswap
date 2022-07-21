<template>
<div class="app-header">
  <div class="flex justify-between q-pa-sm items-center">
    <div class="flex items-center">
      <h1 class="doge-font text-h4 text-white-shadow" >{{ siteTitle }}</h1>
    </div>

    <app-header-menu v-if="!$mobile"/>
    <wallet-connect-header-btn />
  </div>
</div>
</template>

<script>
import dogeLogo from 'src/assets/doge2.png'
import { mapState } from 'vuex'
import WalletConnectHeaderBtn from 'components/wallet/wallet-connect/wallet-connect-header-btn'
import AppHeaderMenu from 'components/header/app-header-menu'
export default {
  name: 'app-header',
  components: { AppHeaderMenu, WalletConnectHeaderBtn },
  computed: {
    ...mapState('settings', ['siteTitle']),
    dogeLogo () {
      return dogeLogo
    }
  }
}
</script>

<style lang="sass">
.app-header
  position: fixed
  height: 70px
  top: 0
  left: 0
  right: 0
  z-index: 10
</style>
