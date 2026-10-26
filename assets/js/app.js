/* =================== data =================== */
const T=(p,w=900)=>{const [a,b]=p.replace(/^tild/,'').split('/');return `https://thb.tildacdn.com/tild${a}/-/resize/${w}x/${b}`};
const IMG={
 logo:'https://static.tildacdn.com/tild3332-3435-4163-a331-636364326333/Logo_allStars3-clr-w.png',
 tango:'https://static.tildacdn.com/tild6363-3238-4261-a163-343161623032/560x360-AllStars-nn_.jpg',
 bug:'https://static.tildacdn.com/tild6436-6137-4038-b033-353530363466/560x360-AllStars-nn_.jpg',
 jeka:'https://static.tildacdn.com/tild6435-3161-4664-a363-326435636637/560x360-AllStars-nn_.jpg',
 pizza:'https://static.tildacdn.com/tild6331-3937-4464-a532-633839323236/560x360-AllStars-nn.jpg',
 samoilov:'https://static.tildacdn.com/tild6361-3966-4139-a161-643630666332/560x360-AllStars-nn_.jpg',
 kino:'https://static.tildacdn.com/tild3362-6265-4064-b261-626435306535/560x360-AllStars-nn.jpg',
 cv_tango:T('3533-3535-4261-b833-613138653265/DSC_7340.jpg',1400),
 cv_bug:T('3865-6137-4363-a632-396634346235/_-8.jpg',1400),
 cv_jeka:T('3565-6534-4261-a435-383436356634/DSC2510-1024x576.jpg',1400),
 cv_pizza:T('3464-3931-4939-a237-386237346435/SScNC8rXPnk.jpg',1400),
 cv_samoilov:T('6230-3065-4331-b139-633738393930/13_Ph__.PNG',1400),
 cv_kino:T('6634-3238-4035-b136-623734363233/10.jpeg',1400),
 pp:T('3931-3239-4665-a562-336364643431/IMG_7313.jpg',900),
};
const REPORTS=[
 ['kino-nn','Группа КИНО','18 октября 2026','Нижний Новгород','3931-3239-4665-a562-336364643431/IMG_7313.jpg','3330-6561-4365-a166-323130363739/IMG_6893.jpg,3032-3537-4634-b837-343564643164/IMG_6919.jpg,3265-3535-4032-b565-386466326265/IMG_6944.jpg,3938-3161-4338-a136-363363653662/IMG_6977.jpg,3435-6631-4831-b061-336339333733/IMG_7057.jpg,3663-6533-4462-b665-343063363430/IMG_7152.jpg'],
 ['kino-kzn','Группа КИНО','16 октября 2026','Казань','6232-6433-4562-b031-373163396437/44.jpg','6237-3132-4235-b433-303139346338/4D9A1643.jpg,3430-6438-4463-b732-346237363539/4D9A1683.jpg,6136-3761-4537-b964-316137393730/4D9A1772.jpg,6666-6334-4164-b135-373039646362/4D9A1885.jpg,3565-3032-4965-a263-326365646263/4D9A2037.jpg,3835-6664-4564-b966-376637353962/31.jpg'],
 ['master','Спектакль «Мастер и Маргарита»','23 сентября','Нижний Новгород','6463-6637-4932-a330-616466363537/IMG_6749.jpg','3966-6535-4431-b262-336336633431/IMG_6662.jpg,6534-6533-4336-a564-376434643138/IMG_6703.jpg,6163-6638-4131-a361-633362643064/IMG_6645.jpg,3438-3737-4062-a461-616366363530/IMG_6625.jpg,6230-6364-4233-a231-326630643031/IMG_6849.jpg,3539-3330-4437-a638-663537376662/IMG_6812.jpg'],
 ['phantom','Мюзикл «Фантом. Призрак Оперы»','19 мая','Нижний Новгород','3732-3834-4131-b932-646130313532/IMG_8837.jpg','6139-6233-4362-a230-653663363564/IMG_8955.jpg,3765-3937-4565-b762-623963343332/IMG_8830.jpg,3531-3835-4531-b439-626431626538/IMG_8869.jpg,3134-6434-4661-b634-623239386237/IMG_8743.jpg,3532-3839-4036-b831-373839303336/IMG_8798.jpg'],
 ['zima','Евгения Зима. Гала-шоу','2 декабря','Нижний Новгород','3834-6165-4261-b639-653063353530/7tDupj3R2vwgdtmdInkc.jpg','3339-3931-4235-b738-323838636635/-digPFrfVinb1NJVsjLZ.jpg,3862-3236-4931-b231-626264383837/rdooizeoNmJ_7_YCKJ3j.jpg,3337-3932-4332-a639-336565393263/DX-JctyAR0pw7Y-N0lP0.jpg,3831-3334-4237-b064-333632623633/X39h7Ap1bZLvYtmWpLVt.jpg,6561-6439-4366-b266-663131643764/pCEknUcLeVwx4FGIpo_L.jpg'],
 ['gurude-taiga','GURUDE «Таёжные сны»','21 октября','Нижний Новгород','6161-3561-4163-b032-323431323732/IMG_3464.jpg','3264-6337-4437-b662-663138353562/IMG_4868.jpg,3636-3163-4131-b936-383534316537/IMG_4782.jpg,3364-3966-4665-a134-616164363065/IMG_4696.jpg,3239-3839-4337-a632-626366626665/IMG_4636.jpg,6139-6261-4330-a631-643665333936/IMG_4517.jpg'],
 ['symkino-kzn','Симфоническое КИНО','11 октября','Казань','6463-3066-4262-a664-336431366632/EVG04500-Enhanced-NR.jpg','3236-3364-4239-b563-386662323861/EVG04278-Enhanced-NR.jpg,6464-3437-4837-b961-353038333930/EVG04370-Enhanced-NR.jpg,3163-6230-4537-a661-383733353834/EVG04477-Enhanced-NR.jpg,3436-6162-4732-a466-636330316638/EVG04682-Enhanced-NR.jpg,3730-3638-4466-a564-636161653034/EVG04758-Enhanced-NR.jpg'],
 ['symkino-ufa','Симфоническое КИНО','15 октября','Уфа','3738-6261-4236-b739-666235653138/DSC06142.jpg','3861-3834-4464-a135-623932626465/DSC06182.jpg,3633-3263-4566-b633-653131653338/DSC06487.jpg,6330-6330-4363-b035-363639313664/DSC05167.jpg,3462-6137-4565-a234-316164343132/DSC05398.jpg,3832-6239-4165-b761-316262376463/DSC05777.jpg'],
 ['symkino-nn','Симфоническое КИНО','13 октября','Нижний Новгород','3134-6462-4063-a431-616439313364/IMG_1074.jpg','6165-3638-4836-b666-643162323963/IMG_1858.jpg,6332-6233-4536-b862-333266346166/IMG_1455.jpg,3462-3738-4563-b763-633561663366/IMG_1124.jpg,3733-3633-4561-b636-666639363962/IMG_0957.jpg,3333-3035-4639-a438-386363623339/IMG_0869.jpg'],
 ['pizza','Группа PIZZA','14 октября','Нижний Новгород','3833-3933-4535-a661-646133306338/AK-077.jpg','6564-6364-4632-a430-376164323939/AK-071.jpg,3136-6664-4438-b062-613462303764/AK-084.jpg,6239-6639-4661-b565-616530626334/AK-096.jpg,3334-6539-4233-b233-653838326530/AK-049.jpg,3837-3732-4063-b964-313262396538/AK-062.jpg'],
 ['perukua','Перукуа «Голос и космос»','9 октября','Нижний Новгород','3739-3064-4237-b632-333333333438/IMG_0068-topaz.jpg','3665-6564-4262-b332-346661656365/IMG_0604-topaz.jpg,3234-3362-4338-b766-333030373830/IMG_0633-topaz.jpg,3663-3361-4037-a339-643539656665/IMG_0530-topaz.jpg,3437-3362-4461-a338-383638343363/IMG_0563-topaz.jpg,3035-3363-4662-a239-623130656665/IMG_0438-topaz.jpg'],
 ['ghost','Мюзикл «Призрак Оперы»','4 сентября','Нижний Новгород','3266-3939-4236-b039-373466376232/IMG_1180.jpg','3162-6138-4665-b332-353235626632/IMG_1203.jpg,3839-3564-4163-a537-303533333339/IMG_1166.jpg,6135-3439-4465-b166-326339333530/IMG_1089.jpg,6537-6639-4632-a330-616337616563/IMG_1095.jpg'],
 ['cedars','Посадка кедров с GURUDE','9 мая','Нижний Новгород','6465-3731-4262-b938-616332643230/IMG_0309.jpg','3233-6430-4938-b361-613866346138/IMG_0085.jpg,3164-6439-4263-b630-636634663831/IMG_0125.jpg,3264-3937-4939-a230-656337306634/IMG_0150.jpg,6331-3132-4665-b064-623036353839/IMG_0185.jpg,3436-3131-4637-a237-396533656539/IMG_0224.jpg'],
 ['uutai','Олена УУТАй «Магия Севера»','3 апреля','Нижний Новгород','3535-3366-4066-a435-326464333061/IMG_8579.jpg','6361-6465-4032-b564-373061386564/IMG_8483.jpg,3532-3136-4237-b637-653664366332/IMG_8573.jpg,6134-3231-4938-b563-353932663832/IMG_8598.jpg,3230-3065-4361-a234-373438643064/IMG_8608.jpg,3963-3739-4836-b239-643766353664/IMG_8622.jpg'],
 ['swan','Балет «Лебединое озеро»','1 апреля','Нижний Новгород','3339-3530-4063-b536-306464373637/IMG_8118.jpg','3266-3832-4566-a431-373063653463/IMG_8444.jpg,3366-3634-4636-a461-316566333230/IMG_8057.jpg,6663-6236-4631-b064-663539356637/IMG_8146.jpg,3638-3034-4432-b362-303466623939/IMG_8209.jpg,6335-6437-4533-a162-376566616336/IMG_8227.jpg'],
 ['rok-sormovo','Рок-Острова','16 марта','Нижний Новгород','6439-3233-4063-a263-623264623461/DSC_0048.jpg','3964-3066-4239-a631-373235353933/DSC_0039.jpg,3636-3835-4863-a666-323237333531/DSC_0055.jpg,3663-6266-4233-b362-656339366563/DSC_0061.jpg,3431-6163-4633-b631-663331636661/DSC_0071.jpg'],
 ['sector','Фестиваль «Сектор Газа: Восставший из Ада — 25 лет»','14 марта','Нижний Новгород','3937-3465-4231-a530-333836386439/IMG_6799.jpg','3935-6530-4234-b866-666137396361/IMG_6916.jpg,3765-6337-4138-a431-663636323332/IMG_6902.jpg,3465-3062-4362-a361-643633656633/IMG_6821.jpg,3963-3339-4334-b237-383438363664/IMG_6691.jpg,3338-3037-4538-b261-643838663535/IMG_6784.jpg'],
 ['rok40','«Рок-Острова». 40 лет вместе','8 марта','Нижний Новгород','3135-3539-4632-a436-363561303363/IMG_6379.png','3561-6237-4764-b163-313463323431/IMG_6180.png,6238-6465-4436-a535-326363313534/IMG_6213.png,6365-3063-4465-a233-356666663838/IMG_6325.png,3333-3634-4039-a165-363039653238/IMG_6007.png,3563-3036-4537-b134-333333373762/IMG_6035.png'],
 ['gurude','GURUDE','7 марта','Нижний Новгород','6465-6661-4062-b361-663563613632/IMG_6332_resized.jpg','6532-3036-4662-b563-346364323334/IMG_6673_resized.jpg,3034-6565-4332-b332-616236623335/IMG_6858_resized.jpg,6434-3636-4262-a664-353166346463/IMG_7125_resized.jpg,3637-3663-4263-b966-633230626235/IMG_7320_resized.jpg'],
 ['kids','Детские спектакли','27–28 декабря 2024','Нижний Новгород','6464-3539-4634-a632-326463303765/DSC_0761.jpg','6364-6433-4034-a161-626632646166/DSC_0515.jpg,6462-6331-4063-b163-633635333366/DSC_0541.jpg,6434-3631-4032-b363-613564396630/DSC_0570.jpg,3966-6637-4233-b664-303865343261/DSC_0600.jpg,3061-3661-4535-a261-383536376664/DSC_0639.jpg'],
].map(([id,t,d,city,cv,g])=>({id,t,d,city,cv,g:[cv,...g.split(',')]}));
REPORTS.forEach(r=>{IMG['r_'+r.id]=T(r.cv,900)});
const rep=id=>REPORTS.find(r=>r.id===id);

