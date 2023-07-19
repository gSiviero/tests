var request = require('request');



function execute(numberOfEntries){

var options = {
  'method': 'POST',
  'url': 'http://localhost:19002/query/service',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "statement": `use Winsconsin;\n select W1.unique1,W0.unique1 as original from  Winsconsin0 W0 inner join Winsconsin1 W1 on W0.unique2 = W1.unique2 where W1.unique2 <= ${numberOfEntries}` ,
    "logical-plan": true,
    "optimized-logical-plan": true,
    "plan-format": "JSON",
    "max-warnings": 9007199254740991,
    "client_context_id": "10"
  })

};
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) reject(error);
            resolve(response);
          });
      });
}

module.exports = execute;