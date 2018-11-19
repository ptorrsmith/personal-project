const server = require('./server')

const port = process.env.PORT || 8080

// console.log("process.env: >>> ", process.env)
server.listen(port, () => {
    console.log("HOSTNAME: ", process.env.HOSTNAME)
    process.env.C9_HOSTNAME && console.log("C9_HOSTNAME: ", process.env.C9_HOSTNAME)

    console.log("PORT: ", process.env.PORT)
    process.env.C9_PORT && console.log("C9_PORT: ", process.env.C9_PORT)

    console.log("Things API and client server listening on port ", port)
})
