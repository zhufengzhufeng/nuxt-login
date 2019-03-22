const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express();
const user = require('./routes/user.js');
let session = require('express-session');
let bodyparser = require('body-parser');
let Redis = require('connect-redis')(session);
app.use(session({
  store:new Redis({
    host:'127.0.0.1',
    port:6379
  }),
  saveUninitialized:true,
  resave:false,
  secret:'zfpx'
}))
app.use(bodyparser.json());

app.use('/user',user);


// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
