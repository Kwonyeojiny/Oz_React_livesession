import { useEffect, useState } from "react";
import axios from "axios";

// Tmdb와 통신을 하기위해 필요한 설정
const APIKEY = "a6ee73b5ea9485d2659ebac456ff281b";
const API_BASE_URL = "https://api.themoviedb.org/3/movie"; // API URL;
const IMG_BASE_URL = "https://image.tmdb.org"; // 이미지 URL;
const MOVIE_ID = "912649";

// UI 컴포넌트 (VAC패턴)
const MovieList = ({ movieList }) => (
  <>
    <h1>영화 리스트 조회</h1>
    {movieList.map((movie, idx) => (
      <div key={movie.id}>
        <h2>{`No.${++idx} ID: ${movie.id}, Adult: ${
          movie.adult === false ? "19세 미만" : "19세 이상"
        }`}</h2>
      </div>
    ))}
  </>
);

// 영화 상세 조회
const MovieDetail = ({ movie }) => (
  <>
    <h1>영화 상세 조회</h1>
    <h2>
      제목 : {movie.title}({movie.original_title})
    </h2>
    <h2>개요 : {movie.overview}</h2>
    <h2>출시일 : {movie.release_date}</h2>
    <h2>19세 여부 : {movie.adult === false ? "19세 미만" : "19세 이상"}</h2>
  </>
);

// 영화 이미지 조회
const MovieImages = ({ movieImages }) => (
  <>
    <h1>영화 이미지 조회</h1>
    {movieImages?.map((img, idx) => (
      <div key={idx}>
        <img
          src={`${IMG_BASE_URL}/t/p/w500${img.file_path}`}
          alt={img.file_path}
        />
      </div>
    ))}
  </>
);

const TmdbComponent = () => {
  // 영화리스트 상태관리
  const [movieList, setMovieList] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieImages, setMovieImages] = useState([]);

  // 1. 영화 리스트 조회
  const getMovieList = async () => {
    const url = API_BASE_URL + "/changes";

    await axios
      .get(url, {
        params: {
          api_key: APIKEY,
        },
      })
      .then((res) => {
        console.log(res);
        setMovieList(res.data.results);
      }) // 통신 성공
      .catch((e) => console.log(e)); // 통신 실패
  };

  // 2. 영화 상세 조회
  const getMovieDetail = async () => {
    const url = API_BASE_URL + "/" + MOVIE_ID;

    await axios
      .get(url, {
        params: {
          api_key: APIKEY,
        },
      })
      .then((res) => {
        console.log("movie Detail res: ", res);
        setMovieDetail((prev) => ({ ...res.data }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 3. 영화 이미지 조회
  const getMovieImage = async () => {
    const url = API_BASE_URL + "/" + MOVIE_ID + "/images";

    await axios
      .get(url, {
        params: {
          api_key: APIKEY,
        },
      })
      .then((res) => {
        console.log("movie img res: ", res);
        setMovieImages(res.data.backdrops);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getMovieList();
    getMovieDetail();
    getMovieImage();
  }, []);
  return (
    <>
      <MovieList movieList={movieList} />
      <MovieDetail movie={movieDetail} />
      <MovieImages movieImages={movieImages} />
    </>
  );
};

export default TmdbComponent;
