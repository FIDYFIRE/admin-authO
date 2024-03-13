import auth0 from 'auth0-js';

const auth0Client = new auth0.WebAuth({
  domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN, 
  clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
  redirectUri: process.env.VUE_APP_DOMAINURL + '/auth0callback',  
  responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
  scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE,
});

class AuthStore {
  constructor() {
    this.userIsAuthorized = false;
  }

  setUserIsAuthenticated(isAuthorized) {
    this.userIsAuthorized = isAuthorized;
  }

  auth0Login() {
    console.log("in a store action named auth0Login");
    auth0Client.authorize();
  }

  auth0HandleAuthentication() {
    auth0Client.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        )
        // save the tokens locally
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);  

        // Rediriger l'utilisateur vers la page des membres
        window.location.href = '/admin/dashboard';
      } 
      else if (err) {
        alert('login failed. Error #KJN838');
        // Rediriger l'utilisateur vers la page de connexion en cas d'erreur
        window.location.href = '/login';
        console.log(err);
      }
    })
  }

  auth0Logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    // redirect to auth0 logout to completely log the user out
    window.location.href = process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL + "/v2/logout?returnTo=" + process.env.VUE_APP_DOMAINURL + "/login&client_id=" + process.env.VUE_APP_AUTH0_CONFIG_CLIENTID; 
  }
}

const authStore = new AuthStore();
export default authStore;
