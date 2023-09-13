# Sales Web App

## Getting Started

Install dependencies:

```shell
yarn
```

Run the server:

```shell
yarn dev
```

Maybe you'll want a dev API:

```shell
yarn dev:api
```

Develop your feature. 👩🏼‍💻

Test it!

```shell
yarn test
```

Commit your changes:

```shell
yarn commit
```

Enjoy!🎉

## Design

### Homepage

![sales-homepage](./docs/sales-homepage.drawio.svg)

### Product Slug

![sales-product-slug](./docs/sales-product.drawio.svg)

### Favorites

![sales-favorites](./docs/sales-favorites.drawio.svg)

## Powered by React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Folder Structure

Designers talk about screen, developers tend to use router. We will use a naming nomenclature as follow:

```
/src
    /ds                             # Atomic Design approach
       /atoms
            index.js                # Should only be use as an indexation file
            /Price                  # Component to be reused
    /home
        /HomePage
            index.js                # The indexation file
            HomePage.jsx            # The component
            HomePage.test.jsx       # Test the component
            styles.css              # The CSS file for HomePage
            useNews.js              # A hook that it only use once in HomePage
            useNews.test.js         # The test of the hook
    /contacts
        /ContactsPage
        /ContactPage
    /counters
        /CountersPage
    /hoc
        index.js                    # Should only be use as an indexation file
        /withRow
    /hooks
        index.js                    # Should only be use as an indexation file
        /useCounter
```

## Requests

To handle all our requests we use a proxy over [Axios](https://github.com/axios/axios#readme) named [salesHttpClient](./src/salesHttpClient/index.js).

And of course to add/manipulate the response on our components we use [ReactQuery](https://tanstack.com/query/v3/docs/react/overview).
