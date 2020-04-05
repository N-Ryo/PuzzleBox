<template>
  <v-card :min-width="isTopPage ? '35vw' : '80vw'">
    <v-card-subtitle>
      <span :class="isTopPage ? 'link' : ''" @click="accessUserShow(user.id)">{{
        user.name
      }}</span>
    </v-card-subtitle>
    <v-card-text>
      <v-list v-for="(post, j) in posts" :key="post.id" class="list">
        <post-list :post="post" :index="j" :isTopPage="isTopPage" :isPostShowPage="false" @reload="$emit('reload')" />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import PostList from '~/components/organisms/post-list'

export default {
  components: {
    PostList
  },
  props: {
    user: {
      type: Object,
      default: () => ({id: 0, name: 'sample'})
    },
    posts: {
      type: Array,
      default: () => ([])
    },
    isTopPage: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    accessUserShow(id) {
      if (this.isTopPage) {
        this.$store.commit('login', this.user)
        this.$router.push({ path: `/users/${id}`, prefetch: true })
      }
    }
  }
}
</script>

<style scoped>
  .list {
    padding: 0;
  }
</style>