<template>
  <v-badge :color="color" :content="content" inline />
</template>

<script>
export default {
  props: {
    content: {
      type: Number,
      required: true,
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