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
  var idElement = ''
  var classIdIndexPos = [];
  var splitUp = selector.split(/(?=[#\.])/g)
  var arrOfClasses = []
  var tagDiv = ''


  var compareNumbers = function(a, b) {
    return a - b;
  }

  var getTag = function() {
    if(['#', '.'].indexOf(splitUp[0].charAt(0)) === -1){
      tagDiv = splitUp[0]
    }
  }

  var getAllClasses = function() {
    for(var i=0; i < splitUp.length; i++){
      if(splitUp[i].charAt(0) === '.'){
        arrOfClasses.push(splitUp[i])
      }
    }
  };

  var searchTag = function() {
    if(tagDiv != ''){
      elements = document.getElementsByTagName(tagDiv)
    }
  }

  var checkWithClasses()

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

  searchElement()



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

