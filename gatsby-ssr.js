import React from 'react'
import { ReactKeycloakProvider } from '@react-keycloak/web'

const Loading = () => <div>Loading...</div>

export const wrapRootElement = ({ element }) => {
    
    return (<ReactKeycloakProvider 
    authClient={{}} //an empty object instead of the keycloak instance for the static HTML pages
    initOptions={{
        onLoad: "login-required",
    }}
    LoadingComponent={<Loading />}
    >
        {element}
    </ReactKeycloakProvider>)
}