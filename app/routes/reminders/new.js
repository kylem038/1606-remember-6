import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.Object.create();
  },

  actions: {
    createReminder(reminderForm) {
      let reminderProps = reminderForm.getProperties('title', 'date', 'notes');
      let record = this.get('store').createRecord('reminder', reminderProps);
      record.save().then(() => {
        return this.transitionTo('reminders.new');
      });
    }
  }
});
