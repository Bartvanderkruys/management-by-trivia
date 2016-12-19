import Ember from 'ember';
import DS from 'ember-data';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver
});

loadInitializers(App, config.modulePrefix);

App.RedditLink = Ember.Object.extend({});

export default DS.RESTAdapter.extend({
    ajaxOptions: function(url, type, options) {
        var hash = this._super(url, type, options);
        hash.dataType = "jsonp";
        return hash;
    }
});

export default App;
