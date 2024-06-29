// import { Header } from "@t3-test/components/ui/Header";
import { Panel } from "@t3-test/components/ui/Panel/Panel";
import { ReactNode } from "react";
// import Link from "next/link";
// import { type ReactNode } from "react";

const Panels = ({ children }: { children: ReactNode }) => {
  return <div className="panels">{children}</div>;
};

export default function HomePage() {
  return (
    <Panels>
      <Panel
        title="Butchers block"
        summary="A small description about what is a butchers block and how it affects your life."
      />
      <Panel
        title="Butchers block"
        summary="A small description about what is a butchers block and how it affects your life."
      />
      <Panel
        title="Butchers block"
        summary="A small description about what is a butchers block and how it affects your life."
      />
      <Panel
        title="Butchers block"
        summary="A small description about what is a butchers block and how it affects your life."
      />
    </Panels>
  );
}
