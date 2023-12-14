import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-расписание-корм', 'Unit | Model | i-i-s-test-расписание-корм', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test-вид',
    'model:i-i-s-test-должность',
    'model:i-i-s-test-животные',
    'model:i-i-s-test-клетки',
    'model:i-i-s-test-корма',
    'model:i-i-s-test-расписание-корм',
    'model:i-i-s-test-сведения',
    'model:i-i-s-test-сотрудники',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
