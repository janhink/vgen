import Ember from 'ember';

export default Ember.Component.extend({
    attributeBindings: ['name'],
    type: 'file',
    file: null,
    change: function (evt) {
        var reader = new FileReader(), 
        that = this;        
        reader.onload = function (e) {
            var fileToUpload = e.target.result;
            	Ember.run(function() {
                that.sendAction('action', that.get('file'), fileToUpload);
            });            
        };
        this.set('file', evt.target.files[0]);        
        reader.readAsDataURL(evt.target.files[0]);
    }
});
