<template>
  <div class="container">
    <div class="list">
      <p class="list-title">Backlog</p>
      <draggable v-model="backlogArr" transition="100" class="drop-zone">
        <template #item="{ item }">
          <div class="draggable-item">
            {{ item.todo }}
          </div>
        </template>
      </draggable>

      <pre>{{ JSON.stringify(backlogArr, undefined, 4) }}</pre>
    </div>

    <div class="list">
      <p class="list-title">Todo</p>
      <draggable v-model="todoArr" transition="100" class="drop-zone">
        <template v-slot:item="{ item }">
          <div class="draggable-item">
            {{ item.todo }}
          </div>
        </template>
      </draggable>

      <pre>{{ JSON.stringify(todoArr, undefined, 4) }}</pre>
    </div>

    <div class="list">
      <p class="list-title">Work in progress</p>
      <draggable v-model="wipArr" transition="100" class="drop-zone">
        <template v-slot:item="{ item }">
          <div class="draggable-item">
            {{ item.todo }}
          </div>
        </template>
      </draggable>

      <pre>{{ JSON.stringify(wipArr, undefined, 4) }}</pre>
    </div>

    <div class="list">
      <p class="list-title">Done</p>
      <draggable v-model="doneArr" transition="100" class="drop-zone">
        <template v-slot:item="{ item }">
          <div class="draggable-item">
            {{ item.todo }}
          </div>
        </template>
      </draggable>

      <pre>{{ JSON.stringify(doneArr, undefined, 4) }}</pre>
    </div>
  </div>
</template>

<script>
import Draggable from "./components/DraggableContainer";
// import firebase from "firebase";

export default {
  name: "App",
  components: {
    Draggable,
  },
  data() {
    return {
      backlogArr: [
        {
          todo: "Eat a cake",
        },
        {
          todo: "Eat an orange",
        },
      ],
      todoArr: [
        {
          todo: "Drive",
        },
        {
          todo: "Learn english",
        },
      ],
      wipArr: [
        {
          todo: "Talk to dad",
        },
        {
          todo: "Go to sleep",
        },
      ],
      doneArr: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.backlogArr.push({ todo: this.newTask });
      console.log(this.backlogArr);
    },
  },
  created() {
    // this.db.onSnapshot((snapshot) => {
    //   snapshot.docChanges().forEach((change) => {
    //     if (change.type == "added") {
    //       if (change.doc.data().status === "BACKLOG") {
    //         this.backlogArr.push({
    //           id: change.doc.id,
    //           ...change.doc.data(),
    //         });
    //       } else if (change.doc.data().status === "TODO") {
    //         this.todoArr.push({
    //           id: change.doc.id,
    //           ...change.doc.data(),
    //         });
    //       } else if (change.doc.data().status === "IN_PROGRESS") {
    //         this.wipArr.push({
    //           id: change.doc.id,
    //           ...change.doc.data(),
    //         });
    //       } else if (change.doc.data().status === "DONE") {
    //         this.doneArr.push({
    //           id: change.doc.id,
    //           ...change.doc.data(),
    //         });
    //       }
    //     }
    //   });
    // });
  },
  computed: {
    // db() {
    //   return firebase.firestore().collection("todos");
    // },
  },
};
</script>

<style>
.container {
  width: 800px;
  display: flex;
  flex-direction: row;
  gap: 25px;
}
body {
  display: flex;
  padding-top: 100px;
  justify-content: center;
  font-family: sans-serif;
}
.draggable-item {
  display: flex;
  justify-content: center;
  background-color: lightblue;
  box-shadow: 0px 2px 5px #aaa;
  padding: 1%;
  margin-bottom: 10px;
}
.drop-zone {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 5px #aaa;
  padding: 10px;
  width: 400px;
  height: 200px;
}
pre {
  background-color: #eee;
  margin: 30px;
  padding: 10px;
  width: 400px;
  min-height: 200px;
}
.list-title {
  margin: 5px 0 10px;
  padding-bottom: 5px;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 1px solid black;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
