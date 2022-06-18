# Menjadi React Developer - React List dan Axios

## Table of Content
1. [Review Context - Themes](#review-context---themes)
1. [Review List - Cards](#review-list---cards)
1. [Intro to API](#intro-to-api)
1. [What is REST API](#what-is-rest-api)
1. [Tools - Postman](#tools---postman)
1. [Let's Make the Apps](#lets-make-the-apps)
    - [What is Axios](#what-is-axios)
    - [Demo](#demo)
1. [Referensi](#referensi)

### Review Context - Themes
Mari kita mencoba review ulang megenaik hooks, khususnya di sini kita mencoba untuk menggunakan `Context` bawaan dari MUI, yaitu `Themes`

1. Inisialisasi project dengan `npx create-react-app nama-project`
1. Install MUI dengan `npm install @mui/material @emotion/react @emotion/styled`
1. Install font Roboto dengan `npm install @fontsource/roboto`
1. Install Material Icons dengan `npm install @mui/icons-material`
1. Buka file `index.js`, import roboto dengan
    ```js
    // File: index.js
    import "@fontsource/roboto/300.css";
    import "@fontsource/roboto/400.css";
    import "@fontsource/roboto/500.css";
    import "@fontsource/roboto/700.css";
    ```
1. Buat file baru `src/themes/theme.js`, isi kode berikut:
    ```js
    // import createTheme di sini
    import { createTheme } from "@mui/material/styles";
    // misalnya kita ingin menggunakan material color bawaan mui
    import { blue, green } from "@mui/material/colors";

    // Buat theme yang kita inginkan di sini
    const theme = createTheme({
      palette: {
        primary: {
          // Misalnya kita ingin menggunakan warna dasarnya adalah hijau
          main: green[400],
        },
        secondary: {
          // Di sini warna secondarynya adalah biru
          main: blue[500],
        },
      },
    });

    export default theme;
    ```
1. Buka file `App.js` kemudian modifikasi kode menjadi sbb:
    ```jsx
    // Gunakan theme di sini
    import { Box, ThemeProvider } from "@mui/material";
    import theme from "./themes/theme";

    // Gunakan MUI di sini
    import { Button, Typography } from "@mui/material";

    function App() {
      return (
        // Gunakan ThemeProvider di sini
        // Inject Context Theme di sini
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <Box p={2}>
                <Typography variant="h5">React List dan Axios</Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button variant="contained" color="primary">
                  Halo Warna Hijau
                </Button>

                <Button variant="contained" color="secondary">
                  Halo Warna Biru
                </Button>
              </Box>
            </header>
          </div>

          {/* Jangan lupa ditutup */}
        </ThemeProvider>
      );
    }

    export default App;
    ```
1. Sampai di titik ini kita sudah berhasil menggunakan custom theme kita sendiri dan sudah berhasil untuk menggunakan theme tersebut di button yang kita buat !

### Review List - Cards

Sekarang kita akan mencoba untuk membuat sebuah listing yang akan menampilkan data film yah.

Listing ini akan menampilkan data berdasarkan file json yang sudah kita buat sebelumnya.

Untuk file JSONnya dapat dilihat [di sini](https://gist.github.com/withered-flowers/550b5b26e052c9fcdc9b1f92a612f319).

Nah untuk membuat listing ini, kita akan menggunakan component `Card` dari MUI.

Untuk langkah pembuatannya adalah sebagai berikut:
1. Buat file `src/data/movies.json`
1. Copy paste isi dari JSON yang diberikan di atas pada file `movies.json`
1. Sekarang kita akan coba untuk membuat Card yang akan menampilkan gambar poster, judul film, rating, dan overviewnya saja (untuk sekarang ...)
1. Mari buka dokumentasi yang ada pada MUI tentang card [di sini](https://mui.com/material-ui/react-card/#main-content)
1. Buat file `src/containers/ListMovies.css`, file ini akan berisi file CSS yang kita inginkan untuk membuat Listing dari Film yang ingin kita buat
    ```css
    /* File: ListMovies.css */
    .boxy {
      padding: 1em;
      margin: 1em 0em;
      border: 1px dashed grey;
    }
    ```
1. Buat file `src/containers/ListMovies.jsx`, file ini akan berisi Component ListMovies yang digunakan untuk menampilkan keseluruhan data yang kita inginkan di sini. Isi dari file `ListMovies.jsx` adalah sebagai berikut:
    ```jsx
    import React from "react";
    import { Box, Typography } from "@mui/material";

    // Import CSS yang ingin kita gunakan di sini !
    import "./ListMovies.css";

    // Import JSON yang sudah kita copas tadi di sini.
    import jsonMovies from "../data/movies.json";

    const ListMovies = () => {
      return (
        // Di sini kita menggunakan class boxy yang sudah didefinisikan dalam css-nya
        <Box className="boxy">
          <Typography variant="h5">Container ListMovies (Data JSON)</Typography>
        </Box>
      );
    };

    export default ListMovies;
    ```
1. Modifikasi file `App.js` untuk menampilkan Component ListMovies yang kita buat di atas.
    ```jsx
    import { Box, ThemeProvider } from "@mui/material";
    import theme from "./themes/theme";

    import { Button, Typography } from "@mui/material";

    // Import ListMovies (Data JSON)
    import ListMovies from "./containers/ListMovies";

    function App() {
      return (
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <Box p={2}>
                <Typography variant="h5">React List dan Axios</Typography>
              </Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button variant="contained" color="primary">
                  Halo Warna Hijau
                </Button>

                <Button variant="contained" color="secondary">
                  Halo Warna Biru
                </Button>
              </Box>
            </header>
            {/* Panggil ListMovies Component di sini */}
            <section style={{ paddingLeft: 16, paddingRight: 16 }}>
              <ListMovies />
            </section>
          </div>
        </ThemeProvider>
      );
    }

    export default App;
    ```
1. Buat file `src/components/CardMovie.jsx`, file ini akan berisi Component "satuan" untuk setiap Movie yang akan dibaca dari ListMovies (Poster, Judul Film, dst ditampilkan di sini)
    ```jsx
    import React from "react";
    import {
      Box,
      Card,
      CardMedia,
      CardContent,
      Rating,
      Typography,
    } from "@mui/material";

    // Di sini kita mengetahui bahwa nantinya CardMovie akan menerima
    // suatu data dari ListMovie, maka kita langsung saja
    // menerima props di sini
    const CardMovie = (props) => {
      // const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

      return (
        // di sini kita menggunakan Component Card dari MUI
        <Card className="boxy">
          <Box>
            <Typography variant="h6">Component CardMovie</Typography>
          </Box>
          <Box
            className="boxy"
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {/* 
              Card ada 2 tipe yang bisa dimasukkan sebagai isinya: 
              CardMedia dan CardContent 
            */}
            <CardMedia
              component="img"
              sx={{ width: 1 }}
              // image={`${baseUrlForMovie}${props.movie.poster_path}`}
              image={props.movie.poster_path}
              alt={props.movie.title}
            ></CardMedia>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: 1,
              }}
            >
              <Typography component="div" variant="body1">
                {props.movie.title}
              </Typography>
              {/* 
                Karena ratingnya hanya menggunakan 5 bintang, dan rating dari
                JSON kita lebih dari 10, maka kita bagi 2

                Precision untuk menyatakan ratingnya itu dibuatkan gambarnya hingga
                per seberapanya? (0.1 = sampai 1 koma di belakang angka)
              */}
              <Rating
                value={props.movie.vote_average / 2}
                precision={0.1}
                readOnly
              />
              <Typography variant="body2">
                Release date: {props.movie.release_date}
              </Typography>
              <Typography variant="body2">{props.movie.overview}</Typography>
            </CardContent>
          </Box>
        </Card>
      );
    };s

    export default CardMovie;
    ```
1. Modifikasi file `src/containers/ListMovies.jsx` untuk menampilkan Component `CardMovie` yang kita buat di atas.
    ```jsx
    import React from "react";
    import { Box, Typography } from "@mui/material";

    // Import CSS yang ingin kita gunakan di sini !
    import "./ListMovies.css";
    import CardMovie from "../components/CardMovie";

    // Import JSON yang sudah kita copas tadi di sini.
    import jsonMovies from "../data/movies.json";

    const ListMovies = () => {
      return (
        // Di sini kita menggunakan class boxy yang sudah didefinisikan dalam css-nya
        <Box className="boxy">
          <Typography variant="h5">Container ListMovies (Data JSON)</Typography>

          {/* Di sini kita akan menggunakan CardMovie */}
          {/* Ingat bahwa CardMovie menerima sebuah props dengan nama movie */}
          {/* perhatikan movies.json bahwa datanya ada pada property results */}
          <CardMovie movie={jsonMovies.results[0]} />
        </Box>
      );
    };

    export default ListMovies;
    ```
1. Sampai pada titik ini kita sudah berhasil menampilkan data JSON, tapi hanya satu saja... dan ada satu masalah lagi, yaitu gambarnya belum nampak loh ! Ya, ini karena data image tersebut kita ambil dari posisi yang salah. Untuk gambar sebenarnya ini diambil dari TMDB (yang akan dibahas nanti) yang semua imagenya harus ada prefix (awalan), yaitu "https://image.tmdb.org/t/p/w200". Nah sekarang kita akan memodifikasi hal tersebut pada file `CardMovie.jsx` yah
    ```jsx
    ...

    // Ini adalah prefixnya
    const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";
    
    ...

        <CardMedia
          component="img"
          sx={{ width: 1 }}
          // Kita gunakan image berdasarkan prefix dari image tmdb
          image={`${baseUrlForMovie}${props.movie.poster_path}`}
          alt={props.movie.title}
        ></CardMedia>
    ```
1. Yak sampai di titik ini, seharusnya gambar sudah muncul, tapi hanya satu saja yang muncul. Bagaimana bila kita ingin menampilkan `CardMovie` yang berisi 3 data terakhir dari JSON yang kita miliki sekarang ini? Mari kita modifikasi file `ListMovies.jsx`.
    ```jsx
    ...

    const ListMovies = () => {
      return (
        <Box className="boxy">
          <Typography variant="h5">Container ListMovies (Data JSON)</Typography>

          {/* Di sini sekarang kita akan melakukan pemetaan */}
          {/* Untuk bisa membuat CardMovie sejumlah 3 data terakhir saja */}
          {jsonMovies.results.slice(-3).map((movie) => {
            return <CardMovie movie={movie} />;
          })}
        </Box>
      );
    };

    export default ListMovies;
    ```
1. Voila ! Sampai di titik ini kita sudah berhasil melakukan pemetaan yang dinamis yah terhadap data yang kita miliki.

Selanjutnya kita akan berhadapan dengan pertanyaan, bagaimana bila seandainya data nya bukan JSON? tapi data hasil tarikan dari "negara antah berantah" yang kita tidak tahu namanya apa?

Mari kita coba belajar apa itu API dulu yah sebelum berbicara tentang data dari luar nya !

### Intro to API
API (Application Programming Interface) adalah suatu "penengah" dari perangkat lunak (*software intermediary*) yang memperbolehkan beberapa aplikasi untuk "berinteraksi" satu sama lain.

API itu ada banyak sekali bentuk (dan protokol) yang digunakan. Namun yang akan kita fokuskan di sini adalah **REST API**

### What is REST API

### Tools - Postman

### Let's Make the Apps
#### What is Axios
#### Demo

Kita akan belajar tentang API

### Referensi 
- https://mui.com/material-ui/react-card/#main-content