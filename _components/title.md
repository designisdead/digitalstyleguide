---
title: Title
layout: component
description: Titles... @todo 
published: true
---
Titles are always written in capitals. Always use the correct semantic value for your title.
An <h1> is the most important title on a page, an <h6> is the lease important title. 

Heading will automatically receive styles defined in title.scss.

___
## Modifiers
### Size modifier
By default, an h1 is the largest title and an h5 is the smallest title.
But sometimes it happens that the semantic value is not in line with the size of a title.
When this happens, you can add a size modifier to your **Title** object.

**Optional modifiers:** tiny, small, medium, large, huge

<h1 class="Title tiny">Title tiny</h1>
<h1 class="Title small">Title small</h1>
<h1 class="Title medium">Title medium</h1>
<h1 class="Title large">Title large</h1>
<h1 class="Title huge">Title huge</h1>
```html
<h1 class="Title tiny">Title tiny</h1>
<h1 class="Title small">Title small</h1>
<h1 class="Title medium">Title medium</h1>
<h1 class="Title large">Title large</h1>
<h1 class="Title huge">Title huge</h1>
```