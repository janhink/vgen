import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'img',
    attributeBindings: ['src', 'width', 'height', 'title', 'alt'],
    image: null,

    handleLoad: function() {
        var c = this;
        this.$().on('load', function() {
            c.sendAction('action', this);
        });
    }.on('didInsertElement')
});
