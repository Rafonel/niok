<template>
  <BaseInput
    v-model="email"
    class="asd"
    @blur="email = 'emailtop@gmail.com'"
    type="email"
    label="top10Labels"
  />
</template>

<script>
import { ref } from 'vue';
import BaseInput from '@/components/BaseInput.vue';

export default {
  components: {
    BaseInput,
  },

  setup() {
    const email = ref('');
    return { email };
  },
};
</script>
