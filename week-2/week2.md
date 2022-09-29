# Writing and Presentations Week 2

## Scope and Function

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
