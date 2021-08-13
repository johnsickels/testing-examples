import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site");

suite
   .scenario("Set by opts", "json")
   .mock({
      body: { data: 'foo' },
      status: [200, "OK"],
   })
   .next(async (context) => {
      context.assert('one').equals(1)
   });
