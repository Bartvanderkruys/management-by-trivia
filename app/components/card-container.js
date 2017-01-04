import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({
    rewardsStorage: storageFor('Rewards'),
    tasksStorage: storageFor('Tasks'),

    canStartQuiz: Ember.computed(function(){
        return !!(this.get('rewardsStorage').content.length && this.get('tasksStorage').content.length);
    }),

    displayIntroduction: true,
    displayQuizCard: false,
    displayLists: false,

    init(){
        this._super();

        if (this.get('rewardsStorage').content.length || this.get('tasksStorage').content.length ){
            this.set('displayIntroduction', false);
            this.set('displayLists', true);
        }
    },

    actions: {
        hideIntroduction(){
            this.set('displayIntroduction', false);
            this.set('displayLists', true);
        },
        displayLists(){
            this.set('displayLists', true);
        },
        hideLists(){
            this.set('displayLists', false);
        },
        onListItemChanged(){
            this.set('canStartQuiz', (this.get('rewardsStorage').content.length && this.get('tasksStorage').content.length));
        }
    }
});
