###CSS Selector
Given a CSS string of elements this search function will return the matching DOM elements.

###Setup
* Clone the repo
* Open the Test.html file in a browser.

###Approach
* First step was to split the selector into an array by tag-name, id and class.
* Next I wanted to know what each element was so I put them in specified variables(tagName, idName and arrOfClasses). The reasoning here was I can then use the correct 'getElement' method based on the variable being used in the search.
* Using the number of elements in the split up selector array at step 1 I could then apply a set of rules to pull back and check the DOM element.
    - One element rule just brings back that DOM element.
    - Two elements would use the id to select if present and then compare these attributes to the other element. If no id then tagName was used and compared against the classList to the classes in arrOfClasses.
    - Three elements used id to get the DOM element then compared the DOM's attributes to the tagName and arrOfClasses.
* A DOM element could have more than one class but there was no test specifically for this. Seeing it was a possibility the classes were put into the array 'arrayOfClasses'. When needed new functionality could now be added for a selector with more than one class.
