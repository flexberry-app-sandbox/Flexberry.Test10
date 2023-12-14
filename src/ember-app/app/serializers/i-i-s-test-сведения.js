import { Serializer as СведенияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-test-сведения';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СведенияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
