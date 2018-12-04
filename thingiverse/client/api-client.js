// const request = require('superagent')
import request from 'superagent'

// const port = process.env.PORT || 8080
// console.log("api-client")
// console.log("process.env: ", process.env)
// const thingsAPIBaseURL = 'http://edaptorrsmith.ddns.net:8080/api/v1'
const thingsAPIBaseURL = '/api/v1'


export function getThings() {
    // console.log("api about to call get things", thingsAPIBaseURL + '/things/')

    // // console.log("api-client getThings from " + thingsAPIBaseURL + "'/' ")
    return request
        .get(thingsAPIBaseURL + '/things/')
        .then(res => res.body) // or .then({body:things} => {})
        .then(things => { // or simply .then(things)
            // console.log("Got some promising things >>>> ", things)
            return things
        })
    // .catch(err => console.log("error from API>>>>>>", err))
}

// export function getThings(callback) {
//     console.log("api about to call get things", thingsAPIBaseURL + '/things/')

//     // console.log("api-client getThings from " + thingsAPIBaseURL + "'/' ")
//     request
//         .get(thingsAPIBaseURL + '/things/')
//         .end((err, res) => {
//             console.log("error from api call is >>>> ", err)
//             callback(err, res.body)
//         })
// }


export default {
    getThings
}