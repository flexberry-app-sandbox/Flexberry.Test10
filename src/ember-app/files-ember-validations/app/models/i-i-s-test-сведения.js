import {
  defineNamespace,
  defineProjections,
  Model as СведенияMixin
} from '../mixins/regenerated/models/i-i-s-test-сведения';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СведенияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
