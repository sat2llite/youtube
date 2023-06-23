import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext'
import VideoCard from './VideoCard';

export default function RealatedVideos({id}) {
  const { youtube } = useYoutubeApi();

  const { 
    isLoading, 
    error, 
    data:videos 
  } = useQuery( ['related',id], () => youtube.relatedVideos(id),
  {staleTime:1000*60*10})

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>🚨 에러발생 🚨</p>}

      {videos && ( 
        <ul className=''>
          {videos.map((video)=>(
            <VideoCard key={video.id} video={video} type="related" />
          ))}
        </ul>
      )}
    </>
  )
}
