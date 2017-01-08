import Ember from 'ember';
import {storageFor} from 'ember-local-storage';

export default Ember.Component.extend({
    storage: null,

    actions: {
        deleteItem(item) {
            this.removeItemFromStorage(item);
            this.get('onListItemChanged')();
        }
    },
    removeItemFromStorage(item){
        let storageItems = this.get('storage').content;

        for (let i = 0; i < storageItems.length; i++) {
            if (storageItems[i] === item) {
                storageItems.splice(i, 1);
                break;
            }
        }

        this.get('storage').clear();

        for (let i = 0; i < storageItems.length; i++) {
            this.get('storage').addObject(storageItems[i]);
        }
    }
});
