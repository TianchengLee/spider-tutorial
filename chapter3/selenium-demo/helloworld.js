const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // 自动打开百度,并搜索黑马程序员
    await driver.get('https://www.boxuegu.com');
    // 找到元素, 向里面发送一个关键字并按回车
    await driver.findElement(By.id('kw')).sendKeys('传智播客', Key.RETURN);
    // 验证是否搜索成功
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    // 退出
    // await driver.quit();
  }
})();