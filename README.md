# aether
Aether is a Hugo theme for blogs that emphasizes motion, depth, and material as design elements.  Aether presents your content in a clean interface that highlights good photography and writing.

## Features
 - Content is displayed in cards that use movement and depth
 - Category pages that group similar articles are automatically generated and added to the menu
 - Customizable website background image and home button image
 - Looks good on any screen using responsive web design
 - Highlight.js integration provides beautiful syntax highlighting for most programming languages and file formats
 - Add math symbols and equations to your blog posts using KaTeX 

![Aether Hugo theme screenshot](https://raw.githubusercontent.com/josephhutch/aether/master/images/screenshot.png?_sm_au_=iVVVRRW7D405F0fN)

## Installation
In the root directory of your Hugo Project, clone the aether repo into the themes directory.

```shell session
git clone https://github.com/josephhutch/aether.git themes/aether
```

## Usage
### Website Configuration
Aether provides multiple ways to custimize the look and feel of the theme through the config.toml file. See how to fill in the config file below.

```toml
baseURL = "https://yourwebsitenamegoeshere.com/"
languageCode = "The language code for the language the website is written in"
title = "The website title that is used in each page title, displayed in the browser tab and search results"
theme = "aether"

[params]
brand = "The name that is displayed in the top left of the website, consider it the website name"
description = "The website's description"
homeimg = "URL to the image used for the home button at the bottom of each post - optional"
bgimg = "URL to the image used for the page background - optional"
```

The `title` parameter is used for each page title, the title that seach engines display in search results. If you would like the title shown in the top left of the page to be different from the page title, use the `brand` parameter. For instance, the title parameter for my site is `Joe Hutchinson` but the brand parameter is set to `joehutch`.

The `homeimg` and `bgimg` parameters give you the ability to customize the look of your site further. The homeimg parameter is the image used for the home button at the bottom of every page. Since the text used on the home button is white, a darker background image is preferred. If the homeimg parameter is not specified, a fallback image is used. Similarly, the bgimg parameter is used for the background of each webpage. Aether is designed to look best with a subtle tiling image for the background. If no background image is specified, the background will be a solid gray color.

That is the only configuration required at the site level! You can now begin writing content for your site.

### Creating content
Make a new blog post by executing `hugo new post/postnamehere.md` in your shell. At the top of the new markdown file, is what's called the front matter. The front matter is the page's metadata that determines how Hugo and aether generate the HTML for your post. Below you can find what the front matter should contain for a new post and what each of the parameters mean.

```yaml
---
title: "The title of your post"
date: date the post was generated
description: "Description of the post (displayed in the post's card)"
categories: ["Add comma seperated categories here", "another category"]
featuredImage: "URL to the page's featured image, used as the card image and the image at the top of the article"
displayInMenu: whether you would like the post to show up in the navigation menu (true, false)
displayInList: whether you would like the post to be listed on the home page and category pages (true, false)
draft: if the page is a draft (true, false)
---
```

The `displayInMenu` and `displayInList` parameters are used to determine where your content is displayed. Posts typically have displayInMenu set to false so that the post is not a menu option, and displayInList set to true so it shows up on the homepage's list of posts and in category page lists. An About Me page, on the other hand, would have displayInMenu set to true and displayInList set to false.  That will allow the About Me page to be accessible from the menu but not displayed in the homepage's list of posts.

The `categories` parameter is used to group similar posts in category pages. Category pages are accessible from the menu and list all posts with the same category.

The `dropCap` parameter is used to determine if the first letter of a post should be a dropped capital. A dropped capital letter is the large decorative letter at the beginning of a book or section.

Add an interesting description and a good image to each post to get the most value from this theme.

Posts are written in markdown and LaTeX (for math symbols and equations). You can find tons of information on how to format your posts with markdown and LaTeX on the web.

### Further Customization
To change the heading and subtext at the top of list pages just add a \_index.md file in the folder that the list page is generated from.  For example to change the heading at the top of the homepage, add an \_index.md file to the content folder with the following parameters.

```yaml
---
title: "This is the main heading text in big letters"
date: the date
description: "This is the subtext above the main heading in small letters"
---
```

## Helpful Links
[Hugo Documentation](https://gohugo.io/documentation/) - Learn how to use Hugo and format content files

[Aether Blog Post](https://www.joehutch.com/posts/aether-theme/) - See aether in action and learn more about the theme

[KaTeX](https://katex.org/) - Math typesetting to add math equations and symbols to your blog posts

## License
MIT © Joe Hutchinson
