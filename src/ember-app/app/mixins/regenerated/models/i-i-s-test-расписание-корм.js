import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  животные: DS.belongsTo('i-i-s-test-животные', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-test-расписание-корм.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  животные: {
    descriptionKey: 'models.i-i-s-test-расписание-корм.validations.животные.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасписаниеКормE', 'i-i-s-test-расписание-корм', {
    время: attr('Время', { index: 0 }),
    животные: belongsTo('i-i-s-test-животные', 'Животные', {
      сотрудники: belongsTo('i-i-s-test-сотрудники', '', {
        табличНомер: attr('Табельный номер', { index: 2 })
      }, { index: -1, hidden: true }),
      кодВида: attr('Код вида', { index: 3, hidden: true })
    }, { index: 1, displayMemberPath: 'кодВида' })
  });

  modelClass.defineProjection('РасписаниеКормL', 'i-i-s-test-расписание-корм', {
    время: attr('Время', { index: 0 }),
    животные: belongsTo('i-i-s-test-животные', 'Код вида', {
      кодВида: attr('Код вида', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
