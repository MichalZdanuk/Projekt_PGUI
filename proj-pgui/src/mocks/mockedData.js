// widget OpinieKupujacych
export const opinieklientow = [
    {
      id: 1,
      nazwaKlienta: "Jacek",
      tekst:
        "Bardzo dobry głośnik. Korzystam już ponad 2 lata i nie ma żadnych problemów. Jakość top, żywotność baterii top. Bardzo polecam!",
      typ: "pozytywna",
      data: "05.07.2022"
    },
    {
      id: 2,
      nazwaKlienta: "Krzyszto44",
      tekst:
        "Przyjemny monitorek. Całkiem duży, a jednocześnie lekki. Ma kilka portów, co nie jest tak często spotykane w przedmiotach z tej półki cenowej. Ogólnie rewelacyjny stosunek jakość do ceny!",
      typ: "pozytywna",
      data: "22.11.2022"
    },
    {
      id: 3,
      nazwaKlienta: "KubiX",
      tekst:
        "Słabiutkie słuchawki. Cały czas się rozładowują. Średni czas życia baterii od pełnego naładowania to tylko 2 godziny! Nie dajcie się na ten szajs naciągnąć!!!",
      typ: "negatywna",
      data: "5.12.2022"
    },
    {
      id: 4,
      nazwaKlienta: "Caro33",
      tekst:
        "Dobra kamera. Jak na cenę 200 PLN to chyba najlepszy dostępny na stronie.",
      typ: "pozytywna",
      data: "10.03.2022"
    },
    {
      id: 5,
      nazwaKlienta: "Arturito",
      tekst:
        "Myszka beznadziejna. W ogóle ani razu nie zadziałała po otwarciu. Słaby kontakt i problem ze zwrotem.",
      typ: "negatywna",
      data: "13.05.2022"
    },
    {
      id: 6,
      nazwaKlienta: "DonPedro",
      tekst:
        "Te słuchawki warte są każdych pieniędzy! Profesjonalne wykonanie, szeroka scena dźwięku a poziom wyciszenia przez ANC jest dla mnie odkryciem na miarę dekady. Ja, który cierpię na nadwrażliwość słuchową dzięki temu urządzeniu wreszcie mogę żyć spokojnie! Dzięki Sony!",
      typ: "pozytywna",
      data: "22.11.2022"
    },
    {
      id: 7,
      nazwaKlienta: "Locx3k",
      tekst:
        "Dźwięk jest ok, noise cancellation też jest na najwyższym poziomie. Jednak słuchawki są strasznie nie komfortowe. Uszy grzeją się już po 2 minutach noszenia i to zimą... Nie wyobrażam jak ich można używać latem...",
      typ: "negatywna",
      data: "4.01.2022"
    },
    {
      id: 8,
      nazwaKlienta: "Kubaandrzej1992",
      tekst:
        "Kupiłem tę myszkę, ale produkt wg mnie nie nadaje się do użytkowania, po miesiącu myszka łapie zwiechy i co 10min zawiesza się na 3-5s i nie można nic kursora ruszać. Jestem strasznie zawiedziony, tą myszką nie da się grać w gry, ba, nawet Internet strach przeglądać, chętnie bym ją oddał lub zareklamował, ale mi się gdzieś paragon zgubił, strata pieniędzy!",
      typ: "negatywna",
      data: "19.04.2022"
    },
    {
      id: 9,
      nazwaKlienta: "kamilos",
      tekst:
        "Produkt ładny, niestety na tym się kończy, przyciski są wręcz dotykowe, nie można normalnie grać/przeglądać Internetu, bo co chwile leci przypadkowe kliknięcie.",
      typ: "negatywna",
      data: "9.02.2022"
    },
    {
      id: 10,
      nazwaKlienta: "Radosław1990",
      tekst:
        "Polecam! Jeżeli ktoś się zastanawia nad wyborem Xbox czy PS5 (tak jak ja) to po zakupie moje wątpliwości zostały rozwiane. Lepszy pakiet gier w zestawie PS PLUS. Działanie i wygląd pada jest mega. Dysk SSD - tu nie trzeba nic dodawać. Konsola pracuję cichutko. Jeżeli szukasz zestawu z FIFĄ to dobrze trafiłeś, jedyne czego brakuję to drugiego pada.",
      typ: "pozytywna",
      data: "26.05.2022"
    }
  ];
  
  // widget JakoscSprzedazy
  export const receivedQualityOfSales = {
    listOfGrades: [
      { aspectName: "Punktualność", receivedPoints: 7 },
      { aspectName: "Uprzejmość", receivedPoints: 4 },
      { aspectName: "Dostawa", receivedPoints: 3 },
      { aspectName: "Brak Usterek", receivedPoints: 5 },
      { aspectName: "Kontakt", receivedPoints: 8 }
    ]
  };
  
  // widget RankingOfert
  export const ofertySprzedawcy = [
    {
      id: 1,
      nazwaProduktu: "Kapelusz",
      lsztuk: 60,
      lwysw: 42039,
      obrot: 3000,
      sciezkaDoGrafiki: "/public/icons/hat.png"
    },
    {
      id: 2,
      nazwaProduktu: "Okulary",
      lsztuk: 100,
      lwysw: 53247,
      obrot: 4000,
      sciezkaDoGrafiki: "/public/icons/eyeglasses.png"
    },
    {
      id: 3,
      nazwaProduktu: "Słuchawki",
      lsztuk: 200,
      lwysw: 62948,
      obrot: 80000,
      sciezkaDoGrafiki: "/public/icons/headphone.png"
    },
    {
      id: 4,
      nazwaProduktu: "Koszulka",
      lsztuk: 500,
      lwysw: 89382,
      obrot: 40000,
      sciezkaDoGrafiki: "/public/icons/t-shirt.png"
    },
    {
      id: 5,
      nazwaProduktu: "Klawiatura",
      lsztuk: 150,
      lwysw: 73204,
      obrot: 20000,
      sciezkaDoGrafiki: "/public/icons/keyboard.png"
    },
    {
      id: 6,
      nazwaProduktu: "Myszka",
      lsztuk: 50,
      lwysw: 73204,
      obrot: 20000,
      sciezkaDoGrafiki: "/public/icons/mouse.png"
    }
  ];
  
  // widget Zamowienia
  export const pobraneZamowienia = {
    listaZamowien: [
      {
        typZamowienia: "NIEOPŁACONE",
        id: 123,
        data: "01.01.2023",
        opis: "Smartfon SAMSUNG Galaxy A53 6/128GB"
      },
      {
        typZamowienia: "NIEOPŁACONE",
        id: 124,
        data: "01.01.2023",
        opis: "Słuchawki nauszne SONY WH-1000XM5B"
      },
      {
        typZamowienia: "NIEOPŁACONE",
        id: 125,
        data: "01.01.2023",
        opis: "Mysz MAD DOG GM905"
      },
      {
        typZamowienia: "NIEOPŁACONE",
        id: 329,
        data: "01.01.2023",
        opis: "Klawiatura MAD DOG GK850W Gateron"
      },
      {
        typZamowienia: "NIEWYSŁANE",
        id: 126,
        data: "01.01.2023",
        opis: "Klawiatura LOGITECH G413 TKL SE"
      },
      {
        typZamowienia: "NIEWYSŁANE",
        id: 127,
        data: "01.01.2023",
        opis: "Słuchawki douszne PHILIPS TAA6606BK"
      },
      {
        typZamowienia: "NIEWYSŁANE",
        id: 128,
        data: "01.01.2023",
        opis: "Mysz ASUS Rog Gladius III"
      },
      {
        typZamowienia: "ZWROTY",
        id: 129,
        data: "01.01.2023",
        opis: "Mysz STEELSERIES Rival 5"
      },
      {
        typZamowienia: "ZWROTY",
        id: 130,
        data: "01.01.2023",
        opis: "Smartfon REALME C33 4/64GB 6.5 Złoty"
      },
      {
        typZamowienia: "ZWROTY",
        id: 131,
        data: "01.01.2023",
        opis: "Słuchawki nauszne PHILIPS Fidelio L3"
      },
      {
        typZamowienia: "ZWROTY",
        id: 132,
        data: "01.01.2023",
        opis: "Mikrofon MAD DOG Pro GMC701"
      },
      {
        typZamowienia: "ZWROTY",
        id: 133,
        data: "01.01.2023",
        opis: "Mysz LOGITECH G502 Hero"
      }
    ]
  };
  
  // widget WykresSprzedazy
  
  export const chartData = [
    {
      day: "Poniedziałek",
      obrót: 3200,
      liczba_sztuk: 25
    },
    {
      day: "Wtorek",
      obrót: 5500,
      liczba_sztuk: 50
    },
    {
      day: "Środa",
      obrót: 3600,
      liczba_sztuk: 70
    },
    {
      day: "Czwartek",
      obrót: 4300,
      liczba_sztuk: 45
    },
    {
      day: "Piątek",
      obrót: 4600,
      liczba_sztuk: 111
    },
    {
      day: "Sobota",
      obrót: 6000,
      liczba_sztuk: 90
    },
    {
      day: "Niedziela",
      obrót: 3800,
      liczba_sztuk: 75
    }
  ];
  