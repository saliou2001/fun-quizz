<script setup>
import {RouterLink} from "vue-router"
import {ref} from "vue";
import {useDefaultStore} from "@/stores";
const store = useDefaultStore()

store.isMenuVisible = true
const {numberOfCorrectAnswers, quizQuestionLength} = defineProps(["quizQuestionLength", "numberOfCorrectAnswers"])
const isloading = ref(true)
const setTimer = () => {
  setTimeout(() => {
    isloading.value = false
  }, 2000)
}
setTimer()
</script>

<template>
  <div class="results">
    <h1>Résultats...</h1>
    <div class="spinner" v-if="isloading"></div>
    <div v-else>
      <h1>
        {{numberOfCorrectAnswers}}/{{quizQuestionLength}}
      </h1>
      <RouterLink to="/">Go Back</RouterLink>
    </div>

  </div>
</template>

<style scoped>
.spinner {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid #f3f3f3;
  margin-left: 100px;
  border-top: 4px solid #3498db;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


.results {
  text-align: center;
  padding: 50px 0;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>