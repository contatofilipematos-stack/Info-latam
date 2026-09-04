import React from 'react';

interface VSLPlayerProps {
  onVideoComplete?: () => void;
}

export default function VSLPlayer({ onVideoComplete }: VSLPlayerProps) {
  // Direct embed for the new Vimeo VSL: https://vimeo.com/1223836417?share=copy&fl=sv&fe=ci
  const videoId = "1223836417";
  const embedUrl = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&autopause=0&muted=0`;

  return (
    <div className="w-full max-w-[290px] mx-auto aspect-[9/16] rounded-3xl overflow-hidden shadow-xl border-3 border-sky-pastel-100 bg-stone-950">
      <iframe
        className="w-full h-full"
        src={embedUrl}
        title="Apresentação do Kit Setembro Amarelo"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; accelerometer; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}



