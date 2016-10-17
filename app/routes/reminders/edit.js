import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store').findRecord('reminder', params.reminder_id);
  },

  actions: {
    editReminder(editReminderForm) {
      let stringDate = editReminderForm.get('date');
      editReminderForm.set('title', editReminderForm.get('title'));
      if(stringDate) {
        editReminderForm.set('date', new Date(stringDate));
      }
      editReminderForm.set('notes', editReminderForm.get('notes'));
      editReminderForm.save().then((reminder) => {
        this.transitionTo('reminders.reminder', reminder)
      });
    }
  }
});
