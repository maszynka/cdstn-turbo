import React from "react";

interface ProgressBarProps {
  progress1: number;
  progress2: number;
  progress3: number;
}

const ProgressBar = ({
  progress1,
  progress2,
  progress3,
}: ProgressBarProps) => {
  return (
    <div className="w-[600px] space-y-4">
      <div className="flex w-full  items-center gap-8 rounded ">
        <div
          style={{ width: `${progress1}% ` }}
          className=" h-6 rounded bg-blue-500"
        >
          {progress1 / 10}/10
        </div>
        <span>Jak dziwnie wyglądasz?</span>
      </div>
      <div className="flex w-full items-center gap-8 rounded ">
        <div
          style={{ width: `${progress2}% ` }}
          className=" h-6 rounded bg-green-500"
        >
          {progress2 / 10}/10
        </div>
        <span>Trudność fizyczna</span>
      </div>
      <div className=" flex w-full items-center gap-8 rounded ">
        <div
          style={{ width: `${progress3}% ` }}
          className=" h-6 rounded bg-red-500"
        >
          {progress3 / 10}/10
        </div>
        <span>Trudność techniczna</span>
      </div>
    </div>
  );
};

export default ProgressBar;
