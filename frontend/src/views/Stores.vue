<script>
  import { mapActions, mapState } from 'vuex';
  import Store from '@/components/Store.vue';

  export default {
    name: 'stores',
    created() {
      this.fetchStores();
    },
    components: {
      Store
    },
    computed: {
      ...mapState({
        stores: state => state.stores.data,

      })
    },
    methods: {
      ...mapActions(['fetchStores', 'createStore', 'deleteStore']),
      delStore: function(storeId) {
        this.deleteStore(storeId)
        this.$router.go()
      }
    }
  }
</script>

<template lang="pug">
  div
    div(v-if="stores.length")
      h1 Stores
      p We have #{stores} stores
      button(@click="createStore") Add Store
      div.stores-list
        div.store(v-for="store in stores")
          store(:data="store" key="store._id")
          button(@click="delStore(store._id)") Delete Store
</template>

<style>
.stores-list {
  flex-wrap: wrap;
}

.store {
  margin: 30px;
}
</style>