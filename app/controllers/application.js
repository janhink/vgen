import Ember from 'ember';

export default Ember.Controller.extend({

	image: '',

    actions: {
        upload: function(file, data) {
            this.set('image', data);
        }
    }
});
