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
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

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
          // Kita gunakan image berdasarkan prefix dari image tmdb
          image={`${baseUrlForMovie}${props.movie.poster_path}`}
          // image={props.movie.poster_path}
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
};

export default CardMovie;
