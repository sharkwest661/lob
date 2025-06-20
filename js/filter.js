const carMarks = document.getElementById("carMarks");
const tillMark = document.getElementById("tillMark");
const afterMarkMark = document.getElementById("afterMarkMark");
const afterMarkModel = document.getElementById("afterMarkModel");
const markModal = document.getElementById("brands-selectBox");
const allMarksBtn = document.querySelector(".allMarksBtn");
const respDist = document.getElementById("respDist");
const respInput1 = document.querySelector(".firstChecks input");
const respInput2 = document.querySelector(".secondChecks input");
const respInput3 = document.querySelector(".thirdChecks input");
const carList = document.getElementById("respCarList");
const markDropdown = document.querySelector(".mark_dropdown");
const markCloseBtn = document.getElementById("markCloseBtn");
const markOpenBtn = document.getElementById("brands-select");
const modelList = document.getElementById("carModel");
const modelDropdown = document.querySelector(".model_dropdown");
const modelCloseBtn = document.getElementById("modelCloseBtn");
const checkedMark = document.getElementById("checkedMark");
const checkedModel = document.getElementById("checkedModel");
const markLabel = document.getElementById("markLabel");
const modelLabel = document.getElementById("modelLabel");
const cityDropdown = document.querySelector(".city_dropdown");
const cityCloseBtn = document.getElementById("cityCloseBtn");
const cityList = document.getElementById("citiesList");
const citySelect = document.getElementById("citySelect");
const cityLabel = document.getElementById("cityLabel");
const checkedCity = document.getElementById("checkedCity");
const citySearch = document.getElementById("citySearch");
const markInput = document.getElementById("markInput");
const modelInput = document.getElementById("modelInput");
// --------------------------------------------
const banSelect = document.getElementById("banSelect");
const banList = document.getElementById("banList");
const banModal = document.querySelector(".ban_modal");
const banDropdown = document.querySelector(".ban_dropdown");
const banCloseBtn = document.getElementById("banCloseBtn");
const checkedBan = document.getElementById("checkedBan");
const banLabel = document.getElementById("banLabel");
// --------------------------------------------
const yearSelect1 = document.getElementById("yearsSelect1");
const yearList1 = document.getElementById("yearList1");
const yearModal1 = document.querySelector(".year_modal1");
const yearDropdown1 = document.querySelector(".year_dropdown1");
const yearCloseBtn1 = document.getElementById("yearCloseBtn1");
const checkedYear1 = document.getElementById("checkedYear1");
const yearLabel1 = document.getElementById("yearLabel1");
// --------------------------------------------
const yearSelect2 = document.getElementById("yearsSelect2");
const yearList2 = document.getElementById("yearList2");
const yearModal2 = document.querySelector(".year_modal2");
const yearDropdown2 = document.querySelector(".year_dropdown2");
const yearCloseBtn2 = document.getElementById("yearCloseBtn2");
const checkedYear2 = document.getElementById("checkedYear2");
const yearLabel2 = document.getElementById("yearLabel2");
// --------------------------------------------
const litrSelect1 = document.getElementById("litrSelect1");
const litrList1 = document.getElementById("litrList1");
const litrModal1 = document.querySelector(".litr_modal1");
const litrDropdown1 = document.querySelector(".litr_dropdown1");
const litrCloseBtn1 = document.getElementById("litrCloseBtn1");
const checkedLitr1 = document.getElementById("checkedLitr1");
const litrLabel1 = document.getElementById("litrLabel1");
// --------------------------------------------
const litrSelect2 = document.getElementById("litrSelect2");
const litrList2 = document.getElementById("litrList2");
const litrModal2 = document.querySelector(".litr_modal2");
const litrDropdown2 = document.querySelector(".litr_dropdown2");
const litrCloseBtn2 = document.getElementById("litrCloseBtn2");
const checkedLitr2 = document.getElementById("checkedLitr2");
const litrLabel2 = document.getElementById("litrLabel2");
// ---------------------------------------
const colorSelect = document.getElementById("colorSelect");
const colorList = document.getElementById("colorList");
const colorModal = document.querySelector(".color_modal");
const colorDropdown = document.querySelector(".color_dropdown");
const colorCloseBtn = document.getElementById("colorCloseBtn");
const checkedColor = document.getElementById("checkedColor");
const colorLabel = document.getElementById("colorLabel");
// ----------------------------------------

// ---------------------------------------

// ----------------------------------

