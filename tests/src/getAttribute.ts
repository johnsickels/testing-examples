import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
  .scenario("Homepage Loads", "browser")
  .open("https://flocasts.github.io/flagpole")
  // .next(async (context) => {
  //   const foo = await context.exists(".content h1 a");
  //   context.assert(await foo.hasAttribute("data-id")).equals(true);
  //   context
  //     .assert(await foo.getAttribute("data-id"))
  //     .equals("what-is-flagpole");
  // });
  .next(async (context) => {
    const foo = await context.find(".content h1 a");
    console.log(foo);
    context.comment(await foo.getAttribute("data-id"));
  });
