import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({

    store: Ember.inject.service(),

    canStartQuiz: null,
    quizStarted: false,
    quizFinished: false,
    isWinner: false,
    timeLeft: 120,

    correctAnswers: 0,
    incorrectAnswers: 0,

    init(){
        this._super();
    },

    updateTimer(){
        this.set("timeLeft", this.get("timeLeft") - 1);
    },

    startTimer: Ember.computed(function () {
        let self = this;

        setInterval(function () {
            self.updateTimer();
        }, 1000);
    }),

    actions: {
        startQuiz() {
            this.get('onQuizStart')();
            this.set('quizStarted', true);
            this.get('startTimer');
        },
        answerQuestion(isCorrect) {
            if (isCorrect) {
                this.set("correctAnswers", this.get("correctAnswers") + 1);

                if (this.get('correctAnswers') > 4) {
                    this.set('isWinner', true);
                    this.set('quizFinished', true);
                    this.set('quizStarted', false);
                }
            } else {
                this.set("incorrectAnswers", this.get("incorrectAnswers") + 1);

                if (this.get('incorrectAnswers') > 4){
                    this.set('isWinner', false);
                    this.set('quizFinished', true);
                    this.set('quizStarted', false);
                }
            }
        }
    }
});
