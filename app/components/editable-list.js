import Ember from 'ember';
import {storageFor} from 'ember-local-storage';

export default Ember.Component.extend({
    addValue: null,
    storage: null,

    actions: {
        addItem() {
            if (this.get('addValue')) {
                this.get('storage').addObject(this.get('addValue'));
                this.set('addValue', '');
            }
        },
        deleteItem(item) {
            this.removeItemFromStorage(item);
        }
    },
    removeItemFromStorage(item){
        let storageItems = this.get('storage').content;

        for (let i = 0; i < storageItems.length; i++) {
            if (storageItems[i] == item) {
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
