import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
  .scenario("Set by opts", "json")
  .mock({
    body: [{ status: 200, analyzedChunklist: { no: 1, foo: "bar" } }],
    //  status: [200, "OK"],
  })
  .next(async (context) => {
    //  const foo = await context.exists("foo");
    //  context.assert(foo).equals("bar");
    console.log(context.response.jsonBody.$[0].status);
  });
