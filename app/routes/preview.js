import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        if (!this.controllerFor('new').get('image')) {
            // transition back to 'new' if no image is given
            this.transitionTo('new');
        }
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        // pass the image to the controller
        this.controller.set('image', this.controllerFor('new').get('image'));
    }
});
