import { Flagpole } from "flagpole";

const suite = Flagpole.suite("Basic Smoke Test of Site");

suite
  .browser("Homepage Loads")
  .open("https://www.npmjs.com/")
  .next(async (context) => {
    await context.page.waitForFunction(
      'document.querySelector(".mr4").innerText == "Nobody Publish Monsters"'
    );
    context.comment("Passed!");
  });
