import flagpole from "flagpole";

const suite = flagpole("Empty Array");

suite
  .scenario("Mock Empty Array JSON Body", "json")
  .mock({
    body: {
      foo: [],
    },
  })
  .next("Type of Foo is Array", async (context) => {
    const foo = context.response.jsonBody.$.foo;
    context.assert(foo).type.equals("array");
  })
  .next("Type of Foo is Null", async (context) => {
    const foo = await context.find("foo");
    context.assert(foo).type.equals("array");
  })
  .next("Foo Exists", async (context) => {
    await context.exists("foo");
  });
