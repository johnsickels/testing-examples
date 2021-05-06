import flagpole from "flagpole";

const suite = flagpole("Do some CRUD operations").base("https://reqres.in");

suite
  .scenario("POST a new user", "json")
  .setJsonBody({
    name: "morpheus",
    job: "leader",
  })
  .open("POST /api/users")
  .next(async (context) => {
    const id = context.response.jsonBody.$.id;
    context.comment(id);
    await get.execute({
      id: id,
    });
    // get.execute();
    // get.open(`/api/users/${id}`);
  });

const get = suite
  .scenario("GET the new user", "json")
  .open(`/api/users/{id}`)
  .next(async (context) => {
    context.assert(context.response.statusCode).equals(200);
  });
