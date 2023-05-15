<script setup>
import Quizs from './components/QuizView.vue'

// si vous voulez utilisez pinia , il faut placer ces deux lignes dans le composant de votre choix.
import { useDefaultStore } from './stores/index'
import NavBar from "@/components/NavBar.vue";
import { RouterView, useRoute } from 'vue-router'
import {watch} from "vue";
const route= useRoute()
const store = useDefaultStore()


</script>

<template>
  <NavBar v-if="store.isMenuVisible"/>
  <main class="container ">
    <RouterView/>

  </main>
</template>

<style>

</style>
