import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
  .scenario("Homepage Loads", "html")
  .open("https://www.google.com/")
  .next(async (context) => {
    context.assert(context.response.statusCode).equals(200);

    const messages = await promiseAll([
      "https://developer.mozilla.org/en-US/",
      "https://www.w3schools.com/",
      "https://testautomationu.applitools.com/",
    ]);
    console.log(messages);

    context.assert(messages).length.greaterThan(0);
  });

const promiseAll = async (array: string[]) => {
  let arr: string[] = [];
  //   await Promise.all(
  array.map(async (path) => {
    suite
      .html(`${path} Scenario`)
      .open(path)
      .next(async (context) => {
        context.assert(context.response.statusCode).equals(200);
        arr.push(context.response.statusMessage.toString());
      })
      .waitForFinished();
  });
  //   );
  return arr;
};
