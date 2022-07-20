<template>
<div class="wallet-connect-header-btn">
  <q-btn
    :label="$mobile ? '' : 'Connect wallet'"
    no-caps
    color="primary"
    unelevated
    :padding="$mobile ? '8px' : ''"
    :class="$mobile ? '' : 'q-py-xs'"
    class="text-subtitle1 text-extra-bold roundex-xl"
    icon-right="account_balance_wallet"
  />
</div>
</template>

<script>
export default {
  name: 'wallet-connect-header-btn'
}
</script>

<style scoped>

</style>
