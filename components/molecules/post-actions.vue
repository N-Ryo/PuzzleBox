<template>
  <v-list-item-action>
    <edit-modal v-model="editModal" :post="post" @reload="$emit('reload')" />
    <delete-modal v-model="deleteModal" :postId="post.id" @reload="$emit('reload')" />
  </v-list-item-action>
</template>

<script>
import EditModal from '../organisms/edit-modal'
import DeleteModal from '../organisms/delete-modal'
export default {
  components: { EditModal, DeleteModal },
  props: [ 'post' ],
  data() {
    return {
      editModal: false,
      deleteModal: false
    }
  }
}
</script>