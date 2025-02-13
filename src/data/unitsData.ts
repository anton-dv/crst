import { Locale, LocaleText } from "../types/Locale"
import { Standard } from "../types/Standard";

export type Range = {
    [Locale.RU]: string;
    [Locale.EN]: string;
};

export type UnitsDataType = {
    id: string;
    name: LocaleText;
    about: string | null;
    range: Range | null;
    documents: Standard | Standard[] | null;
    methods: Standard | Standard[];
};

export const unitsData: UnitsDataType[] = [
    {
        id: "202:001",
        name: {
            [Locale.RU]: "Расплыв бетонной смеси",
            [Locale.EN]: "Spread of fresh concrete",
            [Locale.AR]: "انتشار الخرسانة الطازجة",
            [Locale.CH]: "新拌混凝土的铺设",
            [Locale.KO]: "새 콘크리트의 확산",
        },
        about: null,
        range: {
            [Locale.RU]: "200-700 мм",
            [Locale.EN]: "200-700 mm",
        },
        documents: [
            {
                [Locale.RU]: {
                    name: "ГОСТ 7473-2010",
                    href: "#",
                },
                [Locale.EN]: {
                    name: "GOST 7473-2010",
                    href: "#",
                },
            },
            {
                [Locale.RU]: {
                    name: "ГОСТ 27006-2019",
                    href: "#",
                },
                [Locale.EN]: {
                    name: "GOST 27006-2019",
                    href: "#",
                },
            },
        ],
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 4.4",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 4.4",
                href: "#",
            },
        },
    },

    {
        id: "202:002",
        name: {
            [Locale.RU]: "Подвижность бетонной смеси по осадке конуса",
            [Locale.EN]: "Slump consistency of fresh concrete",
            [Locale.AR]: "قوام الركود للخرسانة الطازجة",
            [Locale.CH]: "新拌混凝土的坍落度",
            [Locale.KO]: "새 콘크리트의 슬럼프 일관성",
        },
        about: null,
        range: {
            [Locale.RU]: "10-300 мм",
            [Locale.EN]: "10-300 mm",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 4.2",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 4.2",
                href: "#",
            },
        },
    },

    {
        id: "202:003",
        name: {
            [Locale.RU]: "Степень уплотняемости бетонной смеси",
            [Locale.EN]: "Contractibleness degree of fresh concrete",
            [Locale.AR]: "درجة انكماش الخرسانة الطازجة",
            [Locale.CH]: "新拌混凝土的收缩性",
            [Locale.KO]: "새 콘크리트의 수축성 정도",
        },
        about: null,
        range: {
            [Locale.RU]: "1.00-1.50",
            [Locale.EN]: "1.00-1.50",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 4.5",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 4.5",
                href: "#",
            },
        },
    },

    {
        id: "202:004",
        name: {
            [Locale.RU]: "Средняя плотность",
            [Locale.EN]: "Average density",
            [Locale.AR]: "متوسط الكثافة",
            [Locale.CH]: "平均密度",
            [Locale.KO]: "평균 밀도",
        },
        about: null,
        range: {
            [Locale.RU]: "600-5000 кг/м³",
            [Locale.EN]: "600-5000 kg/m³",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 5",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 5",
                href: "#",
            },
        },
    },

    {
        id: "202:005",
        name: {
            [Locale.RU]: "Объем вовлеченного воздуха",
            [Locale.EN]: "Entrained air volume",
            [Locale.AR]: "حجم الهواء المحصور",
            [Locale.CH]: "吸入空气量",
            [Locale.KO]: "유입 공기량",
        },
        about: null,
        range: {
            [Locale.RU]: "0.1-50 %",
            [Locale.EN]: "0.1-50 %",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 6.3 6.4",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 6.3 6.4",
                href: "#",
            },
        },
    },

    {
        id: "202:006",
        name: {
            [Locale.RU]: "Водоотделение",
            [Locale.EN]: "Water segregation",
            [Locale.AR]: "فصل المياه",
            [Locale.CH]: "水隔离",
            [Locale.KO]: "물 분리",
        },
        about: null,
        range: {
            [Locale.RU]: "0.1-5.0 %",
            [Locale.EN]: "0.1-5.0 %",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 7.4",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 7.4",
                href: "#",
            },
        },
    },

    {
        id: "202:007",
        name: {
            [Locale.RU]: "Раствороотделение",
            [Locale.EN]: "Mortar segregation",
            [Locale.AR]: "فصل الهاون",
            [Locale.CH]: "砂浆隔离",
            [Locale.KO]: "모르타르 분리",
        },
        about: null,
        range: {
            [Locale.RU]: "1-20 %",
            [Locale.EN]: "1-20 %",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 7.3",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 7.3",
                href: "#",
            },
        },
    },

    {
        id: "202:008",
        name: {
            [Locale.RU]: "Температура",
            [Locale.EN]: "Temperature",
            [Locale.AR]: "درجة الحرارة",
            [Locale.CH]: "温度",
            [Locale.KO]: "온도",
        },
        about: null,
        range: {
            [Locale.RU]: "1-40 °С",
            [Locale.EN]: "1-40 °C",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "ГОСТ 10181-2014 п. 8",
                href: "#",
            },
            [Locale.EN]: {
                name: "GOST 10181-2014 para. 8",
                href: "#",
            },
        },
    },

    {
        id: "202:009",
        name: {
            [Locale.RU]: "Осадка бетонной смеси",
            [Locale.EN]: "Slump Test",
            [Locale.AR]: "اختبار الركود",
            [Locale.CH]: "坍落度试验",
            [Locale.KO]: "슬럼프 테스트",
        },
        about: null,
        range: null,
        documents: {
            [Locale.RU]: {
                name: "EN 206:2017",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 206:2017",
                href: "#",
            }
        },
        methods: {
            [Locale.RU]: {
                name: "EN 12350-2/2019",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 12350-2/2019",
                href: "#",
            },
        },
    },  

    {
        id: "202:010",
        name: {
            [Locale.RU]: "Степень уплотняемости",
            [Locale.EN]: "Degree of Compactabilit",
            [Locale.AR]: "درجة الاندماج",
            [Locale.CH]: "紧凑程度",
            [Locale.KO]: "컴팩트한 정도",
        },
        about: null,
        range: {
            [Locale.RU]: "1.0-2.0",
            [Locale.EN]: "1.0-2.0",
        },
        documents: {
            [Locale.RU]: {
                name: "EN 206:2017",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 206:2017",
                href: "#",
            }
        },
        methods: {
            [Locale.RU]: {
                name: "EN 12350-4/2019",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 12350-4/2019",
                href: "#",
            },
        },
    },  

    {
        id: "202:011",
        name: {
            [Locale.RU]: "Удобоукладываемость по расплыву конуса",
            [Locale.EN]: "Flow Table Test",
            [Locale.AR]: "التحدب بالانتشار المخروطي",
            [Locale.CH]: "流量表测试",
            [Locale.KO]: "흐름표 테스트",
        },
        about: null,
        range: null,
        documents: {
            [Locale.RU]: {
                name: "EN 206:2017",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 206:2017",
                href: "#",
            }
        },
        methods: {
            [Locale.RU]: {
                name: "EN 12350-5/2019",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 12350-5/2019",
                href: "#",
            },
        },
    },  

    {
        id: "202:012",
        name: {
            [Locale.RU]: "Время расплыва до 500 мм",
            [Locale.EN]: "Blurring time up to 500 mm",
            [Locale.AR]: "وقت ضبابية يصل إلى 500 مم",
            [Locale.CH]: "模糊时间长达 500 毫米",
            [Locale.KO]: "최대 500mm 의 블러 시간",
        },
        about: null,
        range: {
            [Locale.RU]: "1.0-40.0 с",
            [Locale.EN]: "1.0-40.0 s",
        },
        documents: {
            [Locale.RU]: {
                name: "EN 206:2017",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 206:2017",
                href: "#",
            }
        },
        methods: {
            [Locale.RU]: {
                name: "EN 12350-5/2019",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 12350-5/2019",
                href: "#",
            },
        },
    },  

    {
        id: "202:013",
        name: {
            [Locale.RU]: "Плотность",
            [Locale.EN]: "Density",
            [Locale.AR]: "الكثافة",
            [Locale.CH]: "密度",
            [Locale.KO]: "밀도",
        },
        about: null,
        range: {
            [Locale.RU]: "600-5000 кг/м³",
            [Locale.EN]: "600-5000 kg/m³",
        },
        documents: {
            [Locale.RU]: {
                name: "EN 206:2017",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 206:2017",
                href: "#",
            }
        },
        methods: {
            [Locale.RU]: {
                name: "EN 12350-6/2019",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 12350-6/2019",
                href: "#",
            },
        },
    },  

    {
        id: "202:014",
        name: {
            [Locale.RU]: "Содержание воздуха",
            [Locale.EN]: "Air content",
            [Locale.AR]: "محتوى الهواء",
            [Locale.CH]: "空气含量",
            [Locale.KO]: "방송 콘텐츠",
        },
        about: null,
        range: {
            [Locale.RU]: "0.1-50 %",
            [Locale.EN]: "0.1-50 %",
        },
        documents: null,
        methods: {
            [Locale.RU]: {
                name: "EN 12350-7/2019",
                href: "#",
            },
            [Locale.EN]: {
                name: "EN 12350-7/2019",
                href: "#",
            },
        },
    },  
]