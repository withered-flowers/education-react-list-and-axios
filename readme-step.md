# Menjadi React Developer - React List dan Axios

## Table of Content
1. Review Context - Themes
1. Review List - Cards
1. Intro to API
1. What is REST API
1. Tools - Postman
1. Let's Make the Apps
    - What is Axios
    - Demo

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



### Intro to API

### What is REST API

### Tools - Postman

### Let's Make the Apps
#### What is Axios
#### Demo

Kita akan belajar tentang API