<script setup>
import { ref, onMounted } from "vue";
import axios  from "axios";

const jobs = ref([])

onMounted(async ()=> {
    try {
        const response = await axios.get("/api/jobs")
        jobs.value = response.data
        
    } catch (error) {
        console.error("error fetching", error)
    }
})
</script>

<template>
    JobListings

    <div v-for=" job in jobs" :key = "job.id">

        {{ job.title }}
    </div>
</template>