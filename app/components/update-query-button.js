import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  click(){
    const sortValue = this.get('sortValue');
    this.get('updateSort')(sortValue);
  }
});
