import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi(); // context 파일에서 만들어 온 함수 실행

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id), {
    staleTime: 1000 * 60 * 10, // 10분간은 캐시된걸 사용
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>🚨 에러발생 🚨</p>}

      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type="related" />
          ))}
        </ul>
      )}
    </>
  );
}
