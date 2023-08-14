
var simpleJoin = require('./simpleJoin.js');
var total = 0;
async function call(){
var r = await simpleJoin();
    let executionTime = JSON.parse(r.body).metrics.executionTime.replace('s','');
    total+=1 * executionTime;
    console.log(JSON.parse(r.body).metrics);
}
var c = call();
for(i =0;i<10;i++){
    c = c.then(call);
}
c.finally(() => {});