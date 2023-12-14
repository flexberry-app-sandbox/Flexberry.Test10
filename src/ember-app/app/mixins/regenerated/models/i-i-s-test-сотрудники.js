import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодДолжности: DS.attr('number'),
  отчество: DS.attr('string'),
  табличНомер: DS.attr('number'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-test-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДолжности: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.кодДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табличНомер: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.табличНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-test-сотрудники.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-test-сотрудники', {
    табличНомер: attr('Таблич номер', { index: 0 }),
    кодДолжности: attr('Код должности', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    фамилия: attr('Фамилия', { index: 3 }),
    имя: attr('Имя', { index: 4 }),
    должность: belongsTo('i-i-s-test-должность', 'Должность', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-test-сотрудники', {
    табличНомер: attr('Таблич номер', { index: 0 }),
    кодДолжности: attr('Код должности', { index: 1 }),
    отчество: attr('Отчество', { index: 2 }),
    фамилия: attr('Фамилия', { index: 3 }),
    имя: attr('Имя', { index: 4 }),
    должность: belongsTo('i-i-s-test-должность', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
