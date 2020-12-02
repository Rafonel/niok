<template>
  <div>
    <label>{{ label }}</label>
    <input
    v-bind="{
      ...$attrs,
      onInput: (event) => $emit('update:modelValue', event.target.value)
    }"
    :value="modelValue"
    >
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
  },
  inheritAttrs: false,
};
</script>

<style>

</style>
