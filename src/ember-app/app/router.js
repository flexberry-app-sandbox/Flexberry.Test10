import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test-вид-l');
  this.route('i-i-s-test-вид-e',
  { path: 'i-i-s-test-вид-e/:id' });
  this.route('i-i-s-test-вид-e.new',
  { path: 'i-i-s-test-вид-e/new' });
  this.route('i-i-s-test-должность-l');
  this.route('i-i-s-test-должность-e',
  { path: 'i-i-s-test-должность-e/:id' });
  this.route('i-i-s-test-должность-e.new',
  { path: 'i-i-s-test-должность-e/new' });
  this.route('i-i-s-test-животные-l');
  this.route('i-i-s-test-животные-e',
  { path: 'i-i-s-test-животные-e/:id' });
  this.route('i-i-s-test-животные-e.new',
  { path: 'i-i-s-test-животные-e/new' });
  this.route('i-i-s-test-клетки-l');
  this.route('i-i-s-test-клетки-e',
  { path: 'i-i-s-test-клетки-e/:id' });
  this.route('i-i-s-test-клетки-e.new',
  { path: 'i-i-s-test-клетки-e/new' });
  this.route('i-i-s-test-корма-l');
  this.route('i-i-s-test-корма-e',
  { path: 'i-i-s-test-корма-e/:id' });
  this.route('i-i-s-test-корма-e.new',
  { path: 'i-i-s-test-корма-e/new' });
  this.route('i-i-s-test-расписание-корм-l');
  this.route('i-i-s-test-расписание-корм-e',
  { path: 'i-i-s-test-расписание-корм-e/:id' });
  this.route('i-i-s-test-расписание-корм-e.new',
  { path: 'i-i-s-test-расписание-корм-e/new' });
  this.route('i-i-s-test-сотрудники-l');
  this.route('i-i-s-test-сотрудники-e',
  { path: 'i-i-s-test-сотрудники-e/:id' });
  this.route('i-i-s-test-сотрудники-e.new',
  { path: 'i-i-s-test-сотрудники-e/new' });
});

export default Router;
