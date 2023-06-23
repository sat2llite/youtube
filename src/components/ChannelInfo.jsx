import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 10 } // 10분간은 캐시된걸 사용
  );

  return (
    <div className="flex my-4 items-center">
      {/* url이 있을 경우만 보이게 설정 */}
      {/* 위에서 받아온 name을 화면에 뿌려줌 */}
      {url && <img src={url} alt={name} className="rounded-full w-10 h-10" />}
      <p>{name}</p>
    </div>
  );
}
