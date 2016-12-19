import Ember from 'ember';

export default Ember.Component.extend({
    quizStarted: false,

    actions: {
        startQuiz(){
            this.set('quizStarted', true);
        }
    }
});