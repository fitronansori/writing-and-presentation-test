# Raect JS

## 1. Apa Itu React JS?

React JS merupakan sebuah library javascript yang digunakan untuk membangun user interface. React JS dibuat oleh Facebook dan sekarang menjadi salah satu library javascript yang paling populer.

## 2. Kelebihan React JS

- React JS memudahkan dalam membangun user interface
- React JS memudahkan dalam membangun aplikasi yang interaktif
- React JS memudahkan dalam membangun aplikasi yang scalable
- React JS memudahkan dalam membangun aplikasi yang reusable
- React JS memudahkan dalam membangun aplikasi yang performa tinggi

## 3. Cara Menggunakan React JS

- Install Node JS
- Install React JS

## 4. Install Node JS

- Download Node JS di <https://nodejs.org/en/download/>

## 5. Install React JS

- Buka terminal
- Ketik perintah `npx create-react-app my-app`
- Ketik perintah `cd my-app`
- Ketik perintah `npm start`

## 6. Apa Itu JSX?

JSX adalah syntax extension untuk javascript. JSX memungkinkan kita untuk menuliskan HTML di dalam javascript. JSX akan diubah menjadi javascript yang biasa oleh React JS.

## 7. Apa Itu Component?

Component adalah sebuah fungsi yang mengembalikan sebuah elemen React. Component dapat dibuat dengan menggunakan class atau function.

<!-- Contoh Component React with function -->

```javascript
import React from "react";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

<!-- Contoh Component React with class -->

```javascript
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
```

## 8. Apa Itu Props?

Props adalah sebuah object yang berisi data yang akan dikirimkan dari parent component ke child component. Props dapat dibaca oleh child component melalui parameter fungsi.

<!-- Contoh Props -->

```javascript
import React from "react";

function App() {
  return (
    <div>
      <GetName name="Fitron" />
    </div>
  );
}
```

```javascript
import React from "react";

function GetName(props) {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  );
}

export default GetName;
```

## 9. Apa Itu State?

State adalah sebuah object yang berisi data yang akan digunakan oleh component. State dapat dibaca oleh component melalui this.state.

<!-- Contoh State -->

```javascript
import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
```

## 10. Apa Itu Lifecycle?

Lifecycle adalah sebuah method yang akan dijalankan pada suatu waktu tertentu. Lifecycle terdiri dari 3 bagian yaitu mounting, updating, dan unmounting.

<!-- Contoh lifecycle -->

```javascript
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Tambah
        </button>
      </div>
    );
  }
}
```

## 11. Style di React JS

- Inline CSS

```javascript
import React from "react";

function App() {
  return (
    <div>
      <h1 style={{ color: "red" }}>Hello World</h1>
    </div>
  );
}
```

- CSS Module

```javascript
import React from "react";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello World</h1>
    </div>
  );
}
```

- CSS in JS

```javascript
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    color: "red",
  },
});
```