const TODAY=new Date(2026,9,26);
const MON=['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
const WD=['вс','пн','вт','ср','чт','пт','сб'];
const CITIES={nn:{name:'Нижний Новгород',gen:'Нижнего Новгорода'},kzn:{name:'Казань',gen:'Казани'}};
const BUG='Всероссийская премьера музыкального спектакля по мультсериалу. Леди Баг, Супер Кот, Бражник и другие герои в исполнении профессиональных актёров; шоу создавалось при участии продюсера оригинального сериала Джереми Зага. Яркие костюмы, сценические эффекты и песни, которые знают дети.';
const KINO='Программа, созданная гитаристом группы «КИНО» Юрием Каспаряном и композитором Игорем Вдовиным. Песни Виктора Цоя в симфоническом звучании — оркестр и рок-состав на одной сцене.';
const EV=[
 {id:'tango',city:'nn',img:'tango',cv:'cv_tango',t:'Мюзикл «Tango de mi Vida» («Танго — моя жизнь»)',short:'Tango de mi Vida',cat:'show',kind:'Мюзикл',d:new Date(2026,9,30),time:'19:00',place:'Филармония',venue:'Нижегородская филармония им. М. Ростроповича',price:1500,desc:'Не концерт-шоу, а полноценный мюзикл об аргентинском танго: сюжет, герои и живая музыка складываются в одну историю. Страстный танец, драматургия и атмосфера Буэнос-Айреса — на сцене Нижегородской филармонии.'},
 {id:'bug1',city:'nn',img:'bug',cv:'cv_bug',series:'bug',t:'Музыкальный спектакль «Леди Баг и Супер Кот»',short:'Леди Баг и Супер Кот',cat:'kids',kind:'Детский спектакль',d:new Date(2026,10,7),time:'11:00',place:'ДК Красное Сормово',venue:'ДК «Красное Сормово»',price:1200,desc:BUG},
 {id:'bug2',city:'nn',img:'bug',cv:'cv_bug',series:'bug',t:'Музыкальный спектакль «Леди Баг и Супер Кот»',short:'Леди Баг и Супер Кот',cat:'kids',kind:'Детский спектакль',d:new Date(2026,10,8),time:'17:00',place:'ДК ГАЗ',venue:'ДК ГАЗ',price:800,desc:BUG},
 {id:'jeka',city:'nn',img:'jeka',cv:'cv_jeka',t:'Евгений Григорьев (Жека) «За всё тебя благодарю»',short:'Жека. За всё тебя благодарю',cat:'concert',kind:'Концерт',d:new Date(2026,11,4),time:'19:00',place:'МТС Live Холл',venue:'МТС Live Холл',price:2000,desc:'Евгений Григорьев (Жека) представляет новую концертную программу «За всё тебя благодарю», названную по одноимённой песне. Вечер лирики, авторских песен и хитов, которые поёт весь зал.'},
 {id:'pizza',city:'nn',img:'pizza',cv:'cv_pizza',t:'Группа «PIZZA». Большой сольный концерт',short:'PIZZA. Большой сольный концерт',cat:'concert',kind:'Концерт',d:new Date(2027,0,16),time:'19:00',place:'МТС Live Холл',venue:'МТС Live Холл',price:1000,desc:'Большой сольный концерт группы «PIZZA» Сергея Приказчикова. Пятнадцать лет искренних песен — от первых хитов до новых треков, в полном составе и с большим светом.'},
 {id:'samoilov',city:'nn',img:'samoilov',cv:'cv_samoilov',t:'Вадим Самойлов / Агата Кристи с симфоническим оркестром',short:'Вадим Самойлов. Агата Кристи с оркестром',cat:'concert',kind:'Концерт с оркестром',d:new Date(2027,2,7),time:'19:00',place:'ДС Нагорный',venue:'Дворец спорта «Нагорный»',price:1500,desc:'Вадим Самойлов, основатель и лидер «Агаты Кристи», исполнит легендарные песни группы вместе с симфоническим оркестром. Знакомые хиты в новом, масштабном звучании.'},
 {id:'kino',city:'nn',img:'kino',cv:'cv_kino',t:'«Симфоническое кино». Юрий Каспарян',short:'Симфоническое кино. Юрий Каспарян',cat:'concert',kind:'Концерт с оркестром',d:new Date(2027,2,28),time:'19:00',place:'МТС Live Холл',venue:'МТС Live Холл',price:2000,desc:KINO},
 {id:'kino-kzn',city:'kzn',img:'kino',cv:'cv_kino',t:'«Симфоническое кино». Юрий Каспарян',short:'Симфоническое кино. Юрий Каспарян',cat:'concert',kind:'Концерт с оркестром',d:new Date(2027,2,26),time:'',place:'Kazan Expo',venue:'МВЦ «Казань Экспо»',price:2100,desc:KINO},
];
const NEWS=[
 {id:'r3',img:'r_symkino-nn',gal:['r_symkino-nn','r_kino-nn','r_kino-kzn'],tag:'Анонс',when:'23 октября',ev:'kino',t:'Мини-тур группы «КИНО» завершён — впереди «Симфоническое КИНО»',txt:'Мини-тур группы «КИНО» завершён — делимся вашими эмоциями!\n\nА мы напоминаем: впереди ещё одна особенная встреча с любимой музыкой — «Симфоническое КИНО»! Знакомые композиции в симфоническом звучании, мощь оркестра и совершенно новые музыкальные впечатления.\n\nКазань | 26 марта 2027\nНижний Новгород | 28 марта 2027'},
 {id:'r1',img:'r_kino-nn',gal:['r_kino-nn','r_kino-kzn','r_symkino-nn'],tag:'Фотоотчёт',when:'24 октября',rep:'kino-nn',t:'А вот и фото с концерта «КИНО»!',txt:'Эмоции, любимые песни и та самая атмосфера, которую хочется сохранить в памяти 🖤\n\nЕщё больше фотографий — в разделе «Фотоотчёты».'},
 {id:'r2',img:'r_master',tag:'Фотоотчёт',when:'23 октября',rep:'master',t:'Вспоминаем «Мастера и Маргариту»',txt:'В сентябре мы организовали спектакль по одному из самых загадочных и захватывающих произведений русской литературы — «Мастер и Маргарита». Давайте вместе вернёмся к этим ярким моментам и вспомним, как это было!'},
 {id:'n3',img:'r_gurude-taiga',tag:'Фотоотчёт',when:'21 октября',rep:'gurude-taiga',t:'GURUDE «Таёжные сны» — как это было',txt:'Атмосферный вечер в Нижнем Новгороде. Полный фотоотчёт — в разделе «Фотоотчёты».'},
 {id:'n4',img:'r_symkino-kzn',tag:'Фотоотчёт',when:'11 октября',rep:'symkino-kzn',t:'«Симфоническое КИНО» в Казани — фото',txt:'Спасибо, Казань! Смотрите, как прошёл концерт.'},
 {id:'n5',img:'r_phantom',tag:'Фотоотчёт',when:'19 мая',rep:'phantom',t:'Мюзикл «Фантом. Призрак Оперы» — фото',txt:'Смотрите, как прошёл мюзикл в Нижнем Новгороде.'},
 {id:'n6',img:'r_zima',tag:'Фотоотчёт',when:'2 декабря',rep:'zima',t:'Гала-шоу Евгении Зимы — фотоотчёт',txt:'Спасибо, Нижний!'},
];

/* =================== helpers =================== */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const img=(k,cls='ph',alt='')=>`<img class="${cls}" src="${IMG[k]||k}" alt="${alt}" loading="lazy">`;
function hydrate(root=document){root.querySelectorAll('img[data-img]').forEach(i=>{if(!i.getAttribute('src'))i.src=IMG[i.dataset.img]})}
const fmt=n=>n.toLocaleString('ru-RU').replace(/ /g,' ')+' ₽';
const dateStr=e=>`${e.d.getDate()} ${MON[e.d.getMonth()]}, ${WD[e.d.getDay()]}${e.time?' · '+e.time:''}`;
const dm=d=>`${d.getDate()} ${MON[d.getMonth()].slice(0,3)}`;
const days=e=>Math.round((e.d-TODAY)/864e5);
const plural=(n,a,b,c)=>n%10===1&&n%100!==11?a:[2,3,4].includes(n%10)&&![12,13,14].includes(n%100)?b:c;
const ico={pin:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',cal:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',heart:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>',x:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M18 6 6 18M6 6l12 12"/></svg>',arrow:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',chev:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>',left:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m15 18-6-6 6-6"/></svg>',right:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m9 18 6-6-6-6"/></svg>',check:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>'};
const toastEl=$('#toast');let tt;
function say(t){toastEl.textContent=t;toastEl.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>toastEl.classList.remove('show'),2800)}
const FAV=new Set();
let CITY='nn';try{const c=localStorage.getItem('asn_city');if(c&&CITIES[c])CITY=c}catch(e){}
const cityEV=()=>EV.filter(e=>e.city===CITY).sort((a,b)=>a.d-b.d);
const crumbs=(...a)=>`<div class="crumbs"><a href="#/">Главная</a>${a.map(([t,h])=>` <span>/</span> ${h?`<a href="${h}">${t}</a>`:`<span style="color:var(--ink)">${t}</span>`}`).join('')}</div>`;

