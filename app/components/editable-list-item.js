import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        removeItem(){
            this.get('onClickClear')();
        }
    }
});
