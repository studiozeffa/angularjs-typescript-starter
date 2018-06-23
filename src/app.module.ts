import * as angular from 'angular';

import ComponentsModule from './components/components.module';
import AppComponent from './app.component';

export default angular.module('app', [ComponentsModule]).component('app', AppComponent).name;
