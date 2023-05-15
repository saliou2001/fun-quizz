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
  <footer class="page-footer" v-if="store.isMenuVisible">
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <h5 class="white-text">FUN QUIZ</h5>
          <p class="grey-text text-lighten-4">Enjoy some quizzes</p>
        </div>
        <div class="col s12 m6">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><RouterLink class="grey-text  text-black blue darken-4" to="/about">About</RouterLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grey darken-3">
      <div class="container">
        <div class="row">
          <div class="col s12">
            <p class="grey-text text-lighten-4 center-align">&copy; 2023 Saliou Bailo Bah</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer{
  position: relative;

  height: 160px;

  background-color: #2e3c5e;
}
.page-footer {
  background-color: #333;
}

.page-footer h5 {
  margin-top: 0;
}

.page-footer ul li a {
  display: block;
  padding: 8px 0;
}
</style>
