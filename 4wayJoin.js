var request = require('request');



function execute(numberOfEntries,largeEntry){
var select = largeEntry ? "W1.*,W2.*" : "W0.unique1 as a,W1.unique1 as b ,W2.unique1 as c,W3.unique1 as d";
var query = `use Winsconsin;\nselect ${select} from Winsconsin0 W0 
inner join Winsconsin1 W1 on W0.unique2 = W1.unique2 
inner join Winsconsin2 W2 on W0.unique2 = W2.unique2 
inner join Winsconsin3 W3 on W0.unique2 = W3.unique2 
where W0.unique2 <= ${numberOfEntries}`;
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