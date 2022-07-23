<template>
  <q-page class="flex flex-center column">
    <swap-card style="margin-top: 100px"/>

    <cryptobox-btn class="q-mt-xl"/>
  </q-page>
</template>

<script>
import SwapCard from 'components/swap/swap-card'
import CryptoboxBtn from 'components/cryptobox/cryptobox-btn'
export default {
  name: 'PageIndex',
  components: { CryptoboxBtn, SwapCard }
}
</script>
