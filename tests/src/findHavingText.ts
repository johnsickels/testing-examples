import { Flagpole } from "flagpole";

const suite = Flagpole.suite("Basic Smoke Test of Site");

suite
  .html("Homepage Loads")
  .open("https://www.github.com")
  .next(async (context) => {
    // await (await context.findHavingText("h1", "Built for developers")).exists();
  });
