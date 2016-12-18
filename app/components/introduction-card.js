import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        clickPrimary(){
            this.get('onClickPrimary')();
        }
    }
});
