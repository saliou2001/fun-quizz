<template>

  <div>

    <h1>Quizes</h1>
    <div ref="sectionHome">
    <header>
      <input v-model.trim="search" type="text" placeholder="Rechercher..." >
    </header>
    </div>
    <div class="options-container">
      <TransitionGroup
          @before-enter="beforeEnter"
          @enter="enter"
          appear
      >
        <Card v-for="(quiz, index) in listeSearch" :key="index" :id="index" :quiz="quiz" :data-index="index" />
      </TransitionGroup>
    </div>
    <div class="ajoutQuiz"><button :class="{'btn-floating btn-large pulse': !ajoutQuiz, 'btn-floating btn-large red': ajoutQuiz} " @click="scrollToSection('sectionAjout')"><i class="material-icons">{{ ajoutQuiz ? "clear":"add"}}</i></button></div>
    <div ref="sectionAjout" >
        <AjoutQuiz v-if="ajoutQuiz" :quizes="quizes" />
    </div>
  </div>
</template>

<script setup>
import { useDefaultStore } from '../stores/index'
import gsap from "gsap"

import {ref, watch} from "vue";
import Card from "@/components/Card.vue";
import AjoutQuiz from "@/components/AjoutQuiz.vue";
const store = useDefaultStore()
const quizes = ref(store.quizs)
const beforeEnter = (el) => {
  el.style.transform = "translateY(-60px)"
  el.style.opacity = 0;
}
const enter = (el) => {
  gsap.to(el, {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: el.dataset.index * 0.2
  })
}
const search= ref("")
const listeSearch=ref(quizes.value)
watch(search, () => {
  if (search.value === "") return (listeSearch.value = quizes.value)
  listeSearch.value = quizes.value.filter(quiz => quiz.nom.toLowerCase().includes(search.value.toLowerCase()))
})

const ajoutQuiz = ref(false)
const sectionAjout = ref(null)
const sectionHome = ref(null)

function scrollToSection(sectionRef) {
  ajoutQuiz.value = !ajoutQuiz.value
  const section = sectionRef === 'sectionAjout' ? sectionAjout.value : sectionHome.value;
  section.scrollIntoView({ behavior: 'smooth' });
}

</script>

<style scoped>
header {
  margin-bottom: 10px;

}

header h1 {
  font-weight: bold;

}

header input {
  border: none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 5px;
  margin-left: 20px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
.content{
  width: 100vw;
  margin:auto;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
height: 100vh;
}
.ajoutQuiz{
  position:fixed;
  top: 100px;
  right: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>