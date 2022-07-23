<template>
<div class="app-header">
  <div class="row q-pa-sm items-center">
    <div class="col-6 col-md-4">
      <div class="flex items-center">
        <h1 class="doge-font text-h4 text-white-shadow" >{{ siteTitle }}</h1>
      </div>
    </div>

    <div v-if="!$mobile" class="col-4 text-center">
      <app-header-menu />
    </div>

    <div class="col-6 col-md-4">
      <div class="flex items-center justify-end">
        <bnb-widget class="q-mr-md"/>
        <wallet-connect-header-btn />
      </div>
    </div>

  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import WalletConnectHeaderBtn from 'components/wallet/wallet-connect/wallet-connect-header-btn'
import AppHeaderMenu from 'components/header/app-header-menu'
import BnbWidget from 'components/header/bnb-widget'
export default {
  name: 'app-header',
  components: { BnbWidget, AppHeaderMenu, WalletConnectHeaderBtn },
  computed: {
    ...mapState('settings', ['siteTitle'])
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
