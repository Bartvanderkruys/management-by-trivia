import Ember from 'ember';
import {storageFor} from "ember-local-storage";

export default Ember.Component.extend({
    rewardsStorage: storageFor('Rewards'),
    actions: {
        onListItemChanged() {
            this.get('onListItemChanged')();
        }
    }
});
