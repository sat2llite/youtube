import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";
// import { search } from '../api/youtube';
// import FakeYoutube from "../api/fakeYoutube";
// import Youtube from "../api/youtube";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi(); // context 파일에서 만들어 온 함수 실행

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));

  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery(["videos", keyword], () => {
  //   // context로 보냄
  //   // const youtube = new FakeYoutube(); // 외부 data를 가지고 오는 함수(생성자)
  //   // const youtube = new Youtube();
  //   return youtube.search(keyword);
  //   // 1. fakeYoutube.js의 함수에 keyword를 인자로 보내줌(검색한 내용)
  //   // 2. context에서 youtube 가져와야 함
  // });
  /*
    { 쿼리값, 에러 , 데이터 이름 }
    const { isLoading, error, data } = useQuery([],fnc,options)
    
    useQuery 
    - useState보다 효율적으로 관리하기 위해 사용(라이브러리)
    - 여기저기 가져다 사용할 수 있음
  */

  // console.log("videos ? ", videos);
  return (
    <div className="w-full max-w-screen-2xl m-auto">
      <div>Videos - {keyword ? ` 🔍 ${keyword}` : "🔥인기동영상"} </div>
      {/* //keyword가 있을때 / 없을때  */}

      {isLoading && <p>Loading...</p>}
      {error && <p>🚨 에러발생 🚨</p>}

      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 gap-y-6 p-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>
  );
}
