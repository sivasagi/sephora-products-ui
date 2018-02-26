import { AngularReduxStorePage } from './app.po';

describe('angular-redux-store App', () => {
  let page: AngularReduxStorePage;

  beforeEach(() => {
    page = new AngularReduxStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
