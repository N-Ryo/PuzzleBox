<template>
  <v-col
    justify="center"
    align="center"
    xs12
    sm8
    md6
  >
    <v-row justify="space-around" v-if="!!user">
      <post-card :user="user" :posts="posts" :isTopPage="false" @reload="getUserPosts" />
    </v-row>
  </v-col>
</template>

<script>
import axios from 'axios'
import { API_ROOT_URL } from '~/constants'
import PostCard from '~/components/organisms/post-card'

export default {
  validate ({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  },
  components: { PostCard },
  data() {
    return {
      userId: 0,
      user: undefined
    }
  },
  mounted() {
    this.userId = this.$route.params.id
    this.getUserPosts()
  },
  methods: {
    getUserPosts() {
      axios.get(`${API_ROOT_URL}/users/${this.userId}.json`).then(response => {
        this.user = response.data.user
        this.posts = response.data.posts
      })
    }
  }
}
</script>
