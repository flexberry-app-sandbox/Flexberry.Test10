import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кличка: DS.attr('string'),
  код: DS.attr('number'),
  вид: DS.belongsTo('i-i-s-test-вид', { inverse: null, async: false }),
  клетки: DS.belongsTo('i-i-s-test-клетки', { inverse: null, async: false }),
  корма: DS.belongsTo('i-i-s-test-корма', { inverse: null, async: false }),
  животные: DS.belongsTo('i-i-s-test-животные', { inverse: 'сведения', async: false })
});

export let ValidationRules = {
  кличка: {
    descriptionKey: 'models.i-i-s-test-сведения.validations.кличка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-test-сведения.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  вид: {
    descriptionKey: 'models.i-i-s-test-сведения.validations.вид.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клетки: {
    descriptionKey: 'models.i-i-s-test-сведения.validations.клетки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  корма: {
    descriptionKey: 'models.i-i-s-test-сведения.validations.корма.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  животные: {
    descriptionKey: 'models.i-i-s-test-сведения.validations.животные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СведенияE', 'i-i-s-test-сведения', {
    код: attr('Код', { index: 0 }),
    кличка: attr('Кличка', { index: 1 }),
    корма: belongsTo('i-i-s-test-корма', 'Корма', {
      типКорма: attr('Тип корма', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'типКорма' }),
    вид: belongsTo('i-i-s-test-вид', 'Вид', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    клетки: belongsTo('i-i-s-test-клетки', 'Клетки', {
      номерКлетки: attr('Номер клетки', { index: 7 }),
      типКлетки: attr('Тип клетки', { index: 8, hidden: true })
    }, { index: 6, displayMemberPath: 'типКлетки' })
  });
};
