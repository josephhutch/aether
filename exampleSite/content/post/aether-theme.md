---
title: "Aether: A Clean Theme for Hugo Websites"
date: 2018-05-02T14:33:42-04:00
description: "Aether is new theme for Hugo that emphasizes motion, depth, and material as design elements. Distracting styling and page elements are forgone to focus on the content."
categories: ["Web-Dev"]
featuredImage: "/img/mdd-macbook.jpg"
displayInMenu: false
displayInList: true
draft: false
---

Today's web is a frustrating mess of pop-ups, intrusive banners, and ads obstructing the content.  I designed Aether to be the style of website I want to visit on the web.  The result is a theme that makes sites feels more like a native application than a website. Interactions are intuitive, content is the focus, and distractions are omitted.  Aether is a Hugo theme for blogs that elevates good writing and photography.  If you use Hugo for your blog, give Aether a try.

## Installation
In your Hugo project's theme directory, clone the Aether repo.

```bash
git clone https://github.com/josephhutch/aether.git
```

Add the following parameters in your config file if they are not present already.

```toml
baseURL = "https://yourwebsitenamegoeshere.com/"
languageCode = "Your language code"
title = "Your Website Title"
theme = "aether"

[params]
brand = "The title you would like to show in the nav bar"
description = "Your website's description."
homeimg = "url to the image used for the home button"
bgimg = "url to the image used for the background"
```

You're all set!  Once your begin writing posts, they will display using the Aether theme.

![Aether theme displayed on an iphone](/img/mdd-iphone.jpg "Aether on iPhone")

To learn more about Aether visit [Aether's Github page](https://github.com/josephhutch/aether).  To learn more about Hugo visit [Hugo's website](https://gohugo.io/).