const citiesArr = [
  "Ağcabədi",
  "Ağdam",
  "Ağdaş",
  "Ağstafa",
  "Ağsu",
  "Astara",
  "Babək",
  "Bakı",
  "Balakən",
  "Beyləqan",
  "Bərdə",
  "Biləsuvar",
  "Cəbrayıl",
  "Cəlilabad",
  "Culfa",
  "Daşkəsən",
  "Dəliməmmədli",
  "Füzuli",
  "Gədəbəy",
  "Gəncə",
  "Goranboy",
  "Göyçay",
  "Göygöl",
  "Göytəpə",
  "Hacıqabul",
  "Horadiz",
  "İmişli",
  "İsmayıllı",
  "Kürdəmir",
  "Laçın",
  "Lerik",
  "Lənkəran",
  "Liman",
  "Masallı",
  "Mingəçevir",
  "Naftalan",
  "Naxçıvan",
  "Neftçala",
  "Oğuz",
  "Ordubad",
  "Qax",
  "Qazax",
  "Qəbələ",
  "Qobustan",
  "Quba",
  "Qusar",
  "Saatlı",
  "Sabirabad",
  "Şabran",
  "Şahbuz",
  "Salyan",
  "Şamaxı",
  "Samux",
  "Şəki",
  "Şəmkir",
  "Şərur",
  "Şirvan",
  "Siyəzən",
  "Sumqayıt",
  "Şuşa",
  "Tərtər",
  "Tovuz",
  "Ucar",
  "Xaçmaz",
  "Xırdalan",
  "Xızı",
  "Xudat",
  "Yardımlı",
  "Yevlax",
  "Zaqatala",
  "Zərdab",
];
const marksArr = [
  {
    name: "Abarth",
    model: ["595"],
  },
  {
    name: "Alfa Romeo",
    model: ["159", "4C", "GTV", "Giulia", "Stelvio"],
  },
  {
    name: "Aprilia",
    model: ["RS 125", "RS 660", "RSV4", "Tuono 660"],
  },
  {
    name: "Aston Martin",
    model: ["DB9", "DBX", "Rapide", "V8 Vantage"],
  },
  {
    name: "ATV",
    model: ["150", "HUMMER 250"],
  },
  {
    name: "Audi",
    model: [
      "100",
      "80",
      "A1",
      "A3",
      "A4",
      "A5",
      "A6",
      "A6 allroad",
      "A7",
      "A7 sportback",
      "A8",
      "Q2",
      "Q3",
      "Q5",
      "Q5 Sportback",
      "Q7",
      "Q8",
      "Q8 Sportback e-tron",
      "Q8 e-tron",
      "RS3",
      "RS4",
      "RS7",
      "S4",
      "S5",
      "S6",
      "S8",
      "TT",
      "e-tron",
      "e-tron S Sportback",
    ],
  },
  {
    name: "Avatr",
    model: ["11"],
  },
  {
    name: "Avia",
    model: ["31"],
  },
  {
    name: "Baic",
    model: ["A1", "D20", "M60", "Senova D50", "X3", "X55", "X7"],
  },
  {
    name: "Bajaj",
    model: [
      "Avenger 220",
      "Discover",
      "Dominar 250",
      "Dominar 400",
      "Pulsar N250",
      "Pulsar NS 200",
      "Pulsar RS 200",
      "V",
    ],
  },
  {
    name: "Bentley",
    model: [
      "Bentayga",
      "Continental",
      "Continental Flying Spur",
      "Continental GT",
      "Flying Spur",
    ],
  },
  {
    name: "Bestune",
    model: ["NAT", "T33", "T77", "T99"],
  },
  {
    name: "BMC",
    model: ["PRO 620", "PRO 827", "PRO 832"],
  },
  {
    name: "BMW",
    model: [
      "1-series",
      "116",
      "118",
      "120",
      "125",
      "2-series",
      "218",
      "220",
      "228",
      "3-series",
      "316",
      "318",
      "320",
      "321",
      "323",
      "324",
      "325",
      "328",
      "328 GT",
      "330",
      "330e",
      "335",
      "4-series",
      "420",
      "428",
      "430",
      "435",
      "5-series",
      "520",
      "520 GT",
      "520e",
      "523",
      "525",
      "528",
      "530",
      "530e",
      "535",
      "535 GT",
      "540",
      "545",
      "6-series",
      "630",
      "640",
      "640 GT",
      "645",
      "650",
      "7-series",
      "725",
      "728",
      "730",
      "740",
      "750",
      "760",
      "8-series",
      "840",
      "BMW Moto",
      "F 700 GS",
      "R 1200 GS",
      "R 1200 GS Adventure",
      "M-series",
      "M3",
      "M340",
      "M4",
      "M5",
      "M6",
      "M8",
      "X3 M",
      "X5 M",
      "X6 M",
      "XM",
      "X-series",
      "X1",
      "X2",
      "X3",
      "X4",
      "X5",
      "X6",
      "X7",
      "Z-series",
      "Z4",
      "i-series",
      "i3",
      "i4",
      "i7",
      "i8",
      "iX",
    ],
  },
  {
    name: "BMW Alpina",
    model: ["B10", "B7"],
  },
  {
    name: "Buick",
    model: ["Enclave", "LaCrosse"],
  },
  {
    name: "BYD",
    model: [
      "F3",
      "G3",
      "Han",
      "Qin Plus",
      "Seal",
      "Song Plus",
      "Tang",
      "Yuan Plus",
    ],
  },
  {
    model: ["CM250R-HY", "CM400R-F8", "CM400R-F8"],
    name: "C.Moto",
  },
  {
    model: ["ATS", "BLS", "CT6", "CTS", "DTS", "Escalade", "SRX", "XTS"],
    name: "Cadillac",
  },
  {
    model: ["Spyder F3", "Spyder ST"],
    name: "Can-Am",
  },
  {
    model: [
      "250 CL-X",
      "ATV",
      "CFORCE 400",
      "CFORCE 400L",
      "Moto",
      "150 NK",
      "250 SR",
      "300 NK",
      "300 SR",
      "450 SR",
      "650 GT",
      "650 MT",
      "650 NK",
      "700 CL-X Heritage",
      "700 CL-X Sport",
    ],
    name: "CFMOTO",
  },
  {
    model: [
      "Alsvin",
      "Alsvin",
      "Alsvin V3",
      "Alsvin V5",
      "Alsvin V7",
      "Benni",
      "Benni E-Star",
      "CM-8",
      "CS 15",
      "CS 35",
      "CS 35 PLUS",
      "CS 55 Plus",
      "CS 75",
      "CS 85",
      "CS 95",
      "CX 20",
      "Eado",
      "Eado DT",
      "Eado Plus",
      "F 70",
      "Honor",
      "Oshan A600",
      "Raeton",
      "Star",
      "Uni-K",
      "Uni-T",
      "Uni-V",
    ],
    name: "Changan",
  },
  {
    model: [
      "Amulet (A15)",
      "Arrizo 5",
      "Arrizo 7",
      "Eastar (B11)",
      "Fora (A21)",
      "Fulwin 2",
      "Sweet (QQ)",
      "Tiggo (T11)",
      "Tiggo 2",
      "Tiggo 2 Pro",
      "Tiggo 3",
      "Tiggo 7 Pro",
      "Tiggo 8 Pro",
      "Tiggo 8 Pro Max",
      "Tiggo 8 Pro e+",
    ],
    name: "Chery",
  },
  {
    model: [
      "Aveo",
      "Blazer",
      "Camaro",
      "Captiva",
      "Cavalier",
      "Cobalt",
      "Colorado",
      "Corvette",
      "Cruze",
      "Damas",
      "Epica",
      "Equinox",
      "Kalos",
      "Labo",
      "Lacetti",
      "Lanos",
      "Malibu",
      "Matiz",
      "Menlo",
      "Nexia",
      "Niva",
      "Nubira",
      "Onix",
      "Orlando",
      "Rezzo",
      "Sonic",
      "Spark",
      "Suburban",
      "Tahoe",
      "Tracker",
      "TrailBlazer",
      "Traverse",
      "Trax",
      "Volt",
    ],
    name: "Chevrolet",
  },
  {
    model: [
      "200",
      "300C",
      "Concorde",
      "Intrepid",
      "Neon",
      "PT Cruiser",
      "Pacifica",
      "Town & Country",
      "Voyager",
    ],
    name: "Chrysler",
  },
  {
    model: ["Berlingo", "C3", "C4", "C4 L", "C4 Picasso", "DS3", "DS5"],
    name: "Citroen",
  },
  {
    model: ["Lodgy", "Logan", "Sandero"],
    name: "Dacia",
  },
  {
    model: [
      "Ace (Super Salon)",
      "BC 212",
      "BS090",
      "Chairman",
      "Damas",
      "Espero",
      "Gentra",
      "Lanos",
      "Leganza",
      "Matiz",
      "Nexia",
      "Nubira",
      "Prince",
      "Racer",
      "Tico",
    ],
    name: "Daewoo",
  },
  {
    model: ["105 XF", "85 CF", "95", "95 XF", "XF 460 FT"],
    name: "DAF",
  },
  {
    model: ["Sirion"],
    name: "Daihatsu",
  },
  {
    model: ["DY125-7", "DY150-12", "DY150GY"],
    name: "Dayun",
  },
  {
    model: [
      "C-32 S",
      "C-35",
      "C-37",
      "D51",
      "Glory 330",
      "Glory 330 S",
      "Glory 330 S Cargo",
    ],
    name: "DFSK",
  },
  {
    model: ["11", "K750"],
    name: "Dnepr",
  },
  {
    model: [
      "Caliber",
      "Challenger",
      "Charger",
      "Durango",
      "Journey",
      "Nitro",
      "Ram",
      "Sprinter",
      "Stratus",
      "Viper",
    ],
    name: "Dodge",
  },
  {
    model: ["DFL3310A13", "EQ1020TF", "Fengshen H30", "Fengshen S30"],
    name: "DongFeng",
  },
  {
    model: [
      "1100 EVO",
      "1199 Panigale",
      "Diavel",
      "Monster 796",
      "Panigale V4",
    ],
    name: "Ducati",
  },
  {
    model: [
      "CA102105",
      "CA7238AT",
      "J6P dumper 6x4",
      "J6P dumper 8x4",
      "Small Commercial",
      "CA1010",
      "Tiger VH",
      "Tiger VH-L",
      "Tiger VN",
      "Tiger VR",
    ],
    name: "FAW",
  },
  {
    model: [
      "500",
      "500C",
      "500L",
      "Albea",
      "Brava",
      "Ducato",
      "Fiorino",
      "Linea",
      "Panda",
      "Punto",
      "Qubo",
      "Stilo",
      "Tempra",
    ],
    name: "Fiat",
  },
  {
    model: [
      "Bronco Sport",
      "C-MAX",
      "Cargo",
      "Courier",
      "Ecosport",
      "Edge",
      "Escape",
      "Expedition",
      "Explorer",
      "F-150",
      "Fiesta",
      "Flex",
      "Focus",
      "Fusion",
      "Galaxy",
      "Kuga",
      "Mondeo",
      "Mustang",
      "Mustang Mach-E",
      "Puma",
      "Ranger",
    ],
    name: "Ford",
  },
  {
    model: ["BJ6486B1DBA-2", "Forland", "Ollin"],
    name: "Foton",
  },
  {
    model: ["GA5", "GS4", "GS5", "GS8"],
    name: "GAC",
  },
  {
    model: [
      "12 ЗИМ",
      "221717",
      "231073",
      "24",
      "24-02",
      "24-10",
      "2705",
      "2705-757",
      "2705-764",
      "2705-777",
      "27057",
      "27527-745",
      "2757",
      "3102",
      "31029",
      "3110",
      "31105",
      "3111",
      "32212",
      "322173",
      "3302-288",
      "3302-744",
      "330200",
      "330202-740",
      "33021",
      "33023-744",
      "330232-744",
      "33027",
      "33027-745",
      "3307",
      "3309-352",
      "52",
      "53",
      "66",
      "69",
      "A21R22-03",
      "Biznes 330273",
      "C41R13",
      "C41R92",
      "C45R02",
      "Gazon C41R33",
      "M-1",
      "M-20 Pobeda",
      "M-21",
      "NEXT A68R52 CITY LINE",
      "Next A21R22-30",
      "Next A21R32-30",
      "Next A22R32",
      "Next A23R32",
      "Next A31R32",
      "Next A65R32",
      "Next C41RB3",
      "Next А31R32",
      "SAZ-3507",
      "Sadko C42A43",
      "Siber",
      "Sobol",
    ],
    name: "GAZ",
  },
  {
    model: [
      "Atlas Pro",
      "CK",
      "Coolray",
      "Emgrand",
      "Emgrand X7",
      "MK",
      "Monjaro",
      "Okavango",
      "TX4",
      "Tugella",
      "Tugella S",
    ],
    name: "Geely",
  },
  {
    model: ["G80"],
    name: "Genesis",
  },
  {
    name: "GMC",
    model: ["Acadia", "Jimmy", "Savana", "Terrain"],
  },
  {
    model: [
      "Hover",
      "Hover H3",
      "Hover H5",
      "Hover H6",
      "Hover M2",
      "Hover M4",
      "Pegasus",
      "Voleex C30",
      "Voleex C50",
      "Wingle",
    ],
    name: "Great Wall",
  },
  {
    name: "Haima",
    model: ["8S"],
  },
  {
    name: "Haojue",
    model: ["HJ110-6", "HJ125-8E", "HJ150-9", "HJ150-9A", "TR150S"],
  },
  {
    name: "Harley-Davidson",
    model: [
      "FLD Dyna Switchback",
      "FLHR Road King",
      "Softail Deluxe",
      "Softail Fat Boy",
      "Sportster Custom 1200",
      "Street Rod",
      "XL 1200 NS",
    ],
  },
  {
    name: "Haval",
    model: ["Dargo", "F7x", "H2", "H6", "H6 GT", "H9", "Jolion"],
  },
  {
    name: "Honda",
    model: ["Accord", "CR-V", "CR-Z", "City", "Civic", "Clarity", "Crosstour"],
  },
  {
    name: "Hongqi",
    model: ["E-HS9", "H9", "HS5", "HS7"],
  },
  {
    name: "HOWO",
    model: ["3241V", "371", "A7", "Sinotruk"],
  },
  {
    name: "Hozon",
    model: ["Neta U", "Neta V"],
  },
  {
    name: "Hummer",
    model: ["H2", "H3"],
  },
  {
    name: "Hyundai",
    model: [
      "Accent",
      "Atos",
      "Azera",
      "Chorus",
      "County",
      "Coupe",
      "Creta",
      "Elantra",
      "Equus",
      "Excel",
      "Galloper",
      "Genesis",
      "Genesis Coupe",
      "Getz",
      "Grand Santa Fe",
      "Grandeur",
      "H 100",
      "H-1",
      "HD-45",
      "HD-65",
      "HD-72",
      "IONIQ 5",
      "IONIQ Plug-in-Hybrid",
      "Kona",
      "Matrix",
      "Palisade",
      "Santa Cruz",
      "Santa Fe",
      "Sonata",
      "Staria",
      "Terracan",
      "Tiburon",
      "Trajet",
      "Tucson",
      "Veloster",
      "Venue",
      "Veracruz",
      "Verna",
      "XG",
      "i10",
      "i20",
      "i30",
      "i40",
      "ix35",
      "ix55",
    ],
  },
  {
    name: "IJ",
    model: [
      "2126 Oda",
      "2717",
      "27175",
      "49",
      "IJ Moto",
      "Planet 5",
      "Upiter 5",
    ],
  },
  {
    name: "Indian Motorcycle",
    model: ["Scout"],
  },
  {
    name: "Infiniti",
    model: [
      "EX-series",
      "EX35",
      "FX-series",
      "FX35",
      "FX37",
      "FX45",
      "G-series",
      "G25",
      "G35",
      "G37",
      "M-series",
      "M37S",
      "Q-series",
      "Q50",
      "Q50S",
      "Q70",
      "QX4",
      "QX-series",
      "QX30",
      "QX50",
      "QX55",
      "QX56",
      "QX60",
      "QX70",
      "QX70S",
      "QX80",
    ],
  },
  {
    name: "Iran Khodro",
    model: ["Runna", "Samand", "Soren"],
  },
  {
    name: "Isuzu",
    model: [
      "Ecobus",
      "FSR 90 L",
      "FVR 34 Q",
      "MD 22 B",
      "NHR 55 E",
      "NKR 55 E",
      "NKR 55 L",
      "NKR 66 E",
      "NMR 77 H",
      "NMR 85 H",
      "NPR",
      "NPR 66 L",
      "NPR 71",
      "NPR 75 K",
      "NPR 75 L-K",
      "NQR 71 PL",
      "Roybus",
      "Turkuaz",
    ],
  },
  {
    name: "Iveco",
    model: [
      "35C13V",
      "35C15",
      "Astra HD8",
      "Daily 30-8",
      "Daily 35C15VH",
      "Eurocargo",
      "Eurotrakker Cursor",
      "Otoyol",
      "Trakker",
    ],
  },
  {
    name: "JAC",
    model: [
      "HFC 1040K",
      "HFC1061K5P",
      "J7",
      "JS3",
      "JS4",
      "JS8",
      "Sunray",
      "T8",
    ],
  },
  {
    name: "Jaguar",
    model: [
      "E-Pace",
      "F-Pace R",
      "F-Type",
      "F-Type R",
      "F-Type S",
      "S-Type",
      "XE",
      "XF",
      "XJ L",
    ],
  },
  {
    name: "Jeep",
    model: [
      "Cherokee",
      "Compass",
      "Gladiator",
      "Grand Cherokee",
      "Patriot",
      "Renegade",
      "Wrangler",
    ],
  },
  {
    name: "Jetour",
    model: ["Dashing", "X70", "X70 PLUS", "X90 PLUS", "X95"],
  },
  {
    name: "Jiajue",
    model: ["N10"],
  },
  {
    name: "Jianshe",
    model: ["XTZ 150", "CRF", "CRF230", "JS125-7F", "YBR-K"],
  },
  {
    name: "KAIYI",
    model: ["X3", "X3 Pro"],
  },
  {
    name: "KamAz",
    model: [
      "4308",
      "43101",
      "44108",
      "5320",
      "53202",
      "53212",
      "53229",
      "5410",
      "54112",
      "54115",
      "5511",
      "55111",
      "55114",
      "65115",
      "6520",
      "65201",
      "65222",
    ],
  },
  {
    name: "Kanuni",
    model: ["Mati 125", "Nev 50", "Trodon XS 50", "Visal 125"],
  },
  {
    name: "Karry",
    model: ["Dolphin"],
  },
  {
    name: "Karsan",
    model: ["Atak"],
  },
  {
    name: "Kawasaki",
    model: [
      "1400 GTR",
      "Ninja 1000",
      "Ninja 400",
      "Ninja 650",
      "Ninja ZX-10R",
      "Versys 650",
      "Z650",
      "ZX-6R",
    ],
  },
  {
    name: "Keeway",
    model: ["Superlight 150cc"],
  },
  {
    name: "Khazar",
    model: ["LX", "SD"],
  },
  {
    name: "Kia",
    model: [
      "Avella",
      "Besta",
      "Bongo",
      "Cadenza",
      "Capital",
      "Carens",
      "Carnival",
      "Ceed",
      "Ceed SW",
      "Cerato",
      "Cerato Koup",
      "Clarus",
      "EV6",
      "K2700",
      "K3",
      "K5",
      "K7",
      "K8",
      "Magentis",
      "Mohave",
      "Morning",
      "Niro",
      "Opirus",
      "Optima",
      "Picanto",
      "Pregio",
      "Pride",
      "ProCeed",
      "Ray",
      "Rio",
      "Rio X-Line",
      "Seltos",
      "Sephia",
      "Shuma",
      "Sorento",
      "Soul",
      "Spectra",
      "Sportage",
      "Stinger",
      "Stonic",
    ],
  },
  {
    name: "Kinroad",
    model: ["XT250ATV-2"],
  },
  {
    name: "KrAZ",
    model: ["250"],
  },
  {
    name: "KTM",
    model: ["390 Duke", "690 Duke", "RC 390"],
  },
  {
    name: "Kuba",
    model: ["Blueberry", "X-boss"],
  },
  {
    name: "LADA (VAZ)",
    model: [
      "2101",
      "21011",
      "21013",
      "2102",
      "2103",
      "2104",
      "21045",
      "2105",
      "2106",
      "2107",
      "2108",
      "2109",
      "21099",
      "2110",
      "21103",
      "2111",
      "2112",
      "2113",
      "2114",
      "2115",
      "Granta",
      "Granta Cross",
      "Kalina",
      "Largus",
      "Largus",
      "Largus Cross",
      "Niva",
      "Niva Bronto",
      "Niva Travel",
      "Oka",
      "Priora",
      "Vesta",
      "Vesta",
      "Vesta Cross",
      "Vesta SW Cross",
      "XRAY",
      "XRAY",
      "XRAY Cross",
    ],
  },
  {
    name: "Lamborghini",
    model: ["Aventador", "Urus"],
  },
  {
    name: "Land Rover",
    model: [
      "Defender",
      "Discovery",
      "Discovery Sport",
      "Freelander",
      "RR Evoque",
      "RR Sport",
      "RR Velar",
      "Range Rover",
    ],
  },
  {
    name: "Leapmotor",
    model: ["C11", "T03"],
  },
  {
    name: "Lexus",
    model: [
      "CT-series",
      "CT 200h",
      "ES-series",
      "ES 200",
      "ES 250",
      "ES 300",
      "ES 300h",
      "ES 350",
      "GS-series",
      "GS 200t",
      "GS 250",
      "GS 300",
      "GS 350",
      "GS 430",
      "GS 460",
      "GX-series",
      "GX 460",
      "GX 470",
      "HS-series",
      "HS 250h",
      "IS-series",
      "IS 200",
      "IS 250",
      "IS 300",
      "IS 350",
      "LS-series",
      "LS 350",
      "LS 460",
      "LS 500",
      "LX-series",
      "LX 450",
      "LX 470",
      "LX 500d",
      "LX 570",
      "LX 600",
      "NX-series",
      "NX 200",
      "NX 200t",
      "NX 250",
      "NX 300",
      "NX 300h",
      "NX 350",
      "NX 350h",
      "RX-series",
      "RX 200t",
      "RX 300",
      "RX 330",
      "RX 350",
      "RX 350h",
      "RX 400h",
      "RX 450h",
      "UX-series",
      "UX 250h",
    ],
  },
  {
    name: "Li Auto",
    model: ["L7", "l9", "One"],
  },
  {
    name: "Lifan",
    model: ["320", "330", "520", "620", "720", "LF1022", "X60"],
  },
  {
    name: "Lincoln",
    model: ["Aviator", "MKT", "MKZ", "Navigator", "Towncar"],
  },
  {
    name: "Lotus",
    model: ["Eletre"],
  },
  {
    name: "LuAz",
    model: ["967", "969M"],
  },
  {
    name: "Mack",
    model: ["Mack Anthem"],
  },
  {
    name: "MAN",
    model: [
      "10163",
      "19.414",
      "26.403",
      "27403",
      "37.343 Silent",
      "F 2000",
      "Lion's Star",
      "RH 403",
      "TGA 18.400",
      "TGA 18.440",
      "TGA 18.480",
      "TGA 26.440",
      "TGA 33.480",
      "TGA 41.400",
      "TGA 440",
      "TGA 480",
      "TGL8.180",
      "TGX 18.440",
      "TGX 18.480",
    ],
  },
  {
    name: "Maple",
    model: ["X3 Pro"],
  },
  {
    name: "MAZ",
    model: [
      "437141",
      "5337",
      "54229",
      "54323",
      "5549",
      "6303",
      "642208",
      "643008",
    ],
  },
  {
    name: "Mazda",
    model: [
      "2",
      "3",
      "323",
      "5",
      "6",
      "CX-3",
      "CX-30",
      "CX-5",
      "CX-60",
      "CX-7",
      "CX-9",
      "MX-30",
      "Millenia",
      "RX-8",
      "Tribute",
      "XEDOS",
    ],
  },
  {
    name: "Megelli",
    model: ["250R", "250S"],
  },
  {
    name: "Mercedes",
    model: [
      "170 V",
      "190",
      "A-class",
      "A 150",
      "A 160",
      "A 170",
      "A 180",
      "A 190",
      "A 200",
      "A 220",
      "A 250 e",
      "AMG GT",
      "AMG GT 63 S",
      "AMG GT S",
      "B-class",
      "B 150",
      "B 170",
      "B 180",
      "B 200",
      "C-class",
      "C 160",
      "C 180",
      "C 200",
      "C 220",
      "C 230",
      "C 240",
      "C 250",
      "C 270",
      "C 280",
      "C 300",
      "C 300 e",
      "C 32 AMG",
      "C 320",
      "C 350",
      "C 350 e",
      "C 63 AMG",
      "C 63 S AMG",
      "CL-class",
      "CL 500",
      "CL 550",
      "CL 63 AMG",
      "CLA-class",
      "CLA 180",
      "CLA 200",
      "CLA 250",
      "CLA 45 S AMG",
      "CLK-class",
      "CLK 200",
      "CLK 230",
      "CLK 240",
      "CLK 320",
      "CLK 350",
      "CLS-class",
      "CLS 250 CDI",
      "CLS 320",
      "CLS 350",
      "CLS 450 Coupe",
      "CLS 500",
      "CLS 53 AMG",
      "CLS 55 AMG",
      "CLS 63 AMG",
      "Citan",
      "Commercial",
      "0303",
      "0403",
      "1217",
      "208 D",
      "308 D",
      "408 D",
      "410 D",
      "412 D",
      "609 D",
      "709 D",
      "711 D",
      "811 D",
      "812 D",
      "814 D",
      "Actros 1840",
      "Actros 1843",
      "Actros 1844",
      "Actros 1846",
      "Actros 1848",
      "Actros 2540",
      "Actros 2544",
      "Actros 2631",
      "Atego 1215",
      "Atego 1217",
      "Atego 1218",
      "Atego 1222",
      "Atego 1223",
      "Atego 1224",
      "Atego 1229",
      "Atego 1317",
      "Atego 1323",
      "Atego 1324",
      "Atego 1328",
      "Atego 1523",
      "Atego 1524",
      "Atego 1528",
      "Atego 1529",
      "Atego 1823",
      "Atego 1824",
      "Atego 1828",
      "Atego 2528",
      "Atego 809",
      "Atego 812",
      "Atego 813",
      "Atego 814",
      "Atego 815",
      "Atego 816",
      "Atego 817",
      "Atego 818",
      "Atego 822",
      "Atego 917",
      "Axor 1824",
      "Axor 1829",
      "Axor 1833",
      "Axor 1840",
      "Axor 1843",
      "Axor 2529",
      "Axor 2533",
      "Axor 2533",
      "Axor 2540",
      "Axor 3028",
      "Axor 3340",
      "Axor 4140",
      "Travego",
      "Vario",
      "E-class",
      "200",
      "E 180",
      "E 200",
      "E 220",
      "E 230",
      "E 240",
      "E 250",
      "E 260",
      "E 270",
      "E 280",
      "E 290",
      "E 300",
      "E 300 de",
      "E 300 e",
      "E 320",
      "E 350",
      "E 400",
      "E 420",
      "E 43 4MATIC",
      "E 430",
      "E 500",
      "EQC",
      "EQC 400 4MATIC",
      "EQE",
      "EQE 350",
      "EQS",
      "EQS 350",
      "EQS 450+",
      "EQS 580 4MATIC",
      "EQV",
      "EQV 300",
      "G-class",
      "G 230",
      "G 320",
      "G 350",
      "G 400",
      "G 500",
      "G 55 AMG",
      "G 55 BRABUS K8",
      "G 63 AMG",
      "GL-class",
      "GL 320",
      "GL 350",
      "GL 400",
      "GL 450",
      "GL 500",
      "GL 550",
      "GL 63 AMG",
      "GL Brabus Widestar",
      "GLA-class",
      "GLA 200",
      "GLA 250",
      "GLB-class",
      "GLB 200",
      "GLB 250",
      "GLC-class",
      "GLC 200 4Matic",
      "GLC 200 4Matic Coupe",
      "GLC 220",
      "GLC 250",
      "GLC 250 Coupe",
      "GLC 300",
      "GLC 300 Coupe",
      "GLC 300 e 4Matic",
      "GLC 300 e 4Matic Coupe",
      "GLE-class",
      "GLE 250",
      "GLE 300",
      "GLE 350",
      "GLE 350 Coupe",
      "GLE 400",
      "GLE 400 Coupe",
      "GLE 43 AMG",
      "GLE 43 AMG Coupe",
      "GLE 450",
      "GLE 450 4Matic Coupe",
      "GLE 450 AMG Coupe",
      "GLE 53 AMG",
      "GLE 53 AMG Coupe",
      "GLE 63 AMG Coupe",
      "GLE 63 AMG S 4Matic+ Coupe",
      "GLK-class",
      "GLK 220",
      "GLK 250",
      "GLK 350",
      "GLS-class",
      "GLS 350",
      "GLS 400",
      "GLS 450",
      "GLS 500",
      "GLS 580",
      "GLS 63 AMG",
      "ML-class",
      "ML 230",
      "ML 250",
      "ML 270",
      "ML 280",
      "ML 300",
      "ML 320",
      "ML 350",
      "ML 400",
      "ML 500",
      "ML 55 AMG",
      "ML 63 AMG",
      "Metris",
      "R-class",
      "R 280",
      "R 350",
      "S-class",
      "300 SD",
      "500 SE",
      "500 SEL",
      "560 SEL",
      "S 250",
      "S 280",
      "S 300",
      "S 320",
      "S 350",
      "S 350 d",
      "S 350 d 4Matic",
      "S 400",
      "S 400 Coupe",
      "S 400 d 4Matic",
      "S 420",
      "S 430",
      "S 450",
      "S 450 4Matic",
      "S 500",
      "S 500 4Matic",
      "S 550",
      "S 550 e",
      "S 560 4Matic",
      "S 580 4MATIC",
      "S 600",
      "S 63 AMG",
      "S 63 AMG Coupe",
      "S 65 AMG",
      "SL-class",
      "SL 55 AMG",
      "SL 63 AMG",
      "SLK-class",
      "SLK 200",
      "SLK 230",
      "Sprinter",
      "Sprinter 208",
      "Sprinter 211",
      "Sprinter 212",
      "Sprinter 213",
      "Sprinter 215",
      "Sprinter 308",
      "Sprinter 310",
      "Sprinter 311",
      "Sprinter 312",
      "Sprinter 313",
      "Sprinter 314",
      "Sprinter 315",
      "Sprinter 316",
      "Sprinter 412",
      "Sprinter 413",
      "Sprinter 416",
      "Sprinter 513",
      "Sprinter 515",
      "Sprinter 516",
      "Sprinter 517",
      "Sprinter 518",
      "V-class",
      "V 220",
      "V 230",
      "V 250",
      "V 300",
      "Viano",
      "Vaneo",
      "Vito",
      "Vito",
      "Vito 108",
      "Vito 109",
      "Vito 110",
      "Vito 111",
      "Vito 112",
      "Vito 113",
      "Vito 114",
      "Vito 115",
      "Vito 116",
      "Vito 126",
      "X-Class",
      "X 250D",
    ],
  },
  {
    name: "Mercedes-Maybach",
    model: [
      "GLS 600 4MATIC",
      "S 400",
      "S 450",
      "S 500",
      "S 560",
      "S 580 4MATIC",
      "S 600",
    ],
  },
  {
    name: "MG",
    model: [
      "3",
      "350",
      "4 EV",
      "5",
      "550",
      "6",
      "GT",
      "One",
      "RX8",
      "ZS",
      "ZS T",
    ],
  },
  {
    name: "Mini",
    model: ["Clubman", "Cooper", "Countryman"],
  },
  {
    name: "Minsk",
    model: ["1.101 'Kroha'", "D4 125", "X250"],
  },
  {
    name: "Mitsubishi",
    model: [
      "ASX",
      "Airtrek",
      "Attrage",
      "Canter",
      "Carisma",
      "Chariot",
      "Eclipse Cross",
      "Fuso Canter",
      "Galant",
      "Grands",
      "L200",
      "L300",
      "Lancer",
      "Mirage",
      "Montero",
      "Outlander",
      "Outlander Sport",
      "Pajero",
      "Pajero Pinin",
      "Pajero Sport",
      "Pajero io",
      "Prenses",
      "Rosa",
      "Xpander",
    ],
  },
  {
    name: "Mondial",
    model: ["150 MASH", "50 Revival", "50 ZNU"],
  },
  {
    name: "Moskvich",
    model: ["2140", "2141", "2715", "400", "407", "412"],
  },
  {
    name: "Muravey",
    model: [
      "Muravey- 2 01",
      "Muravey- 2 02",
      "Muravey- 2 03",
      "TG200",
      "TGA200",
    ],
  },
  {
    name: "MV Agusta",
    model: ["Brutale 675", "F3 800"],
  },
  {
    name: "Nama",
    model: ["48-2"],
  },
  {
    name: "Nissan",
    model: [
      "Almera",
      "Altima",
      "Cedric",
      "Datsun",
      "GT-R",
      "Juke",
      "Kicks",
      "Leaf",
      "March",
      "Maxima",
      "Micra",
      "Murano",
      "Navara",
      "Note",
      "Pathfinder",
      "Patrol",
      "Presage",
      "Primera",
      "Qashqai",
      "Rogue",
      "Sentra",
      "Sunny",
      "Teana",
      "Terrano",
      "Tiida",
      "Urvan",
      "Versa",
      "Wingroad",
      "X-Trail",
      "Xterra",
    ],
  },
  {
    name: "Nooma",
    model: ["Ninja"],
  },
  {
    name: "Opel",
    model: [
      "Antara",
      "Astra",
      "Combo",
      "Corsa",
      "Frontera",
      "Grandland X",
      "Insignia",
      "Kadett",
      "Meriva",
      "Mokka",
      "Omega",
      "Signum",
      "Sintra",
      "Tigra",
      "Vectra",
      "Vita",
      "Zafira",
    ],
  },
  {
    name: "Parvaz",
    model: ["GS 200"],
  },
  {
    name: "PAZ",
    model: ["32054", "4234"],
  },
  {
    name: "Peugeot",
    model: [
      "2008",
      "2008",
      "e-2008",
      "206",
      "207",
      "208",
      "3008",
      "301",
      "307",
      "308",
      "308",
      "308 SW",
      "405",
      "406",
      "407",
      "5008",
      "508",
      "508",
      "607",
      "Expert",
      "Khazar 406",
      "Pars",
      "Partner",
      "Rifter",
      "Traveller",
    ],
  },
  {
    name: "Polaris",
    model: [
      "GEM",
      "GEM e2",
      "GEM e4",
      "RZR S 1000",
      "RZR XP 1000 HIGH Lifter",
      "Sportsman 570",
      "Sportsman 850",
      "Sportsman Touring 850 SP",
      "Sportsman XP 1000",
    ],
  },
  {
    name: "Polestar",
    model: ["2"],
  },
  {
    name: "Porsche",
    model: [
      "718",
      "718 Boxster",
      "911",
      "911 Carrera",
      "911 Carrera S",
      "Boxster",
      "Cayenne",
      "Cayenne",
      "Cayenne Coupe",
      "Cayenne E-Hybrid",
      "Cayenne E-Hybrid Coupe",
      "Cayenne GTS",
      "Cayenne GTS Coupe",
      "Cayenne S",
      "Cayenne S Coupe",
      "Cayenne Turbo",
      "Cayenne Turbo GT Coupe",
      "Cayenne Turbo S",
      "Cayman",
      "Macan",
      "Macan",
      "Macan S",
      "Macan Turbo",
      "Panamera",
      "Panamera",
      "Panamera 4",
      "Panamera 4 E-Hybrid",
      "Panamera 4S",
      "Panamera 4S Executive",
      "Panamera GTS",
      "Panamera S E-Hybrid",
      "Panamera Turbo",
      "Panamera Turbo Executive",
      "Panamera Turbo S",
      "Taycan",
      "Taycan",
      "Taycan 4S",
      "Taycan Turbo S",
    ],
  },
  {
    name: "RAF",
    model: ["2203"],
  },
  {
    name: "Ravon",
    model: ["Nexia R3", "R4"],
  },
  {
    name: "Renault",
    model: [
      "12 Toros",
      "19",
      "21",
      "Arkana",
      "Clio",
      "Dokker",
      "Duster",
      "Espace",
      "Fluence",
      "Grand Scenic",
      "Kangoo",
      "Kaptur",
      "Koleos",
      "Laguna",
      "Logan",
      "Magnum",
      "Mascott",
      "Master",
      "Megane",
      "Megane Scenic",
      "Modus",
      "Premium 420",
      "Sandero",
      "Scenic",
      "Symbol",
      "Tondar",
      "Trafic",
      "Twizy",
    ],
  },
  {
    name: "RKS",
    model: ["Next 50", "Pollo 50", "Spontini 110"],
  },
  {
    name: "Rolls-Royce",
    model: ["Ghost", "Phantom", "Wraith"],
  },
  {
    name: "Royal Enfield",
    model: ["Classic 350", "Hunter 350", "Meteor 350", "Super Meteor 650"],
  },
  {
    name: "Saipa",
    model: ["132", "141", "Saina", "Tiba"],
  },
  {
    name: "Scania",
    model: ["G 420", "R 420", "R 440", "R 480", "R 500"],
  },
  {
    name: "SEAT",
    model: ["Alhambra", "Exeo", "Ibiza", "Leon", "Toleda"],
  },
  {
    name: "Setra",
    model: ["215 HD"],
  },
  {
    name: "Shacman",
    model: ["F2000", "F3000", "SX3315DT366"],
  },
  {
    name: "Shaolin",
    model: ["SLG 6602"],
  },
  {
    name: "Skoda",
    model: [
      "Kodiaq",
      "Octavia",
      "Praktik",
      "Rapid",
      "Roomster",
      "Scala",
      "Superb",
      "Yeti",
    ],
  },
  {
    name: "Skywell",
    model: ["ET5", "HT-i"],
  },
  {
    name: "Smart",
    model: ["Forfour"],
  },
  {
    name: "Soueast",
    model: ["A5", "DX5", "DX7"],
  },
  {
    name: "Ssang Yong",
    model: [
      "Actyon",
      "Actyon Sports",
      "Istana",
      "Korando",
      "Kyron",
      "Rexton",
      "Rexton Sports",
      "Tivoli",
      "Turismo",
    ],
  },
  {
    name: "Subaru",
    model: [
      "B9 Tribeca",
      "BRZ",
      "Forester",
      "Impreza",
      "Legacy",
      "Outback",
      "Tribeca",
      "XV",
    ],
  },
  {
    name: "Suzuki",
    model: [
      "Aerio",
      "Baleno",
      "Grand Vitara",
      "Jimny",
      "Kizashi",
      "SX4",
      "Suzuki Moto",
      "AN 650",
      "DL 1000",
      "GSF 1200S Bandit",
      "GSF 600S Bandit",
      "GSF 650N Bandit",
      "GSR 600",
      "GSR 750",
      "GSX-R 1000",
      "GSX-R 600",
      "GSX-R 750",
      "GSX-S 750",
      "GSX-S1000",
      "Intruder",
      "Intruder M1800R",
      "Kingquad 500",
      "Kingquad 750",
      "RM-Z 450",
      "V-Strom 650",
      "Swift",
      "Vitara",
      "XL7",
    ],
  },
  {
    name: "Tesla",
    model: ["Model 3", "Model S", "Model X", "Model Y"],
  },
  {
    name: "Tofas",
    model: ["Dogan", "Kartal", "Sahin"],
  },
  {
    name: "Toyota",
    model: [
      "Alphard",
      "Auris",
      "Avalon",
      "Anensis",
      "C-HR",
      "Camry",
      "Carina",
      "Corolla",
      "Corolla Cross",
      "Estima",
      "FJ Cruiser",
      "Fortuner",
      "Harrier",
      "HiAce",
      "Highlander",
      "Hilux",
      "IQ",
      "Izoa",
      "Land Cruiser",
      "Prado",
      "Prius",
      "Prius C",
      "Prius Prime",
      "Prius V",
      "RAV4",
      "Raize",
      "Rush",
      "Sequoia",
      "Sienna",
      "Surf",
      "Tacoma",
      "Tundra",
      "Urban Cruiser",
      "Venza",
      "Verso",
      "Vitz",
      "Yaris",
      "Yaris Cross",
      "bZ3",
      "bZ4X",
    ],
  },
  {
    name: "Tufan",
    model: [
      "CR 200",
      "CUB50",
      "CUB50 S",
      "City 50",
      "Istiqlal",
      "M50",
      "T10 Max",
    ],
  },
  {
    name: "UAZ",
    model: [
      "31512",
      "31514",
      "31519",
      "3162",
      "3303",
      "39625",
      "452",
      "469",
      "Hunter",
      "Patriot",
    ],
  },
  {
    name: "Ural",
    model: ["4320"],
  },
  {
    name: "Vespa",
    model: ["SXl 150", "Sprint 50", "VXL 150"],
  },
  {
    name: "VGV",
    model: ["U70 Pro", "U75 Plus"],
  },
  {
    name: "Volkswagen",
    model: [
      "Amarok",
      "Atlas",
      "Beetle",
      "Bora",
      "Caddy",
      "Caravelle",
      "Crafter",
      "Golf",
      "Golf Plus",
      "ID.4",
      "ID.6",
      "Jetta",
      "LT",
      "Multivan",
      "Passat",
      "Passat CC",
      "Phaeton",
      "Polo",
      "Scirocco",
      "Sharan",
      "Taos",
      "Tayron",
      "Tiguan",
      "Touareg",
      "Touran",
      "Transporter",
      "Vento",
      "e-Bora",
    ],
  },
  {
    name: "Volvo",
    model: [
      "460",
      "480",
      "740",
      "850",
      "C40",
      "FH 12",
      "FH 13",
      "FH 460",
      "Fh 500",
      "S40",
      "S70",
      "S80",
      "S90",
      "V 90",
      "V50",
      "XC40",
      "XC60",
      "XC90",
    ],
  },
  {
    name: "Vosxod",
    model: ["2"],
  },
  {
    name: "Voyah",
    model: ["Free"],
  },
  {
    name: "XPeng",
    model: ["G9"],
  },
  {
    name: "Yamaha",
    model: [
      "Crux",
      "FZ 25",
      "FZ 6N",
      "FZ-S FI Deluxe",
      "FZ-X",
      "Fazer 150",
      "GrizzLy 660",
      "GrizzLy 700",
      "MT-09",
      "MT-15",
      "R15 V4",
      "R15M",
      "R15S",
      "RAY-ZR",
      "RayZR Street Rally 125",
      "SR 250",
      "XV1700 Road Star Warrior",
      "XVS1300A Midnight Star",
      "YBR 125",
      "YZ125",
      "YZF-R9",
    ],
  },
  {
    name: "ZAZ",
    model: ["965", "968M", "Lanos", "Sens", "Slavuta", "Tavriya"],
  },
  {
    name: "Zeekr",
    model: ["001"],
  },
  {
    name: "ZIL",
    model: ["130", "131", "133", "4334", "5301"],
  },
  {
    name: "Zongshen",
    model: ["RX3S", "ZII ZS200-76"],
  },
  {
    name: "Zontes",
    model: [
      "Monster 125",
      "Panther ZT150-8A",
      "R250",
      "R310",
      "Tiger ZT150-3A",
      "X310",
      "ZT155-G1",
    ],
  },
  {
    name: "ZX Auto",
    model: ["Terralord"],
  },
];
const banArr = [
  "Avtobus",
  "Dartqı",
  "Furqon",
  "Hetçbek",
  "Kabriolet",
  "Karvan",
  "Kupe",
  "Kvadrosikl",
  "Liftbek",
  "Mikroavtobus",
  "Minivan",
  "Moped",
  "Motosiklet",
  "Offroader / SUV",
  "Pikap",
  "Qolfkar",
  "Rodster",
  "Sedan",
  "Universal",
  "Van",
  "Yük maşını",
];
const yearArr = [
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
  "2007",
  "2006",
  "2005",
  "2004",
  "2003",
  "2002",
  "2001",
  "2000",
  "1999",
  "1998",
  "1997",
  "1996",
  "1995",
  "1994",
  "1993",
  "1992",
  "1991",
  "1990",
  "1989",
  "1988",
  "1987",
  "1986",
  "1985",
  "1984",
  "1983",
  "1982",
  "1981",
  "1980",
  "1979",
  "1978",
  "1977",
  "1976",
  "1975",
  "1974",
  "1973",
  "1972",
  "1971",
  "1970",
  "1969",
  "1968",
  "1967",
  "1966",
  "1965",
  "1964",
  "1963",
  "1962",
  "1961",
  "1960",
  "1959",
  "1958",
  "1957",
  "1956",
  "1955",
  "1954",
  "1953",
  "1952",
  "1951",
  "1950",
  "1949",
  "1948",
  "1947",
  "1946",
  "1945",
  "1944",
  "1943",
  "1942",
  "1941",
  "1940",
  "1939",
  "1938",
  "1937",
  "1936",
  "1935",
  "1934",
  "1933",
  "1932",
  "1931",
  "1930",
];
const litrArr = [
  "0",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
  "1600",
  "1700",
  "1800",
  "1900",
  "2000",
  "2100",
  "2200",
  "2300",
  "2400",
  "2500",
  "2600",
  "2700",
  "2800",
  "2900",
  "3000",
  "3100",
  "3200",
  "3300",
  "3400",
  "3500",
  "3600",
  "3700",
  "3800",
  "3900",
  "4000",
  "4100",
  "4200",
  "4300",
  "4400",
  "4500",
  "4600",
  "4700",
  "4800",
  "4900",
  "5000",
  "5100",
  "5200",
  "5300",
  "5400",
  "5500",
  "5600",
  "5700",
  "5800",
  "5900",
  "6000",
  "6100",
  "6200",
  "6300",
  "6400",
  "6500",
  "7000",
  "7500",
  "8000",
  "8500",
  "9000",
  "9500",
  "10000",
  "11000",
  "12000",
  "13000",
  "14000",
  "15000",
  "16000",
];
const colorArr = [
  "Yaş Asfalt",
  "Qara",
  "Gümüşü",
  "Ağ",
  "Bej",
  "Tünd qırmızı",
  "Qırmızı",
  "Çəhrayı",
  "Narıncı",
  "Qızılı",
  "Sarı",
  "Yaşıl",
  "Mavi",
  "Göy",
  "Bənövşəyi",
  "Qəhvəyi",
];

