<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <router-link to="/">
        <v-toolbar-title v-text="title" />
      </router-link>
    </v-app-bar>
    <v-content>
      <particle />
      <nuxt />
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Particle from '~/components/for-this-repo/particle'
export default {
  components:{ Particle },
  data () {
    return {
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-alpha-m-box-outline',
          title: 'Molecules',
          to: '/molecules'
        },
        {
          icon: 'mdi-alpha-m-box-outline',
          title: 'Organisms',
          to: '/organisms'
        }
      ],
      title: 'ぱずるぼっくす'
    }
  }
}
</script>
