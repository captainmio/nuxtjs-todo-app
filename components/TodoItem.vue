<template>
  <div
    :class="[
      'todo-item',
      'p-3',
      'border-solid',
      'border-2',
      'border-gray-200',
      'flex',
      'items-center',
      'px-6',
      classValue,
    ]"
  >
    <v-icon :color="data.status.done ? 'green' : 'undefined'" class="pr-4"
      >mdi-check-circle</v-icon
    >
    <span>{{ data.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    classValue: {
      type: String,
    },
    data: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          typeof value.name === "string" &&
          typeof value.id === "number" &&
          typeof value.status === "object"
        );
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  border-radius: 5px;
}
</style>