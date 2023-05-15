import { defineStore } from 'pinia'
import {ref} from "vue";

export const useDefaultStore = defineStore({
  id: 'default',
  state: () => ({
  quizs : ref([
  {
    "nom" : "Culture générale",
    "img" : "src/assets/img/culture-quiz.jpg",
    "questions" : [
      {
        "question": "Quel révolutionnaire et grand orateur a déclaré en 1792 : “De l’audace, encore de l’audace, toujours de l’audace.”",
        "answers": [
          "Desmoulin",
          "Danton",
          "Robespierre",
          "Saint Just"
        ],
        "ok": 1
      },
      {
        "question": "Dans quel pays peut-on trouver le mont Elbrouz ?",
        "answers": [
          "Russie",
          "Azerbaïdjan",
          "Géorgie",
          "Iran"
        ],
        "ok": 0
      },
      {
        "question": "Qui a dit “Ich bin ein Berliner” ?",
        "answers": [
          "Bismarck",
          "Reagan",
          "De Gaulle",
          "Kennedy"
        ],
        "ok": 3
      }
    ]
  },
  {
    "nom" : "Informatique",
    "img" : "src/assets/img/info-quiz.jpg",
    "questions" : [
      {
        "question": "Quel est l'inventeur du web",
        "answers": [
          "Tim Cook",
          "Tim Berner Lee",
          "Bill Gates",
          "Burt Lancaster"
        ],
        "ok": 1
      },
      {
        "question": "Que veut dire JSON ?",
        "answers": [
          "Je Suis un Objet Numérique",
          "Java Server Objectif Null",
          "JavaScript Object Notation",
          "Japan Singapor Oman Norway"
        ],
        "ok": 2
      },
      {
        "question": "Quel est l'intru” ?",
        "answers": [
          "VueJS",
          "React",
          "Symfony",
          "Angular"
        ],
        "ok": 2
      }
    ]
  },
  {
    "nom" : "Technique",
    "img" : "src/assets/img/fun-quizz.png",
    "questions" : [
      {
        "question": "Quelle est la science de base des autres sciences ?",
        "answers": [
          "La biologie",
          "Les mathématiques",
          "La géographie",
          "La chimie"
        ],
        "ok": 1
      },
      {
        "question": "Quelle est l'unité de la capacité d'un condensateur ?",
        "answers": [
          "Le faraday",
          "Le volt",
          "Le pascal",
          "L'hertz"
        ],
        "ok": 0
      },
      {
        "question": "Quelle est la formule de la loi d'Ohm ?",
        "answers": [
          "E = mc²",
          "P = UI",
          "U = RI",
          "P = RI²"
        ],
        "ok": 2
      }
    ]
  }
]),
    isMenuVisible: true,
  }),
  getters: {
    getQuizs: (state) => {
        return state.quizs
    },
    getQuizByIndex: (state) => (index) => {
        return state.quizs[index]
    }

  },
  actions: {
    
  }
})
