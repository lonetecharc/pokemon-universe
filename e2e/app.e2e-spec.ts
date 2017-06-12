import { PrkemonUniversePage } from './app.po';

describe('prkemon-universe App', () => {
  let page: PrkemonUniversePage;

  beforeEach(() => {
    page = new PrkemonUniversePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
