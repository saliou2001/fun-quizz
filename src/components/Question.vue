<script setup>
import {defineEmits} from "vue"
import {useDefaultStore} from "@/stores";

const emit = defineEmits(["selectOption"])
const store = useDefaultStore()
store.isMenuVisible = false

const { question } = defineProps(['question']);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect)
}
</script>

<template>
  <div class="question-container">
    <h1 class="question">
      {{question.question}}
    </h1>
  </div>
  <div class="options-container">
    <div
        v-for="(option,index) in question.answers"
        :key="index"
        class="option"
        @click="emitSelectedOption(index)"
    >
      <div class="option-value">
        <p>{{option}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.question-container {
  margin-top: 10px;
}

.question {
  font-size: 20px;
  margin-bottom: 10px;
}

.option {
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
}

.option-label {
  background-color: bisque;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-value {
  background-color: rgb(244,239,239);
  width: 100%;
  font-size: 18px;
  padding: 0 20px
}
</style>