/* =================== dropdown infra =================== */
function closeDD(){$$('.dd.open').forEach(d=>d.classList.remove('open'))}
document.addEventListener('click',e=>{const b=e.target.closest('.dd [data-dd]');if(b){e.stopPropagation();const dd=b.parentElement,was=dd.classList.contains('open');closeDD();if(!was){dd.classList.add('open');dd.dispatchEvent(new Event('ddopen'))}return}if(!e.target.closest('.menu'))closeDD()});

/* city */
function renderCity(){
 $('#cityName').textContent=CITIES[CITY].name;
 $('#cityMenu').innerHTML=Object.entries(CITIES).map(([k,c])=>`<div class="opt${k===CITY?' on':''}" data-c="${k}"><span class="bx rd"></span>${c.name}<small>${EV.filter(e=>e.city===k).length} ${plural(EV.filter(e=>e.city===k).length,'событие','события','событий')}</small></div>`).join('');
 $$('#cityMenu .opt').forEach(o=>o.onclick=()=>{CITY=o.dataset.c;try{localStorage.setItem('asn_city',CITY)}catch(e){}closeDD();renderCity();renderNavMenus();resetFilters(false);route();say('Город: '+CITIES[CITY].name)});
}

/* =================== cards =================== */
function cardHTML(e){const dd=days(e);
 return `<article class="card" data-open="${e.id}"><div class="img">${img(e.img,'ph',e.short)}${dd<=14&&dd>=0?`<span class="pill l red">${dd<=7?'Через '+dd+' '+plural(dd,'день','дня','дней'):'Скоро'}</span>`:e.cat==='kids'?'<span class="pill l">Детям</span>':''}<button class="fav${FAV.has(e.id)?' on':''}" data-fav="${e.id}" aria-label="В избранное">${ico.heart}</button></div>
 <div class="body"><div class="date">${dateStr(e)}</div><h3>${e.t}</h3><div class="place">${e.place}</div>
 <div class="bot"><span class="from"><small>от </small>${fmt(e.price)}</span><button class="btn btn-red btn-sm buy">Купить</button></div></div></article>`}
function moreCard(n){const ev=cityEV();return `<a class="more" href="#/afisha"><div class="mi">${ev.slice(0,3).map(e=>`<span>${img(e.img)}</span>`).join('')}</div><div><b>Вся афиша ${CITIES[CITY].gen}</b><small>${n} ${plural(n,'событие','события','событий')} — с фильтрами по датам, площадкам и цене</small><span class="go">Смотреть всё ${ico.arrow}</span></div></a>`}
document.addEventListener('click',e=>{
 const f=e.target.closest('[data-fav]');if(f){e.stopPropagation();e.preventDefault();const id=f.dataset.fav;FAV.has(id)?FAV.delete(id):FAV.add(id);$$(`[data-fav="${id}"]`).forEach(x=>x.classList.toggle('on',FAV.has(id)));say(FAV.has(id)?'Добавлено в избранное — напомним о старте продаж':'Убрано из избранного');return}
 if(e.target.closest('.buy')){say('Открывается виджет Ticketscloud — выбор мест и оплата прямо на сайте');return}
 const t=e.target.closest('[data-toast]');if(t){say(t.dataset.toast);return}
 const o=e.target.closest('[data-open]');if(o&&!e.target.closest('a[href]:not([data-open])')){e.preventDefault();closeNews();location.hash='#/event/'+o.dataset.open;return}
 const r=e.target.closest('[data-rep]');if(r){e.preventDefault();closeNews();location.hash='#/report/'+r.dataset.rep;return}
 const n=e.target.closest('[data-news]');if(n){e.preventDefault();openNews(n.dataset.news)}
});

/* =================== filters =================== */
const CATS=[['all','Все события'],['concert','Концерты'],['show','Спектакли и мюзиклы'],['kids','Детям']];
const QUICK=[['any','Любая дата'],['today','Сегодня'],['tomorrow','Завтра'],['weekend','Выходные'],['month','В этом месяце']];
const PRICES=[[0,'Любая'],[1000,'до 1 000 ₽'],[1500,'до 1 500 ₽'],[2000,'до 2 000 ₽']];
const SORTS=[['date','Сначала ближайшие'],['price','Сначала дешевле']];
const S={cat:'all',q:'any',from:null,to:null,venues:new Set(),price:0,sort:'date',text:''};
function resetFilters(rerender=true){Object.assign(S,{cat:'all',q:'any',from:null,to:null,price:0,text:''});S.venues.clear();$('#q').value='';if(rerender)renderAfisha()}
const day0=d=>new Date(d.getFullYear(),d.getMonth(),d.getDate());
function inRange(e){const d=day0(e.d);
 if(S.q==='today')return +d===+TODAY;
 if(S.q==='tomorrow')return +d===+new Date(2026,9,27);
 if(S.q==='weekend')return d>=new Date(2026,9,31)&&d<=new Date(2026,10,1);
 if(S.q==='month')return d.getMonth()===TODAY.getMonth()&&d.getFullYear()===TODAY.getFullYear();
 if(S.q==='range'&&S.from)return d>=S.from&&d<=(S.to||S.from);
 return true}
const base=e=>inRange(e)&&(!S.venues.size||S.venues.has(e.place))&&(!S.price||e.price<=S.price)&&(!S.text||(e.t+' '+e.place).toLowerCase().includes(S.text));
const filtered=()=>cityEV().filter(e=>base(e)&&(S.cat==='all'||e.cat===S.cat)).sort((a,b)=>S.sort==='price'?a.price-b.price:a.d-b.d);
let AFULL=false;
function filtersHTML(full){
 if(!full)return `<div class="tabs" id="tabs"></div>`;
 return `<div class="tabs" id="tabs"></div><div class="fbar"><div class="qd" id="quick"></div>
 <div class="dd" id="ddDate"><button class="chip" data-dd>${ico.cal}<span>Выбрать даты</span></button><div class="menu cal" id="cal"></div></div>
 <span class="fsep"></span>
 <div class="dd" id="ddVenue"><button class="chip" data-dd><span>Площадка</span>${ico.chev}</button><div class="menu" id="venueMenu"></div></div>
 <div class="dd" id="ddPrice"><button class="chip" data-dd><span>Цена</span>${ico.chev}</button><div class="menu" id="priceMenu"></div></div>
 <div class="fsp"></div>
 <div class="dd" id="ddSort"><button class="chip" data-dd style="border-color:transparent;padding:0 8px"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 4v16M3 16l4 4 4-4M17 20V4M13 8l4-4 4 4"/></svg><span id="sortLbl"></span></button><div class="menu right" id="sortMenu"></div></div>
 </div><div class="active" id="active"></div><div class="count" id="count"></div>`}
function optList(el,items,isOn,onClick,radio){
 el.innerHTML=items.map(([k,l,c],i)=>`<div class="opt${isOn(k)?' on':''}" data-i="${i}"><span class="bx${radio?' rd':''}"></span>${l}${c!=null?`<small>${c}</small>`:''}</div>`).join('');
 el.querySelectorAll('.opt').forEach(o=>o.onclick=e=>{e.stopPropagation();onClick(items[+o.dataset.i][0])})}
function rangeLbl(){return S.to&&+S.to!==+S.from?`${dm(S.from)} – ${dm(S.to)}`:dm(S.from)}
function renderAfisha(){
 if(!$('#tabs'))return;
 const ce=cityEV();
 $('#tabs').innerHTML=CATS.map(([k,l])=>`<button class="tab${S.cat===k?' on':''}" data-k="${k}">${l}<sup>${ce.filter(e=>base(e)&&(k==='all'||e.cat===k)).length}</sup></button>`).join('');
 $$('#tabs .tab').forEach(b=>b.onclick=()=>{S.cat=b.dataset.k;renderAfisha()});
 if(AFULL){
  $('#quick').innerHTML=QUICK.map(([k,l])=>`<button class="chip${S.q===k?' on':''}" data-k="${k}">${l}</button>`).join('');
  $$('#quick .chip').forEach(b=>b.onclick=()=>{S.q=b.dataset.k;S.from=S.to=null;renderAfisha()});
  const venues=[...new Set(ce.map(e=>e.place))];
  optList($('#venueMenu'),venues.map(v=>[v,v,ce.filter(e=>e.place===v).length]),k=>S.venues.has(k),k=>{S.venues.has(k)?S.venues.delete(k):S.venues.add(k);renderAfisha()});
  optList($('#priceMenu'),PRICES,k=>S.price===k,k=>{S.price=k;closeDD();renderAfisha()},true);
  optList($('#sortMenu'),SORTS,k=>S.sort===k,k=>{S.sort=k;closeDD();renderAfisha()},true);
  $('#sortLbl').textContent=SORTS.find(s=>s[0]===S.sort)[1];
  const vb=$('#ddVenue [data-dd]');vb.firstElementChild.textContent=S.venues.size?`Площадка · ${S.venues.size}`:'Площадка';vb.classList.toggle('on',!!S.venues.size);
  const pb=$('#ddPrice [data-dd]');pb.firstElementChild.textContent=S.price?PRICES.find(p=>p[0]===S.price)[1]:'Цена';pb.classList.toggle('on',!!S.price);
  const db=$('#ddDate [data-dd]');db.querySelector('span').textContent=S.q==='range'&&S.from?rangeLbl():'Выбрать даты';db.classList.toggle('on',S.q==='range'&&!!S.from);
  const a=[];
  if(S.cat!=='all')a.push([CATS.find(c=>c[0]===S.cat)[1],()=>S.cat='all']);
  if(S.q!=='any')a.push([S.q==='range'?rangeLbl():QUICK.find(q=>q[0]===S.q)[1],()=>{S.q='any';S.from=S.to=null}]);
  S.venues.forEach(v=>a.push([v,()=>S.venues.delete(v)]));
  if(S.price)a.push([PRICES.find(p=>p[0]===S.price)[1],()=>S.price=0]);
  if(S.text)a.push([`«${S.text}»`,()=>{S.text='';$('#q').value=''}]);
  $('#active').innerHTML=a.map(([l],i)=>`<span class="act">${l}<button data-i="${i}" aria-label="Убрать">${ico.x}</button></span>`).join('')+(a.length?'<button class="reset" id="resetAll">Сбросить всё</button>':'');
  $('#active').style.marginTop=a.length?'14px':'0';
  $$('#active .act button').forEach(b=>b.onclick=()=>{a[+b.dataset.i][1]();renderAfisha()});
  if(a.length)$('#resetAll').onclick=()=>resetFilters();
 }
 const list=filtered(),n=list.length;
 if(AFULL)$('#count').innerHTML=`Найдено <b>${n} ${plural(n,'событие','события','событий')}</b>`;
 const shown=AFULL?list:list.slice(0,7);
 let html=shown.map(cardHTML).join('');
 if(!AFULL&&n)html+=moreCard(cityEV().length);
 if(!n){const next=cityEV().filter(e=>S.cat==='all'||e.cat===S.cat)[0];
  html=`<div class="empty" style="display:block"><h3>По этим условиям событий нет</h3><p>${next?`Ближайшее: ${next.short} — ${dateStr(next)}`:'Попробуйте изменить фильтры'}</p><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn btn-dark btn-sm" id="emptyReset">Сбросить фильтры</button><a href="#/subscribe" class="btn btn-line btn-sm">Сообщить о новых событиях</a></div></div>`}
 $('#grid').innerHTML=html;
 const er=$('#emptyReset');if(er)er.onclick=()=>resetFilters();
}
/* calendar */
let calM=new Date(2026,9,1),calSel={a:null,b:null};
function monthHTML(m){
 const evDays=new Set(cityEV().map(e=>+day0(e.d)));
 const first=new Date(m.getFullYear(),m.getMonth(),1),n=new Date(m.getFullYear(),m.getMonth()+1,0).getDate(),off=(first.getDay()+6)%7;
 let h=`<div class="cal-m"><h4>${first.toLocaleString('ru-RU',{month:'long',year:'numeric'})}</h4><div class="cal-g">`+['пн','вт','ср','чт','пт','сб','вс'].map(w=>`<span class="wd">${w}</span>`).join('');
 for(let i=0;i<off;i++)h+='<span></span>';
 for(let d=1;d<=n;d++){const dt=new Date(m.getFullYear(),m.getMonth(),d),t=+dt,a=calSel.a&&+calSel.a,b=calSel.b&&+calSel.b;
  const cls=[evDays.has(t)?'ev':'',t===+TODAY?'today':'',(t===a||t===b)?'sel':'',(a&&b&&t>a&&t<b)?'in':''].join(' ');
  h+=`<button class="${cls}" data-t="${t}" ${dt<TODAY?'disabled':''}>${d}</button>`}
 return h+'</div></div>'}
