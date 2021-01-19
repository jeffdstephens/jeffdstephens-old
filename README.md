# Jeff D Stephens - Blog

This is the repo for my personal blog located at <a href="https://www.jeffdstephens.com" target="_blank">jeffdstephens.com</a>.

The site is developed using <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby</a> which is a React-based open-source framework that works great for personal blogs. It's based on the Lumen theme which is a minimal, lightweight and mobile-first starter that has been further customized and updated for my needs.

The site is a work in progress and serves as my main blogging platform. As such, I continue to add new posts and build out functionality to make it even better.

## Features

- Lost Grid ([peterramsing/lost](https://github.com/peterramsing/lost)).
- Beautiful typography inspired by [matejlatin/Gutenberg](https://github.com/matejlatin/Gutenberg).
- [Mobile-First](https://medium.com/@mrmrs_/mobile-first-css-48bc4cc3f60f) approach in development.
- Stylesheet built using SASS and [BEM](http://getbem.com/naming/)-Style naming.
- Syntax highlighting in code blocks.
- Sidebar menu built using a configuration block.
- Archive organized by tags and categories.
- Automatic RSS generation.
- Automatic Sitemap generation.
- Offline support.
- Google Analytics support.
- Disqus Comments support.

## Folder Structure

```
└── src
    ├── assets
    │   ├── fonts
    │   │   └── fontello-771c82e0
    │   │       ├── css
    │   │       └── font
    │   └── scss
    │       ├── base
    │       ├── mixins
    │       └── pages
    ├── components
    │   ├── CategoryTemplateDetails
    │   ├── Disqus
    │   ├── Links
    │   ├── Menu
    │   ├── PageTemplateDetails
    │   ├── Post
    │   ├── PostTemplateDetails
    │   ├── Sidebar
    │   └── TagTemplateDetails
    ├── layouts
    ├── pages
    │   ├── articles
    │   │   ├── 2016-01-09---Perfecting-the-Art-of-Perfection
    │   │   ├── 2016-01-12---The-Origins-of-Social-Stationery-Lettering
    │   │   ├── 2016-02-02---A-Brief-History-of-Typography
    │   │   ├── 2017-18-08---The-Birth-of-Movable-Type
    │   │   └── 2017-19-08---Humane-Typography-in-the-Digital-Age
    │   └── pages
    │       ├── 2015-05-01---about
    │       └── 2015-05-01---contact
    └── templates
```

## Running in Development

`gatsby develop`

## Building

`gatsby build`

## Deployment

This site uses GitHub CI/CD and deploys to <a href="https://www.netlify.com/" target="_blank">Netlify</a> automatically after merge.
