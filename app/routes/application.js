import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        showStatus: function(text) {
            this.controller.send('showStatus', text);
        }
    }
});