function renderCal(){
 const m2=new Date(calM.getFullYear(),calM.getMonth()+1,1);
 $('#cal').innerHTML=`<div class="cal-h"><button class="arr" style="background:var(--surface);color:var(--ink)" id="cP">${ico.left}</button><span style="font-size:13px;color:var(--muted)">Точкой отмечены дни с событиями</span><button class="arr" style="background:var(--surface);color:var(--ink)" id="cN">${ico.right}</button></div><div class="cal-months">${monthHTML(calM)}${monthHTML(m2)}</div><div class="menu-f"><button class="btn btn-line btn-sm" id="cClr">Сбросить</button><button class="btn btn-dark btn-sm" id="cOk">Показать</button></div>`;
 $('#cP').onclick=e=>{e.stopPropagation();if(calM>new Date(2026,9,1)){calM=new Date(calM.getFullYear(),calM.getMonth()-1,1);renderCal()}};
 $('#cN').onclick=e=>{e.stopPropagation();calM=new Date(calM.getFullYear(),calM.getMonth()+1,1);renderCal()};
 $$('#cal .cal-g button').forEach(b=>b.onclick=e=>{e.stopPropagation();const d=new Date(+b.dataset.t);if(!calSel.a||calSel.b)calSel={a:d,b:null};else if(d<calSel.a)calSel={a:d,b:calSel.a};else calSel.b=d;renderCal()});
 $('#cClr').onclick=e=>{e.stopPropagation();calSel={a:null,b:null};S.q='any';S.from=S.to=null;closeDD();renderAfisha()};
 $('#cOk').onclick=e=>{e.stopPropagation();if(calSel.a){S.q='range';S.from=calSel.a;S.to=calSel.b||calSel.a}closeDD();renderAfisha()};
}
let qT;$('#q').addEventListener('input',e=>{clearTimeout(qT);qT=setTimeout(()=>{S.text=e.target.value.trim().toLowerCase();if(S.text&&!location.hash.startsWith('#/afisha'))location.hash='#/afisha';else renderAfisha()},250)});

/* =================== news =================== */
const newsCard=n=>`<article class="news" data-news="${n.id}"><div class="img">${img(n.img,'ph',n.t)}<span class="pill l${n.tag==='Анонс'?' red':''}">${n.tag}</span></div><div class="body"><div class="when"><span class="vk">VK</span>${n.when}</div><h3>${n.t}</h3></div></article>`;
function openNews(id){
 const n=NEWS.find(x=>x.id===id);if(!n)return;
 const g=n.gal||[n.img];const ev=n.ev&&EV.find(e=>e.id===n.ev);
 $('#nvBody').innerHTML=`<div class="nvg${g.length<3?' one':''}">${(g.length<3?[g[0]]:g).map(k=>img(k)).join('')}</div>
 <div class="nvb"><div class="when"><span class="vk">VK</span>${n.when} · ${n.tag}</div><h3>${n.t}</h3><p>${n.txt}</p>
 <div class="acts">${ev?`<button class="btn btn-red buy">Купить билет</button><button class="btn btn-line" data-open="${ev.id}">О событии</button>`:''}${n.rep?`<button class="btn btn-dark" data-rep="${n.rep}">Смотреть фотоотчёт</button>`:''}<a class="btn btn-line" href="https://vk.com/all_stars_nn" target="_blank" rel="noopener">Обсудить в VK</a></div></div>`;
 $('#nv').classList.add('show');document.body.style.overflow='hidden'}
function closeNews(){$('#nv').classList.remove('show');document.body.style.overflow=''}
$('#nvX').onclick=closeNews;$('#nv').addEventListener('click',e=>{if(e.target.id==='nv')closeNews()});

/* =================== lightbox =================== */
let LB=[],li=0;
function lbShow(){$('#lbImg').src=LB[li];$('#lbC').textContent=`${li+1} / ${LB.length}`}
function openLB(list,i){LB=list;li=i;lbShow();$('#lb').classList.add('show');document.body.style.overflow='hidden'}
function closeLB(){$('#lb').classList.remove('show');document.body.style.overflow=''}
$('#lbX').onclick=closeLB;$('#lbL').onclick=e=>{e.stopPropagation();li=(li-1+LB.length)%LB.length;lbShow()};$('#lbR').onclick=e=>{e.stopPropagation();li=(li+1)%LB.length;lbShow()};
$('#lb').addEventListener('click',e=>{if(e.target.id==='lb')closeLB()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('#docv').classList.contains('show')){closeDoc();return}closeLB();closeNews();closeDD();closeNav();closeDrawer();if($('#pp').classList.contains('show'))closePP()}if($('#lb').classList.contains('show')){if(e.key==='ArrowRight')$('#lbR').click();if(e.key==='ArrowLeft')$('#lbL').click()}});

/* =================== form helper =================== */
function consent(mail){return `<div class="consent">${mail?`<label class="cb"><input type="checkbox" required data-req><span>Согласен(на) получать рассылку с анонсами</span></label>`:''}<label class="cb"><input type="checkbox" required data-req><span>Согласен(на) на <a href="#/consent" data-doc="consent">обработку персональных данных</a> и принимаю <a href="#/privacy" data-doc="privacy">политику конфиденциальности</a></span></label></div>`}
function bindForm(id,msg){const f=$('#'+id);if(!f)return;const btn=f.querySelector('[type=submit]'),req=[...f.querySelectorAll('[data-req]')];
 const upd=()=>{const ok=req.every(c=>c.checked);btn.classList.toggle('off',!ok);btn.setAttribute('aria-disabled',!ok)};req.forEach(c=>c.addEventListener('change',upd));upd();
 f.onsubmit=e=>{e.preventDefault();if(!req.every(c=>c.checked)){say('Отметьте согласие на обработку персональных данных');return}f.style.display='none';const d=f.nextElementSibling;d.textContent=msg;d.style.display='block'}}
const PH=t=>`<span class="ph-note"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>${t}</span>`;
const subsBlock=()=>`<div class="subs"><div><h2>Узнавайте об&nbsp;анонсах первыми</h2><p>Новые концерты и&nbsp;старт продаж — раньше, чем в&nbsp;рекламе. Одно письмо в&nbsp;неделю.</p></div><div><form class="sform2" id="sform"><div class="sform"><input type="email" placeholder="Ваш e-mail" required><button class="btn btn-red" type="submit">Подписаться</button></div>${consent(true)}</form><div class="sdone"></div><div class="salt">или следите там, где удобно: <a href="https://vk.com/all_stars_nn" target="_blank" rel="noopener"><span class="vk">VK</span>ВКонтакте</a><a href="#/subscribe"><svg width="16" height="16" viewBox="0 0 24 24" fill="#229ED9"><path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.9 13.4l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6L20.6 2.9c.9-.3 1.7.2 1.3 1.4z"/></svg>Telegram</a></div></div></div>`;

