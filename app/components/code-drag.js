import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'span',
    attributeBindings: ['id', 'font-family', 'font-size', 'font-weight', 'font-color', 'style', 'draggable'],
    classNames: ['code'],
    draggable: true,
    id: 'dragx',
    fontFamily: '',
    fontSize: '14',
    fontWeight: '300',
    fontColor: 'FFF',
    containedIn: null,

    didInsertElement: function() {
        // enable dragging using jQuery UI
        var container = this.get('containedIn');
        this.$().draggable({ containment: container ? "#" + container : "parent" });
    },

    style: function() {
        var style = '';
        if (this.get('fontFamily')) {
            style += 'font-family: ' + this.get('fontFamily') + ';';
        }
        if (this.get('fontSize')) {
            style += 'font-size: ' + this.get('fontSize') + 'px;';
        }
        if (this.get('fontWeight')) {
            style += 'font-weight: ' + this.get('fontWeight') + ';';
        }
        if (this.get('fontColor')) {
            style += 'font-weight: ' + this.get('fontWeight') + ';';
        }
        return style;
    }.property('font-family', 'font-size', 'font-weight')
});
