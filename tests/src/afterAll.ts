import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site").afterAll(() => {
  //  scenarioB.execute();
  //   //   console.log("hello");
});

suite
  .scenario("Homepage Loads", "browser")
  .open("https://www.cars.com")
  .next(async (context) => {
    await context.exists("body");
    //  await scenarioB.execute();
  });

const scenarioB = suite
  .scenario("This happens after all other scenario(s)", "browser")
  .wait()
  .open("https://www.boats.com")
  .next(async (context) => {
    await context.exists("body");
  });
