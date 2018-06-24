import styles from './comic-ui.css';

export class ComicUIController implements ng.IController {
  $onInit() {
    console.log(this);
  }
}

const ComicUIComponent: ng.IComponentOptions = {
  bindings: {
    comic: '<',
    loading: '<',
  },
  controller: ComicUIController,
  template: `
    <div class="${styles.container}">
      <comic-loading ng-if="!$ctrl.comic && $ctrl.loading"></comic-loading>
      <div ng-if="$ctrl.comic">
        <header>
          <h1 class="${styles.title}">{{$ctrl.comic.title}}</h1>
        </header>
        <p class="${styles.num}">#{{$ctrl.comic.num}}</p>
        <img class="${styles.image}" ng-src="{{$ctrl.comic.img}}" alt="{{$ctrl.comic.alt}}" />
        <p class="${styles.license}"><a href="https://xkcd.com/license.html">License</a></p>
      </div>
    </div>
  `
};

export default ComicUIComponent;