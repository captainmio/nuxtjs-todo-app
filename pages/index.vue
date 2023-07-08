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
            >Tasks <v-badge color="white" content="6" inline></v-badge
          ></Button>
          <Button :rounded="true" color="blue"
            >Tasks Done <v-badge color="white" content="6" inline></v-badge
          ></Button>
          <Button :rounded="true" color="red"
            ><v-icon size="25" class="pr-2">mdi-delete</v-icon>Tasks</Button
          >
        </v-card-title>
        <v-card-item class="flex">
          <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :data="todo"
            classValue="mt-3"
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
export default {
  data() {
    return {
      todos: [
        {
          name: "Task 1",
          id: 1,
          status: {
            done: true,
          },
        },
        {
          name: "Task 2",
          id: 2,
          status: {
            done: true,
          },
        },
        {
          name: "Task 3",
          id: 3,
          status: {
            done: false,
          },
        },
      ],
    };
  },
  methods: {
    handleAddTask(value) {
      const lastObject = this.todos.reduce((prev, curr) => {
        return curr.id > prev.id ? curr : prev;
      });

      const newTask = {
        id: lastObject + 1,
        name: value,
        status: {
          done: false,
        },
      };

      this.todos = [...this.todos, newTask];
    },
  },
};
</script>

<style lang="scss" scoped>
.card-padding {
  padding: 15px;
}
</style>