export const quiz = {
  id: 1,
  title: "Zaawansowana psychometria 29.1.25",
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
      correctAnswer: 1,
      explanation: "AI nawet się na tym wywala... Nie przejmuj się tym pytaniem, debaty nad nim trwaj od zarania dziejów. AI: RMSEA (Root Mean Square Error of Approximation) to wskaźnik dopasowania modelu w analizie czynnikowej konfirmacyjnej (CFA). Wartość 0.06 oznacza znakomite dopasowanie, ponieważ:\n\n- Wartości poniżej 0.05 oznaczają bardzo dobre dopasowanie\n- Wartości między 0.05 a 0.08 oznaczają dobre dopasowanie\n- Wartości między 0.08 a 0.10 oznaczają umiarkowane dopasowanie\n- Wartości powyżej 0.10 oznaczają słabe dopasowanie\n\nDlatego wartość 0.06 klasyfikuje się jako znakomite dopasowanie modelu do danych."
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
      explanation: "Współczynnik omega MacDonalda jest miarą rzetelności testu, która uwzględnia ładunki czynnikowe poszczególnych pozycji. Usunięcie pozycji o wysokim ładunku (0.70) najprawdopodobniej spowoduje zmniejszenie rzetelności, ponieważ:\n\n- Pozycje o wysokich ładunkach wnoszą najwięcej do ogólnej spójności skali\n- Usunięcie takiej pozycji zmniejsza ilość wspólnej wariancji w teście\n- Wysokie ładunki czynnikowe wskazują na silny związek z mierzonym konstruktem\n- Omega MacDonalda jest szczególnie wrażliwa na strukturę czynnikową testu\n\nInne odpowiedzi są nieprawidłowe, gdyż:\n- Zwiększenie rzetelności jest mało prawdopodobne przy usunięciu dobrze działającej pozycji\n- Brak zmiany jest niemożliwy, gdy usuwa się istotną pozycję\n- Nieprzewidywalność efektu nie ma zastosowania, gdy znamy parametry psychometryczne pozycji"
    },
    {
      id: 4,
      text: "Analiza czynnikowa:",
      options: [
        "polega na eksploracji danych, a następnie ekstrapolacji uzyskanego rozwiązania",
        "to metoda analizy danych, w której identyfikujemy mniejszą liczbę wymiarów w większym zbiorze pozycji w teście",
        "powinna być stosowana do budowy testów składających się z pytań o zróżnicowanej trudności",
        "składa się z dwóch etapów - analizy wariancji i ekstrapolacji"
      ],
      correctAnswer: 1,
      explanation: "Analiza czynnikowa jest metodą redukcji danych, która pozwala na identyfikację ukrytych wymiarów (czynników) w większym zbiorze zmiennych. Wyjaśnienie, dlaczego pozostałe odpowiedzi są nieprawidłowe:\n\n1. 'Eksploracja i ekstrapolacja' - błędne, bo:\n- Analiza czynnikowa nie zajmuje się ekstrapolacją\n- Jest metodą redukcji, nie przewidywania\n\n2. 'Pytania o zróżnicowanej trudności' - błędne, bo:\n- Trudność pytań nie jest kluczowa dla analizy czynnikowej\n- To aspekt analizy itemów, nie analizy czynnikowej\n\n3. 'Analiza wariancji i ekstrapolacja' - błędne, bo:\n- Analiza wariancji to inna metoda statystyczna\n- Ekstrapolacja nie jest częścią analizy czynnikowej"
    },
    {
      id: 5,
      text: "Jedna ze strategii adaptacji kulturowej testu jest rekonstrukcja, która polega na:",
      options: [
        "opracowaniu zupełnie nowego testu, dla którego inspiracją jest oryginalny model teoretyczny i strategia konstrukcji",
        "opracowaniu zupełnie nowego testu, dla którego inspiracją jest test oryginalny i większość itemów jest generowana na podstawie pozycji oryginalnych",
        "przekładzie oryginalnych pozycji testu niedopuszczającym żadnych modyfikacji",
        "przekładzie oryginalnych pozycji testu dopuszczającym wszystkie modyfikacje, które badacz uważa za niezbędne"
      ],
      correctAnswer: 0,
      explanation: "Rekonstrukcja jako strategia adaptacji kulturowej testu polega na stworzeniu nowego narzędzia. Wyjaśnienie szczegółowe:\n\n1. Cechy rekonstrukcji:\n- Zachowuje tylko model teoretyczny\n- Tworzy nowe pozycje odpowiednie kulturowo\n- Największa swoboda adaptacji\n\n2. Dlaczego inne odpowiedzi są błędne:\n- Generowanie itemów na podstawie oryginałów ogranicza adaptację\n- Przekład bez modyfikacji ignoruje różnice kulturowe\n- Dowolne modyfikacje nie gwarantują równoważności"
    },
    {
      id: 6,
      text: "Gdy podczas walidacji chcemy porównać rozwiązanie trójczynnikowe i dwuczynnikowe, to precyzyjne parametry uzyskamy w wyniku analizy:",
      options: [
        "EFA",
        "CFA",
        "AUC",
        "ROC"
      ],
      correctAnswer: 1,
      explanation: "CFA (Konfirmacyjna Analiza Czynnikowa) jest właściwą metodą porównywania modeli, ponieważ:\n\n1. Zalety CFA:\n- Dostarcza precyzyjnych wskaźników dopasowania\n- Pozwala na formalne testowanie hipotez\n- Umożliwia bezpośrednie porównanie modeli\n\n2. Dlaczego inne metody są nieodpowiednie:\n- EFA: służy do eksploracji, nie do testowania modeli\n- AUC/ROC: dotyczą trafności diagnostycznej, nie struktury czynnikowej"
    },
    {
      id: 7,
      text: "Zalecana rzetelność testów przeznaczonych do badań naukowych wynosi:",
      options: [
        "poniżej 0,05",
        "poniżej 0,01",
        "powyżej 0,7",
        "powyżej 0,95"
      ],
      correctAnswer: 2,
      explanation: "Wartość współczynnika rzetelności 0,7 jest minimalna dla badań naukowych, ponieważ:\n\n1. Znaczenie wartości 0,7:\n- 49% wariancji wyników to wariancja prawdziwa\n- Akceptowalny poziom błędu pomiaru\n- Standard w badaniach naukowych\n\n2. Dlaczego inne wartości są nieodpowiednie:\n- Poniżej 0,05/0,01: to poziomy istotności, nie rzetelności\n- Powyżej 0,95: zbyt restrykcyjne, rzadko osiągalne\n\n3. Praktyczne zastosowanie:\n- Badania grupowe\n- Analizy korelacyjne\n- Porównania międzygrupowe"
    },
    {
      id: 8,
      text: "Testy, których nie poddano pełnej procedurze adaptacji kulturowej (np. nie mają opracowanych polskich norm), można stosować wyłącznie:",
      options: [
        "w odniesieniu do pojedynczych osób",
        "w rekrutacji i selekcji",
        "wśród młodzieży szkolnej",
        "w badaniach naukowych"
      ],
      correctAnswer: 3,
      explanation: "Testy bez pełnej adaptacji można stosować tylko w badaniach naukowych, ponieważ:\n\n1. Specyfika badań naukowych:\n- Analizy na poziomie grupowym\n- Brak indywidualnych decyzji diagnostycznych\n- Możliwość kontroli zmiennych zakłócających\n\n2. Dlaczego inne zastosowania są niewłaściwe:\n- Diagnozy indywidualne wymagają norm\n- Rekrutacja wymaga pełnej adaptacji\n- Badania młodzieży potrzebują dostosowania kulturowego\n\n3. Ograniczenia użycia:\n- Tylko do celów badawczych\n- Konieczność ostrożnej interpretacji\n- Świadomość ograniczeń metodologicznych"
    },
    {
      id: 9,
      text: "Badacz przeprowadził analizę EFA na próbie 370 osób badanych. Następnie na tej samej próbie przetestował za pomocą analizy CFA dopasowanie do modelu wyodrębnionego podczas analizy EFA. Uzyskał bardzo wysoki poziom dopasowania. Badacz postąpił:",
      options: [
        "słusznie - ponieważ należy maksymalnie wykorzystać zebrane dane",
        "słusznie - ponieważ analizy EFA i CFA należy stosować jednocześnie",
        "niesłusznie - ponieważ analizę CFA należało przeprowadzić na innej próbie",
        "niesłusznie - ponieważ najpierw powinien wykonać analizę CFA, a później analizę EFA"
      ],
      correctAnswer: 2,
      explanation: "Użycie tej samej próby do EFA i CFA jest błędem metodologicznym, ponieważ:\n\n1. Problemy z tym podejściem:\n- Prowadzi do kapitalizacji na przypadku\n- Zawyża wskaźniki dopasowania\n- Nie weryfikuje stabilności struktury\n\n2. Prawidłowe podejście:\n- EFA na pierwszej próbie\n- CFA na nowej, niezależnej próbie\n- Walidacja krzyżowa wyników\n\n3. Dlaczego inne odpowiedzi są błędne:\n- Maksymalne wykorzystanie danych nie jest priorytetem\n- EFA i CFA mają różne cele i założenia\n- Kolejność EFA-CFA jest logiczna (eksploracja przed konfirmacją)"
    },
    {
      id: 10,
      text: "Każdy współczynnik rzetelności można interpretować jako:",
      options: [
        "odsetek wariancji wyników prawdziwych determinowanych przez wyniki otrzymane",
        "odsetek wariancji wyników otrzymanych determinowanych przez wyniki prawdziwe",
        "współczynnik zbieżności",
        "współczynnik rozbieżności"
      ],
      correctAnswer: 1,
      explanation: "Współczynnik rzetelności informuje o wariancji wyników prawdziwych, ponieważ:\n\n1. Interpretacja współczynnika:\n- Jest proporcją wariancji wyników prawdziwych\n- Podniesiony do kwadratu daje procent wyjaśnionej wariancji\n- Wskazuje na dokładność pomiaru\n\n2. Dlaczego inne interpretacje są błędne:\n- Wyniki prawdziwe determinują otrzymane, nie odwrotnie\n- Współczynnik zbieżności/rozbieżności to inne pojęcia\n- Dotyczy precyzji pomiaru, nie jego kierunku\n\n3. Praktyczne znaczenie:\n- Pozwala ocenić jakość pomiaru\n- Umożliwia porównanie testów\n- Wskazuje na użyteczność wyników"
    },
    {
      id: 11,
      text: "Co oznacza skrót AUC?",
      options: [
        "pole pod krzywą ROC",
        "pole pod krzywą osypiska",
        "analiza ujemnej częstości",
        "analiza unikalnej pewności"
      ],
      correctAnswer: 0,
      explanation: "AUC (Area Under Curve) oznacza pole pod krzywą ROC, ponieważ:\n\n1. Charakterystyka wskaźnika:\n- Mierzy całkowitą dokładność testu diagnostycznego\n- Przyjmuje wartości od 0 do 1\n- 0.5 oznacza przypadkową klasyfikację\n- 1.0 oznacza idealną klasyfikację\n\n2. Dlaczego pozostałe odpowiedzi są błędne:\n- Krzywa osypiska dotyczy analizy czynnikowej\n- Analiza ujemnej częstości nie istnieje\n- Analiza unikalnej pewności to nieistniejący termin\n\n3. Zastosowanie praktyczne:\n- Ocena skuteczności testów diagnostycznych\n- Porównywanie różnych narzędzi\n- Ustalanie punktów odcięcia"
    },
    {
      id: 12,
      text: "Zmienne latentne na diagramie ścieżkowym reprezentowane są jako:",
      options: [
        "prostokąty",
        "okręgi",
        "strzałki jednokierunkowe",
        "strzałki dwukierunkowe"
      ],
      correctAnswer: 1,
      explanation: "Reprezentacja zmiennych latentnych w diagramach ścieżkowych jako okręgów wynika z:\n\n1. Konwencja graficzna:\n- Okręgi/elipsy = zmienne latentne (ukryte)\n- Prostokąty = zmienne obserwowalne\n- Strzałki jednokierunkowe = wpływy przyczynowe\n- Strzałki dwukierunkowe = korelacje\n\n2. Dlaczego inne symbole są nieodpowiednie:\n- Prostokąty są zarezerwowane dla zmiennych obserwowalnych\n- Strzałki reprezentują relacje między zmiennymi\n\n3. Znaczenie dla interpretacji:\n- Ułatwia zrozumienie modelu\n- Standardowa notacja w SEM\n- Jasne rozróżnienie typów zmiennych"
    },
    {
      id: 13,
      text: "Konfirmacyjna analiza czynnikowa:",
      options: [
        "zwykle jest stosowana, by wstępnie wyodrębnić czynniki w bazie zebranych danych psychometrycznych",
        "pozwala precyzyjnie potwierdzić lub odrzucić testowany model",
        "nakłada jedynie minimum restrykcji na zakładany model czynnikowy",
        "żadna odpowiedź nie jest poprawna"
      ],
      correctAnswer: 1,
      explanation: "CFA (Konfirmacyjna Analiza Czynnikowa) jest metodą weryfikacyjną, ponieważ:\n\n1. Główne cechy CFA:\n- Testuje konkretne hipotezy o strukturze\n- Wymaga wcześniejszej specyfikacji modelu\n- Dostarcza precyzyjnych wskaźników dopasowania\n\n2. Dlaczego inne odpowiedzi są błędne:\n- Wstępne wyodrębnianie to rola EFA\n- Minimalne restrykcje to cecha EFA\n- CFA nakłada ścisłe ograniczenia na model\n\n3. Zastosowania:\n- Testowanie teorii\n- Walidacja struktury\n- Porównywanie modeli alternatywnych"
    },
    {
      id: 14,
      text: "Metoda badania wewnętrznej struktury testu jest:",
      options: [
        "metodą badania jego trafności",
        "metodą badania jego rzetelności",
        "odmianą analizy itemmetrycznej stosowaną podczas budowy testu według zewnętrznej strategii konstruowania",
        "żadna odpowiedź nie jest poprawna"
      ],
      correctAnswer: 0,
      explanation: "Badanie wewnętrznej struktury testu służy analizie trafności, ponieważ:\n\n1. Aspekty trafności strukturalnej:\n- Sprawdza zgodność empirycznej struktury z teorią\n- Weryfikuje założenia o wymiarowości konstruktu\n- Potwierdza teoretyczny model testu\n\n2. Dlaczego nie jest to badanie rzetelności:\n- Rzetelność dotyczy precyzji pomiaru\n- Nie analizuje struktury teoretycznej\n- Skupia się na błędzie pomiaru\n\n3. Znaczenie dla walidacji:\n- Potwierdza konstrukcję testu\n- Wspiera interpretację wyników\n- Weryfikuje założenia teoretyczne"
    },
    {
      id: 15,
      text: "Jeśli autorzy piszą, że oszacowali stabilność bezwzględną jako miarę rzetelności testu psychologicznego, to obliczyli:",
      options: [
        "alfę Cronbacha",
        "korelacje między wersjami równoległymi testu, badanymi z odstępem czasu",
        "korelacje między dwoma badaniami tym samym testem z odstępem czasu",
        "korelacje między dwoma badaniami tym samym testem bez odstępu czasu"
      ],
      correctAnswer: 2,
      explanation: "Stabilność bezwzględna jest metodą test-retest, ponieważ:\n\n1. Charakterystyka metody:\n- Wymaga dwukrotnego badania tą samą wersją testu\n- Odstęp czasowy między pomiarami\n- Badanie tych samych osób\n\n2. Dlaczego inne odpowiedzi są błędne:\n- Alfa Cronbacha mierzy spójność wewnętrzną\n- Wersje równoległe to inna metoda\n- Badanie bez odstępu nie mierzy stabilności\n\n3. Zastosowanie:\n- Ocena stabilności czasowej\n- Pomiar rzetelności długoterminowej\n- Analiza zmian w czasie"
    },
    {
      id: 16,
      text: "Macierz wielu cech - wielu metod wykorzystujemy:",
      options: [
        "na etapie planowania i generowania pozycji testu",
        "na etapie planowania i przeprowadzania badań normalizacyjnych",
        "na etapie planowania i przeprowadzania badań walidacyjnych",
        "aby wybrać odpowiednią strategię konstrukcji testu"
      ],
      correctAnswer: 2,
      explanation: "MTMM (Macierz wielu cech - wielu metod) jest narzędziem walidacyjnym, ponieważ:\n\n1. Cel MTMM:\n- Ocena trafności zbieżnej i różnicowej\n- Analiza różnych metod pomiaru\n- Badanie wielu konstruktów jednocześnie\n\n2. Dlaczego inne zastosowania są niewłaściwe:\n- Planowanie i generowanie pozycji wymaga innych metod\n- Normalizacja dotyczy tworzenia norm\n- Strategia konstrukcji poprzedza walidację\n\n3. Korzyści:\n- Kompleksowa ocena trafności\n- Identyfikacja efektów metody\n- Weryfikacja konstruktów"
    },
    {
      id: 17,
      text: "Aspekt zbieżny i różnicowy dotyczy analizy trafności:",
      options: [
        "treściowej",
        "teoretycznej",
        "kryterialnej",
        "czynnikowej"
      ],
      correctAnswer: 1,
      explanation: "Aspekty zbieżny i różnicowy należą do trafności teoretycznej, ponieważ:\n\n1. Charakterystyka trafności teoretycznej:\n- Bada relacje z innymi konstruktami\n- Weryfikuje sieć nomologiczną\n- Sprawdza hipotezy teoretyczne\n\n2. Dlaczego inne rodzaje trafności nie pasują:\n- Trafność treściowa dotyczy reprezentatywności treści\n- Trafność kryterialna odnosi się do związków z kryteriami zewnętrznymi\n- Trafność czynnikowa to podtyp trafności teoretycznej\n\n3. Znaczenie praktyczne:\n- Potwierdza teoretyczne podstawy testu\n- Pokazuje miejsce konstruktu w sieci pojęć\n- Wspiera interpretację wyników"
    },
    {
      id: 18,
      text: "Podczas konfirmacyjnej analizy czynnikowej dokonujemy:",
      options: [
        "oceny stopnia zrozumiałości pozycji",
        "wyboru pomiędzy modelem ukośnym a ortogonalnym",
        "oceny sędziów kompetentnych",
        "obliczenia błędu aproksymacji (RMSEA)"
      ],
      correctAnswer: 3,
      explanation: "RMSEA jest kluczowym wskaźnikiem w CFA, ponieważ:\n\n1. Charakterystyka RMSEA:\n- Uwzględnia złożoność modelu\n- Jest niezależny od wielkości próby\n- Ma ustalone kryteria oceny\n\n2. Dlaczego inne opcje są niewłaściwe:\n- Zrozumiałość pozycji to kwestia pilotażu\n- Wybór modelu poprzedza analizę\n- Ocena sędziów dotyczy trafności treściowej\n\n3. Interpretacja wskaźnika:\n- <0.05: bardzo dobre dopasowanie\n- 0.05-0.08: dobre dopasowanie\n- >0.10: słabe dopasowanie"
    },
    {
      id: 19,
      text: "Metodę adaptacji testu psychologicznego, która polega na maksymalnie wiernym tłumaczeniu oryginalnych pozycji, nazywamy:",
      options: [
        "transkrypcją",
        "trawestacją",
        "rekonstrukcją",
        "translacją"
      ],
      correctAnswer: 0,
      explanation: "Transkrypcja w adaptacji testu jest najbardziej zachowawczym podejściem, ponieważ:\n\n1. Charakterystyka transkrypcji:\n- Maksymalna wierność oryginałowi\n- Minimalne zmiany językowe\n- Zachowanie struktury i treści\n\n2. Dlaczego inne metody są mniej zachowawcze:\n- Trawestacja: dopuszcza większe modyfikacje\n- Rekonstrukcja: tworzy nowy test\n- Translacja: uwzględnia więcej zmian kulturowych\n\n3. Zastosowanie:\n- Testy uniwersalne kulturowo\n- Proste konstrukcje językowe\n- Jasno zdefiniowane pojęcia"
    },
    {
      id: 20,
      text: "Jeżeli współczynnik trafności w badaniu wyniósł 0,47, trafność pomiaru testem jest:",
      options: [
        "niska i niewystarczająca, by zastosować test w badaniach naukowych",
        "minimalna i można zastosować test w badaniach naukowych",
        "wystarczająca, by zastosować test w procesach diagnozy",
        "żadna odpowiedź nie jest poprawna"
      ],
      correctAnswer: 3,
      explanation: "Zostawiam B ale AI mówi to: Wartość współczynnika trafności 0,47 wymaga kontekstu, ponieważ:\n\n1. Czynniki wpływające na interpretację:\n- Typ trafności (kryterialna, zbieżna, różnicowa)\n- Cel wykorzystania testu\n- Specyfika badanego konstruktu\n\n2. Dlaczego pojedyncza wartość jest niewystarczająca:\n- Brak standardów uniwersalnych\n- Zależność od dziedziny\n- Potrzeba wzorca korelacji\n\n3. Właściwa ocena wymaga:\n- Analizy wielu wskaźników\n- Uwzględnienia kontekstu badania\n- Porównania z podobnymi testami"
    }
  ]
}