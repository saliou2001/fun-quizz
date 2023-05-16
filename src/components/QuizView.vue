<template>

  <div>

    <h1>Quizes</h1>
    <div ref="sectionHome">
    <header>
      <input v-model.trim="search" type="text" placeholder="Rechercher..." >
    </header>
    </div>
    <div class="spinner" v-if="loadingQuiz"></div>
      <div class="options-container" v-else>
      <TransitionGroup
          @before-enter="beforeEnter"
          @enter="enter"
          appear
      >

        <Card v-for="(quiz, index) in store.listeRecherche" :key="index" :id="index" :quiz="quiz" :data-index="index" />
      </TransitionGroup>
      </div>
    </div>
    <div class="ajoutQuiz"><button :class="{'btn-floating btn-large pulse': !ajoutQuiz, 'btn-floating btn-large red': ajoutQuiz} " @click="scrollToSection('sectionAjout')"><i class="material-icons">{{ ajoutQuiz ? "clear":"add"}}</i></button></div>
    <div ref="sectionAjout" >
        <AjoutQuiz v-if="ajoutQuiz" :quizes="listeSearch" />
    </div>


</template>

<script setup>
import { useDefaultStore } from '../stores/index'
import gsap from "gsap"

import {onMounted, onUpdated, ref, watch} from "vue";
import Card from "@/components/Card.vue";
import AjoutQuiz from "@/components/AjoutQuiz.vue";
const store = useDefaultStore()

const loadingQuiz=ref(true)
let listeSearch=ref(store.quizs)
onMounted( () => {
  store.getDatas()
  loadingQuiz.value=false
})

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

watch(search, (search) => {
  if(search===""){
    store.listeRecherche=store.quizs
    return
  }
  store.listeRecherche = store.listeRecherche.filter(quiz => quiz.nom.toLowerCase().includes(search.toLowerCase()))
}
)

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
.spinner {
  width: 100px;
  height: 100px;
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