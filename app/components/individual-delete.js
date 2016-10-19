import Ember from 'ember';

export default Ember.Component.extend({
  
  store: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),

  actions: {
    destroyIndividualReminder(reminder) {
      reminder.destroyRecord();
        this.get('routing').transitionTo('reminders');
    }
  }
});
