import * as angular from 'angular';
import HelloComponent from './hello.component';

export default angular.module('hello', []).component('hello', HelloComponent).name;
