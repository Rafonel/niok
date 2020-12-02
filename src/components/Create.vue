<template>
  <input
    @input="$emit('update:content', $event.target.value)"
    placeholder="Content"
    type="text"
  />
  <br>
  <input
    @input="$emit('update:date', $event.target.value)"
    placeholder="date"
    type="text"
  />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
};

</script>
