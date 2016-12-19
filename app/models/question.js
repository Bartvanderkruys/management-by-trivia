import DS from 'ember-data';

export default DS.Model.extend({
    question: DS.Attr('string'),
    correct_answer: DS.Attr('string'),
    incorrect_answers: DS.Attr('array')
});