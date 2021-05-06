import flagpole from "flagpole";

async function main() {
  const suite = flagpole("Basic Smoke Test of Site").base("http://reqres.in");

  const scenarioA = () => {
    suite
      .scenario("Homepage Loads", "json")
      .open("/api/users")
      .next(async (context) => {
        context.assert(context.response.statusCode).equals(200);
      });
  };

  await new Promise((resolve) => setTimeout(resolve, 5000));
  scenarioA();
}

main();
