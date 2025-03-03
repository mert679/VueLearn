<script >
export default{
  data(){
    return {
      name:"John",
      status:true,
      tasks: ["Task one", "Task two", "Task three"],
      link:"https://google.com"
    }
  },
  methods:{
    toggleStatus(){
      if(this.status == true){
        this.status = false
      }else{
        this.status = true
      }
        
    }
  }
}
</script>

<template>
 <h1>{{ name }} </h1>

<p v-if="status">User is active</p>
<p v-else>inactive</p>

<h3>tasks</h3>
<ul>
  <li v-for="task in tasks"  :key="task">{{ task }}</li>
</ul>

<!-- <a v-bind:href="link"> Google</a> -->
<!-- it is still work v-bind means it is dynamic : means v-bind -->
<a :href="link"> Google</a> 


<!-- <button v-on:click="toggleStatus">Change status</button>  v-on = @  --> 
<button @click="toggleStatus">Change status</button>


</template>

<style scoped>

</style>
