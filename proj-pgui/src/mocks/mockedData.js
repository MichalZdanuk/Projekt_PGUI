// widget BuyersReviews
export const customerReviews = [
    {
      id: 1,
      customerName: "Jacek",
      text:
        "Bardzo dobry głośnik. Korzystam już ponad 2 lata i nie ma żadnych problemów. Jakość top, żywotność baterii top. Bardzo polecam!",
      type: "positive",
      date: "05.07.2022"
    },
    {
      id: 2,
      customerName: "Krzyszto44",
      text:
        "Przyjemny monitorek. Całkiem duży, a jednocześnie lekki. Ma kilka portów, co nie jest tak często spotykane w przedmiotach z tej półki cenowej. Ogólnie rewelacyjny stosunek jakość do ceny!",
      type: "positive",
      date: "22.11.2022"
    },
    {
      id: 3,
      customerName: "KubiX",
      text:
        "Słabiutkie słuchawki. Cały czas się rozładowują. Średni czas życia baterii od pełnego naładowania to tylko 2 godziny! Nie dajcie się na ten szajs naciągnąć!!!",
      type: "negative",
      date: "5.12.2022"
    },
    {
      id: 4,
      customerName: "Caro33",
      text:
        "Dobra kamera. Jak na cenę 200 PLN to chyba najlepszy dostępny na stronie.",
      type: "positive",
      date: "10.03.2022"
    },
    {
      id: 5,
      customerName: "Arturito",
      text:
        "Myszka beznadziejna. W ogóle ani razu nie zadziałała po otwarciu. Słaby kontakt i problem ze zwrotem.",
      type: "negative",
      date: "13.05.2022"
    },
    {
      id: 6,
      customerName: "DonPedro",
      text:
        "Te słuchawki warte są każdych pieniędzy! Profesjonalne wykonanie, szeroka scena dźwięku a poziom wyciszenia przez ANC jest dla mnie odkryciem na miarę dekady. Ja, który cierpię na nadwrażliwość słuchową dzięki temu urządzeniu wreszcie mogę żyć spokojnie! Dzięki Sony!",
      type: "positive",
      date: "22.11.2022"
    },
    {
      id: 7,
      customerName: "Locx3k",
      text:
        "Dźwięk jest ok, noise cancellation też jest na najwyższym poziomie. Jednak słuchawki są strasznie nie komfortowe. Uszy grzeją się już po 2 minutach noszenia i to zimą... Nie wyobrażam jak ich można używać latem...",
      type: "negative",
      date: "4.01.2022"
    },
    {
      id: 8,
      customerName: "Kubaandrzej1992",
      text:
        "Kupiłem tę myszkę, ale produkt wg mnie nie nadaje się do użytkowania, po miesiącu myszka łapie zwiechy i co 10min zawiesza się na 3-5s i nie można nic kursora ruszać. Jestem strasznie zawiedziony, tą myszką nie da się grać w gry, ba, nawet Internet strach przeglądać, chętnie bym ją oddał lub zareklamował, ale mi się gdzieś paragon zgubił, strata pieniędzy!",
      type: "negative",
      date: "19.04.2022"
    },
    {
      id: 9,
      customerName: "kamilos",
      text:
        "Produkt ładny, niestety na tym się kończy, przyciski są wręcz dotykowe, nie można normalnie grać/przeglądać Internetu, bo co chwile leci przypadkowe kliknięcie.",
      type: "negative",
      date: "9.02.2022"
    },
    {
      id: 10,
      customerName: "Radosław1990",
      text:
        "Polecam! Jeżeli ktoś się zastanawia nad wyborem Xbox czy PS5 (tak jak ja) to po zakupie moje wątpliwości zostały rozwiane. Lepszy pakiet gier w zestawie PS PLUS. Działanie i wygląd pada jest mega. Dysk SSD - tu nie trzeba nic dodawać. Konsola pracuję cichutko. Jeżeli szukasz zestawu z FIFĄ to dobrze trafiłeś, jedyne czego brakuję to drugiego pada.",
      type: "positive",
      date: "26.05.2022"
    }
  ];
  
  // widget QualityOfSales
  export const receivedQualityOfSales = {
    listOfGrades: [
      { aspectName: "Punktualność", receivedPoints: 7 },
      { aspectName: "Uprzejmość", receivedPoints: 4 },
      { aspectName: "Dostawa", receivedPoints: 3 },
      { aspectName: "Brak Usterek", receivedPoints: 5 },
      { aspectName: "Kontakt", receivedPoints: 8 }
    ]
  };
  
  // widget RankingOfOffers
  export const sellerOffers = [
    {
      id: 1,
      productName: "Kapelusz",
      numberOfItems: 60,
      numberOfViews: 42039,
      turnover: 3000,
      picturePath: "/public/icons/hat.png"
    },
    {
      id: 2,
      productName: "Okulary",
      numberOfItems: 100,
      numberOfViews: 53247,
      turnover: 4000,
      picturePath: "/icons/eyeglasses.png"
    },
    {
      id: 3,
      productName: "Słuchawki",
      numberOfItems: 200,
      numberOfViews: 62948,
      turnover: 80000,
      picturePath: "/icons/headphone.png"
    },
    {
      id: 4,
      productName: "Koszulka",
      numberOfItems: 500,
      numberOfViews: 89382,
      turnover: 40000,
      picturePath: "/icons/t-shirt.png"
    },
    {
      id: 5,
      productName: "Klawiatura",
      numberOfItems: 150,
      numberOfViews: 73204,
      turnover: 20000,
      picturePath: "/icons/keyboard.png"
    },
    {
      id: 6,
      productName: "Myszka",
      numberOfItems: 50,
      numberOfViews: 73204,
      turnover: 20000,
      picturePath: "/icons/mouse.png"
    }
  ];
  
  // widget Orders
  export const receivedOrders = {
    listOfOrders: [
      {
        orderType: "NOTPAID",
        id: 123,
        date: "01.01.2023",
        description: "Smartfon SAMSUNG Galaxy A53 6/128GB"
      },
      {
        orderType: "NOTPAID",
        id: 124,
        date: "01.01.2023",
        description: "Słuchawki nauszne SONY WH-1000XM5B"
      },
      {
        orderType: "NOTPAID",
        id: 125,
        date: "01.01.2023",
        description: "Mysz MAD DOG GM905"
      },
      {
        orderType: "NOTPAID",
        id: 329,
        date: "01.01.2023",
        description: "Klawiatura MAD DOG GK850W Gateron"
      },
      {
        orderType: "NOTSENT",
        id: 126,
        date: "01.01.2023",
        description: "Klawiatura LOGITECH G413 TKL SE"
      },
      {
        orderType: "NOTSENT",
        id: 127,
        date: "01.01.2023",
        description: "Słuchawki douszne PHILIPS TAA6606BK"
      },
      {
        orderType: "NOTSENT",
        id: 128,
        date: "01.01.2023",
        description: "Mysz ASUS Rog Gladius III"
      },
      {
        orderType: "REFUNDS",
        id: 129,
        date: "01.01.2023",
        description: "Mysz STEELSERIES Rival 5"
      },
      {
        orderType: "REFUNDS",
        id: 130,
        date: "01.01.2023",
        description: "Smartfon REALME C33 4/64GB 6.5 Złoty"
      },
      {
        orderType: "REFUNDS",
        id: 131,
        date: "01.01.2023",
        description: "Słuchawki nauszne PHILIPS Fidelio L3"
      },
      {
        orderType: "REFUNDS",
        id: 132,
        date: "01.01.2023",
        description: "Mikrofon MAD DOG Pro GMC701"
      },
      {
        orderType: "REFUNDS",
        id: 133,
        date: "01.01.2023",
        description: "Mysz LOGITECH G502 Hero"
      }
    ]
  };
  
  // widget SalesChart
  export const chartData = [
    {
      day: "Monday",
      turnover: 3200,
      how_many: 25
    },
    {
      day: "Tuesday",
      turnover: 5500,
      how_many: 50
    },
    {
      day: "Wednesday",
      turnover: 3600,
      how_many: 70
    },
    {
      day: "Thursday",
      turnover: 4300,
      how_many: 45
    },
    {
      day: "Friday",
      turnover: 4600,
      how_many: 111
    },
    {
      day: "Saturday",
      turnover: 6000,
      how_many: 90
    },
    {
      day: "Sunday",
      turnover: 3800,
      how_many: 75
    }
  ];
  