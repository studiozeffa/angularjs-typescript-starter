import styles from './hello.css';

class HelloController {
  styles: any;
  message: string;

  $onInit() {
    this.styles = styles;
    this.message = 'Hello World';
  }
}

export default HelloController;
