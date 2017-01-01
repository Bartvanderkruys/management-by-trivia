import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({
    score: 0,
    store: Ember.inject.service(),

    init(){
        this._super();
        this.get('store').findAll('question');
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
