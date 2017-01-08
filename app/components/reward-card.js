import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({
    rewardsStorage: storageFor('Rewards'),
    completedRewardsStorage: storageFor('CompletedRewards'),
    actions: {
        onListItemChanged() {
            this.get('onListItemChanged')();
        }
    },
});
