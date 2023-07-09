<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 mt-20">
      <div>
        <h1 class="text-5xl font-bold text-center text-white p-5">
          Vue ToDo List
        </h1>
      </div>
      <v-card
        class="mx-auto w-100 p-4 border-0 bg-white"
        max-width="600"
        variant="outlined"
      >
        <v-card-title class="bg-gray-100 card-padding text-right space-x-2">
          <Button :rounded="true" color="blue"
            >Tasks <Badge color="white" :content="getTodos.length"
          /></Button>
          <Button :rounded="true" color="blue"
            >Tasks Done <Badge color="white" :content="countComplete"
          /></Button>
          <Button color="red" @click="deleteAllTodos"
            ><v-icon size="25" class="pr-2">mdi-delete</v-icon>Tasks</Button
          >
        </v-card-title>
        <v-card-item class="flex">
          <TodoItem
            v-for="todo in getTodos"
            :key="todo.id"
            :item="todo"
            classValue="mt-3"
            @toggleStatus="toggleStatus"
            @doDelete="doDelete"
          />
        </v-card-item>
        <v-card-actions class="bg-gray-100 card-padding">
          <Textfield
            placeholder="New Task"
            :rounded="true"
            @addTask="handleAddTask"
          />
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTodoStore } from "../store";

export default {
  computed: {
    ...mapState(useTodoStore, ["getTodos"]),
    countComplete() {
      let completeTasks = this.getTodos.filter((todo) => {
        return todo.status.done == true;
      });

      return completeTasks.length;
    },
  },
  mounted() {
    this.loadTodos();
  },
  methods: {
    ...mapActions(useTodoStore, [
      "addTodo",
      "toggleStatusDone",
      "loadTodos",
      "persistTodos",
      "deleteTodo",
      "deleteAllTodos",
    ]),
    handleAddTask(value) {
      this.addTodo(value);
    },
    toggleStatus(id) {
      this.toggleStatusDone(id);
    },
    doDelete(id) {
      this.deleteTodo(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card-padding {
  padding: 15px;
}
</style>