// -------------------------------------------

let city = "";
let mark = "";
let model = "";
let models = "";
let ban = "";
let year1 = "";
let year2 = "";
let litr1 = "";
let litr2 = "";
let color = "";

// ---------------------------------------------

litrList2.addEventListener("click", (e) => {
  const listLi2 = e.target.getAttribute("data-value");
  if (listLi2 != "listLi2") {
    return;
  } else {
    litr2 = e.target.textContent;
    checkedLitr2.textContent = litr2;
    litrLabel2.style.transform = "translateY(5px)";
    litrLabel2.style.fontSize = "12px";
    setTimeout(() => {
      litrModal2.style.opacity = "0";
      litrModal2.style.visibility = "hidden";
    }, 300);
    litrDropdown2.style.transform = "translateY(100vh)";
    document.getElementById("mob_litr2_reset_xmark").style.display = "block";
    document.getElementById("mob_litr2_arrow_down").style.display = "none";
  }
});
if (checkedLitr2.textContent) {
  document.getElementById("mob_litr2_reset_xmark").style.display = "block";
  document.getElementById("mob_litr2_arrow_down").style.display = "none";
} else {
  document.getElementById("mob_litr2_reset_xmark").style.display = "none";
  document.getElementById("mob_litr2_arrow_down").style.display = "block";
}

