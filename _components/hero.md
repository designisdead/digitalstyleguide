---
title: Hero
layout: component
description: A Hero is a large header often used at the top of a page or article 
published: true
---
A Hero is a (large) header often used at the top of a page or article.

___
## Modifiers
Optional modifiers: tiny, small, medium, large, huge, fullscreen

___
## Examples
### A Hero with centered text
This is a **Hero** object without additional modifiers.  
A Hero always comes with a **Hero-content** element to vertically center content.

Within Hero-content you can use other components like wrappers, titles,...
<div class="Wrapper unwrap">
    <div class="Hero" style="background-image: url(/media/design-is-dead-team.jpg);">
        <div class="Hero-content">
            <!-- Hero content starts here -->
            <div class="Wrapper small">
                <div class="Title large u-colorLight u-textAlignCenter">Our managing director playing piano like a boss</div>
            </div>
            <!-- Hero content ends here -->
        </div>
    </div>
</div>
```html
<div class="Hero" style="background-image: url(/media/design-is-dead-team.jpg);">
    <div class="Hero-content">
        <!-- Hero content starts here -->
        <div class="Wrapper small">
            <div class="Title large u-colorLight u-textAlignCenter">Our managing director playing piano like a boss</div>
        </div>
        <!-- Hero content ends here -->
    </div>
</div>
```
___
### A tiny hero 
<div class="Hero tiny" style="background-image: url(/media/design-is-dead-team.jpg);">
    <div class="Hero-content">
        <!-- Hero content starts here -->
        <!-- Hero content ends here -->
    </div>
</div>
```html
<div class="Hero tiny" style="background-image: url(/media/design-is-dead-team.jpg);">
    <div class="Hero-content">
        <!-- Hero content starts here -->
        <!-- Hero content ends here -->
    </div>
</div>
```