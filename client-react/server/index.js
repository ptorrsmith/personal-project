// console.log("Hit this")

const server = require('./server')

const port = 8080

server.listen(port, () => {
    console.log("Client server listening on port ", port)
})
