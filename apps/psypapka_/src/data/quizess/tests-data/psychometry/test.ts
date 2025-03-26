export const quiz = {
  id: 1,
  title: "Test apki",
  questions: [
    {
      id: 1,
      text: "Jeżeli w wyniku CFA współczynnik RMSEA wynosi 0,06, dopasowanie jest:",
      options: [
        "znakomite",
        "umiarkowane",
        "bardzo słabe",
        "zdecydowanie nieodpowiednie"
      ],
      correctAnswer: 0,
      explanation: "RMSEA (Root Mean Square Error of Approximation) poniżej 0.08 oznacza dobre dopasowanie modelu, a wartość 0.06 jest uznawana za znakomite dopasowanie."
    },
    {
      id: 2,
      text: "Jako podstawę do badania trafności teoretycznej za pomocą analizy różnic międzygrupowych można zastosować:",
      options: [
        "badanie samoopisu skalą samooceny (SES) w grupie z rozpoznaną depresją kliniczną i w grupie zdrowej, wyrównanych ze względu na płeć i wiek",
        "badanie samoopisu i szacowania skalą samooceny (SES) Morrisa Rosenberga",
        "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga przed eksperymentem - w którym badani doświadczali porażek albo sukcesów - i po nim",
        "dwukrotne badanie samoopisu skalą samooceny (SES) Morrisa Rosenberga bez przerwy czasowej"
      ],
      correctAnswer: 0,
      explanation: "Analiza różnic międzygrupowych jest właściwą metodą badania trafności teoretycznej, gdy porównujemy grupy różniące się ze względu na mierzony konstrukt (np. grupa kliniczna vs. kontrolna), przy czym grupy powinny być wyrównane pod względem innych istotnych zmiennych."
    },
    {
      id: 3,
      text: "Gdy autor przeprowadził analizę CFA, zidentyfikował w swojej skali pozycję o najwyższym ładunku równym 0,70. Jeśli autor usunie tę pozycję ze skali, wysokość omegi MacDonalda najprawdopodobniej:",
      options: [
        "zmniejszy się",
        "zwiększy się",
        "nie zmieni się",
        "nie wiadomo co się stanie, bo ładunki czynnikowe i omega MacDonalda zależą od zupełnie innych aspektów testu"
      ],
      correctAnswer: 0,
      explanation: "Usunięcie pozycji o wysokim ładunku czynnikowym spowoduje zmniejszenie się współczynnika rzetelności omegi MacDonalda, ponieważ pozycje o wysokich ładunkach wnoszą najwięcej do ogólnej spójności skali."
    }
  ]
}