document
  .getElementById("mob_litr2_reset_xmark")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("mob_litr2_reset_xmark").style.display = "none";
    document.getElementById("mob_litr2_arrow_down").style.display = "block";
    checkedLitr2.textContent = "";
    litrLabel2.style.transform = "translateY(20px)";
    litrLabel2.style.fontSize = "16px";
  });
litrSelect2.addEventListener("click", () => {
  litrModal2.style.opacity = "1";
  litrModal2.style.visibility = "visible";
  setTimeout(() => {
    litrDropdown2.style.transform = "translateY(0)";
  }, 150);
  litrList2.textContent = "";
  litrArr.map((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    li.setAttribute("data-value", "listLi2");
    litrList2.append(li);
  });
});
litrModal2.addEventListener("click", () => {
  setTimeout(() => {
    litrModal2.style.opacity = "0";
    litrModal2.style.visibility = "hidden";
  }, 300);
  litrDropdown2.style.transform = "translateY(100vh)";
});
litrCloseBtn2.addEventListener("click", () => {
  setTimeout(() => {
    litrModal2.style.opacity = "0";
    litrModal2.style.visibility = "hidden";
  }, 300);
  litrDropdown2.style.transform = "translateY(100vh)";
});
litrDropdown2.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ---------------------------------------------

litrList1.addEventListener("click", (e) => {
  const litrLi1 = e.target.getAttribute("data-value");
  if (litrLi1 != "litrLi1") {
    return;
  } else {
    litr1 = e.target.textContent;
    checkedLitr1.textContent = litr1;
    litrLabel1.style.transform = "translateY(5px)";
    litrLabel1.style.fontSize = "12px";
    setTimeout(() => {
      litrModal1.style.opacity = "0";
      litrModal1.style.visibility = "hidden";
    }, 300);
    litrDropdown1.style.transform = "translateY(100vh)";
    document.getElementById("mob_litr1_reset_xmark").style.display = "block";
    document.getElementById("mob_litr1_arrow_down").style.display = "none";
  }
});
if (checkedLitr1.textContent) {
  document.getElementById("mob_litr1_reset_xmark").style.display = "block";
  document.getElementById("mob_litr1_arrow_down").style.display = "none";
} else {
  document.getElementById("mob_litr1_reset_xmark").style.display = "none";
  document.getElementById("mob_litr1_arrow_down").style.display = "block";
}
document
  .getElementById("mob_litr1_reset_xmark")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("mob_litr1_reset_xmark").style.display = "none";
    document.getElementById("mob_litr1_arrow_down").style.display = "block";
    checkedLitr1.textContent = "";
    litrLabel1.style.transform = "translateY(20px)";
    litrLabel1.style.fontSize = "16px";
  });
