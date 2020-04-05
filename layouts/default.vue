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
      fixed
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    <v-btn
      fab
      color="cyan"
      top
      right
      absolute
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">投稿</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row justify-center>
              <v-col>
                <v-select v-model="userId" :items="items"></v-select>
                <v-textarea
                  outlined
                  label="Default style"
                  v-model="body"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="cyan" text @click="dialog = false">cancel</v-btn>
          <v-btn color="cyan" text :disabled="body.length === 0" @click="createPost">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-footer>
  </v-app>
</template>

<script>
import axios from 'axios'
import { API_ROOT_URL, API_ROOT_PATH } from '~/constants'
import Particle from '~/components/for-this-repo/particle'

export default {
  components:{ Particle },
  data () {
    return {
      title: 'ぱずるぼっくす',
      dialog: false,
      body: ''
    }
  },
  computed: {
    items() {
      return this.$store.state.userList.map(user => { return {text: user.name, value: user.id}})
    },
    userId() {
      let uid = 1
      if (this.$route.path.indexOf('users') > -1) {
        uid = parseInt(this.$route.params.id)
      } else if (this.$route.path.indexOf('posts') > -1 && this.$store.state.postList.length > 0) {
        const post = this.$store.state.postList.filter(post => post.id === parseInt(this.$route.params.id))[0]
        uid = post.user_id
      }
      return uid
    }
  },
  mounted() {
    if (this.$store.state.userList.length === 0 || this.$store.state.postList.length === 0) {
      this.$store.dispatch('getUsers')
      this.$store.dispatch('getPosts')
    }
  },
  methods: {
    createPost() {
      if (this.body.length > 0) {
        const fd = new FormData
        fd.append('post[body]', this.body)
        fd.append('post[user_id]', this.userId)
        axios.post(`${API_ROOT_URL}/posts.json`, fd).then(response => {
          if (response.data.message === 'success') {
            this.dialog = false
          }
        })
      }
    }
  }
}
</script>
