import styles from './comic-ui.css';

const ComicUIComponent: ng.IComponentOptions = {
  bindings: {
    comic: '<',
    loading: '<',
    onRandomComicClick: '&',
  },
  template: `
    <div class="${styles.container}">
      <comic-loading ng-if="!$ctrl.comic && $ctrl.loading"></comic-loading>
      <div ng-if="$ctrl.comic">
        <header>
          <h1 class="${styles.title}">{{$ctrl.comic.title}}</h1>
        </header>
        <p class="${styles.num}">#{{$ctrl.comic.num}}</p>
        <img data-e2e="comic-img" class="${styles.image}" ng-src="{{$ctrl.comic.img}}" alt="{{$ctrl.comic.alt}}" />
        <p class="${styles.license}"><a href="https://xkcd.com/license.html">License</a></p>
        <btn data-e2e="comic-btn" class="${
          styles.button
        }" on-click="$ctrl.onRandomComicClick()" disabled="$ctrl.loading">Another?</btn>
      </div>
    </div>
  `,
};

export default ComicUIComponent;
