/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8s080QPh6bu
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@t3-test/components/ui/card";
import { Button } from "@t3-test/components/ui/button";
import Image from "next/image";
import { ReactNode } from "react";

export const Panel = ({ children }: { children?: ReactNode }) => {
  return <div>{children}</div>;
};

export function HomePageMock1() {
  return (
    <div className="bg-primary-500 relative grid grid-cols-1 gap-6 bg-opacity-50 p-6">
      <Panel>
        <h1 className="text-4xl font-semibold ">Movement Library</h1>
        <h2>Import movemement into life.</h2>

      </Panel>
      <Panel>
        <h3>1. Deska rzeźnika (butchers block)</h3>
        <strong>Krok po kroku:</strong>
        <span>czas wykonania: 12 sekund</span>
        <span>trudność: łatwe </span>
        <span>dziwność: nikt nie zwróci uwagi</span>
        <ul>
          <li>
            1. Upewnij się ze biurko jest stabilne dając nacisk na jego przód
            blatu. Sprawdź czy nie masz krępujących klatkę piersiową ubrań.{" "}
          </li>
          <li>2. Oprzyj się o biurko łokciami, zła ręce z tyłu głowy</li>
          <li>
            3. Stopniowo zacznij naciskać na biurko łokciami az poczujesz
            napiecie.
          </li>
          <li>
            4. Upewnij się że nie masz z tyłu nikogo i stopniowo odsuwaj krzesło
            od biurka (jeśli ma kółka), jeśli nie to odsuń krzesło wracając do
            pionowej pozycji. i powtórz kroki{" "}
          </li>
        </ul>
      </Panel>
      <Panel>
        Newsletter: Jeśli chcesz otrzymywać informacje o pakiecie dodatkowych
        ruchów poziomu 1, zapisz się na newsletter.
      </Panel>
    </div>
  );
}
