let favorites = JSON.parse(localStorage.getItem('meetbaku_favorites')) || [];
let showOnlyFavorites = false;
let currentLang = 'az';
let currentCurrency = 'AZN';

const exchangeRates = {
    AZN: 1,
    USD: 0.59,
    EUR: 0.54
};

const translations = {
    az: {
        logo: "MeetBaku",
        main_title: "MEET BAKU",
        start_explore: "Kəşfə Başla →",
        subtitle: "By Mehdi — İstirahətini zövqlə planlaşdır",
        select_label: "Kateqoriya və Büdcə Seçin",
        opt_1: "🍔 Yemək: 10 AZN-ə qədər (Fast-food & Kafelər)",
        opt_2: "🍲 Yemək: 10–30 AZN (Milli & Beynəlxalq)",
        opt_3: "🌟 Yemək: 50 AZN+ (Premium & Rooftop)",
        opt_4: "☕ Coffee Shop: 10 AZN-ə qədər",
        opt_5: "☕ Coffee Shop: 10 AZN-dən yuxarı",
        opt_6: "🎯 Əyləncə: 15 AZN-ə qədər",
        opt_7: "🏎️ Əyləncə: 15–30 AZN",
        opt_8: "🐎 Əyləncə: 30+ AZN",
        opt_9: "🎨 Masterklasslar: Keramika, Rəsm & Kulinariya",
        btn_show: "Məkanları Siyahıda Göstər",
        btn_sponsor: "💎 Premium Sponsorlar",
        btn_vip: "⭐ MeetBaku VIP Pass",
        btn_random: "🎲 Bilmirəm hara gedim?",
        btn_insta: "📸 Insta-Spot Rejimi",
        btn_fav: "Sevimlilərim",
        sec_title_places: "Seçilmiş Məkanlar",
        sec_title_sponsor: "💎 Günün Sponsorlu Premium Məkanları",
        sec_title_vip: "⭐ MeetBaku VIP Abunəlik",
        sponsored_badge: "⭐ Rəsmi Sponsor",
        sec_title_fav: "❤️ Sevimli Məkanlarım",
        sec_title_random: "🎲 Sənin üçün təsadüfi seçim:",
        sec_title_insta: "📸 Instagram / Estetik Çəkiliş Nöqtələri",
        maps_btn: "Google Maps-də bax 📍",
        hours: "🕒 İş saatları:",
        menu_explore: "🌟 Məkan Kəşfi",
        menu_about: "📖 Haqqımızda",
        menu_partnership: "🤝 Əməkdaşlıq",
        menu_contact: "📞 Bizimlə Əlaqə",
        land_home: "Home",
        land_about: "Haqqımızda",
        land_partnership: "Əməkdaşlıq",
        land_contact: "Əlaqə"
    },
    en: {
        logo: "MeetBaku",
        main_title: "MEET BAKU",
        start_explore: "Start Exploring →",
        subtitle: "By Mehdi — Plan your leisure with style",
        select_label: "Select Category & Budget",
        opt_1: "🍔 Food: Up to 10 AZN (Fast-food & Cafes)",
        opt_2: "🍲 Food: 10–30 AZN (National & International)",
        opt_3: "🌟 Food: 50 AZN+ (Premium & Rooftop)",
        opt_4: "☕ Coffee Shop: Up to 10 AZN",
        opt_5: "☕ Coffee Shop: Over 10 AZN",
        opt_6: "🎯 Entertainment: Up to 15 AZN",
        opt_7: "🏎️ Entertainment: 15–30 AZN",
        opt_8: "🐎 Entertainment: 30+ AZN",
        opt_9: "🎨 Masterclasses: Ceramics, Art & Culinary",
        btn_show: "Show Places in List",
        btn_sponsor: "💎 Premium Sponsors",
        btn_vip: "⭐ MeetBaku VIP Pass",
        btn_random: "🎲 I don't know where to go?",
        btn_insta: "📸 Insta-Spot Mode",
        btn_fav: "Favorites",
        sec_title_places: "Selected Places",
        sec_title_sponsor: "💎 Today's Sponsored Premium Places",
        sec_title_vip: "⭐ MeetBaku VIP Subscription",
        sponsored_badge: "⭐ Official Sponsor",
        sec_title_fav: "❤️ My Favorite Places",
        sec_title_random: "🎲 Random pick for you:",
        sec_title_insta: "📸 Instagram / Aesthetic Spots",
        maps_btn: "View on Google Maps 📍",
        hours: "🕒 Working hours:",
        menu_explore: "🌟 Explore Places",
        menu_about: "📖 About Us",
        menu_partnership: "🤝 Partnerships",
        menu_contact: "📞 Contact Us",
        land_home: "Home",
        land_about: "About Us",
        land_partnership: "Partnerships",
        land_contact: "Contact"
    },
    ru: {
        logo: "MeetBaku",
        main_title: "MEET BAKU",
        start_explore: "Начать исследование →",
        subtitle: "By Mehdi — Планируй отдых со вкусом",
        select_label: "Выберите категорию и бюджет",
        opt_1: "🍔 Еда: до 10 AZN (Фаст-фуд и кафе)",
        opt_2: "🍲 Еда: 10–30 AZN (Национальная & Междунар.)",
        opt_3: "🌟 Еда: 50 AZN+ (Премиум & Руфтоп)",
        opt_4: "☕ Кофейня: до 10 AZN",
        opt_5: "☕ Кофейня: выше 10 AZN",
        opt_6: "🎯 Развлечения: до 15 AZN",
        opt_7: "🏎️ Развлечения: 15–30 AZN",
        opt_8: "🐎 Развлечения: 30+ AZN",
        opt_9: "🎨 Мастер-классы: Керамика, Арт & Кулинария",
        btn_show: "Показать места списком",
        btn_sponsor: "💎 Премиум Спонсоры",
        btn_vip: "⭐ MeetBaku VIP Pass",
        btn_random: "🎲 Не знаю куда пойти?",
        btn_insta: "📸 Insta-Spot Режим",
        btn_fav: "Избранное",
        sec_title_places: "Выбранные места",
        sec_title_sponsor: "💎 Спонсорские Премиум Места Дня",
        sec_title_vip: "⭐ VIP Подписка MeetBaku",
        sponsored_badge: "⭐ Официальный спонсор",
        sec_title_fav: "❤️ Мои любимые места",
        sec_title_random: "🎲 Случайный выбор для вас:",
        sec_title_insta: "📸 Instagram / Эстетичные места",
        maps_btn: "Смотреть в Google Maps 📍",
        hours: "🕒 Часы работы:",
        menu_explore: "🌟 Поиск мест",
        menu_about: "📖 О нас",
        menu_partnership: "🤝 Сотрудничество",
        menu_contact: "📞 Контакты",
        land_home: "Главная",
        land_about: "О нас",
        land_partnership: "Партнерство",
        land_contact: "Контакты"
    }
};

