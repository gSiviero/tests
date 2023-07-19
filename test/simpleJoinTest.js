var assert = require('assert');
var simpleJoin = require('../simpleJoin.js');

// describe("Simple Join Tests",() => {
//     for(i=0;i<10;i++){
//     it(`Simple Test ${i}` ,(done) => {
//         simpleJoin().then((r) => {
//             let metrics = JSON.parse(r.body).metrics;
//             assert.equal(r.status,200);
//             assert.equal(metrics.resultCount,50000);
//             done();
//         }).catch( err => done(err));
//     }).timeout(5000);
// }
// })
