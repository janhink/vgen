import Ember from 'ember';

export default Ember.Controller.extend({
    status: '',

    actions: {
        showStatus: function(text) {
            this.set('status', text);
            var that = this;
            Ember.run.later(function() {
                that.set('status', '');
            }, 5000);
        },

        imageLoaded: function(image) {
            alert(image.naturalWidth + 'x' + image.naturalHeight);
        }
    }
});
