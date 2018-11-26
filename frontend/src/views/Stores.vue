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
    method: {
      ...mapActions(['fetchStores'])
    }
  }
</script>

<template lang="pug">
  div.wrapper
    h2 Hola
</template>

<style>
</style>