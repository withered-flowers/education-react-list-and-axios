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
      {/* <CardMovie movie={jsonMovies.results[0]} /> */}

      {/* Di sini sekarang kita akan melakukan pemetaan */}
      {/* Untuk bisa membuat CardMovie sejumlah 3 data terakhir saja */}
      {jsonMovies.results.slice(-3).map((movie) => {
        return <CardMovie movie={movie} />;
      })}
    </Box>
  );
};

export default ListMovies;
