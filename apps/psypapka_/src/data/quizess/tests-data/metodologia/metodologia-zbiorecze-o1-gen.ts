export const quiz = {
  id: 1,
  title: "Metodologia - ChatGPT 01 Gen",
  questions: [
    {
      "id": 97,
      "text": "Jak interpretować, gdy w jednoczynnikowej ANOVA wartość p jest mniejsza niż 0,05?",
      "options": [
        "Wyniki wskazują, że różnice między grupami są czysto przypadkowe",
        "Co najmniej jedna z porównywanych grup różni się istotnie od pozostałych",
        "Efekty pomiaru należy uznać za nieistotne w praktyce",
        "Należy natychmiast przeprowadzić analizę post hoc, nawet gdy nie ma takiej potrzeby"
      ],
      "explanation": "Gdy p < 0,05 w ANOVA, odrzuca się hipotezę zerową o braku różnic między grupami. Oznacza to, że co najmniej jedna grupa różni się statystycznie od pozostałych. Analizy post hoc często są potrzebne, by ustalić, które konkretnie grupy się różnią.",
      "correctAnswer": 1
    },
    {
      "id": 98,
      "text": "Co oznacza liczba stopni swobody (df) dla efektu głównego w jednoczynnikowej ANOVA z 4 poziomami czynnika?",
      "options": [
        "df = 3, bo liczba stopni swobody to liczba poziomów pomniejszona o 1",
        "df = 4, bo liczba stopni swobody równa się liczbie poziomów czynnika",
        "df = 1, bo tylko dwie grupy są zawsze porównywane",
        "df jest równe 0, bo nie ma interakcji w jednoczynnikowej ANOVA"
      ],
      "explanation": "W jednoczynnikowej ANOVA dla efektu głównego df = (liczba poziomów czynnika – 1). Przy 4 poziomach df = 3.",
      "correctAnswer": 0
    },
    {
      "id": 99,
      "text": "Jak interpretować partial eta-squared (η²p) = 0,15 w ANOVA?",
      "options": [
        "Efekt jest zazwyczaj uznawany za mały",
        "Efekt jest zazwyczaj uznawany za średni",
        "Efekt jest zazwyczaj uznawany za duży",
        "Efekt jest nieistotny statystycznie"
      ],
      "explanation": "W interpretacji wielkości efektu partial eta-squared przyjmuje się orientacyjnie: 0,01 – mały, 0,06 – średni, 0,14 – duży. Wartość 0,15 można traktować jako duży efekt.",
      "correctAnswer": 2
    },
    {
      "id": 100,
      "text": "W dwuczynnikowym planie ANOVA z 3 poziomami czynnika A i 2 poziomami czynnika B stwierdzono nieistotny efekt interakcji. Co to oznacza?",
      "options": [
        "Czynniki A i B działają na zmienną zależną w sposób niezależny (addytywny)",
        "Każdy z czynników nie ma istotnego wpływu na zmienną zależną",
        "Zawsze należy odrzucić wszystkie efekty główne w takiej sytuacji",
        "Należy powtórzyć analizę, bo brak interakcji oznacza błąd doboru próby"
      ],
      "explanation": "Nieistotna interakcja wskazuje, że wpływ czynnika A na zmienną zależną nie zależy od poziomów czynnika B (i odwrotnie). Oznacza to niezależne, addytywne oddziaływanie tych czynników.",
      "correctAnswer": 0
    },
    {
      "id": 101,
      "text": "Które z poniższych jest kluczowym założeniem analizy wariancji (ANOVA)?",
      "options": [
        "Równość wariancji w poszczególnych grupach (homoscedastyczność)",
        "Brak zależności między zmiennymi losowymi (sferyczność)",
        "Zawsze normalny rozkład zmiennej niezależnej",
        "Brak jakiejkolwiek korelacji pomiędzy poziomami czynnika"
      ],
      "explanation": "ANOVA w wersji podstawowej zakłada homogeniczność wariancji (równość wariancji we wszystkich grupach). Dodatkowo przyjmuje się normalność rozkładu w grupach dla zmiennej zależnej, lecz najważniejszym technicznym założeniem jest właśnie homoscedastyczność.",
      "correctAnswer": 0
    },
    {
      "id": 102,
      "text": "Co należy zrobić po stwierdzeniu istotnego efektu głównego w jednoczynnikowej ANOVA z kilkoma grupami?",
      "options": [
        "Od razu zakończyć analizę, bo efekt główny jest wystarczający",
        "Przeprowadzić testy post hoc, by ustalić, które grupy różnią się między sobą",
        "Wykonać analizę interakcji między wszystkimi możliwymi czynnikami",
        "Zmienić metodę statystyczną na analizę regresji"
      ],
      "explanation": "Po uzyskaniu istotnego wyniku w jednoczynnikowej ANOVA z więcej niż dwoma grupami należy zastosować testy post hoc (np. Tukey, Bonferroni), by określić, które konkretnie grupy różnią się istotnie.",
      "correctAnswer": 1
    },
    {
      "id": 103,
      "text": "Dlaczego testy post hoc są potrzebne, gdy ANOVA wskazuje na istotne różnice między kilkoma grupami?",
      "options": [
        "Bo ANOVA informuje tylko, że w ogóle występują jakieś różnice, lecz nie określa między którymi grupami",
        "Ponieważ testy post hoc są tańsze w wykonaniu i bardziej ekonomiczne",
        "Bo testy post hoc eliminują wszystkie błędy statystyczne związane z porównywaniem wielu grup",
        "Bo ANOVA sama w sobie ma zawsze moc wystarczającą do analizy specyficznych kontrastów"
      ],
      "explanation": "ANOVA mówi jedynie, że istnieje istotna różnica co najmniej między dwiema grupami, ale nie precyzuje, które grupy się różnią. Aby to ustalić, stosuje się testy post hoc.",
      "correctAnswer": 0
    },
    {
      "id": 104,
      "text": "Która z poniższych metod jest często stosowana jako post hoc w ANOVA?",
      "options": [
        "Test Bonferroni",
        "Test Levene’a",
        "Test Kolmogorowa-Smirnowa",
        "Test Mauchly’ego"
      ],
      "explanation": "Bonferroni jest powszechnie wykorzystywanym testem post hoc kontrolującym poziom błędu I rodzaju przy wielokrotnych porównaniach. Pozostałe testy (Levene’a, Kolmogorowa-Smirnowa, Mauchly’ego) służą do weryfikacji założeń statystycznych.",
      "correctAnswer": 0
    },
    {
      "id": 105,
      "text": "W powtarzanym pomiarze (ANOVA dla grup zależnych) uzyskano p = 0,04 w teście Mauchly’ego. Jak to interpretować?",
      "options": [
        "Założenie sferyczności jest naruszone",
        "Wskazuje to na istotny efekt główny w analizie",
        "Efekt interakcji został istotnie potwierdzony",
        "Nie ma potrzeby żadnej korekty, bo p < 0,05 oznacza spełnienie sferyczności"
      ],
      "explanation": "Test Mauchly’ego dotyczy sferyczności. Jeśli p < 0,05, oznacza to naruszenie sferyczności. Należy wtedy stosować odpowiednie korekty (np. Greenhouse-Geisser) przy obliczaniu wyników ANOVA.",
      "correctAnswer": 0
    },
    {
      "id": 106,
      "text": "Po co stosuje się test Levene’a w kontekście ANOVA?",
      "options": [
        "By sprawdzić, czy wariancje w grupach są równe",
        "By wykryć obecność interakcji między czynnikami",
        "By obliczyć istotność efektu pośredniego w analizie mediacji",
        "By ustalić minimalną wielkość próby"
      ],
      "explanation": "Test Levene’a służy do sprawdzenia homogeniczności wariancji (założenia o równości wariancji) między porównywanymi grupami przed zastosowaniem ANOVA.",
      "correctAnswer": 0
    },
    {
      "id": 107,
      "text": "W dwuczynnikowej ANOVA (2 x 3) stwierdzono istotny efekt główny czynnika A i nieistotny efekt czynnika B. Interakcja jest również nieistotna. Jak to interpretować?",
      "options": [
        "Czynnik A wywiera wpływ na zmienną zależną, czynnik B nie ma istotnego wpływu, a oba czynniki nie wchodzą w interakcję",
        "Czynnik A nie wyjaśnia żadnej zmienności, a efekt B jest istotny tylko po korekcie wielokrotnych porównań",
        "Brak interakcji oznacza konieczność powtórzenia badania",
        "Czynniki A i B tworzą silny efekt łączny, co potwierdza nieistotna interakcja"
      ],
      "explanation": "Istotny efekt główny czynnika A przy nieistotnym wpływie czynnika B i nieistotnej interakcji oznacza, że wyłącznie A w sposób istotny różnicuje zmienną zależną, niezależnie od poziomów B.",
      "correctAnswer": 0
    },
    {
      "id": 108,
      "text": "W jednoczynnikowej ANOVA uzyskano p = 0,07. Jak to można wnioskować, stosując klasyczny próg α = 0,05?",
      "options": [
        "Odrzucamy hipotezę zerową i przyjmujemy, że grupy się różnią",
        "Nie odrzucamy hipotezy zerowej, bo p jest większe niż 0,05",
        "Oznacza to duży efekt praktyczny, mimo braku istotności",
        "Musimy natychmiast zastosować test Mauchly’ego"
      ],
      "explanation": "Przy p > 0,05 (tutaj 0,07), statystycznie nie ma podstaw do odrzucenia H0. Można uznać, że brak jest istotnych różnic między grupami na poziomie α = 0,05.",
      "correctAnswer": 1
    },
    {
      "id": 109,
      "text": "Co jest celem testu Shapiro-Wilka w kontekście ANOVA?",
      "options": [
        "Sprawdzenie normalności rozkładu zmiennej zależnej w grupach",
        "Weryfikacja równości wariancji między grupami",
        "Określenie wielkości efektu moderacyjnego",
        "Wskazanie, która grupa różni się najbardziej w post hoc"
      ],
      "explanation": "Test Shapiro-Wilka weryfikuje hipotezę o normalności rozkładu w próbie, co stanowi jedno z założeń klasycznej ANOVA (obok homoscedastyczności).",
      "correctAnswer": 0
    },
    {
      "id": 110,
      "text": "Co oznacza sferyczność (sphericity) w planie z powtarzanym pomiarem?",
      "options": [
        "Wszystkie poziomy czynnika są w pełni losowe",
        "Rozkład zmiennych niezależnych jest normalny",
        "Korelacje pomiędzy parami warunków są podobne i wariancje różnic między warunkami są równe",
        "Efekty główne i interakcje zawsze będą istotne"
      ],
      "explanation": "Sferyczność zakłada, że wariancja różnic między parami warunków (oraz korelacje między poziomami) jest zbliżona, co stanowi ważne założenie w powtarzanym pomiarze ANOVA.",
      "correctAnswer": 2
    },
    {
      "id": 111,
      "text": "Który test post hoc jest często stosowany do kontrolowania błędu I rodzaju przy wielokrotnych porównaniach w ANOVA, szczególnie gdy grup jest wiele?",
      "options": [
        "Test Scheffé",
        "Test Mauchly’ego",
        "Test sferyczności",
        "Test Shapiro-Wilka"
      ],
      "explanation": "Test Scheffé jest jednym z popularnych testów post hoc w ANOVA, pozwalającym na konserwatywną kontrolę błędu I rodzaju przy porównaniach wielokrotnych.",
      "correctAnswer": 0
    },
    {
      "id": 112,
      "text": "Który współczynnik służy do oceny wielkości efektu w powtarzanym pomiarze ANOVA?",
      "options": [
        "Partial eta-squared (η²p)",
        "Test Levene’a",
        "Wskaźnik sferyczności (W)",
        "Wielkość próby (N)"
      ],
      "explanation": "Podobnie jak w ANOVA międzygrupowej, w powtarzanym pomiarze można obliczać partial eta-squared (η²p) w celu oceny wielkości efektu.",
      "correctAnswer": 0
    },
    {
      "id": 113,
      "text": "Czym różnią się kontrasty planowane (planned contrasts) od testów post hoc w analizie ANOVA?",
      "options": [
        "Kontrasty planowane definiuje się przed analizą, a testy post hoc stosuje się po uzyskaniu istotnego wyniku ANOVA",
        "Testy post hoc są określane jeszcze przed zebraniem danych, a kontrasty planowane zawsze po analizie",
        "Kontrasty planowane wymagają wielkich prób, a post hoc nie ma tego wymogu",
        "Nie ma między nimi różnic – to dwie nazwy na to samo podejście"
      ],
      "explanation": "Kontrasty planowane (planned contrasts) ustala się z góry, bazując na hipotezach badawczych. Testy post hoc przeprowadza się najczęściej dopiero po stwierdzeniu istotnego efektu w ANOVA.",
      "correctAnswer": 0
    },
    {
      "id": 114,
      "text": "Które z poniższych założeń jest podstawowe dla ANOVA, oprócz normalności rozkładu i homogeniczności wariancji?",
      "options": [
        "Niezależność obserwacji w każdej grupie",
        "Równoliczność grup",
        "Równoważenie liczby zmiennych zakłócających",
        "Brak możliwości stosowania kowariancji w modelu"
      ],
      "explanation": "ANOVA zakłada, że obserwacje w każdej grupie są niezależne. Jest to kluczowe założenie, obok normalności i homogeniczności wariancji.",
      "correctAnswer": 0
    },
    {
      "id": 115,
      "text": "Co może być skutkiem występowania skrajnych obserwacji (outliers) w analizie ANOVA?",
      "options": [
        "Zniekształcenie wyników, zwłaszcza gdy prób jest stosunkowo mało",
        "Zwiększenie mocy testu i pewności wnioskowania",
        "Eliminacja potrzeby sprawdzania założeń testu",
        "Brak jakiegokolwiek wpływu na wnioskowanie statystyczne"
      ],
      "explanation": "Obserwacje skrajne mogą silnie zaburzać średnie i wariancje w grupach, co z kolei zniekształca wyniki ANOVA, szczególnie przy małych n.",
      "correctAnswer": 0
    },
    {
      "id": 116,
      "text": "Czym jest ANCOVA (Analysis of Covariance)?",
      "options": [
        "Jest to analiza wariancji w planie jednoczynnikowym bez zmiennych dodatkowych",
        "To modyfikacja ANOVA, która uwzględnia jedną lub więcej zmiennych kowariujących",
        "To test post hoc sprawdzający różnice między grupami po replikacji wielokrotnej",
        "To rodzaj analizy regresji moderacyjnej w badaniach kwestionariuszowych"
      ],
      "explanation": "ANCOVA (Analysis of Covariance) jest rozszerzeniem ANOVA, w której oprócz czynnika/faktora badawczego kontroluje się wpływ zmiennych dodatkowych (tzw. kowariant), co pozwala na precyzyjniejsze oszacowanie wpływu czynnika głównego.",
      "correctAnswer": 1
    },
    {
      "id": 117,
      "text": "W jakim celu stosuje się zmienne kowariujące w ANCOVA?",
      "options": [
        "Aby usunąć efekt losowej manipulacji zmienną zależną",
        "By ograniczyć wpływ dodatkowych czynników, które mogą różnicować grupy niezależnie od czynnika głównego",
        "By wprowadzić interakcję między poziomami czynnika a zmienną zależną",
        "Aby zmniejszyć liczbę uczestników potrzebnych do badania"
      ],
      "explanation": "Kowariata (covariate) pozwala skorygować wyniki o wpływ zmiennej, która mogłaby wyjaśniać różnice między grupami w sposób niezależny od czynnika głównego. Dzięki temu możliwe jest bardziej precyzyjne oszacowanie efektu interesującej nas zmiennej niezależnej.",
      "correctAnswer": 1
    },
    {
      "id": 118,
      "text": "Czym jest MANCOVA (Multivariate Analysis of Covariance)?",
      "options": [
        "Analizą jednoczynnikową z jednym czynnikiem i jedną kowariatą",
        "Wielozmiennową analizą kowariancji, w której może występować więcej niż jedna zmienna zależna",
        "Testem homogeniczności wariancji w jednoczynnikowej ANOVA z kowariatem",
        "Rodzajem moderacji mierzącej jednocześnie wiele interakcji"
      ],
      "explanation": "MANCOVA (Multivariate Analysis of Covariance) to wielozmiennowa analiza kowariancji, stosowana, gdy badacze mają kilka zmiennych zależnych i chcą kontrolować dodatkowe zmienne (kowariaty).",
      "correctAnswer": 1
    },
    {
      "id": 119,
      "text": "Jakie jest jedno z głównych założeń ANCOVA oprócz normalności i homogeniczności wariancji?",
      "options": [
        "Brak potrzeby stosowania testów post hoc",
        "Interakcja między kowariatą a czynnikiem głównym musi być istotna",
        "Równoległość nachylenia regresji (tzw. homogeniczność nachyleń) między grupami",
        "Konieczność losowej manipulacji zmienną kowariującą"
      ],
      "explanation": "W ANCOVA zakłada się m.in. homogeniczność nachyleń regresji (ang. homogeneity of regression slopes), co oznacza, że relacja między kowariatą a zmienną zależną jest podobna we wszystkich badanych grupach.",
      "correctAnswer": 2
    },
    {
      "id": 120,
      "text": "Co należy zrobić, jeśli w ANCOVA stwierdzimy istotną interakcję między kowariatą a czynnikiem (brak homogeniczności nachyleń)?",
      "options": [
        "Przeprowadzić analizę post hoc dla kowariaty",
        "Nie jest to żaden problem, można normalnie interpretować wyniki ANCOVA",
        "Rozważyć zastosowanie innego modelu, np. analizy moderacji lub odrębnej procedury statystycznej",
        "Odrzucić wszystkie wyniki i przyjąć, że efekt nie istnieje"
      ],
      "explanation": "Jeśli istnieje interakcja między kowariatą a czynnikiem głównym, założenie o homogeniczności nachyleń jest naruszone. W takiej sytuacji klasyczna ANCOVA może być nieadekwatna i należy zastosować model, który uwzględni tę interakcję (np. model z moderacją lub inny odpowiedni test).",
      "correctAnswer": 2
    },
    {
      "id": 121,
      "text": "Czym różni się model ANCOVA w planie z powtarzanym pomiarem od klasycznej ANCOVA międzygrupowej?",
      "options": [
        "W ANCOVA z powtarzanym pomiarem eliminuje się całkowicie wpływ kowariaty",
        "W ANCOVA z powtarzanym pomiarem ta sama kowariata mierzona jest we wszystkich poziomach czynnika wewnątrzosobowego",
        "W planie z powtarzanym pomiarem nie można stosować żadnych kowariat",
        "W planie z powtarzanym pomiarem automatycznie nie obowiązują założenia normalności"
      ],
      "explanation": "W ANCOVA z powtarzanym pomiarem również można uwzględniać kowariatę, przy czym ta sama zmienna (kowariata) bywa mierzona u każdego uczestnika w różnych poziomach czynnika. Wymaga to jednak dodatkowych założeń, podobnych do sferyczności i homogeniczności nachyleń dla danych zależnych.",
      "correctAnswer": 1
    },
    {
      "id": 122,
      "text": "Które z poniższych założeń jest szczególnie istotne w MANCOVA z powtarzanym pomiarem (RM MANCOVA)?",
      "options": [
        "Homoscedastyczność jedynie dla zmiennej zależnej",
        "Brak sferyczności w jakiejkolwiek zmiennej",
        "Zależność między grupami uczestników na poziomie 100%",
        "Homogeniczność macierzy kowariancji w obrębie różnych poziomów czynnika i kowariat"
      ],
      "explanation": "W RM MANCOVA kluczowa jest homogeniczność macierzy kowariancji, czyli założenie, że dane dla różnych poziomów powtarzanych pomiarów i dla różnych grup uczestników mają zbliżone wzorce wariancji–kowariancji.",
      "correctAnswer": 3
    },
    {
      "id": 123,
      "text": "W MANCOVA analizujemy kilka zmiennych zależnych jednocześnie. Po co kontrolować zmienną kowariującą w takim modelu?",
      "options": [
        "By móc wykazać interakcję każdej zmiennej zależnej z kowariatą",
        "By wyeliminować efekt przekrojowy między wszystkimi poziomami czynnika",
        "By dokładniej oszacować wpływ czynnika głównego na zbiór zmiennych zależnych, kontrolując wpływ dodatkowej zmiennej",
        "By automatycznie zwiększyć liczebność próby"
      ],
      "explanation": "W MANCOVA dodanie kowariaty pozwala usunąć wpływ zmiennej dodatkowej na zestaw zmiennych zależnych, co prowadzi do bardziej precyzyjnej oceny efektu czynnika głównego (lub czynników) na ten zestaw.",
      "correctAnswer": 2
    },
    {
      "id": 124,
      "text": "Co oznacza, że macierz kowariancji jest 'jednorodna' (homogeniczna) w kontekście MANCOVA?",
      "options": [
        "Każda zmienna w modelu ma identyczne średnie",
        "Wszystkie wariancje i kowariancje w obrębie poszczególnych grup są podobne",
        "Brak zależności liniowej między zmiennymi zależnymi",
        "Zawsze p < 0,05 w teście na efekt główny"
      ],
      "explanation": "Jednorodność macierzy kowariancji zakłada, że w każdej grupie (w obrębie czynnika) wariancje i kowariancje między zmiennymi zależnymi są podobne, co stanowi jedno z założeń MANCOVA.",
      "correctAnswer": 1
    },
    {
      "id": 125,
      "text": "Co dzieje się, gdy założenie homogeniczności macierzy kowariancji zostaje naruszone w MANCOVA?",
      "options": [
        "Wyniki testów mogą być zbyt liberalne lub konserwatywne, zniekształcając wnioskowanie",
        "Zawsze wzrasta moc statystyczna analizy",
        "Nie wpływa to na istotność efektu w żaden sposób",
        "Oznacza to, że zmienne zależne są całkowicie nieprzydatne w badaniu"
      ],
      "explanation": "Naruszenie homogeniczności macierzy kowariancji może prowadzić do nieprawidłowych wniosków statystycznych – testy mogą dawać zawyżone (liberalne) lub zaniżone (konserwatywne) p-wartości.",
      "correctAnswer": 0
    },
    {
      "id": 126,
      "text": "W analizie MANCOVA z dwoma zmiennymi zależnymi stwierdzono znaczącą interakcję czynnika głównego z kowariatą dla jednej z DV. Co to sugeruje?",
      "options": [
        "Model MANCOVA jest w pełni poprawny, bo interakcja dotyczy tylko jednej zmiennej zależnej",
        "Możliwe naruszenie założenia homogeniczności nachyleń regresji względem kowariaty dla tej zmiennej zależnej",
        "Należy automatycznie usunąć tę zmienną z modelu",
        "Wskazuje to na konieczność sumowania zmiennych zależnych w jeden wskaźnik"
      ],
      "explanation": "Jeśli w MANCOVA występuje interakcja czynnika z kowariatą przy którejś zmiennej zależnej, może to naruszać założenie homogeniczności nachyleń dla tej części modelu. Wówczas klasyczne podejście do MANCOVA nie jest właściwe.",
      "correctAnswer": 1
    },
    {
      "id": 127,
      "text": "Jak można poradzić sobie z naruszeniem założeń w MANCOVA?",
      "options": [
        "Zastosować transformacje danych lub skorzystać z testów niewymagających tych samych założeń",
        "Zignorować je, ponieważ MANCOVA jest zawsze odporna na naruszenia założeń",
        "Zwiększyć liczbę poziomów czynnika, aby zredukować efekt interakcji",
        "Zawsze usunąć kowariaty z modelu"
      ],
      "explanation": "Przy naruszeniu założeń MANCOVA można zastosować alternatywne metody, np. transformacje zmiennych, testy permutacyjne, bądź metody odporne (robust) na brak homogeniczności. Ignorowanie problemu może prowadzić do błędnych wniosków.",
      "correctAnswer": 0
    },
    {
      "id": 128,
      "text": "Który ze współczynników jest najczęściej raportowanym efektem w MANCOVA obok wielkości efektu (np. η²)?",
      "options": [
        "Statystyka Wilksa (Lambda de Wilks)",
        "Test Shapiro-Wilka",
        "Test Mauchly’ego",
        "Wskaźnik sferyczności (W)"
      ],
      "explanation": "W MANCOVA często raportuje się tzw. Lambda Wilksa (Wilks’ Lambda) jako wskaźnik testowania efektów wielozmiennowych. Oprócz tego stosuje się np. Pillai’s Trace czy Hotelling’s Trace.",
      "correctAnswer": 0
    },
    {
      "id": 129,
      "text": "Dlaczego w MANCOVA stosuje się wiele statystyk, takich jak Wilks’ Lambda, Pillai’s Trace czy Hotelling’s Trace?",
      "options": [
        "Bo tylko jedna z tych statystyk jest poprawna, a reszta nie ma znaczenia",
        "Są to różne procedury testowania wielozmiennowych efektów, które mogą różnić się wrażliwością i zachowaniem przy naruszeniu założeń",
        "MANCOVA wymaga przeprowadzenia wszystkich testów na raz, aby potwierdzić wynik",
        "Każdy z testów służy do oceny zupełnie innej hipotezy, niezwiązanej z efektami czynnika"
      ],
      "explanation": "Wilks’ Lambda, Pillai’s Trace, Hotelling’s Trace i Roy’s Largest Root to różne statystyki wielozmiennowe dla oceny efektów w MANCOVA. Każda ma nieco inne właściwości i wrażliwości na naruszenia założeń, dlatego czasem badacze raportują kilka z nich.",
      "correctAnswer": 1
    },
    {
      "id": 130,
      "text": "Co pozwala wstępnie stwierdzić istotny wynik MANCOVA?",
      "options": [
        "Że wszystkie zmienne zależne różnią się od siebie istotnie w każdej grupie",
        "Że istnieje co najmniej jeden efekt czynnika (lub interakcji) na składową zbioru zmiennych zależnych, kontrolując kowariatę",
        "Że nie ma potrzeby sprawdzać poszczególnych zmiennych zależnych oddzielnie",
        "Że odrzucono hipotezę o braku homogeniczności macierzy kowariancji"
      ],
      "explanation": "Znaczący wynik MANCOVA oznacza, że czynnik (lub interakcja) wpływa na zestaw zmiennych zależnych (z uwzględnieniem kowariaty). Aby określić, które zmienne zależne są odpowiedzialne za ten efekt, należy przeprowadzić dalsze testy jednoczynnikowe.",
      "correctAnswer": 1
    },

    {
      "id": 131,
      "text": "Kiedy można rozważyć zastosowanie MANOVA zamiast serii jednoczynnikowych ANOVA?",
      "options": [
        "Gdy mamy jeden czynnik i jedną zmienną zależną",
        "Gdy interesuje nas jednoczesna analiza kilku zmiennych zależnych i ewentualnych interakcji między czynnikami",
        "Gdy chcemy sprawdzić tylko homogeniczność wariancji w poszczególnych grupach",
        "Gdy liczba obserwacji jest bardzo mała, a liczba zmiennych zależnych duża"
      ],
      "explanation": "MANOVA (Multivariate Analysis of Variance) jest użyteczna w przypadku, gdy w badaniu mamy więcej niż jedną zmienną zależną i chcemy uwzględniać ich współzależność w jednej, wielowymiarowej analizie. Zastosowanie serii ANOVA dla każdej zmiennej osobno może prowadzić do problemu kumulacji błędu I rodzaju, a także nie bierze pod uwagę korelacji między zmiennymi zależnymi.",
      "correctAnswer": 1
    },
    {
      "id": 132,
      "text": "Jak można zinterpretować brak istotności w MANOVA, ale istotne wyniki w poszczególnych ANOVA dla każdej zmiennej zależnej?",
      "options": [
        "MANOVA jest zawsze bardziej czuła niż ANOVA, więc to wyniki ANOVA są nieprawidłowe",
        "Brak istotności w MANOVA oznacza, że efekt nie występuje w żadnej ze zmiennych zależnych",
        "Możliwa jest sytuacja, w której żadna kombinacja zmiennych zależnych nie wykazuje spójnego, wielowymiarowego efektu, choć każda z osobna może być istotna w pewnych porównaniach",
        "Oznacza to, że trzeba powtórzyć analizę, bo taki wynik jest niemożliwy"
      ],
      "explanation": "Może się zdarzyć, że efekt jest niewielki i rozproszony, ujawniając się w pojedynczych ANOVA, ale nie osiąga istotności w wielowymiarowej perspektywie MANOVA (gdzie analizowane są wzajemne relacje między zmiennymi zależnymi).",
      "correctAnswer": 2
    },
    {
      "id": 133,
      "text": "Jak postąpić, gdy w MANOVA wykryto istotny efekt czynnika na zbiór zmiennych zależnych?",
      "options": [
        "Zakończyć analizę, bo MANOVA jest wystarczająca do stwierdzenia, które zmienne zależne się różnią",
        "Przeprowadzić dodatkowe analizy jednoczynnikowe ANOVA lub testy post hoc na każdej zmiennej zależnej, by zidentyfikować, którymi zmiennymi zależnymi steruje efekt",
        "Przejść natychmiast do analizy ANCOVA z tymi samymi zmiennymi",
        "Wyłącznie porównać średnie w sposób opisowy i nie stosować statystyk inferencyjnych"
      ],
      "explanation": "Wynik ogólny z MANOVA informuje o istnieniu efektu w wielowymiarowej kombinacji zmiennych zależnych. Aby dowiedzieć się, która ze zmiennych zależnych przyczynia się do tego efektu, należy wykonać analizy jednoczynnikowe (lub testy post hoc) w kontekście każdej zmiennej zależnej.",
      "correctAnswer": 1
    },
    {
      "id": 134,
      "text": "Które podejście do raportowania wyników MANOVA jest zgodne ze standardami APA?",
      "options": [
        "Podanie tylko wartości p dla MANOVA, bez żadnych szczegółów",
        "Zamieszczenie informacji o statystyce wielowymiarowej (np. Wilks’ Lambda), jej wartości p, wielkości efektu (np. eta²) oraz ew. post hoc dla zmiennych zależnych",
        "Ograniczenie się do opisu słownego, że efekt jest istotny bądź nie",
        "Nie należy używać MANOVA w raportach naukowych"
      ],
      "explanation": "Standardy APA sugerują, by raportować przynajmniej: rodzaj zastosowanej statystyki wielowymiarowej (Wilks’ Lambda, Pillai’s Trace, Hotelling’s Trace), wartość p, współczynniki wielkości efektu (eta² lub partial eta²), a także – jeśli wynik jest istotny – wyniki dalszych analiz poszczególnych zmiennych zależnych.",
      "correctAnswer": 1
    },
    {
      "id": 135,
      "text": "Które założenie jest wspólne dla MANOVA, MANCOVA i RM MANOVA (powtarzany pomiar)?",
      "options": [
        "Zawsze musi być spełniona sferyczność, niezależnie od typu analizy",
        "Rozkład kowariat w populacji nie ma znaczenia, jeśli liczba zmiennych zależnych przekracza 2",
        "Niezależność obserwacji między badanymi i jednorodność macierzy kowariancji między grupami",
        "Brak potrzeby sprawdzania normalności, jeśli mamy dużą liczbę uczestników"
      ],
      "explanation": "We wszystkich wariantach analizy wielowymiarowej (MANOVA, MANCOVA, RM MANOVA) należy założyć m.in. niezależność obserwacji między różnymi uczestnikami oraz jednorodność macierzy kowariancji w porównywanych grupach.",
      "correctAnswer": 2
    },
    {
      "id": 136,
      "text": "Dlaczego w testach wielokrotnych porównań (multiple comparisons) zaleca się stosowanie korekty na poziom istotności (np. Bonferroni)?",
      "options": [
        "Aby zwiększyć prawdopodobieństwo uzyskania p < 0,05",
        "W celu kontrolowania kumulacji błędu I rodzaju przy wielu testach jednocześnie",
        "Bo jest to standard tylko w ANOVA z jednym czynnikiem",
        "Aby całkowicie wyeliminować problem zmiennych zakłócających"
      ],
      "explanation": "Przy wielokrotnych porównaniach rośnie ryzyko popełnienia błędu I rodzaju (fałszywe pozytywy). Korekty takie jak Bonferroni obniżają poziom istotności dla poszczególnych testów, chroniąc przed nadmierną inflacją błędu I rodzaju.",
      "correctAnswer": 1
    },
    {
      "id": 137,
      "text": "Czym jest tzw. test LSD (Least Significant Difference) w porównaniach wielokrotnych?",
      "options": [
        "Bardzo konserwatywną metodą zapobiegającą fałszywym alarmom",
        "Metodą najmniej restrykcyjną, pozwalającą wykryć różnice, ale kosztem zwiększonego ryzyka błędu I rodzaju",
        "Testem do sprawdzania równości wariancji w ANOVA",
        "Metodą używaną wyłącznie w MANOVA do wykrywania interakcji"
      ],
      "explanation": "Test LSD (Fisher’s LSD) jest metodą post hoc, która dość liberalnie podchodzi do ochrony przed błędem I rodzaju i zwykle ma większą moc, ale wyższe ryzyko fałszywych alarmów w porównaniach wielokrotnych.",
      "correctAnswer": 1
    },
    {
      "id": 138,
      "text": "Która statystyka wielowymiarowa jest często uznawana za najbardziej odporną na naruszenia założeń w MANOVA?",
      "options": [
        "Lambda Wilksa",
        "Pillai’s Trace",
        "Hotelling’s Trace",
        "Roy’s Largest Root"
      ],
      "explanation": "Pillai’s Trace (znana również jako Pillai–Bartlett Trace) jest uznawana za najbardziej odporną statystykę na pewne naruszenia założeń MANOVA, choć czasem ma nieco mniejszą moc w idealnych warunkach.",
      "correctAnswer": 1
    },
    {
      "id": 139,
      "text": "Co można zrobić, jeśli testy normalności (np. Shapiro–Wilk) wskazują na znaczne odchylenia od rozkładu normalnego w ANOVA?",
      "options": [
        "Zastosować nieparametryczne alternatywy, np. test Kruskala–Wallisa dla jednoczynnikowej analizy, lub transformacje zmiennych",
        "Zawsze odrzucić dane i przeprowadzić badanie od nowa",
        "Przeprowadzić test Mauchly’ego zamiast Shapiro–Wilk",
        "Zaakceptować wyniki, bo ANOVA jest niewrażliwa na naruszenia normalności"
      ],
      "explanation": "Gdy rozkład normalny jest silnie naruszony, rozważa się nieparametryczne odpowiedniki (np. Kruskal–Wallis) lub ewentualnie transformacje (logarytmiczne, kwadratowe) danych, żeby przybliżyć je do normalności.",
      "correctAnswer": 0
    },
    {
      "id": 140,
      "text": "Jak interpretować istotną interakcję w analizie dwuczynnikowej ANOVA (2 x 2)?",
      "options": [
        "Efekt jednego czynnika jest identyczny w obu poziomach drugiego czynnika",
        "Wpływ jednego czynnika na zmienną zależną różni się w zależności od poziomu drugiego czynnika",
        "Czynniki nie oddziałują na zmienną zależną w żaden sposób",
        "Należy automatycznie odrzucić wszystkie efekty główne"
      ],
      "explanation": "Interakcja oznacza, że efekt jednego czynnika zmienia się wraz z poziomami drugiego. W praktyce sugeruje się sprawdzenie tzw. simple effects, aby ustalić, jak dokładnie przebiega ta zależność.",
      "correctAnswer": 1
    },
    {
      "id": 141,
      "text": "Co należy zrobić, jeśli w dwuczynnikowej ANOVA występuje istotna interakcja, a jeden z efektów głównych jest nieistotny?",
      "options": [
        "Odrzucić wszystkie efekty i uznać, że wynik jest niejednoznaczny",
        "Skupić się na interpretacji interakcji, ponieważ efekty główne mogą być niewystarczające, by oddać pełnię zjawiska",
        "Zawsze przyjmować, że efekt główny jest błędny, a interakcja jest najważniejsza",
        "Zwiększyć próg istotności do 0,10, by efekt główny okazał się istotny"
      ],
      "explanation": "W przypadku istotnej interakcji zwykle kluczowe jest interpretowanie tzw. simple effects (prostszych efektów w ramach kombinacji czynników). Efekty główne mogą być maskowane lub modyfikowane przez interakcję, dlatego sama nieistotność efektu głównego nie wyklucza realnych różnic w poszczególnych poziomach czynnika.",
      "correctAnswer": 1
    },
    {
      "id": 142,
      "text": "Który z poniższych scenariuszy może wskazywać na występowanie interakcji sufitowej (tzw. ceiling effect) w eksperymencie?",
      "options": [
        "Obserwuje się bardzo niskie wyniki w każdej kombinacji czynników",
        "Respondenci osiągają maksymalne wyniki w jednym warunku, niezależnie od poziomu drugiego czynnika",
        "Wariancja w poszczególnych grupach jest równa, ale liczebność próby jest bardzo duża",
        "Zastosowano plan jednoczynnikowy bez możliwości występowania interakcji"
      ],
      "explanation": "Interakcja sufitowa może wystąpić, gdy w jednym z warunków badani osiągają już górny pułap skali (ceiling), przez co potencjalny dalszy wzrost wywołany drugim czynnikiem nie może się ujawnić. Może to fałszywie sugerować brak interakcji lub zniekształcić jej wzorzec.",
      "correctAnswer": 1
    },
    {
      "id": 143,
      "text": "W trzyczynnikowej ANOVA (2 x 2 x 2) otrzymano trzy istotne efekty główne i istotną interakcję potrójną. Co warto zrobić w kolejnej analizie?",
      "options": [
        "Pominąć efekty główne i analizować wyłącznie interakcję potrójną",
        "Przeprowadzić analizę prostej interakcji (simple interaction) na różnych poziomach czynników, by szczegółowo zbadać naturę interakcji potrójnej",
        "Stwierdzić, że efekty główne wyjaśniają cały wariant, więc nie ma sensu rozważać interakcji",
        "Zwiększyć liczbę zmiennych zależnych, by zniwelować zjawisko interakcji"
      ],
      "explanation": "Przy istotnej interakcji potrójnej (A×B×C) zaleca się analizę prostych interakcji (np. interakcja B×C na różnych poziomach A), aby dokładnie określić, jak kombinacja trzech czynników wpływa na zmienną zależną.",
      "correctAnswer": 1
    },
    {
      "id": 144,
      "text": "W powtarzanym pomiarze (ANOVA) dotyczących trzech poziomów czynnika, test Mauchly’ego wykazał p < 0,05. Co w takiej sytuacji zalecają standardowe procedury?",
      "options": [
        "Przeprowadzić korektę stopni swobody (np. Greenhouse-Geisser lub Huynh-Feldt)",
        "Traktować wynik testu Mauchly’ego jako wskazówkę braku efektu głównego",
        "Przerwać analizę, bo naruszenie sferyczności uniemożliwia wnioskowanie",
        "Zwiększyć próbę w trakcie trwania badania"
      ],
      "explanation": "Jeśli test Mauchly’ego wskazuje naruszenie sferyczności (p < 0,05), należy zastosować korektę stopni swobody (np. Greenhouse-Geisser), aby skorygować wynik ANOVA dla powtarzanego pomiaru i właściwie ocenić istotność efektów.",
      "correctAnswer": 0
    },
    {
      "id": 145,
      "text": "W wieloczynnikowej ANOVA, co oznacza brak istotnej interakcji między czynnikami?",
      "options": [
        "Że każdy z czynników wpływa na zmienną zależną w podobny sposób na wszystkich poziomach drugiego czynnika (o ile efekt główny jest istotny)",
        "Że badanie zostało źle zaprojektowane i należy wykluczyć jeden z czynników",
        "Że każdy z czynników osobno jest również nieistotny",
        "Że sferyczność jest automatycznie spełniona"
      ],
      "explanation": "Brak istotnej interakcji wskazuje na addytywne (niezależne) działanie czynników na zmienną zależną. Innymi słowy, wpływ jednego czynnika nie zależy od poziomu drugiego.",
      "correctAnswer": 0
    },
    {
      "id": 146,
      "text": "W dwuczynnikowej ANOVA (3 x 3) jaki jest łączny licznik stopni swobody (df) dla efektów głównych i interakcji?",
      "options": [
        "Dla efektu A: 2, efektu B: 2, interakcji A×B: 4",
        "Dla efektu A: 3, efektu B: 3, interakcji A×B: 9",
        "Dla efektu A: 2, efektu B: 2, interakcji A×B: 2",
        "Dla efektu A: 1, efektu B: 1, interakcji A×B: 2"
      ],
      "explanation": "Przy 3 poziomach w każdym czynniku: df(A) = (3 – 1) = 2, df(B) = (3 – 1) = 2, a dla interakcji df(A×B) = 2 × 2 = 4.",
      "correctAnswer": 0
    },
    {
      "id": 147,
      "text": "W jednoczynnikowej ANOVA z bardzo różnymi liczebnościami w grupach (nierównoliczne próby) i p < 0,05 w teście Levene’a, co można zrobić?",
      "options": [
        "Zastosować wariant ANOVA niewymagający równości wariancji (np. Brown–Forsythe lub Welch)",
        "Zignorować wyniki testu Levene’a i wykonać klasyczną ANOVA",
        "Zwiększyć liczbę grup do momentu zrównania liczebności",
        "Odrzucić badanie, bo nierówne grupy zawsze unieważniają ANOVA"
      ],
      "explanation": "Jeżeli wariancje w grupach nie są równe (test Levene’a istotny), a grupy mają nierównoliczne próby, można zastosować poprawki takie jak testy Browna–Forsythe’a lub Welcha, które korygują wyniki na nierówne wariancje i liczebności.",
      "correctAnswer": 0
    },
    {
      "id": 148,
      "text": "Która z poniższych sytuacji może świadczyć o istnieniu efektu podłogi (floor effect) w wieloczynnikowej ANOVA?",
      "options": [
        "Większość uczestników w jednym z warunków osiąga minimalne wyniki skalowe, co ogranicza możliwość dalszego obniżenia wyniku pod wpływem innego czynnika",
        "Średnie we wszystkich warunkach są na najwyższym poziomie skali",
        "Wariancja w jednym z warunków jest wyższa niż we wszystkich pozostałych",
        "Interakcja jest istotna tylko dla jednego z czynników"
      ],
      "explanation": "Efekt podłogi występuje, gdy badani osiągają wartości zbliżone do minimum skali w danym warunku, co może sztucznie spłaszczyć lub osłabić możliwy wpływ innego czynnika.",
      "correctAnswer": 0
    },
    {
      "id": 149,
      "text": "W planie mieszanym (mixed design), w którym jeden czynnik jest międzygrupowy, a drugi wewnątrzgrupowy, które z następujących założeń będą miały zastosowanie?",
      "options": [
        "Homoscedastyczność dla czynnika wewnątrzgrupowego i homogeniczność sferyczności dla czynnika międzygrupowego",
        "Homoscedastyczność dla czynnika międzygrupowego oraz ewentualna sferyczność dla czynnika wewnątrzgrupowego",
        "Zawsze wyłącznie sferyczność, bo plan jest mieszany",
        "Tylko równe liczebności w każdej z grup"
      ],
      "explanation": "W planie mieszanym trzeba zachować homogeniczność wariancji (międzygrupowo) i sferyczność (lub korektę) w pomiarze wewnątrzgrupowym. Każdy czynnik ma typowe dla siebie założenia.",
      "correctAnswer": 1
    },
    {
      "id": 150,
      "text": "W planie mieszanym (2 x 2) z czynnikiem A między grupami i czynnikiem B wewnątrz grup, w jaki sposób można zinterpretować interakcję A × B?",
      "options": [
        "Wpływ czynnika B jest identyczny u wszystkich osób, niezależnie od czynnika A",
        "Efekt różnic między poziomami B może się różnić w zależności od przypisania do poziomów A",
        "Nie można mieć interakcji w planie mieszanym, gdy są tylko dwa czynniki",
        "Interakcja dotyczy tylko efektów losowych, nie głównych"
      ],
      "explanation": "W interakcji A × B w planie mieszanym sprawdzamy, czy przyrost (lub różnica) wyników między poziomami B jest inny w zależności od tego, do którego poziomu czynnika A uczestnicy należą.",
      "correctAnswer": 1
    },
    {
      "id": 151,
      "text": "W planie mieszanym (2 x 3), gdzie czynnik A (2 poziomy) jest międzygrupowy, a czynnik B (3 poziomy) jest wewnątrzgrupowy, stwierdzono istotny efekt główny czynnika A oraz istotny efekt główny czynnika B, ale brak interakcji A × B. Jak to interpretować?",
      "options": [
        "Oba czynniki wpływają niezależnie na wyniki – wpływ B jest podobny dla obu poziomów A, a efekt A nie zależy od poziomów B",
        "Należy wnioskować, że tylko interakcja jest ważna i odrzucić efekty główne",
        "Powinno się połączyć wszystkie poziomy czynników w jeden uśredniony wskaźnik",
        "Brak interakcji oznacza, że efekt czynnika B występuje tylko w jednej grupie czynnika A"
      ],
      "explanation": "Brak interakcji przy jednoczesnej istotności efektów głównych sugeruje, że każdy czynnik wywiera własny, addytywny wpływ na zmienną zależną. Działanie czynnika B jest takie samo w obu poziomach A, a czynnik A oddziałuje jednakowo niezależnie od poziomu B.",
      "correctAnswer": 0
    },
    {
      "id": 152,
      "text": "W ANOVA z powtarzanym pomiarem (3 poziomy czynnika) i grupami niezależnymi (2 grupy) mamy plan mieszany 2 (Grupa) x 3 (Pomiar). Które z założeń dotyczy wyłącznie części powtarzanej (3 poziomy czynnika)?",
      "options": [
        "Niezależność obserwacji między uczestnikami w obrębie każdej grupy",
        "Homoscedastyczność wariancji pomiędzy dwiema grupami",
        "Sferyczność danych powiązanych z czynnikiem wewnątrzgrupowym",
        "Równa liczebność w obu grupach"
      ],
      "explanation": "W powtarzanym pomiarze z trzema poziomami czynnika sferyczność odnosi się do wewnątrzosobowych zależności między poziomami tego czynnika. Homoscedastyczność i niezależność obserwacji odnoszą się natomiast do części międzygrupowej (Grupa).",
      "correctAnswer": 2
    },
    {
      "id": 153,
      "text": "W planie 2 x 2 x 2 stwierdzono istotną interakcję potrójną A × B × C. Co należy sprawdzić, by ją poprawnie zinterpretować?",
      "options": [
        "Przeprowadzić kontrasty planowane dla głównych efektów A, B i C",
        "Zbadać interakcje proste (tzw. simple two-way interactions), np. interakcję A × B na poszczególnych poziomach C",
        "Założyć, że skoro interakcja potrójna jest istotna, efekty główne i dwuczynnikiwe nie mają znaczenia",
        "Nic więcej nie trzeba robić, bo interakcja potrójna informuje o wszystkim"
      ],
      "explanation": "Istotna interakcja potrójna wskazuje, że efekt dwuczynnikowy (np. A × B) różni się w zależności od poziomu trzeciego czynnika (C). Aby to w pełni zrozumieć, analizuje się tzw. simple interactions, np. A × B na każdej kategorii C.",
      "correctAnswer": 1
    },
    {
      "id": 154,
      "text": "W planie jednoczynnikowym (4 poziomy) uzyskano istotny wynik ANOVA (p < 0,01). Wyniki testu post hoc Bonferroni wykazują, że tylko jedna para grup różni się istotnie. Jak to zinterpretować?",
      "options": [
        "ANOVA była błędna, bo nie potwierdziła się większość możliwych porównań",
        "Istnieje tylko jedna wyraźna różnica między dwiema konkretnymi grupami, a pozostałe grupy nie różnią się istotnie",
        "Wszystkie grupy różnią się istotnie, ale Bonferroni jest zbyt konserwatywny",
        "Trzeba wykluczyć tę parę grup z analizy, by uzyskać spójny obraz wyników"
      ],
      "explanation": "Istotność w ANOVA mówi jedynie, że przynajmniej dwie grupy się różnią. Testy post hoc pozwalają zidentyfikować, które to grupy. Jeśli tylko jedna para grup okazała się istotna, oznacza to, że między innymi parami różnic statystycznie potwierdzonych nie ma.",
      "correctAnswer": 1
    },
    {
      "id": 155,
      "text": "W planie jednoczynnikowym (3 poziomy czynnika) i p < 0,05 w teście na homogeniczność wariancji (Levene’a) można użyć testu Welcha. Co charakteryzuje test Welcha?",
      "options": [
        "Koryguje liczbę poziomów czynnika do 2, by wyrównać grupy",
        "Jest odmianą jednoczynnikowej ANOVA, która nie zakłada równości wariancji w grupach",
        "Wykonuje analizę post hoc bez weryfikacji efektu głównego",
        "Jest testem nieparametrycznym, odpowiednikiem Kruskala–Wallisa"
      ],
      "explanation": "Test Welcha to wariant jednoczynnikowej ANOVA niewymagający spełnienia założenia homogeniczności wariancji. Pozwala na rzetelną ocenę różnic między grupami, nawet gdy wariancje są nierówne i grupy mają różne liczebności.",
      "correctAnswer": 1
    },
    {
      "id": 156,
      "text": "W ANOVA jednoczynnikowej, co oznacza, że wyniki testu Kruskala–Wallisa są istotne na poziomie p < 0,05?",
      "options": [
        "Że rozkłady w co najmniej jednej grupie są skrajnie odległe od normalnych",
        "Że co najmniej dwie z porównywanych grup różnią się medianami wartości zmiennej zależnej",
        "Że można natychmiast odrzucić hipotezę o nierównych wariancjach",
        "Że wszystkie pary porównań między grupami są istotne statystycznie"
      ],
      "explanation": "Test Kruskala–Wallisa jest nieparametrycznym odpowiednikiem jednoczynnikowej ANOVA. Jego istotność oznacza, że co najmniej dwie grupy mają różne mediany wyników. Aby ustalić dokładnie które, należy przeprowadzić dodatkowe testy post hoc (np. Dunn’a, Conovera).",
      "correctAnswer": 1
    },
    {
      "id": 157,
      "text": "Który z poniższych testów jest stosowany jako post hoc po Kruskalu–Wallisie przy wielu grupach?",
      "options": [
        "Test Tukey HSD",
        "Test Dunna",
        "Test Shapiro–Wilka",
        "Test Mauchly’ego"
      ],
      "explanation": "Po nieparametrycznym teście Kruskala–Wallisa stosuje się nieparametryczne testy post hoc, takie jak test Dunna czy Conovera, odpowiednio poprawione o wielokrotne porównania.",
      "correctAnswer": 1
    },
    {
      "id": 158,
      "text": "W analizie Friedmana (nieparametryczny odpowiednik powtarzanej ANOVA) otrzymano p = 0,03. Co można z tego wnioskować?",
      "options": [
        "Że rozkład w każdej próbie jest normalny",
        "Że co najmniej jeden z poziomów czynnika różni się istotnie medianą od pozostałych w pomiarze powtarzanym",
        "Że należy natychmiast przeprowadzić test Mauchly’ego",
        "Że wszystkie poziomy czynnika są jednakowo skuteczne"
      ],
      "explanation": "Test Friedmana sprawdza, czy mediana wyników w pomiarze powtarzanym (dla n osób poddanych kilku warunkom) różni się między warunkami. Istotny wynik (p < 0,05) oznacza, że co najmniej jeden warunek różni się od pozostałych. Dla zidentyfikowania konkretnych różnic stosuje się post hoc (np. testy par Wilcoxona z korektą).",
      "correctAnswer": 1
    },
    {
      "id": 159,
      "text": "Czym jest test Quade’a?",
      "options": [
        "Nieparametrycznym odpowiednikiem ANCOVA",
        "Sposobem na sprawdzanie homogeniczności wariancji w ANOVA",
        "Testem post hoc po Kruskalu–Wallisie",
        "Metodą do obliczania lambda Wilksa w MANOVA"
      ],
      "explanation": "Test Quade’a bywa uznawany za nieparametryczny odpowiednik ANCOVA, pozwalający kontrolować jedną zmienną towarzyszącą (kowariatę) w warunkach, gdy założenia klasycznej ANCOVA nie są spełnione.",
      "correctAnswer": 0
    },
    {
      "id": 160,
      "text": "Który z poniższych testów można uznać za nieparametryczny odpowiednik dwuczynnikowej ANOVA międzygrupowej?",
      "options": [
        "Test Friedmana",
        "Test Kołmogorowa–Smirnowa",
        "Test Aligned Ranks (ART) lub Scheirer–Ray–Hare",
        "Test Shapiro–Wilka"
      ],
      "explanation": "Scheirer–Ray–Hare lub Aligned Ranks (ART) mogą pełnić rolę nieparametrycznego odpowiednika dwuczynnikowej ANOVA międzygrupowej, gdy dane nie spełniają założeń parametrycznych.",
      "correctAnswer": 2
    },
    {
      "id": 161,
      "text": "W analizie Scheirer–Ray–Hare, która jest nieparametrycznym odpowiednikiem dwuczynnikowej ANOVA, co dzieje się z danymi przed testem głównych efektów i interakcji?",
      "options": [
        "Dane są zawsze transformowane logarytmicznie",
        "Przeprowadza się rangowanie (rankowanie) obserwacji, a następnie wylicza sumy rang dla poszczególnych grup i czynników",
        "Stosuje się metodę bootstrappingu na oryginalnych danych bez rangowania",
        "Scheirer–Ray–Hare nie wymaga żadnych przekształceń danych"
      ],
      "explanation": "Metoda Scheirer–Ray–Hare, podobnie jak inne nieparametryczne podejścia, polega na zamianie obserwacji na rangi. Następnie analizuje się sumy rang w kontekście czynników i interakcji, zamiast oryginalnych wartości zmiennej zależnej.",
      "correctAnswer": 1
    },
    {
      "id": 162,
      "text": "Które z poniższych założeń nie jest konieczne do stosowania testu Scheirer–Ray–Hare?",
      "options": [
        "Normalność rozkładu danych w każdej grupie",
        "Niezależność obserwacji pomiędzy grupami",
        "Brak interakcji skrajnie wpływających na kolejność rang",
        "Wystarczająco duża liczebność próby, by przybliżenie rozkładem chi-kwadrat było wiarygodne"
      ],
      "explanation": "Scheirer–Ray–Hare, jako test nieparametryczny, nie wymaga normalności rozkładów. Wymaga natomiast niezależności obserwacji w grupach i zwykle pewnej liczebności, aby przybliżenie statystyki przez chi-kwadrat było sensowne.",
      "correctAnswer": 0
    },
    {
      "id": 163,
      "text": "Który z poniższych testów może służyć za nieparametryczny odpowiednik analizy z powtarzanym pomiarem (ANOVA) w planie 2 x 2 (czynnik A międzygrupowy, czynnik B wewnątrzgrupowy)?",
      "options": [
        "Połączenie testu Mann–Whitney’ego (dla międzygrup) i Wilcoxona (dla wewnątrzgrup), ewentualnie metoda ARTool (Aligned Rank Transformation)",
        "Test Shapiro–Wilka dla obu czynników",
        "Klasyczny test F wewnątrzgrupowy ze zwiększonym poziomem α",
        "Żaden test nieparametryczny nie istnieje dla planu mieszanego"
      ],
      "explanation": "W planach mieszanych można łączyć podejścia nieparametryczne (np. testy Mann–Whitney’ego między grupami, testy rangowane wewnątrz grup, lub skorzystać z tzw. ARTool – Aligned Rank Transformation – by móc przeprowadzić analizę zbliżoną do ANOVA w planie mieszanym).",
      "correctAnswer": 0
    },
    {
      "id": 164,
      "text": "W teście Friedmana stwierdzono p < 0,05. Który test post hoc można zastosować, aby porównać konkretnie pary pomiarów w planie powtarzanym?",
      "options": [
        "Test Dunna lub par Wilcoxona z korektą wielokrotnych porównań",
        "Test Tukeya dla powtarzanych pomiarów",
        "Test Shapiro–Wilka, bo sprawdza różnice pomiędzy medianami",
        "Żaden post hoc nie istnieje w przypadku Friedmana"
      ],
      "explanation": "Po teście Friedmana (dla powtarzanego pomiaru w ujęciu nieparametrycznym) stosuje się np. test Dunna (dostosowany do par porównań) lub kilkukrotny test Wilcoxona z odpowiednią korektą na wielokrotność (np. Bonferroni).",
      "correctAnswer": 0
    },
    {
      "id": 165,
      "text": "Które z poniższych jest zaletą nieparametrycznych analiz rangowych w porównaniu z ich parametrycznymi odpowiednikami?",
      "options": [
        "Wyższa moc testu przy spełnieniu założeń normalności",
        "Większa odporność na wartości odstające i brak wymogu normalności rozkładów",
        "Zawsze mniejsza liczba potrzebnych uczestników w próbie",
        "Możliwość interpretacji efektu jako ściśle przyczynowego"
      ],
      "explanation": "Testy nieparametryczne rangowe są bardziej odporne na ekstremalne obserwacje i nie wymagają normalności rozkładu. Jednakże zwykle mają mniejszą moc w sytuacjach, gdy faktycznie rozkład jest normalny.",
      "correctAnswer": 1
    },
    {
      "id": 166,
      "text": "Co oznacza, że test Wilcoxona dla par związanych (przed–po) wykazał Z = 2,35 i p = 0,019?",
      "options": [
        "Różnice w dwóch pomiarach (np. przed i po interwencji) są istotne statystycznie na poziomie α = 0,05",
        "Rozkład wyników jest normalny w obu pomiarach",
        "Efekt jest nieistotny, bo Wilcoxon nie testuje istotności statystycznej",
        "Z powodu małej próby nie można wyciągnąć wniosków o istotności"
      ],
      "explanation": "Wynik testu Wilcoxona z p = 0,019 < 0,05 wskazuje, że mediany (lub ogólna tendencja wyników) w pomiarze przed i po różnią się istotnie. Nie implikuje to automatycznie normalności danych.",
      "correctAnswer": 0
    },
    {
      "id": 167,
      "text": "Dlaczego testy nieparametryczne w analizach wieloczynnikowych (np. Scheirer–Ray–Hare) mogą być mniej popularne niż parametryczne ANOVA?",
      "options": [
        "Ponieważ zawsze są mniej poprawne metodologicznie",
        "Z uwagi na ich mniejszą moc statystyczną i większe trudności w interpretacji interakcji",
        "Testy parametryczne nigdy nie wymagają spełnienia założeń normalności",
        "W naukach społecznych nie ma potrzeby badania interakcji między zmiennymi"
      ],
      "explanation": "Wieloczynnikowe analizy nieparametryczne często są bardziej złożone, mniej intuicyjne w interpretacji i mają mniejszą moc przy dużych próbach spełniających założenia normalności. Dlatego badacze preferują ANOVA, jeśli założenia są względnie spełnione.",
      "correctAnswer": 1
    },
    {
      "id": 168,
      "text": "Jak można interpretować współczynnik r (lub Rosenthala) w teście Wilcoxona czy rangowym teście Spearmana?",
      "options": [
        "Jako miarę wielkości efektu, analogiczną do Cohen’s d lub eta-squared",
        "Jako wartość p testu istotności",
        "Jako liczbę obserwacji w próbie, która przyczyniła się do istotności wyników",
        "Jako miarę korekty sferyczności w planach powtarzanego pomiaru"
      ],
      "explanation": "W nieparametrycznych testach rangowych można podać współczynnik r jako wskaźnik wielkości efektu (m.in. Rosenthal’s r), co jest nieparametrycznym analogiem do Cohen’s d.",
      "correctAnswer": 0
    },
    {
      "id": 169,
      "text": "Która procedura nieparametryczna pozwala na jednoczesną kontrolę kowariaty (odpowiednik ANCOVA) przy danych nie spełniających założeń parametrycznych?",
      "options": [
        "Test Quade’a",
        "Test Shapiro–Wilka",
        "Test Mantela–Haenszela",
        "Test Kolmogorowa–Smirnowa"
      ],
      "explanation": "Test Quade’a bywa traktowany jako nieparametryczny odpowiednik ANCOVA, pozwalający w pewnym zakresie uwzględnić zmienną kowariującą.",
      "correctAnswer": 0
    },
    {
      "id": 170,
      "text": "Co odróżnia test Quade’a od klasycznego ANCOVA?",
      "options": [
        "Test Quade’a nie wymaga równości wariancji i normalności rozkładów",
        "W teście Quade’a nie można uwzględniać więcej niż jednej kowariaty",
        "Test Quade’a pozwala wyciągać wnioski ściśle przyczynowe",
        "ANCOVA nie umożliwia żadnych porównań post hoc"
      ],
      "explanation": "Test Quade’a jest procedurą rangową odporną na naruszenia normalności i homoscedastyczności, co odróżnia go od klasycznej ANCOVA wymagającej tych założeń.",
      "correctAnswer": 0
    }
  ],
}

