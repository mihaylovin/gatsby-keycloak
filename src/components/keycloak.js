import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
    realm: "gatsby",
    url: "http://localhost:8080/auth/",
    clientId: "gatsby-ui",
  })

export default keycloak