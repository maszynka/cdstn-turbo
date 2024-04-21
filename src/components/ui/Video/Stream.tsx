"use client";

import { Stream as RawStream } from "@cloudflare/stream-react";
import { StreamProps } from "@cloudflare/stream-react/dist/types";
import { CSSProperties, useMemo } from "react";
import Image from 'next/image';


import './stream.scss';
interface CustomStreamProps extends Omit<StreamProps, "width" | "height"> {
  width: number;
  height: number;
}

//   https://customer-5nuwf6mbzsibfqza.cloudflarestream.com/c81d1a3f4edafc5be5edfaf540c8d43c/thumbnails/thumbnail.jpg?height=720
// customer-5nuwf6mbzsibfqza
// c81d1a3f4edafc5be5edfaf540c8d43c
const getThumbnailUrl = ({
  src,
  time,
  height,
  width
}: {
  src: string,
  time: string,
  height:  number,
  width: number,
}) => {
  const customer = `customer-5nuwf6mbzsibfqza`;
  const basePart = `https://${customer}.cloudflarestream.com`;
  const thumbnailBase = new URL(`${src}/thumbnails/thumbnail.jpg`, basePart)
  thumbnailBase.searchParams.append('height', String(height))
  thumbnailBase.searchParams.append('width', String(width))
  thumbnailBase.searchParams.append('time', String(time))

  return thumbnailBase.href
}

// time (default 0s, configurable) time from the video e.g. 8m, 5m2s
// height (default 640)
// width (default 640)
// fit (default crop) to clarify what to do when requested height and width doesn’t match the original upload, which should be one of:
// crop cut parts of the video that doesn’t fit in the given size
// clip preserve the entire frame and decrease the size of the image within given size
// scale distort the image to fit the given size
// fill preserve the entire frame and fill the rest of the requested size with black background

export const Stream = ({
  width = 0,
  height = 0,
  ...props
}: CustomStreamProps) => {
  const {src} = props;
  const responsiveStyles: CSSProperties = useMemo<CSSProperties>(
    () => ({
      position: "relative",
      width: '100%',
      paddingTop: width > 0 ? `${(height / width) * 100}%` : undefined,
    }),
    [width, height],
  );

  const thumbRatio = 0.1 as const;

  const thumbWidth = Math.floor(width * thumbRatio);
  const thumbHeight = Math.floor(height * thumbRatio)

  const thumbUrl = getThumbnailUrl({width: thumbWidth, height: thumbHeight, src, time: '4s'});


  console.log(getThumbnailUrl({width: thumbWidth, height: thumbHeight, src, time: '4s'}));


  //paddingTop: `calc(100% / ${width} * ${height})`
  return (
    <div className="stream--outside-wrap" style={{
      '--bg': `url(${thumbUrl})`,
      '--width': width,
      '--height': height,
    } as unknown as CSSProperties}
    >
      {/* <div className="stream--inner-wrap" > */}
      {/* <Image src={thumbUrl} alt="" width={thumbWidth} height={thumbHeight} className="stream__thumb"/> */}
      <RawStream
        width={`${width}px`}
        height={`${height}px`}
        className="stream-iframe"
      //   responsive={false}
        {...props}
      />
      {/* </div> */}
    </div>
  )

  return (
    <div style={responsiveStyles}>
      <RawStream
        width={`${width}px`}
        height={`${height}px`}
        className="stream-iframe"
        responsive={false}
        {...props}
      />
    </div>
  );
};
