import styles from './comic-loading.css';

const ComicLoadingComponent: ng.IComponentOptions = {
  template: `
    <p class="${styles.message}">Loading...</p>
  `,
};

export default ComicLoadingComponent;
