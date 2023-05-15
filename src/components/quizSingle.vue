<template>

  <div class="container">
    <QuestionBar
        v-if="!showResults"
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"/>
    <Question
        v-if="!showResults"
        :question="quizSingle.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
    />
    <Result
        v-else
        :quizQuestionLength="quizSingle.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
    />
  </div>

</template>

<script setup>
import {useRoute} from "vue-router";
import {useDefaultStore} from "@/stores";
import {computed, ref} from "vue";
import Question from "@/components/Question.vue";
import Result from "@/components/Result.vue";
import QuestionBar from "@/components/QuestionBar.vue";
const store = useDefaultStore()
const route = useRoute()

const id = parseInt(route.params.id)

const nomCategorie=ref(store.quizs[id].nom)
const questions=ref(store.quizs[id].questions)
const quiz = computed(() => store.quizs[id])
const currentQuestionIndex = ref(0)
const currentQuestion = computed(() => quizSingle.value.questions[currentQuestionIndex.value])
const questionStatus = computed(() => `${currentQuestionIndex.value}/${quizSingle.value.questions.length}`)
const barPercentage = computed(() => `${currentQuestionIndex.value/quizSingle.value.questions.length * 100}%`)

const numberOfCorrectAnswers = ref(0)
const showResults = ref(false)


const onOptionSelected = (isCorrect) => {
  if(isCorrect === quizSingle.value.questions[currentQuestionIndex.value].ok){
    console.log("correct")
    numberOfCorrectAnswers.value++;
  }

  if(quizSingle.value.questions.length - 1 === currentQuestionIndex.value){
    showResults.value = true
  }
  currentQuestionIndex.value++;
}


</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
</style>