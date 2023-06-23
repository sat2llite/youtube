import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  console.log("video는? : ", video);
  const { title, description, channelTitle, channelId } = video.snippet;
  const wrap = {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "30px",
    height: 0,
    overflow: "hidden",
  }
  const iframe = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }

  return (
    <section className="flex flex-col lg:flex-row p-4 gap-x-4">
      <article className="basis-2/3">
        <div style={wrap}>
          <iframe
            id="player"
            type="text/html"
            width="100%"
            height="640"
            style={iframe}
            src={`https://www.youtube.com/embed/${video.id}`}
            title={title}
          />
        </div>
        <div>
          <h2 className="text-lg">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <div className="h-48 bg-zinc-700 overflow-y-auto p-2 rounded-lg mb-10">
            <pre className="whitespace-pre-wrap">{description}</pre>
          </div>
        </div>
      </article>

      <aside className="basis-1/3">
        <RelatedVideos id={video.id} />
      </aside>
    </section>
  );
}
