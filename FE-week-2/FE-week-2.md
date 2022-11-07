# Writing and Presentations FE Bootcamp Week 2

## Proptype React

- Proptype dalam React adalah sebuah cara untuk memvalidasi props yang diterima oleh sebuah komponen. Proptype dapat digunakan untuk memvalidasi tipe data, apakah props tersebut wajib diisi atau tidak, dan juga untuk memvalidasi apakah props tersebut merupakan props yang valid atau tidak. Proptype dapat digunakan untuk memvalidasi props yang diterima oleh sebuah komponen. Proptype dapat digunakan untuk memvalidasi tipe data, apakah props tersebut wajib diisi atau tidak, dan juga untuk memvalidasi apakah props tersebut merupakan props yang valid atau tidak.

<!-- contoh proptype react -->

```jsx
import React from "react";
import PropTypes from "prop-types";

const MyComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.age}</h3>
    </div>
  );
};

MyComponent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  age: (props, propName, componentName) => {
    if (props[propName] < 18) {
      return new Error(
        `${propName} is too young. ${componentName} is only for adults.`
      );
    }
  },
};

MyComponent.defaultProps = {
  title: "Hello World",
};

export default MyComponent;
```

## React Router Dom

- React Router Dom adalah sebuah library yang digunakan untuk membuat routing pada aplikasi React. Routing pada React Router Dom menggunakan komponen `<Route>` yang akan menampilkan komponen yang sesuai dengan path yang ditentukan. React Router Dom juga menyediakan komponen `<Link>` untuk membuat link pada aplikasi React. React Router Dom juga menyediakan komponen `<Link>` untuk membuat link pada aplikasi React.

<!-- contoh react router dom -->

```jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

## React Redux

- React Redux adalah sebuah library yang digunakan untuk mengelola state pada aplikasi React. React Redux menyediakan komponen `<Provider>` yang digunakan untuk menyediakan store pada aplikasi React. React Redux juga menyediakan komponen `<Connect>` yang digunakan untuk menghubungkan komponen React dengan store. React Redux juga menyediakan komponen `<Connect>` yang digunakan untuk menghubungkan komponen React dengan store.

<!-- contoh react redux -->

```jsx
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./reducers";

import Counter from "./components/Counter";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

- store adalah sebuah tempat untuk menyimpan state pada aplikasi React. store dapat diakses oleh komponen React dengan menggunakan komponen `<Connect>`. store dapat diakses oleh komponen React dengan menggunakan komponen `<Connect>`.

- reducer adalah sebuah fungsi yang digunakan untuk mengubah state pada store. reducer menerima dua parameter yaitu state dan action. reducer menerima dua parameter yaitu state dan action.

- action adalah sebuah objek yang berisi type dan payload. action akan dikirimkan ke reducer untuk mengubah state pada store. action akan dikirimkan ke reducer untuk mengubah state pada store.
