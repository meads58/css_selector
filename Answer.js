"use strict";
var $ = function (selector) {
  var selector = "div.me.to#cool"
  var elements = [];
  var tag = '';
  var idName = '';
  var className = [];
  var selectorArray = []
  var classIdIndexPos = [];

  var position = {
    idIndex: selector.search('#'),
    classIndex: selector.search(/\./)
   };

  var compareNumbers = function(a, b) {
    return a - b;
  }

  var findIdIndex = function() {
    var idIndexPos = selector.search('#')
    if (idIndexPos > -1 ){
      classIdIndexPos.push(idIndexPos)
    }
  }

  var findClassIndexes = function (){
    for(var i=0; i<selector.length;i++) {
      if (selector[i] === "."){
        classIdIndexPos.push(i);
      }
    }
  };

  var sliceUpSelector = function() {
    findIdIndex();
    findClassIndexes();
    if (classIdIndexPos.length > 0){
      sliceUp()
    }else{
      tag = selector;
    };
  };

  var sliceUp = function() {
    classIdIndexPos = classIdIndexPos.sort(compareNumbers);
      if(classIdIndexPos[0] === 0){
       sliceAtEachPosition();
      }else{
        selectorArray.push(selector.slice(0, classIdIndexPos[0]));
        sliceAtEachPosition();
      }
  };

  var sliceAtEachPosition = function() {
    for (var i=0; i<classIdIndexPos.length;i++){
            if(classIdIndexPos[i + 1] < selector.length){
              selectorArray.push(selector.slice(classIdIndexPos[i], classIdIndexPos[i+1]))
            }else{
              selectorArray.push(selector.slice(classIdIndexPos[i], selector.length))
            }
          }
  };

  // var findTag = function(){
  //  }


  // var findId = function(){
  //   if (position.classIndex > position.idIndex){
  //     selectorLength = position.classIndex
  //   }else{
  //     selectorLength = selector.length
  //   }
  //   idName = selector.slice(position.idIndex + 1, selectorLength )
  // };

  // var findClass = function(){
  //   if (position.classIndex > -1){

  //     if (position.idIndex > position.classIndex){
  //       selectorLength = position.idIndex
  //     }else{
  //       selectorLength = selector.length
  //     }

  //     className = selector.slice(position.classIndex + 1, selectorLength )
  //   }else{
  //     return ''
  //   }
  // };

  // var findById = function() {
  //   findId();
  //   var idElement = document.getElementById(idName);

  //   checkTagName(idElement);
  //   if (checkTagName(idElement) == true ){
  //     elements.push(idElement)
  //   }
  // }

  // var checkTagName = function (element) {
  //   findTag();

  //   // if (element.tagName.toLowerCase() === tag){
  //   //   return true;
  //   // }else{
  //   //   return false;
  //   // };
  // };

  // var checkClassName = function (element){
  //   findClass();
  // };

//console.log(document.getElementById(idName))
// findById();
//  findId();
//  findClass();
//  findTag();



// var elements2 = (document.getElementsByClassName(className));

// elements.push(document.getElementById('some_id'));
// var checkClassList = function () {

// }
// findIdIndex()
// findClassIndexes()
sliceUpSelector()
console.log(selectorArray)


//console.log(elements[0].classList)
//console.log(elements[0].classList)
//console.log(elements[0].tagName)
console.log('id name: ' + idName)
console.log('class name: ' + className)
console.log('tag name: ' + tag)

  ///////////////////
  // Your code here //
  ////////////////////
  return elements;
}

