import { Header } from './components/header';
import { About } from './components/about';

export class App {
  private readonly header: Header;

  private readonly about: About;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.rootElement.appendChild(this.header.element);
    this.about = new About();
    this.rootElement.appendChild(this.about.element);
  }
}
