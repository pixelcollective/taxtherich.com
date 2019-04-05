<template>
  <div class="entry">
    <div v-html="property"></div>
    <div v-html="value"></div>
  </div>
</template>

<script>
  export default {
    name: 'entry',
    props: [
      'property',
      'value'
    ],
  }
</script>

<style>
</style>
