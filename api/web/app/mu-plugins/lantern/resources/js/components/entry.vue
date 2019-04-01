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
.entry {
  display: grid;
  width: 600px;
  grid-gap: 5px;
  /* Space between items */
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
}
.entry div {
  width: 1fr;
  /* width is not necessary only added this to understand that width works as 100% to the grid template allocated space **DEFAULT WIDTH WILL BE 100%** */
  font-family: 'helvetica', arial, sans-serif;
}

.entry div:first-child {
  font-weight: bold;
}
</style>