const placeTypeTranslations = {
    az: {
        "Fast-Food": "🍗 Fast-Food", "Pizzeria": "🍕 Pizzeria", "Dönər": "🌯 Dönər", "Türk Mətbəxi": "🍲 Türk Mətbəxi", "Kafe": "🍽️ Kafe", "Suşi": "🍣 Suşi", "Qənnadı": "🥐 Qənnadı", "Qutab": "🫓 Qutab", "Milli Mətbəx": "🍲 Milli Mətbəx", "Restoran & Bar": "🍽️ Restoran & Bar", "Restoran": "🍽️ Restoran", "Milli Restoran": "🎶 Milli Restoran", "Çay evi & Kafe": "☕ Çay evi & Kafe", "Ev Yeməkləri": "🍲 Ev Yeməkləri", "Gürcü Mətbəxi": "🥟 Gürcü Mətbəxi", "Asiya Mətbəxi": "🥢 Asiya Mətbəxi", "Fransa Kafesi": "🇫🇷 Fransa Kafesi", "Muzey Restoran": "🏛️ Muzey Restoran", "Dəniz Mənzərəli": "🌊 Dəniz Mənzərəli", "Estetik Restoran": "🎨 Estetik Restoran", "Panoramik Bar": "🍸 Panoramik Bar", "Rooftop Restoran": "🌇 Rooftop Restoran", "Lüks İtalyan": "🌟 Lüks İtalyan", "Steykhauz": "🥩 Steykhauz", "İtalyan Premium": "🌟 İtalyan Premium", "Coffee Shop": "☕ Coffee Shop", "Estetik Kafe": "☕ Estetik Kafe", "Botanik Kafe": "🌿 Botanik Kafe", "Premium Kafe": "☕ Premium Kafe", "Desert & Kafe": "🍰 Desert & Kafe", "VR Simulyatoru": "🥽 VR Simulyatoru", "Boulinq": "🎳 Boulinq", "Kartinq": "🏎️ Kartinq", "Escape Room": "🧩 Escape Room", "Qorxu Otağı": "👻 Qorxu Otağı", "Peşəkar Atıcılıq": "🎯 Peşəkar Atıcılıq", "Atçılıq Klubu": "🐎 Atçılıq Klubu", "Keramika & Dulusçuluq": "🏺 Keramika & Dulusçuluq", "Qəhvə Masterklassı": "☕ Qəhvə Masterklassı", "Rəsm Masterklassı": "🎨 Rəsm Masterklassı", "Əl İşləri & Sənət": "🖌️ Əl İşləri & Sənət", "Art & Dekor": "🎨 Art & Dekor", "Yaradıcı Rəsm": "🎨 Yaradıcı Rəsm", "Sənət Studiyası": "🖌️ Sənət Studiyası", "Əyləncəli Rəsm Dərsi": "🎨 Əyləncəli Rəsm Dərsi", "Ebru Sənəti": "🌊 Ebru Sənəti", "Peşəkar Keramika": "🏺 Peşəkar Keramika", "Kulinariya Masterklassı": "🍳 Kulinariya Masterklassı", "Aşpazlıq & Şirniyyat": "🍰 Aşpazlıq & Şirniyyat", "Milli Mətbəx Dərsləri": "🍲 Milli Mətbəx Dərsləri", "Ev Yeməkləri M/K": "🥘 Ev Yeməkləri M/K"
    },
    en: {
        "Fast-Food": "🍗 Fast-Food", "Pizzeria": "🍕 Pizzeria", "Dönər": "🌯 Doner", "Türk Mətbəxi": "🍲 Turkish Cuisine", "Kafe": "🍽️ Cafe", "Suşi": "🍣 Sushi", "Qənnadı": "🥐 Bakery & Sweets", "Qutab": "🫓 Qutab", "Milli Mətbəx": "🍲 National Cuisine", "Restoran & Bar": "🍽️ Restaurant & Bar", "Restoran": "🍽️ Restaurant", "Milli Restoran": "🎶 National Restaurant", "Çay evi & Kafe": "☕ Tea House & Cafe", "Ev Yeməkləri": "🍲 Home-style Meals", "Gürcü Mətbəxi": "🥟 Georgian Cuisine", "Asiya Mətbəxi": "🥢 Asian Cuisine", "Fransa Kafesi": "🇫🇷 French Cafe", "Muzey Restoran": "🏛️ Museum Restaurant", "Dəniz Mənzərəli": "🌊 Sea View", "Estetik Restoran": "🎨 Aesthetic Restaurant", "Panoramik Bar": "🍸 Panoramic Bar", "Rooftop Restoran": "🌇 Rooftop Restaurant", "Lüks İtalyan": "🌟 Luxury Italian", "Steykhauz": "🥩 Steakhouse", "İtalyan Premium": "🌟 Italian Premium", "Coffee Shop": "☕ Coffee Shop", "Estetik Kafe": "☕ Aesthetic Cafe", "Botanik Kafe": "🌿 Botanic Cafe", "Premium Kafe": "☕ Premium Cafe", "Desert & Kafe": "🍰 Dessert & Cafe", "VR Simulyatoru": "🥽 VR Simulator", "Boulinq": "🎳 Bowling", "Kartinq": "🏎️ Karting", "Escape Room": "🧩 Escape Room", "Qorxu Otağı": "👻 Horror Room", "Peşəkar Atıcılıq": "🎯 Professional Shooting", "Atçılıq Klubu": "🐎 Horse Club", "Keramika & Dulusçuluq": "🏺 Ceramics & Pottery", "Qəhvə Masterklassı": "☕ Coffee Masterclass", "Rəsm Masterklassı": "🎨 Art Masterclass", "Əl İşləri & Sənət": "🖌️ Crafts & Art", "Art & Dekor": "🎨 Art & Decor", "Yaradıcı Rəsm": "🎨 Creative Painting", "Sənət Studiyası": "🖌️ Art Studio", "Əyləncəli Rəsm Dərsi": "🎨 Fun Painting Class", "Ebru Sənəti": "🌊 Ebru Art", "Peşəkar Keramika": "🏺 Professional Ceramics", "Kulinariya Masterklassı": "🍳 Culinary Masterclass", "Aşpazlıq & Şirniyyat": "🍰 Cooking & Pastry", "Milli Mətbəx Dərsləri": "🍲 National Cuisine Classes", "Ev Yeməkləri M/K": "🥘 Home Cooking Class"
    },
    ru: {
        "Fast-Food": "🍗 Фаст-фуд", "Pizzeria": "🍕 Пиццерия", "Dönər": "🌯 Донер", "Türk Mətbəxi": "🍲 Турецкая кухня", "Kafe": "🍽️ Кафе", "Suşi": "🍣 Суши", "Qənnadı": "🥐 Выпечка и сладости", "Qutab": "🫓 Кутаб", "Milli Mətbəx": "🍲 Национальная кухня", "Restoran & Bar": "🍽️ Ресторан и бар", "Restoran": "🍽️ Ресторан", "Milli Restoran": "🎶 Национальный ресторан", "Çay evi & Kafe": "☕ Чайхана и кафе", "Ev Yeməkləri": "🍲 Домашняя еда", "Gürcü Mətbəxi": "🥟 Грузинская кухня", "Asiya Mətbəxi": "🥢 Азиатская кухня", "Fransa Kafesi": "🇫🇷 Французское кафе", "Muzey Restoran": "🏛️ Музей-ресторан", "Dəniz Mənzərəli": "🌊 С видом на море", "Estetik Restoran": "🎨 Эстетичный ресторан", "Panoramik Bar": "🍸 Панорамный бар", "Rooftop Restoran": "🌇 Руфтоп-ресторан", "Lüks İtalyan": "🌟 Люкс Итальянский", "Steykhauz": "🥩 Стейкхаус", "İtalyan Premium": "🌟 Итальянский Премиум", "Coffee Shop": "☕ Кофейня", "Estetik Kafe": "☕ Эстетичное кафе", "Botanik Kafe": "🌿 Ботаническое кафе", "Premium Kafe": "☕ Премиум кафе", "Desert & Kafe": "🍰 Десерт и кафе", "VR Simulyatoru": "🥽 VR Симулятор", "Boulinq": "🎳 Боулинг", "Kartinq": "🏎️ Картинг", "Escape Room": "🧩 Квест-комната", "Qorxu Otağı": "👻 Комната страха", "Peşəkar Atıcılıq": "🎯 Профессиональный тир", "Atçılıq Klubu": "🐎 Клуб верховой езды", "Keramika & Dulusçuluq": "🏺 Керамика и гончарное дело", "Qəhvə Masterklassı": "☕ Кофейный мастер-класс", "Rəsm Masterklassı": "🎨 Мастер-класс по рисованию", "Əl İşləri & Sənət": "🖌️ Реммесла и искусство", "Art & Dekor": "🎨 Арт и декор", "Yaradıcı Rəsm": "🎨 Творческая живопись", "Sənət Studiyası": "🖌️ Художественная студия", "Əyləncəli Rəsm Dərsi": "🎨 Увлекательный урок рисования", "Ebru Sənəti": "🌊 Искусство Эбру", "Peşəkar Keramika": "🏺 Профессиональная керамика", "Kulinariya Masterklassı": "🍳 Кулинарный мастер-класс", "Aşpazlıq & Şirniyyat": "🍰 Кулинария и кондитерская", "Milli Mətbəx Dərsləri": "🍲 Уроки национальной кухни", "Ev Yeməkləri M/K": "🥘 Уроки домашней кухни"
    }
};

