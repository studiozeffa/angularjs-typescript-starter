import styles from './hello.css';

class HelloController implements ng.IController {
  styles: any;
  message: string;

  $onInit() {
    this.styles = styles;
    this.message = 'Hello World';
  }
}

export default HelloController;
