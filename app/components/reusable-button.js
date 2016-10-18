import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyReminder(reminder) {
      reminder.destroyRecord();
    },

    destroyIndividualReminder(reminder) {
      reminder.destroyRecord();
      this.transitionTo('reminders', reminders);
    }
  }
});
