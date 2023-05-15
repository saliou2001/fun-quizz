<script setup>
import {defineProps} from "vue"
import {useRouter} from "vue-router"

const router = useRouter()
const {quiz,id} = defineProps(['quiz',"id"])

const navigateToQuiz = (id) => {
  router.push(`/quiz/${parseInt(id++)}`)
}

</script>

<template>
  <div class="card" @click="navigateToQuiz(id)">
    <img :src="quiz.img" alt="">
    <div class="card-text">
      <h4>{{ quiz.nom }}</h4>
      <p class="flow-text">{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0
}

.card .card-text {
  padding: 0 5px;

}

.card .card-text h2 {
  font-weight: bold;
}
</style>