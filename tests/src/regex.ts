import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
  .scenario("Homepage Loads", "browser")
  .open("https://en.wikipedia.org/wiki/Regular_expression")
  .next(async (context) => {
    const rankings = await context.find("#toc a", /^Hist.*$/);
    scenarioB.open(rankings);
  });
const scenarioB = suite
  .scenario("Test my regex theory", "browser")
  .next(async (context) => {
    context
      .assert(context.response.url)
      .equals("https://en.wikipedia.org/wiki/Regular_expression#History");
  });
