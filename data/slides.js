const slides = [
  {
    kicker: "D22 Projekt GmbH • 21 февраля 2026",
    title: "Господдержка Desper Quartier",
    subtitle:
      "Точная карта программ из отчета: название, провайдер и достижимость для приоритизации заявок.",
    metrics: [
      { value: "17 600 м²", label: "Площадь участка" },
      { value: "22 995 м²", label: "Общая BGF" },
      { value: "€21,37 млн", label: "Фаза 1 (Сценарий 3)" },
      { value: "€65,1 млн", label: "Полный бюджет (Сценарий 2)" }
    ],
    blocks: [
      {
        title: "Цветовая логика",
        content:
          "★★★★★-★★★★☆: зеленые карточки (легкодоступно). ★★★☆☆: желто-оранжевый. ★★☆☆☆-★☆☆☆☆: оранжево-красный (сложнее)."
      },
      {
        title: "Формат ссылок",
        content:
          "Каждая программа помечена ID из отчета (например, 1.4 или 2.1), чтобы быстро сверять детали с исходным документом."
      }
    ]
  },
  {
    kicker: "Этап 0 • Подготовка проекта",
    title: "Подготовка территории и инфраструктура",
    subtitle: "Санация, инфраструктура, городские и сетевые программы до старта строительства.",
    programs: [
      {
        code: "0.1",
        name: "Städtebauförderung - Wachstum und nachhaltige Erneuerung",
        provider: "MDI Rheinland-Pfalz + Stadt Ransbach-Baumbach",
        difficulty: "★★☆☆☆",
        type: "Грант",
        effect: "€720 000-1 440 000"
      },
      {
        code: "0.2",
        name: "Regionales Zukunftsprogramm Rheinland-Pfalz",
        provider: "Landesregierung Rheinland-Pfalz",
        difficulty: "★★☆☆☆",
        type: "Грант",
        effect: "до €650 000"
      },
      {
        code: "0.3",
        name: "Altlastensanierung - Förderung Rheinland-Pfalz",
        provider: "MKUEM Rheinland-Pfalz",
        difficulty: "★★★☆☆",
        type: "Грант",
        effect: "€120 000-300 000"
      },
      {
        code: "0.4",
        name: "Gigabitförderung - Breitband-Infrastruktur",
        provider: "BMDV",
        difficulty: "★★★★☆",
        type: "Грант",
        effect: "€60 000-120 000"
      }
    ],
    blocks: [
      {
        title: "Ключевой риск",
        content:
          "По программам 0.1 и 0.2 заявителем выступает коммуна: нужна синхронная работа с Stadt Ransbach-Baumbach."
      }
    ]
  },
  {
    kicker: "Этап 1 • Жилые здания",
    title: "KfW / ISB по жилью",
    subtitle: "Точные программы, которые влияют на стоимость капитала и маржу жилой части.",
    programs: [
      {
        code: "1.1",
        name: "KfW 297/298 - Klimafreundlicher Neubau Wohngebäude",
        provider: "KfW Bankengruppe",
        difficulty: "★★★☆☆",
        type: "Льготный кредит",
        effect: "€305 000-1 220 000"
      },
      {
        code: "1.2",
        name: "KfW 296 - Klimafreundlicher Neubau Niedrigpreissegment",
        provider: "KfW",
        difficulty: "★★★★☆",
        type: "Льготный кредит",
        effect: "около €800 000"
      },
      {
        code: "1.3",
        name: "EH55-Plus Förderung (befristet ab 16.12.2025)",
        provider: "KfW",
        difficulty: "★★★★★",
        type: "Льготный кредит",
        effect: "€400 000-500 000"
      },
      {
        code: "1.4",
        name: "ISB Rheinland-Pfalz - Soziale Wohnraumförderung (751/752)",
        provider: "ISB Rheinland-Pfalz",
        difficulty: "★★★★☆",
        type: "0% кредит + Tilgungszuschuss",
        effect: "около €1 815 000"
      }
    ],
    metrics: [
      { value: "€16,5 млн", label: "Потенциал кредита KfW 298" },
      { value: "~€2,22 млн", label: "Экономия процентов (5 лет)" },
      { value: "до 35%", label: "Tilgungszuschuss (1.4)" },
      { value: "★★★★☆", label: "Достижимость 1.4" }
    ]
  },
  {
    kicker: "Этап 1 • Налоги и спрос",
    title: "Налоговые и buyer-side инструменты",
    subtitle: "Программы, которые усиливают продажи и инвестиционную привлекательность лотов.",
    programs: [
      {
        code: "1.5",
        name: "Degressive AfA + Sonderabschreibung §7b EStG",
        provider: "Finanzamt",
        difficulty: "★★★☆☆",
        type: "Налоговая льгота",
        effect: "до ~€1 320 000 доп. выручки; degressive AfA проще, §7b сложнее"
      },
      {
        code: "1.6",
        name: "KfW 300 - Wohneigentum für Familien",
        provider: "KfW",
        difficulty: "★★★★★",
        type: "Льготный кредит (для покупателей)",
        effect: "косвенно €150 000-300 000"
      },
      {
        code: "1.7",
        name: "KfW 159 - Altersgerecht Umbauen / Barrierereduzierung",
        provider: "KfW",
        difficulty: "★★★★☆",
        type: "Льготный кредит",
        effect: "€50 000-80 000"
      }
    ],
    list: [
      "1.5 полезно закладывать в коммерческое предложение инвесторам как аргумент цены и скорости сделки.",
      "1.6 и 1.7 работают через покупателей, но напрямую улучшают скорость реализации жилых лотов."
    ]
  },
  {
    kicker: "Этап 2 • Коммерческие здания",
    title: "Коммерция: кредиты, гранты, якорные арендаторы",
    subtitle: "Программы для офисов, медицинских практик, оздоровительного центра и Kita.",
    programs: [
      {
        code: "2.1",
        name: "KfW 299 - Klimafreundlicher Neubau Nichtwohngebäude",
        provider: "KfW",
        difficulty: "★★★☆☆",
        type: "Льготный кредит",
        effect: "€500 000-750 000"
      },
      {
        code: "2.2",
        name: "GRW - Regionalförderung (Gemeinschaftsaufgabe regionale Wirtschaftsstruktur)",
        provider: "ISB Rheinland-Pfalz",
        difficulty: "★★★☆☆",
        type: "Грант",
        effect: "до €900 000"
      },
      {
        code: "2.3",
        name: "ISB Effizienzkredit RLP - für Gewerbeimmobilien",
        provider: "ISB Rheinland-Pfalz",
        difficulty: "★★★★☆",
        type: "Льготный кредит",
        effect: "€200 000-500 000"
      },
      {
        code: "2.4",
        name: "Förderung Kindertagesstätte (Kita) - Rheinland-Pfalz",
        provider: "LSJV Rheinland-Pfalz + Rheinland-Pfalz Plan",
        difficulty: "★★★★★",
        type: "Грант",
        effect: "€720 000-1 220 000"
      },
      {
        code: "2.5",
        name: "Förderung Rehabilitationseinrichtungen",
        provider: "BMAS",
        difficulty: "★★☆☆☆",
        type: "Грант",
        effect: "ожидаемо €100 000-600 000"
      },
      {
        code: "2.6",
        name: "Strukturfonds der Kassenärztlichen Vereinigung",
        provider: "KV Rheinland-Pfalz",
        difficulty: "★★★☆☆",
        type: "Косвенная поддержка",
        effect: "косвенно €50 000-100 000"
      }
    ]
  },
  {
    kicker: "Этап 3 • Сквозные программы",
    title: "Энергия, озеленение, трансформация функций",
    subtitle: "Инструменты, применимые сразу к нескольким очередям и типам зданий.",
    programs: [
      {
        code: "3.1",
        name: "Photovoltaik - EEG-Einspeisevergütung + Steuerbefreiung",
        provider: "Федеральное регулирование EEG / Steuerrecht",
        difficulty: "★★★★★",
        type: "Доход + налоговая льгота",
        effect: "€900 000-1 400 000"
      },
      {
        code: "3.2",
        name: "Dachbegrünung / Fassadenbegrünung - KIPKI + B-Plan-Pflicht",
        provider: "Коммунальные программы через KIPKI Rheinland-Pfalz",
        difficulty: "★★★★☆",
        type: "Грант",
        effect: "€40 000-80 000"
      },
      {
        code: "3.3",
        name: "Программа Gewerbe zu Wohnen (планируется)",
        provider: "KfW (ожидается)",
        difficulty: "★★☆☆☆",
        type: "Льготный кредит",
        effect: "€200 000-500 000"
      }
    ],
    blocks: [
      {
        title: "Комментарий",
        content:
          "3.1 и 3.2 стоит фиксировать в базовой проектной документации до финального согласования, чтобы не терять время на переделки."
      }
    ]
  },
  {
    kicker: "Сводный расчет",
    title: "Три сценария совокупного эффекта",
    subtitle: "Сценарная модель из отчета по объему достижимой поддержки.",
    metrics: [
      { value: "€7,295 млн", label: "Вариант A (★★★★☆ и ★★★★★)" },
      { value: "€9,875 млн", label: "Вариант B (+★★★☆☆)" },
      { value: "€12,18 млн", label: "Вариант C (+★★☆☆☆)" },
      { value: "до 54%", label: "Доля от затрат Сценария 3" }
    ],
    list: [
      "Вариант A: минимальный риск, самый быстрый запуск заявочной кампании.",
      "Вариант B: добавляем среднесложные программы после стабилизации базового трека.",
      "Вариант C: включает сложные муниципальные/конкурсные инструменты."
    ]
  },
  {
    kicker: "Финансовая модель",
    title: "Влияние на прибыльность Фазы 1",
    subtitle: "Сравнение базы и сценариев с господдержкой из отчета.",
    metrics: [
      { value: "8,7%", label: "Базовая маржа" },
      { value: "22,7%", label: "Маржа с Вариантом A" },
      { value: "29,5%", label: "Маржа с Вариантом B" },
      { value: "35,1%", label: "Маржа с Вариантом C" }
    ],
    list: [
      "Прибыль Фазы 1 по модели: от €2,03 млн (без программ) до €8,21 млн (Вариант C).",
      "Критический фактор: подача всех кредитных/грантовых заявок до старта строительных работ."
    ]
  },
  {
    kicker: "Roadmap",
    title: "Приоритетные действия на 0-3 месяца",
    subtitle: "Практические шаги по программам с наибольшей вероятностью результата.",
    list: [
      "Сразу: консультация ISB по 1.4 и подготовка к подаче 2.3 через Hausbank.",
      "По готовности Baugenehmigung: оперативная подача 1.3 (ограниченный бюджет программы).",
      "Параллельно: решение с мэрией по 0.1/0.2 и концепция Kita под 2.4.",
      "После базового запуска: расширение на 1.1, 2.1, 2.2 и мониторинг 3.3."
    ],
    blocks: [
      {
        title: "Критический дедлайн",
        content: "Для KfW и ISB заявки должны быть зарегистрированы до фактического начала строительных работ."
      }
    ]
  },
  {
    kicker: "Оговорки",
    title: "Ключевые допущения и контроль качества",
    subtitle: "Цифры и совместимость программ требуют верификации на момент подачи.",
    list: [
      "Некоторые программы несовместимы между собой на одной и той же единице (например, 1.1 и 1.2).",
      "Расчеты отражают ориентиры отчета и должны уточняться через Hausbank, ISB и налогового консультанта.",
      "Сложные треки (★★☆☆☆) стоит вести отдельным потоком, не тормозя базовые быстрые заявки."
    ]
  },
  {
    kicker: "Справочный материал",
    title: "Ссылки на программы и провайдеров",
    subtitle:
      "Справочный слайд по всем упомянутым программам из отчета. Перед подачей заявок проверить актуальность условий на официальных страницах.",
    references: [
      {
        code: "0.1",
        title: "Städtebauförderung - Wachstum und nachhaltige Erneuerung",
        provider: "Bund / Land / Kommune (в отчете: MDI Rheinland-Pfalz + Stadt)",
        url: "https://www.staedtebaufoerderung.info/"
      },
      {
        code: "0.2",
        title: "Regionales Zukunftsprogramm Rheinland-Pfalz",
        provider: "Landesregierung Rheinland-Pfalz",
        url: "https://www.rlp.de/"
      },
      {
        code: "0.3",
        title: "Altlastensanierung - Förderung Rheinland-Pfalz",
        provider: "MKUEM Rheinland-Pfalz",
        url: "https://mkuem.rlp.de/"
      },
      {
        code: "0.4",
        title: "Gigabitförderung - Breitband-Infrastruktur",
        provider: "BMDV",
        url: "https://bmdv.bund.de/DE/Themen/Digitales/Breitbandausbau/breitbandausbau.html"
      },
      {
        code: "1.1",
        title: "KfW 297/298 - Klimafreundlicher Neubau Wohngebäude",
        provider: "KfW",
        url: "https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/F%C3%B6rderprodukte/Klimafreundlicher-Neubau-Wohngeb%C3%A4ude-(298)/"
      },
      {
        code: "1.2",
        title: "KfW 296 - Klimafreundlicher Neubau Niedrigpreissegment",
        provider: "KfW",
        url: "https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/F%C3%B6rderprodukte/Klimafreundlicher-Neubau-im-Niedrigpreissegment-Wohngeb%C3%A4ude-(296)/"
      },
      {
        code: "1.3",
        title: "EH55-Plus Förderung (befristet)",
        provider: "KfW",
        url: "https://www.kfw.de/"
      },
      {
        code: "1.4",
        title: "ISB 751/752 - Soziale Wohnraumförderung",
        provider: "ISB Rheinland-Pfalz",
        url: "https://isb.rlp.de/foerderung/wohnraum.html"
      },
      {
        code: "1.5",
        title: "Degressive AfA + Sonderabschreibung §7b EStG",
        provider: "Finanzverwaltung / BMF / Finanzamt",
        url: "https://www.bundesfinanzministerium.de/"
      },
      {
        code: "1.6",
        title: "KfW 300 - Wohneigentum für Familien",
        provider: "KfW",
        url: "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Neubau/F%C3%B6rderprodukte/Wohneigentum-f%C3%BCr-Familien-(300)/"
      },
      {
        code: "1.7",
        title: "KfW 159 - Altersgerecht Umbauen",
        provider: "KfW",
        url: "https://www.kfw.de/inlandsfoerderung/Privatpersonen/Bestandsimmobilie/F%C3%B6rderprodukte/Altersgerecht-Umbauen-Kredit-(159)/"
      },
      {
        code: "2.1",
        title: "KfW 299 - Klimafreundlicher Neubau Nichtwohngebäude",
        provider: "KfW",
        url: "https://www.kfw.de/inlandsfoerderung/Unternehmen/Energie-Umwelt/F%C3%B6rderprodukte/Klimafreundlicher-Neubau-Nichtwohngeb%C3%A4ude-(299)/"
      },
      {
        code: "2.2",
        title: "GRW - Regionalförderung",
        provider: "ISB Rheinland-Pfalz / GRW",
        url: "https://isb.rlp.de/foerderung/gewerbe/grw.html"
      },
      {
        code: "2.3",
        title: "ISB Effizienzkredit RLP - Gewerbeimmobilien",
        provider: "ISB Rheinland-Pfalz",
        url: "https://isb.rlp.de/foerderung/gewerbe.html"
      },
      {
        code: "2.4",
        title: "Förderung Kindertagesstätte (Kita) - Rheinland-Pfalz",
        provider: "LSJV Rheinland-Pfalz",
        url: "https://lsjv.rlp.de/themen/kinder-und-jugend/kindertagesstaetten"
      },
      {
        code: "2.5",
        title: "Förderung Rehabilitationseinrichtungen",
        provider: "BMAS",
        url: "https://www.bmas.de/DE/Service/Foerderprogramme/foerderprogramme.html"
      },
      {
        code: "2.6",
        title: "Strukturfonds der Kassenärztlichen Vereinigung",
        provider: "KV Rheinland-Pfalz",
        url: "https://www.kv-rlp.de/"
      },
      {
        code: "3.1",
        title: "Photovoltaik - EEG-Einspeisevergütung + Steuerbefreiung",
        provider: "EEG / Bundesnetzagentur / BMF",
        url: "https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/start.html"
      },
      {
        code: "3.2",
        title: "Dachbegrünung / Fassadenbegrünung - KIPKI",
        provider: "KIPKI Rheinland-Pfalz",
        url: "https://kipki.rlp.de/"
      },
      {
        code: "3.3",
        title: "Gewerbe zu Wohnen (планируемая программа)",
        provider: "KfW (ожидается)",
        url: "https://www.kfw.de/"
      }
    ]
  },
  {
    kicker: "Финал",
    title: "Рекомендуемая стратегия запуска",
    subtitle: "Идти по ступенчатой модели: быстрые программы -> средние -> сложные.",
    blocks: [
      {
        title: "Шаг 1",
        content: "Собрать пакет по зеленой зоне (★★★★☆ и ★★★★★): 1.3, 1.4, 2.3, 2.4, 3.1, 3.2, 0.4."
      },
      {
        title: "Шаг 2",
        content: "После старта заявок подключать 1.1, 2.1, 2.2, 2.6 и часть налоговых инструментов."
      },
      {
        title: "Шаг 3",
        content: "Отдельно развивать сложные треки 0.1, 0.2, 2.5, 3.3 с муниципальным и консультационным сопровождением."
      }
    ],
    metrics: [
      { value: "Цель 1", label: "Быстрый эффект €7,3+ млн" },
      { value: "Цель 2", label: "Расширение до €9,9+ млн" },
      { value: "Цель 3", label: "Потолок до €12,18 млн" },
      { value: "Фокус", label: "Скорость и дисциплина подачи" }
    ]
  }
];