/* =================== pages =================== */
const app=$('#app');let sTimer;
function pageHome(){
 AFULL=false;const ce=cityEV(),seen=new Set(),SL=ce.filter(e=>{const k=e.series||e.id;if(seen.has(k))return false;seen.add(k);return true}).slice(0,5);
 app.innerHTML=`<div class="view">
 <section class="hero"><div class="wrap"><div class="slider" id="slider"></div></div></section>
 <section class="sec" id="afisha"><div class="wrap"><div class="sec-h"><div><h2>Афиша ${CITIES[CITY].gen}</h2></div><a href="#/afisha" class="lnk">Вся афиша и фильтры →</a></div>${filtersHTML(false)}<div class="grid" id="grid"></div></div></section>
 <section class="sec" style="padding-top:16px"><div class="wrap"><div class="sec-h"><div><h2>Новости и анонсы</h2><div class="sub">Свежее из нашей группы ВКонтакте</div></div><div style="display:flex;gap:8px;align-items:center"><a href="#/news" class="lnk" style="margin-right:6px">Все новости →</a><div class="railnav"><button id="rPrev" aria-label="Назад">${ico.left}</button><button id="rNext" aria-label="Вперёд">${ico.right}</button></div></div></div><div class="rail" id="rail">${NEWS.map(newsCard).join('')}</div></div></section>
 <section class="sec" style="padding-top:16px"><div class="wrap">${subsBlock()}</div></section>
 <section class="sec" style="padding-top:16px"><div class="wrap"><div class="sec-h"><div><h2>Фотоотчёты</h2><div class="sub">С&nbsp;2009 года — сотни концертов в&nbsp;24&nbsp;городах</div></div><a href="#/reports" class="lnk">Все фотоотчёты →</a></div>
  <div class="mosaic">${['kino-nn','symkino-kzn','master','phantom','gurude-taiga'].map(id=>{const r=rep(id);return `<a href="#/report/${id}">${img('r_'+id,'ph',r.t)}<div class="cap"><b>${r.t}</b><small>${r.city} · ${r.d}</small></div></a>`}).join('')}</div>
  <div class="trust"><div class="tcell"><b>с 2009</b><span>организуем концерты</span></div><div class="tcell"><b>24</b><span>города России</span></div><div class="tcell"><b>2 афиши</b><span>Нижний Новгород и Казань</span></div><div class="tcell"><b>3 формата</b><span>концерты, спектакли и шоу для детей</span></div></div>
  <div class="reviews"><div class="rv"><p>Привозят топовых звёзд, постоянно хожу на&nbsp;их концерты. Билеты удобно покупать прямо на&nbsp;сайте.</p><div class="who"><span class="ava">ВС</span>Влада С.</div></div><div class="rv"><p>Всегда без задержек и&nbsp;форс-мажоров. На&nbsp;Noize MC зал был забит под завязку — организация на&nbsp;уровне.</p><div class="who"><span class="ava">НЛ</span>Никита Л.</div></div><div class="rv"><p>Открыты к&nbsp;зрителям, прислушиваются к&nbsp;пожеланиям и&nbsp;устраивают классные творческие конкурсы.</p><div class="who"><span class="ava">ЮШ</span>Юлия Ш.</div></div></div>
 </div></section>
 <section class="sec" style="padding-top:16px"><div class="wrap"><div class="b2b">${img('r_symkino-nn')}<div class="in"><div><div class="k">Артистам и организаторам</div><h2>Проведём ваш концерт или&nbsp;тур под&nbsp;ключ</h2><p>Реклама, площадка, райдер, проживание и&nbsp;безопасность — всё в&nbsp;городе берём на&nbsp;себя.</p><div class="who"><a href="#/artists" class="btn btn-red">Подробнее для артистов</a><div><small>Виктор Загвоздин, директор</small>+7 920 294-44-88</div></div></div>
  <div class="perks">${[['24 города России','От камерных залов до дворцов спорта'],['Наружная реклама дешевле рынка','Партнёры — владельцы рекламных конструкций'],['Райдер, трансфер, проживание','Технические и бытовые условия без компромиссов'],['Охрана и работа со зрителем','Безопасность на площадке и поддержка покупателей']].map(([b,s])=>`<div class="perk">${ico.check}<div><b>${b}</b><span>${s}</span></div></div>`).join('')}</div></div></div></div></section>
 </div>`;
 $('.b2b>img').classList.add('ph');
 // hero
 if(!SL.length){$('#slider').parentElement.parentElement.remove()}else{
 $('#slider').innerHTML=SL.map((e,i)=>{const dd=days(e);return `<div class="slide${i?'':' on'}"><div class="bg" style="background-image:url('${IMG[e.img]}')"></div>
 <div><div class="meta-top">${dd<=7?'Уже через '+dd+' '+plural(dd,'день','дня','дней'):e.kind}</div><h1>${e.short}</h1>
 <div class="meta"><span>${ico.cal}${dateStr(e)}</span><span>${ico.pin}${e.place}</span></div>
 <div class="acts"><span class="price">от ${fmt(e.price)}</span><button class="btn btn-red buy">Купить билет</button><button class="btn btn-glass" data-open="${e.id}">Подробнее</button></div></div>
 <div class="poster" data-open="${e.id}" style="cursor:pointer">${img(e.img,'ph',e.short)}</div></div>`}).join('')+
 (SL.length>1?`<div class="sl-ctrl"><div class="dots">${SL.map((_,i)=>`<button data-i="${i}" class="${i?'':'on'}" aria-label="Слайд ${i+1}"></button>`).join('')}</div><button class="arr" id="sPrev" aria-label="Назад">${ico.left}</button><button class="arr" id="sNext" aria-label="Вперёд">${ico.right}</button></div>`:'');
 let si=0;const DUR=5000,sl=$('#slider');let left=DUR,startT=0,paused=false;
 const dots=()=>$$('.dots button');
 const tick=()=>{clearTimeout(sTimer);if(paused||SL.length<2)return;startT=Date.now();sTimer=setTimeout(()=>{if(!document.body.contains(sl))return;go(si+1)},left)};
 const go=i=>{si=(i+SL.length)%SL.length;$$('.slide').forEach((s,k)=>s.classList.toggle('on',k===si));dots().forEach((s,k)=>{s.classList.remove('on');s.style.removeProperty('--dur')});const d=dots()[si];if(d){void d.offsetWidth;d.style.setProperty('--dur',DUR+'ms');d.classList.add('on')}left=DUR;tick()};
 const pause=()=>{if(paused)return;paused=true;clearTimeout(sTimer);left=Math.max(300,left-(Date.now()-startT));sl.classList.add('paused')};
 const resume=()=>{if(!paused)return;paused=false;sl.classList.remove('paused');tick()};
 clearTimeout(sTimer);
 if(SL.length>1){
  dots().forEach(b=>b.onclick=()=>go(+b.dataset.i));$('#sPrev').onclick=()=>go(si-1);$('#sNext').onclick=()=>go(si+1);
  if(matchMedia('(hover:hover)').matches){sl.addEventListener('mouseenter',pause);sl.addEventListener('mouseleave',resume)}
  document.addEventListener('visibilitychange',()=>document.hidden?pause():resume());
  let x0=null,y0=null;sl.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;y0=e.touches[0].clientY},{passive:true});
  sl.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(si+(dx<0?1:-1));x0=null},{passive:true});
  go(0);
 }}
 renderAfisha();
 const rail=$('#rail');$('#rPrev').onclick=()=>rail.scrollBy({left:-rail.clientWidth*.8,behavior:'smooth'});$('#rNext').onclick=()=>rail.scrollBy({left:rail.clientWidth*.8,behavior:'smooth'});
 bindForm('sform','Готово — первое письмо придёт с ближайшими анонсами.');
}
function pageAfisha(cat){
 AFULL=true;if(cat&&CATS.some(c=>c[0]===cat))S.cat=cat;
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Афиша'])}<h1 class="ptitle">Афиша ${CITIES[CITY].gen}</h1><p class="plead">Концерты, спектакли и шоу для детей. Город меняется в шапке сайта.</p>
 <div style="margin-top:24px">${filtersHTML(true)}</div><div class="grid" id="grid"></div></div>
 <section class="sec"><div class="wrap">${subsBlock()}</div></section></div>`;
 $('#ddDate').addEventListener('ddopen',()=>{calSel={a:S.from,b:S.to};renderCal()});
 renderAfisha();bindForm('sform','Готово — первое письмо придёт с ближайшими анонсами.');
}
function pageEvent(id){
 const e=EV.find(x=>x.id===id);if(!e)return pageHome();
 if(e.city!==CITY){CITY=e.city;renderCity()}
 const sib=e.series?EV.filter(x=>x.series===e.series):[e];
 const sim=cityEV().filter(x=>x.id!==id&&(!e.series||x.series!==e.series)).sort((a,b)=>(b.cat===e.cat)-(a.cat===e.cat)||a.d-b.d).slice(0,4);
 const I2={ticket:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"/></svg>',ret:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>',shield:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',info:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v4h1"/></svg>',map:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/></svg>'};
 app.innerHTML=`<div class="view evpage"><div class="wrap">${crumbs(['Афиша','#/afisha'],[e.short])}
 <div class="cover">${img(e.cv,'ph',e.short)}<div class="ct"><div class="kd">${e.kind}</div><h1>${e.t}</h1><div class="meta"><span>${ico.cal}${dateStr(e)}</span><span>${ico.pin}${e.venue}</span></div></div></div>
 <div class="evgrid"><div>
  <h2>О событии</h2><p class="evdesc">${e.desc}</p>
  ${sib.length>1?`<div class="blk"><h2>Даты и площадки</h2><div class="dates">${sib.map(x=>`<button class="dcard${x.id===id?' on':''}" data-open="${x.id}"><b>${dateStr(x)}</b><span>${x.venue} · от ${fmt(x.price)}</span></button>`).join('')}</div></div>`:''}
  <div class="blk"><h2>Что важно знать</h2><div class="know">
   <div>${I2.ticket}<span><b>Электронный билет</b>Приходит на почту сразу после оплаты. Можно показать с телефона</span></div>
   <div>${I2.ret}<span><b>Возврат</b>Подробно — на странице <a href="#/refund" style="text-decoration:underline">«Как вернуть билет»</a></span></div>
   <div>${I2.shield}<span><b>Официальный продавец</b>Билеты от организатора через Ticketscloud — без наценок перекупщиков</span></div>
   <div>${I2.info}<span><b>Вопросы</b>Ответы на частые вопросы — в разделе <a href="#/faq" style="text-decoration:underline">FAQ</a></span></div>
  </div></div>
  <div class="blk"><h2>Площадка</h2><div class="venue"><span class="vi2">${I2.map}</span><div><b>${e.venue}</b><span>${CITIES[e.city].name}</span></div><button class="btn btn-line btn-sm" data-toast="Открывается Яндекс Карты с маршрутом до площадки">Как добраться</button></div></div>
 </div>
 <aside><div class="buybox"><div class="pr"><small>от </small>${fmt(e.price)}</div><div class="row">${ico.cal}<span>${dateStr(e).replace(' · ',', ')}</span></div><div class="row">${ico.pin}<span>${e.venue}</span></div>
  <button class="btn btn-red buy">Выбрать места</button><div class="sub2"><button class="btn btn-line" data-fav="${e.id}" id="evFav">${FAV.has(e.id)?'В избранном':'В избранное'}</button><button class="btn btn-line" data-toast="Событие добавлено в календарь">В календарь</button></div><div class="seller">Официальный продавец — Ticketscloud</div></div></aside>
 </div>
 ${sim.length?`<div class="blk" style="margin-top:8px"><div class="sec-h"><h2 style="font-size:22px">Вам может понравиться</h2><a href="#/afisha" class="lnk">Вся афиша →</a></div><div class="grid">${sim.map(cardHTML).join('')}</div></div>`:''}
 </div><div class="mbuy"><div><div style="font-size:12px;color:var(--muted)">${dm(e.d)}${e.time?', '+e.time:''}</div><b>от ${fmt(e.price)}</b></div><button class="btn btn-red buy">Выбрать места</button></div></div>`;
 document.body.classList.add('has-mbuy');
 const fb=$('#evFav');fb.addEventListener('click',()=>setTimeout(()=>fb.textContent=FAV.has(e.id)?'В избранном':'В избранное'));
}
function pageReports(){
 const cities=['Все',...new Set(REPORTS.map(r=>r.city))];let cur='Все';
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Фотоотчёты'])}<h1 class="ptitle">Фотоотчёты</h1><p class="plead">Как проходили наши концерты и спектакли. Найдите себя на фото!</p>
 <div class="qd" id="rc" style="margin-top:24px;margin-bottom:24px"></div><div class="rgrid" id="rg"></div></div><section class="sec"><div class="wrap">${subsBlock()}</div></section></div>`;
 const draw=()=>{$('#rc').innerHTML=cities.map(c=>`<button class="chip${c===cur?' on':''}">${c}<sup style="margin-left:4px;opacity:.6">${c==='Все'?REPORTS.length:REPORTS.filter(r=>r.city===c).length}</sup></button>`).join('');
  $$('#rc .chip').forEach((b,i)=>b.onclick=()=>{cur=cities[i];draw()});
  $('#rg').innerHTML=REPORTS.filter(r=>cur==='Все'||r.city===cur).map(r=>`<article class="rcard" data-rep="${r.id}"><div class="img">${img('r_'+r.id,'ph',r.t)}</div><h3>${r.t}</h3><small>${r.d} · ${r.city} · ${r.g.length} фото</small></article>`).join('')};
 draw();bindForm('sform','Готово — первое письмо придёт с ближайшими анонсами.');
}
function pageReport(id){
 const r=rep(id);if(!r)return pageReports();
 const big=r.g.map(p=>T(p,1600)),i0=REPORTS.indexOf(r);
 const others=[1,2,3].map(k=>REPORTS[(i0+k)%REPORTS.length]);
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Фотоотчёты','#/reports'],[r.t])}<h1 class="ptitle">${r.t}</h1><p class="plead">${r.d} · ${r.city}</p>
 <div class="gal" style="margin-top:24px">${r.g.slice(0,5).map((p,i)=>`<button data-i="${i}" aria-label="Открыть фото ${i+1}">${img(T(p,i?700:1200),'ph',r.t+' — фото '+(i+1))}${i===4&&r.g.length>5?`<span class="plus">+${r.g.length-5}</span>`:''}</button>`).join('')}</div>
 <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin-top:20px"><a class="btn btn-line" href="https://vk.com/all_stars_nn" target="_blank" rel="noopener"><span class="vk">VK</span>Больше фото в группе</a>${PH('Здесь будет полная галерея — все фото с концерта')}</div>
 <div class="blk" style="margin-top:48px"><div class="sec-h"><h2 style="font-size:22px">Другие фотоотчёты</h2><a href="#/reports" class="lnk">Все →</a></div><div class="rgrid">${others.map(o=>`<article class="rcard" data-rep="${o.id}"><div class="img">${img('r_'+o.id,'ph',o.t)}</div><h3>${o.t}</h3><small>${o.d} · ${o.city}</small></article>`).join('')}</div></div>
 </div><section class="sec"><div class="wrap">${subsBlock()}</div></section></div>`;
 $$('.gal button').forEach(b=>b.onclick=()=>openLB(big,+b.dataset.i));
 bindForm('sform','Готово — первое письмо придёт с ближайшими анонсами.');
}
function pageNews(){
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Новости'])}<h1 class="ptitle">Новости и анонсы</h1><p class="plead">Анонсы, розыгрыши и фотоотчёты. Публикуются вместе с нашей группой ВКонтакте.</p>
 <div class="ngrid" style="margin-top:28px">${NEWS.map(newsCard).join('')}</div>
 <div style="margin-top:28px"><a class="btn btn-line" href="https://vk.com/all_stars_nn" target="_blank" rel="noopener"><span class="vk">VK</span>Перейти в группу</a></div></div>
 <section class="sec"><div class="wrap">${subsBlock()}</div></section></div>`;
 bindForm('sform','Готово — первое письмо придёт с ближайшими анонсами.');
}
function pageArtists(){
 const artists=['kino-nn','symkino-nn','pizza','rok40','sector','uutai','perukua','swan','phantom','zima'];
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Артистам и организаторам'])}
 <div class="dark" style="margin-top:16px">${img('r_symkino-kzn')}<div class="in"><div class="k">Артистам и организаторам</div><h1>Организуем концерты и туры по России с&nbsp;2009 года</h1><p>От камерных залов до стадионов и дворцов спорта. Берём на себя всё, что происходит в городе: рекламу, продажи, площадку, райдер и безопасность.</p><div class="acts"><a href="#form" class="btn btn-red" id="toForm">Оставить заявку</a><a href="tel:+79202944488" class="btn btn-glass">+7 920 294-44-88</a></div></div></div>
 <div class="stats4" style="margin-top:12px"><div class="tcell"><b>с 2009</b><span>на рынке</span></div><div class="tcell"><b>24</b><span>города России</span></div><div class="tcell"><b>2</b><span>собственные афиши — Нижний и Казань</span></div><div class="tcell"><b>от 300</b><span>до 10 000+ зрителей ${'<span class="demo">уточнить</span>'}</span></div></div>
 <section class="sec2"><h2>Что мы делаем</h2><div class="cards3" style="margin-top:20px">${[
  ['Концерты и туры','Организуем выступления звёзд отечественной и зарубежной сцены, театров и детских шоу в 24 городах России.'],
  ['Рекламные кампании','Наши партнёры — владельцы рекламных конструкций, поэтому наружная реклама у нас дешевле рынка. Плюс digital и соцсети.'],
  ['Работа со зрителем','Продажи через официального оператора, поддержка покупателей от покупки билета до выхода из зала.'],
  ['VIP-трансфер','Комфортный трансфер для артистов и команды — от вокзала или аэропорта до площадки и обратно.'],
  ['Райдер без компромиссов','Технический и бытовой райдер выполняем полностью — от настройки звука до любимого сорта кофе.'],
  ['Проживание и охрана','Хорошие гостиницы для артиста и команды, безопасность на площадке и за её пределами.']
 ].map(([b,p])=>`<div class="box"><span class="ic">${ico.check}</span><h3>${b}</h3><p>${p}</p></div>`).join('')}</div></section>
 <section class="sec2" style="padding-top:8px"><h2 style="margin-bottom:20px">Как мы работаем</h2><div class="steps4">
  <div><b>Заявка</b><p>Вы присылаете артиста, города и даты — мы отвечаем в течение дня.</p></div>
  <div><b>Расчёт и площадка</b><p>Подбираем зал, считаем бюджет и согласовываем условия.</p></div>
  <div><b>Реклама и продажи</b><p>Запускаем рекламу, открываем продажи, держим вас в курсе цифр.</p></div>
  <div><b>Концерт</b><p>Встречаем, размещаем, выполняем райдер, проводим шоу.</p></div>
 </div></section>
 <section class="sec2" style="padding-top:8px"><div class="sec-h"><h2>С кем мы работали</h2><a href="#/reports" class="lnk">Все фотоотчёты →</a></div><div class="rgrid">${artists.slice(0,6).map(id=>{const r=rep(id);return `<article class="rcard" data-rep="${id}"><div class="img">${img('r_'+id,'ph',r.t)}</div><h3>${r.t}</h3><small>${r.city} · ${r.d}</small></article>`}).join('')}</div></section>
 <section class="sec2" style="padding-top:8px"><h2 style="margin-bottom:16px">Площадки</h2><div class="tags2">${['МТС Live Холл','Дворец спорта «Нагорный»','Нижегородская филармония','ДК ГАЗ','ДК «Красное Сормово»','Kazan Expo'].map(v=>`<span>${v}</span>`).join('')}</div><div style="margin-top:14px">${PH('Здесь будет полный список площадок и городов')}</div></section>
 <section class="sec2" id="form"><div class="formwrap"><div><h2>Обсудим ваш концерт</h2><p class="plead" style="margin-top:10px">Оставьте контакты — директор свяжется с вами в течение рабочего дня.</p><div style="margin-top:20px;font-size:15px"><b>Виктор Загвоздин</b><br><span style="color:var(--muted)">генеральный директор</span><br><a href="tel:+79202944488" style="font-weight:600">+7 920 294-44-88</a><br><a href="mailto:triballl@mail.ru">triballl@mail.ru</a></div></div>
 <div><form class="form" id="aform"><div><label>Имя</label><input required placeholder="Как к вам обращаться"></div><div><label>Телефон</label><input required type="tel" placeholder="+7"></div><div class="full"><label>Артист или коллектив</label><input placeholder="Название, ссылка на соцсети"></div><div><label>Города</label><input placeholder="Например, Нижний Новгород, Казань"></div><div><label>Желаемые даты</label><input placeholder="Месяц или период"></div><div class="full"><label>Комментарий</label><textarea placeholder="Формат, ожидаемая вместимость, пожелания"></textarea></div><div class="full">${consent()}<button class="btn btn-red" type="submit" style="width:100%">Отправить заявку</button></div></form><div class="done"></div></div></div></section>
 </div></div>`;
 $$('.dark>img').forEach(i=>i.classList.add('ph'));
 $('#toForm').onclick=e=>{e.preventDefault();$('#form').scrollIntoView({behavior:'smooth'})};
 bindForm('aform','Заявка отправлена. Виктор свяжется с вами в течение рабочего дня.');
}
function pageAbout(){
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['О компании'])}
 <div class="dark" style="margin-top:16px">${img('r_kino-nn')}<div class="in"><div class="k">О компании</div><h1>All Stars NN делает жизнь городов ярче с&nbsp;2009 года</h1><p>Концертное агентство из Нижнего Новгорода. Создаём большие события на стадионах и во дворцах спорта и уютные вечера для узкого круга зрителей.</p></div></div>
 <div class="stats4" style="margin-top:12px"><div class="tcell"><b>2009</b><span>год основания</span></div><div class="tcell"><b>24</b><span>города России</span></div><div class="tcell"><b>${REPORTS.length}+</b><span>фотоотчётов на сайте</span></div><div class="tcell"><b>2</b><span>города с афишей</span></div></div>
 <section class="sec2"><h2>Для кого мы работаем</h2><div class="cards3" style="margin-top:20px">
  <div class="box"><span class="ic">${ico.check}</span><h3>Для зрителей</h3><p>Честные цены, официальные билеты и поддержка на каждом этапе — от покупки до выхода из зала.</p><a href="#/afisha" class="lnk" style="margin-top:12px">Афиша →</a></div>
  <div class="box"><span class="ic">${ico.check}</span><h3>Для артистов</h3><p>Полный цикл организации концерта: реклама, продажи, площадка, райдер, трансфер и безопасность.</p><a href="#/artists" class="lnk" style="margin-top:12px">Организаторам →</a></div>
  <div class="box"><span class="ic">${ico.check}</span><h3>Для городов</h3><p>Привозим звёзд, театры и детские шоу туда, где их ждут, — от больших площадок до камерных залов.</p><a href="#/reports" class="lnk" style="margin-top:12px">Фотоотчёты →</a></div>
 </div></section>
 <section class="sec2" style="padding-top:8px"><h2>Наши принципы</h2><div class="cards2" style="margin-top:20px">
  <div class="box"><h3 style="margin-top:0">Честность и открытость</h3><p>Год за годом мы растём вместе с индустрией и остаёмся верны главному — честности перед зрителями и артистами.</p></div>
  <div class="box"><h3 style="margin-top:0">Индивидуальный подход</h3><p>Каждый артист и каждый зритель уникален. Мы делаем так, чтобы попасть в наш список клиентов значило одно: здесь любят и уважают.</p></div>
 </div></section>
 <section class="sec2" style="padding-top:8px"><h2 style="margin-bottom:20px">Команда</h2><div class="team">
  <div><div class="av2">Фото</div><b>Виктор Загвоздин</b><small>генеральный директор</small></div>
  ${[1,2,3].map(()=>`<div><div class="av2">Здесь будет фото сотрудника</div><b>Имя Фамилия</b><small>должность</small></div>`).join('')}
 </div></section>
 <section class="sec2" style="padding-top:8px"><div class="formwrap cta"><div><h2>Хотите работать с нами?</h2><p class="plead" style="margin-top:8px">Артистам и агентам — сюда. Зрителям — в афишу.</p></div><div style="display:flex;gap:10px;flex-wrap:wrap"><a href="#/artists" class="btn btn-red">Для артистов</a><a href="#/afisha" class="btn btn-line">Афиша</a></div></div></section>
 </div></div>`;
 $$('.dark>img').forEach(i=>i.classList.add('ph'));
}
function pageRefund(){
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Как вернуть билет'])}<h1 class="ptitle">Как вернуть билет</h1><p class="plead">Возврат регулируется статьёй 52.1 «Основ законодательства РФ о культуре» и Постановлением Правительства РФ № 1491. Сумма зависит от того, за сколько дней до события вы подаёте заявление.</p>
 <section class="sec2"><div class="cards2" style="align-items:start">
  <div><h2 style="font-size:22px;margin-bottom:14px">Сколько вернётся, если вы передумали</h2><table class="rtable"><tr><td>За 10 дней и больше</td><td>100%</td></tr><tr><td>От 5 до 10 дней</td><td>не менее 50%</td></tr><tr><td>От 3 до 5 дней</td><td>не менее 30%</td></tr><tr><td>Меньше чем за 3 дня</td><td>не возвращается*</td></tr></table><p style="font-size:13px;color:var(--muted);margin-top:10px">* кроме случаев, предусмотренных законом (например, документально подтверждённая болезнь или смерть близкого)</p></div>
  <div class="box"><h2 style="font-size:22px;margin-bottom:14px">Если событие отменили или перенесли</h2><p>Стоимость билета возвращается полностью. Электронный билет возвращается по правилам билетного оператора — Ticketscloud. Ссылка на возврат есть в письме с билетом.</p></div>
 </div></section>
 <section class="sec2" style="padding-top:0"><h2 style="margin-bottom:20px">Как оформить возврат</h2><div class="steps4">
  <div><b>Найдите письмо</b><p>Письмо с электронным билетом от Ticketscloud — в той почте, что указывали при покупке.</p></div>
  <div><b>Заполните заявление</b><p>По ссылке из письма или на сайте оператора. Понадобятся номер заказа и e-mail.</p></div>
  <div><b>Дождитесь ответа</b><p>${'Здесь будут точные сроки рассмотрения заявки'}</p></div>
  <div><b>Получите деньги</b><p>Деньги вернутся на карту, с которой оплачивали билет.</p></div>
 </div></section>
 <section class="sec2" style="padding-top:8px"><div class="formwrap cta"><div><h2>Остались вопросы?</h2><p class="plead" style="margin-top:8px">Посмотрите частые вопросы или напишите нам — поможем.</p></div><div style="display:flex;gap:10px;flex-wrap:wrap"><a href="#/faq" class="btn btn-dark">Вопросы и ответы</a><a href="#/contacts" class="btn btn-line">Контакты</a></div></div></section>
 </div></div>`;
}
function pageFAQ(){
 const Q=[
  ['Какие правила возврата билетов?','Если вы передумали идти: за 10 дней и больше — возвращается 100% стоимости, от 5 до 10 дней — не менее 50%, от 3 до 5 дней — не менее 30%, меньше чем за 3 дня — не возвращается (кроме случаев, предусмотренных законом). <a href="#/refund" style="text-decoration:underline">Подробнее о возврате</a>'],
  ['Что делать, если мне меньше возрастного ограничения?','Возрастное ограничение устанавливается по закону. Пройти можно в сопровождении родителя или законного представителя. Если родители не могут пойти с вами, нужна заверенная расписка о том, что они не против посещения концерта.'],
  ['Нужно ли распечатывать электронный билет?','Рекомендуем распечатать — так быстрее проходить контроль. Если такой возможности нет, заранее откройте билет на телефоне, увеличьте штрихкод и яркость экрана.'],
  ['Можно ли купить билет в день мероприятия?','Можно, если билеты остались. Но лучше покупать заранее: ближе к дате билетов становится меньше, а в день события они чаще всего дороже.'],
  ['Что нельзя проносить на концерт?','<ul><li>пиротехнику, фаеры, петарды, дымовые шашки</li><li>легковоспламеняющиеся и огнеопасные предметы</li><li>лекарства без предписания врача</li><li>еду и напитки</li></ul><p style="margin-top:8px">Профессиональная фото- и видеосъёмка — только по аккредитации. Большие сумки и рюкзаки лучше оставить в гардеробе.</p>'],
  ['Что делать, если мероприятие отменили?','Билеты возвращаются по месту покупки. Электронные билеты — по правилам билетного оператора, у которого вы покупали билет.'],
 ];
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Вопросы и ответы'])}<h1 class="ptitle">Вопросы и ответы</h1><p class="plead">Собрали ответы на вопросы, которые нам задают чаще всего.</p>
 <section class="sec2"><div class="acc">${Q.map(([q,a],i)=>`<details${i?'':' open'}><summary>${q}<i>+</i></summary><div class="a">${a}</div></details>`).join('')}</div></section>
 <section class="sec2" style="padding-top:0"><div class="formwrap"><div><h2>Не нашли ответ?</h2><p class="plead" style="margin-top:10px">Напишите нам — ответим на почту в течение рабочего дня.</p></div><div><form class="form" id="fform"><div><label>Имя</label><input required></div><div><label>E-mail</label><input type="email" required></div><div class="full"><label>Телефон</label><input type="tel" placeholder="+7"></div><div class="full"><label>Ваш вопрос</label><textarea required></textarea></div><div class="full">${consent()}<button class="btn btn-red" type="submit" style="width:100%">Отправить</button></div></form><div class="done"></div></div></div></section>
 </div></div>`;
 bindForm('fform','Спасибо! Ответим на почту в течение рабочего дня.');
}
function pageSubscribe(){
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Подписка на анонсы'])}
 <section class="sec2" style="padding-top:16px"><div class="formwrap"><div><h1 class="ptitle" style="margin-top:0">Узнавайте об&nbsp;анонсах первыми</h1><p class="plead">Раз в неделю — новые события, старт продаж и ранние цены. Никакого спама, отписаться можно в один клик.</p>
 <div style="display:flex;flex-direction:column;gap:12px;margin-top:24px">${[['Анонсы раньше рекламы','Узнаёте о концерте до того, как появятся афиши в городе'],['Ранние цены','Первые билеты обычно дешевле'],['Только ваш город','Присылаем афишу выбранного города']].map(([b,s])=>`<div style="display:flex;gap:12px">${ico.check.replace('currentColor','#E1251B')}<div><b>${b}</b><div style="color:var(--muted);font-size:14px">${s}</div></div></div>`).join('')}</div></div>
 <div><form class="form" id="subform"><div class="full"><label>E-mail</label><input type="email" required placeholder="you@mail.ru"></div><div class="full"><label>Город</label><select>${Object.entries(CITIES).map(([k,c])=>`<option ${k===CITY?'selected':''}>${c.name}</option>`).join('')}</select></div><div class="full"><label>Что интересно</label><div class="checks"><label><input type="checkbox" checked>Концерты</label><label><input type="checkbox" checked>Спектакли и мюзиклы</label><label><input type="checkbox">Детям</label></div></div><div class="full">${consent(true)}<button class="btn btn-red" type="submit" style="width:100%">Подписаться</button></div></form><div class="done"></div>
 <div class="salt" style="margin-top:16px">или следите там, где удобно: <a href="https://vk.com/all_stars_nn" target="_blank" rel="noopener"><span class="vk">VK</span>ВКонтакте</a><a href="#" onclick="return false"><svg width="16" height="16" viewBox="0 0 24 24" fill="#229ED9"><path d="M21.9 4.3 18.6 20c-.2 1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.9 13.4l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6L20.6 2.9c.9-.3 1.7.2 1.3 1.4z"/></svg>Telegram</a></div></div></div></section>
 </div></div>`;
 bindForm('subform','Готово! Первое письмо придёт с ближайшими анонсами вашего города.');
}
function pageContacts(){
 app.innerHTML=`<div class="view"><div class="wrap">${crumbs(['Контакты'])}<h1 class="ptitle">Контакты</h1><p class="plead">Ответим на вопросы о билетах, концертах и сотрудничестве.</p>
 <div class="ccards" style="margin-top:28px">
  <div class="ccard"><small>Телефон</small><b><a href="tel:+79202944488">+7 920 294-44-88</a></b><small>Виктор Загвоздин, директор</small></div>
  <div class="ccard"><small>E-mail</small><b><a href="mailto:triballl@mail.ru">triballl@mail.ru</a></b><small>для билетов и сотрудничества</small></div>
  <div class="ccard"><small>ВКонтакте</small><b><a href="https://vk.com/all_stars_nn" target="_blank" rel="noopener">vk.com/all_stars_nn</a></b><small>новости и сообщения группы</small></div>
  <div class="ccard"><small>Telegram</small><b>@allstarsnn</b><small>${'здесь будет канал'}</small></div>
 </div>
 <section class="sec2"><div class="cards2" style="align-items:stretch"><div class="mapph">Здесь будет карта<br>и адрес офиса</div>
 <div class="formwrap" style="grid-template-columns:1fr;padding:28px"><div><h2 style="font-size:22px">Написать нам</h2></div><div><form class="form" id="cform"><div><label>Имя</label><input required></div><div><label>Телефон или e-mail</label><input required></div><div class="full"><label>Тема</label><select><option>Вопрос по билету</option><option>Сотрудничество</option><option>Другое</option></select></div><div class="full"><label>Сообщение</label><textarea required></textarea></div><div class="full">${consent()}<button class="btn btn-red" type="submit" style="width:100%">Отправить</button></div></form><div class="done"></div></div></div></div></section>
 </div></div>`;
 bindForm('cform','Сообщение отправлено — ответим в течение рабочего дня.');
}


/* =================== legal docs =================== */
const NOTE=PH('Шаблон. Финальный текст и реквизиты оператора подготовит юрист заказчика');
const DOCS={
 privacy:{t:'Политика конфиденциальности',h:`<p class="upd">Редакция от «__» ________ 2026 г.</p>${NOTE}
 <h2>1. Общие положения</h2><p>Политика описывает, как All Stars NN (далее — Оператор) обрабатывает и защищает персональные данные посетителей сайта в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p><p>Оператор: <b>здесь будут наименование, ИНН, ОГРН и адрес</b>.</p>
 <h2>2. Какие данные мы обрабатываем</h2><ul><li>имя;</li><li>номер телефона и адрес электронной почты;</li><li>данные, которые вы указываете в заявке или вопросе;</li><li>технические данные: cookie, IP-адрес, сведения о браузере и действиях на сайте.</li></ul>
 <h2>3. Цели обработки</h2><ul><li>ответ на вопросы и заявки;</li><li>обсуждение сотрудничества с артистами и организаторами;</li><li>рассылка анонсов — только с вашего отдельного согласия;</li><li>улучшение работы сайта и аналитика.</li></ul>
 <h2>4. Передача третьим лицам</h2><p>Данные не передаются третьим лицам, кроме случаев, необходимых для оказания услуг (например, билетному оператору Ticketscloud при покупке билета или сервису рассылки), и случаев, предусмотренных законом.</p>
 <h2>5. Хранение и защита</h2><p>Данные хранятся на серверах на территории Российской Федерации не дольше, чем требуется для целей обработки. Оператор применяет организационные и технические меры защиты.</p>
 <h2>6. Ваши права</h2><p>Вы можете запросить сведения об обработке своих данных, потребовать их уточнения или удаления и отозвать согласие, написав на <a href="mailto:triballl@mail.ru" style="text-decoration:underline">triballl@mail.ru</a>.</p>
 <h2>7. Cookie</h2><p>Сайт использует cookie для корректной работы и аналитики. Отключить их можно в настройках браузера.</p>
 <h2>8. Контакты</h2><p>По вопросам обработки персональных данных: <a href="mailto:triballl@mail.ru" style="text-decoration:underline">triballl@mail.ru</a>, +7 920 294-44-88.</p>`},
 consent:{t:'Согласие на обработку персональных данных',h:`<p class="upd">Редакция от «__» ________ 2026 г.</p>${NOTE}
 <p style="margin-top:16px">Отправляя форму на сайте, я свободно, своей волей и в своём интересе даю согласие Оператору — <b>здесь будут наименование, ИНН и адрес</b> — на обработку моих персональных данных на следующих условиях.</p>
 <h2>Какие данные</h2><p>Имя, номер телефона, адрес электронной почты и сведения, указанные мной в форме.</p>
 <h2>Цели</h2><p>Обработка обращения, ответ на вопрос или заявку, обсуждение сотрудничества. Рассылка анонсов — только при отдельной отметке в форме.</p>
 <h2>Действия с данными</h2><p>Сбор, запись, систематизация, хранение, уточнение, использование, удаление и уничтожение — с использованием средств автоматизации и без них.</p>
 <h2>Срок действия и отзыв</h2><p>Согласие действует до достижения целей обработки или до его отзыва. Отозвать согласие можно, направив письмо на <a href="mailto:triballl@mail.ru" style="text-decoration:underline">triballl@mail.ru</a>.</p>
 <p style="margin-top:16px">Подробнее — в <a href="#/privacy" data-doc="privacy" style="text-decoration:underline">Политике конфиденциальности</a>.</p>`},
};
function openDoc(k){const d=DOCS[k];$('#docBody').innerHTML=`<h1>${d.t}</h1>${d.h}`;$('#docv').classList.add('show');$('#docv .docw').scrollTop=0;document.body.style.overflow='hidden'}
function closeDoc(){$('#docv').classList.remove('show');document.body.style.overflow=$('#pp').classList.contains('show')?'hidden':''}
$('#docX').onclick=closeDoc;$('#docOk').onclick=closeDoc;$('#docv').addEventListener('click',e=>{if(e.target.id==='docv')closeDoc()});
document.addEventListener('click',e=>{const a=e.target.closest('[data-doc]');if(a){e.preventDefault();e.stopPropagation();openDoc(a.dataset.doc)}},true);
function pageDoc(k){app.innerHTML=`<div class="view"><div class="wrap" style="max-width:860px">${crumbs([DOCS[k].t])}<div class="doc" style="margin-top:20px">${DOCS[k].h.replace('','')}</div></div></div>`;$('.doc').insertAdjacentHTML('afterbegin',`<h1 class="ptitle">${DOCS[k].t}</h1>`)}


/* =================== mega nav + drawer =================== */
const CATN=[['all','Все события'],['concert','Концерты'],['show','Спектакли и мюзиклы'],['kids','Детям']];
function catCount(k){return cityEV().filter(e=>k==='all'||e.cat===k).length}
function renderNavMenus(){
 const ce=cityEV();
 $('#megaAf').innerHTML=`<div class="maf-l">${CATN.map(([k,l])=>`<a href="#/afisha/${k}">${l}<small>${catCount(k)}</small></a>`).join('')}<a class="all" href="#/afisha">Вся афиша ${CITIES[CITY].gen} →</a></div>
 <div class="maf-r"><h5>Ближайшие события</h5>${ce.slice(0,3).map(e=>`<div class="maf-ev" data-open="${e.id}"><div class="th">${img(e.img)}</div><div><span>${dm(e.d)}</span><b>${e.short}</b><small>${e.place}</small></div></div>`).join('')||'<p style="color:var(--muted);font-size:14px;padding:4px">Скоро здесь появятся события</p>'}</div>`;
 $('#dwAf').innerHTML=CATN.map(([k,l])=>`<a href="#/afisha/${k}">${l}<small>${catCount(k)}</small></a>`).join('');
 $('#dwCity').innerHTML=Object.entries(CITIES).map(([k,c])=>`<button class="${k===CITY?'on':''}" data-c="${k}">${c.name}</button>`).join('');
 $$('#dwCity button').forEach(b=>b.onclick=()=>{const o=$(`#cityMenu .opt[data-c="${b.dataset.c}"]`);o&&o.click();renderNavMenus()});
}
function closeNav(){$$('.nd.open').forEach(n=>n.classList.remove('open'))}
const hoverable=matchMedia('(hover:hover)').matches;
$$('.nd').forEach(nd=>{
 const btn=nd.querySelector('.nl');let t;
 btn.addEventListener('click',e=>{e.stopPropagation();const was=nd.classList.contains('open');closeNav();closeDD();if(!was)nd.classList.add('open')});
 if(hoverable){nd.addEventListener('mouseenter',()=>{clearTimeout(t);closeNav();nd.classList.add('open')});nd.addEventListener('mouseleave',()=>{t=setTimeout(()=>nd.classList.remove('open'),180)})}
});
document.addEventListener('click',e=>{if(!e.target.closest('.nd'))closeNav();if(e.target.closest('.mega a,.mega [data-open]'))closeNav()});
$('#burger').onclick=()=>{renderNavMenus();$('#drawer').classList.add('show');document.body.style.overflow='hidden'};
function closeDrawer(){$('#drawer').classList.remove('show');document.body.style.overflow=''}
$('#dwX').onclick=closeDrawer;$('#drawer').addEventListener('click',e=>{if(e.target.id==='drawer'||e.target.closest('.dw a'))closeDrawer()});


