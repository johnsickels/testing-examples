import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site").base("https://www.espn.com");

suite
  .scenario("Homepage Loads", "browser")
  .open("/")
  .next(async (context) => {
    await context.click("article.contentItem a");
    //  await context.waitForVisible("span", "MLB");
    return await context.waitForNavigation(20000);
    //  await context.pause(5000);
    //  const undef = await context.findAll("foo");
    //  await context.eval(() => undef.forEach(() => {}));
    // await context.exists("h1");
  })
  .next(async (context) => {
    await context.exists("h1");
  });
