import { WebappAngular4Page } from './app.po';

describe('webapp-angular4 App', () => {
  let page: WebappAngular4Page;

  beforeEach(() => {
    page = new WebappAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
