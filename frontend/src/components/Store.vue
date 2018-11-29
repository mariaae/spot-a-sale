<script>
  export default {
    name: 'store',
    props: ['data']
  }
</script>

<template lang="pug">
    div.wrapper
      div {{data._id}}
      div {{data.name}}
      div {{data.address}}
</template>

<style>
.wrapper {
  background-color: pink;
  padding: 20px;
  border-radius: 20px;
}
</style>
