# WordPress gems for devs: Interactivity API

Repository for code examples and resources used in the "WordPress gems for devs: Interactivity API" workshop.

| Event  | Date | Branch | Links |
| --- | --- | --- | --- |
| WordCamp Europe 2025 | 7 June 2025 | [conf/WordCamp-Europe-2025](https://github.com/zzap/Workshop-WordPress-gems-for-devs-Interactivity-API/tree/conf/WordCamp-Europe-2025) | [Event](https://europe.wordcamp.org/2025/session/wordpress-gems-for-devs-interactivity-api/) \| [Slides](https://docs.google.com/presentation/d/1panbzQEAYhiZW5rMsxR5ZSh4bhUyVkuRDJvqXzxITJY/edit?usp=sharing) \| [Video](https://wordpress.tv/2025/06/07/wordpress-gems-for-devs-interactivity-api-2/) |

ToC:

- [Setup](#setup)
  - [Local instal](#local-instal)
  - [Add plugins/blocks](#add-pluginsblocks)
    - [Download plugins from this repository](#download-plugins-from-this-repository), or
    - [Run the script by yourself](#run-the-script-by-yourself)
  - [Activate plugins](#activate-plugins)

## Setup

Instructions for setting up your local WordPress instance for successful participation in the workshop.

Prerequisites:

- [The latest WordPress](https://wordpress.org/download/) install.
- IDE / Code Editor (e.g. Visual Studio Code).
- [Node.js](https://developer.wordpress.org/block-editor/getting-started/devenv/#node-js-development-tools) or [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm#installing-and-updating) installed.
- WP-CLI (optional) - I use it for almost everything (managing plugins, themes, site in general, etc.), but it is not essential for this workshop.

### Local instal

First, you need to install a local instance of WordPress with sufficient permissions to add plugins and modify plugin files. Make sure it's the latest WordPress, preferably a fresh install with only default themes and no plugins.

### Add plugins/blocks

For this workshop, we are going to work with three custom blocks, created as plugins. To avoid misunderstandings, it's best if we have the same names and namespaces for each. There are two ways you can do this:

- Download plugins from this repository, or
- run the script by yourself.

#### Download plugins from this repository

As it takes some time to run the script for downloading and building each block, I have already done this, and they are available in the repository. You can download the .zip file or clone the repository, whichever feels best for you.

You should have the following plugins in your `wp-content/plugins` folder:

- toggle
- toggle-count
- test (I lost all creativity here)

#### Run the script by yourself

We're going to use [@wordpress/create-block-interactive-template](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block-interactive-template/) for creating our 3 blocks. You can definitely create this as three blocks in a single plugin if you wish, but that is not the point of this workshop, and we want to set this up with minimal effort. Hence, the following instructions will guide you to set 3 blocks as three separate plugins.

Navigate to your `wp-content/plugins` folder and run the script for creating interactive block plugins.

**NOTE: You will be prompted to set various values; the important ones for us are only block `slug` and `namespace`.**

So, you will run this same command 3 times, but each time you will set different values for `slug` and `namespace`.

Command:

```BASH
npx @wordpress/create-block --template @wordpress/create-block-interactive-template
```

Block 1:

- slug: `toggle`
- namespace: `wpgems`

![Toggle block settings](/assets/toggle-highlight.jpg)

Block 2:

- slug: `toggle-count`
- namespace: `wpgems`

![Toggle count block settings](/assets/toggle-count-highlight.jpg)

Block 3:

- slug: `test`
- namespace: `other`

![Test block settings](/assets/test-highlight.jpg)

### Activate plugins

Activate these three plugins either in the dashboard or by running WP-CLI (anywhere inside the WordPress install):

```BASH
wp plugin activate toggle


wp plugin activate toggle-count


wp plugin activate test
```

## What problems does it solve?

- Compatibility with PHP hooks.
- Inter-block communication.
- Site-wide features such as client-side navigation.

## Reference

- [Interactivity API Reference](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/)
  - [The Reactive and Declarative mindset](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/the-reactive-and-declarative-mindset/)
    - [List of Directives](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#list-of-directives)
  - [Understanding global state, local context and derived state](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/undestanding-global-state-local-context-and-derived-state/)
    - [The store](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#the-store)
  - [Server-side rendering: Processing directives on the server](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/core-concepts/server-side-rendering/)
    - [Server functions](https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/api-reference/#server-functions)
- [WP_Interactivity_API_Directives_Processor](https://developer.wordpress.org/reference/classes/wp_interactivity_api_directives_processor/)
- [@wordpress/create-block-interactive-template](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block-interactive-template/)

## Examples

- [The movie demo](https://wpmovies.dev/), [GitHub repo](https://github.com/WordPress/wp-movies-demo)
- [Countdown](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-countdown-3cd73e)
- [Instant Search](https://github.com/r-chrzan/instant-search-interactivity)
- [Todo list](https://github.com/ahsanshaheen199/interactive-todos/tree/main)
- [Interactivity API showcase](https://github.com/WordPress/gutenberg/discussions/55642)

Examples in production:

- [Podcaster Plus](https://www.podcasterplus.com/) plugin by [Dan Maby](https://github.com/danmaby) and [Nathan Wrigley](https://nathanwrigley.com/)

## Resources

- [Interactivity API: Roadmap](https://github.com/WordPress/gutenberg/discussions/52904)
- [Proposal: The Interactivity API – A better developer experience in building interactive blocks](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/#how-to-create-interactive-blocks)
- [Interactivity API discussions](https://github.com/WordPress/gutenberg/discussions/categories/interactivity-api)
- [Changelog - Tracking Breaking Changes in the Interactivity API](https://github.com/WordPress/gutenberg/discussions/52906)
- [Getting Started - and other learning resources](https://github.com/WordPress/gutenberg/discussions/52894)

### History

The idea of using the declarative method to bridge the connection between frontend and backend came from the [Cloudfest 2022 Hackathon project](https://hackathon.cloudfest.com/cloudfest-hackathon-2022-greatest-hackathon-ever/), [Bento + WordPress](https://www.alainschlesser.com/using-bento-components-in-gutenberg-blocks/), which was led by [Alain Schlesser](https://github.com/schlessera) and [Pascal Birchler](https://github.com/swissspidy).

## Equivalents in other PHP frameworks

- Laravel - [Livewire](https://livewire.laravel.com/) using AlpineJS
- Symfony UX - [Live components](https://ux.symfony.com/live-component), primarily built on top of [Turbo](https://turbo.hotwired.dev/) and [Stimulus](https://stimulus.hotwired.dev/), which are part of the [Hotwire](https://hotwired.dev/) framework.
- Phoenix [LiveView](https://hexdocs.pm/phoenix_live_view/welcome.html)
