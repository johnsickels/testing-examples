// import flagpole from "../../../../flagpole/dist/index.js";
import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site").base("https://k6.io/");

suite
  .scenario("Homepage Loads", "html")
  .open("/docs/getting-started/running-k6")
  .next(async (context) => {
    await context.exists("h1");
  });

suite
  .scenario("Homepage Loads", "html")
  .open("/docs/cloud")
  .next(async (context) => {
    await context.exists("h1");
  });

suite
  .scenario("Homepage Loads", "html")
  .open("/docs/integrations")
  .next(async (context) => {
    await context.exists("h1");
  });

suite
  .scenario("Some Other Page Loads", "html")
  .open("/javascript-api")
  .next(async (context) => {
    await context.exists("m1");
  });
