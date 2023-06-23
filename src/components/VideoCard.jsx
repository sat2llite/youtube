import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/date";

export default function VideoCard({ video, type }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;

  const navigate = useNavigate();
  const isRelated = type === "related";

  return (
    // *리팩토링
    <li
      className="cursor-pointer"
      onClick={() => {
        // useNavigate() : 링크로 연결 시 객체(상태)까지 같이 전달해줌
        navigate(`/videos/watch/${video.id}`, { state: { video } }); 
        // navigate(`/videos/watch/${video.id}`); 
      }}
    >
      <img className="w-full rounded-lg" src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="text-lg mt-3 mb-1 leading-6 line-clamp-2">{title}</p>
        <p className=" text-sm opacity-70">{channelTitle}</p>
        {/* <p>{format(publishedAt, "ko")}</p> */}
        <p className="text-sm opacity-70">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>

    // <div>{video.snippet.title}</div>
  );
}
