import { browser, by, element } from 'protractor';

export class PrkemonUniversePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
