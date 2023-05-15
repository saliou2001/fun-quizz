<template>
    <div class="card container">
      <div class="card-content">
        <h1 class="card-title">Saliou Bailo BAH</h1>
        <div class="card-image">
        <div class="photo-container" @click="toggleZoom" :style="photoStyle">
          <img src="https://pbs.twimg.com/media/Dk5rZlqXsAA4Qq6.jpg" alt="My avatar">
        </div>
        </div>
        <div class="card-text">
          <p>Welcome to my About page!</p>
          <p>I am passionate about web development and love working with Vue.js </p>
          <p>Feel free to explore the rest of my website to learn more about my projects and skills.</p>
          <p>A little project of fun : only playing with quizzes 😁😁😉</p>
        </div>
      </div>
    </div>

</template>

<script setup>
import {reactive, ref} from "vue";

const isZoomed = ref(false);
const photoSrc = ref('src/assets/img/me.jpg');
const photoStyle = reactive({
  transform: 'scale(0.5)',
  transition: 'transform 0.5s'
});

const toggleZoom = () => {
  isZoomed.value = !isZoomed.value;

  if (isZoomed.value) {
    photoStyle.transform = 'scale(1.5)';
  } else {
    photoStyle.transform = 'scale(0.5)';
  }
};



</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px 20px;
}
.card-image img {
  width: 50%;
  height: 50%;
  object-fit: cover;
  border-radius: 20%;
}

.card {
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 24px;
  font-weight: 500;
}

.card-content {
  margin-top: 20px;

}

.photo-container {
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  float: left;
}

p {
  margin-bottom: 10px;
}
</style>