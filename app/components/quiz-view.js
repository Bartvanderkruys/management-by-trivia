import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({
    store: Ember.inject.service(),
    quizStarted: false,
    canStartQuiz: null,

    init(){
        this._super();
    },

    actions: {
        startQuiz() {
            this.get('onQuizStart')();
            this.set('quizStarted', true);
        }
    }
});
