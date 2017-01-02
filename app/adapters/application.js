import DS from 'ember-data';
import {v4} from "ember-uuid";


export default DS.RESTAdapter.extend({
    generateIdForRecord: function(store, inputProperties) {
        return v4();
    },
    host: 'https://opentdb.com',
    pathForType: function(type){
        if (type === 'result'){
            return 'api.php?amount=10&type=multiple&difficulty=easy';
        }
    }
});
