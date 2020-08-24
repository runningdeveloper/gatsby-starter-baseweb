<p align="center">
  <a href="https://baseweb.design">
    <img width="250px" src="https://res.cloudinary.com/dawr8pobn/image/upload/v1556920604/base-web.svg">
  </a>
</p>
<h1 align="center">
  Gatsby Starter Baseweb
</h1>

A minimal Gatsby starter based on Base Web from Uber.

(I don't work for Uber)

[Demo](https://runningdeveloper.github.io/gatsby-starter-baseweb/)

## Features

- Basic website working with the Base Web famework

### Gatsby extras

A Gatsby Link component wrapped in the baseweb styled link in the components folder. Not sure if this is best way to go about it (let me know id there is a better way).
```
import StyledGatsbyLink from "../components/styledGatsbyLink"

<StyledGatsbyLink to="/page-2/">Page 2</StyledGatsbyLink>
```


<!-- https://baseweb.design/getting-started/setup/

https://baseweb.design/ -->

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the gatsby-starter-baseweb starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-project https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-project/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-project` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!