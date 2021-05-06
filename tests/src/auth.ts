import flagpole, { HttpRequest } from "flagpole";

const suite = flagpole("Authenticate a request without the UI");

suite
  .scenario("Get some data", "json")
  .before(async (scenario) => {
    // build your request for a bearer token
    const request = new HttpRequest({
      uri: "", // your token url here
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: {}, // your user object here
    });

    // send the request
    const response = await request.fetch();

    // parse out the token
    const token = JSON.parse(response.body).token;

    // set it for the request
    scenario.setBearerToken(token);
  })
  .open("/api/protected")
  .next(async (context) => {
    context.assert(context.response.statusCode).equals(200);
  });
