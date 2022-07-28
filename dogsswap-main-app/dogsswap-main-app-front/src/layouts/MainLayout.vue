<template>
  <q-layout view="hHh LpR lFf">
    <app-header />

    <q-scroll-area
      style="margin-top: 60px; height: calc(100vh - 60px)"
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
    >
      <q-page-container>
        <router-view />
      </q-page-container>

      <div class="text-grey-5 text-center q-py-md q-mt-xl">
        DogsDEX Smart Chain dApp 2022. All right reserved.
      </div>
    </q-scroll-area>

  </q-layout>
</template>

<script>
import AppHeader from 'components/header/app-header'
export default {
  components: { AppHeader },
  data () {
    return {
      thumbStyle: {
        display: 'none'
      },

      barStyle: {
        display: 'none'
      }
    }
  }
}
</script>
