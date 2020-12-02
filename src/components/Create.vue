<template>
  <input
    @input="updateContent"
    placeholder="Content"
    type="text"
  />
  <br>
  <input
    @input="updateDate"
    placeholder="date"
    type="text"
    maxlength="4"
  />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
    contentModifiers: {
      default: () => ({}),
    },
    date: {
      type: String,
      default: '',
    },
    dateModifiers: {
      default: () => ({}),
    },
  },

  setup(props, { emit }) {
    const updateContent = (event) => {
      let val = event.target.value;
      if (props.contentModifiers.capitalize) {
        val = val.toUpperCase();
      }
      emit('update:content', val);
    };
    const updateDate = (event) => {
      let val = event.target.value;
      if (props.dateModifiers.dateFormat && val.toString().length === 4) {
        val = `${val.slice(0, 2)}/${val.slice(2)}`;
      }
      if (val.toString().length <= 5) {
        emit('update:date', val);
      }
    };

    return { updateContent, updateDate };
  },
};

</script>
