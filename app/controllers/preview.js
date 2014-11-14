import Ember from 'ember';

export default Ember.Controller.extend({
    image: null,
    width: 0,
    height: 0,
    fontColors: [
        {
            label: 'white',
            code: '#FFF'
        },
        {
            label: 'white',
            code: '#FFF'
        },
        {
            label: 'white',
            code: '#FFF'
        },
        {
            label: 'white',
            code: '#FFF'
        }
    ],
    fontColor: null,

    initialize: function() {
        this.set('fontColor', this.get('fontColors.[0]'));
    }.on('init'),

    imageObserver: function() {
        this.get('image');
    }.observes('image'),

    actions: {
        imageLoaded: function(image) {
            this.set('width', image.naturalWidth);
            this.set('height', image.naturalHeight);
        }
    }
});
