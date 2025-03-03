<script setup>
import { ref } from "vue";

const name = ref("John");
const status = ref("active");
const tasks = ref(["Task one", "Task two", "Task three"]);
const link = ref("https://www.google.com");
const newTask = ref("")


const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "deactive";
  } else {
    status.value = "active";
  }
};
const addTask = ()=>{
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value)
    newTask.value = ""
  }
}
const deleteTask = (index)=>{
  tasks.value.splice(index,1)
}

</script>

<template>
  <h1>{{ name }}</h1>

  <p v-if="status === 'active'">User is active</p>
  <p v-else>inactive</p>


  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" name="newTask" id="newTask" v-model="newTask">
    <button type="submit">Add Task</button>
  </form>

  <h3>tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
    <span> {{ task }}</span> 
    <button @click="deleteTask(index)">X</button>
    </li>
  </ul>

  <a :href="link"> Google</a> 

  <button @click="toggleStatus">Change status</button>
</template>
