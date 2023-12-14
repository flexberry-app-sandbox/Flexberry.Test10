import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЖивотного: DS.attr('number'),
  типКорма: DS.attr('string')
});

export let ValidationRules = {
  номерЖивотного: {
    descriptionKey: 'models.i-i-s-test-корма.validations.номерЖивотного.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типКорма: {
    descriptionKey: 'models.i-i-s-test-корма.validations.типКорма.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КормаE', 'i-i-s-test-корма', {
    типКорма: attr('Тип корма', { index: 0 }),
    номерЖивотного: attr('Номер животного', { index: 1 })
  });

  modelClass.defineProjection('КормаL', 'i-i-s-test-корма', {
    типКорма: attr('Тип корма', { index: 0 }),
    номерЖивотного: attr('Номер животного', { index: 1 })
  });
};
