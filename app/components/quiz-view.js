import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({

    store: Ember.inject.service(),

    canStartQuiz: null,
    quizStarted: false,
    quizFinished: false,
    isWinner: false,
    timeLeft: 90,
    timeInterval: null,

    correctAnswers: 0,
    incorrectAnswers: 0,

    init(){
        this._super();
    },

    updateTimer(){
        this.set("timeLeft", this.get("timeLeft") - 1);

        if (this.get('timeLeft') < 1) {
            this.set('quizFinished', true);
            this.set('quizStarted', false);
            clearInterval(this.get('timeInterval'));
        }
    },

    startTimer: Ember.computed(function () {
        let self = this;

        this.set('timeInterval',
            setInterval(() => {
                self.updateTimer();
            }, 1000)
        );
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
                    clearInterval(this.get('timeInterval'));
                }
            } else {
                this.set("incorrectAnswers", this.get("incorrectAnswers") + 1);

                if (this.get('incorrectAnswers') > 4) {
                    this.set('quizFinished', true);
                    this.set('quizStarted', false);
                    clearInterval(this.get('timeInterval'));
                }
            }
        }
    }
});
