import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодВида: DS.attr('number'),
  номерЖивотного: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-test-сотрудники', { inverse: null, async: false }),
  сведения: DS.hasMany('i-i-s-test-сведения', { inverse: 'животные', async: false })
});

export let ValidationRules = {
  кодВида: {
    descriptionKey: 'models.i-i-s-test-животные.validations.кодВида.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЖивотного: {
    descriptionKey: 'models.i-i-s-test-животные.validations.номерЖивотного.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-test-животные.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сведения: {
    descriptionKey: 'models.i-i-s-test-животные.validations.сведения.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖивотныеE', 'i-i-s-test-животные', {
    кодВида: attr('Код вида', { index: 0 }),
    номерЖивотного: attr('Номер животного', { index: 1 }),
    сотрудники: belongsTo('i-i-s-test-сотрудники', 'Сотрудники', {
      табличНомер: attr('Табличный номер', { index: 3 })
    }, { index: 2, displayMemberPath: 'отчество' }),
    сведения: hasMany('i-i-s-test-сведения', 'Сведения', {
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
    })
  });

  modelClass.defineProjection('ЖивотныеL', 'i-i-s-test-животные', {
    кодВида: attr('Код вида', { index: 0 }),
    номерЖивотного: attr('Номер животного', { index: 1 }),
    сотрудники: belongsTo('i-i-s-test-сотрудники', 'Отчество', {
      отчество: attr('Отчество', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
