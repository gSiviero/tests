var request = require('request');



function execute(){

var options = {
  'method': 'POST',
  'url': 'http://localhost:19002/query/service',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "statement": `use Winsconsin;\n select count(*) from  Winsconsin0 R inner join Winsconsin1 S on R.unique2 = S.unique2` ,
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