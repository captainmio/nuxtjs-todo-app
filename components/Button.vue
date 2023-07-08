<template>
  <v-btn
    class="original-case-btn"
    :rounded="rounded ? true : undefined"
    :color="color"
    ><slot
  /></v-btn>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#FFF",
    },
  },
};
</script>

<style lang="scss" scoped>
.original-case-btn {
  text-transform: none;
}
</style>