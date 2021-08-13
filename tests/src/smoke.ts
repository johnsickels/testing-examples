import flagpole, { Scenario } from "flagpole";

const suite = flagpole('Basic Smoke Test of Site');

// suite.scenario("Homepage Loads", "browser")
//    .open("/articles")
//    .next(async (context) => {

//       const statusCode = context.response.statusCode
//       context.assert(statusCode).equals(200)

//    }).next(async (context) => {

//       const firstAthlete = await context.exists('.articles a')
//       await firstAthlete.click()

//    })
//    .next(async context => {

//       await context.waitForNavigation()
//       context.assert(context.response.statusCode).equals(200)

//    })

suite.json('Test the API').open('/api/v1/athletes/top-ranked').next({ statusCode: 200 }).next(async context => {
   const data = await context.find('data')
   context.assert(data.every(athlete => athlete.stateRank)).equals(true)

})

