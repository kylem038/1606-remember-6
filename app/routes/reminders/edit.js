import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store').find('reminder', params.reminder_id);
  },

  actions: {
    editReminder(reminderForm) {
      let stringDate = reminderForm.get('date');
      reminderForm.set('title', reminderForm.get('title'));
      if(stringDate) {
        reminderForm.set('date', new Date(stringDate));
      }
      reminderForm.set('notes', reminderForm.get('notes'));
      reminderForm.save().then((reminder) => {
        this.transitionTo('reminders.reminder', reminder)
      });
    }
  }
});
