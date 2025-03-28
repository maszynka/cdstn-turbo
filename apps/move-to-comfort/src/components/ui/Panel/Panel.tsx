import * as React from "react";
import "./panel.scss";
import { Stream } from "../Video/Stream";
import { GradientTxt, GradientTxtWrap } from "@t3-test/components/Txt";
interface MovementSpec {
  label: string;
  value: React.ReactNode;
}
type SpecsProps = { specs: MovementSpec[] };
const Spec = ({ label, value }: MovementSpec) => {
  return (
    <span className="spec">
      <span className="spec__label">{label}</span>
      <span className="spec__value">{value}</span>
    </span>
  );
};

const Specs = ({ specs }: SpecsProps) => {
  return (
    <div className="specs">
      {specs.map((spec, index) => (
        <Spec key={index} {...spec} />
      ))}
    </div>
  );
};

type PanelProps = {
  title: React.ReactNode;
  summary: React.ReactNode;
  tags: string[];
  duration: { time: number; unit: string; note: string };
  wtfFactor: { level: number; note: string };
  steps: string[];
  presenter: { name: string; avatar: string; link: string };
};

// const YAGTLF = () => (
//   <GradientTxtWrap className="yagtlf">
//     <GradientTxt>You are going to look fine</GradientTxt> 🏆
//   </GradientTxtWrap>
// );

const Tags = ({ children }: { children: React.ReactNode }) => {
  return <div className="tags">{children}</div>;
};

const Tag = ({ children }: { children: React.ReactNode }) => {
  return <span className="tag">{children}</span>;
};

export const Panel = ({ title, summary, tags }: PanelProps) => {
  return (
    <div className="panel">
      <div className="panel__header">
        <h3 className="panel__title">{title}</h3>
        <Tags>
          {
            tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))
          }
        </Tags>
      </div>

      <p className="panel__summary">{summary}</p>
      <Specs
        specs={[
          { label: "Time:", value: "12s" },
          { label: "Advance level:", value: "Beginner/Everyone" },
        ]}
      />
      <Stream
        src="c81d1a3f4edafc5be5edfaf540c8d43c"
        width={1920}
        height={1080}
        controls
        autoplay
      />
    </div>
  );
};