litrSelect1.addEventListener("click", () => {
  litrModal1.style.opacity = "1";
  litrModal1.style.visibility = "visible";
  setTimeout(() => {
    litrDropdown1.style.transform = "translateY(0)";
  }, 150);
  litrList1.textContent = "";
  litrArr.map((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    li.setAttribute("data-value", "litrLi1");
    litrList1.append(li);
  });
});
litrModal1.addEventListener("click", () => {
  setTimeout(() => {
    litrModal1.style.opacity = "0";
    litrModal1.style.visibility = "hidden";
  }, 300);
  litrDropdown1.style.transform = "translateY(100vh)";
});
litrCloseBtn1.addEventListener("click", () => {
  setTimeout(() => {
    litrModal1.style.opacity = "0";
    litrModal1.style.visibility = "hidden";
  }, 300);
  litrDropdown1.style.transform = "translateY(100vh)";
});
litrDropdown1.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ----------------------------------

yearList2.addEventListener("click", (e) => {
  const yearLi2 = e.target.getAttribute("data-value");
  if (yearLi2 != "yearLi2") {
    return;
  } else {
    year2 = e.target.textContent;
    checkedYear2.textContent = year2;
    yearLabel2.style.transform = "translateY(5px)";
    yearLabel2.style.fontSize = "12px";
    setTimeout(() => {
      yearModal2.style.opacity = "0";
      yearModal2.style.visibility = "hidden";
    }, 300);
    yearDropdown2.style.transform = "translateY(100vh)";
    document.getElementById("mob_year2_reset_xmark").style.display = "block";
    document.getElementById("mob_year2_arrow_down").style.display = "none";
  }
});
if (checkedYear2.textContent) {
  document.getElementById("mob_year2_reset_xmark").style.display = "block";
  document.getElementById("mob_year2_arrow_down").style.display = "none";
} else {
  document.getElementById("mob_year2_reset_xmark").style.display = "none";
  document.getElementById("mob_year2_arrow_down").style.display = "block";
}
document
  .getElementById("mob_year2_reset_xmark")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("mob_year2_reset_xmark").style.display = "none";
    document.getElementById("mob_year2_arrow_down").style.display = "block";
    checkedYear2.textContent = "";
    yearLabel2.style.transform = "translateY(20px)";
    yearLabel2.style.fontSize = "16px";
  });
