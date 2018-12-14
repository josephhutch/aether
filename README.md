# aether
Aether is a Hugo theme for blogs that emphasizes motion, depth, and material as design elements.  Aether presents your content in a clean interface that highlights good photography and writing.

## Features
 - Content is displayed in cards that use movement and depth
 - Category pages that group similar articles are automatically generated and added to the menu
 - Looks good on any screen using responsive web design

## Installation
In your Hugo project's theme directory, clone the Aether repo.

```bash
git clone https://github.com/josephhutch/aether.git
```

Set the theme to aether in the config file.

## Usage
### Website Configuration
```toml
baseURL = "https://yourwebsitenamegoeshere.com/"
languageCode = "Your language code"
title = "Your Website Title"
theme = "aether"

[params]
brand = "joehutch"
description = "Your website's description."
homeimg = "URL to the image used for the home button"
bgimg = "URL to the image used for the page background - optional"
```

### Creating content
```
title: "Aether: A Clean Theme for Hugo Websites"
date: 2018-05-02T14:33:42-04:00
description: "Aether is new theme for Hugo that emphasizes motion, depth, and material as design elements. Distracting styling and page elements are forgone to focus on the content."
categories: ["Web-Dev"]
featuredImage: "/img/mdd-macbook.jpg"
menu: false
list: true
draft: false
```
## Helpful Links
[Hugo Documentation](https://gohugo.io/documentation/)

## License
MIT © Joe Hutchinson
