import flagpole, { FlagpoleExecution } from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
  .scenario("Homepage Loads", "html")
  .open("https://www.spacex.com/launches/")
  .next(async (context) => {
    // await context.findHavingText("span", "WATCH");
    console.log(context.scenario.responseType);
  });

suite
  .scenario("Homepage Loads", "html")
  .open("https://www.spacex.com/launches/")
  .next(async (context) => {
    // await context.findHavingText("span", "WATCH");
    console.log(context.scenario.responseType);
  });
