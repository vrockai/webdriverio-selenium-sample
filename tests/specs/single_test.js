describe('foo', () => {
  beforeEach(() => {
    browser.reloadSession();
  });

  it('bar', () => {
    browser.url("https://duckduckgo.com/");
    const title = browser.getTitle();
    expect(title).toBe('DuckDuckGo — Privacy, simplified.');
  });

  it('kaz', () => {
    browser.url("https://brave.com/");
    const title = browser.getTitle();
    expect(title).toBe('Secure, Fast & Private Web Browser with Adblocker | Brave Browser');
  });
});
