import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTestВидLForm from './forms/i-i-s-test-вид-l';
import IISTestДолжностьLForm from './forms/i-i-s-test-должность-l';
import IISTestЖивотныеLForm from './forms/i-i-s-test-животные-l';
import IISTestКлеткиLForm from './forms/i-i-s-test-клетки-l';
import IISTestКормаLForm from './forms/i-i-s-test-корма-l';
import IISTestРасписаниеКормLForm from './forms/i-i-s-test-расписание-корм-l';
import IISTestСотрудникиLForm from './forms/i-i-s-test-сотрудники-l';
import IISTestВидEForm from './forms/i-i-s-test-вид-e';
import IISTestДолжностьEForm from './forms/i-i-s-test-должность-e';
import IISTestЖивотныеEForm from './forms/i-i-s-test-животные-e';
import IISTestКлеткиEForm from './forms/i-i-s-test-клетки-e';
import IISTestКормаEForm from './forms/i-i-s-test-корма-e';
import IISTestРасписаниеКормEForm from './forms/i-i-s-test-расписание-корм-e';
import IISTestСотрудникиEForm from './forms/i-i-s-test-сотрудники-e';
import IISTestВидModel from './models/i-i-s-test-вид';
import IISTestДолжностьModel from './models/i-i-s-test-должность';
import IISTestЖивотныеModel from './models/i-i-s-test-животные';
import IISTestКлеткиModel from './models/i-i-s-test-клетки';
import IISTestКормаModel from './models/i-i-s-test-корма';
import IISTestРасписаниеКормModel from './models/i-i-s-test-расписание-корм';
import IISTestСведенияModel from './models/i-i-s-test-сведения';
import IISTestСотрудникиModel from './models/i-i-s-test-сотрудники';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test-вид': IISTestВидModel,
    'i-i-s-test-должность': IISTestДолжностьModel,
    'i-i-s-test-животные': IISTestЖивотныеModel,
    'i-i-s-test-клетки': IISTestКлеткиModel,
    'i-i-s-test-корма': IISTestКормаModel,
    'i-i-s-test-расписание-корм': IISTestРасписаниеКормModel,
    'i-i-s-test-сведения': IISTestСведенияModel,
    'i-i-s-test-сотрудники': IISTestСотрудникиModel
  },

  'application-name': 'Test',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test',
          title: 'Test'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test: {
          caption: 'Test',
          title: 'Test',
          'i-i-s-test-животные-l': {
            caption: 'Животные',
            title: ''
          },
          'i-i-s-test-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-test-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-test-корма-l': {
            caption: 'Корма',
            title: ''
          },
          'i-i-s-test-расписание-корм-l': {
            caption: 'Расписание корм',
            title: ''
          },
          'i-i-s-test-вид-l': {
            caption: 'Вид',
            title: ''
          },
          'i-i-s-test-клетки-l': {
            caption: 'Клетки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test-вид-l': IISTestВидLForm,
    'i-i-s-test-должность-l': IISTestДолжностьLForm,
    'i-i-s-test-животные-l': IISTestЖивотныеLForm,
    'i-i-s-test-клетки-l': IISTestКлеткиLForm,
    'i-i-s-test-корма-l': IISTestКормаLForm,
    'i-i-s-test-расписание-корм-l': IISTestРасписаниеКормLForm,
    'i-i-s-test-сотрудники-l': IISTestСотрудникиLForm,
    'i-i-s-test-вид-e': IISTestВидEForm,
    'i-i-s-test-должность-e': IISTestДолжностьEForm,
    'i-i-s-test-животные-e': IISTestЖивотныеEForm,
    'i-i-s-test-клетки-e': IISTestКлеткиEForm,
    'i-i-s-test-корма-e': IISTestКормаEForm,
    'i-i-s-test-расписание-корм-e': IISTestРасписаниеКормEForm,
    'i-i-s-test-сотрудники-e': IISTestСотрудникиEForm
  },

});

export default translations;
