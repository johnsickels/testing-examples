import flagpole, { iValue } from "flagpole";

const suite = flagpole('Check Links');

const keyword = 'bit.ly'
const imgKeyword = 'flo'

const sites = ["https://www.pba.com/node/121476", "https://www.pba.com/tournaments/2021/pba50-south-shore-open", "https://www.pba.com/tournaments/2021/pba50-dave-smalls-championship-lanes-open", "https://www.pba.com/tournaments/2021/pba50-spectrum-lanes-open", "https://www.pba.com/node/123546", "https://www.pba.com/node/121481", "http://ubabowling.weebly.com/", "http://www.rodeocanada.com/index.htm", "https://www.tcnationals.com/"]

const partnerScraper = async (url: string) => {

   // get list of urls from firebase
   // make a scenario for each link
      // if has flo, resolve
      // if has bitly, follow through

   return suite.scenario("Partner Site has link", "browser")
      .open(url)
      .next("Check for links", async (context) => {
         const links = await context.findAll('a')
         const hrefPromises = links.map(async link => {
            return (await link.getAttribute('href')).toString()
         })
         const hrefs = await Promise.all(hrefPromises)
         await context.assert(`There is a '${keyword}' link on this page`, hrefs).some(async (href: string) => {
            return href.includes(keyword)
         })

      })
      .next("Check for images", async (context) => {
         const imgs = await context.findAll('img')
         const srcPromises = imgs.map(async img => {
            return (await img.getAttribute('src')).toString()
         })
         const srcs = await Promise.all(srcPromises)
         await context.assert(`There is a '${imgKeyword}' image on this page`, srcs).some(async (src: string) => {
            return src.toLowerCase().includes(imgKeyword)
         })

      })
}

sites.forEach(site => {
   partnerScraper(site)
})