import { Serializer as КлеткиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-клетки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлеткиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
