import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасписаниеКормMixin
} from '../mixins/regenerated/models/i-i-s-test-расписание-корм';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасписаниеКормMixin, Validations, {
});

defineProjections(Model);

export default Model;
