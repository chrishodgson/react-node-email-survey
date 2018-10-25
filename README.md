# ReactReduxNodeEmailSurvey

A full stack application built using react, redux, node and express that allows users to login via Google and send simple surveys to a list of recipients via sendgrid using credits paid for via stripe. A summary of survey responses can be viewed in the app. The application can be run in development or production mode according to the `node.process.NODE_ENV` setting.

## Running in Development mode

The following assumes that `npm` is installed. Checkout this repo, install dependencies, then start the webpack process with the following:

```
> git clone https://github.com/chrishodgson/ReactReduxNodeEmailSurvey.git && cd ReactReduxNodeEmailSurvey
```

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
- mongoURI: MongoDB Database connection
- cookieKey: random string for a cookie key ie kjhkfdhskjfhd
- stripePublishableKey: Stripe API Publishable Key
- stripeSecretKey: Stripe API Secret Key
- sendGridKey: SendGrid API Key

create server keys file `client/.env.development` containing the following, but replacing REPLACE_ME with your values (note the values should not be wrapped in quotes):

```
REACT_APP_STRIPE_KEY=REPLACE_ME
```

install npm dependencies for node and client servers then start the node server:

```
> npm install && npm install --prefix=client && npm run dev
```

## Running in Production mode

todo
