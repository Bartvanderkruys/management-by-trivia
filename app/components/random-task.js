import Ember from 'ember';
import {storageFor} from 'ember-local-storage';

export default Ember.Component.extend({
    tasksStorage: storageFor('Tasks'),
    completedTasksStorage: storageFor('CompletedTasks'),
    randomTask: null,
    init(){
        this._super();

        this.set('randomTask',
            this.get('tasksStorage').content[ Math.floor( Math.random() * this.get('tasksStorage').content.length )]
        );
    },

    actions: {
        // TODO use array filter prototype to make function more concise.

        completeTask(){
            this.get('completedTasksStorage').addObject(this.get('randomTask'));

            let storageItems = this.get('tasksStorage').content;

            for (let i = 0; i < storageItems.length; i++) {
                if (storageItems[i] === this.get('randomTask')) {
                    storageItems.splice(i, 1);
                    break;
                }
            }

            this.get('tasksStorage').clear();

            for (let i = 0; i < storageItems.length; i++) {
                this.get('tasksStorage').addObject(storageItems[i]);
            }

            window.location.reload(true);
        }
    }
});
