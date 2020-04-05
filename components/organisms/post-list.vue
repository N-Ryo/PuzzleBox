<template>
  <section>
    <v-divider v-if="index !== 0"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <span :class="!isPostShowPage ? 'link' : ''" @click="accessPostShow(post.id)">{{
            post.body
          }}</span>
        </v-list-item-title>
      </v-list-item-content>
      <post-actions v-if="!isTopPage" :post="post" @reload="$emit('reload')" />
    </v-list-item>
  </section>
</template>

<script>
import PostActions from '~/components/molecules/post-actions'
export default {
  components: {
    PostActions
  },
  props: {
    post: {
      type: Object,
      default: () => ({body: ''})
    },
    index: {
      type: Number,
      default: 0
    },
    isTopPage: {
      type: Boolean,
      default: true
    },
    isPostShowPage: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    accessPostShow(id) {
      if (!this.isPostShowPage) {
        // this.$store.commit('login', this.user) ログイン制限かけたときに使う？
        this.$router.push({ path: `/posts/${id}`, prefetch: true })
      }
    }
  }
}
</script>