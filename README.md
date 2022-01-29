
# Project Gedesco

eCommerce MVP from Gedesco to sold some products.




[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


## Documentation

This is a monorepo project that was develop using lerna in order to share components between source projects.

This monorepo is composed by 3 separated projects, components, web and web-app.

Components: On this project we have the main components used by web and web-app.

Web: This project is a create-react-app to develop corporate web of Gedesco and use Material-ui.

Web-app: This project is a create-react-app to develop web app of Gedesco and use Tailwindcss.



## Features

The main features developed for this MVP are:

- Home screen on web that shows a sorted table.
- Searchbar to look for a products on web table.
- Home screen on web app that shows slides with different categories of products.
- Searchbar to look for a products inside slides.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Ariza50/gedesco.git
```

Go to the project directory

```bash
  cd gedesco
```

Install dependencies

```bash
  yarn install
  yarn lerna bootstrap
```

Start the corporate web

```bash
  npm run start-web
```
Start the web app

```bash
  npm run start-web-app
```
## Running Tests

To run tests on components project, run the following command

```bash
  npm run start-component-test
```

To run tests on web project, run the following command

```bash
  npm run start-web-test
```

To run tests on web app project, run the following command

```bash
  npm run start-web-app-test
```
## Feedback

If you have any feedback, please reach out to us at arizaz50@gmail.com


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vicentealbertlopez/)