yearSelect2.addEventListener("click", () => {
  yearModal2.style.opacity = "1";
  yearModal2.style.visibility = "visible";
  setTimeout(() => {
    yearDropdown2.style.transform = "translateY(0)";
  }, 150);
  yearList2.textContent = "";
  yearArr.map((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    li.setAttribute("data-value", "yearLi2");
    yearList2.append(li);
  });
});
yearModal2.addEventListener("click", () => {
  setTimeout(() => {
    yearModal2.style.opacity = "0";
    yearModal2.style.visibility = "hidden";
  }, 300);
  yearDropdown2.style.transform = "translateY(100vh)";
});
yearCloseBtn2.addEventListener("click", () => {
  setTimeout(() => {
    yearModal2.style.opacity = "0";
    yearModal2.style.visibility = "hidden";
  }, 300);
  yearDropdown2.style.transform = "translateY(100vh)";
});
yearDropdown2.addEventListener("click", (e) => {
  e.stopPropagation();
});

// ---------------------------------

yearList1.addEventListener("click", (e) => {
  const yearLi1 = e.target.getAttribute("data-value");
  if (yearLi1 != "yearLi1") {
    return;
  } else {
    year1 = e.target.textContent;
    checkedYear1.textContent = year1;
    yearLabel1.style.transform = "translateY(5px)";
    yearLabel1.style.fontSize = "12px";
    setTimeout(() => {
      yearModal1.style.opacity = "0";
      yearModal1.style.visibility = "hidden";
    }, 300);
    yearDropdown1.style.transform = "translateY(100vh)";
    document.getElementById("mob_year1_reset_xmark").style.display = "block";
    document.getElementById("mob_year1_arrow_down").style.display = "none";
  }
});
if (checkedYear1.textContent) {
  document.getElementById("mob_year1_reset_xmark").style.display = "block";
  document.getElementById("mob_year1_arrow_down").style.display = "none";
} else {
  document.getElementById("mob_year1_reset_xmark").style.display = "none";
  document.getElementById("mob_year1_arrow_down").style.display = "block";
}
document
  .getElementById("mob_year1_reset_xmark")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("mob_year1_reset_xmark").style.display = "none";
    document.getElementById("mob_year1_arrow_down").style.display = "block";
    checkedYear1.textContent = "";
    yearLabel1.style.transform = "translateY(20px)";
    yearLabel1.style.fontSize = "16px";
  });
