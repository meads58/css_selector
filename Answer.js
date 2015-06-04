"use strict";
var $ = function (selector) {
  var elements = [];
  var classIdIndexPos = [];
  var splitUp = selector.split(/(?=[#\.])/g);
  var arrOfClasses = [];
  var tagName = '';
  var idName = '';

  var init = function() {
    getTag();
    getAllClasses();
  };

  var getTag = function() {
    if(['#', '.'].indexOf(splitUp[0].charAt(0)) === -1){
      tagName = splitUp[0];
      return true;
    }
  };

  var getId = function() {
    for(var i=0; i < splitUp.length; i++){
      if(['#'].indexOf(splitUp[i].charAt(0)) === 0){
        idName = splitUp[i];
        return true;
      }
    }
  };

  var getAllClasses = function() {
    for(var i=0; i < splitUp.length; i++){
      if(splitUp[i].charAt(0) === '.'){
        arrOfClasses.push(splitUp[i]);
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
      return document.getElementById(idName.slice(1))
  };

  var setById = function() {
    elements.push(document.getElementById(idName.slice(1)));
  }

  var searchByClass = function(classPos) {
    return document.getElementsByClassName(arrOfClasses[classPos].slice(1))
  }

  var setByClass = function(classPos) {
    elements = document.getElementsByClassName(arrOfClasses[classPos].slice(1));
  }

  var matchingRule = function() {
    init()
    if (splitUp.length === 1){
      oneElement()
    }else{
      multiElements()
    }
  }

  var oneElement= function() {
    if (getTag()) {
      setByTag();
    }else if (getId()) {
      setById();
    }else {
      setByClass(0);
    }
  };

  var multiElements = function() {
    if(splitUp.length === 2){
      twoElements()
    }else{
      threeElements()
    }
  };

  var twoElements = function() {
    if(getId() && confirmIdMatch()){
      setById();
    }else if (arrOfClasses.length > 0){
      confirmClassMatch('tag');
    }
  };

  var threeElements = function(){
    getId();
   if(confirmIdMatch() && confirmClassMatch('id')){
   }
  };

  var confirmIdMatch = function() {
    var idTagName = searchById().tagName.toUpperCase()
    if (tagName.toUpperCase() === idTagName){
      return true
    }else if (arrOfClasses.length > 0 ){
      return confirmClassMatch('id');
    }
  };

  var confirmClassMatch = function(compareWith) {
    var arrValue = arrOfClasses[0].slice(1)
    switch (compareWith) {
      case 'id':
        if (elementMatch(searchById, arrValue) === true){
          setById();
        };
        break;
      case 'tag':
        if (elementMatch(searchByTag, arrValue) === true){
           setByTag();
        };
        break;
    }
  };

  var elementMatch = function(tagType, arrValue) {
    if(classListToArray(tagType).indexOf(arrValue) > -1){
      return true;
    }
  };

  var classListToArray = function(searchFunction) {
    var classArray = [], list = [];
    list = getClassList(searchFunction)
    for(var i=0; i < list.length; i++){
      classArray.push(list[i]);
    }
    return classArray;
  };

  var getClassList = function(searchFunction) {
    if(searchFunction === searchById){
      return searchFunction().classList
    }else{
      return searchFunction()[0].classList
    }
  };

  matchingRule()

  return elements;
}

