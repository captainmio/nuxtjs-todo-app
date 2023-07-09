import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [
      // {
      //   name: "Task 1",
      //   id: 1,
      //   status: {
      //     done: true,
      //   },
      // },
      // {
      //   name: "Task 2",
      //   id: 2,
      //   status: {
      //     done: true,
      //   },
      // },
      // {
      //   name: "Task 3",
      //   id: 3,
      //   status: {
      //     done: false,
      //   },
      // },
    ],
  }),
  getters: {
    getTodos: (state) => state.todos,
  },
  actions: {
    addTodo(task) {
      let lastID = 1;

      if (this.todos.length) {
        const lastObject = this.todos.reduce((prev, curr) => {
          return curr.id > prev.id ? curr : prev;
        });

        lastID = lastObject.id;
      }

      const newTask = {
        id: lastID + 1,
        name: task,
        status: {
          done: false,
        },
      };

      this.todos = [newTask, ...this.todos];
      this.persistTodos();
    },
    toggleStatusDone(id) {
      let updateTask = this.todos.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            status: {
              ...obj.status,
              done: !obj.status.done,
            },
          };
        }
        return obj;
      });

      this.todos = [...updateTask];
      this.persistTodos();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((obj) => {
        return obj.id !== id;
      });

      this.persistTodos();
    },
    deleteAllTodos() {
      this.todos = [];

      this.persistTodos();
    },
    persistTodos() {
      let todos = JSON.stringify(this.todos);
      localStorage.setItem("todos", todos);
    },
    loadTodos() {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        this.todos = JSON.parse(savedTodos);
      }
    },
  },
});
