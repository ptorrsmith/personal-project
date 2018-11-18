const server = require('./server')

const port = 8081 //process.env.PORT || 8081

server.listen(port, () => {
    console.log("API listening on port ", port)
})
