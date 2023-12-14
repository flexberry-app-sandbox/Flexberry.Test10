import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлеткиMixin
} from '../mixins/regenerated/models/i-i-s-test-клетки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлеткиMixin, Validations, {
});

defineProjections(Model);

export default Model;
