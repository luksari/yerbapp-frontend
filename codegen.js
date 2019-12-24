module.exports = {
  "schema": [
      {
          "http://157.230.108.68:4000/graphql": {
              "headers": {
                  "Authorization": "Bearer " + process.env.AUTH_TOKEN
              }
          }
      }
    //   {
    //     "http://localhost:4000/graphql": {
    //         "headers": {
    //             "Authorization": "Bearer " + process.env.AUTH_TOKEN
    //         }
    //     }
    // }
  ],
  "documents": [
      "./src/**/*.tsx",
      "./src/**/*.ts"
  ],
  "overwrite": true,
  "generates": {
      "./src/generated/graphql.ts": {
          "plugins": [
              "typescript",
              "typescript-operations",
              "typescript-react-apollo"
          ],
          "config": {
            "skipTypename": false,
            "withHooks": true,
            "withHOC": false,
            "withComponent": false
          }
      },
      "./graphql.schema.json": {
        "plugins": [
              "introspection"
        ]
      }
  }
};
