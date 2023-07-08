<template>
  <div class="v-input">
    <input :type="type"
           :value="value"
           @input="change"
           class="v-input__text"
           :placeholder="placeholder"
           @keypress.enter="$emit('enter')"/>
  </div>
</template>

<script>
export default {
  name: 'VInput',
  props: {
    type: {
      type: String,  // text, password, number
      default: 'text'
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String
    }
  },
  methods: {
    change(event) {
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-input {
  display: inline-block;
  width: 120px;
  height: 30px;

  &__text {
    width: 100%;
    height: 100%;

    outline: none;
    border: 1px solid rgba(0, 0, 0, .15);
    padding-left: 8px;
    box-sizing: border-box;

    &:hover {
      border-color: rgba(0,0,0,.54);
    }

    &:focus {
      border-color: $primary;
    }
  }
}
</style>