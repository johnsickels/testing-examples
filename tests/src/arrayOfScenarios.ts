import flagpole from "flagpole";

const suite = flagpole('Basic Smoke Test of Site');

const siteIds = [1, 2, 3]

siteIds.forEach(siteId =>
   suite
      .scenario('Home endpoints match with  siteId', 'html')
      .open(`https://www.google.com/search?q=${siteId}`)
      .next({ statusCode: 200 })
)