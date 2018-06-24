import styles from './comic-loading.css';

export class ComicLoadingController implements ng.IController {}

const ComicLoadingComponent: ng.IComponentOptions = {
  controller: ComicLoadingController,
  template: `
    <p class="${styles.message}">Loading...</p>
  `
};

export default ComicLoadingComponent;