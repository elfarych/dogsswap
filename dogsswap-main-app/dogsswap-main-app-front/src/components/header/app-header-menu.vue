<template>
<div class="app-header-menu flex items-center justify-center ">
  <q-item
    class="text-subtitle2 text-bold rounded-xl"
    clickable
    to="/?s=DOGS-BUSD"
  >
    <q-item-section>Trade</q-item-section>
  </q-item>

  <q-item
    class="text-subtitle2 text-bold rounded-xl"
    clickable
    @click="notif('Earn')"
  >
    <q-item-section>Earn</q-item-section>
  </q-item>

  <q-item
    class="text-subtitle2 text-bold rounded-xl"
    clickable
    to="/farm"
  >
    <q-item-section>Farm</q-item-section>
  </q-item>

</div>
</template>

<script>
import notifier from 'src/utils/notifier'
export default {
  name: 'app-header-menu',
  methods: {
    notif (val) {
      notifier({
        message: `${val} is coming sun.`,
        color: 'accent'
      })
    }
  }
}
</script>

<style scoped>

</style>
