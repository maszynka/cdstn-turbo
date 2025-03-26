export const quiz = {
  id: 1,
  title: "Test z zaawansowanej psychometrii",
  questions: [
    {
      id: 1,
      text: "Pewien student (bardzo ambitny) postanowił dla potrzeb swojej pracy magisterskiej stworzyć nowy test inteligencji w oparciu o już istniejącą, kanadyjską wersję (oczywiście po uzyskaniu zgody autorów). Zaczął od testu wiadomości. Przetłumaczył pytania wersji oryginalnej na język polski (z założeniem dokonania \"back translation\"). \n\n1. Who is Ann Murray? [Kim jest Anna Murray?]\n2. How far is it from Montreal to Vancouver? [Jak daleko jest z Montrealu do Vancouver?]\n3. What is the population of Canada? [Jaka jest liczba ludności Kanady?]\n\nBiorąc pod uwagę podjęte działania oraz charakter testu, jaki sposób adaptacji testu przyjął student, a jaki powinien przyjąć?",
      options: [
        "przeprowadził translację, a powinien transkrypcję",
        "przeprowadził transkrypcję, a powinien parafrazę",
        "przeprowadził trawestację, a powinien parafrazę",
        "przeprowadził translację, a powinien rekonstrukcję"
      ],
      correctAnswer: 3,
      explanation: "W przypadku testu wiadomości zawierającego pytania specyficzne kulturowo dla Kanady, student przeprowadził prostą translację (tłumaczenie), podczas gdy powinien zastosować rekonstrukcję. Oto dlaczego:\n\n1. Translacja (co zrobił student):\n- Polega na prostym tłumaczeniu pytań\n- Zachowuje oryginalną treść\n- Nie uwzględnia różnic kulturowych\n- Jest nieodpowiednia dla pytań specyficznych kulturowo\n\n2. Rekonstrukcja (co powinien zrobić):\n- Tworzy nowy test w oparciu o oryginalny model teoretyczny\n- Wykorzystuje pytania odpowiednie dla kultury docelowej\n- Zachowuje cel i funkcję testu, zmieniając treść\n- Jest odpowiednia gdy treść jest silnie związana z kulturą\n\nPozostałe opcje są nieprawidłowe:\n- Transkrypcja: zbyt dosłowne tłumaczenie\n- Trawestacja: zbyt małe zmiany dla tego typu testu\n- Parafraza: niewystarczająca dla tak specyficznych kulturowo treści"
    },
    {
      id: 2,
      text: "Którą z poniższych teorii można uznać za alternatywę w stosunku do klasycznej teorii testów?",
      options: [
        "teorię uniwersalizacji",
        "teorię błędów systematycznych (SET)",
        "walidację krzyżową",
        "model wyniku prawdziwego"
      ],
      correctAnswer: 1,
      explanation: "Teoria błędów systematycznych (SET - Systematic Error Theory) jest alternatywą dla klasycznej teorii testów (CTT - Classical Test Theory), ponieważ:\n\n1. Teoria błędów systematycznych:\n- Zakłada, że błędy pomiaru mogą być systematyczne\n- Uwzględnia wpływ czynników kontekstowych\n- Oferuje inne podejście do analizy rzetelności\n\n2. Dlaczego pozostałe odpowiedzi są nieprawidłowe:\n- Teoria uniwersalizacji: nie jest teorią pomiaru\n- Walidacja krzyżowa: to metoda weryfikacji wyników, nie teoria alternatywna\n- Model wyniku prawdziwego: to część klasycznej teorii testów, nie alternatywa\n\nSET oferuje inne spojrzenie na naturę błędów w pomiarze psychologicznym, kwestionując założenie CTT o losowości błędów."
    },
    {
      id: 3,
      text: "Dla pewnego testu składającego się z 5 pozycji policzono moc dyskryminacyjną pozycji i uzyskano następujące wyniki (w kolejności pozycji): 0,674, 0,695, 0,497, 0,609, -0,668. Rzetelność (zgodność wewnętrzna) wyniosła 0,5. Zakładając, że w analizowanym narzędziu potwierdzono: a) trafność treściową z pomocą sędziów kompetentnych b) jednoczynnikową strukturę. Uzyskane wyniki wskazują, że:",
      options: [
        "narzędzie ma niską rzetelność, którą można poprawić odrzucając pozycję nr 5",
        "narzędzie ma niską rzetelność, którą można skorygować odwracając wyniki pozycji nr 5",
        "popełniono błąd, bo moc dyskryminacyjna nie może być ujemna",
        "narzędzie ma niską rzetelność, której jednak nie można w żaden sposób poprawić, bo moc dyskryminacyjna wszystkich pozycji jest zbyt niska"
      ],
      correctAnswer: 1,
      explanation: "Analiza wyników wskazuje na potrzebę odwrócenia punktacji pozycji nr 5. Wyjaśnienie szczegółowe:\n\n1. Interpretacja mocy dyskryminacyjnej:\n- Wartości dodatnie (0,497-0,695): wskazują na spójność z konstruktem\n- Wartość ujemna (-0,668): wskazuje na odwrotne kodowanie\n- Wysokość wartości bezwzględnej (0,668): pokazuje silny związek z konstruktem\n\n2. Dlaczego należy odwrócić, a nie usunąć pozycję:\n- Trafność treściowa została potwierdzona\n- Jednoczynnikowa struktura potwierdzona\n- Wartość bezwzględna mocy dyskryminacyjnej jest wysoka\n- Odwrócenie punktacji poprawi rzetelność\n\n3. Dlaczego inne odpowiedzi są błędne:\n- Usunięcie pozycji obniżyłoby rzetelność testu\n- Ujemna moc dyskryminacyjna jest możliwa i interpretowalna\n- Wartości mocy dyskryminacyjnej są odpowiednie (>0,4)"
    },
    {
      id: 4,
      text: "Dołożenie do 10-itemowego kwestionariusza nowych 20 pozycji podobnie wysoko skorelowanych z wynikiem ogólnym spowoduje:",
      options: [
        "zdecydowany wzrost współczynnika zgodności wewnętrznej",
        "zdecydowany spadek współczynnika zgodności wewnętrznej",
        "prawie nic - nie wpłynie znacząco na rzetelność",
        "wzrost albo spadek rzetelności - trudno przewidzieć"
      ],
      correctAnswer: 0,
      explanation: "Dodanie pozycji o podobnej jakości psychometrycznej zwiększy rzetelność testu. Wyjaśnienie szczegółowe:\n\n1. Zgodnie ze wzorem Spearmana-Browna:\n- Wydłużenie testu zwiększa rzetelność\n- Przy zachowaniu podobnej jakości pozycji\n- Wzrost jest tym większy, im więcej dodanych pozycji\n\n2. Dlaczego nastąpi zdecydowany wzrost:\n- Liczba pozycji zwiększa się trzykrotnie (z 10 do 30)\n- Nowe pozycje mają podobne korelacje z wynikiem\n- Zachowana jest jednorodność konstruktu\n\n3. Dlaczego inne odpowiedzi są błędne:\n- Spadek rzetelności nastąpiłby przy dodaniu słabych pozycji\n- Brak zmiany jest niemożliwy przy tak dużym wydłużeniu\n- Nieprzewidywalność nie dotyczy sytuacji z kontrolowaną jakością pozycji"
    },
    {
      id: 5,
      text: "Stworzono pewien kwestionariusz dla potrzeb selekcji pacjentów z zaburzeniami psychicznymi. Przy określonym zastosowaniu narzędzia najbardziej prawdopodobnym sposobem oceny jego trafności jest:",
      options: [
        "analiza czynnikowa",
        "trafność diagnostyczna",
        "analiza różnic międzygrupowych",
        "analiza zmian nieprzypadkowych"
      ],
      correctAnswer: 1,
      explanation: "Trafność diagnostyczna jest najważniejsza dla testu selekcyjnego, ponieważ:\n\n1. Specyfika testów diagnostycznych:\n- Służą do identyfikacji zaburzeń\n- Wymagają precyzyjnej klasyfikacji przypadków\n- Muszą minimalizować błędy diagnostyczne\n\n2. Dlaczego inne rodzaje trafności są mniej odpowiednie:\n- Analiza czynnikowa bada strukturę, nie skuteczność diagnozy\n- Analiza różnic międzygrupowych to tylko jeden z aspektów\n- Analiza zmian nieprzypadkowych nie dotyczy trafności diagnostycznej\n\n3. Aspekty trafności diagnostycznej:\n- Czułość i swoistość testu\n- Wartość predykcyjna wyników\n- Skuteczność klasyfikacji przypadków"
    },
    {
      id: 6,
      text: "W przypadku testu szybkości podział na wersje równoległe przy obliczaniu rzetelności metodą połówkową najlepiej jest przeprowadzić:",
      options: [
        "dzieląc według środkowej pozycji",
        "tej metody nie stosuje się dla tego typu testów",
        "dzieląc według pozycji parzystych i nieparzystych",
        "losując pozycje do połówek"
      ],
      correctAnswer: 2,
      explanation: "W testach szybkości podział według pozycji parzystych i nieparzystych jest najlepszą metodą, ponieważ zapewnia najbardziej równomierne rozłożenie trudności zadań w obu połówkach testu. Jest to szczególnie ważne, gdyż w testach szybkości kolejność zadań często odzwierciedla wzrastający poziom trudności.\n\nPodział na pozycje parzyste i nieparzyste jest optymalny dla testów szybkości, ponieważ:\n\n1. Uzasadnienie metody:\n- Zapewnia równomierne rozłożenie trudności w obu połówkach\n- Uwzględnia narastającą trudność zadań\n- Minimalizuje wpływ zmęczenia\n\n2. Dlaczego inne metody są nieodpowiednie:\n- Podział według środkowej pozycji: zaburza równowagę trudności\n- Losowy podział: może przypadkowo zgrupować trudniejsze zadania\n- Rezygnacja z metody: niepotrzebnie ogranicza możliwości badania rzetelności\n\n3. Praktyczne korzyści:\n- Dokładniejsza ocena rzetelności\n- Lepsza reprezentacja całego testu\n- Uwzględnienie specyfiki testów szybkości"
    },
    {
      id: 7,
      text: "Analiza wykresu osypiska stosowana w celu ustalania liczby czynników w analizie czynnikowej to inaczej kryterium/metoda:",
      options: [
        "Fishera",
        "Kaisera",
        "Cattella",
        "żadna z podanych odpowiedzi nie jest poprawna"
      ],
      correctAnswer: 2,
      explanation: "Kryterium osypiska zostało zaproponowane przez Raymonda Cattella i jest jedną z podstawowych metod określania liczby czynników w analizie czynnikowej. Metoda ta polega na analizie wykresu wartości własnych i identyfikacji punktu załamania (osypiska), po którym kolejne wartości własne tworzą łagodny spadek.\n\nKryterium osypiska Cattella jest metodą określania liczby czynników, ponieważ:\n\n1. Charakterystyka metody:\n- Analiza wykresu wartości własnych\n- Identyfikacja punktu załamania\n- Wizualna ocena spadku wartości\n\n2. Dlaczego inne odpowiedzi są błędne:\n- Kryterium Fishera: nie dotyczy analizy czynnikowej\n- Kryterium Kaisera: oparte na wartości własnej >1\n- Nazwa pochodzi od autora metody (Cattell)\n\n3. Zastosowanie praktyczne:\n- Pomaga w wyborze liczby czynników\n- Uzupełnia inne kryteria\n- Uwzględnia względną ważność czynników"
    },
    {
      id: 8,
      text: "Jakie warunki musi spełniać analiza trafności kryterialnej, aby można było uznać ją za wiarygodną?",
      options: [
        "kryterium musi być rzetelne",
        "kryterium musi być trafne",
        "brak kontaminacji kryterium",
        "wszystkie podane odpowiedzi są poprawne"
      ],
      correctAnswer: 3,
      explanation: "Dla wiarygodnej analizy trafności kryterialnej konieczne jest spełnienie wszystkich wymienionych warunków. Kryterium musi być rzetelne (stabilne i spójne), trafne (faktycznie mierzyć to, co ma mierzyć) oraz nie może być skontaminowane (bezpośrednio związane z testem). Brak któregokolwiek z tych warunków podważa wiarygodność analizy.\n\nWiarygodna analiza trafności kryterialnej wymaga spełnienia wszystkich warunków, ponieważ:\n\n1. Znaczenie poszczególnych warunków:\n- Rzetelność kryterium: stabilność i spójność pomiaru\n- Trafność kryterium: adekwatność do mierzonego konstruktu\n- Brak kontaminacji: niezależność kryterium od testu\n\n2. Konsekwencje niespełnienia warunków:\n- Nierzetelne kryterium: błędne oszacowanie związku\n- Nietrafne kryterium: pomiar niewłaściwego konstruktu\n- Kontaminacja: sztuczne zawyżenie trafności\n\n3. Praktyczne implikacje:\n- Konieczność starannego doboru kryterium\n- Weryfikacja jakości kryterium\n- Kontrola niezależności pomiaru"
    },
    {
      id: 9,
      text: "Trafność kryterialna jest wyrażana w postaci:",
      options: [
        "współczynnika korelacji",
        "istotności różnic między grupami skrajnymi według kryterium",
        "współczynnika determinacji",
        "żadna z podanych odpowiedzi nie jest poprawna"
      ],
      correctAnswer: 0,
      explanation: "Trafność kryterialna wyraża się poprzez współczynnik korelacji między wynikiem testu a zewnętrznym kryterium. Jest to bezpośrednia miara związku między testem a kryterium, wskazująca na stopień, w jakim test pozwala przewidywać wyniki w kryterium.\n\nTrafność kryterialna jest wyrażana współczynnikiem korelacji, ponieważ:\n\n1. Uzasadnienie wyboru miary:\n- Pokazuje siłę i kierunek związku z kryterium\n- Standaryzowana skala (-1 do 1) ułatwia interpretację\n- Umożliwia porównywanie różnych testów\n\n2. Dlaczego inne miary są niewłaściwe:\n- Istotność różnic nie pokazuje siły związku\n- Współczynnik determinacji jest wtórny wobec korelacji\n- Brak standardowej skali utrudnia porównania\n\n3. Zastosowania praktyczne:\n- Ocena wartości prognostycznej testu\n- Porównywanie skuteczności narzędzi\n- Szacowanie użyteczności diagnostycznej"
    },
    {
      id: 10,
      text: "Które z podanych pojęć statystycznych są związane z analizą czynnikową?",
      options: [
        "rotacja",
        "wartość własna",
        "wykres osypiska",
        "wszystkie podane odpowiedzi są poprawne"
      ],
      correctAnswer: 3,
      explanation: "Wszystkie wymienione pojęcia są kluczowymi elementami analizy czynnikowej. Rotacja służy do optymalizacji struktury czynnikowej, wartość własna określa znaczenie poszczególnych czynników, a wykres osypiska pomaga w określeniu ich optymalnej liczby. Te trzy elementy są niezbędne w pełnej analizie czynnikowej.\n\nWszystkie wymienione pojęcia są niezbędne w analizie czynnikowej, ponieważ:\n\n1. Rola każdego pojęcia:\n- Rotacja: optymalizuje strukturę i interpretację czynników\n- Wartość własna: określa znaczenie poszczególnych czynników\n- Wykres osypiska: pomaga wybrać liczbę czynników\n\n2. Wzajemne powiązania:\n- Stanowią kolejne etapy analizy\n- Dostarczają komplementarnych informacji\n- Tworzą spójną metodologię\n\n3. Praktyczne znaczenie:\n- Umożliwiają pełną analizę struktury\n- Zapewniają obiektywne kryteria decyzyjne\n- Pomagają w interpretacji wyników"
    },
    {
      id: 11,
      text: "Która z podanych metod rotacji w analizie czynnikowej NIE jest ortogonalna?",
      options: [
        "VARIMAX",
        "QUARTIMAX",
        "OBLIMIN",
        "EQUAMAX"
      ],
      correctAnswer: 2,
      explanation: "OBLIMIN jest metodą rotacji skośnej, podczas gdy pozostałe metody (VARIMAX, QUARTIMAX, EQUAMAX) są metodami rotacji ortogonalnej. Rotacje ortogonalne zakładają brak korelacji między czynnikami, natomiast rotacja skośna OBLIMIN dopuszcza występowanie takich korelacji.\n\nOBLIMIN jest metodą rotacji skośnej, podczas gdy pozostałe metody są ortogonalne. Szczegółowe wyjaśnienie:\n\n1. Charakterystyka OBLIMIN:\n- Dopuszcza korelacje między czynnikami\n- Lepiej odzwierciedla rzeczywiste relacje\n- Umożliwia bardziej elastyczne modelowanie\n\n2. Dlaczego pozostałe metody są odmienne:\n- VARIMAX: maksymalizuje wariancję, wymusza ortogonalność\n- QUARTIMAX: upraszcza strukturę zmiennych, zachowuje ortogonalność\n- EQUAMAX: łączy cechy VARIMAX i QUARTIMAX\n\n3. Praktyczne zastosowanie:\n- Gdy spodziewamy się korelacji między czynnikami\n- W złożonych konstruktach psychologicznych\n- Przy modelowaniu hierarchicznych struktur"
    },
    {
      id: 12,
      text: "W przypadku których z podanych metod możemy mówić o problemie zgadywania?",
      options: [
        "kwestionariuszy samoopisowych",
        "testów werbalnych z pytaniami otwartymi",
        "żadna z podanych odpowiedzi nie jest poprawna",
        "testów werbalnych z pytaniami zamkniętymi"
      ],
      correctAnswer: 3,
      explanation: "Problem zgadywania występuje głównie w testach z pytaniami zamkniętymi (wielokrotnego wyboru), gdzie osoba badana może wybrać poprawną odpowiedź przez przypadek, nawet nie znając prawidłowego rozwiązania. W pytaniach otwartych czy kwestionariuszach samoopisowych ten problem nie występuje.\n\nProblem zgadywania w testach z pytaniami zamkniętymi wynika z:\n\n1. Specyfiki testów zamkniętych:\n- Ograniczona liczba możliwych odpowiedzi\n- Możliwość przypadkowego wyboru\n- Prawdopodobieństwo trafienia bez wiedzy\n\n2. Dlaczego nie występuje w innych formach:\n- Pytania otwarte wymagają aktywnej odpowiedzi\n- Kwestionariusze samoopisowe nie mają 'poprawnych' odpowiedzi\n- Brak gotowych opcji do wyboru\n\n3. Implikacje dla praktyki:\n- Konieczność korekty na zgadywanie\n- Projektowanie dobrych dystraktorów\n- Odpowiednia liczba opcji odpowiedzi"
    },
    {
      id: 13,
      text: "Wskaźnik trudności pozycji testowej nie ma zastosowania w przypadku:",
      options: [
        "testów werbalnych z pytaniami otwartymi",
        "testów werbalnych z pytaniami zamkniętymi",
        "testów niewerbalnych",
        "kwestionariuszy samoopisowych"
      ],
      correctAnswer: 3,
      explanation: "W kwestionariuszach samoopisowych nie ma poprawnych i niepoprawnych odpowiedzi, dlatego nie można określić wskaźnika trudności pozycji. Ten wskaźnik ma zastosowanie tylko w testach, gdzie można jednoznacznie określić poprawność odpowiedzi.\n\nWskaźnik trudności nie ma zastosowania w kwestionariuszach samoopisowych, ponieważ:\n\n1. Natura kwestionariuszy samoopisowych:\n- Mierzą subiektywne opinie i postawy\n- Brak obiektywnie poprawnych odpowiedzi\n- Każda odpowiedź jest potencjalnie wartościowa\n\n2. Ograniczenia konceptualne:\n- Trudność nie jest właściwą charakterystyką\n- Nie można określić poprawności odpowiedzi\n- Brak zewnętrznego kryterium oceny\n\n3. Właściwe zastosowania wskaźnika:\n- Testy wiedzy i osiągnięć\n- Testy zdolności\n- Zadania z jednoznacznymi odpowiedziami"
    },
    {
      id: 14,
      text: "Wskaźnik trudności pozycji to:",
      options: [
        "średnia subiektywna ocena trudności pozycji podana przez osoby badane w trakcie badania",
        "średnia ocena trudności pozycji dokonana przez sędziów kompetentnych",
        "stosunek osób, które poprawnie odpowiedziały na daną pozycję do ogólnej liczby osób badanych",
        "stosunek osób, które nie zaznaczyły odpowiedzi na daną pozycję do ogólnej liczby badanych"
      ],
      correctAnswer: 2,
      explanation: "Wskaźnik trudności pozycji jest klasyczną miarą psychometryczną, definiowaną jako proporcja osób, które udzieliły poprawnej odpowiedzi, do wszystkich osób badanych. Im wyższy wskaźnik, tym pozycja jest łatwiejsza.\n\nWskaźnik trudności pozycji jest stosunkiem poprawnych odpowiedzi do wszystkich badanych, ponieważ:\n\n1. Istota wskaźnika trudności:\n- Obiektywna miara dostępności zadania\n- Łatwa do obliczenia i interpretacji\n- Określa odsetek osób rozwiązujących zadanie\n\n2. Dlaczego inne definicje są błędne:\n- Subiektywne oceny nie są miarodajne\n- Oceny sędziów mogą być stronnicze\n- Brak odpowiedzi to inny parametr psychometryczny\n\n3. Zastosowanie w praktyce:\n- Selekcja pozycji testowych\n- Określanie mocy dyskryminacyjnej\n- Analiza rozkładu trudności testu"
    },
    {
      id: 15,
      text: "Walidacja krzyżowa to metoda, która w swojej podstawowej wersji zakłada:",
      options: [
        "losowy podział badanej grupy na dwie, tak aby selekcja pozycji była przeprowadzona na innej próbie niż ta, na podstawie której ocenia się trafność",
        "krzyżowanie testów na podstawie mocy dyskryminacyjnych pozycji",
        "porównywanie ze sobą (krzyżowanie) różnych metod oceny trafności teoretycznej",
        "T-równoważny ekwiwalent trafności dywergencyjnej"
      ],
      correctAnswer: 0,
      explanation: "Walidacja krzyżowa opiera się na podziale próby na dwie części - jedną służącą do selekcji pozycji, drugą do weryfikacji trafności. Ta metoda pozwala uniknąć sztucznego zawyżania wskaźników trafności, które mogłoby wystąpić przy wykorzystaniu tej samej próby do obu celów.\n\nWalidacja krzyżowa wymaga podziału próby na dwie części, ponieważ:\n\n1. Cele metody:\n- Unikanie przeszacowania trafności\n- Weryfikacja stabilności rozwiązania\n- Kontrola generalizowalności\n\n2. Procedura:\n- Losowy podział próby\n- Niezależna analiza w podgrupach\n- Porównanie wyników\n\n3. Zalety podejścia:\n- Większa wiarygodność wyników\n- Redukcja błędów przypadkowych\n- Lepsza generalizacja wyników"
    },
    {
      id: 16,
      text: "W jakiej metodzie adaptacji kulturowej powinniśmy przede wszystkim stosować \"back translation\"?",
      options: [
        "transkrypcji",
        "trawestacji",
        "parafrazie",
        "rekonstrukcji"
      ],
      correctAnswer: 0,
      explanation: "Back translation (tłumaczenie zwrotne) jest szczególnie istotne w transkrypcji, gdzie dążymy do maksymalnie wiernego tłumaczenia oryginalnych pozycji. Ten proces pozwala zweryfikować, czy tłumaczenie zachowuje pierwotne znaczenie treści poprzez porównanie wersji przetłumaczonej z powrotem na język oryginału z wersją oryginalną.\n\nBack translation jest kluczowy w transkrypcji, ponieważ:\n\n1. Cel procedury:\n- Weryfikacja dokładności tłumaczenia\n- Kontrola ekwiwalencji znaczeniowej\n- Wykrywanie rozbieżności\n\n2. Przebieg procesu:\n- Tłumaczenie na język docelowy\n- Niezależne tłumaczenie zwrotne\n- Porównanie z oryginałem\n\n3. Znaczenie dla adaptacji:\n- Zachowanie pierwotnego znaczenia\n- Minimalizacja błędów kulturowych\n- Zapewnienie porównywalności wersji"
    },
    {
      id: 17,
      text: "Współczynnik korelacji może być miarą:",
      options: [
        "korelacji pozycji testu z wynikiem ogólnym",
        "korelacji między wynikami różnych narzędzi mierzących tę samą cechę",
        "korelacji powtórzonych pomiarów tym samym narzędziem",
        "korelacji różnych skal tego samego narzędzia"
      ],
      correctAnswer: 0,
      explanation: "Współczynnik korelacji pozycji testu z wynikiem ogólnym jest definicją mocy dyskryminacyjnej pozycji testowej. Jest to kluczowy wskaźnik jakości pozycji, pokazujący jak dobrze dana pozycja różnicuje badanych pod względem mierzonej cechy i jak dobrze współgra z całym testem."
    },
    {
      id: 18,
      text: "Które z podanych czterech statystyk są używane do oceny zgodności sędziów kompetentnych (przy założeniu, że sędziów jest więcej niż dwóch): 1. r Pearsona 2. W Kendalla 3. rho Spearmana 4. CVR Lawshe",
      options: [
        "tylko pierwsza",
        "pierwsza i trzecia",
        "tylko druga",
        "druga i czwarta"
      ],
      correctAnswer: 3,
      explanation: "W Kendalla i CVR Lawshe są statystykami specjalnie zaprojektowanymi do oceny zgodności więcej niż dwóch sędziów. Korelacje Pearsona i Spearmana są bardziej odpowiednie dla porównań parami i nie nadają się do jednoczesnej oceny zgodności większej liczby sędziów."
    },
    {
      id: 19,
      text: "Jeśli ładunek czynnikowy w analizie czynnikowej wyniósł -0,865, oznacza to, że:",
      options: [
        "trzeba sprawdzić, czy pytanie w kluczu nie powinno być odwrócone",
        "pytanie nie pasuje do danego wymiaru",
        "trzeba takie pytanie przeformułować przed kolejną turą badań",
        "pytanie ma silny pozytywny związek z danym wymiarem",
      ],
      correctAnswer: 0,
      explanation: "Wysoki ujemny ładunek czynnikowy (-0,865) wskazuje, że pozycja mierzy ten sam konstrukt co pozostałe, ale jest odwrotnie zakodowana. W takiej sytuacji należy sprawdzić i prawdopodobnie odwrócić punktację tej pozycji, aby uzyskać spójny wzorzec ładunków dodatnich."
    },
    {
      id: 20,
      text: "Metoda adaptacji testu psychologicznego, która opiera się na maksymalnie wiernym tłumaczeniu oryginalnych pozycji to:",
      options: [
        "transkrypcja",
        "trawestacja",
        "rekonstrukcja",
        "translacja"
      ],
      correctAnswer: 3,
      explanation: "Translacja to metoda adaptacji polegająca na wiernym tłumaczeniu pozycji testowych, dopuszczająca jedynie niezbędne modyfikacje językowe gdy specyfika kulturowa oryginału mogłaby powodować nierównoważność testu. Jest to podejście zachowujące maksymalną wierność oryginałowi przy jednoczesnym uwzględnieniu podstawowych różnic językowych."
    },
    {
      id: 21,
      text: "Które z poniższych zdań dotyczących analizy czynnikowej jest prawdziwe?",
      options: [
        "Kryterium Kaisera polega na analizie kształtu wykresu osypiska",
        "Rotacja Varimax zakłada, że wymiary mają być ortogonalne",
        "Kryterium Varimax polega na analizie kształtu wykresu osypiska",
        "Rotacja Kaisera zakłada, że wymiary mają być ortogonalne"
      ],
      correctAnswer: 1,
      explanation: "Rotacja Varimax jest metodą rotacji ortogonalnej w analizie czynnikowej. Wyjaśnienie szczegółowe:\n\n1. Dlaczego ta odpowiedź jest prawidłowa:\n- Varimax to metoda rotacji ortogonalnej\n- Ortogonalność oznacza, że czynniki są nieskorelowane (prostopadłe)\n- Jest to fundamentalna właściwość tej metody rotacji\n\n2. Dlaczego pozostałe odpowiedzi są błędne:\n- Kryterium Kaisera dotyczy wartości własnych, nie wykresu osypiska\n- Kryterium Varimax nie istnieje - Varimax to metoda rotacji\n- Nie istnieje 'rotacja Kaisera' - Kaiser zaproponował kryterium wyboru liczby czynników"
    },
    {
      id: 22,
      text: "Wykres osypiska w analizie czynnikowej służy do:",
      options: [
        "interpretacji czynników",
        "określania, ile czynników należy wyodrębnić",
        "rotacji czynników",
        "określania, ile osób badanych ma wyniki powyżej średniej"
      ],
      correctAnswer: 1,
      explanation: "Wykres osypiska (scree plot) jest graficzną metodą określania optymalnej liczby czynników do wyodrębnienia w analizie czynnikowej. Metoda ta polega na znalezieniu punktu załamania na wykresie wartości własnych, po którym kolejne wartości tworzą łagodny spadek przypominający osypisko górskie."
    }
  ]
}