/* =================== promo popup =================== */
const PP_KEY='asn_pp';let ppDone=false;try{ppDone=!!localStorage.getItem(PP_KEY)}catch(e){}
function ppBusy(){return ['#nv','#lb','#docv','#drawer'].some(s=>$(s).classList.contains('show'))||$$('.dd.open,.nd.open').length}
function ppMark(v){ppDone=true;try{localStorage.setItem(PP_KEY,v)}catch(e){}}
function openPP(){if(ppDone)return;if(ppBusy())return setTimeout(openPP,1500);$('#pp').classList.add('show');document.body.style.overflow='hidden'}
function closePP(){$('#pp').classList.remove('show');document.body.style.overflow='';if(!ppDone)ppMark('closed')}
$('#ppX').onclick=closePP;$('#ppSkip').onclick=closePP;$('#pp').addEventListener('click',e=>{if(e.target.id==='pp')closePP()});
{const f=$('#ppForm'),btn=f.querySelector('[type=submit]'),req=[...f.querySelectorAll('[data-req]')];
 const upd=()=>btn.classList.toggle('off',!req.every(c=>c.checked));req.forEach(c=>c.addEventListener('change',upd));upd();
 f.onsubmit=e=>{e.preventDefault();if(!req.every(c=>c.checked)){say('Отметьте согласия, чтобы получить скидку');return}$('#ppStep1').style.display='none';$('#ppStep2').style.display='block';ppMark('subscribed')}}
