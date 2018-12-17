# aether
Aether is a Hugo theme for blogs that emphasizes motion, depth, and material as design elements.  Aether presents your content in a clean interface that highlights good photography and writing.

## Features
 - Content is displayed in cards that use movement and depth
 - Category pages that group similar articles are automatically generated and added to the menu
 - Customizable website background image and home button image
 - Looks good on any screen using responsive web design

![Aether Hugo theme on a laptop](https://www.joehutch.com/img/mdd-macbook.jpg)

## Installation
In your Hugo project's theme directory, clone the Aether repo.

```bash
git clone https://github.com/josephhutch/aether.git
```

Set the theme to aether in the config file.

## Usage
### Website Configuration
The config.toml file allows you to change the look and feel of your blog.
```toml
baseURL = "https://yourwebsitenamegoeshere.com/"
languageCode = "Your language code"
title = "Your Website Title"
theme = "aether"

[params]
brand = "The name that shows up in the top left of the website"
description = "Your website's description."
homeimg = "URL to the image used for the home button"
bgimg = "URL to the image used for the page background - optional"
```

### Creating content
Make a new post by executing `hugo new posts/postnamehere.md` in your shell.  Open the new file, update the front matter, and you're on your way.
```
title: "The title of your post"
date: date the post was generated
description: "Description of the post (displayed in the post's list card)"
categories: ["Add comma seperated categories here", "another category"]
featuredImage: "URL to the page's featured image"
menu: whether you would like the post to show up in the navigation menu (true, false)
list: whether you would like the post to show up on list pages (true, false)
draft: if the page is a draft (true, false)
```

## Helpful Links
[Hugo Documentation](https://gohugo.io/documentation/)

## License
MIT © Joe Hutchinson
