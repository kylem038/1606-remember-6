import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editReminder(editReminderForm) {
      let stringDate = editReminderForm.get('date');
      editReminderForm.set('title', editReminderForm.get('title'));
      if(stringDate) {
        editReminderForm.set('date', new Date(stringDate));
      }
      editReminderForm.set('notes', editReminderForm.get('notes'));
      editReminderForm.save().then((reminder) => {
        this.transitionToRoute('reminders.reminder', reminder);
      });
      return false;
    },

    revertReminder(reminder) {
      reminder.rollbackAttributes();
      this.transitionToRoute('reminders.reminder', reminder);
    }
  }
});
