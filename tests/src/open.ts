import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site").base("https://vote.gov/");

suite
  .scenario("Homepage Loads", "browser")
  .open("/")
  .next(async (context) => {
    const clickMe = await context.find("a", "Election process");
    scenarioB.open(clickMe);
  });

const scenarioB = suite
  .scenario("The next page loads", "browser")
  .next(async (context) => {
    await context.exists("h1", "Presidential Election Process");
  });
