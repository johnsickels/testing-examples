import flagpole from "flagpole";

const suite = flagpole("Basic Smoke Test of Site")
  .base("http://reqres.in")
  .beforeAll(async () => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
  });

const scenarioA = suite
  .scenario("Homepage Loads", "json")
  .wait()
  .open("/api/users?page=2")
  .next(async (context) => {
    context.assert("200", context.response.statusCode).equals(200);
  });

async function main() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await scenarioA.execute();
}

// main();
