import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyIndividualReminder(reminder) {
      reminder.destroyRecord();
        // this.transitionToRoute('reminders');
    }
  }
});
