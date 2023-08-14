var assert = require('assert');
var multiJoin = require('../multiJoin.js');
var simpleJoin = require('../simpleJoin.js');
var FourwayJoin = require('../4wayJoin.js');
const seedrandom = require('seedrandom');
const generator = seedrandom(1);

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(generator()* (max - min + 1) + min)
  }

describe("Simple Join Tests", () => {
    describe.only(`Small Entries Test`, (done) => {
        var executionTime = 0;
        var promises = simpleJoin(6000, false);
        var lastPromise = null;
        for(i=0;i<1;i++){
            promises.then((r) => {console.log(r.metrics.executionTime); return simpleJoin(6000,false)});
        };
        it(`${6000} entries small Entries`, (done) => {        
            lastPromise.then((res) => {
            let metrics = JSON.parse(r.body).metrics;
            console.log(metrics.executionTime);
            assert.equal(r.statusCode, 200);
            assert.equal(metrics.resultCount, 6000);
            console.log(executionTime/100);
            done();
        }).catch((err) => {
            done(err);
        })
        }).timeout(50000);
    })
}
)