const bakuPlaces = [
    { id: "kfc_28", name: "KFC (28 Mall)", group: "yemek_10", price: 9, type: "Fast-Food", hours: "10:00 - 23:00", ig: "@kfcazerbaijan" },
    { id: "kfc_nz", name: "KFC (Nizami)", group: "yemek_10", price: 9, type: "Fast-Food", hours: "10:00 - 00:00", ig: "@kfcazerbaijan" },
    { id: "mcd_f", name: "McDonald's (Fəvvarələr)", group: "yemek_10", price: 9, type: "Fast-Food", hours: "08:00 - 02:00", ig: "@mcdonaldsazerbaijan" },
    { id: "mcd_28", name: "McDonald's (28 Mall)", group: "yemek_10", price: 9, type: "Fast-Food", hours: "10:00 - 23:00", ig: "@mcdonaldsazerbaijan" },
    { id: "bk_niz", name: "Burger King (Nizami)", group: "yemek_10", price: 10, type: "Fast-Food", hours: "10:00 - 23:00", ig: "@burgerking.az" },
    { id: "pj_gen", name: "Papa John's (Gənclik)", group: "yemek_10", price: 10, type: "Pizzeria", hours: "11:00 - 23:00", ig: "@papajohnsaz" },
    { id: "dom_xet", name: "Domino's Pizza (Xətai)", group: "yemek_10", price: 10, type: "Pizzeria", hours: "10:00 - 03:00", ig: "@dominosazerbaijan" },
    { id: "shaurma1_n", name: "Shaurma №1 (Nizami)", group: "yemek_10", price: 7, type: "Dönər", hours: "24/7", ig: "@shaurman1" },
    { id: "biriki_is", name: "Bir-İki Dönər (İçərişəhər)", group: "yemek_10", price: 6, type: "Dönər", hours: "09:00 - 00:00", ig: "@birikidoner" },
    { id: "donerchi_y", name: "Dönərçi (Yeni Yasamal)", group: "yemek_10", price: 6, type: "Dönər", hours: "10:00 - 23:00", ig: "@donerchi" },
    { id: "anadolu_ist", name: "Anadolu Restaurant (İstiqlaliyyət)", group: "yemek_10", price: 10, type: "Türk Mətbəxi", hours: "10:00 - 23:00", ig: "@anadolurestaurant" },
    { id: "cc_gen", name: "CaféCity Gənclik", group: "yemek_10", price: 10, type: "Kafe", hours: "10:00 - 00:00", ig: "@cafecitybaku" },
    { id: "cc_5", name: "CaféCity Five", group: "yemek_10", price: 10, type: "Kafe", hours: "10:00 - 00:00", ig: "@cafecitybaku" },
    { id: "br_gen", name: "Bake&Roll Sushi Bar (Gənclik)", group: "yemek_10", price: 10, type: "Suşi", hours: "11:00 - 23:00", ig: "@bakeandroll" },
    { id: "fryday_n", name: "Fryday (Nizami)", group: "yemek_10", price: 8, type: "Fast-Food", hours: "10:00 - 23:00", ig: "@frydayaz" },
    { id: "ballibisi_n", name: "Ballı Bisi", group: "yemek_10", price: 8, type: "Qənnadı", hours: "08:00 - 22:00", ig: "@ballibisi" },
    { id: "pm_niz", name: "Pizza Mizza (Nizami)", group: "yemek_10", price: 10, type: "Pizzeria", hours: "10:00 - 02:00", ig: "@pizzamizza" },
    { id: "qh_is", name: "Qutab House (İçərişəhər)", group: "yemek_10", price: 5, type: "Qutab", hours: "09:00 - 23:00", ig: "@qutabhouse" },

    { id: "firuz", name: "Firuze Restaurant", group: "yemek_20_30", price: 25, type: "Milli Mətbəx", hours: "12:00 - 00:00", ig: "@firuzerestaurant", instaSpot: true },
    { id: "pass145", name: "Passage 145", group: "yemek_20_30", price: 22, type: "Restoran & Bar", hours: "10:00 - 02:00", ig: "@passage145" },
    { id: "dolma", name: "Dolma Restaurant", group: "yemek_20_30", price: 20, type: "Milli Mətbəx", hours: "11:00 - 23:00", ig: "@dolmavillage" },
    { id: "nrgz", name: "Nergiz Restaurant", group: "yemek_20_30", price: 25, type: "Milli Mətbəx", hours: "12:00 - 23:30", ig: "@nargizrestaurant" },
    { id: "qala", name: "Qala Divari", group: "yemek_20_30", price: 25, type: "Milli Mətbəx", hours: "11:00 - 23:00", ig: "@qaladivari" },
    { id: "salambaku", name: "Salam Baku Restaurant", group: "yemek_20_30", price: 20, type: "Restoran", hours: "10:00 - 00:00", ig: "@salambaku" },
    { id: "mugam_club", name: "Mugam Club", group: "yemek_20_30", price: 30, type: "Milli Restoran", hours: "11:00 - 23:00", ig: "@mugamclub", instaSpot: true },
    { id: "shah_rest", name: "Shah Restaurant & Gallery", group: "yemek_20_30", price: 28, type: "Restoran", hours: "11:00 - 00:00", ig: "@shahrestaurant" },
    { id: "chayki", name: "Chayki Restaurant", group: "yemek_20_30", price: 30, type: "Çay evi & Kafe", hours: "10:00 - 00:00", ig: "@chayki", instaSpot: true },
    { id: "marivanna", name: "Mari Vanna", group: "yemek_20_30", price: 28, type: "Ev Yeməkləri", hours: "12:00 - 00:00", ig: "@marivannabaku", instaSpot: true },
    { id: "marani", name: "Marani Restaurant", group: "yemek_20_30", price: 25, type: "Gürcü Mətbəxi", hours: "11:00 - 23:00", ig: "@maranirestaurant" },
    { id: "megobari", name: "Megobari Restaurant", group: "yemek_20_30", price: 25, type: "Gürcü Mətbəxi", hours: "12:00 - 00:00", ig: "@megobari.baku" },
    { id: "caravan", name: "Caravan Baku", group: "yemek_20_30", price: 25, type: "Restoran", hours: "11:00 - 00:00", ig: "@caravanbaku" },
    { id: "chinar", name: "Chinar Restaurant & Lounge", group: "yemek_20_30", price: 30, type: "Asiya Mətbəxi", hours: "18:00 - 02:00", ig: "@chinarbaku", instaSpot: true },
    { id: "parisbistro", name: "Paris Bistro", group: "yemek_20_30", price: 30, type: "Fransa Kafesi", hours: "09:00 - 00:00", ig: "@parisbistrobaku", instaSpot: true },
    { id: "sumakh", name: "Sumakh Restaurant", group: "yemek_20_30", price: 30, type: "Milli Mətbəx", hours: "12:00 - 00:00", ig: "@sumakh.restaurant" },

    { id: "shirvanshah", name: "Shirvanshah Museum Restaurant", group: "yemek_50_plus", price: 55, type: "Muzey Restoran", hours: "11:00 - 23:00", ig: "@shirvanshah_restaurant", instaSpot: true },
    { id: "sahil", name: "SAHiL Bar & Restaurant", group: "yemek_50_plus", price: 60, type: "Dəniz Mənzərəli", hours: "12:00 - 00:00", ig: "@sahil.restaurant", instaSpot: true },
    { id: "artclub", name: "Art Club Restaurant", group: "yemek_50_plus", price: 70, type: "Estetik Restoran", hours: "12:00 - 23:00", ig: "@artclubbaku", instaSpot: true },
    { id: "bar360", name: "360 Bar & Grill", group: "yemek_50_plus", price: 80, type: "Panoramik Bar", hours: "17:00 - 02:00", ig: "@bar360baku", instaSpot: true },
    { id: "skygrill", name: "Sky Grill", group: "yemek_50_plus", price: 90, type: "Rooftop Restoran", hours: "17:00 - 00:00", ig: "@skygrillbaku", instaSpot: true },
    { id: "zafferano", name: "Zafferano Restaurant", group: "yemek_50_plus", price: 110, type: "Lüks İtalyan", hours: "07:00 - 23:00", ig: "@zafferranobaku", instaSpot: true },
    { id: "fireworks", name: "Fireworks Urban Kitchen", group: "yemek_50_plus", price: 100, type: "Steykhauz", hours: "18:00 - 23:00", ig: "@fireworksurbankitchen" },
    { id: "oronero", name: "OroNero Bar & Ristorante", group: "yemek_50_plus", price: 120, type: "İtalyan Premium", hours: "18:00 - 23:30", ig: "@oronerobaku", instaSpot: true },

    { id: "coffeeco", name: "Coffeeco", group: "coffee_10", price: 7, type: "Coffee Shop", hours: "08:00 - 23:00", ig: "@coffeeco.az" },
    { id: "bakuroasting", name: "Baku Roasting Company", group: "coffee_10", price: 8, type: "Coffee Shop", hours: "08:30 - 23:00", ig: "@bakuroasting" },
    { id: "starbucks", name: "Starbucks", group: "coffee_10", price: 9, type: "Coffee Shop", hours: "07:30 - 00:00", ig: "@starbucksaz" },
    { id: "costa", name: "Costa Coffee", group: "coffee_10", price: 9, type: "Coffee Shop", hours: "08:00 - 23:00", ig: "@costacoffeeaz" },
    { id: "gloria", name: "Gloria Jean's Coffees", group: "coffee_10", price: 8, type: "Coffee Shop", hours: "08:00 - 23:00", ig: "@gloriajeansaz" },
    { id: "secondcup", name: "Second Cup", group: "coffee_10", price: 8, type: "Coffee Shop", hours: "08:00 - 23:00", ig: "@secondcupaz" },

    { id: "gazelli", name: "Gazelli Cafe", group: "coffee_plus", price: 14, type: "Estetik Kafe", hours: "10:00 - 22:00", ig: "@gazellicafe", instaSpot: true },
    { id: "coffeespace", name: "Coffee Space Baku", group: "coffee_plus", price: 12, type: "Coffee Shop", hours: "09:00 - 23:00", ig: "@coffeespacebaku" },
    { id: "botanist", name: "Café Botanist", group: "coffee_plus", price: 14, type: "Botanik Kafe", hours: "09:00 - 00:00", ig: "@cafebotanist", instaSpot: true },
    { id: "coffeemania", name: "Coffeemania", group: "coffee_plus", price: 15, type: "Premium Kafe", hours: "08:00 - 00:00", ig: "@coffeemania.baku", instaSpot: true },
    { id: "leto", name: "L'ETO Caffe", group: "coffee_plus", price: 16, type: "Desert & Kafe", hours: "10:00 - 23:00", ig: "@letocaffe", instaSpot: true },

    { id: "vr_another", name: "Another World VR Arena", group: "eylence_15", price: 8, type: "VR Simulyatoru", hours: "10:00 - 22:00", ig: "@anotherworld.baku" },
    { id: "ontop", name: "Ontop Bowling", group: "eylence_15", price: 12, type: "Boulinq", hours: "10:00 - 00:00", ig: "@ontopbowling" },
    { id: "karting", name: "Baku City Karting", group: "eylence_30", price: 25, type: "Kartinq", hours: "12:00 - 00:00", ig: "@bakucitykarting", instaSpot: true },
    { id: "portalgames", name: "Portal Games (28 Mall)", group: "eylence_30", price: 20, type: "Escape Room", hours: "10:00 - 22:00", ig: "@portalgamesaz" },
    { id: "phobia", name: "Phobia Games Nərimanov", group: "eylence_30", price: 25, type: "Qorxu Otağı", hours: "10:00 - 02:00", ig: "@phobiagames.az" },
    { id: "shooting", name: "Baku Shooting Center", group: "eylence_100", price: 50, type: "Peşəkar Atıcılıq", hours: "09:00 - 20:00", ig: "@bakushootingcenter" },
    { id: "horseclub", name: "Horse Club Baku", group: "eylence_100", price: 40, type: "Atçılıq Klubu", hours: "09:00 - 19:00", ig: "@horseclubbaku", instaSpot: true },

    { id: "pirizada_ceramics", name: "Pirizada Keramika", group: "masterclass_35", price: 40, type: "Keramika & Dulusçuluq", hours: "10:00 - 20:00", ig: "@pirizadaceramics", instaSpot: true },
    { id: "gilli_coffee", name: "Gilli Coffee", group: "masterclass_35", price: 30, type: "Qəhvə Masterklassı", hours: "09:00 - 23:00", ig: "@gillicoffee", instaSpot: true },
    { id: "crea_art", name: "Crea Art Studio", group: "masterclass_35", price: 35, type: "Rəsm Masterklassı", hours: "10:00 - 21:00", ig: "@creaartstudio", instaSpot: true },
    { id: "creative_station", name: "Creative Station", group: "masterclass_35", price: 35, type: "Əl İşləri & Sənət", hours: "10:00 - 20:00", ig: "@creativestation", instaSpot: true },
    { id: "frida_co", name: "Frida Co Baku", group: "masterclass_35", price: 45, type: "Art & Dekor", hours: "11:00 - 21:00", ig: "@fridacobaku", instaSpot: true },
    { id: "hiss_art", name: "Hiss Art Studio", group: "masterclass_35", price: 35, type: "Yaradıcı Rəsm", hours: "10:00 - 20:00", ig: "@hissartstudio", instaSpot: true },
    { id: "pirizada_art", name: "Pirizada Art Studio", group: "masterclass_35", price: 40, type: "Sənət Studiyası", hours: "10:00 - 20:00", ig: "@pirizadaart", instaSpot: true },
    { id: "maraqli_art", name: "Maraqlı Art", group: "masterclass_35", price: 30, type: "Əyləncəli Rəsm Dərsi", hours: "10:00 - 22:00", ig: "@maraqliart", instaSpot: true },
    { id: "ozunu_yarat", name: "Özünü Yarat — Ebru Art Center", group: "masterclass_35", price: 35, type: "Ebru Sənəti", hours: "10:00 - 19:00", ig: "@ozunuyarat", instaSpot: true },
    { id: "mt_ceramics", name: "MT Ceramics Center", group: "masterclass_35", price: 45, type: "Peşəkar Keramika", hours: "10:00 - 20:00", ig: "@mtceramics", instaSpot: true },
    { id: "casa_culinary", name: "CÀSÀ Culinary Arts Center", group: "masterclass_35", price: 60, type: "Kulinariya Masterklassı", hours: "10:00 - 22:00", ig: "@casaculinary", instaSpot: true },
    { id: "maya_culinary", name: "Maya Culinary Academy", group: "masterclass_35", price: 55, type: "Aşpazlıq & Şirniyyat", hours: "10:00 - 21:00", ig: "@mayaculinary", instaSpot: true },
    { id: "azerbaijan_culinary", name: "Azerbaijan Culinary Academy", group: "masterclass_35", price: 50, type: "Milli Mətbəx Dərsləri", hours: "10:00 - 20:00", ig: "@azculinary", instaSpot: true },
    { id: "cooking_class_baku", name: "Cooking Class Baku", group: "masterclass_35", price: 50, type: "Ev Yeməkləri M/K", hours: "11:00 - 21:00", ig: "@cookingclassbaku", instaSpot: true }
];

