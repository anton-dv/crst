import { Locale, LocaleText } from "../types/Locale"

export type AreaItem = {
    id: string;
    name: LocaleText;
}

export type AreasDataType = {
    id: string;
    group: LocaleText;
    items: AreaItem[];
}[];

export const areasData: AreasDataType = [
    {
        id: "100",
        group: {
            [Locale.RU]: "Арматура",
            [Locale.EN]: "Reinforcement",
            [Locale.AR]: "التعزيز",
            [Locale.CH]: "加固",
            [Locale.KO]: "피팅",
        },
        items: [
            {
                id: "101",
                name: {
                    [Locale.RU]: "Арматурная сталь",
                    [Locale.EN]: "Reinforcing-bar steel",
                    [Locale.AR]: "حديد التسليح",
                    [Locale.CH]: "钢筋",
                    [Locale.KO]: "강화 강철",
                },
            },
            {
                id: "102",
                name: {
                    [Locale.RU]: "Сварные соединения арматурных стержней",
                    [Locale.EN]: "Welded joints of reinforcing rods",
                    [Locale.AR]: "الوصلات الملحومة لقضبان التسليح",
                    [Locale.CH]: "钢筋的焊接连接",
                    [Locale.KO]: "보강 철근의 용접 연결",
                },
            },
            {
                id: "103",
                name: {
                    [Locale.RU]: "Механические соединения арматурных стержней",
                    [Locale.EN]: "Mechanical reinforcement couplers",
                    [Locale.AR]: "الوصلات الميكانيكية لقضبان التسليح",
                    [Locale.CH]: "钢筋的机械连接",
                    [Locale.KO]: "철근의 기계적 연결",
                },
            },
        ],
    },
    {
        id: "200",
        group: {
            [Locale.RU]: "Бетон",
            [Locale.EN]: "Concrete",
            [Locale.AR]: "الخرسانة",
            [Locale.CH]: "混凝土",
            [Locale.KO]: "콘크리트",
        },
        items: [
            {
                id: "201",
                name: {
                    [Locale.RU]: "Бетоны",
                    [Locale.EN]: "Hardened concrete",
                    [Locale.AR]: "خرسانة صلبة",
                    [Locale.CH]: "硬化混凝土",
                    [Locale.KO]: "경화 콘크리트",
                },
            },
            {
                id: "202",
                name: {
                    [Locale.RU]: "Смеси бетонные",
                    [Locale.EN]: "Fresh concrete",
                    [Locale.AR]: "خلطات الخرسانة",
                    [Locale.CH]: "混凝土混合物",
                    [Locale.KO]: "콘크리트 믹스",
                },
            },
            {
                id: "203",
                name: {
                    [Locale.RU]: "Самоуплотняющиеся бетонные смеси",
                    [Locale.EN]: "Self-compacting fresh concrete",
                    [Locale.AR]: "خلطات الخرسانة ذاتية الضغط",
                    [Locale.CH]: "自密实混凝土混合料",
                    [Locale.KO]: "셀프 컴팩팅 콘크리트 믹스",
                },
            },
            {
                id: "204",
                name: {
                    [Locale.RU]: "Бетоны высокопрочные тяжелые и мелкозернистые для монолитных конструкций",
                    [Locale.EN]: "High-strength heavy-weight and fine-grane concretes for situ-casting structures",
                    [Locale.AR]: "خرسانة ثقيلة ودقيقة الحبيبات عالية القوة للهياكل المتجانسة",
                    [Locale.CH]: "用于整体结构的高强度重型细粒混凝土",
                    [Locale.KO]: "모놀리식 구조물을 위한 고강도 무겁고 세밀한 콘크리트",
                },
            },
            {
                id: "205",
                name: {
                    [Locale.RU]: "Вода для бетонов и строительных растворов",
                    [Locale.EN]: "Water for concrete and mortars",
                    [Locale.AR]: "الماء للخرسانة والملاط",
                    [Locale.CH]: "混凝土和砂浆用水",
                    [Locale.KO]: "콘크리트 및 모르타르용 물",
                },
            },
            {
                id: "206",
                name: {
                    [Locale.RU]: "Добавки для бетонов и строительных растворов",
                    [Locale.EN]: "Admixtures for concretes and mortars",
                    [Locale.AR]: "المواد المضافة للخرسانة والملاط",
                    [Locale.CH]: "混凝土和砂浆添加剂",
                    [Locale.KO]: "콘크리트 및 모르타르용 첨가제",
                },
            },
        ],
    },
    {
        id: "300",
        group: {
            [Locale.RU]: "Смеси",
            [Locale.EN]: "Mixtures",
            [Locale.AR]: "الخلائط",
            [Locale.CH]: "混合物",
            [Locale.KO]: "혼합물",
        },
        items: [
            {
                id: "301",
                name: {
                    [Locale.RU]: "Смеси сухие строительные",
                    [Locale.EN]: "Dry building mixes",
                    [Locale.AR]: "خلائط البناء الجاف",
                    [Locale.CH]: "干建筑混合物",
                    [Locale.KO]: "건식 건축 혼합물",
                },
            },
            {
                id: "302",
                name: {
                    [Locale.RU]: "Растворные смеси и растворы строительные",
                    [Locale.EN]: "Mortar mixes and mortars",
                    [Locale.AR]: "خلطات الملاط وقذائف الهاون للبناء",
                    [Locale.CH]: "建筑用砂浆混合物和砂浆",
                    [Locale.KO]: "건축용 모르타르 믹스 및 모르타르",
                },
            },
            {
                id: "303",
                name: {
                    [Locale.RU]: "Смеси щебеночно-гравийно-песчанные для покрытий и оснований автомобильных дорог и аэродромов",
                    [Locale.EN]: "Crushed stone-sandy mixtures for road and airfield surfacings and bases",
                    [Locale.AR]: "خلائط الحصى والحصى والرمل المسحوق لأرصفة وقواعد الطرق والمطارات",
                    [Locale.CH]: "用于高速公路和航空港路面和路基的碎石-砾石-砂混合物",
                    [Locale.KO]: "고속도로 및 비행장의 포장 및 바닥용 쇄석-자갈-모래 혼합물",
                },
            },
            {
                id: "304",
                name: {
                    [Locale.RU]: "Смеси песчанно-гравийные для строительных работ",
                    [Locale.EN]: "Sandy-gravel mixtures for construction work",
                    [Locale.AR]: "خلائط الرمل والحصى لأعمال الإنشاءات",
                    [Locale.CH]: "用于建筑工程的砂石混合物",
                    [Locale.KO]: "건설 작업용 모래 및 자갈 혼합물",
                },
            },
            {
                id: "305",
                name: {
                    [Locale.RU]: "Материалы строительные не рудные из отсевов дробления плотных горных пород при производстве щебня",
                    [Locale.EN]: "Non-metallic construction materials from sifting of crushing solid stone in aggregate manufacturing",
                    [Locale.AR]: "مواد البناء من غير الخام من رمال تكسير الصخور الكثيفة لإنتاج الحجر المسحوق",
                    [Locale.CH]: "从用于碎石生产的致密岩石破碎砂中提取非矿石建筑材料",
                    [Locale.KO]: "쇄석 생산용 고밀도 암석 파쇄 모래의 비광석 건설 자재",
                },
            },
            {
                id: "306",
                name: {
                    [Locale.RU]: "Смеси песчанно-гравийные для строительных работ",
                    [Locale.EN]: "Sandy-gravel mixtures for construction work",
                    [Locale.AR]: "خلائط الرمل والحصى لأعمال الإنشاءات",
                    [Locale.CH]: "用于建筑工程的砂石混合物",
                    [Locale.KO]: "건설 작업용 모래 및 자갈 혼합물",
                },
            },
        ],
    },
    {
        id: "400",
        group: {
            [Locale.RU]: "Лаки и краски",
            [Locale.EN]: "Varnishes and paints",
            [Locale.AR]: "الورنيش والدهانات",
            [Locale.CH]: "清漆和油漆",
            [Locale.KO]: "바니시 및 페인트",
        },
        items: [
            {
                id: "401",
                name: {
                    [Locale.RU]: "Лакокрасочное покрытие",
                    [Locale.EN]: "Paint coating",
                    [Locale.AR]: "طلاء الطلاء",
                    [Locale.CH]: "油漆涂层",
                    [Locale.KO]: "페인트 코팅",
                },
            },
            {
                id: "402",
                name: {
                    [Locale.RU]: "Мастики кровельные и гидроизоляционные",
                    [Locale.EN]: "Roofing and waterproof mastics",
                    [Locale.AR]: "معاجين التسقيف والعزل المائي",
                    [Locale.CH]: "屋顶和防水胶粘剂",
                    [Locale.KO]: "루핑 및 방수 마스틱",
                },
            },
        ],
    },
    {
        id: "500",
        group: {
            [Locale.RU]: "Конструкции",
            [Locale.EN]: "Constructions",
            [Locale.AR]: "الإنشاءات",
            [Locale.CH]: "建筑",
            [Locale.KO]: "구조",
        },
        items: [
            {
                id: "501",
                name: {
                    [Locale.RU]: "Сварные соединения конструкций (элементов)",
                    [Locale.EN]: "Welding joints of structures (elements)",
                    [Locale.AR]: "وصلات ملحومة من الهياكل (العناصر)",
                    [Locale.CH]: "结构（构件）的焊接接头",
                    [Locale.KO]: "구조물(요소)의 용접 조인트",
                },
            },
            {
                id: "502",
                name: {
                    [Locale.RU]: "Основной металл, сварные соединения и околошовнвя зона конструкций, трубопроводов (элементов), поверхности литых частей оборудования, деталей, изделий, арматуры",
                    [Locale.EN]: "Base metal, welded joints and near-heat zones of structures, pipelines (elements), surfaces of cast parts of equipment, parts, products, fittings",
                    [Locale.AR]: "المعدن الأساسي، والوصلات الملحومة والمنطقة شبه الملحومة من الهياكل، وخطوط الأنابيب (العناصر)، وأسطح الأجزاء المصبوبة من المعدات، والقطع، والمنتجات، والتجهيزات",
                    [Locale.CH]: "母材、结构、管道（元件）的焊接接头和近焊接区、设备、部件、产品、配件的铸造件表面",
                    [Locale.KO]: "구조물, 파이프 라인(요소)의 모재, 용접 조인트 및 이음새 근처 영역, 장비, 부품, 제품, 피팅의 주조 부품 표면",
                },
            },
            {
                id: "503",
                name: {
                    [Locale.RU]: "Строительные изделия и конструкции из бетона и железобетона",
                    [Locale.EN]: "Concrete and reinforced concrete construction products and structures",
                    [Locale.AR]: "منتجات البناء والهياكل المصنوعة من الخرسانة والخرسانة المسلحة",
                    [Locale.CH]: "混凝土和钢筋混凝土建筑产品和结构",
                    [Locale.KO]: "콘크리트 및 철근 콘크리트로 만든 건축 제품 및 구조물",
                },
            },
        ],
    },
    {
        id: "600",
        group: {
            [Locale.RU]: "Песок и щебень",
            [Locale.EN]: "Sand and crushed stone",
            [Locale.AR]: "الرمل والحجر المسحوق",
            [Locale.CH]: "砂和碎石",
            [Locale.KO]: "모래와 쇄석",
        },
        items: [
            {
                id: "601",
                name: {
                    [Locale.RU]: "Щебень",
                    [Locale.EN]: "Coarse Aggregates",
                    [Locale.AR]: "الحجر المسحوق",
                    [Locale.CH]: "碎石",
                    [Locale.KO]: "쇄석",
                },
            },
            {
                id: "602",
                name: {
                    [Locale.RU]: "Мелкий Заполнитель",
                    [Locale.EN]: "Fine Aggregates",
                    [Locale.AR]: "الركام الناعم",
                    [Locale.CH]: "细骨料",
                    [Locale.KO]: "정밀 집계",
                },
            },
            {
                id: "603",
                name: {
                    [Locale.RU]: "Песок и щебень",
                    [Locale.EN]: "Sand and crushed stone",
                    [Locale.AR]: "الرمل والحجر المسحوق",
                    [Locale.CH]: "砂和碎石",
                    [Locale.KO]: "모래와 쇄석",
                },
            },
            {
                id: "604",
                name: {
                    [Locale.RU]: "Песок для строительных работ",
                    [Locale.EN]: "Sand for construction work",
                    [Locale.AR]: "رمل لأعمال البناء",
                    [Locale.CH]: "建筑用砂",
                    [Locale.KO]: "건설 작업용 모래",
                },
            },
            {
                id: "605",
                name: {
                    [Locale.RU]: "Щебень и гравий из плотных горных пород",
                    [Locale.EN]: "Crushed stone and gravel of solid rocks",
                    [Locale.AR]: "الحجر المسحوق والحصى من الصخور الكثيفة",
                    [Locale.CH]: "从致密岩石中提取的碎石和砾石",
                    [Locale.KO]: "빽빽한 암석의 쇄석과 자갈",
                },
            },
        ],
    },
    {
        id: "700",
        group: {
            [Locale.RU]: "Грунт",
            [Locale.EN]: "Soil",
            [Locale.AR]: "التربة",
            [Locale.CH]: "土壤",
            [Locale.KO]: "토양",
        },
        items: [
            {
                id: "701",
                name: {
                    [Locale.RU]: "Грунты",
                    [Locale.EN]: "Soils",
                    [Locale.AR]: "التربة",
                    [Locale.CH]: "土壤",
                    [Locale.KO]: "토양",
                },
            },
        ],
    },
    {
        id: "800",
        group: {
            [Locale.RU]: "Цемент",
            [Locale.EN]: "Cement",
            [Locale.AR]: "الأسمنت",
            [Locale.CH]: "水泥",
            [Locale.KO]: "시멘트",
        },
        items: [
            {
                id: "801",
                name: {
                    [Locale.RU]: "Цементы",
                    [Locale.EN]: "Cements",
                    [Locale.AR]: "الأسمنت",
                    [Locale.CH]: "水泥",
                    [Locale.KO]: "시멘트",
                },
            },
        ],
    },
    {
        id: "900",
        group: {
            [Locale.RU]: "Металл",
            [Locale.EN]: "Metal",
            [Locale.AR]: "معدن",
            [Locale.CH]: "金属",
            [Locale.KO]: "금속",
        },
        items: [
            {
                id: "901",
                name: {
                    [Locale.RU]: "Сварные соединения",
                    [Locale.EN]: "Welded joints",
                    [Locale.AR]: "الوصلات الملحومة",
                    [Locale.CH]: "焊接接头",
                    [Locale.KO]: "용접 조인트",
                },
            },
            {
                id: "902",
                name: {
                    [Locale.RU]: "Черные и цветные металлы и изделия из них",
                    [Locale.EN]: "Ferrous and non-ferrous metals and products thereof",
                    [Locale.AR]: "المعادن الحديدية وغير الحديدية ومنتجاتها",
                    [Locale.CH]: "黑色和有色金属及其制品",
                    [Locale.KO]: "철 및 비철 금속 및 그 제품",
                },
            },
        ],
    },
];
