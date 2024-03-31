"use client";

import { Stream as RawStream } from "@cloudflare/stream-react";
import { StreamProps } from "@cloudflare/stream-react/dist/types";
import { CSSProperties, useMemo } from "react";

interface CustomStreamProps extends Omit<StreamProps, "width" | "height"> {
  width: number;
  height: number;
}

export const Stream = ({
  width = 0,
  height = 0,
  ...props
}: CustomStreamProps) => {
  const responsiveStyles: CSSProperties = useMemo<CSSProperties>(
    () => ({
      position: "relative",
      width: '100%',
      paddingTop: width > 0 ? `${(height / width) * 100}%` : undefined,
    }),
    [width, height],
  );

  return  <RawStream
  width={`${width}px`}
  height={`${height}px`}
  className="stream-iframe"
//   responsive={false}
  {...props}
/>

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