const sponsoredPlaces = [
    { id: "spon_1", name: "Zafferano Restaurant", group: "yemek_50_plus", price: 110, type: "Lüks İtalyan", hours: "07:00 - 23:00", ig: "@zafferranobaku", isSponsored: true },
    { id: "spon_2", name: "OroNero Bar & Ristorante", group: "yemek_50_plus", price: 120, type: "İtalyan Premium", hours: "18:00 - 23:30", ig: "@oronerobaku", isSponsored: true },
    { id: "spon_3", name: "Chinar Restaurant & Lounge", group: "yemek_20_30", price: 30, type: "Asiya Mətbəxi", hours: "18:00 - 02:00", ig: "@chinarbaku", isSponsored: true },
    { id: "spon_4", name: "Shirvanshah Museum Restaurant", group: "yemek_50_plus", price: 55, type: "Muzey Restoran", hours: "11:00 - 23:00", ig: "@shirvanshah_restaurant", isSponsored: true }
];

let isCurrentlySponsored = false;
let isVipPageActive = false;

function toggleSponsoredMode() {
    isCurrentlySponsored = true;
    isVipPageActive = false;
    showOnlyFavorites = false;
    document.getElementById('sectionTitle').innerText = translations[currentLang].sec_title_sponsor;
    
    const resultGrid = document.getElementById('resultGrid');
    const exploreControls = document.getElementById('exploreControls');
    const pageContentArea = document.getElementById('pageContentArea');
    
    exploreControls.style.display = 'block';
    pageContentArea.style.display = 'none';
    resultGrid.style.display = 'grid';

    renderSponsoredPlaces(sponsoredPlaces);
}

