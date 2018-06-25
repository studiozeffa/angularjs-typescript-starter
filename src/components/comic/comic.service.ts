const NUMBER_OF_COMICS = 2010;

export interface IComic {
  num: number;
  title: string;
  img: string;
  alt: string;
}

export interface IComicService {
  getRandomComic: (currentComic: IComic | null) => ng.IPromise<IComic>
}

export default class ComicService implements IComicService {
  static $inject: string[] = ['$http'];
  constructor(private $http: ng.IHttpService) {}

  private getRandomNumber(): number {
    // Return a number between 1 and NUMBER_OF_COMICS.
    return Math.ceil(Math.random() * NUMBER_OF_COMICS);
  }

  private fetchJSON(comicNum: number): ng.IPromise<IComic> {
    const apiUrl = `https://xkcd.now.sh/${comicNum}`;
    return this.$http.get<IComic>(apiUrl).then(res => res.data);
  }

  getRandomComic(current: IComic | null): ng.IPromise<IComic> {
    const currentNum = (current && current.num) || -1;
    let comicNum = currentNum;
    while(comicNum === currentNum) {
      comicNum = this.getRandomNumber()
    }
    console.log(`Fetching comic #${comicNum}`);
    return this.fetchJSON(comicNum);
  }
}