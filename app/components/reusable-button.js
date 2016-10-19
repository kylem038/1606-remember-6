import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyReminder(reminder) {
      reminder.destroyRecord();
    }
  }
});
