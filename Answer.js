var $ = function (selector) {
  var elements = [];
  var id_class = [];

  id_class.push(selector.search(/\./));
  id_class.push(selector.search('#'));
  ///////////////////
  // Your code here //
  ////////////////////
  console.log(id_class.sort())
  console.log(selector.split('#'))
  return elements;
}