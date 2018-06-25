import * as angular from 'angular';
import ButtonModule from './button/button.module';
import ComicModule from './comic/comic.module';

export default angular.module('app.components', [ButtonModule, ComicModule]).name;
