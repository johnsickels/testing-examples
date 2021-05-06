import flagpole from "flagpole";

const suite = flagpole("Basic Click Test");

// suite
//   .browser("Homepage Loads")
//   .open("https://www.typescriptlang.org/")
//   .next(async (context) => {
//     const docs = await context.find("nav li a");
//     context.assert(await docs.getInnerText()).contains("Documentation");
//     await context.click(String(docs));
//     return await context.waitForNavigation();
//   })
//   .next(async (context) => {
//     context
//       .assert(await (await context.find("h1")).getInnerText())
//       .contains("Documentation");
//   });

suite
  .scenario("Click me", "browser")
  .open("https://flocasts.github.io/flagpole/#/")
  .next(async (context) => {
    // await context.waitForExists("a.login-link");
    await context.pause(5000);
    await context.click("li");
    // await context.click("p");
    // await context.waitForNavigation();
  });

// suite
//   .scenario("Click me, too!", "browser")
//   .open("https://www.milesplit.com")
//   .next("Click on Registration", async (context) => {
//     // Registration button in navbar when full screen
//     await context.exists(".registration > a");
//     await context.click(".registration > a");

//     // Regstration button in hamburger menu when screen size < 970px
//     await context.exists("#navbar .fa-bars");
//     await context.click("#navbar .fa-bars");
//     await context.exists(".registration a");
//     await context.click(".registration a");
//   });
