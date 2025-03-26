export const quiz = {
  id: 1,
  title: "Exam 2",
  questions: [
  {
    "id": 1,
    "text": "Co oznacza termin \"efekt ramowania\" w kontekście decyzji?",
    "options": [
      "Ograniczenie czasu na podjęcie decyzji",
      "Sposób prezentacji opcji wpływający na wybór",
      "Decyzję podjętą pod wpływem presji grupy",
      "Automatyczne wybieranie opcji z najmniejszym ryzykiem"
    ],
    "explanation": "Wyjaśnienie pytania: Efekt ramowania (framing effect) odnosi się do wpływu sposobu prezentacji informacji na podejmowane decyzje. \
\n- Odp. A (Ograniczenie czasu): Za: czas decyzyjny może wpływać na decyzję. Przeciw: nie jest to sedno 'ramowania'; dotyczy presji czasu, nie samego sposobu opisu. \
\n- Odp. B (Sposób prezentacji opcji wpływający na wybór): Za: opisuje istotę framingu – to właśnie forma prezentacji informacji modyfikuje decyzje. Przeciw: brak silnych kontrargumentów; jest to klasyczna definicja efektu ramowania. \
\n- Odp. C (Decyzja pod wpływem presji grupy): Za: presja grupy to mechanizm konformizmu, nie framingu. Przeciw: to inny efekt (np. wpływ norm grupowych). \
\n- Odp. D (Automatyczne wybieranie opcji z najmniejszym ryzykiem): Za: unikanie ryzyka jest jednym z mechanizmów decyzyjnych, ale nie wyraża istoty \"ramowania\". Przeciw: to nie jest definicja efektu ramowania. \
\nPoprawna odpowiedź to B, ponieważ framing effect opiera się na tym, że sposób prezentacji (ramy) może zmieniać preferencje decydenta.",
    "correctAnswer": 1
  },
  {
    "id": 2,
    "text": "Czym różni się plan grup zależnych od grup niezależnych?",
    "options": [
      "W planie grup zależnych nie stosuje się randomizacji.",
      "Plan grup zależnych wymaga większej liczby badanych.",
      "Plan grup zależnych minimalizuje różnice indywidualne.",
      "Plan grup niezależnych jest bardziej ekonomiczny czasowo."
    ],
    "explanation": "Wyjaśnienie pytania: Chodzi o różnice metodologiczne między planami eksperymentalnymi: w grupach zależnych (within-subjects) ci sami uczestnicy biorą udział w różnych warunkach; w grupach niezależnych (between-subjects) różni ludzie są przydzielani do różnych warunków. \
\n- Odp. A: Za: czasem stosuje się randomizację także w planach zależnych (np. randomizacja kolejności warunków). Przeciw: nie jest prawdą, że w zależnych nigdy nie ma randomizacji (choć innej natury). \
\n- Odp. B: Za: plan grup zależnych zwykle wymaga mniejszej, a nie większej liczby osób, bo ci sami badani przechodzą przez wiele warunków. Przeciw: więc stwierdzenie jest błędne. \
\n- Odp. C: Za: w planie grup zależnych ci sami uczestnicy są porównywani w różnych warunkach, co eliminuje różnice indywidualne między badanymi. Przeciw: może wystąpić efekt uczenia się, ale i tak minimalizacja różnic indywidualnych jest główną zaletą. \
\n- Odp. D: Za: plan grup niezależnych bywa prostszy proceduralnie (wszyscy badający się równocześnie w jednym warunku). Przeciw: choć 'ekonomiczność czasowa' bywa dyskusyjna, często to raczej plan zależny jest krótszy w analizie, ale dłuższy w badaniu pojedynczej osoby. \
\nPoprawna odpowiedź to C, ponieważ plan grup zależnych faktycznie minimalizuje różnice indywidualne.",
    "correctAnswer": 2
  },
  {
    "id": 3,
    "text": "Które z poniższych jest celem mediacji w badaniach naukowych?",
    "options": [
      "Ustalenie, w jakich warunkach występuje efekt.",
      "Wyjaśnienie mechanizmu relacji między zmiennymi.",
      "Zbadanie związku przyczynowo-skutkowego między X a Y.",
      "Zbadanie wpływu zmiennej zależnej na zmienną niezależną."
    ],
    "explanation": "Wyjaśnienie pytania: Mediacja (mediator) to czynnik wyjaśniający, dlaczego zmienna X wpływa na zmienną Y. \
\n- Odp. A: Za: to raczej definicja moderacji (w jakich warunkach). Przeciw: mediacja dotyczy mechanizmu, a nie warunków. \
\n- Odp. B: Za: kwintesencja mediacji – odkrycie mechanizmu i procesu pośredniczącego. Przeciw: brak. \
\n- Odp. C: Za: mediacja może sugerować proces przyczynowy, lecz jej głównym celem jest wskazanie mechanizmu, nie jedynie potwierdzenie przyczynowości X→Y. Przeciw: sformułowanie zbyt ogólne. \
\n- Odp. D: Za: odwrotny kierunek – zalezność DV na IV – jest mylący, bo w klasycznym podejściu manipulujemy zmienną niezależną. \
\nPoprawna odpowiedź: B, bo mediacja dotyczy mechanizmu (w jaki sposób X wpływa na Y).",
    "correctAnswer": 1
  },
  {
    "id": 4,
    "text": "Jaki jest główny cel prerejestracji badania?",
    "options": [
      "Zwiększenie trafności zewnętrznej wyników.",
      "Ułatwienie procesu rekrutacji uczestników.",
      "Ograniczenie selektywnego raportowania wyników.",
      "Podwyższenie mocy statystycznej analizy."
    ],
    "explanation": "Wyjaśnienie pytania: Prerejestracja polega na wcześniejszym określeniu hipotez, planów analitycznych itp. \
\n- Odp. A: Za: niekoniecznie wpływa na trafność zewnętrzną. Przeciw: to nie jest główny cel. \
\n- Odp. B: Za: nie łączy się bezpośrednio z rekrutacją. Przeciw: to nie jest istotą prerejestracji. \
\n- Odp. C: Za: właśnie temu służy – by nie wybierać tylko najciekawszych wyników post factum. Przeciw: brak mocnych kontrargumentów. \
\n- Odp. D: Za: nie zawsze wpływa na moc. Przeciw: to nie jest główny cel. \
\nPoprawna odpowiedź: C, bo prerejestracja głównie zapobiega selektywnemu raportowaniu (tzw. p-hacking).",
    "correctAnswer": 2
  },
  {
    "id": 5,
    "text": "Który ze sposobów zwiększa trafność wewnętrzną badania?",
    "options": [
      "Zwiększenie liczby badanych.",
      "Randomizacja przypisania do grup.",
      "Stosowanie prostych narzędzi pomiarowych.",
      "Analiza danych metodą bootstrappingu."
    ],
    "explanation": "Wyjaśnienie pytania: Trafność wewnętrzna dotyczy kontroli nad zmiennymi ubocznymi i pewności wnioskowania przyczynowo-skutkowego. \
\n- Odp. A: Za: większa próba może zwiększyć moc, lecz niekoniecznie trafność wewnętrzną. Przeciw: nie eliminuje czynników zakłócających. \
\n- Odp. B: Za: randomizacja to podstawowa metoda kontroli wpływu zmiennych zakłócających. Przeciw: brak silnych. \
\n- Odp. C: Za: proste narzędzia nie zawsze gwarantują lepszą kontrolę. Przeciw: mogą być mniej rzetelne. \
\n- Odp. D: Za: bootstrapping jest metodą statystyczną (szacowanie przedziałów ufności). Przeciw: nie wpływa bezpośrednio na trafność wewnętrzną. \
\nPoprawna odpowiedź: B, bo randomizacja najbardziej wspiera trafność wewnętrzną.",
    "correctAnswer": 1
  },
  {
    "id": 6,
    "text": "Co jest podstawą strategii SMAR?",
    "options": [
      "Wielokrotne powtarzanie badania przez różnych badaczy.",
      "Replikacja badania z zastosowaniem różnych narzędzi.",
      "Modyfikowanie zmiennych przez ten sam zespół badawczy.",
      "Przeprowadzanie metaanaliz wyników wielu badań."
    ],
    "explanation": "Wyjaśnienie pytania: SMAR (Systematyczne Modyfikacje w Autoreplikacjach) polega na tym, że ten sam zespół dokonuje modyfikacji i wielu replik. \
\n- Odp. A: Za: to bardziej masowe replikacje (różni badacze). \
\n- Odp. B: Za: dotyczy raczej replikacji z innymi narzędziami – to replikacje konceptualne. \
\n- Odp. C: Za: to sedno SMAR – ten sam zespół zmienia parametry, testuje w kolejnych autoreplikacjach. Przeciw: brak mocnych kontrargumentów. \
\n- Odp. D: Za: to raczej meta-analiza, nie SMAR. \
\nPoprawna odpowiedź: C, bo w SMAR głównym założeniem jest systematyczne modyfikowanie badań przez autorów oryginału.",
    "correctAnswer": 2
  },
  {
    "id": 7,
    "text": "Czym charakteryzuje się quasi-eksperyment?",
    "options": [
      "Brakiem grupy kontrolnej i randomizacji.",
      "Wykorzystywaniem jedynie zmiennych zależnych.",
      "Koniecznością stosowania złożonych planów eksperymentalnych.",
      "Losowym przydzielaniem uczestników do warunków badawczych."
    ],
    "explanation": "Wyjaśnienie pytania: Quasi-eksperyment to badanie przypominające eksperyment, ale zwykle bez pełnej randomizacji lub z brakującą grupą kontrolną. \
\n- Odp. A: Za: często w quasi-eksperymencie brakuje randomizacji, czasem nie ma grupy kontrolnej lub jest niewystarczająca. Przeciw: w niektórych quasi-eksperymentach bywa grupa kontrolna, ale wciąż brak randomizacji. \
\n- Odp. B: Za: nieprawda, używa się i zmiennych niezależnych (manipulowanych/wyodrębnianych). \
\n- Odp. C: Za: nie muszą być zawsze „złożone”. Przeciw: to nie definicja quasi. \
\n- Odp. D: Za: to raczej pełny eksperyment, nie quasi. \
\nPoprawna odpowiedź: A, bo quasi-eksperyment często pozbawiony jest randomizacji (i/lub grupy kontrolnej).",
    "correctAnswer": 0
  },
  {
    "id": 8,
    "text": "Który z poniższych jest zaletą planu grup zależnych?",
    "options": [
      "Brak efektów przeniesienia.",
      "Większa kontrola nad różnicami indywidualnymi.",
      "Szybsza procedura badawcza.",
      "Zwiększona trafność zewnętrzna."
    ],
    "explanation": "Wyjaśnienie pytania: Plan grup zależnych (within-subjects) ma m.in. zaletę większej kontroli różnic indywidualnych. \
\n- Odp. A: Za: wręcz przeciwnie, mogą się pojawiać efekty przeniesienia (order effects). \
\n- Odp. B: Za: ta sama osoba uczestniczy w różnych warunkach, co redukuje wpływ indywidualnych cech. To jest główna zaleta. \
\n- Odp. C: Za: niekoniecznie szybciej – często musimy badać te same osoby wiele razy. \
\n- Odp. D: Za: plan zależny wcale nie zwiększa trafności zewnętrznej. \
\nPoprawna odpowiedź: B, bo najważniejszą zaletą jest kontrola różnic indywidualnych.",
    "correctAnswer": 1
  },
  {
    "id": 9,
    "text": "Jaka jest główna wada stosowania testu Sobela w analizach mediacyjnych?",
    "options": [
      "Mała moc testu.",
      "Wysokie koszty obliczeniowe.",
      "Brak uwzględnienia błędów pomiaru.",
      "Konieczność stosowania dużych prób badawczych."
    ],
    "explanation": "Wyjaśnienie pytania: Test Sobela służy do weryfikacji istotności efektu mediacji. \
\n- Odp. A: Za: test Sobela bywa konserwatywny, co może skutkować małą mocą. Przeciw: to najczęściej wskazywana wada. \
\n- Odp. B: Za: nie jest on obliczeniowo drogi. \
\n- Odp. C: Za: to też bywa problemem, ale głównym zarzutem jest raczej konserwatywność i słabsza moc. \
\n- Odp. D: Za: w praktyce duże próby są wskazane, ale nie jest to definicyjna wada testu Sobela. \
\nPoprawna odpowiedź: A, bo test Sobela uchodzi za konserwatywny i ma mniej mocy niż np. procedury bootstrappingowe.",
    "correctAnswer": 0
  },
  {
    "id": 10,
    "text": "Co oznacza pojęcie \"metoda naukowa\"?",
    "options": [
      "Zbiór rezultatów badań naukowych",
      "Proces dochodzenia do wiedzy",
      "Organizacja wiedzy w formie teorii",
      "Opis zastosowania technologii w badaniach"
    ],
    "explanation": "Wyjaśnienie pytania: Metoda naukowa to systematyczny proces, dzięki któremu uzyskuje się wiedzę. \
\n- Odp. A: Za: to raczej wyniki, a nie metoda. \
\n- Odp. B: Za: istota – metoda naukowa to proces badawczy. \
\n- Odp. C: Za: organizacja wiedzy w teorie jest efektem, nie samym procesem. \
\n- Odp. D: Za: to bardziej opis techniki, nie całego procesu metodologicznego. \
\nPoprawna odpowiedź: B, bo metoda naukowa odnosi się do proceduralnego dojścia do wiedzy.",
    "correctAnswer": 1
  },
  {
    "id": 11,
    "text": "Czym jest mediacja w badaniach?",
    "options": [
      "Procesem weryfikacji hipotez",
      "Analizą mechanizmu relacji między zmiennymi",
      "Określeniem wpływu zmiennych zakłócających",
      "Testowaniem wpływu zmiennej zależnej na niezależną"
    ],
    "explanation": "Wyjaśnienie pytania: Mediacja polega na sprawdzeniu, czy pewna zmienna (mediator) wyjaśnia związek pomiędzy X i Y. \
\n- Odp. A: Za: to nie jest wyłącznie weryfikacja hipotez, tylko szczegółowa analiza mechanizmu. \
\n- Odp. B: Za: to definicja mediacji. \
\n- Odp. C: Za: zmienne zakłócające to raczej covariaty lub confoundy, nie mediator. \
\n- Odp. D: Za: odwrotny kierunek, my testujemy raczej X → M → Y. \
\nPoprawna odpowiedź: B, bo mediacja to analiza mechanizmu relacji między zmiennymi.",
    "correctAnswer": 1
  },
  {
    "id": 12,
    "text": "Które z poniższych NIE jest celem masowych replikacji?",
    "options": [
      "Weryfikacja powtarzalności efektu",
      "Zwiększenie mocy statystycznej",
      "Analiza zmiennych moderacyjnych",
      "Wprowadzenie nowych hipotez badawczych"
    ],
    "explanation": "Wyjaśnienie pytania: Masowe replikacje (many labs) najczęściej sprawdzają, czy dany efekt jest powtarzalny w różnych próbach. \
\n- Odp. A: Za: to jeden z głównych celów. \
\n- Odp. B: Za: masowe replikacje łączą dane, co zwiększa moc. \
\n- Odp. C: Za: mogą odkrywać moderatory, bo porównują różne konteksty. \
\n- Odp. D: Za: nie jest głównym celem masowych replikacji, bo raczej weryfikują istniejące hipotezy niż wprowadzają nowe. \
\nPoprawna odpowiedź: D, bo masowe replikacje z zasady nie służą formułowaniu nowatorskich hipotez, a raczej sprawdzeniu powtarzalności.",
    "correctAnswer": 3
  },
  {
    "id": 13,
    "text": "Jaka jest główna zaleta bootstrappingu?",
    "options": [
      "Mała moc testu",
      "Konserwatywny charakter analizy",
      "Eliminacja wpływu zmiennych zakłócających",
      "Możliwość estymacji błędu bez założeń o rozkładzie danych"
    ],
    "explanation": "Wyjaśnienie pytania: Bootstrapping polega na wielokrotnym losowaniu ze zbioru danych, aby oszacować rozkład statystyki bez silnych założeń o rozkładzie populacji. \
\n- Odp. A: Za: bywa bardziej elastyczny i często moc jest większa niż w testach konserwatywnych. \
\n- Odp. B: Za: może być konserwatywny, ale to nie najważniejsza zaleta. \
\n- Odp. C: Za: nie służy do eliminacji zmiennych zakłócających, to raczej metoda estymacji. \
\n- Odp. D: Za: to kluczowa zaleta – nie wymaga normalności rozkładu. Przeciw: brak. \
\nPoprawna odpowiedź: D, bo główną korzyścią jest estymacja przedziałów ufności itd. przy minimalnych założeniach o rozkładzie.",
    "correctAnswer": 3
  },
  {
    "id": 14,
    "text": "Co jest celem prerejestracji badania?",
    "options": [
      "Zmniejszenie kosztów badania",
      "Wyeliminowanie błędów proceduralnych",
      "Ograniczenie selektywnego raportowania wyników",
      "Podwyższenie trafności wewnętrznej"
    ],
    "explanation": "Wyjaśnienie pytania: Ponownie pytanie o prerejestrację. \
\n- Odp. A: Nie jest to główny cel. \
\n- Odp. B: Też nie jest głównym celem – może pomóc w unikaniu błędów, ale nie to jest kluczowe. \
\n- Odp. C: To najważniejszy powód – uniemożliwienie wybiórczego raportowania. \
\n- Odp. D: Prerejestracja nie podnosi sama w sobie trafności wewnętrznej. \
\nPoprawna odpowiedź: C, ograniczenie selektywnego raportowania wyników.",
    "correctAnswer": 2
  },
  {
    "id": 15,
    "text": "Co różni korelację od analizy przyczynowości?",
    "options": [
      "Korelacja pozwala na analizę zmiennych moderacyjnych",
      "Korelacja nie określa kierunku związku przyczynowego",
      "Analiza przyczynowości jest mniej złożona statystycznie",
      "Analiza przyczynowości wymaga większej próby badawczej"
    ],
    "explanation": "Wyjaśnienie pytania: Główna różnica – korelacja nie mówi, która zmienna jest przyczyną. \
\n- Odp. A: Za: można też testować moderację w modelach korelacyjnych. Nie jest to różnica definicyjna. \
\n- Odp. B: Za: kluczowa rzecz – korelacja nie przesądza o kierunku. \
\n- Odp. C: Za: analiza przyczynowa (eksperyment) bywa często bardziej złożona. \
\n- Odp. D: Za: rozmiar próby to kwestia wymagań statystycznych, nie definicja. \
\nPoprawna odpowiedź: B, bo korelacja nie określa kierunku przyczynowości.",
    "correctAnswer": 1
  },
  {
    "id": 16,
    "text": "Która z poniższych technik zwiększa trafność zewnętrzną?",
    "options": [
      "Randomizacja grup badawczych",
      "Wybór próby reprezentatywnej",
      "Manipulacja zmienną niezależną",
      "Kontrola zmiennych zakłócających"
    ],
    "explanation": "Wyjaśnienie pytania: Trafność zewnętrzna to możliwość uogólniania wyników na populację. \
\n- Odp. A: Randomizacja głównie wspiera trafność wewnętrzną. \
\n- Odp. B: Reprezentatywna próba poprawia możliwość generalizacji. \
\n- Odp. C: Manipulacja IV to klucz eksperymentu, ale nie wpływa na ogólną zewnętrzną trafność. \
\n- Odp. D: Kontrola zakłóceń to raczej trafność wewnętrzna. \
\nPoprawna odpowiedź: B, bo próba reprezentatywna zwiększa możliwość uogólnienia wniosków.",
    "correctAnswer": 1
  },
  {
    "id": 17,
    "text": "Co oznacza termin \"metaanaliza\"?",
    "options": [
      "Wielokrotne powtarzanie badania w różnych warunkach",
      "Statystyczne podsumowanie wyników wielu badań",
      "Analiza danych w czasie rzeczywistym",
      "Testowanie zmiennych zakłócających"
    ],
    "explanation": "Wyjaśnienie pytania: Metaanaliza to syntetyzowanie (ilościowe) wyników z wielu badań. \
\n- Odp. A: To raczej replikacja. \
\n- Odp. B: To definicja metaanalizy. \
\n- Odp. C: Nie dotyczy. \
\n- Odp. D: Może uwzględniać zmienne zakłócające, ale nie jest to definicja. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 18,
    "text": "Jaka jest wada stosowania zmiennych kontrolnych?",
    "options": [
      "Zwiększają koszty badania",
      "Mogą wprowadzać błędy statystyczne",
      "Mogą zmniejszyć trafność zewnętrzną",
      "Wymagają skomplikowanych narzędzi analitycznych"
    ],
    "explanation": "Wyjaśnienie pytania: Zmienne kontrolne służą do odseparowania wpływu czynników ubocznych, ale mogą utrudniać uogólnienie. \
\n- Odp. A: Za: czasem tak, ale nie jest to główna wada. \
\n- Odp. B: Za: błędy statystyczne mogą pojawić się przy nieprawidłowym włączeniu, ale główny problem to raczej złożoność modelu i ewentualna nadmierna kontrola. \
\n- Odp. C: Za: uwzględnianie zbyt wielu zmiennych kontrolnych może ograniczyć generalizowalność, bo warunki stają się zbyt specyficzne. \
\n- Odp. D: Za: nie zawsze wymaga to zaawansowanych metod, np. można stosować zwykłą regresję. \
\nPoprawna odpowiedź: C, bo włączanie licznych kontrol może zawężać zakres uogólniania.",
    "correctAnswer": 2
  },
  {
    "id": 19,
    "text": "Które z poniższych jest przykładem zmiennej moderującej?",
    "options": [
      "Zmienna losowa w eksperymencie",
      "Zmienna wpływająca na siłę efektu",
      "Zmienna kontrolna w badaniu pilotażowym",
      "Zmienna zależna w quasi-eksperymencie"
    ],
    "explanation": "Wyjaśnienie pytania: Moderator to czynnik, który modyfikuje (wzmacnia, osłabia, odwraca) związek między X a Y. \
\n- Odp. A: Za: zmienna losowa nie określa charakteru interakcji. \
\n- Odp. B: Za: to idealne wyjaśnienie moderacji. \
\n- Odp. C: Kontrolna to raczej czynnik uboczny. \
\n- Odp. D: Zmienna zależna jest czymś innym. \
\nPoprawna odpowiedź: B, bo moderator zmienia siłę/kierunek relacji.",
    "correctAnswer": 1
  },
  {
    "id": 20,
    "text": "Który rodzaj planu eliminuje efekty kolejności?",
    "options": [
      "Plan grup niezależnych",
      "Plan grup zależnych",
      "Plan mieszany",
      "Plan z randomizacją wewnętrzną"
    ],
    "explanation": "Wyjaśnienie pytania: Efekty kolejności (order effects) występują głównie w planach zależnych (badany jest narażony na kilka warunków). Gdy mamy całkowicie niezależne grupy – kolejność nie dotyczy tej samej osoby. \
\n- Odp. A: Za: tak, bo każdy warunek ma osobną grupę, a więc efekty kolejności nie występują dla jednego uczestnika. \
\n- Odp. B: Za: w zależnych efekty kolejności właśnie się pojawiają. \
\n- Odp. C: Za: plan mieszany to częściowo within, więc może mieć efekty kolejności. \
\n- Odp. D: Randomizacja wewnętrzna może tylko minimalizować, ale nie zawsze eliminuje. \
\nPoprawna odpowiedź: A, bo w planie grup niezależnych nie ma ekspozycji tej samej osoby na wiele warunków.",
    "correctAnswer": 0
  },
  {
    "id": 21,
    "text": "Co odróżnia SMAR od masowych replikacji?",
    "options": [
      "Masowe replikacje są prowadzone przez różnych badaczy",
      "SMAR wymaga większych zasobów finansowych",
      "Masowe replikacje analizują wpływ zmiennych zależnych",
      "SMAR koncentruje się na analizie korelacji"
    ],
    "explanation": "Wyjaśnienie pytania: SMAR – ten sam zespół, wiele autoreplikacji z modyfikacjami. Masowe replikacje – wiele zespołów, identyczny protokół. \
\n- Odp. A: Za: to właśnie cecha masowych replikacji. SMAR jest prowadzony przez zespół autorów. \
\n- Odp. B: Za: niekoniecznie SMAR jest droższy. \
\n- Odp. C: Za: w masowych replikacjach bada się ten sam efekt w wielu miejscach, ale nie chodzi wyłącznie o DV. \
\n- Odp. D: Za: SMAR nie dotyczy tylko korelacji. \
\nPoprawna odpowiedź: A, bo w masowych replikacjach mamy różnych badaczy, a w SMAR – oryginalny zespół.",
    "correctAnswer": 0
  },
  {
    "id": 22,
    "text": "Jaki jest główny cel prerejestracji hipotez?",
    "options": [
      "Wyeliminowanie błędów statystycznych",
      "Ograniczenie manipulacji wynikami",
      "Zwiększenie mocy statystycznej",
      "Weryfikacja procedur eksperymentalnych"
    ],
    "explanation": "Wyjaśnienie pytania: Prerejestracja hipotez służy przede wszystkim transparentności i unikaniu manipulacji danymi. \
\n- Odp. A: Za: nie eliminuje bezpośrednio błędów statystycznych. \
\n- Odp. B: Za: to najważniejsze – m.in. zapobieganie p-hackingowi. \
\n- Odp. C: Za: niekoniecznie. \
\n- Odp. D: Sprawdzenie procedur to raczej piloty, nie prerejestracja. \
\nPoprawna odpowiedź: B, czyli ograniczenie manipulacji wynikami (selektywność).",
    "correctAnswer": 1
  },
  {
    "id": 23,
    "text": "Co NIE jest zaletą planu grup zależnych?",
    "options": [
      "Zmniejszenie efektów różnic indywidualnych",
      "Większa moc statystyczna",
      "Eliminacja efektów kolejności",
      "Minimalizacja losowego szumu"
    ],
    "explanation": "Wyjaśnienie pytania: W planie grup zależnych porównujemy te same osoby w różnych warunkach. \
\n- Odp. A: Za: faktycznie różnice indywidualne się niwelują. \
\n- Odp. B: Za: moc statystyczna bywa większa, bo mniejsza wariancja międzyosobnicza. \
\n- Odp. C: Za: niestety występują efekty kolejności, więc nie są one wyeliminowane. \
\n- Odp. D: Za: z tego samego powodu co B – mniejsza wariancja. \
\nPoprawna odpowiedź: C, bo plan zależny nie eliminuje efektów kolejności.",
    "correctAnswer": 2
  },
  {
    "id": 24,
    "text": "Która z poniższych technik jest kluczowa dla trafności wewnętrznej?",
    "options": [
      "Randomizacja grup",
      "Zwiększenie wielkości próby",
      "Stosowanie wskaźników zewnętrznych",
      "Redukcja zmiennych zależnych"
    ],
    "explanation": "Wyjaśnienie pytania: Trafność wewnętrzna wiąże się głównie z kontrolą zmiennych zakłócających. \
\n- Odp. A: Za: randomizacja jest najważniejszą metodą kontroli. \
\n- Odp. B: Za: większa próba – głównie moc statystyczna. \
\n- Odp. C: Za: 'wskaźniki zewnętrzne' bardziej do walidacji zewnętrznej. \
\n- Odp. D: Za: samo ograniczenie DV niekoniecznie zwiększa trafność wewnętrzną. \
\nPoprawna odpowiedź: A, bo randomizacja jest kluczowa dla trafności wewnętrznej.",
    "correctAnswer": 0
  },
  {
    "id": 25,
    "text": "Co jest podstawowym celem analizy mediacyjnej?",
    "options": [
      "Zbadanie wpływu zmiennej moderującej",
      "Wyjaśnienie mechanizmów wpływu między zmiennymi",
      "Weryfikacja niezależności zmiennych",
      "Eliminacja zmiennych zakłócających"
    ],
    "explanation": "Wyjaśnienie pytania: Analiza mediacji dotyczy mechanizmu (jak X wpływa na Y przez M). \
\n- Odp. A: Moderacja – to inny proces. \
\n- Odp. B: To właśnie istota mediacji. \
\n- Odp. C: Niekoniecznie chodzi o niezależność zmiennych. \
\n- Odp. D: To raczej kontrola, a nie mediacja. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 26,
    "text": "Co oznacza \"trafność zewnętrzna\"?",
    "options": [
      "Wiarygodność zmiennych zależnych",
      "Możliwość generalizacji wyników na inne populacje",
      "Precyzja pomiaru zmiennych w badaniu",
      "Analiza zmiennych niezależnych"
    ],
    "explanation": "Wyjaśnienie pytania: Trafność zewnętrzna dotyczy generalizacji wyników. \
\n- Odp. A: To raczej rzetelność pomiaru. \
\n- Odp. B: Definicja trafności zewnętrznej. \
\n- Odp. C: Precyzja pomiaru dotyczy rzetelności/metod pomiarowych. \
\n- Odp. D: To raczej definicja projektowania eksperymentu. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 27,
    "text": "Jakie podejście proponuje Baron i Kenny (1986)?",
    "options": [
      "Model mediacji i moderacji",
      "Testowanie wielowymiarowych relacji",
      "Analizę zmiennych zakłócających",
      "Modelowanie danych bootstrappingiem"
    ],
    "explanation": "Wyjaśnienie pytania: Baron i Kenny (1986) – klasyczny model mediacji (4 kroki). \
\n- Odp. A: Głównie mediacja, choć wspomnieli też o moderacji, ale słynni są z mediacji. \
\n- Odp. B: Nie jest to 'wielowymiarowe'. \
\n- Odp. C: Chodzi o mediator, nie confound. \
\n- Odp. D: Bootstrapping pojawił się później w literaturze (Preacher, Hayes). \
\nPoprawna odpowiedź: A, bo to model mediacji (i moderacji), jednak najczęściej mówi się o mediacji.",
    "correctAnswer": 0
  },
  {
    "id": 28,
    "text": "Który efekt występuje w kontekście efektu ramowania?",
    "options": [
      "Lepsza ocena ryzyka",
      "Wpływ sposobu prezentacji informacji na decyzje",
      "Redukcja błędów poznawczych",
      "Wzrost trafności decyzji"
    ],
    "explanation": "Wyjaśnienie pytania: Efekt ramowania dotyczy zmiany preferencji w zależności od formy przedstawienia problemu. \
\n- Odp. A: Często prowadzi do błędnej oceny ryzyka. \
\n- Odp. B: To właściwa definicja framingu. \
\n- Odp. C: Efekt ramowania raczej błędy wzmaga niż redukuje. \
\n- Odp. D: Framing niekoniecznie zwiększa trafność. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 29,
    "text": "Co jest celem replikacji w naukach społecznych?",
    "options": [
      "Zwiększenie liczby uczestników",
      "Weryfikacja efektu w innych próbach",
      "Zmniejszenie zmienności w wynikach",
      "Analiza przyczyn efektów zakłócających"
    ],
    "explanation": "Wyjaśnienie pytania: Replikacje służą potwierdzeniu, czy efekt jest powtarzalny w różnych kontekstach. \
\n- Odp. A: Za: większa próba jest skutkiem ubocznym, ale nie celem. \
\n- Odp. B: Za: to definicja – sprawdzić, czy wynik jest powtarzalny. \
\n- Odp. C: Za: celem może być ocena wariancji, ale to raczej konsekwencja. \
\n- Odp. D: Za: to raczej badanie confoundów, a nie prosta replikacja. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 30,
    "text": "Jaka jest wada stosowania efektu wprawy?",
    "options": [
      "Zmniejszenie trafności wewnętrznej",
      "Większe wymagania czasowe",
      "Trudności w rekrutacji badanych",
      "Brak efektów powtarzalności"
    ],
    "explanation": "Wyjaśnienie pytania: Efekt wprawy (practice effect) oznacza, że przy powtarzaniu zadań uczestnicy się uczą, co zagraża trafności wewnętrznej (zwłaszcza w planie zależnym). \
\n- Odp. A: Za: tak, bo wyniki mogą być wypaczone przez doświadczenie uczestnika. \
\n- Odp. B: Za: może też wydłużyć procedurę, ale główny problem to trafność wewnętrzna. \
\n- Odp. C: Niekoniecznie. \
\n- Odp. D: Nie oznacza braku powtarzalności, raczej zniekształcenie wyników. \
\nPoprawna odpowiedź: A, bo efekt wprawy obniża trafność wewnętrzną (mogą wystąpić efekty kolejności).",
    "correctAnswer": 0
  },
  {
    "id": 31,
    "text": "Przy analizie mediacji obliczono, że efekt pośredni mieści się w przedziale ufności (-0,05; 0,2). Na podstawie obliczeń można wnioskować, że:",
    "options": [
      "doszło do mediacji całkowitej",
      "doszło do mediacji częściowej",
      "nie dochodzi do mediacji",
      "rozkład dla badanej zmiennej nie jest normalny"
    ],
    "explanation": "Wyjaśnienie pytania: Jeśli przedział ufności dla efektu pośredniego zawiera 0, to efekt mediacji nie jest istotny. \
\n- Odp. 1: Mediacja całkowita oznacza, że efekt bezpośredni spada do zera. Brak dowodów. \
\n- Odp. 2: Częściowa wymaga istotnego efektu pośredniego (przedział nie obejmuje 0). Tu obejmuje 0, więc brak istotności. \
\n- Odp. 3: Skoro 0 należy do przedziału, nie ma istotnej mediacji (statystycznie). \
\n- Odp. 4: Nie dotyczy, normalność rozkładu to inna kwestia. \
\nPoprawna odpowiedź: 3 (nie dochodzi do mediacji, bo CI zawiera 0).",
    "correctAnswer": 2
  },
  {
    "id": 32,
    "text": "Jaki jest główny cel eksperymentu w psychologii?",
    "options": [
      "Badanie korelacji między zmiennymi",
      "Przeprowadzenie badań w warunkach naturalnych",
      "Wykazanie związku przyczynowo-skutkowego",
      "Zmniejszenie wpływu zmiennych zakłócających"
    ],
    "explanation": "Wyjaśnienie pytania: Eksperyment to metoda pozwalająca na wnioskowanie przyczynowe (przy założeniu kontroli zmiennych). \
\n- Odp. A: Korelacja nie rozstrzyga przyczynowości. \
\n- Odp. B: Warunki naturalne to raczej obserwacja naturalna, niekoniecznie eksperyment. \
\n- Odp. C: Głównym celem jest ustalenie, czy X powoduje Y. \
\n- Odp. D: To też ważne, ale pośrednie – celem jest związek przyczynowy. \
\nPoprawna odpowiedź: C.",
    "correctAnswer": 2
  },
  {
    "id": 33,
    "text": "Czym charakteryzuje się quasi-eksperyment?",
    "options": [
      "Zawiera pełną randomizację próby",
      "Nie posiada grupy kontrolnej",
      "Opiera się na analizie korelacji",
      "Wykorzystuje złożone narzędzia pomiarowe"
    ],
    "explanation": "Wyjaśnienie pytania: Quasi-eksperyment często jest pozbawiony randomizacji lub pełnej kontroli. Bywa też bez grupy kontrolnej. \
\n- Odp. A: Brak randomizacji to właśnie cecha quasi-eksperymentu (więc nie ma pełnej randomiz.) \
\n- Odp. B: Często tak, ale czasem ma, czasem nie. \
\n- Odp. C: Może się opierać na manipulacji, nie tylko korelacji. \
\n- Odp. D: To nie jest definicyjne. \
\nW kontekście najczęściej: brak randomizacji i/lub brak kontrolnej. Najbliżej klasycznej definicji jest B, choć bywa różnie: (A jest odwrotnością). \
\nPoprawna odpowiedź: B (najczęstsza cecha to brak pełnej grupy kontrolnej lub brak randomizacji).",
    "correctAnswer": 1
  },
  {
    "id": 34,
    "text": "Jaka jest główna wada planu grup niezależnych?",
    "options": [
      "Zmniejszenie trafności zewnętrznej",
      "Wysokie koszty finansowe",
      "Obecność efektów kolejności",
      "Niższa moc statystyczna niż w grupach zależnych"
    ],
    "explanation": "Wyjaśnienie pytania: W planach niezależnych każda osoba jest przypisana do jednego warunku. \
\n- Odp. A: Zewnętrzna trafność niekoniecznie się zmniejsza. \
\n- Odp. B: Czasem jest droższy (więcej osób), ale bywa to dyskusyjne. \
\n- Odp. C: Efekty kolejności występują raczej w planach zależnych. \
\n- Odp. D: To jest główna wada – aby uzyskać podobną moc, potrzebna jest większa grupa, przez co moc statystyczna może być relatywnie niższa przy tej samej liczbie badanych. \
\nPoprawna odpowiedź: D.",
    "correctAnswer": 3
  },
  {
    "id": 35,
    "text": "Która z poniższych metod pomaga eliminować wpływ zmiennych zakłócających?",
    "options": [
      "Manipulacja zmiennymi zależnymi",
      "Randomizacja grup",
      "Analiza korelacji",
      "Wzrost liczby zmiennych niezależnych"
    ],
    "explanation": "Wyjaśnienie pytania: Eliminacja zmiennych zakłócających to zwykle random assignment. \
\n- Odp. A: Manipulujemy zwykle zmienną niezależną, nie zależną. \
\n- Odp. B: Randomizacja jest kluczowa do kontrolowania confoundów. \
\n- Odp. C: Korelacja nie kontroluje zakłóceń. \
\n- Odp. D: Więcej IV niekoniecznie eliminuje confoundy. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 36,
    "text": "Jaka jest różnica między mediacją a moderacją?",
    "options": [
      "Mediacja bada wpływ zmiennych zależnych",
      "Moderacja wskazuje, w jakich warunkach efekt występuje",
      "Mediacja bada zmienność w czasie",
      "Moderacja zmienia wyniki badań"
    ],
    "explanation": "Wyjaśnienie pytania: Mediator wyjaśnia 'dlaczego' X wpływa na Y, a moderator 'kiedy' i 'dla kogo' efekt jest silniejszy/słabszy. \
\n- Odp. A: To nie definicja mediacji. \
\n- Odp. B: Właśnie to robi moderator – określa warunki występowania. \
\n- Odp. C: To raczej interwencje długofalowe, nie definicja mediacji. \
\n- Odp. D: Moderator zmienia (modyfikuje) związek, ale stwierdzenie jest zbyt ogólne. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 37,
    "text": "Co jest celem złożonych planów eksperymentalnych?",
    "options": [
      "Analiza więcej niż jednej zmiennej zależnej",
      "Uwzględnienie dwóch lub więcej zmiennych niezależnych",
      "Ułatwienie procesu randomizacji grup",
      "Minimalizacja błędów pomiarowych"
    ],
    "explanation": "Wyjaśnienie pytania: Złożony plan (np. plan wieloczynnikowy) obejmuje kilka czynników niezależnych naraz. \
\n- Odp. A: Można też mierzyć wiele DV, ale główny sens 'czynnikowego' to ≥2 IV. \
\n- Odp. B: To definicja planu wieloczynnikowego. \
\n- Odp. C: Nie zawsze jest łatwiejsza randomizacja. \
\n- Odp. D: Nie to jest głównym celem. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 38,
    "text": "Która metoda jest stosowana do oceny zmiennych pośrednich?",
    "options": [
      "Testowanie mediacji",
      "Korelacja",
      "Moderacja",
      "Randomizacja"
    ],
    "explanation": "Wyjaśnienie pytania: Zmienne pośrednie = mediatory. \
\n- Odp. A: Mediacja służy do oceny wpływu pośredniego. \
\n- Odp. B: Korelacja to zależność, nie wyjaśnianie procesu pośredniego. \
\n- Odp. C: Moderacja dotyczy warunków, nie mechanizmów. \
\n- Odp. D: Randomizacja to sposób przypisania do grup. \
\nPoprawna odpowiedź: A.",
    "correctAnswer": 0
  },
  {
    "id": 39,
    "text": "Które podejście jest zalecane do testowania efektów pośrednich?",
    "options": [
      "Test Sobela",
      "Randomizacja grup",
      "Analiza korelacji",
      "Analiza regresji prostej"
    ],
    "explanation": "Wyjaśnienie pytania: Współcześnie poleca się raczej procedury bootstrap w analizie mediacji, niemniej historycznie stosowano Test Sobela. W kontekście klasycznym – Test Sobela jest do tego. \
\n- Odp. A: Był klasycznym podejściem do mediacji. \
\n- Odp. B, C, D nie służą stricte do testowania mediacji. \
\nPoprawna odpowiedź: A (pomimo że obecnie popularniejszy jest bootstrap).",
    "correctAnswer": 0
  },
  {
    "id": 40,
    "text": "Co to jest SMAR?",
    "options": [
      "Strategie modyfikacji zmiennych w badaniach korelacyjnych",
      "Systematyczne modyfikacje w autoreplikacjach",
      "Zbiór zasad replikacji masowej",
      "Standardowa analiza mediacyjna i moderacyjna"
    ],
    "explanation": "Wyjaśnienie pytania: SMAR to Systematic Modifications in Auto-Replications (systematyczne modyfikacje w autoreplikacjach). \
\n- Odp. B: To trafna definicja. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 41,
    "text": "Przy analizie mediacji obliczono, że efekt pośredni mieści się w przedziale ufności (-0,05; 0,2). Na podstawie obliczeń można wnioskować, że:",
    "options": [
      "doszło do mediacji całkowitej",
      "doszło do mediacji częściowej",
      "nie dochodzi do mediacji",
      "rozkład dla badanej zmiennej nie jest normalny"
    ],
    "explanation": "To pytanie powtórzone. Wyjaśnienie takie samo: jeśli 0 jest w przedziale, nie ma istotnego efektu pośredniego. \
\nPoprawna odpowiedź: 3 (nie dochodzi do mediacji).",
    "correctAnswer": 2
  },
  {
    "id": 42,
    "text": "Który z poniższych planów eksperymentalnych najbardziej zwiększy moc testu?",
    "options": [
      "plan grup zależnych",
      "plan grup niezależnych",
      "plan jednogrupowy",
      "plan eksperymentalny nie będzie mieć wpływu na moc testu"
    ],
    "explanation": "Wyjaśnienie pytania: Plan grup zależnych (within-subjects) zazwyczaj daje większą moc statystyczną przy tej samej liczebności. \
\n- Odp. A: Za: to właśnie on często zwiększa moc (mniejsza wariancja między uczestnikami). \
\n- Odp. B: Niższa moc przy tej samej n. \
\n- Odp. C: Plan jednogrupowy bez porównania – trudno mówić o mocy w klasycznym sensie (brak grupy kontrolnej). \
\n- Odp. D: Plan może mieć wpływ na moc. \
\nPoprawna odpowiedź: A.",
    "correctAnswer": 0
  },
  {
    "id": 43,
    "text": "Badanie przeprowadzone w planie niezależnym analizuje wpływ trzech zmiennych niezależnych na samopoczucie. Zmienne to: (1) Aktywność fizyczna: 2 poziomy, (2) Dieta: 3 poziomy, (3) Czas snu: 3 poziomy. Ile warunków eksperymentalnych występuje?",
    "options": [
      "3 warunki",
      "2 warunki",
      "18 warunków",
      "12 warunków"
    ],
    "explanation": "Wyjaśnienie pytania: Liczba warunków w planie czynnikowym = iloczyn poziomów: 2 × 3 × 3 = 18. \
\nPoprawna odpowiedź: 18 (C).",
    "correctAnswer": 2
  },
  {
    "id": 44,
    "text": "Co to jest SMAR?",
    "options": [
      "Strategia polegająca na wielokrotnym powtarzaniu przez ten sam zespół autorów badania",
      "Utworzenie nowego rozkładu wyników z posiadanej próby (bootstrapping)",
      "Jak najdokładniejsze powtórzenie oryginalnej procedury badawczej przez niezależną grupę",
      "Podsumowanie ilościowe wyników wielu badań (meta-analiza)"
    ],
    "explanation": "Wyjaśnienie pytania: Zgodnie z wcześniejszym opisem, SMAR to systematyczne modyfikacje w autoreplikacjach – zwykle przez ten sam zespół. \
\nPoprawna odpowiedź: A.",
    "correctAnswer": 0
  },
  {
    "id": 45,
    "text": "Czym zajmuje się metodologia naukowa?",
    "options": [
      "Wyłącznie badaniami ilościowymi",
      "Organizacją eksperymentów laboratoryjnych",
      "Opisem, wyjaśnianiem i przewidywaniem zjawisk naukowych",
      "Tworzeniem wyłącznie hipotez badawczych"
    ],
    "explanation": "Wyjaśnienie: Metodologia naukowa obejmuje całokształt podejść do badania rzeczywistości (opisywanie, przewidywanie, testowanie). \
\n- Odp. A: Ograniczenie do ilościowych jest błędne (są też jakościowe). \
\n- Odp. B: To wąski aspekt. \
\n- Odp. C: To właściwe, szerokie ujęcie metodologii. \
\n- Odp. D: Nie tylko hipotezy, ale też procedury, analizy, wnioskowania. \
\nPoprawna odpowiedź: C.",
    "correctAnswer": 2
  },
  {
    "id": 46,
    "text": "Który z wymienionych efektów jest związany z badaniem Tversky'ego i Kahnemana (1981)?",
    "options": [
      "Efekt halo",
      "Efekt ramowania",
      "Efekt potwierdzenia",
      "Efekt kontrastu"
    ],
    "explanation": "Wyjaśnienie pytania: Tversky i Kahneman opisali framing effect (efekt ramowania) w kontekście teorii perspektywy. \
\nPoprawna odpowiedź: B (efekt ramowania).",
    "correctAnswer": 1
  },
  {
    "id": 47,
    "text": "W jakich warunkach należy stosować plany grup zależnych?",
    "options": [
      "Gdy badania wymagają minimalizacji różnic indywidualnych",
      "Gdy efekt wprawy nie wpływa na wyniki",
      "Gdy liczba uczestników jest nieograniczona",
      "Gdy priorytetem jest uproszczenie procedury badawczej"
    ],
    "explanation": "Wyjaśnienie pytania: Plany zależne stosujemy, kiedy chcemy zminimalizować wpływ różnic indywidualnych i możemy zaakceptować potencjalne efekty kolejności. \
\nPoprawna odpowiedź: A.",
    "correctAnswer": 0
  },
  {
    "id": 48,
    "text": "Który rodzaj replikacji zakłada najwierniejsze odwzorowanie oryginalnego badania?",
    "options": [
      "Replikacja konceptualna",
      "Replikacja dokładna",
      "Meta-analiza",
      "Replikacja rozszerzająca"
    ],
    "explanation": "Wyjaśnienie pytania: Replikacja dokładna (direct replication) to odtworzenie badania z możliwie identyczną procedurą. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 49,
    "text": "Jaki jest podstawowy cel mediacji w badaniach?",
    "options": [
      "Ustalenie związków przyczynowych",
      "Zrozumienie mechanizmu wpływu jednej zmiennej na drugą",
      "Określenie różnic między grupami",
      "Weryfikacja hipotezy zerowej"
    ],
    "explanation": "Wyjaśnienie pytania: Mediacja to zrozumienie, w jaki sposób X wpływa na Y. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 50,
    "text": "Co jest głównym celem prerejestracji badań?",
    "options": [
      "Skrócenie czasu trwania badania",
      "Zwiększenie transparentności i wiarygodności badania",
      "Redukcja kosztów finansowych projektu",
      "Minimalizacja liczby uczestników"
    ],
    "explanation": "Wyjaśnienie pytania: Prerejestracja to jawne spisanie planów i hipotez w celu transparentności i uniknięcia manipulacji analizą. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 51,
    "text": "Które z poniższych jest przykładem planu mieszanych grup eksperymentalnych?",
    "options": [
      "Plan grup niezależnych",
      "Plan grup zależnych",
      "Plan z manipulacją między- i wewnątrzosobową",
      "Plan quasi-eksperymentalny"
    ],
    "explanation": "Wyjaśnienie pytania: Plan mieszany (mixed design) łączy czynniki between-subject i within-subject. \
\nPoprawna odpowiedź: C.",
    "correctAnswer": 2
  },
  {
    "id": 52,
    "text": "Co może ograniczać trafność zewnętrzną badania?",
    "options": [
      "Złożoność analizy statystycznej",
      "Istotny efekt interakcyjny",
      "Niska liczba uczestników",
      "Brak efektów interakcyjnych"
    ],
    "explanation": "Wyjaśnienie pytania: Jeśli występuje silna interakcja, to efekt główny nie jest uniwersalny, co może ograniczać uogólnienie. \
\nPoprawna odpowiedź: B (istotny efekt interakcyjny może oznaczać, że zależności zachodzą tylko w pewnych warunkach).",
    "correctAnswer": 1
  },
  {
    "id": 53,
    "text": "Jakie błędy statystyczne opisuje typ I i typ II?",
    "options": [
      "Złe określenie populacji i zmiennych",
      "Fałszywe odrzucenie H0 i nieodrzucenie fałszywej H0",
      "Źle dobrane metody analizy i interpretacji",
      "Nieprawidłowe losowanie próby badawczej"
    ],
    "explanation": "Wyjaśnienie pytania: Typ I – odrzucamy H0, choć jest prawdziwa (fałszywy alarm). Typ II – nie odrzucamy H0, choć jest fałszywa (przeoczenie efektu). \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 54,
    "text": "Co charakteryzuje \"multiverse analysis\"?",
    "options": [
      "Badanie jednej hipotezy w wielu laboratoriach",
      "Testowanie wielu możliwych analiz dla tego samego zbioru danych",
      "Wykorzystywanie wielu zmiennych niezależnych",
      "Przeprowadzanie meta-analizy"
    ],
    "explanation": "Wyjaśnienie pytania: 'Multiverse analysis' to uruchamianie wielu wariantów analizy na tych samych danych w celu sprawdzenia stabilności wyników. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 55,
    "text": "Które narzędzie jest używane do estymacji wielkości próby w badaniach?",
    "options": [
      "Bootstrapping",
      "Analiza mocy testu",
      "Analiza kontrastów",
      "Test Sobela"
    ],
    "explanation": "Wyjaśnienie pytania: Najczęściej do wyliczenia potrzebnej liczby uczestników używamy analizy mocy (np. G*Power). \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 56,
    "text": "Czym jest \"p-hacking\"?",
    "options": [
      "Metodą redukcji liczby zmiennych",
      "Manipulowaniem analizą danych w celu uzyskania istotnych wyników",
      "Stosowaniem bootstrappingu w analizie",
      "Technikiem dobierania grup kontrolnych"
    ],
    "explanation": "Wyjaśnienie pytania: p-hacking – wielokrotne eksplorowanie danych, aby uzyskać p < .05. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 57,
    "text": "W eksperymencie typu 2 x 2, ile warunków eksperymentalnych może wystąpić?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "explanation": "Wyjaśnienie pytania: Iloczyn poziomów 2 × 2 = 4 warunki. \
\nPoprawna odpowiedź: B (4).",
    "correctAnswer": 1
  },
  {
    "id": 58,
    "text": "Które z poniższych pojęć odnosi się do zmiennej, która wpływa na siłę lub kierunek związku między innymi zmiennymi?",
    "options": [
      "Mediator",
      "Moderator",
      "Zmienna zależna",
      "Zmienna kontrolna"
    ],
    "explanation": "Wyjaśnienie pytania: Moderator określa warunki czy też siłę efektu X→Y. \
\nPoprawna odpowiedź: B (Moderator).",
    "correctAnswer": 1
  },
  {
    "id": 59,
    "text": "Co oznacza \"efekt sufitu\" w eksperymentach?",
    "options": [
      "Wyniki uczestników osiągają możliwe maksimum",
      "Wyniki uczestników są rozproszone na całej skali",
      "Wyniki uczestników osiągają możliwe minimum",
      "Wyniki uczestników różnią się znacznie od średniej"
    ],
    "explanation": "Wyjaśnienie pytania: Efekt sufitu (ceiling effect) – gdy badani szybko osiągają najwyższe wartości skali. \
\nPoprawna odpowiedź: A.",
    "correctAnswer": 0
  },
  {
    "id": 60,
    "text": "W jakim celu stosuje się metodę bootstrappingu?",
    "options": [
      "Do losowego doboru próby",
      "Do estymacji rozkładu statystyki na podstawie próby",
      "Do zmniejszania wielkości próby",
      "Do testowania efektów głównych"
    ],
    "explanation": "Wyjaśnienie pytania: Bootstrapping polega na wielokrotnym próbkowaniu z danej próby w celu oszacowania rozkładu statystyki. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 61,
    "text": "Jakie są zalety planów grup zależnych?",
    "options": [
      "Minimalizowanie efektów kolejności",
      "Większa moc statystyczna i kontrola różnic indywidualnych",
      "Skrócenie czasu trwania eksperymentu",
      "Zwiększenie liczby uczestników"
    ],
    "explanation": "Wyjaśnienie pytania: Zaletą planów zależnych jest m.in. większa moc i eliminacja różnic osobniczych. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 62,
    "text": "Jakie są zalety prerejestracji wyników?",
    "options": [
      "Redukcja liczby analiz statystycznych",
      "Ograniczenie selektywnego raportowania wyników",
      "Zwiększenie liczby hipotez badawczych",
      "Skrócenie czasu trwania badań"
    ],
    "explanation": "Wyjaśnienie pytania: Prerejestracja chroni przed wybiórczym raportowaniem. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 63,
    "text": "Jak definiujemy \"meta-analizę\"?",
    "options": [
      "Badanie jednego eksperymentu w wielu laboratoriach",
      "Podsumowanie wyników wielu badań na ten sam temat",
      "Przeprowadzenie replikacji konceptualnej",
      "Testowanie hipotezy w jednym laboratorium"
    ],
    "explanation": "Wyjaśnienie pytania: Meta-analiza to statystyczna synteza wielu badań. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 64,
    "text": "Jakie są zalety wieloczynnikowych planów badawczych?",
    "options": [
      "Ograniczenie liczby zmiennych zależnych",
      "Możliwość analizy efektów głównych i interakcji",
      "Łatwość interpretacji wyników",
      "Redukcja liczby uczestników"
    ],
    "explanation": "Wyjaśnienie pytania: Wieloczynnikowe plany (factorial designs) pozwalają badać efekty główne i interakcje kilku IV jednocześnie. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 65,
    "text": "Co oznacza \"replikacja rozszerzająca\"?",
    "options": [
      "Powtórzenie badania w niezmienionej formie",
      "Wprowadzenie dodatkowych zmiennych do replikowanego badania",
      "Analiza danych pierwotnych",
      "Zmianę metody zbierania danych w celu poprawy wyników"
    ],
    "explanation": "Wyjaśnienie pytania: Replikacja rozszerzająca (replication + extension) – powtarzamy oryginał plus dokładamy nowy element. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 66,
    "text": "Jaką rolę pełni test Sobela w analizie mediacji?",
    "options": [
      "Weryfikację istotności efektów pośrednich",
      "Analizę związków między zmiennymi niezależnymi",
      "Określenie różnic między grupami badawczymi",
      "Testowanie hipotez dotyczących moderacji"
    ],
    "explanation": "Wyjaśnienie pytania: Test Sobela ocenia, czy efekt mediacji (pośredni) jest istotny statystycznie. \
\nPoprawna odpowiedź: A.",
    "correctAnswer": 0
  },
  {
    "id": 67,
    "text": "Co opisuje funkcja wartości w teorii perspektywy Tversky'ego i Kahnemana?",
    "options": [
      "Sposób przetwarzania informacji emocjonalnych",
      "Subiektywne postrzeganie zysków i strat",
      "Mechanizm podejmowania decyzji w warunkach pewności",
      "Relację między zmiennymi niezależnymi i zależnymi"
    ],
    "explanation": "Wyjaśnienie pytania: W teorii perspektywy (prospect theory) funkcja wartości opisuje, jak ludzie subiektywnie postrzegają zyski i straty, zwykle inaczej wyceniają straty niż zyski. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 68,
    "text": "W jakim celu stosuje się analizę mocy testu a priori?",
    "options": [
      "Do wyliczenia wielkości efektu w analizie post hoc",
      "Do określenia minimalnej liczby uczestników potrzebnych do badania",
      "Do oszacowania wpływu moderatorów w badaniu",
      "Do zwiększenia liczby hipotez badawczych"
    ],
    "explanation": "Wyjaśnienie pytania: Analiza mocy a priori służy do ustalenia wymaganej liczebności próby, by wykryć efekt o założonej wielkości z daną mocą. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 69,
    "text": "Co można zrobić by wykazać stabilność i powtarzalność efektu?",
    "options": [
      "SMAR",
      "REPLIKACJE",
      "META-ANALIZĘ",
      "WSZYSTKIE ODPOWIEDZI SĄ POPRAWNE"
    ],
    "explanation": "Wyjaśnienie pytania: Stabilność efektu można sprawdzić poprzez różne rodzaje replikacji (auto-, masowe) i przez meta-analizy, czy SMAR. \
\nPoprawna odpowiedź: D, bo wszystkie to sposoby potwierdzania powtarzalności.",
    "correctAnswer": 3
  },
  {
    "id": 70,
    "text": "Plan eksperymentalny grup zależnych to inaczej:",
    "options": [
      "MIĘDZYOSOBOWY",
      "WEWNĄTRZ OSOBOWY",
      "ZŁOŻONY",
      "CZYNNIKOWY"
    ],
    "explanation": "Wyjaśnienie pytania: Plan zależny = within-subject = wewnątrzosobowy. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 71,
    "text": "W planie eksperymentalnym czynnikowym ile może być zmiennych niezależnych?",
    "options": [
      "Zero",
      "Jedna",
      "Dwie",
      "Nie istnieje plan czynnikowy"
    ],
    "explanation": "Wyjaśnienie pytania: Plan czynnikowy dotyczy >=2 zmiennych niezależnych (czynników). Gdy jest jedna IV, to nie jest 'czynnikowy' w sensie wieloczynnikowym. Zwykle mówimy, że plan czynnikowy to co najmniej 2. \
\nPoprawna odpowiedź: C (co najmniej dwie).",
    "correctAnswer": 2
  },
  {
    "id": 72,
    "text": "Istotny efekt moderacyjny świadczy o tym, że:",
    "options": [
      "efekt główny NIE jest uniwersalny i ma mniejszą trafność zewnętrzną",
      "efekt główny jest uniwersalny ale ma mniejszą trafność zewnętrzną",
      "efekt główny jest uniwersalny ale ma większą trafność zewnętrzną",
      "Efekt główny NIE jest uniwersalny ale ma większą trafność zewnętrzną"
    ],
    "explanation": "Wyjaśnienie pytania: Kiedy jest istotna moderacja, oznacza to, że relacja zależy od wartości moderatora. Efekt nie jest wtedy jednolity (uniwersalny) we wszystkich warunkach, co ogranicza generalizację. \
\nPoprawna odpowiedź: A, bo skoro jest moderacja, efekt nie jest uniwersalny i przekłada się to raczej na niższą trafność zewnętrzną (ogólne uogólnienie spada).",
    "correctAnswer": 0
  },
  {
    "id": 73,
    "text": "W jaki sposób można uniknąć problemu z wystąpieniem charakteru skokowego moderacji lub charakteru nieliniowego moderacji?",
    "options": [
      "zadbać o homogeniczność próby badawczej",
      "zadbać o heterogeniczność próby badawczej",
      "wyeliminować różnice między grupami badawczymi poprzez randomizację",
      "nie mamy wpływu na wynik moderacji"
    ],
    "explanation": "Krótko: Skokowy czy nieliniowy charakter moderacji może wynikać z tego, że próba jest mocno zróżnicowana w obszarach skrajnych i brak jest płynnego przejścia. Zadbawszy o różnorodność (heterogeniczność), możemy lepiej uchwycić ciągłe przejścia, a nie skoki. \
\nPoprawna odpowiedź: 2 (zadbać o heterogeniczność próby), aby różne poziomy moderatora były dobrze reprezentowane.",
    "correctAnswer": 1
  },
  {
    "id": 74,
    "text": "Replikacja zawsze musi być:",
    "options": [
      "dokładnym odzwierciedleniem oryginalnego badania",
      "przeprowadzona przez niezależny zespół badawczy",
      "eksperymentem",
      "wykonana na oryginalnej próbie badawczej"
    ],
    "explanation": "Wyjaśnienie pytania: Replikacja nie zawsze jest 1:1 (może być też konceptualna). Nie musi być przeprowadzana przez niezależny zespół (choć to pożądane). Nie zawsze musi być eksperymentem, można replikować korelacyjnie. Nie musi używać oryginalnej próby. \
\nPoprawna odpowiedź: Żadna z nich – w tym pytaniu wszystkie są fałszywe, bo replikacja \"nie zawsze musi być\" taką formą. Jeśli musimy wybrać jedną, to pytanie sygnalizuje, że żadna z tych cech nie jest wymagana \"zawsze\". Najprawdopodobniej pytanie sugeruje: żadna z odpowiedzi nie jest poprawna. ",
    "correctAnswer": -1
  },
  {
    "id": 75,
    "text": "Jakie może być zagrożenie przeprowadzenia replikacji przez tego samego autora oryginalnego badania?",
    "options": [
      "W sposób nieświadomy może wpłynąć na zniekształcenie efektu",
      "Zawsze prowadzi do błędów metodologicznych",
      "Utrudnia analizę wyników przez niezależne zespoły",
      "Wyklucza możliwość dokładnej replikacji w przyszłości"
    ],
    "explanation": "Wyjaśnienie: Główny problem to ewentualne \"confirmation bias\" – autor może (nawet nieświadomie) sprzyjać efektowi. \
\nPoprawna odpowiedź: A.",
    "correctAnswer": 0
  },
  {
    "id": 76,
    "text": "Badacze przeprowadzili replikację efektu, który nie został potwierdzony w ich badaniu. Co to oznacza?",
    "options": [
      "Autor oryginalnego badania w sposób nieetyczny zmodyfikował proces badawczy",
      "Badacze popełnili błąd podczas przeprowadzania replikacji",
      "badacze musieli wykonać replikację w innym kraju",
      "Brak potwierdzenia efektu w replikacji nie oznacza, że efekt ten nie występuje w ogóle"
    ],
    "explanation": "Wyjaśnienie pytania: Jedna replikacja bez efektu nie dowodzi fałszu oryginału definitywnie. \
\nPoprawna odpowiedź: D, bo brak potwierdzenia w jednej replikacji nie oznacza całkowitego braku efektu.",
    "correctAnswer": 3
  },
  {
    "id": 77,
    "text": "Kilka niezależnych zespołów badawczych z różnych uniwersytetów przeprowadziło badanie, w którym dokładnie odwzorowano procedurę pewnego badania w celu weryfikacji oryginalnego efektu. Jaki rodzaj badania przeprowadzono?",
    "options": [
      "korelację",
      "replikację masową",
      "SMAR",
      "metaanalizę"
    ],
    "explanation": "Wyjaśnienie: Replikacja masowa (many labs) – wielozespołowa, ta sama procedura. \
\nPoprawna odpowiedź: B (replikacja masowa).",
    "correctAnswer": 1
  },
  {
    "id": 78,
    "text": "Zespół badawczy przeprowadził 5 autoreplikacji. W pierwszych 4 badaniach efekt został potwierdzony, jednak w ostatnim efekt się nie potwierdził. Co powinni zrobić badacze?",
    "options": [
      "zaraportować wszystkie uzyskane wyniki",
      "zaraportować tylko ostatnie badanie",
      "zaraportować badania potwierdzające efekt, pomijając odwrócony efekt",
      "badacze nie powinni raportować tych badań"
    ],
    "explanation": "Wyjaśnienie pytania: Rzetelność naukowa wymaga pełnego raportowania, nawet gdy wyniki są sprzeczne. \
\nPoprawna odpowiedź: A – raportujemy wszystkie.",
    "correctAnswer": 0
  },
  {
    "id": 79,
    "text": "Co powinni zrobić badacze, aby zwiększyć trafność wewnętrzną w badaniu autoreplikacyjnym?",
    "options": [
      "zwiększyć trafność zewnętrzną",
      "zwiększyć rzetelność",
      "zwiększyć siłę manipulacji",
      "wykorzystać słabiej oddziałujące bodźce"
    ],
    "explanation": "Wyjaśnienie pytania: Aby wzmocnić trafność wewnętrzną, można zwiększyć siłę manipulacji (bardziej wyraźny kontrast między warunkami), kontrolę nad zmiennymi ubocznymi itd. \
\nPoprawna odpowiedź: C (zwiększyć siłę manipulacji).",
    "correctAnswer": 2
  },
  {
    "id": 80,
    "text": "W modelu mediacji seryjnej ścieżka (d) między M1 a M2 okazała się nieistotna statystycznie. O czym to świadczy?",
    "options": [
      "dochodzi do mediacji częściowej",
      "dochodzi do mediacji całkowitej",
      "dochodzi do mediacji seryjnej",
      "nie ma wystarczających dowodów na wpływ M1 na M2"
    ],
    "explanation": "Wyjaśnienie pytania: W mediacji seryjnej M1 → M2 jest kluczowe, by 'przekazywać' efekt. Jeśli ścieżka d jest nieistotna, to M1 nie wyjaśnia statystycznie zjawiska przez M2. \
\nPoprawna odpowiedź: D (nie ma dowodów, by M1 wpływało na M2).",
    "correctAnswer": 3
  },
  {
    "id": 81,
    "text": "Jeśli po uwzględnieniu mediatora efekt pośredni jest istotny statystycznie, a efekt bezpośredni jest słabszy, lecz istotny statystycznie to:",
    "options": [
      "nie dochodzi do mediacji",
      "najprawdopodobniej istnieje dodatkowa zmienna, która lepiej wyjaśni mechanizm mediacji",
      "dochodzi do moderacji",
      "należy zmienić kolejność zmiennej niezależnej i zależnej"
    ],
    "explanation": "Wyjaśnienie pytania: Jeśli efekt pośredni jest istotny, a efekt bezpośredni pozostaje istotny (tylko mniejszy), mamy mediację częściową. \
\nPoprawna odpowiedź (choć nie ma wprost opcji 'mediacja częściowa'): Najbliżej B – sugeruje, że jest jeszcze coś poza M. W klasycznych ujęciach nazywamy to mediacją częściową (gdy direct effect ≠ 0). Ale w zaproponowanych odpowiedziach B stwierdza, że \"najprawdopodobniej jest jeszcze inna zmienna\" – można to interpretować, że mediator nie wyjaśnia całości. \
\nZwykle definicja brzmiałaby: \"efekt bezpośredni jest wciąż istotny\" → mediacja częściowa. Ale tutaj takie stwierdzenie nie pada wprost, więc najbliżej jest B. \
\nPoprawna odpowiedź: B, bo to sugeruje istnienie dodatkowych czynników (mediator nie wyjaśnił efektu w pełni).",
    "correctAnswer": 1
  },
  {
    "id": 82,
    "text": "Jak nazywa się zjawisko, w którym ludzie zmieniają decyzje w zależności od sposobu przedstawienia problemu?",
    "options": [
      "Teoria perspektywy",
      "Efekt ramowania",
      "Efekt skali",
      "Replikacja efektu"
    ],
    "explanation": "Wyjaśnienie pytania: Zmiana decyzji w zależności od \"ramy\" = efekt ramowania. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 83,
    "text": "W teorii perspektywy Tversky'ego i Kahnemana, co jest większe w odczuciu ludzi?",
    "options": [
      "Zysk z uzyskania 100 zł",
      "Smutek ze straty 100 zł",
      "Subiektywna radość z wygranej",
      "Wszystkie są równe"
    ],
    "explanation": "Wyjaśnienie pytania: Teoria perspektywy mówi, że straty bolą bardziej niż cieszą zyski tej samej wielkości. \
\nPoprawna odpowiedź: B (strata 100 zł jest subiektywnie bardziej dotkliwa niż radość z 100 zł).",
    "correctAnswer": 1
  },
  {
    "id": 84,
    "text": "Czym jest mediacja w badaniach naukowych?",
    "options": [
      "Testowaniem zależności między zmienną zależną a niezależną",
      "Analizą, która eliminuje błędy eksperymentalne",
      "Sprawdzaniem, która zmienna wyjaśnia dany efekt",
      "Oceną trafności hipotez"
    ],
    "explanation": "Wyjaśnienie pytania: Mediator jest czynnikiem wyjaśniającym, jak X prowadzi do Y. \
\nPoprawna odpowiedź: C (która zmienna wyjaśnia dany efekt).",
    "correctAnswer": 2
  },
  {
    "id": 85,
    "text": "Jakie prawdopodobieństwa ludzie zniekształcają według teorii wag decyzyjnych?",
    "options": [
      "Wysokie prawdopodobieństwa są przeważane, a niskie niedoważane",
      "Wysokie prawdopodobieństwa są niedoważane, a niskie przeważane",
      "Wszystkie prawdopodobieństwa są traktowane neutralnie",
      "Zniekształcenia występują tylko przy 50% prawdopodobieństwa"
    ],
    "explanation": "Teoria wag decyzyjnych (prospect theory) mówi, że ludzie zwykle przeceniają małe p i nie doceniają duże p. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 86,
    "text": "Co było celem masowych replikacji badań Tversky’ego i Kahnemana?",
    "options": [
      "Wykazanie uniwersalności i powtarzalności efektów",
      "Odkrycie nowych efektów w innych populacjach",
      "Porównanie wyników w różnych naukowych dziedzinach",
      "Zreplikowanie jak największej ilości badań bez konkretnego celu"
    ],
    "explanation": "Wyjaśnienie pytania: Masowe replikacje zwykle weryfikują, czy dane efekty (np. framing) są powtarzalne w różnych populacjach i kontekstach. \
\nPoprawna odpowiedź: A (uniwersalność i powtarzalność).",
    "correctAnswer": 0
  },
  {
    "id": 87,
    "text": "Czym różni się model korelacyjny od eksperymentalnego?",
    "options": [
      "W modelu korelacyjnym możemy wskazać przyczynę, w eksperymentalnym nie",
      "W modelu eksperymentalnym wprowadza się manipulację zmienną niezależną",
      "W modelu korelacyjnym badamy zmienne jakościowe, w eksperymentalnym ilościowe",
      "Nie różnią się – oba służą do wyciągania wniosków przyczynowo-skutkowych"
    ],
    "explanation": "Wyjaśnienie pytania: W eksperymencie jest manipulacja IV i kontrola warunków – to główna różnica. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 88,
    "text": "Jakie wyniki uzyskano w badaniu dotyczącym udostępniania prawdziwych i fałszywych nagłówków?",
    "options": [
      "Badani częściej udostępniali fałszywe nagłówki",
      "Badani częściej udostępniali nagłówki zgodne z ich poglądami politycznymi, niezależnie od ich prawdziwości",
      "Prawdziwe nagłówki były zawsze poprawnie rozpoznawane",
      "Fałszywe nagłówki były rozpoznawane trafniej niż prawdziwe"
    ],
    "explanation": "Według replikowanego efektu (z prac nad dezinformacją) ludzie chętnie szerzą info zgodne z poglądami, nie zawsze sprawdzając prawdziwość. \
\nPoprawna odpowiedź: B (kluczowy wynik: konfirmacja postaw/poglądów).",
    "correctAnswer": 1
  },
  {
    "id": 89,
    "text": "Czym jest test skuteczności manipulacji?",
    "options": [
      "Narzędziem oceny wielkości efektu",
      "Procedurą sprawdzającą, czy manipulacja wzbudziła oczekiwane efekty",
      "Analizą statystyczną opartą na danych korelacyjnych",
      "Metodą eliminacji zmiennych zakłócających"
    ],
    "explanation": "Wyjaśnienie: Test manipulacji (manipulation check) – czy zmienna niezależna została wprowadzone w sposób skuteczny (np. czy uczestnicy faktycznie czuli lęk, jeśli taka była manipulacja). \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 90,
    "text": "Jakie emocje badano w eksperymencie z pacjentami czekającymi na dentystę i występ komediowy?",
    "options": [
      "Strach i smutek",
      "Strach i radość",
      "Smutek i złość",
      "Radość i zaskoczenie"
    ],
    "explanation": "Klasyczny przykład: czekający na dentystę (strach), kontra widzowie występu komediowego (radość). \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 91,
    "text": "Dlaczego w badaniach stosuje się pretest i posttest?",
    "options": [
      "Aby sprawdzić różnice między eksperymentem a kontrolą",
      "Aby zwiększyć liczebność próby",
      "Aby zmierzyć efekty manipulacji przed i po badaniu",
      "Aby ocenić stopień trudności zadania"
    ],
    "explanation": "Wyjaśnienie pytania: Pretest i posttest służą ocenie zmiany wyników po manipulacji. \
\nPoprawna odpowiedź: C.",
    "correctAnswer": 2
  },
  {
    "id": 92,
    "text": "Czym jest maksymalizacja trafności wewnętrznej, co jest przykładem takiego działania?",
    "options": [
      "Sprawdzenie skuteczności wyników w różnych kontekstach",
      "Wyeliminowanie wszystkich zmiennych zakłócających",
      "Zastosowanie większej liczby grup kontrolnych",
      "Wprowadzenie dodatkowych testów skuteczności manipulacji"
    ],
    "explanation": "Wyjaśnienie: Aby zwiększyć trafność wewnętrzną, należy kontrolować/lub usuwać zmienne zakłócające, np. za pomocą grup kontrolnych, testów manipulacji. \
\nPoprawna odpowiedź: B (dążenie do eliminacji confoundów).",
    "correctAnswer": 1
  },
  {
    "id": 93,
    "text": "Co bada moderacja w eksperymentach?",
    "options": [
      "Mechanizmy wpływu zmiennych niezależnych na zależne",
      "Warunki, w jakich występuje efekt",
      "Bezpośrednią relację między zmiennymi",
      "Wpływ mediatora na zmienne"
    ],
    "explanation": "Wyjaśnienie pytania: Moderacja = 'kiedy', 'dla kogo' i w jakich warunkach występuje/zmienia się związek. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 94,
    "text": "Jak nazywa się metoda, która rozwiązuje problemy konserwatywności Testu Sobela?",
    "options": [
      "Replikacja efektu",
      "Bootstrapping",
      "Test skuteczności mediacji",
      "Analiza moderacyjna"
    ],
    "explanation": "Wyjaśnienie pytania: Bootstrapping jest zalecaną metodą obliczania przedziałów ufności dla efektu mediacji, mniej konserwatywny niż Sobel. \
\nPoprawna odpowiedź: B.",
    "correctAnswer": 1
  },
  {
    "id": 95,
    "text": "Jakie jest główne założenie bootstrappingu?",
    "options": [
      "Rozkład estymatorów w populacji jest zawsze prawidłowy",
      "Przy dużej liczbie losowań rozkład zmiennych zmierza do normalnego",
      "Wartość efektu pośredniego jest zawsze większa od efektu głównego",
      "Przedziały ufności dla mediacji zawsze zawierają 0"
    ],
    "explanation": "Wyjaśnienie pytania: Główne założenie – nie potrzebujemy założeń o normalności rozkładu, bo budujemy go empirycznie przez wielokrotne próbkowanie. Żadna z zaproponowanych opcji nie jest wprost definicją, ale najbliżej jest (2), bo w praktyce centralne twierdzenie graniczne i duża liczba losowań pozwala przybliżać rozkład estymatora. \
\nPoprawna odpowiedź: B (uproszczenie: wraz ze wzrostem liczby replik, rozkład statystyki się stabilizuje).",
    "correctAnswer": 1
  }]
}