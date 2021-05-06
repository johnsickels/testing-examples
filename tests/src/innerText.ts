import { Flagpole } from "flagpole";

const suite = Flagpole.suite("Basic Smoke Test of Site");

suite
  .html("Homepage Loads")
  .open("https://www.stackoverflow.com")
  .next(async context => {
    //  const h1 = await context.find("h1");
    //  context
    //    .assert("H1 says 'We <3 people who code'", await h1.getInnerText())
    //    .equals("We <3 people who code");

    context
      .assert(await (await context.find("h1")).getInnerText())
      .equals("We <3 people who code");
  });
