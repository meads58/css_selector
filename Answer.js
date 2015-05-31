var $ = function (selector) {
  // selector = "div#some_id.some_class"
  var elements = [];
  var tag = '';
  var idName = '';
  var className = '';
  var selectorLength = selector.length

  var idIndex = selector.search('#');
  var classIndex = selector.search(/\./);

  var findTag = function(){

  }

  var findId = function(){
    if (idIndex > -1){
      if (classIndex > idIndex){
        selectorLength = classIndex
      }

      var id_val = selector.slice(idIndex + 1, selectorLength )
      elements.push(document.getElementById(id_val));
    }else{
      return ''
    }
  };

  var findClass = function(){
    if (classIndex > -1){
      if (idIndex > classIndex){
        selectorLength = idIndex
      }
      return selector.slice(classIndex + 1, selectorLength )
    }else{
      return ''
    }
  }

  idName = findId()
  className = findClass()

//elements = (document.getElementsByClassName(className));

//elements = (document.getElementById('some_id'));
console.log(document.getElementsByClassName(className))




  ///////////////////
  // Your code here //
  ////////////////////
  return elements;
}