# Writing and Presentation Week 3

## 1. React Context API

### - Apa itu Context API?

- Context API adalah sebuah fitur yang memungkinkan kita untuk melakukan _data sharing_ antar komponen tanpa harus melewati _props_ secara langsung.

### - Bagaimana cara menggunakan Context API?

- Pertama, kita harus membuat sebuah _context_ terlebih dahulu dengan menggunakan `React.createContext()`.

```jsx
const MyContext = React.createContext();
```

- Kemudian, kita harus membuat sebuah _provider_ yang akan menyediakan _context_ yang telah kita buat tadi. _Provider_ ini akan berada di luar _component_ yang akan menggunakan _context_ tersebut.

  ```jsx
  <MyContext.Provider value={/* nilai/value /}>
    {/* components */}
  </MyContext.Provider>

  ```

- Setelah itu, kita harus membuat sebuah _consumer_ yang akan mengonsumsi _context_ yang telah kita buat tadi. _Consumer_ ini akan berada di dalam _component_ yang akan menggunakan _context_ tersebut.

  ```jsx
  <MyContext.Consumer>
      {value => /* render sesuatu berdasarkan context value*/}
  </MyContext.Consumer>
  ```

- Terakhir, kita harus meng-_export_ _context_ yang telah kita buat tadi agar dapat digunakan di _component_ lainnya.

  ```jsx
  export const MyContext = React.createContext();
  ```

### - Apa kekurangan Context API?

- Kekurangan dari Context API adalah kita tidak dapat mengakses _context_ tersebut di dalam _component_ yang berada di dalam _component_ yang menggunakan _context_ tersebut.

  ```jsx
  // ini tidak akan berjalan
  <MyContext.Provider>
      <MyContext.Consumer>
      {value => /* render sesuatu berdasarkan context value*/}
      </MyContext.Consumer>
  </MyContext.Provider>
  ```

## 2. React Testing

### - Apa itu React Testing?

- React Testing adalah sebuah proses untuk melakukan _testing_ terhadap _component_ yang kita buat.

### - Tools-tools apa saja yang dapat digunakan untuk melakukan React Testing?

- Tools yang dapat digunakan untuk melakukan React Testing adalah:

  - Jest
  - React Testing Library
  - Enzyme

### - Apa keuntungan dari React Testing?

- Keuntungan dari React Testing adalah kita dapat memastikan bahwa _component_ yang kita buat berjalan dengan baik.

### - Apa kekurangan dari React Testing?

- Kekurangan dari React Testing adalah kita harus menulis kode yang berulang-ulang untuk melakukan _testing_ terhadap _component_ yang kita buat.

### Cara melakukan React Testing menggunakan Jest

- Pertama, kita harus meng-_install_ `jest` dan `react-test-renderer` terlebih dahulu.

  ```bash
  npm install --save-dev jest react-test-renderer
  ```

- Kemudian, kita harus membuat sebuah file bernama `__tests__` di dalam folder `src` dan membuat sebuah file bernama `App.test.js` di dalam folder `__tests__`.

- Setelah itu, kita harus menuliskan kode berikut di dalam file `App.test.js` yang telah kita buat tadi.

  ```jsx
  import React from "react";
  import renderer from "react-test-renderer";
  import App from "../App";

  it("merender dengan benar", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  ```

- Terakhir, kita harus menuliskan kode berikut di dalam file `package.json` yang berada di dalam folder `root`.

  ```json
    "scripts": {
        "test": "jest"
    }
  ```

### Cara melakukan React Testing menggunakan React Testing Library

- Pertama, kita harus meng-_install_ `react-testing-library` terlebih dahulu.

  ```bash
  npm install --save-dev react-testing-library
  ```

- Kemudian, kita harus membuat sebuah file bernama `__tests__` di dalam folder `src` dan membuat sebuah file bernama `App.test.js` di dalam folder `__tests__`.

- Setelah itu, kita harus menuliskan kode berikut di dalam file `App.test.js` yang telah kita buat tadi.

  ```jsx
  //contoh sederhana
  import React from "react";
  import { render } from "react-testing-library";
  import App from "../App";

  it("merender dengan benar", () => {
    const { getByText } = render(<App />);
    expect(getByText("Hello World")).toBeInTheDocument();
  });
  ```

- Terakhir, kita harus menuliskan kode berikut di dalam file `package.json` yang berada di dalam folder `root`.

  ```json
    "scripts": {
        "test": "react-testing-library"
    }
  ```
