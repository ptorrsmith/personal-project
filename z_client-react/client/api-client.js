const request = require('superagent')


const port = process.env.PORT || 8081
console.log("process.env: ", process.env)
const thingsAPIBaseURL = 'http://edaptorrsmith.ddns.net:8081/api/v1'


export function getThings() {
    console.log("@ api-client getThings from " + thingsAPIBaseURL + "'/' ")
    return request.get(thingsAPIBaseURL + '/things/')
        .then(res => res.body) // or .then({body:things} => {})
        .then(things => { // or simply .then(things)
            return things
        })
}
