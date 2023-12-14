import { Serializer as РасписаниеКормSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-расписание-корм';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасписаниеКормSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
