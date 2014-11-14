import Ember from 'ember';

export default Ember.Controller.extend({
	image: null,
	codes: [],

	genString:  {
    	apply: function() {
        	var chance = new Chance();
        	return chance.string({
        		length: 5,
        		pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        	});
   		}
    },

    actions: {
        reset: function() {
            this.set('image', null);
        },
        upload: function(file, data) {
            this.set('image', { 
                file: file,
                data: data 
            });
        },
        preview: function() {
            this.transitionToRoute('preview');
        },
        generate: function() {
        	var chance = new Chance();
        	var str = chance.unique(this.genString, 500);
        	this.set('codes', str);
        }        
    }
});
