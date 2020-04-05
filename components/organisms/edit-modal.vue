<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">投稿</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
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
        <v-btn color="blue darken-1" text @click="dialog = false">cancel</v-btn>
        <v-btn color="blue darken-1" text @click="updatePost">Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios'
import { API_ROOT_URL, API_ROOT_PATH } from '~/constants'

export default {
  props: ['value', 'post'],
  data() {
    return {
      body: ''
    }
  },
  computed: {
    dialog: {
      get() {
        return this.value
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  },
  mounted() {
    this.body = this.post.body
  },
  methods: {
    updatePost() {
      if (this.body.length > 0) {
        const fd = new FormData
        fd.append('post[body]', this.body)
        fd.append('post[user_id]', parseInt(this.$route.params.id))
        axios.patch(`${API_ROOT_URL}/posts/${this.post.id}.json`, fd).then(response => {
          if (response.data.message === 'success') {
            this.$emit('reload')
            this.dialog = false
          }
        })
      }
    }
  }
}
</script>