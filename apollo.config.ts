const SERVER_URL = process.env.REACT_APP_API_URL

module.exports = {
  client: {
    service: {
      name: "yerbapp-app",
      url: `${SERVER_URL}/graphql`
    }
  }
}
