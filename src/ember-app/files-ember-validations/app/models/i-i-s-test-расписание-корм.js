import {
  defineNamespace,
  defineProjections,
  Model as РасписаниеКормMixin
} from '../mixins/regenerated/models/i-i-s-test-расписание-корм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасписаниеКормMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
