/* globals server */

import { test } from 'qunit';
import moduleForAcceptance from 'remember/tests/helpers/module-for-acceptance';

import Ember from 'ember';

moduleForAcceptance('Acceptance | reminders list', {
  beforeEach() {
    server.createList('reminder', 5);
  },

  afterEach() {
    server.shutdown();
  }
 });

test('viewing the homepage', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(Ember.$('.spec-reminder-item').length, 5);
  });
});

test('clicking on an individual item', function(assert) {

  visit('/');
  click('.spec-reminder-item:first');

  andThen(function() {
    assert.equal(currentURL(), '/1');
    assert.equal(Ember.$('.spec-reminder-item:first').text().trim(), Ember.$('.spec-reminder-title').text().trim());
  });
});

test('adds an individual reminder on form submit', function(assert) {

  visit('/');
  click('.spec-add-new-reminder');
  fillIn('.spec-add .spec-title-input', 'Tom Cruise');
  fillIn('.spec-add .spec-date-input', '12/11/2017');
  fillIn('.spec-add .spec-note-input', 'Star in every movie ever');
  click('.spec-submit-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/6');
    assert.equal(find('.spec-reminder-item').length, 6, 'should show one additional reminder');
    assert.equal(find('.spec-reminder-item:last').text().trim(), 'Tom Cruise', 'should show new reminder title');
  });
});

test('an edit content button that allows the user to edit that reminder, save it and goes back to that reminder after', function(assert) {

  visit('/');
  click('.spec-reminder-item:first');
  click('.spec-edit-reminder-button');
  fillIn('.spec-edit .spec-title-input', 'Do Something');
  fillIn('.spec-edit .spec-date-input', '11/15/2018');
  fillIn('.spec-edit .spec-note-input', 'Because I am bored');
  click('.spec-submit-reminder');

  andThen(function() {
    assert.equal(currentURL(), '/1');
    assert.equal(find('.spec-reminder-item:first').text().trim(), 'Do Something', 'should show edited title');
  });
});
