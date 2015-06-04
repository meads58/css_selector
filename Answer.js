"use strict";
var $ = function (selector) {
  //var selector = "div.me.to#cool"
  var elements = [];
  var tagName = '';
  var idName = '';
  var classNames = [];
  var foundById = false;
  var noClassMatch = false;
  var selectorArray = []

  var classIdIndexPos = [];
  var splitUp = selector.split(/(?=[#\.])/g);
  var arrOfClasses = [];
  var tagDiv = '';
  var idValue = '';
  var idElement = ''
  var match = false



  var compareNumbers = function(a, b) {
    return a - b;
  }

  var getTag = function() {
    if(['#', '.'].indexOf(splitUp[0].charAt(0)) === -1){
      tagName = splitUp[0]
      return true;
    }
  };

  var getId = function() {
    for(var i=0; i < splitUp.length; i++){
      if(['#'].indexOf(splitUp[i].charAt(0)) === 0){
        idValue = splitUp[i]
        return true
      }
    }
  };

  var getAllClasses = function() {
    for(var i=0; i < splitUp.length; i++){
      if(splitUp[i].charAt(0) === '.'){
        arrOfClasses.push(splitUp[i])
      }
    }
  };

  var searchByTag = function() {
      return document.getElementsByTagName(tagName)
  };

  var setByTag = function() {
     elements = document.getElementsByTagName(tagName);
  }

  var searchById = function() {
      return document.getElementById(idValue.slice(1))
  };

  var setById = function() {
    elements.push(document.getElementById(idValue.slice(1)));
  }

  var searchByClass = function(classPos) {
    return document.getElementsByClassName(arrOfClasses[classPos].slice(1))
  }

  var setByClass = function(classPos) {
    elements = document.getElementsByClassName(arrOfClasses[classPos].slice(1));
  }

  var matchingRule = function() {
    if (splitUp.length === 1){
      matchOneTag()
    }else{
      multipleTags()
      console.log('err1')
    }
  }

  var matchOneTag= function() {
    if(getTag() === true){
      setByTag();
    }else if(getId() === true){
      setById();
    }else {
      getAllClasses()
      setByClass(0);
    }
  };

  var multipleTags = function() {
    getTag();
    getAllClasses();
    if(splitUp.length === 2){
      matchTwoTags()
    }else{
      console.log(splitUp.length)
      matchThreeTags()
    }
  };

  var matchTwoTags = function() {
    if(getId() === true){
      confirmIdMatch();
    }else{
      confirmClassMatch('tag');
    }
  };

  var matchThreeTags = function(){
    getId();
   if(confirmIdMatch() && confirmClassMatch('id') === true){
    console.log('cool')
   }
  }

  var confirmIdMatch = function() {
    var idTagName = searchById().tagName.toUpperCase()
    if (tagName.toUpperCase() === idTagName){
      return true
    }else if (arrOfClasses.length > 0 ){
      confirmClassMatch('id');
    }
  }

  var confirmClassMatch = function(compareWith) {
    var arrValue = arrOfClasses[0].slice(1)
    switch (compareWith) {
      case 'id':
        if(classListToArray(searchById).indexOf(arrValue) > -1){
          setById();
        };
        break;
      case 'tag':
        if(classListToArray(searchByTag).indexOf(arrValue) > -1){
         setByTag();
        };
        break;
    }
  }

  var classListToArray = function(searchFunction) {
    var classArray = [], list = [];
    if(searchFunction === searchById){
      list = searchFunction().classList
    }else{
      list = searchFunction()[0].classList
    }
    for(var i=0; i < list.length; i++){
      classArray.push(list[i]);
    }
    return classArray;
  };

 matchingRule()

  var searchClass = function(className) {
    if(elements.length === 0 && arrOfClasses.length > 0  ){
      elements = document.getElementsByClassName(arrOfClasses[0].slice(1))
      searchTag()
    }else if (arrOfClasses.length > 0 ){
      checkWithClasses()
    }
  }

  var searchElement = function() {
    getTag()
    getAllClasses()
    for(var i=0; i < splitUp.length; i++){
      if (splitUp[i].charAt(0) === '#'){
        elements = document.getElementById(splitUp[i].slice(1))
        searchClass()
      }else{
        searchClass()
      }
    };
  };





//   var findClassIndexes = function (){
//     for(var i=0; i<selector.length;i++) {
//       if (selector[i] === "."){
//         classIdIndexPos.push(i);
//       }
//     }
//   };

//   var sliceUpSelector = function() {
//     findIdIndex();
//     findClassIndexes();
//     if (classIdIndexPos.length > 0){
//       checkStartPostition()
//     };
//     splitIdAndClasses()
//     verifySelectorMatch();
//   };

//   var checkStartPostition = function() {
//     classIdIndexPos = classIdIndexPos.sort(compareNumbers);
//       if(classIdIndexPos[0] === 0){
//        sliceAtEachPosition();
//       }else{
//         tagName = (selector.slice(0, classIdIndexPos[0]));
//         sliceAtEachPosition();
//       }
//   };

//   var sliceAtEachPosition = function() {
//     var classToAdd = ''
//     for (var i=0; i<classIdIndexPos.length;i++){
//         classToAdd = selector.slice(classIdIndexPos[i], classIdIndexPos[i+1]);
//         selectorArray.push(classToAdd)
//     }
//     console.log(String(classToAdd))
//   };

//   var verifySelectorMatch = function() {
//     if (classNames.length === 0 && idName === ''){
//       elements = (document.getElementsByTagName(selector))
//     }else{
//       checkWithId();
//       checkWithClass();
//     };
//   };

//   var splitIdAndClasses = function() {
//     for (var i=0; i < selectorArray.length; i++){
//       if (selectorArray[i].charAt(0) === '#')
//       {
//         idName = selectorArray.splice(i, 1)
//         idName = String(idName).slice(1)
//       }
//     }
//     classNames = selectorArray.join('').slice(1).split('.')
//   }

//   var checkWithId = function() {
//     if (idName != ''){
//       idElement = (document.getElementById(idName))
//       if (tagName.toUpperCase() === idElement.tagName.toUpperCase() || tagName === ''){
//         elements.push(idElement)
//         foundById = true;
//       }
//     }
//   };

//   var checkWithClass = function() {
//     var matches = 0
//     if(foundById === true && classNames.length > 0){
//       if(tagName.toUpperCase() === idElement.tagName.toUpperCase() || tagName === ''){
//         for(var i=0; i < classNames.length;i++){
//           var currentClass = classNames[i]
//           for(var n=0; n < elements[0].classList.length; n++){

//             if(currentClass === elements[0].classList[n]){
//               matches++
//             }
//           }
//         }
//       }else{

//         elements = []
//       }

//     }else if(foundById === false && classNames.length > 0){
//       console.log('toodles')
//       var arrr = 'some_class'

//       bb = 'some_class'
//       var elementByClass = []
//       elementByClass.push(document.getElementsByClassName(arrr))
//       console.log('bbbb ' + elementByClass[0])
//       console.log('some_class')
//       //for(var i=0; i < elementByClass.length; i++){

//       //}

//       //if(tagName.toUpperCase() === elementByClass[i].tagName.toUpperCase() || tagName === ''){

//       //}
//       matches = classNames.length
//     }
//     if(matches != classNames.length ){
//       elements = []
//     }
//   };

// // var elements2 = (document.getElementsByClassName(className));

// // elements.push(document.getElementById('some_id'));
// // var checkClassList = function () {

// // }
// // findIdIndex()
// // findClassIndexes()
// //sliceUpSelector()
// console.log('sss: ' + selectorArray)
// // console.log('elements: ' + elements)

// console.log('cc: ' + elements)
// var ff = []
// var a = 'me'
// ff.push(selectorArray[0])
// var ss = new String(classNames[0])
// var hh = ['.some_class', '.another_class']
// hh = hh.toString().replace(/\,/g,'').slice(1).split('.')
 var ee = ['.some_class', '.another_class']
 ee = ee.join('').slice(1).split('.')
// var bb = 'some_class'
 var dd = ''
dd = (document.getElementsByClassName(ee[0]))
 console.log('ff: ' + dd[0].nodeName)
// console.log(ss.slice(1))
// console.log(dd[0].tagName)
console.log('---------------------------')
//console.log(elements[0].classList)
//console.log(elements[0].tagName)
// console.log('id name: ' + idName)
// console.log('class name: ' + classNames)
// console.log('tag name: ' + tagName)

  ///////////////////
  // Your code here //
  ////////////////////
  return elements;
}

