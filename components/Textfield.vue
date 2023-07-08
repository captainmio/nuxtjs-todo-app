<template>
  <v-text-field
    variant="outlined"
    v-model="newTask"
    label="What are you working on?"
  >
    <template v-slot:append-inner>
      <v-fade-transition>
        <v-btn v-show="newTask" icon="mdi-plus-circle" variant="text"></v-btn>
      </v-fade-transition>
    </template>
  </v-text-field>
</template>


<script>
export default {
  data: () => ({
    newTask: null,
  }),

  computed: {},

  methods: {},
};
</script>