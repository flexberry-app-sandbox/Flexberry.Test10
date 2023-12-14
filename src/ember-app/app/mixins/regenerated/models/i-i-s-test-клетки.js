import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерКлетки: DS.attr('number'),
  площатьКлетки: DS.attr('number'),
  типКлетки: DS.attr('string')
});

export let ValidationRules = {
  номерКлетки: {
    descriptionKey: 'models.i-i-s-test-клетки.validations.номерКлетки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  площатьКлетки: {
    descriptionKey: 'models.i-i-s-test-клетки.validations.площатьКлетки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типКлетки: {
    descriptionKey: 'models.i-i-s-test-клетки.validations.типКлетки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлеткиE', 'i-i-s-test-клетки', {
    номерКлетки: attr('Номер клетки', { index: 0 }),
    типКлетки: attr('Тип клетки', { index: 1 }),
    площатьКлетки: attr('Площать клетки', { index: 2 })
  });

  modelClass.defineProjection('КлеткиL', 'i-i-s-test-клетки', {
    номерКлетки: attr('Номер клетки', { index: 0 }),
    типКлетки: attr('Тип клетки', { index: 1 }),
    площатьКлетки: attr('Площать клетки', { index: 2 })
  });
};
