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
      ...mapActions(['fetchStores'])
    }
  }
</script>

<template lang="pug">
  div
    div(v-if="stores.length")
      h1 Stores
      div.stores-list
        div.store(v-for="store in stores")
          store(:data="store" key="store._id")
</template>

<style>
.stores-list {
  flex-wrap: wrap;
}

.store {
  margin: 30px;
}
</style>