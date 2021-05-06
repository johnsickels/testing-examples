import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
  .scenario("Homepage Loads", "browser")
  .open("https://www.jasonbyrne.net")
  .next(async (context) => {
    await context.exists("h1");
  });
