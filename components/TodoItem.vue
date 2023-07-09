<template>
  <div
    :class="[
      'todo-item',
      'p-3',
      'border-solid',
      'border-2',
      'border-gray-200',
      'flex',
      'px-6',
      classValue,
    ]"
    @mouseover="showDeleteIcon"
    @mouseleave="hideDeleteIcon"
  >
    <v-icon
      :color="item.status.done == false ? 'green' : 'grey'"
      class="pr-4"
      @click="handleStatusUpdate"
      >mdi-check-circle</v-icon
    >
    <span
      :class="[
        { lighten: item.status.done },
        { 'add-strike': item.status.done },
        'pr-4',
      ]"
      >{{ item.name }}</span
    >

    <div class="garbage-div" v-show="isHovered">
      <v-icon color="red" class="pr-4" @click="handleDelete">mdi-delete</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classValue: {
      type: String,
    },
    item: {
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
  data() {
    return {
      isHovered: false,
    };
  },

  methods: {
    showDeleteIcon() {
      this.isHovered = true;
    },
    hideDeleteIcon() {
      this.isHovered = false;
    },
    handleStatusUpdate() {
      this.$emit("toggleStatus", this.item.id);
    },
    handleDelete() {
      this.$emit("doDelete", this.item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  border-radius: 5px;
}

.lighten {
  opacity: 0.5;
}

.add-strike {
  text-decoration: line-through;
}

.garbage-div {
  right: 30px;
  position: absolute;
}
</style>