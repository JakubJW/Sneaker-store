<template>
  <v-app class="grey lighten-4">
    <v-content class="mx-4 mb-4">
      <NavbarItemVue />
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import NavbarItemVue from './components/NavbarItem.vue'

export default {
  name: 'App',
  components: { NavbarItemVue },
  data() {
    
  }
}
</script>
