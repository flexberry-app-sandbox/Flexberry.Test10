import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test.caption'),
          title: i18n.t('forms.application.sitemap.test.title'),
          children: [{
            link: 'i-i-s-test-животные-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-животные-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-животные-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-test-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-сотрудники-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-test-должность-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-должность-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-test-корма-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-корма-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-корма-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-test-расписание-корм-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-расписание-корм-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-расписание-корм-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-test-вид-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-вид-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-вид-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-test-клетки-l',
            caption: i18n.t('forms.application.sitemap.test.i-i-s-test-клетки-l.caption'),
            title: i18n.t('forms.application.sitemap.test.i-i-s-test-клетки-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})