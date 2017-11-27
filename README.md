
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

> -- _**New page**_ --

Currently the website is a 1 page application, this means that you do not have a separate HTML file for each HTML page but instead choose what you want to hide/show at any given time.

The new "pages" can be created by adding this template structure into the  _content area_

_**index.html**_
```html 
<div class="contentArea" id="myContentArea">

    <div id="pageID" style="display:none"> 
            Content goes here!
    </div>
</div>
```
Change _pageID_ to whatever you'd like the Id of the page to be.

Currently pages are displayed by pressing buttons in _myTopNav_

_**index.html**_
```html
 <div id="myTopnav" class="topnav">
     <a href="#" onclick="return show('pageID')">Text on the button</a>
</div>
```

Make sure the id in this onclick function matches the id of your new page.
You'll need to add text between the *>* and *</a>* And this will appear on the button as text.
Clicking this button will call the custom JS function called _*show*_

_**main.js**_
```js
function show(shown) {}
```
This function takes in an _arguement_
This means that the function requires information, this information can then be used within the function.
Functions don't necessarily need an argument. That can be left blank, but if you want information from a different source, ie the html file or another function
then you should pass it as an arguement.

> -- _**Adding style to content area**_ -- 


_**main.css**_
```css
.contentArea{
    color: rgb(255, 38, 0);
    background-color: rgb(0, 0, 0);
}
```

All the pages within the class _contentArea_ will have this style applied to it. Therefore each of the pages will look the same because they all inherit the style specified in the css.

If you for whatever reason want a specific content page to look different in anyway you'll too to add the styles for that specific page.
```css

#pageID{
    background-color:plum;
}
```

Any styles that conflict with the parent class of .contentArea will be overriden by the styles specified in this class.

The start of this token begins with  '#' because the individual content pages are made using _div id_

For elements named using _class names_ you will need to start with '.' as demonstrated with .contentArea

If you have a div class or id that uses other tags such as <p> or <a> and you want to style those tags but only when instances of them within a class you'll need to specifiy the styles under a special case
```css
 .contentArea a{
   text-align: center; 
}
 ```
This means that when using the <a> tag within a contentArea, it will have this style applied to it. If you use the <a> tag outside of this area it will not have this style tag applied to it. 
