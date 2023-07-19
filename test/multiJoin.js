var assert = require('assert');
var multiJoin = require('../multiJoin.js');
var simpleJoin = require('../simpleJoin.js');
var FourwayJoin = require('../4wayJoin.js');


describe("Simple Join Tests", () => {
    describe(`Small Entries Test`, (done) => {
        for(i=0;i<1;i++){
        var entries = [100, 1000, 5000, 20000, 50000];
        // var entries = [5000];
        entries.forEach((e) => {
            it(`${e} entries small Entries`, (done) => {
                simpleJoin(e, false).then((r) => {
                    let metrics = JSON.parse(r.body).metrics;
                    assert.equal(r.statusCode, 200);
                    //assert.equal(metrics.resultCount, e);
                    done();
                }).catch((e) => {
                    done(e);
                })
            }).timeout(50000);
        });
    }
    });
    describe(`Large Entries Test`, (done) => {
        for(i=0;i<1;i++){
        var entries = [100, 1000];
        entries.forEach((e) => {
            it(`${e} entries large Entries`, (done) => {
                var entries = [100, 1000];
                simpleJoin(e, true).then((r) => {
                    let metrics = JSON.parse(r.body).metrics;
                    assert.equal(r.statusCode, 200);
                    //assert.equal(metrics.resultCount, e);
                    done();
                }).catch((e) => {
                    done(e);
                })
            }).timeout(50000);
        });
    }
    });
    
})

describe("3-Join Tests", () => {
    
    describe(`Small Entries Test`, (done) => {
        var entries = [100, 1000, 5000, 20000, 50000];
        entries.forEach((e) => {
            it(`${e} entries small Entries`, (done) => {
                multiJoin(e, false).then((r) => {
                    let metrics = JSON.parse(r.body).metrics;
                    assert.equal(r.statusCode, 200);
                    //assert.equal(metrics.resultCount, e);
                    done();
                }).catch((e) => {
                    done(e);
                })
            }).timeout(50000);
        });
    });
    describe(`Large Entries Test`, (done) => {
        var entries = [100, 1000];
        entries.forEach((e) => {
            it(`${e} entries large Entries`, (done) => {
                multiJoin(e, true).then((r) => {
                    let metrics = JSON.parse(r.body).metrics;
                    assert.equal(r.statusCode, 200);
                    //assert.equal(metrics.resultCount, e);
                    done();
                }).catch((e) => {
                    done(e);
                })
            }).timeout(50000);
        });
    });
})

describe("4-way Join Tests", () => {
    describe(`Small Entries Test`, (done) => {
        var entries = [100, 1000, 5000, 20000, 50000];
        entries.forEach((e) => {
            it(`${e} entries small Entries`, (done) => {
                FourwayJoin(e, false).then((r) => {
                    let metrics = JSON.parse(r.body).metrics;
                    assert.equal(r.statusCode, 200);
                    //assert.equal(metrics.resultCount, e);
                    done();
                }).catch((e) => {
                    done(e);
                })
            }).timeout(50000);
        });
    });
    describe(`Large Entries Test`, (done) => {
        var entries = [100, 500];
        entries.forEach((e) => {
            it(`${e} entries large Entries`, (done) => {
                FourwayJoin(e, true).then((r) => {
                    let metrics = JSON.parse(r.body).metrics;
                    assert.equal(r.statusCode, 200);
                    //assert.equal(metrics.resultCount, e);
                    done();
                }).catch((e) => {
                    done(e);
                })
            }).timeout(50000);
        });
    });
})