function openVipPage() {
    isCurrentlySponsored = false;
    isVipPageActive = true;
    showOnlyFavorites = false;
    
    const resultGrid = document.getElementById('resultGrid');
    const exploreControls = document.getElementById('exploreControls');
    const pageContentArea = document.getElementById('pageContentArea');
    const sectionTitle = document.getElementById('sectionTitle');

    exploreControls.style.display = 'block';
    resultGrid.style.display = 'none';
    pageContentArea.style.display = 'block';

    const t = translations[currentLang];
    sectionTitle.innerText = t.sec_title_vip;

    pageContentArea.innerHTML = currentLang === 'en' ? `
        <h3>⭐ MeetBaku VIP Pass</h3>
        <p>Unlock exclusive benefits across Baku! Get <strong>up to 10% discount</strong> at partner restaurants, priority bookings, and full access to curated luxury guides.</p>
        <div class="vip-card-box">
            <p style="color: #e4e4e7; font-weight: 600;">Monthly VIP Membership</p>
            <div class="vip-price">4.90 AZN / mo</div>
            <p style="font-size: 13px; color: #a1a1aa; margin-bottom: 15px;">Cancel anytime. Instant activation.</p>
            
            <div class="contact-form" style="max-width: 350px; margin: 0 auto;">
                <input type="text" placeholder="Card Number (XXXX XXXX XXXX XXXX)" class="contact-input" maxlength="19">
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="MM/YY" class="contact-input" maxlength="5">
                    <input type="password" placeholder="CVV" class="contact-input" maxlength="3">
                </div>
                <button class="vip-sub-btn" onclick="processPayment()" style="margin-top: 5px;">Pay 4.90 AZN ✨</button>
            </div>
        </div>
    ` : currentLang === 'ru' ? `
        <h3>⭐ MeetBaku VIP Pass</h3>
        <p>Откройте эксклюзивные привилегии в Баку! Получайте <strong>до 10% скидки</strong> в партнерских ресторанах, приоритетное бронирование и доступ к премиум-гидам.</p>
        <div class="vip-card-box">
            <p style="color: #e4e4e7; font-weight: 600;">Месячное VIP членство</p>
            <div class="vip-price">4.90 AZN / мес</div>
            <p style="font-size: 13px; color: #a1a1aa; margin-bottom: 15px;">Отмена в любое время. Мгновенная активация.</p>
            
            <div class="contact-form" style="max-width: 350px; margin: 0 auto;">
                <input type="text" placeholder="Номер карты (XXXX XXXX XXXX XXXX)" class="contact-input" maxlength="19">
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="MM/YY" class="contact-input" maxlength="5">
                    <input type="password" placeholder="CVV" class="contact-input" maxlength="3">
                </div>
                <button class="vip-sub-btn" onclick="processPayment()" style="margin-top: 5px;">Оплатить 4.90 AZN ✨</button>
            </div>
        </div>
    ` : `
        <h3>⭐ MeetBaku VIP Pass</h3>
        <p>Bakı şəhərində eksklüziv imtiyazlar əldə et! Tərəfdaş məkanlarda <strong>10%-ə qədər xüsusi endirimlər</strong>, növbəsiz VIP rezervasiya və xüsusi bələdçi üstünlükləri.</p>
        <div class="vip-card-box">
            <p style="color: #e4e4e7; font-weight: 600;">Aylıq VIP Abunəlik</p>
            <div class="vip-price">4.90 AZN / ay</div>
            <p style="font-size: 13px; color: #a1a1aa; margin-bottom: 15px;">İstədiyin vaxt ləğv et. Ani aktivləşmə.</p>
            
            <div class="contact-form" style="max-width: 350px; margin: 0 auto;">
                <input type="text" placeholder="Kart nömrəsi (XXXX XXXX XXXX XXXX)" class="contact-input" maxlength="19">
                <div style="display: flex; gap: 10px;">
                    <input type="text" placeholder="AA/İİ" class="contact-input" maxlength="5">
                    <input type="password" placeholder="CVV" class="contact-input" maxlength="3">
                </div>
                <button class="vip-sub-btn" onclick="processPayment()" style="margin-top: 5px;">4.90 AZN Ödə ✨</button>
            </div>
        </div>
    `;
}

