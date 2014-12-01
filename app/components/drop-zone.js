import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['dropzone'],
    classNameBindings: ['highlight', 'background:uploaded'],
    attributeBindings: ['style'],
    file: null,
    clicked: false,
    highlight: false,
    dragCounter: 0,
    allowedTypes: ['image/jpeg', 'image/png', 'image/gif'],

    didInsertElement: function() {
        
    },

    backgroundObserver: function() {
        this.set('style', 'background-image: url(' + this.get('background') + ')');
        var that = this;
        Ember.run.later(function() {
            that.$().backgroundDraggable();
        });
    }.observes('background'),

    dragEnter: function(e) {
        e.preventDefault();
        ++this.dragCounter;
        this.set('highlight', true);
    },

    dragOver: function(e) {
        e.preventDefault();
        this.set('highlight', true);
    },

    dragLeave: function(e) {
        e.preventDefault();
        --this.dragCounter;
        if (this.dragCounter === 0) {
            this.set('highlight', false);
        }
    },

    drop: function(e) {
        e.preventDefault();
        this.set('highlight', false);
        if (e.dataTransfer.files.length > 0) {
            this.readFile(e.dataTransfer.files[0]);
        }
    },

    click: function(e) {
        if (!this.get('background') && !$(e.target).is(this.$('input[type=file]'))) {
            // delegate the click to the input field
            this.$('input[type=file]').click();
        }
    },

    change: function(e) {
        this.readFile(e.target.files[0]);
    },

    readFile: function(file) {
        if (this.allowedTypes.indexOf(file.type) < 0) {
            this.sendAction('status', 'This file is not supported');
            return;
        }

        var reader = new FileReader(),
            that = this;
        reader.onload = function(e) {
            var fileToUpload = e.target.result;
            Ember.run(function() {
                that.sendAction('action', that.get('file'), fileToUpload);
            });
        };
        this.set('file', file);
        reader.readAsDataURL(file);
    }
});
