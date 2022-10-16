# Writing and Presentations Week 4

## 1. Git dan Github Lanjutan

### - Git Branching

Git branching adalah fitur yang memungkinkan kita untuk membuat cabang dari repository yang kita miliki. Cabang ini berguna untuk mengembangkan fitur-fitur baru tanpa mengganggu fitur yang sudah ada. Setelah fitur yang kita kembangkan selesai, kita bisa menggabungkan cabang tersebut dengan cabang utama.

#### - Membuat Branch Baru

Untuk membuat branch baru, kita bisa menggunakan perintah `git branch <nama-branch>`. Perintah ini akan membuat branch baru dengan nama yang kita tentukan. Untuk melihat branch apa saja yang ada, kita bisa menggunakan perintah `git branch`. Perintah ini akan menampilkan branch apa saja yang ada di repository kita.

#### - Pindah Branching

Untuk pindah branch, kita bisa menggunakan perintah `git checkout <nama-branch>`. Perintah ini akan mengubah branch yang sedang aktif menjadi branch yang kita tentukan. Untuk melihat branch apa saja yang ada, kita bisa menggunakan perintah `git branch`. Perintah ini akan menampilkan branch apa saja yang ada di repository kita.

#### - Membuat Branch Baru dan Pindah ke Branch Baru

Untuk membuat branch baru dan langsung pindah ke branch tersebut, kita bisa menggunakan perintah `git checkout -b <nama-branch>`. Perintah ini akan membuat branch baru dengan nama yang kita tentukan dan langsung pindah ke branch tersebut.

#### - Menggabungkan Branch

Untuk menggabungkan branch, kita bisa menggunakan perintah `git merge <nama-branch>`. Perintah ini akan menggabungkan branch yang kita tentukan dengan branch yang sedang aktif. Perintah ini akan menghasilkan sebuah commit baru yang menggabungkan kedua branch tersebut.

#### - Menghapus Branch

Untuk menghapus branch, kita bisa menggunakan perintah `git branch -d <nama-branch>`. Perintah ini akan menghapus branch yang kita tentukan. Perintah ini akan menghasilkan sebuah commit baru yang menggabungkan kedua branch tersebut.

### - Git Remote

Git remote adalah fitur yang memungkinkan kita untuk mengelola remote repository. Remote repository adalah repository yang berada di server. Remote repository ini berguna untuk menyimpan repository kita di server sehingga kita bisa mengaksesnya dari berbagai perangkat.

### Github Collab

Github collab adalah fitur yang memungkinkan kita untuk bekerja sama dengan orang lain dalam satu repository. Fitur ini berguna untuk mengelola repository yang kita miliki bersama-sama dengan orang lain.

#### - Fork

Fork adalah fitur yang memungkinkan kita untuk membuat salinan repository yang sudah ada. Repository yang sudah di-fork akan menjadi repository milik kita sendiri sehingga kita bisa mengubahnya sesuka kita. Setelah kita mengubah repository tersebut, kita bisa mengirimkan pull request ke repository aslinya.

#### - Pull Request

Pull request adalah fitur yang memungkinkan kita untuk mengirimkan perubahan yang kita lakukan ke repository aslinya. Pull request ini akan menampilkan perubahan apa saja yang kita lakukan dan akan menunggu persetujuan dari pemilik repository asli. Jika pemilik repository asli menyetujui pull request kita, maka perubahan yang kita lakukan akan masuk ke repository asli.

## 2. Responsive Web Design

- Responsive web design merupakan cara untuk mengatur layout website agar dapat menyesuaikan dengan ukuran layar yang digunakan.

- Tools untuk mengatur layout website yaitu menggunakan sebuah media query dalam CSS.

- Viewport adalah sebuah area yang dapat menampilkan konten website.

- Viewport dapat diatur menggunakan tag meta viewport.

  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

  <!-- Relative CSS Unit -->

- Relative CSS Unit yaitu unit yang dapat menyesuaikan ukuran dengan ukuran layar.

- Relative CSS Unit terdiri dari 2 yaitu

  - Relative Length Unit

    - em : mengukur ukuran font dari parent element.

    - rem : mengukur ukuran font dari root element.

    - vw : mengukur ukuran layar dari width.

    - vh : mengukur ukuran layar dari height.

    - vmin : mengukur ukuran layar dari width dan height.

    - vmax : mengukur ukuran layar dari width dan height.

  - Relative Viewport Unit

    - vw : mengukur ukuran layar dari width.

    - vh : mengukur ukuran layar dari height.

    - vmin : mengukur ukuran layar dari width dan height.

    - vmax : mengukur ukuran layar dari width dan height.

- Flexbox dan Grid merupakan salah satu cara untuk mengatur sebuah layout website menjadi responsive.

## 3. Bootstrap

- Bootstrap merupakan sebuah framework CSS yang dapat digunakan untuk membuat sebuah website menjadi responsive.

- Cara menggunakan Bootstrap yaitu dengan mengimport file CSS dan JS dari CDN.

  ```html
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
    crossorigin="anonymous"
  />
  <script
    src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"
  ></script>
  <script
    src="https://
  ```

<!-- mengapa dan kapan menggunakan Bootstrap -->

- Mengapa menggunakan Bootstrap yaitu karena Bootstrap sudah menyediakan banyak sekali komponen yang dapat digunakan untuk membuat sebuah website.

- Menggunakan Bootstrap yaitu untuk membuat sebuah website yang responsive.

<!--  menggunakan layout pada Bootstrap -->

- Layout pada Bootstrap yaitu menggunakan container, row, dan column.

- Container yaitu sebuah element yang digunakan untuk mengatur ukuran dari sebuah website.

- Row yaitu sebuah element yang digunakan untuk mengatur posisi dari sebuah element.

- Column yaitu sebuah element yang digunakan untuk mengatur ukuran dari sebuah element.

<!-- Peserta mampu memahami dan menggunakan content pada Bootstrap -->

- Content pada Bootstrap yaitu menggunakan heading, paragraph, dan button.

- Heading yaitu sebuah element yang digunakan untuk membuat sebuah heading.

- Paragraph yaitu sebuah element yang digunakan untuk membuat sebuah paragraph.

- Button yaitu sebuah element yang digunakan untuk membuat sebuah button.

<!-- Peserta mampu memahami dan menggunakan component pada Bootstrap -->

- Component pada Bootstrap yaitu menggunakan card, list group, dan badge.

- Card yaitu sebuah element yang digunakan untuk membuat sebuah card.

- List Group yaitu sebuah element yang digunakan untuk membuat sebuah list group.

- Badge yaitu sebuah element yang digunakan untuk membuat sebuah badge.

- Contoh Component untuk membuat sebuh card

```html
<div class="card" style="width: 18rem;">
  <img
    src="https://images.unsplash.com/photo-1593642532972-7d3d2c4d2b0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```
