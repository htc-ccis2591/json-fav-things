# json-fav-things
For this assignment we will add and remove information from a web page when triggered by click events.

Gather some information on your favorite things.  One part of that information will need to be something non-textual, like an image, sound clip or embedded video link. You will need a list of at least 5 things.

## Goals:

- Use the jQuery ready function to keep your code out of global scope
- Use JavaScript coding best practices for variable and function definition
- Use jQuery to build HTML to add items to the DOM
- Use jQuery to handle click events
- Use JSON to store your favorite thing data
- Use jQuery to load the JSON data for you favorite things


## GitHub Repository
https://github.com/htc-ccis2591/json-fav-things/

As usual you will need to fork and clone this repository to begin the assignment, and submit a pull request for grading when the assignment is complete.  


## Design the HTML Layout
Before you try to write JavaScript code to put these favorite things into HTML, you’ll want to know what that HTML looks like.  Update the test.html page with the HTML to show one of your favorite things.  This will allow you to address any layout and styling concerns before moving on to the JavaScript code.  

As you design the structure, think of each thing as a section, article, or div element with child tags such as headings, paragraphs, images, etc.  The content will need to be laid out so that there is an item of your choice (i.e. a heading or image) that we can show initially while the other content is hidden.  We will then click that to show the additional information, so wrap it in a div or some other parent element to make this easier.


## Page Behavior
When the page first loads, you should display only a button or text that says something like:  “Click here to see my favorite things”.

When that text or button is clicked, then you should remove that it from the DOM (not just hide it), and then add your favorite things into the DOM.  When they first load, only the main heading or image (whatever you designed as your summary clickable thing) should show. The remainder of the information should be in the DOM (you should see it in the Dev Tools Elements view) but should be hidden by using a CSS class.

When the summary item is clicked, all other item’s detail information should be hidden and that items detail information should be shown.  

__Important Note:__  Yes, jQuery has a UI component to do this.  No you cannot use it for this assignment. The assignment involves the creation of your own show/hide behavior to illustrate that you understand some basic jQuery and JavaScript.  Using any other 3rd party component to do this defeats the purpose of the assignment.

## JSON Data Structure
Put the data for your favorite things into a JSON object.  The top level obect should contain an array that has an object for each of your favorite things.

Something like this:
{
  "favthings" : [
    { object 1 },
    { object 2 },
    { object 3 },  
  ]
}

Once you have your JSON written, be sure to validate it using something like [JSON Lint](http://jsonlint.com/)

## Code Structure
You will use jQuery to set up click events to trigger the initial favorites display and to add/remove your CSS class to hide the detail information on each thing.

It is also expected that you will use functions to organize your code and to avoid repetition (copy/paste) of code.  At a minimum, I would expect a function that builds the HTML for one favorite thing that is parameterized so that you do not repeat that code over and over to build each item.  This will also make it easier for you to change or modify that layout later if needed or desired.

### Tips
- Be sure to use all of the JavaScript coding best practices that we have discussed.
- Make and use functions; try to keep them small, don’t make long unreadable monster code.
- Watch the scope of your variables.  Keep things to as small a scope as possible.
- Be sure to test the show/hide of your sections in different orders to ensure that they are work correctly.
- Validate your JSON so that you know the format is correct.
- I don't expect much beauty, but things shouldn't be squished into the edges of the page either. Consider using [Bootstrap](http://getbootstrap.com/) to get a quick edge on layout.

## Extras
Work on your page layout & presentation. Ensure the page is responsive and looks good on various display sizes. Use a nice color scheme that suits your content, and doesn't look mismatched or gaudy.  [Paleton](http://paletton.com/) can help.
