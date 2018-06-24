import ComicService, { IComic } from './comic.service';

export class ComicController implements ng.IController {
  static $inject: string[] = ['ComicService'];
  comic: IComic;
  isLoading = false;

  constructor(private comicService: ComicService) {};

  $onInit() {
    this.isLoading = true;
    this.comicService
      .getRandomComic()
      .then(comic => this.comic = comic)
      .finally(() => this.isLoading = false);
  }
}

const ComicComponent: ng.IComponentOptions = {
  controller: ComicController,
  template: `
    <comic-ui comic="$ctrl.comic" loading="$ctrl.isLoading" />
  `
};

export default ComicComponent;
