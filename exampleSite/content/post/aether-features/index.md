---
title: "Aether Features"
date: 2018-12-19T10:35:35-05:00
description: "Hugo combined with the Aether theme turns easy to write markdown into powerful web pages.  KaTeX, Highlight.js, and Hugo provides the ability to create mathmatical symobols, equations, highlighted code, tables, lists, and much more."
categories: ["Features"]
dropCap: true
displayInMenu: false
displayInList: true
draft: false
resources:
- name: featuredImage
  src: "mdd-iphone.jpg"
---

Hugo combined with the Aether theme turns easy to write markdown into powerful web pages.  KaTeX, Highlight.js, and Hugo provides the ability to create mathmatical symobols, equations, highlighted code, tables, lists, and much more.

For each feature below, the first line is the markdown and the second line is the result after Hugo, KaTeX, and Highlight.js process the markdown.  You can find many more features in the Hugo documentation.

## LaTeX style math typsetting with KaTeX

```md
{{</* raw */>}}
\[u(t) = K_p e(t) + K_i \int_{0}^{t} e(\tau) d\tau + K_d \frac{de(t)}{dt} \]
{{</* /raw */>}}
```

{{< raw >}}
\[u(t) = K_p e(t) + K_i \int_{0}^{t} e(\tau) d\tau + K_d \frac{de(t)}{dt} \]
{{< /raw >}}

## Code (Supports many programming languages and formats)

````md
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
````

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

## Inline code

```md
Here is `var s = "Hello World"` inline code
```

Here is `var s = "Hello World"` inline code

## Tables 

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Ordered List

```md
1. Number one
2. Number Two
    1. Indented Number 1
    2. Indented Number 2
```

1. Number one
2. Number Two
    1. Indented Number 1
    2. Indented Number 2

## Unordered List

```md
* Get groceries at Harris Teeter before the party
* Get a Spider Man cake
    * Chocolate or marble
    * Whipped cream frosting
* Don't forget to walk the dog before you leave
* Bring lots of plates and silverware so that we don't run out
    * Plastic Dixie brand is fine
```

* Get groceries at Harris Teeter before the party
* Get a Spider Man cake
    * Chocolate or marble
    * Whipped cream frosting
* Don't forget to walk the dog before you leave
* Bring lots of plates and silverware so that we don't run out
    * Plastic Dixie brand is fine

## Comments

```md
> This is some text that should show up as a comment. Someone may have made this comment but i'm not sure.
```

> This is some text that should show up as a comment. Someone may have made this comment but i'm not sure.

## Images

```md
![NYC Skyline](/post/aether-features/mdd-iphone.jpg)
```

![NYC Skyline](/post/aether-features/mdd-iphone.jpg)

## Small Images

```md
{{</* smallimg src="featuredImage" alt="NYC Skyline" smartfloat="left" width="250px" */>}}
```

{{<smallimg src="featuredImage" alt="aether theme displayed on an iPhone" smartfloat="left" width="250px">}}

This image floats to the left of this paragraph and is 250px wide. Its aspect ratio is maintained so it will not stretch. The picture shows the New York skyline. You can see how the design is responsive and how the cards intelligently fit to the display. With flexbox and css grid, heavy frameworks such as bootstrap aren't necessary to create beautiful responsive designs. The cards in aether use flexbox to change the image from the right side on desktops to the top on mobile.

## Links

```md
[Aether's Github page](https://github.com/josephhutch/aether)
```

[Aether's Github page](https://github.com/josephhutch/aether)