yearSelect1.addEventListener("click", () => {
  yearModal1.style.opacity = "1";
  yearModal1.style.visibility = "visible";
  setTimeout(() => {
    yearDropdown1.style.transform = "translateY(0)";
  }, 150);
  yearList1.textContent = "";
  yearArr.map((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    li.setAttribute("data-value", "yearLi1");
    yearList1.append(li);
  });
});
yearModal1.addEventListener("click", () => {
  setTimeout(() => {
    yearModal1.style.opacity = "0";
    yearModal1.style.visibility = "hidden";
  }, 300);
  yearDropdown1.style.transform = "translateY(100vh)";
});
yearCloseBtn1.addEventListener("click", () => {
  setTimeout(() => {
    yearModal1.style.opacity = "0";
    yearModal1.style.visibility = "hidden";
  }, 300);
  yearDropdown1.style.transform = "translateY(100vh)";
});
yearDropdown1.addEventListener("click", (e) => {
  e.stopPropagation();
});

// -------------------------------------

banSelect.addEventListener("click", () => {
  banModal.style.opacity = "1";
  banModal.style.visibility = "visible";
  setTimeout(() => {
    banDropdown.style.transform = "translateY(0)";
  }, 150);
});
banDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});
banModal.addEventListener("click", () => {
  setTimeout(() => {
    banModal.style.opacity = "0";
    banModal.style.visibility = "hidden";
  }, 300);
  banDropdown.style.transform = "translateY(100vh)";
});
banCloseBtn.addEventListener("click", () => {
  setTimeout(() => {
    banModal.style.opacity = "0";
    banModal.style.visibility = "hidden";
  }, 300);
  banDropdown.style.transform = "translateY(100vh)";
});
banList.addEventListener("click", (e) => {
  const banLi = e.target.getAttribute("data-value");
  if (banLi != "banLi") {
    return;
  } else {
    ban = e.target.textContent;
    checkedBan.textContent = ban;
    setTimeout(() => {
      banModal.style.opacity = "0";
      banModal.style.visibility = "hidden";
    }, 300);
    banDropdown.style.transform = "translateY(100vh)";
    banLabel.style.transform = "translateY(5px)";
    banLabel.style.fontSize = "12px";
    document.getElementById("mob_ban_reset_xmark").style.display = "block";
    document.getElementById("mob_ban_arrow_down").style.display = "none";
  }
});
if (checkedBan.textContent) {
  document.getElementById("mob_ban_reset_xmark").style.display = "block";
  document.getElementById("mob_ban_arrow_down").style.display = "none";
} else {
  document.getElementById("mob_ban_reset_xmark").style.display = "none";
  document.getElementById("mob_ban_arrow_down").style.display = "block";
}
document
  .getElementById("mob_ban_reset_xmark")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    checkedBan.textContent = "";
    document.getElementById("mob_ban_reset_xmark").style.display = "none";
    document.getElementById("mob_ban_arrow_down").style.display = "block";
    banLabel.style.transform = "translateY(10px)";
    banLabel.style.fontSize = "16px";
  });
banArr.map((a) => {
  const li = document.createElement("li");
  li.textContent = a;
  li.setAttribute("data-value", "banLi");
  banList.append(li);
});

// -------------------------------------------

colorSelect.addEventListener("click", () => {
  colorModal.style.opacity = "1";
  colorModal.style.visibility = "visible";
  setTimeout(() => {
    colorDropdown.style.transform = "translateY(0)";
  }, 150);
});
colorDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
});
colorModal.addEventListener("click", () => {
  setTimeout(() => {
    colorModal.style.opacity = "0";
    colorModal.style.visibility = "hidden";
  }, 300);
  colorDropdown.style.transform = "translateY(100vh)";
});
colorCloseBtn.addEventListener("click", () => {
  setTimeout(() => {
    colorModal.style.opacity = "0";
    colorModal.style.visibility = "hidden";
  }, 300);
  colorDropdown.style.transform = "translateY(100vh)";
});
colorList.addEventListener("click", (e) => {
  const colorLi = e.target.getAttribute("data-value");
  if (colorLi != "colorLi") {
    return;
  } else {
    color = e.target.textContent;
    checkedColor.textContent = color;
    setTimeout(() => {
      colorModal.style.opacity = "0";
      colorModal.style.visibility = "hidden";
    }, 300);
    colorDropdown.style.transform = "translateY(100vh)";
    colorLabel.style.transform = "translateY(5px)";
    colorLabel.style.fontSize = "12px";
    document.getElementById("mob_color_reset_xmark").style.display = "block";
    document.getElementById("mob_color_arrow_down").style.display = "none";
  }
});
if (checkedColor.textContent) {
  document.getElementById("mob_color_reset_xmark").style.display = "block";
  document.getElementById("mob_color_arrow_down").style.display = "none";
} else {
  document.getElementById("mob_color_reset_xmark").style.display = "none";
  document.getElementById("mob_color_arrow_down").style.display = "block";
}
document
  .getElementById("mob_color_reset_xmark")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("mob_color_reset_xmark").style.display = "none";
    document.getElementById("mob_color_arrow_down").style.display = "block";
    checkedColor.textContent = "";
    colorLabel.style.transform = "translateY(10px)";
    colorLabel.style.fontSize = "16px";
  });
colorArr.map((a) => {
  const li = document.createElement("li");
  li.textContent = a;
  li.setAttribute("data-value", "colorLi");
  colorList.append(li);
});

// ----------------------------------------

