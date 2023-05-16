<template>
  <div>
    <h2>Ajouter un nouveau quiz</h2>

    <form @submit.prevent="submitQuiz">
      <div class="input-field">
        <input type="text" id="nom" v-model="quizz.nom" required>
        <label for="nom">Nom</label>
      </div>

      <div v-for="(question, index) in quizz.questions" :key="index">
        <div class="input-field">
          <input type="text" v-model="question.question" required>
          <label>Question</label>
        </div>
        <div>
          <label for="options">Reponses:</label>
          <textarea class="materialize-textarea" v-model="question.answers" required></textarea>
          <small>Entrez les options séparées par des virgules (,)</small>
        </div>
        <div class="input-field">
          <input type="number" v-model.number="question.ok" required>
          <label>ID de la réponse correcte</label>
        </div>
        <button class="btn red" @click="removeQuestion(index)">
          Supprimer
        </button>
      </div>

      <button class="btn" @click="addQuestion">
        Ajouter une question
      </button>

      <button class="btn" type="submit">
        Ajouter
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {useDefaultStore} from "@/stores";

    const quizz = ref(
      {
        nom: "",
        questions: [
          {
            question: "",
            answers:"",
            ok: null,
          }],

      }
    );
const index=ref(0)
function addQuestion() {
  quizz.value.questions.push({
    question: "",
    answers: "",
    ok: null,
  });
  index.value++
}

const {quizes}=defineProps(['quizes'])
function removeQuestion(ind) {
      quizz.value.questions.splice(ind, 1);
  index.value--
}

const store = useDefaultStore()

    function submitQuiz() {
      // Ajouter le quiz
      let newQuiz = {
        nom: quizz.value.nom,
        img: "https://picsum.photos/200/300",
        questions:[]
      };
      for (let i=0;i<=index.value;i++)
      {

        newQuiz.questions.push({
              question: quizz.value.questions[i].question,
              answers: quizz.value.questions[i].answers.split(","),
              ok: quizz.value.questions[i].ok
        });
      }

      store.addQuiz(newQuiz);
      index.value=0
      //Réinitialiser le formulaire

        quizz.value.nom= "";
      quizz.value.questions.splice(0, quizz.value.questions.length, {
        question: "",
        answers: "",
        ok: null,
      });
    }


</script>

<style>
.input-field {
  margin-bottom: 20px;
}
</style>
