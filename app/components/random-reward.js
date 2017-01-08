import Ember from 'ember';
import {storageFor} from 'ember-local-storage';

export default Ember.Component.extend({
    rewardsStorage: storageFor('Rewards'),
    completedRewardsStorage: storageFor('CompletedRewards'),
    randomReward: null,
    init(){
        this._super();

        this.set('randomReward',
            this.get('rewardsStorage').content[ Math.floor( Math.random() * this.get('rewardsStorage').content.length )]
        );
    },

    actions: {
        // TODO use array filter prototype to make function more concise.

        completeReward(){
            this.get('completedRewardsStorage').addObject(this.get('randomReward'));

            let storageItems = this.get('rewardsStorage').content;

            for (let i = 0; i < storageItems.length; i++) {
                if (storageItems[i] === this.get('randomReward')) {
                    storageItems.splice(i, 1);
                    break;
                }
            }

            this.get('rewardsStorage').clear();

            for (let i = 0; i < storageItems.length; i++) {
                this.get('rewardsStorage').addObject(storageItems[i]);
            }

            window.location.reload(true);
        }
    }
});
