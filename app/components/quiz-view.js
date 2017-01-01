import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({
    store: Ember.inject.service(),
    quizStarted: false,
    canStartQuiz: null,
    timeLeft: 120,

    init(){
        this._super();
    },

    updateTimer(){
        this.set("timeLeft", this.get("timeLeft") - 1);
    },

    startTimer: Ember.computed(function() {
        let self = this;

        setInterval(function(){
            self.updateTimer();
        }, 1000);
    }),

    actions: {
        startQuiz() {
            this.get('onQuizStart')();
            this.set('quizStarted', true);
            this.get('startTimer');
        }
    },

});
