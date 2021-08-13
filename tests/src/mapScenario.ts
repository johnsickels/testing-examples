import flagpole from "flagpole";

const suite = flagpole('Basic Smoke Test of Site');

const siteIds = [1, 2, 3]

suite.mapScenarios(siteIds, (siteId, i) =>
   suite.scenario(`Check Site Id #${i}`, "html").open(`https://www.google.com/search?q=${siteId}`).next({
      statusCode: 200,
   })
);