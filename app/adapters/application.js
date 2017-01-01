import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://opentdb.com',
    ajax: function(url, method, hash) {
        hash = hash || {}; // hash may be undefined
        hash.crossDomain = true;
        hash.xhrFields = {withCredentials: true};
        return this._super(url, method, hash);
    },
    pathForType: function(type){
        if (type === 'question'){
            return 'api.php?amount=5&type=multiple&encode=base64';
        }
    }
});
