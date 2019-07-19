const { Builder, By, Key, until } = require('selenium-webdriver');

let currentPage = 1
let maxPage;
let driver = new Builder().forBrowser('chrome').build();

(async function start() {
  // 自动打开百度,并搜索黑马程序员
  await driver.get('https://www.lagou.com');
  // 找到元素, 向里面发送一个关键字并按回车
  await driver.findElement(By.css('#changeCityBox ul.clearfix > li:nth-of-type(8)')).click()
  await driver.findElement(By.id('search_input')).sendKeys('前端', Key.RETURN);

  // 在开始爬数据之前获取总页数
  maxPage = await driver.findElement(By.className('totalNum')).getText()
  getData()
})();

async function getData() {
  console.log(`-------当前正在获取第${currentPage}页的数据,共${maxPage}页数据-------`)
  while (true) {
    let notError = true
    try {
      // 以下就是获取数据的代码
      // 获取所有的li
      let items = await driver.findElements(By.css('.item_con_list .con_list_item'))
      // 迭代数组, 获取我们所需要的数据
      let results = []
      for (let i = 0; i < items.length; i++) {
        let item = items[i]
        // console.log(await item.getText())
        let title = await item.findElement(By.css('.position h3')).getText()
        let address = await item.findElement(By.css('.position .add em')).getText()
        let time = await item.findElement(By.css('.position .format-time')).getText()
        let jdLink = await item.findElement(By.css('.position .position_link')).getAttribute('href')
        let money = await item.findElement(By.css('.position .money')).getText()
        let background = await item.findElement(By.css('.position .li_b_l')).getText()
        background = background.replace(money, '')
        let companyName = await item.findElement(By.css('.company .company_name')).getText()
        let companyLink = await item.findElement(By.css('.company .company_name a')).getAttribute('href')
        let industry = await item.findElement(By.css('.company .industry')).getText()
        let tag = await item.findElement(By.css('.list_item_bot .li_b_l')).getText()
        let welfare = await item.findElement(By.css('.list_item_bot .li_b_r')).getText()

        results.push({
          title,
          address,
          time,
          jdLink,
          money,
          background,
          companyName,
          companyLink,
          industry,
          tag,
          welfare
        })
      }

      // 爬取到了一页数据
      console.log(results)

      currentPage++;
      if (currentPage <= maxPage) {
        // 找到下一页按钮  点它!
        await driver.findElement(By.className('pager_next')).click()
        // 递归获取数据
        getData()
      }

    } catch (e) {
      // console.log(e.message)
      if (e) notError = false
    } finally {
      if (notError) break
    }
  }
}