function processPayment() {
    alert('Təbriklər! Ödəniş uğurla qəbul edildi və VIP Pass hesabınıza aktivləşdirildi! Tərəfdaş məkanlarda 10%-ə qədər endirimlərdən yararlana bilərsiniz! 🎉');
    generatePlan();
}

function renderSponsoredPlaces(places) {
    const resultGrid = document.getElementById('resultGrid');
    resultGrid.innerHTML = '';
    const t = translations[currentLang];

    places.forEach(place => {
        let mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Baku')}`;
        let isFav = favorites.includes(place.id);

        let convertedPrice = Math.round(place.price * exchangeRates[currentCurrency]);
        let currencySymbol = currentCurrency === 'AZN' ? 'AZN' : currentCurrency === 'USD' ? '$' : '€';
        let translatedType = placeTypeTranslations[currentLang][place.type] || place.type;

        const card = document.createElement('div');
        card.className = 'place-card sponsored-card';
        card.innerHTML = `
            <button class="fav-btn" onclick="toggleFavorite('${place.id}')">${isFav ? '❤️' : '🤍'}</button>
            <div>
                <div class="sponsor-badge-tag">${t.sponsored_badge}</div>
                <div class="place-header" style="margin-top: 8px;">
                    <span class="place-title">${place.name}</span>
                    <span class="place-price">~${convertedPrice} ${currencySymbol}</span>
                </div>
                <div class="place-type">${translatedType}</div>
                <div class="place-hours">${t.hours} ${place.hours}</div>
                <div class="place-ig">📸 Instagram: ${place.ig}</div>
            </div>
            <a href="${mapsUrl}" target="_blank" class="maps-btn">${t.maps_btn}</a>
        `;
        resultGrid.appendChild(card);
    });
}

