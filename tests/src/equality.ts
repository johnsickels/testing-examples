import flagpole from "flagpole";
import * as assert from "assert";

const suite = flagpole("Basic Smoke Test of Site");

const foo = {
  type: "date",
  text: "3/6/2017",
  timestamp: "2017-03-06T23:59:59+00:00",
};

suite
  .scenario("Set by opts", "json")
  .mock({
    body: foo,
  })
  .next(async (context) => {
    const resObject = context.response.jsonBody.$;

    //  context
    //    .assert(resObject.type)
    //    .equals("date")
    //    .assert(resObject.text)
    //    .equals("3/6/2017")
    //    .assert(resObject.timestamp)
    //    .equals("2017-03-06T23:59:59+00:00");

    //  context
    //    .assert({ foo: "bar", baz: "biz" })
    //    .equals({ baz: "biz", foo: "bar" }); // Pass
    //  context
    //    .assert({ foo: "bar", baz: "biz" })
    //    .exactly({ baz: "biz", foo: "bar" }); // Fail

    //  console.log(assert.deepStrictEqual(resObject, { foo: "bar" }));

    context.assert(assert.deepStrictEqual(resObject, foo)).equals(undefined);
    context
      .assert(
        assert.deepStrictEqual(
          resObject,
          { foo: "bar" },
          "Objects not strictly equal"
        )
      )
      .equals(undefined);
  });
