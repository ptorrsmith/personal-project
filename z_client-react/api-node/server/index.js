const server = require('./server')

const port = 8081 //process.env.PORT || 8081

// console.log("process.env: >>> ", process.env)
server.listen(port, () => {
    console.log("HOSTNAME: ", process.env.HOSTNAME)
    process.env.C9_HOSTNAME && console.log("C9_HOSTNAME: ", process.env.C9_HOSTNAME)

    console.log("PORT: ", process.env.PORT)
    process.env.C9_PORT && console.log("C9_PORT: ", process.env.C9_PORT)

    console.log("ThingsAPI listening on port ", port)
})
