import { IComic, IComicService } from './comic.service';

export class ComicController implements ng.IController {
  static $inject: string[] = ['ComicService'];
  comic: IComic | null = null;
  isLoading = false;

  constructor(private comicService: IComicService) {};

  $onInit() {
    this.fetchComic();
  }

  onRandomComicClick() {
    this.fetchComic();
  }

  private fetchComic(): ng.IPromise<IComic> {
    this.isLoading = true;
    return this.comicService
      .getRandomComic(this.comic)
      .then(comic => this.comic = comic)
      .finally(() => this.isLoading = false)
  }
}

const ComicComponent: ng.IComponentOptions = {
  controller: ComicController,
  template: `
    <comic-ui comic="$ctrl.comic" loading="$ctrl.isLoading" on-random-comic-click="$ctrl.onRandomComicClick()" />
  `
};

export default ComicComponent;
