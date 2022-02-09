---
title: "Aether: A Clean Theme for Hugo"
date: 2018-05-02T14:33:42-04:00
description: " Aether is new theme for Hugo that emphasizes motion, material, and depth as design elements. Distracting styling and page elements are forgone to focus on the content."
categories: ["Web"]
dropCap: true
displayInMenu: false
displayInList: true
draft: false
resources:
- name: featuredImage
  src: "mdd-macbook.jpg"
  params:
    description: "A MacBook showing a website using the aether theme"
---

Today's web is a frustrating mess of pop-ups, intrusive banners, and ads obstructing the content. I designed aether to be free of all these distractions and simply highlight the content. The result feels more like a native application than a website. Interactions are intuitive, content is the focus, and distractions are omitted.

Aether is a Hugo theme for blogs that elevates good writing and photography. If you use Hugo for your blog, give aether a try.

## Installation
In the root directory of your Hugo Project, clone the aether repo into the themes directory.

```shell session
git clone https://github.com/josephhutch/aether.git themes/aether
```

## Usage

### Website Configuration

Add the following parameters to your config file if they are not present already.

```toml
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

### Creating content
Make a new blog post by executing `hugo new posts/postnamehere/index.md` in your shell. At the top of the new markdown file, is what's called the front matter. The front matter is the page's metadata that determines how Hugo and aether generate the HTML for your post. Below you can find what the front matter should contain for a new post and what each of the parameters mean.

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

### Further Customization
To change the heading and subtext at the top of list pages just add a \_index.md file in the folder that the list page is generated from. For example to change the heading at the top of the homepage, add an \_index.md file to the content folder with the following parameters.

```properties
---
title: "This is the main heading text in big letters"
date: the date
description: "This is the subtext above the main heading in small letters"
---
```

### Learn  More

To learn more about aether, visit [aether's Github page](https://github.com/josephhutch/aether). To learn more about Hugo, visit [Hugo's website](https://gohugo.io/).