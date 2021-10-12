const expect = require("chai").expect;
const manageData = require("../js/utilities/manageData.jsx").manageData;

describe("Sorting the data fetched from the API", () => {
  const res = {
    total_count: 1099999,
    incomplete_results: false,
    items: [
      {
        id: 28457823,
        node_id: "MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==",
        name: "freeCodeCamp",
        full_name: "freeCodeCamp/freeCodeCamp",
        private: false,
        owner: {
          login: "freeCodeCamp",
          id: 9892522,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=",
          avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4",
          gravatar_id: "",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
        description:
          "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
      },
    ],
  };
  const expectedResult={
    full_name: "freeCodeCamp/freeCodeCamp",
    avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4",
    description: "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    index: 0
  }
  const items= [
    {
      id: 28457823,
      node_id: "MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==",
      name: "freeCodeCamp",
      full_name: "freeCodeCamp/freeCodeCamp",
      private: false,
      owner: {
        login: "freeCodeCamp",
        id: 9892522,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjk4OTI1MjI=",
        avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4",
        gravatar_id: "",
        type: "Organization",
        site_admin: false,
      },
      html_url: "https://github.com/freeCodeCamp/freeCodeCamp",
      description:
        "freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",
    },
  ];
  
  it("It must currectly returns the itmes key from the array", () => {
        expect(manageData(res)).to.be.deep.equal(items);
      });
//   it("It must currectly returns the object described.", () => {
//     expect(manageData(res)).to.be.deep.equal(expectedResult);
//   });
});
