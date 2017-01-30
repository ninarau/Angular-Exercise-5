import { Ex5Page } from './app.po';

describe('ex5 App', function() {
  let page: Ex5Page;

  beforeEach(() => {
    page = new Ex5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
