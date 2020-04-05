<template>
  <v-dialog v-model="dialog" :max-width="options.width" @keydown.esc="cancel">
    <template  v-slot:activator="{ on }">
      <v-btn icon color="error" v-on="on">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark :color="options.color" dense>
        <v-toolbar-title class="white--text">{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text v-show="!!message">{{ message }}</v-card-text>
      <v-card-actions class="pt-0">
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" @click.native="agree">Yes</v-btn>
        <v-btn color="grey" @click.native="dialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import axios from 'axios'
import { API_ROOT_URL } from '~/constants'

  export default {
    props: ['value', 'postId'],
    data: () => ({
      message: 'Are you sure?',
      title: 'Delete',
      options: {
        color: 'error',
        width: 290
      }
    }),
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
    methods: {
      agree() {
        axios.delete(`${API_ROOT_URL}/posts/${this.postId}.json`).then(response => {
          if (response.data.message === 'success'){
            this.$emit('reload')
            this.dialog = false
          }
        })
      }
    }
  }
</script>