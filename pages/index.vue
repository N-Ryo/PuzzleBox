<template>
  <v-col
    justify="center"
    align="center"
    xs12
    sm8
    md6
  >
    <welcome />
    <v-row justify="space-around">
      <post-card v-for="(user, i) in users" :key="i" :user="user" :posts="posts[i]" />
    </v-row>
  </v-col>
</template>

<script>
import { API_ROOT_URL } from '~/constants'
import Welcome from '~/components/for-this-repo/welcome'
import PostCard from '~/components/organisms/post-card'


export default {
  components: {
    Welcome,
    PostCard
  },
  computed: {
    users() {
      return this.$store.state.userList
    },
    posts() {
      return this.$store.state.userPostList
    }
  }
}
</script>
