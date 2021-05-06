import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
  .scenario("Homepage Loads", "html")
  .open("https://www.google.com")
  .next(async (context) => {
    context.assert(undefined).equals(undefined);
  })
  .next(async (context) => {
    context.assert("Assert this is true", undefined).equals(undefined);
  })
  .next(async (context) => {
    context.assert("Assert this is true", false).equals(undefined);
  });
