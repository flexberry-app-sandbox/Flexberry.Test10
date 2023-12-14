import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      вид: { serialize: 'odata-id', deserialize: 'records' },
      клетки: { serialize: 'odata-id', deserialize: 'records' },
      корма: { serialize: 'odata-id', deserialize: 'records' },
      животные: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