$('#ppCode').onclick=()=>{try{navigator.clipboard.writeText('ALLSTARS5')}catch(e){}$('#ppCode small').textContent='Скопировано ✓';say('Промокод ALLSTARS5 скопирован')};
$('#ppGo').onclick=()=>{closePP();location.hash='#/afisha'};
document.addEventListener('submit',e=>{if(e.target.id!=='ppForm')ppMark('subscribed')},true);
setTimeout(openPP,3000);

/* =================== router =================== */
const ROUTES={'':pageHome,afisha:pageAfisha,event:pageEvent,reports:pageReports,report:pageReport,news:pageNews,artists:pageArtists,about:pageAbout,refund:pageRefund,faq:pageFAQ,subscribe:pageSubscribe,contacts:pageContacts,privacy:()=>pageDoc('privacy'),consent:()=>pageDoc('consent')};
function route(){
 const h=location.hash.replace(/^#\/?/,'');const [p,arg]=h.split('/');
 if(!(p in ROUTES)&&p)return; // in-page anchors
 document.body.classList.remove('has-mbuy');closeDD();closeNews();
 (ROUTES[p]||pageHome)(arg?decodeURIComponent(arg):undefined);
 closeNav();closeDrawer();
 $$('#nav [data-r]').forEach(a=>a.classList.toggle('on',a.dataset.r===p||(p==='report'&&a.dataset.r==='reports')));
 const grp={afisha:'afisha',event:'afisha',refund:'viewers',faq:'viewers',subscribe:'viewers',artists:'org',about:'org',contacts:'org'}[p];
 $$('#nav .nd').forEach(n=>n.querySelector('.nl').classList.toggle('on',n.dataset.g===grp));
 window.scrollTo({top:0,behavior:'instant'});
}
window.addEventListener('hashchange',route);
hydrate();renderCity();renderNavMenus();route();
