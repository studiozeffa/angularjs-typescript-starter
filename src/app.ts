import * as angular from 'angular';
import AppModule from './app.module';

angular.element(() => {
  const appEl = document.createElement('app');
  document.body.appendChild(appEl);
  angular.bootstrap(document.body, [AppModule]);
});
