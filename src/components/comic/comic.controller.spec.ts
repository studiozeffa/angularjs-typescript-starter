import {ComicController} from './comic.component';
import {IComicService, IComic} from './comic.service';

class MockComicService implements IComicService {
  constructor(private fulfil: IComic | Error) {}

  getRandomComic(): ng.IPromise<IComic> {
    return new Promise((resolve, reject) => {
      if(this.fulfil instanceof Error) {
        reject(this.fulfil);
      } else {
        resolve(this.fulfil)
      }
    });
  }
}

describe('ComicController', () => {
  it('should fetch a comic on init', async () => {
    const mockComic = {
      num: 1,
      title: 'comic_title',
      img: 'comic_img',
      alt: 'comic_alt'
    }
    const service = new MockComicService(mockComic);
    const spy = jest.spyOn(service, 'getRandomComic');

    const ctrl = new ComicController(service);
    await ctrl.$onInit();

    expect(spy).toHaveBeenCalled();
    expect(ctrl.comic).toEqual(mockComic);
  });

  it('should fetch a comic onRandomComicClick', async () => {
    const mockComic = {
      num: 1,
      title: 'comic_title',
      img: 'comic_img',
      alt: 'comic_alt'
    }
    const service = new MockComicService(mockComic);
    const spy = jest.spyOn(service, 'getRandomComic');

    const ctrl = new ComicController(service);
    await ctrl.onRandomComicClick();

    expect(spy).toHaveBeenCalled();
    expect(ctrl.comic).toEqual(mockComic);
  });
});
