import { TimeManageAppPage } from './app.po';

describe('time-manage-app App', () => {
  let page: TimeManageAppPage;

  beforeEach(() => {
    page = new TimeManageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
