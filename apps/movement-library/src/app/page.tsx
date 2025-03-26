// import { Header } from "@t3-test/components/ui/Header";
import { Panel } from "@t3-test/components/ui/Panel/Panel";
import { time } from "console";
import * as React from "react";
// import Link from "next/link";

const Panels = ({ children }: { children: React.ReactNode }) => {
  return <div className="panels">{children}</div>;
};

export default function HomePage() {
  return (
    <Panels>
      <Panel
        title="1. Reduce your back pain with this exercise"
        tags={["back pain", "shoulders"]}
        duration={{time: 12, unit: "seconds", note: "you can repeat 3 times"}}
        wtfFactor={{level: 0, note: "you are going to look fine doing this"}} 
        summary="A small description about what is a butchers block and how it affects your life."
        steps={[
          "Make sure you seat in front of stable desk",
          "Put your hands on the desk",
          "Push your body below the desk",
          "Hold for 10 seconds",
          "Push your body up",
          "You can repeat it 3 times from step 3"
        ]}
        presenter={{
          name: "Kacper Dziuba - Trener Personalny (kalistenika)",
          avatar: "",
          link: "https://imperatordrazka.pl"
        }}
      />
      {/* <Panel
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
      /> */}
    </Panels>
  );
}
