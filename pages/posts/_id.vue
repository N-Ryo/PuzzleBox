<template>
  <v-container max-width="80vw">
    <v-col justify-center>
      <v-card>
        <v-card-subtitle v-if="!!user">
          <span class="link" @click="accessUserShow(user.id)">{{
            user.name
          }}</span>
        </v-card-subtitle>
        <v-card-text v-if="!!post">
          <v-list class="list">
            <post-list :post="post" :index="0" :isTopPage="false" :isPostShowPage="true" />
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import axios from 'axios'
import { API_ROOT_URL } from '~/constants'
import PostList from '~/components/organisms/post-list'

export default {
  validate ({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id)
  },
  components: {
    PostList
  },
  data() {
    return {
      postId: 0,
      user: undefined,
      post: undefined
    }
  },
  mounted() {
    this.postId = this.$route.params.id
    axios.get(`${API_ROOT_URL}/posts/${this.postId}.json`).then(response => {
      this.user = response.data.user
      this.post = response.data.post
    })
  },
  methods: {
    accessUserShow(id) {
      // this.$store.commit('login', this.user) ログイン制限かけたときに使う？
      this.$router.push({ path: `/users/${id}`, prefetch: true })
    }
  }

}
</script>
