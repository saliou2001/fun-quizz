<template>
  <nav>
    <div class="nav-wrapper blue darken-4">
      <RouterLink to="/" class="brand-logo">FUN QUIZZ</RouterLink>

      <ul class="right hide-on-med-and-down">
        <li><RouterLink to="/about">A propos</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import {onMounted, ref} from 'vue';

const isMobile = ref(false);


</script>

<style>
nav {
  background-color: #243859;
}
</style>