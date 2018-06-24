import * as angular from 'angular';

import ComicComponent from './comic.component';
import ComicService from './comic.service';
import ComicUIComponent from './comic-ui/comic-ui.component';
import ComicLoadingComponent from './comic-loading/comic-loading.component';

export default angular
  .module('comic', [])
  .component('comicUi', ComicUIComponent)
  .component('comicLoading', ComicLoadingComponent)
  .component('comic', ComicComponent)
  .service('ComicService', ComicService).name;
