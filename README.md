<h1 align="center">
  Gatsby with Keycloak
</h1>

## 🚀 Quick start

1.  **Configure the keycloak setting**

    Change the keycloak settings in `src/components/keycloak.js`

    ```
    const keycloak = new Keycloak({
      realm: "KEYCLOAK_REALM",
      url: "http://KEYCLOAK_URL/auth/",
      clientId: "KEYCLOAK_CLIENT_ID",
    })
    ```

1.  **Run DEV server.**

    ```
    npm run develop
    ```


1.  **Build Gatsby app.**

    ```
    npm run build
    ```



