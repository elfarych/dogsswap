<template>
  <q-layout view="hHh LpR lFf">
    <app-header />
    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="text-grey-5 text-center q-py-md">
      DogsDEX Smart Chain dApp 2022. All right reserved.
    </div>
  </q-layout>
</template>

<script>
import AppHeader from 'components/header/app-header'
export default {
  components: { AppHeader }
}
</script>
