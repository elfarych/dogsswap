<template>
  <q-layout view="hHh LpR lFf">
    <app-header />
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import AppHeader from 'components/header/app-header'
export default {
  components: { AppHeader }
}
</script>
