import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site").base("https://suite.st/");

suite
  .scenario("Homepage Loads", "browser")
  .before(async (scenario) => {
    scenario.comment("Before comment");
    //  await scenario.cancel();
  })
  .open("/")
  .next(async (context) => {
    const menuItems = await context.findAll("ul.menu li");
    context.assert(menuItems.length).greaterThan(2);
    await scenarioB.cancel();
  });

const scenarioB = suite
  .scenario("Homepage Loads", "browser")
  //   .wait()
  //   .before(async (scenario) => {
  //     scenario.comment("Before comment");
  //     await scenario.cancel();
  //   })
  .open("/features")
  .next(async (context) => {
    const menuItems = await context.findAll("ul.menu li");
    context.assert(menuItems.length).greaterThan(2);
  });
