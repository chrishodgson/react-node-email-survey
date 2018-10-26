# ReactFullStackEmailSurvey

A full stack application built using react, redux, node and express that allows users to login via Google and send simple surveys to a list of recipients via sendgrid using credits paid for via stripe. A summary of survey responses can be viewed in the app. The application can be run in development or production mode according to the `node.process.NODE_ENV` setting.

## Running in Development mode

```
> git clone https://github.com/chrishodgson/ReactReduxNodeEmailSurvey.git && cd ReactReduxNodeEmailSurvey
```

### Server keys

create server keys file `config/dev.keys` containing the following, but replacing REPLACE_ME with your
values (note the values should be wrapped in quotes):

```
module.exports = {
  googleClientID: REPLACE_ME,
  googleClientSecret: REPLACE_ME,
  mongoURI: REPLACE_ME,
  cookieKey: REPLACE_ME,
  stripePublishableKey: REPLACE_ME,
  stripeSecretKey: REPLACE_ME,
  sendGridKey: REPLACE_ME
  redirectDomain: 'http://localhost:3000'
};
```

These keys are:

- googleClientID: Google OAuth Client ID
- googleClientSecret: Google OAuth Client Secret
- mongoURI: MongoDB Database connection ie `mongodb://USER:PASSWORD@HOST:PORT/DATABASE`
- cookieKey: random string for a cookie key ie `kjhkfdhskjfhd`
- stripePublishableKey: Stripe API Publishable Key
- stripeSecretKey: Stripe API Secret Key
- sendGridKey: SendGrid API Key

Tips:

- Signup for mLab for the mongoDB database as service `https://mlab.com/`
- Signup for stripe key `https://stripe.com/`
- Signup for sendgrid key `https://app.sendgrid.com/`
- Signup for OAuth clientId and secret `https://developers.google.com/`

### Client keys

Create client keys file `client/.env.development` containing the following, but replacing REPLACE_ME with your values (note the values should not be wrapped in quotes):

```
REACT_APP_STRIPE_KEY=REPLACE_ME
```

### Install dependencies and start the server

The following assumes that `npm` is installed.

```
> npm install && npm install --prefix=client && npm run dev
```
