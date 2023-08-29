# aether

[![Validate Generated Files](https://github.com/josephhutch/aether/actions/workflows/main.yml/badge.svg)](https://github.com/josephhutch/aether/actions/workflows/main.yml)

Aether is a Hugo theme for blogs that emphasizes motion, depth, and material as design elements.  Aether presents your content in a clean interface that highlights good photography and writing.

## Features
 - It's **Fast**! PageSpeed scores consistently between 94-100
 - Fully **Responsive Design** allowing your site to look good on any size screen
 - Supports next-gen image format WebP with custom shortcodes
 - **Accessibility** is a priority, making your site easily navigated by screen readers
 - Category pages that group similar articles are automatically generated and added to the menu
 - Customizable website background image and home button image
 - Highlight.js integration provides **beautiful syntax highlighting** for most programming languages and file formats
 - Add **math symbols and equations** to your blog posts using LaTeX
 - **Google Analytics** and **Disqus** integration

![Aether Hugo theme screenshot](https://raw.githubusercontent.com/josephhutch/aether/master/images/screenshot.png?_sm_au_=iVVVRRW7D405F0fN)

## Installation
In the root directory of your Hugo Project, clone the aether repo into the themes directory.

```shell session
git clone https://github.com/josephhutch/aether.git themes/aether
```
if you plan to host on Github Pages with github actions, install theme as submodule.

```shell session
git submodule add https://github.com/josephhutch/aether themes/aether
```

## Usage
### Website Configuration
Customize the look and feel of aether through the config.toml file. See how to fill in the config file below.

```
baseURL = "https://yourwebsitenamegoeshere.com/"
languageCode = "The language code for the language the website is written in"
title = "The website title that is used in each page title, displayed in the browser tab and search results"
theme = "aether"
googleAnalytics = "Your google analytics tracking ID - optional"
disqusShortname = "Your shortname for Disqus - optional"

[params]
  brand = "The name that is displayed in the top left of the website - optional, title is fallback"
  description = "The website's description"
  bgimg = "Path, within the 'assets' folder, of the image used for the page background - optional"
  headshotimg = "Path, within the 'assets' folder, of the image used for the home page header - optional"
  headshotalt = "Alt text for the headshotimg - should be used with headshotimg"
  rssinmenu = whether you would like a RSS feed link to appear in the nav menu and footer (true, false) - optional
  facebook = "URL to your Facebook account, icon link will be included in the footer - optional"
  flicker = "URL to your Flicker account, icon link will be included in the footer - optional"
  github = "URL to your GitHub account, icon link will be included in the footer - optional"
  instagram = "URL to your Instagram account, icon link will be included in the footer - optional"
  linkedin = "URL to your LinkedIn account, icon link will be included in the footer - optional"
  patreon = "URL to your Patreon account, icon link will be included in the footer - optional"
  soundcloud = "URL to your Soundcloud account, icon link will be included in the footer - optional"
  spotify = "URL to your Spotify account, icon link will be included in the footer - optional"
  tumblr = "URL to your Tumblr account, icon link will be included in the footer - optional"
  twitch = "URL to your Twitch account, icon link will be included in the footer - optional"
  twitter = "URL to your Twitter account, icon link will be included in the footer - optional"
  vimeo = "URL to your Vimeo account, icon link will be included in the footer - optional"
  youtube = "URL to your Youtube account, icon link will be included in the footer - optional"

[markup]
  [markup.highlight]
    style = "igor"
```

The `title` parameter is used for each page title, the title that search engines display in search results. If you would like the title shown in the top left of the page to be different from the page title, use the `brand` parameter. For instance, the title parameter for my site is `Joe Hutchinson` but the brand parameter is set to `joehutch`.

Find your `language code` [here](https://www.metamodpro.com/browser-language-codes).

The `bgimg` parameters give you the ability to customize the look of your site further. The homeimg should reside in the assets folder of your site. The homeimg parameter is the image used for the home button at the bottom of every page. Since the text used on the home button is white, a darker background image is preferred. If the homeimg parameter is not specified, a fallback image is used. Aether is designed to look best with a subtle tiling image for the background. If no background image is specified, the background will be a solid gray color.

The default syntax highlighter `style` does not look great with aether so I recommend using igor. If you want to change the highlighter theme you can specify a different one from [this list](https://xyproto.github.io/splash/docs/all.html). To configure the syntax highlighter further, such as adding line numbers, check out [this Hugo doc section](https://gohugo.io/getting-started/configuration-markup#highlight).

That is the only configuration required at the site level! You can now begin writing content for your site.

#### Favicons
Aether supports a large array of favicon formats. Simply add your favicons with the correct file names to the root folder of your site (put them in the static folder). The favicon file names correspond to the files generated by the [real favicon generator](https://realfavicongenerator.net/).

 - favicon.ico
 - favicon-16x16.png
 - favicon-32x32.png
 - apple-touch-icon.png
 - android-chrome-192x192.png
 - android-chrome-384x384.png
 - mstile-150x150.png
 - safari-pinned-tab.svg
 - browserconfig.xml
 - site.webmanifest

### Creating content
Make a new blog post by executing `hugo new post/postnamehere/index.md` in your shell. At the top of the new markdown file, is what's called the front matter. The front matter is the page's metadata that determines how Hugo and aether generate the HTML for your post. Below you can find what the front matter that aether uses and what each of the parameters mean.

```yaml
---
title: "The title of the post"
date: date the post was generated (automatically generated)
description: "Description of the post (displayed in the post's card)"
categories: ["Add comma separated categories here", "another category"]
toc: if the post should include a table of contents (true, false)
displayInMenu: if the post should show up in the navigation menu (true, false)
displayInList: if the post should be listed on the home page and category pages (true, false)
draft: if the post is a draft (true, false)
resources:
- name: featuredImage
  src: "Filename of the post's featured image, used as the card image and the image at the top of the article"
  params:
    description: "Description for the featured image, used as the alt text"
    attribution:
      name: "Name of person to attribute image to"
      link: "optional URL to persons site"
---
```

The `displayInMenu` and `displayInList` parameters are used to determine where your content is displayed. Posts typically have displayInMenu set to false so that the post is not a menu option, and displayInList set to true so it shows up on the homepage's list of posts and in category page lists. An About Me page, on the other hand, would have displayInMenu set to true and displayInList set to false.  That will allow the About Me page to be accessible from the menu but not displayed in the homepage's list of posts.

The `categories` parameter is used to group similar posts in category pages. Category pages are accessible from the menu and list all posts within the same category.

The `dropCap` parameter is used to determine if the first letter of a post should be a dropped capital. A dropped capital letter is the large decorative letter at the beginning of a book or section.

Add an interesting description and a good image to each post to get the most value from this theme.

Aether takes advantage of [page bundles](https://gohugo.io/content-management/page-bundles/) to optimize your images for your site.  This may require you to update the way your content is structured, also see [content organization](https://gohugo.io/content-management/organization/).  Use the `image` and `smallimg` shortcodes to take full advantage of image optimization.  Also, the `featuredImage` resource must exist in the post's page bundle.

Posts are written in markdown. You can find how to write in markdown from this [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

#### Shortcodes
Shortcodes extend markdown to make writing easier and more powerful.

`raw` allows for adding content that Hugo will pass through unmodified. Raw is useful for adding html to your content or **adding math equations in LaTeX**.

```html
{{< raw >}}
\[ S(x) = \frac{1}{1+e^{-x}} \]
{{< /raw >}}
```

`image` is how you add WebP images to your posts with a fallback in case WebP is not supported. Image just needs the src and alt parameters. WebP is a next-gen image format that was created to make the web fast. To use the image shortcode simply store a WebP image with the same name in the same directory as your normal image.  Keep in mind that the Hugo image processing pipeline does not support resizing webp.

```html
<!--- Will display a WebP image on supported browsers if awesome.webp exists -->
{{< image src="awesome.jpg" alt="An awesome image that will use webp when possible. Much faster!" >}}
```

`smallimg` allows you to add smaller images to your posts that aren't stretched to be as wide as the content area.  Smallimg takes the parameters src, alt, smartfloat (optional), width (optional, in pixels only), and clear (optional). The smartfloat parameter can be set to right or left, and it floats the image to the right or left on big enough screens. The clear parameter allows you to clear a previous float which is helpful if you are using multiple smallimgs close to each other.

```html
<!--- smallimg will also display a WebP image on supported browsers if smile.webp exists -->
{{< smallimg src="smile.png" alt="A big beautiful smile" smartfloat="left" width="100px" clear="true" >}}
```

### Further Customization
To change the heading and subtext at the top of list pages just add a \_index.md file in the folder that the list page is generated from.  For example, to change the heading at the top of the homepage, add an \_index.md file to the content folder with the following parameters.

```yaml
---
title: "This is the main heading text in big letters"
date: the date
description: "This is the subtext below the main heading in smaller letters"
---
```
#### Overriding CSS
To override CSS, you should create file `project_root/assets/css/override.css` and place all your CSS inside it. This file will be merged with standard CSS when the site is generated.

#### Custom Meta Tags

You can add optional Open Graph, Twitter, or other meta tags by adding `project_root/layouts/partials/meta-tags.html`
Refer to [/exampleSite/layouts/partials](/exampleSite/layouts/partials) for sample meta configs.

## Helpful Links
[Aether Blog Post](https://www.joehutch.com/posts/aether-theme/) - See aether in action and learn more about the theme

[Hugo Documentation](https://gohugo.io/documentation/) - Learn how to use Hugo

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) - Write in markdown like a pro

[Latex Math Documentation](https://en.wikibooks.org/wiki/LaTeX/Mathematics) - Learn math typesetting with LaTeX (powered by KaTeX)

## Contributing
Aether is actively maintained and I welcome you to help make it better! Contributions in the way of new features, documentation improvements, bug fixes, and feature requests are appreciated. Please make an individual pull-request/issue for each suggestion.  PRs are tested in GitHub Actions to ensure the html and css generated from the example site are valid.

## License
MIT © Joe Hutchinson
