import { ReactNode } from "react";
import './panel.scss';
interface MovementSpec {
  label: string;
  value: ReactNode;
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
  title: ReactNode;
  summary: ReactNode;
};

const YAGTLF = () => (
  <button className="btn--yagtlf">You are going to look fine 🏆</button>
);

export const Panel = ({ title, summary }: PanelProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <Specs
        specs={[
          { label: "Time", value: "12s" },
          { label: "For who", value: "Everyone" },
          { label: "Weirdeness", value: <YAGTLF/> },
        ]}
      />
    </div>
  );
};