function generatePlan() {
    isCurrentlySponsored = false;
    isVipPageActive = false;
    showOnlyFavorites = false;
    document.getElementById('sectionTitle').innerText = translations[currentLang].sec_title_places;
    
    const resultGrid = document.getElementById('resultGrid');
    const exploreControls = document.getElementById('exploreControls');
    const pageContentArea = document.getElementById('pageContentArea');
    
    exploreControls.style.display = 'block';
    pageContentArea.style.display = 'none';
    resultGrid.style.display = 'grid';

    const selectedGroup = document.getElementById('budgetPerPerson').value;

    resultGrid.innerHTML = `
        <div class="skeleton-card"><div class="skeleton-line" style="width: 60%"></div><div class="skeleton-line" style="width: 40%"></div><div class="skeleton-line" style="width: 80%"></div></div>
        <div class="skeleton-card"><div class="skeleton-line" style="width: 50%"></div><div class="skeleton-line" style="width: 30%"></div><div class="skeleton-line" style="width: 70%"></div></div>
        <div class="skeleton-card"><div class="skeleton-line" style="width: 70%"></div><div class="skeleton-line" style="width: 40%"></div><div class="skeleton-line" style="width: 90%"></div></div>
    `;

    setTimeout(() => {
        let matchingPlaces = bakuPlaces.filter(p => p.group === selectedGroup);
        renderPlaces(matchingPlaces);
    }, 400);
}

function toggleInstaSpotMode() {
    isCurrentlySponsored = false;
    isVipPageActive = false;
    showOnlyFavorites = false;
    document.getElementById('sectionTitle').innerText = translations[currentLang].sec_title_insta;
    
    const resultGrid = document.getElementById('resultGrid');
    const exploreControls = document.getElementById('exploreControls');
    const pageContentArea = document.getElementById('pageContentArea');
    
    exploreControls.style.display = 'block';
    pageContentArea.style.display = 'none';
    resultGrid.style.display = 'grid';

    let instaPlaces = bakuPlaces.filter(p => p.instaSpot === true);
    renderPlaces(instaPlaces);
}

