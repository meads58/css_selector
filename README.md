###Approach
* First step was to split the selector by tag-name, id and class into an array so I could access each element.
* Next I wanted to know what each element was so I put them in specified variables for tagName, idName and an arrayOfClasses. The reasoning here was I can then use the correct 'getElement' method and it made it clear what elements I had.
* Based on the number of elements in the split up selector I had a set of rules to pull back the DOM element.
    - One element rule just brings back that DOM element.
    - Two elements would use the id to select if present and then compare it these attributes to the other element. If no id then tagName was used and compared against the classList to the class in arrayOfClasses.
    - Three elements used id to get the DOM element then compared the DOM's attributes to the tagName and arrayOfClasses.

###Improvements
All the the tests pass but 
