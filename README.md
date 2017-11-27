
## Ongoing personal web-dev project
- [x] init commit
- [ ] Create style guide
    - [ ] Translate to CSS
    - [ ] Make example page
- [ ] Add piece of actual content


## API Reference

* Google Maps



## Contributors

*/ELBowie
*/MBLHarrison

## Useful information
Index.html is the landing page of the website.

When a published website is accessed, the server looks for the index.html and choses that as the homepage to display.


HTML : Hyper Text Markup Language. This is the file type to decide where elements should be, you can specify how they should look but that's best left for the choses

CSS  : Cascading Style sheets. This specifies how elements should appear, any element under that class name will inheret the styles specified in the CSS.
You will want to add your custom CSS to the _"main.cs"_ in the _css_ folder.

JS   : Javascript. Javascript files is where scripting code can go. It can be used to dynamically change the size of elements, add elements, change anything about elements, or do some proper programming with it. 
You will want to add your custom JS to the _"main.js"_ in the _js_ folder.



## Adding a new page
Currently the website is a 1 page application, this means that you do not have a separate HTML file for each HTML page but instead choose what you want to hide/show at any given time.

The new "pages" can be created by adding this template structure into the  _content area_

```html 
<div class="contentArea" id="myContentArea">

    <div id="pageID" style="display:none"> 
            Content goes here!
    </div>
</div>
```
Change _pageID_ to whatever you'd like the Id of the page to be.

Currently pages are displayed by pressing buttons in _myTopNav_
```html
 <div id="myTopnav" class="topnav">
     <a href="#" onclick="return show('pageID')">Text on the button</a>
</div>
```

Make sure the id in this onclick function matches the id of your new page.
You'll need to add text between the *>* and *</a>* And this will appear on the button as text.
Clicking this button will call the custom JS function called _*show*_
```js
function show(shown) {}
```
This function takes in an _arguement_
This means that the function requires information, this information can then be used within the function.
Functions don't necessarily need an argument. That can be left blank, but if you want information from a different source, ie the html file or another function
then you should pass it as an arguement.