function renderPlaces(places) {
    const resultGrid = document.getElementById('resultGrid');
    resultGrid.innerHTML = '';
    const t = translations[currentLang];

    if (places.length === 0) {
        resultGrid.innerHTML = `<p style="color: #a1a1aa;">Məkan tapılmadı.</p>`;
        return;
    }

    places.forEach(place => {
        let mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ' Baku')}`;
        let isFav = favorites.includes(place.id);

        let convertedPrice = Math.round(place.price * exchangeRates[currentCurrency]);
        let currencySymbol = currentCurrency === 'AZN' ? 'AZN' : currentCurrency === 'USD' ? '$' : '€';

        let translatedType = placeTypeTranslations[currentLang][place.type] || place.type;

        const card = document.createElement('div');
        card.className = 'place-card';
        card.innerHTML = `
            <button class="fav-btn" onclick="toggleFavorite('${place.id}')">${isFav ? '❤️' : '🤍'}</button>
            <div>
                <div class="place-header">
                    <span class="place-title">${place.name}</span>
                    <span class="place-price">~${convertedPrice} ${currencySymbol}</span>
                </div>
                <div class="place-type">${translatedType}</div>
                <div class="place-hours">${t.hours} ${place.hours}</div>
                <div class="place-ig">📸 Instagram: ${place.ig}</div>
            </div>
            <a href="${mapsUrl}" target="_blank" class="maps-btn">${t.maps_btn}</a>
        `;
        resultGrid.appendChild(card);
    });
}

function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('meetbaku_favorites', JSON.stringify(favorites));
    updateFavCount();

    if (isCurrentlySponsored) {
        renderSponsoredPlaces(sponsoredPlaces);
    } else if (showOnlyFavorites) {
        toggleFavoritesView();
    } else if (!isVipPageActive) {
        generatePlan();
    }
}

function updateFavCount() {
    document.getElementById('favCount').innerText = favorites.length;
}

function toggleFavoritesView() {
    isCurrentlySponsored = false;
    isVipPageActive = false;
    showOnlyFavorites = !showOnlyFavorites;
    const t = translations[currentLang];

    const resultGrid = document.getElementById('resultGrid');
    const pageContentArea = document.getElementById('pageContentArea');
    resultGrid.style.display = 'grid';
    pageContentArea.style.display = 'none';

    if (showOnlyFavorites) {
        document.getElementById('sectionTitle').innerText = t.sec_title_fav;
        let favPlaces = bakuPlaces.filter(p => favorites.includes(p.id));
        renderPlaces(favPlaces);
    } else {
        generatePlan();
    }
}

function toggleLanguage() {
    if (currentLang === 'az') {
        currentLang = 'en';
    } else if (currentLang === 'en') {
        currentLang = 'ru';
    } else {
        currentLang = 'az';
    }

    document.getElementById('langBtnLanding').innerText = currentLang.toUpperCase() + ' 🌐';
    document.getElementById('langBtnApp').innerText = currentLang.toUpperCase() + ' 🌐';

    updateTexts();
}

function toggleCurrency() {
    if (currentCurrency === 'AZN') {
        currentCurrency = 'USD';
    } else if (currentCurrency === 'USD') {
        currentCurrency = 'EUR';
    } else {
        currentCurrency = 'AZN';
    }

    let symbol = currentCurrency === 'AZN' ? '₼' : currentCurrency === 'USD' ? '$' : '€';
    document.getElementById('currBtnApp').innerText = `${currentCurrency} ${symbol}`;

    if (isCurrentlySponsored) {
        renderSponsoredPlaces(sponsoredPlaces);
    } else if (showOnlyFavorites) {
        renderPlaces(bakuPlaces.filter(p => favorites.includes(p.id)));
    } else if (!isVipPageActive) {
        generatePlan();
    }
}

function updateTexts() {
    const t = translations[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerText = t[key];
        }
    });

    if (isCurrentlySponsored) {
        document.getElementById('sectionTitle').innerText = t.sec_title_sponsor;
        renderSponsoredPlaces(sponsoredPlaces);
    } else if (showOnlyFavorites) {
        document.getElementById('sectionTitle').innerText = t.sec_title_fav;
        renderPlaces(bakuPlaces.filter(p => favorites.includes(p.id)));
    } else if (isVipPageActive) {
        openVipPage();
    } else {
        generatePlan();
    }
}

function startApp() {
    const landing = document.getElementById('landingPage');
    const app = document.getElementById('appContainer');

    landing.style.opacity = '0';
    landing.style.visibility = 'hidden';
    
    setTimeout(() => {
        landing.style.display = 'none';
        app.style.display = 'flex';
        updateFavCount();
        generatePlan();
    }, 600);
}

function goToHome() {
    const landing = document.getElementById('landingPage');
    const app = document.getElementById('appContainer');

    app.style.display = 'none';
    landing.style.display = 'flex';
    setTimeout(() => {
        landing.style.opacity = '1';
        landing.style.visibility = 'visible';
    }, 50);
}

function toggleDropdownMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.three-dots-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function switchMainTab(tabName) {
    isCurrentlySponsored = false;
    isVipPageActive = false;
    showOnlyFavorites = false;
    const resultGrid = document.getElementById('resultGrid');
    const exploreControls = document.getElementById('exploreControls');
    const pageContentArea = document.getElementById('pageContentArea');
    const sectionTitle = document.getElementById('sectionTitle');

    if (tabName === 'explore') {
        exploreControls.style.display = 'block';
        pageContentArea.style.display = 'none';
        resultGrid.style.display = 'grid';
        generatePlan();
    } else {
        exploreControls.style.display = 'none';
        resultGrid.style.display = 'none';
        pageContentArea.style.display = 'block';

        if (tabName === 'about') {
            sectionTitle.innerText = currentLang === 'en' ? 'About Us' : currentLang === 'ru' ? 'О нас' : 'Haqqımızda';
            pageContentArea.innerHTML = currentLang === 'en' ? `
                <h3>About MEET BAKU</h3>
                <p><strong>MeetBaku</strong> is a modern discovery platform gathering the most exquisite, luxury and aesthetic places in Baku. Meals, Entertainment, Experience and Travel in one place...</p>
                <p style="color: #f59e0b; margin-top: 20px; font-weight: 600;">© 2026 MeetBaku. By Mehdi</p>
            ` : currentLang === 'ru' ? `
                <h3>О проекте MEET BAKU</h3>
                <p><strong>MeetBaku</strong> — это современная платформа для поиска самых изысканных и эстетичных мест в Баку. Еда, развлечения, впечатления и путешествия...</p>
                <p style="color: #f59e0b; margin-top: 20px; font-weight: 600;">© 2026 MeetBaku. By Mehdi</p>
            ` : `
                <h3>MEET BAKU Haqqında</h3>
                <p><strong>MeetBaku</strong> — Bakı şəhərinin ən zövqlü, lüks və estetik məkanlarını bir araya gətirən müasir kəşf platformasıdır. Meals, Entertainment, Experience, Travel...</p>
                <p style="color: #f59e0b; margin-top: 20px; font-weight: 600;">© 2026 MeetBaku. By Mehdi</p>
            `;
        } else if (tabName === 'partnership') {
            sectionTitle.innerText = currentLang === 'en' ? 'Partnerships' : currentLang === 'ru' ? 'Сотрудничество' : 'Əməkdaşlıq & Partnyorluq';
            pageContentArea.innerHTML = currentLang === 'en' ? `
                <h3>Partner With Us</h3>
                <p>Are you an owner of a restaurant, cafe or lounge in Baku? Partner with us to showcase your place to thousands of active users.</p>
                <p style="color: #f59e0b; margin-top: 15px;">📧 Partners email: partners@meetbaku.az</p>
            ` : currentLang === 'ru' ? `
                <h3>Сотрудничество с нами</h3>
                <p>Вы владелец ресторана, кафе или лаунжа в Баку? Сотрудничайте с нами для продвижения вашего заведения.</p>
                <p style="color: #f59e0b; margin-top: 15px;">📧 Email: partners@meetbaku.az</p>
            ` : `
                <h3>Bizimlə Əməkdaşlıq Edin</h3>
                <p>Bakıda restoran, kafe və ya əyləncə mərkəzinin sahibisiniz? Məkanınızı minlərlə istifadəçiyə tanıtmaq üçün bizimlə əməkdaşlıq edin.</p>
                <p style="color: #f59e0b; margin-top: 15px;">📧 Partnyorluq əlaqəsi: partners@meetbaku.az</p>
            `;
        } else if (tabName === 'contact') {
            sectionTitle.innerText = currentLang === 'en' ? 'Contact Us' : currentLang === 'ru' ? 'Контакты' : 'Bizimlə Əlaqə';
            pageContentArea.innerHTML = currentLang === 'en' ? `
                <h3>Get In Touch</h3>
                <p>If you have any suggestions or questions, feel free to write to us.</p>
                <div class="contact-form">
                    <input type="text" placeholder="Your Name" class="contact-input">
                    <input type="email" placeholder="Your Email" class="contact-input">
                    <textarea placeholder="Your Message..." class="contact-input" rows="4"></textarea>
                    <button class="primary-btn" onclick="alert('Message sent successfully!')" style="margin-top: 5px;">Send ↗</button>
                </div>
            ` : currentLang === 'ru' ? `
                <h3>Свяжитесь с нами</h3>
                <p>Если у вас есть предложения или вопросы, напишите нам.</p>
                <div class="contact-form">
                    <input type="text" placeholder="Ваше имя" class="contact-input">
                    <input type="email" placeholder="Ваш Email" class="contact-input">
                    <textarea placeholder="Ваше сообщение..." class="contact-input" rows="4"></textarea>
                    <button class="primary-btn" onclick="alert('Сообщение успешно отправлено!')" style="margin-top: 5px;">Отправить ↗</button>
                </div>
            ` : `
                <h3>Bizimlə Əlaqə Saxlayın</h3>
                <p>Hər hansı təklifiniz və ya sualınız varsa, bizə yaza bilərsiniz.</p>
                <div class="contact-form">
                    <input type="text" placeholder="Adınız" class="contact-input">
                    <input type="email" placeholder="E-poçt ünvanınız" class="contact-input">
                    <textarea placeholder="Mesajınız..." class="contact-input" rows="4"></textarea>
                    <button class="primary-btn" onclick="alert('Mesajınız uğurla göndərildi!')" style="margin-top: 5px;">Göndər ↗</button>
                </div>
            `;
        }
    }
}

function openMenuFromLanding(tabName) {
    startApp();
    setTimeout(() => {
        switchMainTab(tabName);
    }, 650);
}