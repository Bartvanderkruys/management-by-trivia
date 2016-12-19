import Ember from 'ember';

export default Ember.Component.extend({
    score: 0,

    init(){
        this._super();
        this.get('getTriviaQuestions')();
    },

    getTriviaQuestions(){
        jQuery.getJSON('https://opentdb.com/api.php?amount=10').then(function(json) {
            console.log(json);
        });
    },

    actions: {
        incrementScore() {
            this.set('score', this.get('score') + 1)
        },
        deductScore(){
            this.set('score', this.get('score') - 1)
        }
    }
});
