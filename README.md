# ReactFullStackEmailSurvey

A full stack application built using react, redux, node and express that allows users to login via Google and send simple surveys to a list of recipients via sendgrid using credits paid for via stripe. A summary of survey responses can be viewed in the app. The application can be run in development or production mode according to the `node.process.NODE_ENV` setting.

## Running in Development mode

```
> git clone https://github.com/chrishodgson/ReactReduxNodeEmailSurvey.git && cd ReactReduxNodeEmailSurvey
```

### Server keys

```
> cp config/dev.keys.dist config/dev.keys
```

Replace REPLACE_ME with your values:

- `googleClientID`: Google OAuth Client ID
- `googleClientSecret`: Google OAuth Client Secret
- `mongoURI`: MongoDB Database connection ie `mongodb://USER:PASSWORD@HOST:PORT/DATABASE`
- `cookieKey`: random string for a cookie key ie `kjhkfdhskjfhd`
- stripePublishableKey: Stripe API Publishable Key
- `stripeSecretKey`: Stripe API Secret Key
- `sendGridKey`: SendGrid API Key

Tips:

- Signup for mLab for the mongoDB database as service `https://mlab.com`
- Signup for Stripe key `https://stripe.com`
- Signup for Sendgrid key `https://app.sendgrid.com`
- Signup for Google clientId and secret `https://console.developers.google.com` by enabling the Google+ Api in the google developers console

### Client keys

```
> cp client/env.dist client/.env.development
```

Replace REPLACE_ME with your values:

- `REACT_APP_STRIPE_KEY`: the same value as `stripePublishableKey` above, but without the quotes

### Install dependencies and start the server

The following assumes that `npm` is installed.

```
> npm install && npm install --prefix=client && npm run dev
```
