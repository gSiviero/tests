var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:19002/query/service',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "statement": "drop dataverse Winsconsin if exists;\ncreate dataverse Winsconsin;\nuse Winsconsin;\ncreate type WinsconsinType as {unique1:bigint,unique2:bigint}; \n create external dataset Winsconsin0(WinsconsinType)\n\t using localfs((\"path\"= \"localhost:///home/giulliano/IdeaProjects/JSON-Wisconsin-Data-Generator/outputp_0.adm\"),(\"format\"=\"adm\"));\n create external dataset Winsconsin1(WinsconsinType)\n\t using localfs((\"path\"= \"localhost:///home/giulliano/IdeaProjects/JSON-Wisconsin-Data-Generator/outputp_1.adm\"),(\"format\"=\"adm\"));\n create external dataset Winsconsin2(WinsconsinType)\n\t using localfs((\"path\"= \"localhost:///home/giulliano/IdeaProjects/JSON-Wisconsin-Data-Generator/outputp_2.adm\"),(\"format\"=\"adm\"));\n create external dataset Winsconsin3(WinsconsinType)\n\t using localfs((\"path\"= \"localhost:///home/giulliano/IdeaProjects/JSON-Wisconsin-Data-Generator/outputp_3.adm\"),(\"format\"=\"adm\"))",
    "logical-plan": true,
    "optimized-logical-plan": true,
    "plan-format": "JSON",
    "max-warnings": 9007199254740991,
    "client_context_id": "9"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
