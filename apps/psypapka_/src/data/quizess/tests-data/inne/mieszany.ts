export const quiz = {
  id: 1,
  title: "Egzamin z Zaawansowanej Psychometrii",
  questions: [
    {
      id: 1,
      text: "Trafność treściową ocenia się m. im. za pomocą:",
      options: [
        "metodą sędziów kompetentnych",
        "macierzy wielu cech-wielu metod",
        "różnic międzygrupowych",
        "wskaźnik mglistości Gunninga"
      ],
      correctAnswer: 0,
      explanation: "Metoda sędziów kompetentnych jest właściwą metodą oceny trafności treściowej. Przyjrzyjmy się każdej z opcji:\n\n- Metoda sędziów kompetentnych (POPRAWNA): Jest to podstawowa metoda oceny trafności treściowej, w której eksperci w danej dziedzinie oceniają, czy pozycje testowe dobrze reprezentują badany konstrukt. Sędziowie kompetentni weryfikują, czy treść testu odpowiada teorii i czy obejmuje wszystkie istotne aspekty mierzonego zjawiska.\n\n- Macierz wielu cech-wielu metod: Jest to metoda badania trafności teoretycznej, a konkretnie zbieżnej i różnicowej, nie trafności treściowej. Służy do sprawdzenia korelacji między różnymi cechami mierzonymi różnymi metodami.\n\n- Różnice międzygrupowe: To metoda badania trafności teoretycznej, sprawdzająca czy test różnicuje grupy, które teoretycznie powinny się różnić pod względem mierzonego konstruktu.\n\n- Wskaźnik mglistości Gunninga: Jest to miara trudności tekstu, nie trafności. Służy do oceny zrozumiałości językowej pozycji testowych.\n\nKluczowe pojęcia:\n- Trafność treściowa: Stopień, w jakim treść testu reprezentuje całokształt zachowań, których próbkę pobiera test\n- Sędziowie kompetentni: Eksperci w danej dziedzinie, którzy potrafią ocenić, czy pozycje testowe dobrze reprezentują badany konstrukt"
    },
    {
      id: 2,
      text: "Od czego zależy wartość alfy Cronbacha?",
      options: [
        "tylko od czynników losowych",
        "od czynników losowych i zmienności wyniku w czasie",
        "od czynników losowych i podobieństwa do siebie pozycji testowych",
        "od czynników losowych, zmienności wyniku w czasie i podobieństwa do siebie pozycji testowych"
      ],
      correctAnswer: 2,
      explanation: "Wartość alfy Cronbacha zależy od czynników losowych i podobieństwa między pozycjami testowymi. Rozważmy każdą opcję:\n\n- Tylko czynniki losowe (NIEPOPRAWNA): Same czynniki losowe nie wyjaśniają wartości alfy Cronbacha, która jest miarą spójności wewnętrznej.\n\n- Czynniki losowe i zmienność w czasie (NIEPOPRAWNA): Zmienność w czasie wpływa na rzetelność test-retest, ale nie na alfę Cronbacha, która mierzy spójność wewnętrzną.\n\n- Czynniki losowe i podobieństwo pozycji (POPRAWNA): Alfa Cronbacha zależy od:\n  • Homogeniczności pozycji testowych (korelacji między pozycjami)\n  • Błędu losowego pomiaru\n  • Liczby pozycji w teście\n\n- Wszystkie trzy czynniki (NIEPOPRAWNA): Zmienność w czasie nie wpływa na alfę Cronbacha.\n\nKluczowe pojęcia:\n- Alfa Cronbacha: Wskaźnik rzetelności mierzący spójność wewnętrzną testu\n- Spójność wewnętrzna: Stopień, w jakim różne pozycje mierzące ten sam konstrukt dają podobne wyniki\n- Błąd pomiaru: Przypadkowe wahania wyników testu"
    },
    {
      id: 3,
      text: "Jeśli wartość współczynnika omega Ma Donalda w teście wyniosła 0,51, oznacza to, że:",
      options: [
        "jest on rzetelny",
        "jest on trafny",
        "jest on nisko rzetelny",
        "jest on nisko trafny"
      ],
      correctAnswer: 2,
      explanation: "Współczynnik omega McDonalda o wartości 0,51 wskazuje na niską rzetelność testu. Przeanalizujmy każdą opcję:\n\n- Jest rzetelny (NIEPOPRAWNA): Wartości poniżej 0,70 świadczą o niskiej rzetelności.\n\n- Jest trafny (NIEPOPRAWNA): Omega jest miarą rzetelności, nie trafności.\n\n- Jest nisko rzetelny (POPRAWNA): Ponieważ:\n  • 0,51² = 0,26, co oznacza, że tylko 26% wariancji wyników odzwierciedla wariancję wyniku prawdziwego\n  • Minimalna akceptowalna wartość rzetelności to zwykle 0,70\n  • Przy wartościach poniżej 0,70 wariancja błędu jest większa niż wariancja wyniku prawdziwego\n\n- Jest nisko trafny (NIEPOPRAWNA): Omega mierzy rzetelność, nie trafność. Chociaż niska rzetelność ogranicza trafność, są to odrębne pojęcia.\n\nKluczowe pojęcia:\n- Omega McDonalda: Nowoczesny wskaźnik rzetelności, często dokładniejszy niż alfa Cronbacha\n- Wariancja wyniku prawdziwego: Część zmienności wyników testu odzwierciedlająca rzeczywiste różnice w mierzonym konstrukcie"
    },
    {
      id: 4,
      text: "Jeśli ładunek czynnikowy w konfirmacyjnej analizie czynnikowej wyniósł -0,659, oznacza to, że:",
      options: [
        "pytanie w kluczu powinno być odwrócone",
        "pytanie nie pasuje do danego wymiaru",
        "trzeba takie pytanie przeformułować przed kolejną turą badań",
        "pytanie ma silny pozytywny związek z danym wymiar"
      ],
      correctAnswer: 0,
      explanation: "Ładunek czynnikowy -0,659 wskazuje na konieczność odwrócenia pytania w kluczu. Przeanalizujmy dlaczego:\n\n- Pytanie powinno być odwrócone (POPRAWNA): Ujemny ładunek czynnikowy o wysokiej wartości bezwzględnej (>0,5) oznacza, że pozycja mierzy konstrukt w przeciwnym kierunku niż pozostałe pozycje. Należy odwrócić punktację tej pozycji w kluczu.\n\n- Nie pasuje do wymiaru (NIEPOPRAWNA): Wartość bezwzględna ładunku (0,659) jest wysoka, co świadczy o silnym związku z wymiarem. Problem leży w kierunku tego związku, nie w jego sile.\n\n- Trzeba przeformułować (NIEPOPRAWNA): Wysoka wartość bezwzględna ładunku wskazuje, że pozycja dobrze mierzy konstrukt, tylko w przeciwnym kierunku. Przeformułowanie nie jest konieczne.\n\n- Silny pozytywny związek (NIEPOPRAWNA): Ładunek jest ujemny (-0,659), więc związek jest silny, ale negatywny.\n\nKluczowe pojęcia:\n- Ładunek czynnikowy: Współczynnik korelacji między pozycją testową a czynnikiem/wymiarem\n- Odwracanie pozycji: Zmiana sposobu punktowania pozycji tak, by wyższe wyniki oznaczały wyższe natężenie mierzonej cechy"
    },
    {
      id: 5,
      text: "Przy badaniach walidacyjnych testu (badaniach trafności i rzetelności), grupy osób badanych:",
      options: [
        "powinny być bardzo zróżnicowane, bo to pozwala później na lepsze uogólnianie wyników",
        "powinny być bardzo zróżnicowane, bo to pozwala na szersze zastosowanie testu w przyszłości",
        "powinny być bardzo homogeniczne",
        "powinny być bardzo homogeniczne, bo to podnosi trafność i rzetelność metody"
      ],
      correctAnswer: 0,
      explanation: "Zróżnicowanie grup w badaniach walidacyjnych jest kluczowe dla możliwości uogólniania wyników. Przeanalizujmy każdą opcję:\n\n- Zróżnicowanie dla uogólniania (POPRAWNA): Heterogeniczność próby pozwala na:\n  • Sprawdzenie jak test działa w różnych grupach\n  • Lepszą reprezentatywność populacji docelowej\n  • Większą wariancję wyników, co jest korzystne dla analiz psychometrycznych\n\n- Zróżnicowanie dla zastosowania (NIEPOPRAWNA): Choć to prawda, nie jest to główny powód - celem jest przede wszystkim możliwość uogólniania wyników.\n\n- Homogeniczność (NIEPOPRAWNA): Jednorodność grupy ogranicza możliwość generalizacji i może sztucznie zawyżać niektóre wskaźniki psychometryczne.\n\n- Homogeniczność dla trafności (NIEPOPRAWNA): Homogeniczność może paradoksalnie zaniżać niektóre wskaźniki trafności i rzetelności przez ograniczenie wariancji.\n\nKluczowe pojęcia:\n- Heterogeniczność próby: Zróżnicowanie osób badanych pod względem istotnych charakterystyk\n- Generalizacja: Możliwość odnoszenia wyników do szerszej populacji\n- Reprezentatywność: Stopień, w jakim próba odzwierciedla cechy populacji docelowej"
    },
    {
      id: 6,
      text: "Aby poprawnie wykonać CFA:",
      options: [
        "każda osoba badana musi wypełnić kilka kwestionariuszy",
        "część osób badanych wypełnia jeden kwestionariusz, a pozostała część - inny",
        "kwestionariusz, który służy do weryfikacji trafności musi mierzyć tę samą cechę, co kwestionariusz który weryfikujemy",
        "musimy przebadać co najmniej 5-10 osób na każde pytanie w kwestionariuszu"
      ],
      correctAnswer: 3,
      explanation: "Do poprawnego wykonania konfirmacyjnej analizy czynnikowej (CFA) kluczowa jest odpowiednia wielkość próby. Przeanalizujmy opcje:\n\n- Kilka kwestionariuszy (NIEPOPRAWNA): CFA można wykonać na pojedynczym kwestionariuszu. Wiele kwestionariuszy potrzebne jest do badania trafności zbieżnej i różnicowej, nie do CFA.\n\n- Różne kwestionariusze dla różnych osób (NIEPOPRAWNA): W CFA wszystkie osoby muszą wypełnić ten sam kwestionariusz, którego strukturę weryfikujemy.\n\n- Ten sam konstrukt (NIEPOPRAWNA): To warunek badania trafności zbieżnej, nie CFA.\n\n- 5-10 osób na pytanie (POPRAWNA): Jest to minimalna rekomendowana wielkość próby, ponieważ:\n  • Zapewnia stabilność rozwiązania czynnikowego\n  • Pozwala na wiarygodne oszacowanie parametrów modelu\n  • Daje wystarczającą moc statystyczną\n\nKluczowe pojęcia:\n- CFA: Konfirmacyjna analiza czynnikowa - metoda weryfikacji założonej struktury czynnikowej\n- Wielkość próby: Liczba osób badanych potrzebna do uzyskania wiarygodnych wyników\n- Parametry modelu: Elementy modelu CFA wymagające oszacowania (np. ładunki czynnikowe)"
    },
    {
      id: 7,
      text: "wskaźnik mglistości Gunninga mierzy",
      options: [
        "trudność testu",
        "trafność testu",
        "rzetelność testu",
        "wrażliwość testu"
      ],
      correctAnswer: 0,
      explanation: "Wskaźnik mglistości Gunninga jest miarą trudności językowej tekstu. Przyjrzyjmy się każdej opcji:\n\n- Trudność testu (POPRAWNA): Wskaźnik ten mierzy:\n  • Złożoność językową tekstu\n  • Wymagany poziom wykształcenia do zrozumienia tekstu\n  • Przystępność językową pozycji testowych\n\n- Trafność testu (NIEPOPRAWNA): Wskaźnik nie mówi nic o tym, czy test mierzy to, co powinien mierzyć.\n\n- Rzetelność testu (NIEPOPRAWNA): Wskaźnik nie informuje o dokładności czy powtarzalności pomiaru.\n\n- Wrażliwość testu (NIEPOPRAWNA): Nie mierzy zdolności testu do wykrywania różnic indywidualnych.\n\nKluczowe pojęcia:\n- Wskaźnik mglistości: Miara trudności tekstu oparta na długości zdań i słów\n- Złożoność językowa: Stopień skomplikowania języka użytego w teście\n- Przystępność językowa: Łatwość zrozumienia tekstu przez osoby badane"
    }
  ]
};