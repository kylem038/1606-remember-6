import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroyIndividualReminder(reminder) {
      reminder.destroyRecord().then(() => {
        this.transitionToRoute('reminders');
      });
    }
  }
});
