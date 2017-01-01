import Ember from 'ember';

export default Ember.Component.extend({
    question: null,
    shuffledAnswers: [],
    init(){
        this._super();

        let answers = this.question.getProperties('incorrect_answers').incorrect_answers;
        answers.push(this.question.getProperties('correct_answer').correct_answer);

        this.shuffledAnswers = this.fyShuffle(answers);
    },
    fyShuffle(array) {
        let counter = array.length;

        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);

            counter--;

            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
});
