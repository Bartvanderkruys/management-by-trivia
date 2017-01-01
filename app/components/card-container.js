import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({
    rewardsStorage: storageFor('Rewards'),
    tasksStorage: storageFor('Tasks'),

    hasTaskAndReward: Ember.computed(function(){
        return (this.get('rewardsStorage').content.length && this.get('tasksStorage').content.length);
    }),

    introductionCardWidth: 6,
    taskCardWidth: 0,
    rewardCardWidth: 0,
    initiateCardWidth: 0,

    init(){
        this._super();

        if (this.get('rewardsStorage').content.length || this.get('tasksStorage').content.length ){
            this.triggerAction({
                action:'displayLists',
                target: this
            });
        } else {
            this.triggerAction({
                action:'displayIntroduction',
                target: this
            });
        }
    },

    willUpdate(){
        // TODO Update view.
    },

    actions: {
        displayIntroduction(){
            this.set('introductionCardWidth', 6);
            this.set('taskCardWidth', 0);
            this.set('rewardCardWidth', 0);
            this.set('initiateCardWidth', 0);
        },
        displayLists(){
            this.set('introductionCardWidth', 0);
            this.set('taskCardWidth', 6);
            this.set('rewardCardWidth', 6);
            this.set('initiateCardWidth', 12);
        },
    }
});
