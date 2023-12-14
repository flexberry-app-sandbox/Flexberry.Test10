import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test-клетки', 'Unit | Serializer | i-i-s-test-клетки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test-клетки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
