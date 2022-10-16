# Writing and Presentations Week 3

## 1. Array dan Multimendimensional Array

- Array merupakan tipe data yang dapat menyimpan lebih dari satu nilai dalam satu variabel.

- Multimendimensional Array yang dimana merupakan array dalam sebuah array.

  contoh array dalam JavaScript:

  ```javascript
  let cars = ["Saab", "Volvo", "BMW"];
  ```

- Property di JavaScript Array

  - length : untuk mengetahui panjang sebuah array

  ```javascript
  let cars = ["Saab", "Volvo", "BMW"];
  console.log(cars.length); //3
  ```

- Method-method JavaScript Array

  - push() : untuk menambahkan elemen baru ke akhir array

  ```javascript
  let cars = ["Saab", "Volvo", "BMW"];
  cars.push("Mercedes");
  console.log(cars); //["Saab", "Volvo", "BMW", "Mercedes"]
  ```

  - pop() : untuk menghapus elemen terakhir dari array

  ```javascript
  let cars = ["Saab", "Volvo", "BMW"];
  cars.pop();
  console.log(cars); //["Saab", "Volvo"]
  ```

  - shift() : untuk menghapus elemen pertama dari array

  ```javascript
  let cars = ["Saab", "Volvo", "BMW"];
  cars.shift();
  console.log(cars); //["Volvo", "BMW"]
  ```

  - unshift() : untuk menambahkan elemen baru ke awal array

  ```javascript
  let cars = ["Saab", "Volvo", "BMW"];
  cars.unshift("Mercedes");
  console.log(cars); //["Mercedes", "Saab", "Volvo", "BMW"]
  ```

  - dan masih banyak lagi method-method array lainnya. silahkan baca di [https://www.w3schools.com/js/js_array_methods.asp](https://www.w3schools.com/js/js_array_methods.asp)

## 2. Object

<!-- Object JavaScript -->

- Object JavaScript adalah sebuah variabel yang dapat menyimpan lebih dari satu nilai.

- Contoh object di JavaScript

  ```javascript
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
  ```

- cara mengambil data yang ada di object

  ```javascript
  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
  console.log(person.firstName); //John
  ```

## 3. Rekursif di JavaScript

- Rekursif adalah sebuah fungsi yang memanggil dirinya sendiri.

- Contoh rekursif di JavaScript

  ```javascript
  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  factorial(5); //120
  // misalkan seperti ini digunakan untuk menyimpan nilai faktorial 5 = 5 * 4 * 3 * 2 * 1 = 120
  ```

## Web Storage

- Web Storage adalah sebuah API yang digunakan untuk menyimpan data di browser.

- Web Storage terdiri dari 2 yaitu

  - Local Storage : untuk menyimpan data tanpa batas waktu.

  - Session Storage : untuk menyimpan data sementara.

- Cara mengakses Web Storage

  - Local Storage

  ```javascript
  localStorage.setItem("key", "value");
  localStorage.getItem("key");
  localStorage.removeItem("key");
  localStorage.clear();
  ```

  - Session Storage

  ```javascript
  sessionStorage.setItem("key", "value");
  sessionStorage.getItem("key");
  sessionStorage.removeItem("key");
  sessionStorage.clear();
  ```

## Asynchronous

- Asynchronous adalah sebuah proses dimana sebuah fungsi akan dijalankan tanpa harus menunggu fungsi lain selesai.

- Contoh Asynchronous di JavaScript

  ```javascript
  console.log("Hello");
  setTimeout(() => {
    console.log("World");
  }, 2000);
  console.log("!");
  // hasilnya akan menjadi Hello ! World
  ```

- fetch API merupakan sebuah API yang digunakan untuk mengambil data dari server.

  ```javascript
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json));
  ```
