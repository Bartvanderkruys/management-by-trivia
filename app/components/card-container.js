import Ember from 'ember';

export default Ember.Component.extend({
    introductionCardWidth: 6,
    taskCardWidth: 0,
    rewardCardWidth: 0,
    initiateCardWidth: 0,

    actions: {
        displayLists(){
            this.set('introductionCardWidth', 0);
            this.set('taskCardWidth', 6);
            this.set('rewardCardWidth', 6);
            this.set('initiateCardWidth', 12);
        }
    }
});