citySelect.addEventListener("click", () => {
  cityDropdown.style.transform = "translateY(0)";
  citySearch.value = "";
  cityList.textContent = "";
  citiesArr.map((a, i) => {
    const li = document.createElement("li");
    li.textContent = a;
    li.setAttribute("data-value", "cityLi");
    cityList.append(li);
  });
});
cityCloseBtn.addEventListener("click", () => {
  cityDropdown.style.transform = "translateY(100vh)";
});
cityList.addEventListener("click", (e) => {
  const cityLi = e.target.getAttribute("data-value");
  if (cityLi != "cityLi") {
    return;
  } else {
    city = e.target.innerText;
    cityDropdown.style.transform = "translateY(100vh)";
    checkedCity.textContent = city;
    cityLabel.style.transform = "translateY(5px)";
    cityLabel.style.fontSize = "12px";
    document.getElementById("mob_city_arrow_down").style.display = "none";
    document.getElementById("mob_city_reset_xmark").style.display = "block";
  }
});
if (checkedCity.textContent) {
  document.getElementById("mob_city_arrow_down").style.display = "none";
  document.getElementById("mob_city_reset_xmark").style.display = "block";
} else {
  document.getElementById("mob_city_arrow_down").style.display = "block";
  document.getElementById("mob_city_reset_xmark").style.display = "none";
  cityLabel.style.transform = "translateY(10px)";
  cityLabel.style.fontSize = "16px";
}
document
  .getElementById("mob_city_reset_xmark")
  .addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("mob_city_arrow_down").style.display = "block";
    document.getElementById("mob_city_reset_xmark").style.display = "none";
    cityLabel.style.transform = "translateY(10px)";
    cityLabel.style.fontSize = "16px";
    checkedCity.textContent = "";
  });
citySearch.addEventListener("input", (e) => {
  const searchValue = e.target.value;
  const newCities = citiesArr.filter((a) => {
    const t = a.toLowerCase();
    const b = searchValue.toLowerCase();
    return t.startsWith(b);
  });
  if (newCities.length) {
    cityList.textContent = "";
    newCities.map((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      cityList.append(li);
    });
  } else {
    cityList.textContent = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Şəhər tapılmadı";
    cityList.append(h2);
  }
});

// --------------------------------------------

modelCloseBtn.addEventListener("click", () => {
  modelDropdown.style.transform = "translateY(100vh)";
});
markCloseBtn.addEventListener("click", () => {
  markDropdown.style.transform = "translateY(100vh)";
});
markOpenBtn.addEventListener("click", () => {
  markDropdown.style.transform = "translateY(0)";
});

function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = null;
}
// carList.addEventListener("click", (e) => {
//   banItem = e.target.textContent;
//   checkedBan.textContent = banItem;
//   dropdownBan.style.transform = "translateY(400px)";
//   dropdownBan.style.visibility = "hidden";
//   dropdownBan.style.opacity = "0";
//   banModal.style.display = "none";
//   banP.style.transform = "translateY(0)";
//   banP.style.fontSize = "14px";
//   enableScroll();
// });
// selectBan.addEventListener("click", () => {
//   banModal.style.display = "block";
//   dropdownBan.style.transform = "translateY(0)";
//   dropdownBan.style.visibility = "visible";
//   dropdownBan.style.opacity = "1";
//   disableScroll();
// });
// banOverlay.addEventListener("click", () => {
//   setTimeout(() => {
//     banModal.style.display = "none";
//   }, 380);
//   enableScroll();
// });
// banCloseBtn.addEventListener("click", () => {
//   setTimeout(() => {
//     banModal.style.display = "none";
//   }, 380);
//   enableScroll();
// });
citiesArr.map((a) => {
  const li = document.createElement("li");
  li.textContent = a;
  cityList.append(li);
});
marksArr.map((a) => {
  const li = document.createElement("li");
  li.textContent = a.name;
  carMarks.append(li);
});
afterMarkModel.addEventListener("click", () => {
  modelDropdown.style.transform = "translateY(0)";
  modelList.textContent = "";
  modelInput.value = "";
  models.map((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    modelList.append(li);
  });
});
afterMarkMark.addEventListener("click", () => {
  markDropdown.style.transform = "translateY(0)";
  markInput.value = "";
  carMarks.textContent = "";
  marksArr.map((a) => {
    const li = document.createElement("li");
    li.textContent = a.name;
    carMarks.append(li);
  });
});

const newMarks = document.querySelectorAll(".marks_new-mark");

newMarks.forEach((markItem) => {
  markItem.addEventListener("click", (e) => {
    mark = markItem.dataset.mark;
    console.log(mark);
    checkedModel.textContent = "";
    modelLabel.style.transform = "translateY(10px)";
    modelLabel.style.fontSize = "16px";
    checkedMark.textContent = mark;
    markLabel.style.transform = "translateY(5px)";
    markLabel.style.fontSize = "12px";
    tillMark.style.display = "none";
    afterMarkMark.classList.remove("dnone");
    afterMarkModel.classList.remove("dnone");
    markDropdown.style.transform = "translateY(100vh)";
    marksArr.map((a) => {
      if (a.name == mark) {
        models = [...a.model];
      }
    });
    modelList.textContent = "";
    models.map((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      modelList.append(li);
    });
  });
});

carMarks.addEventListener("click", (e) => {
  mark = e.target.textContent;
  checkedModel.textContent = "";
  modelLabel.style.transform = "translateY(10px)";
  modelLabel.style.fontSize = "16px";
  checkedMark.textContent = mark;
  markLabel.style.transform = "translateY(5px)";
  markLabel.style.fontSize = "12px";
  tillMark.style.display = "none";
  afterMarkMark.classList.remove("dnone");
  afterMarkModel.classList.remove("dnone");
  markDropdown.style.transform = "translateY(100vh)";
  marksArr.map((a) => {
    if (a.name == mark) {
      models = [...a.model];
    }
  });
  modelList.textContent = "";
  models.map((a) => {
    const li = document.createElement("li");
    li.textContent = a;
    modelList.append(li);
  });
});
modelList.addEventListener("click", (e) => {
  model = e.target.textContent;
  if (model) {
    checkedModel.textContent = model;
    modelLabel.style.transform = "translateY(5px)";
    modelLabel.style.fontSize = "12px";
  }
  modelDropdown.style.transform = "translateY(100vh)";
});
markInput.addEventListener("input", (e) => {
  const searchValue = e.target.value;
  const newMarks = marksArr.filter((a) => a.name.startsWith(searchValue));

  if (newMarks.length) {
    carMarks.textContent = "";
    newMarks.forEach((a) => {
      const li = document.createElement("li");
      li.textContent = a.name;
      carMarks.appendChild(li);
    });
  } else {
    carMarks.textContent = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Marka tapılmadı";
    carMarks.appendChild(h2);
  }
});
modelInput.addEventListener("input", (e) => {
  const searchValue = e.target.value;
  const newModels = models.filter((a) => {
    return a.includes(searchValue);
  });
  if (newModels.length) {
    modelList.textContent = "";
    newModels.map((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      modelList.append(li);
    });
  } else {
    modelList.textContent = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Marka tapılmadı";
    modelList.append(h2);
  }
  if (!searchValue) {
    modelList.textContent = "";
    models.map((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      modelList.append(li);
    });
  }
});
respInput1.addEventListener("click", () => {
  respDist.classList.remove("dnone");
});
respInput2.addEventListener("click", () => {
  respDist.classList.add("dnone");
});
respInput3.addEventListener("click", () => {
  respDist.classList.remove("dnone");
});

document.getElementById("mobi_all_reset_btn").addEventListener("click", () => {
  document.getElementById("mob_city_arrow_down").style.display = "block";
  document.getElementById("mob_city_reset_xmark").style.display = "none";
  cityLabel.style.transform = "translateY(10px)";
  cityLabel.style.fontSize = "16px";
  checkedCity.textContent = "";
  // ---------------------------------------------
  checkedBan.textContent = "";
  document.getElementById("mob_ban_reset_xmark").style.display = "none";
  document.getElementById("mob_ban_arrow_down").style.display = "block";
  banLabel.style.transform = "translateY(10px)";
  banLabel.style.fontSize = "16px";
  // ---------------------------------------------
  document.getElementById("mob_year1_reset_xmark").style.display = "none";
  document.getElementById("mob_year1_arrow_down").style.display = "block";
  checkedYear1.textContent = "";
  yearLabel1.style.transform = "translateY(20px)";
  yearLabel1.style.fontSize = "16px";
  // ---------------------------------------------
  document.getElementById("mob_year2_reset_xmark").style.display = "none";
  document.getElementById("mob_year2_arrow_down").style.display = "block";
  checkedYear2.textContent = "";
  yearLabel2.style.transform = "translateY(20px)";
  yearLabel2.style.fontSize = "16px";
  // ---------------------------------------------
  document.getElementById("mob_litr1_reset_xmark").style.display = "none";
  document.getElementById("mob_litr1_arrow_down").style.display = "block";
  checkedLitr1.textContent = "";
  litrLabel1.style.transform = "translateY(20px)";
  litrLabel1.style.fontSize = "16px";
  // ---------------------------------------------
  document.getElementById("mob_litr2_reset_xmark").style.display = "none";
  document.getElementById("mob_litr2_arrow_down").style.display = "block";
  checkedLitr2.textContent = "";
  litrLabel2.style.transform = "translateY(20px)";
  litrLabel2.style.fontSize = "16px";
  // ---------------------------------------------
  document.getElementById("mob_color_reset_xmark").style.display = "none";
  document.getElementById("mob_color_arrow_down").style.display = "block";
  checkedColor.textContent = "";
  colorLabel.style.transform = "translateY(10px)";
  colorLabel.style.fontSize = "16px";
  // ---------------------------------------------
  respInput1.checked = true;
  respInput2.checked = false;
  respInput3.checked = false;
});
