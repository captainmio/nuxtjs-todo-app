<template>
  <v-text-field
    :class="rounded ? 'rounded' : ''"
    variant="outlined"
    v-model="textValue"
    :placeholder="placeholder"
    density="compact"
    hide-details
    @keyup.enter="handleEnterKey"
  >
    <template v-slot:append-inner>
      <v-btn ref="submitButton" icon @click="handleAddTask">
        <v-icon size="35" color="blue">mdi-plus-circle</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>


<script>
export default {
  data: () => ({
    textValue: null,
  }),
  props: {
    placeholder: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleEnterKey() {
      this.handleAddTask();
    },
    handleAddTask() {
      this.$emit("addTask", this.textValue);
      this.clearTextValue();
    },
    clearTextValue() {
      this.textValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded .v-input__control .v-input__slot {
  border-radius: 50px !important;
}
</style>