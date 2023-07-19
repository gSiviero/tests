var request = require('request');



function execute(numberOfEntries,largeEntry){
var select = largeEntry ? "*" : "W2.unique1 as a,W.unique1 as b ,W3.unique1 as c";
var query = `use Winsconsin;\nselect ${select} from Winsconsin0 W 
inner join Winsconsin2 W2 on W.unique2 = W2.unique2 
inner join Winsconsin3 W3 on W2.unique1 = W3.unique1 
where W.unique2 <= ${numberOfEntries}`;

var options = {
  'method': 'POST',
  'url': 'http://localhost:19002/query/service',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "statement": query,
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