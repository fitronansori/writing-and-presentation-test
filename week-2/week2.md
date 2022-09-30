# Writing and Presentations Week 2

## 1. Scope and Function

- Scope adalah bagaimana sebuah variabel dapat diakses oleh program atau bagaimana sebuah variabel dapat diakses oleh sebuah fungsi.
<!-- contoh scope -->

```javascript
let a = 1;
function tes() {
  let b = 2;
  console.log(a);
  console.log(b);
}
```

- Function adalah sebuah blok kode yang dapat dipanggil berulang kali untuk melakukan tugas tertentu.

- Function dapat menerima parameter dan mengembalikan nilai.

- Function dapat dipanggil secara rekursif (memanggil dirinya sendiri).

- Function dapat memiliki parameter default.

- Function dapat memiliki parameter dengan nilai default.

<!-- Contoh Function -->

```javascript
function tes(a, b) {
  return a + b;
}

tes(1, 2); // 3
```

## 2. Data Type Built in Prototype and Method

- Built in prototype adalah sebuah object yang terdapat pada setiap data type.

- Built in prototype memiliki method-method yang dapat digunakan untuk memanipulasi data type tersebut.

### Primitive and non-primitive data type

- Primitive data type adalah data type yang tidak memiliki built in prototype.
  <!-- contoh -->

  ```javascript
  let a = 1;
  let b = "1";
  let c = true;
  let d = null;
  let e = undefined;
  ```

- Non-primitive data type adalah data type yang memiliki built in prototype.
  <!-- contoh -->

  ```javascript
  let a = [1, 2, 3];
  let b = { name: "John" };
  let c = function () {
    return 1;
  };
  ```

### String Method dan Property

1. String Property

   - String.length : mengembalikan panjang string

   ```javascript
   let a = "Hello World";
   a.length; // 11
   ```

2. String method

   - toUpperCase() : mengubah string menjadi huruf besar

   ```javascript
   let a = "Hello World";
   a.toUpperCase(); // HELLO WORLD
   ```

   - toLowerCase() : mengubah string menjadi huruf kecil

   ```javascript
   let a = "Hello World";
   a.toLowerCase(); // hello world
   ```

   - split() : memecah string menjadi array

   ```javascript
   let a = "Hello World";
   a.split(" "); // ["Hello", "World"]
   ```

   - slice() : memotong string

   ```javascript
   let a = "Hello World";
   a.slice(0, 5); // Hello
   ```

   - charAt() : mengembalikan karakter pada index tertentu

   ```javascript
   let a = "Hello World";
   a.charAt(0); // H
   ```

   - indexOf() : mengembalikan index dari karakter yang dicari

   ```javascript
   let a = "Hello World";
   a.indexOf("o"); // 4
   ```

   - dan masih banyak lagi method-method lainnya.
     bisa di lihat di [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Number Method dan Property

1 . Number Property

- Number.MAX_VALUE : mengembalikan nilai terbesar yang dapat di representasikan oleh Number

```javascript
Number.MAX_VALUE; // 1.7976931348623157e+308
```

- Number.MIN_VALUE : mengembalikan nilai terkecil yang dapat di representasikan oleh Number

```javascript
Number.MIN_VALUE; // 5e-324
```

- Number.POSITIVE_INFINITY : mengembalikan nilai positif tak hingga

```javascript
Number.POSITIVE_INFINITY; // Infinity
```

- Number.NEGATIVE_INFINITY : mengembalikan nilai negatif tak hingga

```javascript
Number.NEGATIVE_INFINITY; // -Infinity
```

- Number.NaN : mengembalikan nilai NaN

```javascript
Number.NaN; // NaN
```

2 . Number Method

- parseFLoat() : mengubah string menjadi number floating point

```javascript
parseFloat("1.1"); // 1.1
```

- parseInt() : mengubah string menjadi number bilang bulat

```javascript
parseInt("1.1"); // 1
```

- toFixed() : mengubah number menjadi string dengan jumlah angka dibelakang koma yang ditentukan

```javascript
(1.1).toFixed(2); // "1.10"
```

- toString() : mengubah number menjadi string

```javascript
(1.1).toString(); // "1.1"
```

- dan masih banyak lagi method-method lainnya.
  bisa di lihat di [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Math Method dan Property

1 . Math Property

- Math.PI : mengembalikan nilai pi

```javascript
Math.PI; // 3.141592653589793
```

- Math.SQRT1_2 : mengembalikan nilai akar kuadrat dari 1/2

```javascript
Math.SQRT1_2; // 0.7071067811865476
```

- Math.SQRT2 : mengembalikan nilai akar kuadrat dari 2

```javascript
Math.SQRT2; // 1.4142135623730951
```

- dan masih banyak lagi property-property lainnya.
  bisa di lihat di [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

2 . Math Method

- Math.abs() : mengembalikan nilai absolut dari sebuah angka

```javascript
Math.abs(-1); // 1
```

- Math.ceil() : mengembalikan nilai pembulatan ke atas dari sebuah angka

```javascript
Math.ceil(1.1); // 2
```

- Math.floor() : mengembalikan nilai pembulatan ke bawah dari sebuah angka

```javascript
Math.floor(1.1); // 1
```

- Math.round() : mengembalikan nilai pembulatan ke angka terdekat dari sebuah angka

```javascript
Math.round(1.1); // 1
```

- Math.max() : mengembalikan nilai terbesar dari beberapa angka

```javascript
Math.max(1, 2, 3); // 3
```

- Math.min() : mengembalikan nilai terkecil dari beberapa angka

```javascript
Math.min(1, 2, 3); // 1
```

- Math.pow() : mengembalikan nilai dari sebuah angka dipangkatkan dengan angka lain

```javascript
Math.pow(2, 3); // 8
```

- Math.sqrt() : mengembalikan nilai akar kuadrat dari sebuah angka

```javascript
Math.sqrt(4); // 2
```

- Math.random() : mengembalikan nilai random dari 0 sampai 1

```javascript
Math.random(); // 0.123456789
```

- dan masih banyak lagi method-method lainnya.
  bisa di lihat di [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
