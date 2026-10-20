/**
 * Unstable SMP Chronicles - Central Knowledge Base & Canonical Lore Matrix
 * 包含四大主角全集數 1:1 獨立章節深度檔案、官方發布日期時序、意外獲得神器資料庫、跨視角事件對照與冒險遊戲題庫
 */

const UNSTABLE_DATA = {
  "metadata": {
    "title": "Unstable SMP: The Complete Lore & Chronicle",
    "version": "2.0.0",
    "universeName": "Unstable Universe / Unstable SMP",
    "description": "Minecraft 史上最震撼的劇情式極限硬核伺服器 — 四大主角全視角故事、影片解析、意外禁忌物品與互動冒險指南",
    "githubRepo": "https://github.com/hsiaoyujui114-code/unstable-smp-chronicles",
    "githubPagesUrl": "https://hsiaoyujui114-code.github.io/unstable-smp-chronicles/"
  },
  "characters": {
    "parrot": {
      "id": "parrot",
      "name": "Parrot (ParrotX2)",
      "realHandle": "ParrotX2",
      "roleTitle": "伺服器調查者 · 越獄智將 · Unstable 第一任民選國王",
      "tagline": "「當伺服器的規則開始崩塌，唯有尋找代碼背後的真相才能倖存。」",
      "themeColor": "#38bdf8",
      "accentGlow": "rgba(56, 189, 248, 0.4)",
      "badge": "INTEL & STRATEGY",
      "avatar": "assets/avatars/parrot.jpg",
      "skinBody": "assets/skins/parrot_3d.png",
      "appearance": {
        "summary": "身穿標誌性海軍藍連帽衫，配戴紅黃藍三色金剛鸚鵡羽飾耳機，眼神冷靜而睿智。",
        "features": [
          "標誌性服飾：深海藍色高領兜帽風衣，袖口飾有輕靈羽翼紋理",
          "頭部配飾：模仿金剛鸚鵡色彩（紅、黃、藍三色漸變）的特製羽飾耳機",
          "神態特質：冷靜敏銳的洞察者，隨時保持防範與觀察姿態",
          "現實說明：ParrotX2 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方百萬頻道當前最新使用之形象照"
        ]
      },
      "stats": {
        "intellect": 98,
        "strategy": 95,
        "pvpCombat": 82,
        "influence": 96,
        "stealth": 88
      },
      "personality": "冷靜敏銳的戰略家與真相追尋者。他不輕易相信任何人，善於在重重謊言中找到系統底層漏洞，但當身負王國責任時，展現出無與倫比的領導擔當。",
      "biography": "Parrot 是 Unstable SMP 的靈魂敘事核心之一。從最初無意間挖出足以毀滅整個伺服器的「紅石異常按鈕」開始，他就被捲入了隱藏在日常生存背後的龐大陰謀。\n\n面對由腐敗勢力打造的「Paragon 絕海黑牢」，他憑藉精密計算的紅石走私技巧完成不可思議的破獄脫逃；在伺服器陷入無序廝殺時，他挺身而出競選第一任國王，在王座上竭力治理風雨飄搖的 Unstable，抵禦刺殺與內部叛變。在最後的千人大內戰中，他更統帥聯合軍團直面伺服器最黑暗的命運。",
      "storyArcs": [
        {
          "id": "parrot_arc_1",
          "title": "第一章：代碼裂痕與毀滅世界的按鈕",
          "subtitle": "極遠荒原勘測、古代基岩神壇與抹除全服存檔的禁斷按鈕",
          "publishDate": "2024-04-27",
          "formattedDate": "2024 年 4 月 27 日",
          "summary": "在探索伺服器極遠荒野邊境時，Parrot 意外發掘了一座未記錄在伺服器端生成清單中的古代紅石地下密室。在密室最核心的神壇上，他挖出了一枚標註為『抹除協議』的禁忌按鈕，通電即會引發全服封包遺失與區塊崩潰。這起震撼發現打破了常規生存的假象，揭露了 Unstable SMP 背後被代碼腐化籠罩的真實面貌，也讓 Parrot 成為各大陣營暗中鎖定的首要調查目標。",
          "genesis": "伺服器初建之時，Parrot 在日常遊歷時敏銳注意到座標 X: 48,200、Z: -36,500 出現異常區塊抖動（Chunk Stuttering）與紅石訊號延遲。比對地圖種子後，他隻身開鑿直通負 Y 軸基岩的垂直豎井，撞破一道未在生成清單中的古代地下密室結界。",
          "conflict": "密室內布滿絆線瞬爆 TNT 與滯留傷害藥水。Parrot 運用水流阻絕在暗光中逐一拆解引信，在中央神壇發現懸浮於屏障方塊上的石質按鈕。探測顯示該按鈕直接綁定底層指令，一旦通電將引發全服主執行緒崩潰並抹除所有玩家物品庫。就在此時追兵逼近，Parrot 展現極致克制，外科手術式完整剝離按鈕隱匿撤離。",
          "lootAndAnomaly": "World Destroyer Button（世界毀滅按鈕）",
          "impact": "毀滅按鈕的現世粉碎了伺服器虛假的平靜，各大軍事工會開始意識到底層漏洞的存在，冷戰暗流就此引爆。",
          "keyPlotPoints": [
            "在邊界荒原勘測到異常時序震顫，鎖定基岩層古代地下密室座標",
            "破解密室內連鎖高爆 TNT 與滯留傷害藥水陷阱",
            "親睹具備抹除全服存檔權能的『世界毀滅按鈕』",
            "在敵方追兵破門前極限拆解按鈕並安全撤離",
            "決心不濫用神力，將按鈕轉化為制衡全服霸權的最高威懾籌碼"
          ],
          "psychology": "「力量若沒有智慧作為韁繩，終將化為吞噬一切的深淵。我將成為這顆按鈕的守門人。」",
          "sourceVideos": [
            {
              "id": "soYelcGVPac",
              "title": "This Button Destroys the World",
              "channel": "ParrotX2",
              "duration": "28:45",
              "thumbnail": "https://i.ytimg.com/vi/soYelcGVPac/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=soYelcGVPac",
              "publishDate": "2024-04-27",
              "formattedDate": "2024 年 4 月 27 日"
            }
          ]
        },
        {
          "id": "parrot_arc_2",
          "title": "第二章：深海黑牢 Paragon 絕境潛入與越獄",
          "subtitle": "三重浸水黑曜石活體地獄、深海長老疲勞結界與 1.2 秒延遲脫逃",
          "publishDate": "2024-06-08",
          "formattedDate": "2024 年 6 月 8 日",
          "summary": "Parrot 遭到賞金獵人部隊重兵圍剿，負傷被押送至號稱絕對無人生還的深海黑牢 Paragon。牢區四壁全由浸水黑曜石混築，更有四隻深海長老施加永續挖掘疲勞 III。Parrot 憑心算測算出衛兵換班空檔與伺服器整點存檔延遲，透過通風漏斗極限走私紫頌果與隱形藥水，在暗夜短路引發警報，吞下紫頌果穿透天井成功越獄。",
          "genesis": "遭到賞金獵人部隊重兵圍剿，負傷的 Parrot 被押送至號稱絕對無人生還的深海黑牢 Paragon。牢區四壁全由浸水黑曜石混築，更有四隻深海長老施加永續挖掘疲勞 III。",
          "conflict": "身處底層牢房，Parrot 憑心算測算出衛兵換班的 4 秒空檔，以及伺服器在整點儲存區塊時產生的 1.2 秒瞬間載入延遲。他秘密串聯囚徒，透過通風排氣漏斗極限走私紫頌果與隱形藥水。行動之夜引發微型短路使全牢房探照燈熄滅，吞下紫頌果奇蹟穿透兩格基岩天井，奪下衛兵重弩射爆油燈，躍入萬丈絕海成功越獄。",
          "lootAndAnomaly": "Smuggled Paragon Shulker（Paragon 禁忌走私界伏盒）",
          "impact": "Paragon 監獄不破神話破滅，典獄長走私與奴工帳本被公之於眾，全服散戶開始聚集於 Parrot 麾下。",
          "keyPlotPoints": [
            "被剝奪全部裝備投入深海黑牢 Paragon",
            "在挖掘疲勞詛咒下算準伺服器存檔時的 1.2 秒載入延遲",
            "透過通風漏斗極限走私紫頌果與高階隱形藥水",
            "在暴雨之夜短路供電，吞下紫頌果瞬移穿透基岩天井防線",
            "帶出揭露黑牢走私黑幕的界伏盒躍海脫逃"
          ],
          "psychology": "「基岩可以困住血肉，卻困不住精密的計算。只要世界上存在規則，就必然存在規則的邊界。」",
          "sourceVideos": [
            {
              "id": "6dtNsa-MGs8",
              "title": "I Broke into Minecraft's Most Secure Prison",
              "channel": "ParrotX2",
              "duration": "35:12",
              "thumbnail": "https://i.ytimg.com/vi/6dtNsa-MGs8/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=6dtNsa-MGs8",
              "publishDate": "2024-06-08",
              "formattedDate": "2024 年 6 月 8 日"
            }
          ]
        },
        {
          "id": "parrot_arc_3",
          "title": "第三章：雪原冰封大追捕與逆境狙殺",
          "subtitle": "雪原荒野大追捕、穿透重弩極限反殺與獵人軍團的崩潰",
          "publishDate": "2024-06-29",
          "formattedDate": "2024 年 6 月 29 日",
          "summary": "Paragon 越獄引發全服震撼，賞金獵人聯盟開出天價懸賞。三支最頂尖的職業獵殺小隊在雪原針葉林展開拉網式搜捕。Parrot 巧妙利用水流結晶與凍土冰層進行超高速雪地滑行，在狹窄冰道布設絆線紅石炸藥阻斷追兵，最後憑藉穿透 V 重弩一箭雙鵰反殺獵人隊長，徹底瓦解搜捕網。",
          "genesis": "Paragon 越獄引發全服震撼，貪婪的賞金獵人聯盟開出天價懸賞。三支最頂尖的職業獵殺小隊在雪原針葉林展開拉網式大搜捕。",
          "conflict": "Parrot 在冰封峽谷中與獵人部隊展開周旋。面對漫天箭雨與三叉戟衝鋒，他巧妙利用水流結晶與凍土冰層進行超高速雪地滑行，在狹窄冰道布設絆線紅石炸藥阻斷追兵。在最後的山隘決戰中，Parrot 藉由極限穿透 V 重弩實現一箭雙鵰，連續反殺三名獵人隊長，徹底擊潰搜捕網。",
          "lootAndAnomaly": "Hunter's Tracking Compass（刺客追蹤羅盤）",
          "impact": "頂級獵人聯盟的慘敗奠定了 Parrot 個人戰術大師的無敵威名，賞金獵人自此不敢輕易踏足其領地。",
          "keyPlotPoints": [
            "越獄後於雪原針葉林遭遇三大職業獵人小隊聯合圍獵",
            "利用冰層水流極速滑行擺脫第一波三叉戟撲殺",
            "在峽谷隘口布設紅石凍土爆破陷阱阻斷敵軍主力",
            "憑藉穿透重弩在暴雪中完成神級反手盲射狙殺",
            "繳獲刺客追蹤羅盤，瓦解賞金獵人全服通緝網"
          ],
          "psychology": "「獵人與獵物的身份，往往只在拔箭的一瞬間逆轉。」",
          "sourceVideos": [
            {
              "id": "VSI12NnAnAY",
              "title": "I Got Hunted by Minecraft's Deadliest Players",
              "channel": "ParrotX2",
              "duration": "31:40",
              "thumbnail": "https://i.ytimg.com/vi/VSI12NnAnAY/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=VSI12NnAnAY",
              "publishDate": "2024-06-29",
              "formattedDate": "2024 年 6 月 29 日"
            }
          ]
        },
        {
          "id": "parrot_arc_4",
          "title": "第四章：王冠加冕與秩序之黎明",
          "subtitle": "無序時代的領袖擔當、造勢廣場反暗殺與 89% 壓倒性加冕",
          "publishDate": "2026-02-10",
          "formattedDate": "2026 年 2 月 10 日",
          "summary": "伺服器治安急遽惡化，黑手黨橫行霸道掠奪散戶。全服平民請願 Parrot 出面主持大局。Parrot 正式宣布參選 Unstable SMP 第一任民選國王。造勢演說高潮之際，他敏銳看破高空隱形刺客的光學折射，反手重弩一箭盲射震落生擒刺客，以 89% 壓倒性得票率登基為王。",
          "genesis": "伺服器治安急遽惡化，黑手黨橫行霸道掠奪散戶。全服平民請願 Parrot 出面主持大局。Parrot 正式宣布參選 Unstable SMP 第一任民選國王，承諾建立公正法治。",
          "conflict": "黑手黨派遣高階隱形刺客潛伏於中央大鐘樓橫樑企圖暗殺。演說高潮之際，Parrot 透過望遠鏡捕捉到虛空中的光學折射與隱形藥水殘滴，反手拔出重弩一箭洞穿立柱將刺客震落高空當場生擒。全場雷動，Parrot 以 89% 創紀錄得票率加冕為王。",
          "lootAndAnomaly": "The Sovereign Scepter（國王權杖）",
          "impact": "Unstable SMP 誕生首個合法文明政權，主城在數週內蛻變為商貿繁盛的巨型大都會。",
          "keyPlotPoints": [
            "回應全服散戶請願，正式發表參選演說競逐第一任民選國王",
            "黑手黨家族密謀派遣高階隱形刺客發動致命狙擊",
            "透過望遠鏡看破匿蹤折射，反手重弩盲射絕殺刺客",
            "以 89% 歷史得票率登基，接過象徵全服文明正統的國王權杖",
            "宣告王權時代正式揭幕"
          ],
          "psychology": "「王冠從不是榮耀的裝飾，而是沉重的十字架。我的每一次拔劍，都必須為這片土地最弱小的靈魂負責。」",
          "sourceVideos": [
            {
              "id": "2WusTNLmBpE",
              "title": "I Became King of the Unstable SMP",
              "channel": "ParrotX2",
              "duration": "33:20",
              "thumbnail": "https://i.ytimg.com/vi/2WusTNLmBpE/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=2WusTNLmBpE",
              "publishDate": "2026-02-10",
              "formattedDate": "2026 年 2 月 10 日"
            }
          ]
        },
        {
          "id": "parrot_arc_5",
          "title": "第五章：百日治世與舊勢力的反撲",
          "subtitle": "百日治世的鐵血考驗、《和平治安法典》與抵禦舊貴族反撲",
          "publishDate": "2026-02-28",
          "formattedDate": "2026 年 2 月 28 日",
          "summary": "加冕之後的 Parrot 展開百日王權大治，頒布《和平治安法典》並廢除掠奪性重稅。舊地下軍閥與走私集團組成同盟深夜暴動，向王城水庫投毒並縱火焚燒糧倉。Parrot 親率皇家親衛隊布下防爆重盾陣，運用滯留治療藥水與擊退重劍粉碎叛亂軍團的午夜突襲。",
          "genesis": "加冕之後的 Parrot 展開為期百日的王權大治。他頒布《和平治安法典》，建立皇家守衛團巡邏交通動脈，全面廢除掠奪性重稅。",
          "conflict": "被剝奪既得利益的舊地下軍閥與走私集團組成同盟發起暴動，暗中向王城水庫投毒並縱火焚燒糧倉。Parrot 展現鐵腕手段，親率皇家親衛隊在王城護城河前布下防爆重盾陣，運用滯留治療藥水與擊退重劍粉碎叛亂軍團的午夜突襲，將首惡分子明正典刑。",
          "lootAndAnomaly": "Crown of Royal Peace（治世皇冠）",
          "impact": "確立了法治不可動搖的權威，平民玩家真正擁有了安居樂業的避難所，文明步入空前鼎盛期。",
          "keyPlotPoints": [
            "頒布《和平治安法典》，建立全服統一的公共安全巡邏隊",
            "推行自由貿易協定，廢除非法關稅與物資盤剝",
            "遭遇舊軍閥與走私集團的深夜投毒與暴亂圍城",
            "親率衛隊在王城護城河前布陣力挫叛軍主力",
            "完成百日治世考驗，確立文明正統法治"
          ],
          "psychology": "「守護和平往往比挑起戰爭需要更大的勇氣與決心。」",
          "sourceVideos": [
            {
              "id": "TphfLyzVbqQ",
              "title": "100 Days as King of the Unstable SMP",
              "channel": "ParrotX2",
              "duration": "42:15",
              "thumbnail": "https://i.ytimg.com/vi/TphfLyzVbqQ/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=TphfLyzVbqQ",
              "publishDate": "2026-02-28",
              "formattedDate": "2026 年 2 月 28 日"
            }
          ]
        },
        {
          "id": "parrot_arc_6",
          "title": "第六章：白金烏托邦的崩塌與暗流",
          "subtitle": "白金烏托邦的聖潔假象、地下奴工黑幕與公頻大揭秘",
          "publishDate": "2026-03-19",
          "formattedDate": "2026 年 3 月 19 日",
          "summary": "主城邊陲興起號稱聖潔的超級城邦「白金烏托邦」，周邊村莊卻頻發新人失蹤大案。Parrot 化裝為流浪商人隻身潛入，破譯紅石暗門赫然發現深達百格的巨型地下全自動奴工農場。他冒死拷貝了高層的犯罪帳本，在全服公共頻道同步直播現場畫面，徹底扒下偽善政權的底褲。",
          "genesis": "主城邊陲興起了一座自詡神聖無暇的超級城邦「白金烏托邦」。然而周邊村莊頻繁發生新人莫名失蹤大案，Parrot 化裝為流浪商人隻身潛入調查。",
          "conflict": "在城邦華麗的大理石神殿之下，Parrot 破譯隱密紅石暗門，赫然發現深達百格的巨型地下全自動化奴工農場。數百名被騙入城的新人玩家被剝奪隨身裝備，被迫在極限疲勞下全天候搬運獄髓礦石。Parrot 冒險拷貝了高層的犯罪帳本，在全服公共頻道同步直播現場畫面，徹底扒下偽善政權的底褲。",
          "lootAndAnomaly": "Labor Camp Black Ledger（白金烏托邦地下奴役黑帳本）",
          "impact": "白金烏托邦的崩塌引發全服價值觀大地震，各大陣營紛紛選邊站隊，陣營大對決已不可避免。",
          "keyPlotPoints": [
            "追查邊境新人離奇失蹤案件，隻身潛伏調查白金烏托邦",
            "破解神殿地下暗門，揭露隱密的巨型地下奴工黑工廠",
            "在警報聲中冒死拷貝高層走私與強迫勞動的絕密黑帳本",
            "於全服公頻公開罪證，引發全服散戶的滔天怒火",
            "促使全服自由勢力開始集結反抗"
          ],
          "psychology": "「以正義之名行奴役之實，比純粹的邪惡更加令人作嘔。」",
          "sourceVideos": [
            {
              "id": "zMoihcFz2kY",
              "title": "I Exposed a Corrupt Minecraft Civilization",
              "channel": "ParrotX2",
              "duration": "29:50",
              "thumbnail": "https://i.ytimg.com/vi/zMoihcFz2kY/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=zMoihcFz2kY",
              "publishDate": "2026-03-19",
              "formattedDate": "2026 年 3 月 19 日"
            }
          ]
        },
        {
          "id": "parrot_arc_7",
          "title": "第七章：尋找地圖未標記的失落城邦",
          "subtitle": "十萬格荒漠追蹤、虛空幽靈信標與座標擾亂迷局",
          "publishDate": "2026-04-14",
          "formattedDate": "2026 年 4 月 14 日",
          "summary": "白金烏托邦覆滅後，其幕後神秘黑手 The LAW 的線索直指極限荒漠深處未記錄的幽靈基地。Parrot 駕駛鞘翅跨越十萬格長途奔襲，克服敵方代碼干擾道標與指南針失效的死局，依據地塊生成演算法辨識路徑，最終在流沙旋渦底層發掘幽靈發射器，繳獲記錄兵力部署的虛空核心石。",
          "genesis": "白金烏托邦覆滅後，其幕後資助黑手 The LAW 的線索直指極限荒漠深處一座地圖未記錄的幽靈基地。",
          "conflict": "Parrot 駕駛鞘翅跨越十萬格蠻荒沙漠展開長途奔襲。敵方布設了強大的代碼干擾道標，使指南針與座標指示器持續亂轉。Parrot 依託天體星座與地塊生成演算法辨識路徑，最終在一座流沙旋渦底層挖出偽裝的幽靈訊號發射器，繳獲了記錄 The LAW 兵力部署的虛空核心石。",
          "lootAndAnomaly": "Glitch Seed Beacon（虛空座標偽裝道標）",
          "impact": "破譯了 The LAW 的空間干擾技術，為後續自由軍團的大集結掃清了導航盲區。",
          "keyPlotPoints": [
            "跨越十萬格極限荒漠追查神秘黑手 The LAW 的行蹤",
            "遭遇伺服器級座標扭曲力場，克服導航徹底失效的死局",
            "依據天然生成規律在流沙深處發掘偽裝的幽靈信標裝置",
            "獲取敵軍通訊頻率與部隊調動代碼",
            "成功鎖定敵方主力集結區域"
          ],
          "psychology": "「迷霧只會遮蔽雙眼，無法改變真實存在的座標。」",
          "sourceVideos": [
            {
              "id": "O-ipuD6qy1Q",
              "title": "Searching for a Civilization that Doesn't Exist",
              "channel": "ParrotX2",
              "duration": "34:05",
              "thumbnail": "https://i.ytimg.com/vi/O-ipuD6qy1Q/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=O-ipuD6qy1Q",
              "publishDate": "2026-04-14",
              "formattedDate": "2026 年 4 月 14 日"
            }
          ]
        },
        {
          "id": "parrot_arc_8",
          "title": "第八章：號召全服志願軍團的誓師",
          "subtitle": "大戰前夕的歷史總動員、修築防線與打造千人志願軍團",
          "publishDate": "2026-05-04",
          "formattedDate": "2026 年 5 月 4 日",
          "summary": "面對即將爆發的全面陣營戰爭，Parrot 登高一呼發表戰鬥檄文，動員上千名平民散戶與小公會組建自由軍團。在主城盆地周圍，Parrot 親自規劃了長達數千格的防爆塹壕、地下補給走廊與紅石防空掩體，開倉分發海量儲備戰略物資，將一群散兵游勇鍛造成紀律嚴明的鋼鐵之師。",
          "genesis": "面對即將爆發的全面陣營戰爭，Parrot 登高一呼發表戰鬥檄文，動員上千名平民散戶與小公會組建自由軍團。",
          "conflict": "在主城盆地周圍，Parrot 親自規劃了長達數千格的防爆塹壕、地下補給走廊與紅石防空掩體。他將界伏盒中的海量神級裝備無私分發給志願軍，並進行分組戰術演練，將一群散兵游勇鍛造成紀律嚴明的鋼鐵之師。",
          "lootAndAnomaly": "Commander's War Horn（千人大軍誓師號角）",
          "impact": "Unstable SMP 史上最大規模的平民武裝力量宣告成軍，為千人大內戰奠定了勝局根基。",
          "keyPlotPoints": [
            "發表歷史性全服動員令，號召自由力量抵抗強權",
            "在中央盆地修築長達數千格的縱深防禦工事與地下交通壕",
            "無私開倉分發海量儲備戰略物資與附魔裝備",
            "組織千人軍團開展陣型切換與紅石協同演習",
            "吹響誓師號角，決戰一觸即發"
          ],
          "psychology": "「一根木棍輕易折斷，千人同心便能撼動基岩。」",
          "sourceVideos": [
            {
              "id": "HDDxxeh3r-E",
              "title": "I Created the World's Largest Minecraft Army",
              "channel": "ParrotX2",
              "duration": "38:40",
              "thumbnail": "https://i.ytimg.com/vi/HDDxxeh3r-E/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=HDDxxeh3r-E",
              "publishDate": "2026-05-04",
              "formattedDate": "2026 年 5 月 4 日"
            }
          ]
        },
        {
          "id": "parrot_arc_9",
          "title": "第九章：千人大內戰第一階段的盆地決戰",
          "subtitle": "盆地血火大決戰、三重防線肉搏與水流陣反制高爆衝鋒",
          "publishDate": "2026-05-16",
          "formattedDate": "2026 年 5 月 16 日",
          "summary": "陣營矛盾徹底爆發，敵對霸權聯盟傾巢而出，千人大內戰在主城盆地正式打響。敵軍出動了多輛推進式高爆 TNT 戰車企圖強行平推戰壕。Parrot 親臨戰火最前沿，祭出精密的水流緩衝矩陣，在零點幾秒內將呼嘯而至的 TNT 衝擊波全數化解，拔出重劍帶頭發起反衝鋒。",
          "genesis": "陣營矛盾徹底爆發，敵對霸權聯盟傾巢而出，千人內戰在主城盆地正式打響。",
          "conflict": "敵軍出動了多輛推進式高爆 TNT 戰車企圖強行平推戰壕。Parrot 親臨戰火最前沿，祭出精密的水流緩衝矩陣，在零點幾秒內將呼嘯而至的 TNT 衝擊波全數化解。隨後他拔出重劍帶頭發起反衝鋒，在漫天火光中與敵軍王牌主力展開血腥肉搏。",
          "lootAndAnomaly": "Vanguard Battle Standard（自由陣營破陣軍旗）",
          "impact": "第一階段盆地決戰成功頂住了敵方最狂暴的攻勢，重挫敵軍銳氣。",
          "keyPlotPoints": [
            "千人大內戰在主城盆地全面爆發，天地化為焦土火海",
            "敵軍祭出重型推土機式高爆 TNT 衝鋒戰術",
            "極限鋪設多層水流阻絕網，精準抵消敵軍致命爆破",
            "親率敢死隊發起刺刀見紅的正手衝鋒",
            "成功奪取第一道陣地插上破陣軍旗"
          ],
          "psychology": "「站在這道防線身後的，是我們的家園。寸步不退！」",
          "sourceVideos": [
            {
              "id": "bP86n9nFoJY",
              "title": "Unstable SMP: Civil War",
              "channel": "ParrotX2",
              "duration": "45:30",
              "thumbnail": "https://i.ytimg.com/vi/bP86n9nFoJY/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=bP86n9nFoJY",
              "publishDate": "2026-05-16",
              "formattedDate": "2026 年 5 月 16 日"
            }
          ]
        },
        {
          "id": "parrot_arc_10",
          "title": "第十章：千人大內戰總決算與城破終局",
          "subtitle": "城堡最後圍攻戰、斬落敵方統帥與全服停戰條約",
          "publishDate": "2026-06-03",
          "formattedDate": "2026 年 6 月 3 日",
          "summary": "內戰進入最終收尾階段，敵軍殘部退縮至重兵把守的黑曜石主城要塞作最後頑抗。Parrot 指揮志願軍利用軌道大砲與空中鞘翅精準轟擊打開城牆缺口。在中央王座大廳內，Parrot 與敵方總司令展開一對一宿命對決，反手跳劈完成斬首擊殺，接受敵軍投降簽署停戰條約。",
          "genesis": "內戰進入最終收尾階段，敵軍殘部退縮至重兵把守的黑曜石主城要塞作最後頑抗。",
          "conflict": "Parrot 指揮志願軍利用軌道大砲與空中鞘翅精準轟擊打開城牆缺口。在中央王座大廳內，Parrot 與敵方總司令展開一對一宿命對決。在盾牌被破的瞬間，Parrot 憑借極限走位反手跳劈完成斬首擊殺。敵軍全線崩潰投降，內戰至此宣告終結。",
          "lootAndAnomaly": "Treaty of Fallen Empires（停戰殘卷與和平界碑）",
          "impact": "千人大內戰以自由陣營的大獲全勝落幕，宣告舊霸權徹底退場，全服邁入戰後重建期。",
          "keyPlotPoints": [
            "引導遠程重砲精準轟塌敵軍主城最後的黑曜石堡壘",
            "率領精銳突擊隊攻入中央王座大廳",
            "與敵軍統帥展開一對一極限刀法決戰並完成反殺",
            "接受敵方殘軍集體繳械投降",
            "簽署歷史性和平界碑，終結全服內戰"
          ],
          "psychology": "「戰爭沒有贏家，和平才是唯一的勝果。」",
          "sourceVideos": [
            {
              "id": "NT2Is90lFoI",
              "title": "Unstable SMP: Civil War FINALE",
              "channel": "ParrotX2",
              "duration": "50:18",
              "thumbnail": "https://i.ytimg.com/vi/NT2Is90lFoI/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=NT2Is90lFoI",
              "publishDate": "2026-06-03",
              "formattedDate": "2026 年 6 月 3 日"
            }
          ]
        },
        {
          "id": "parrot_arc_11",
          "title": "第十一章：戰後重建與雲端高科技衛城",
          "subtitle": "戰後廢墟雲端起高樓、自動化反重力與極境科技衛城",
          "publishDate": "2026-08-12",
          "formattedDate": "2026 年 8 月 12 日",
          "summary": "內戰平息後，主世界地表滿目瘡痍。Parrot 決心跳出常規地表束縛，開創全服前所未有的雲端科技烏托邦。他運用遠古紅石科技與反重力飛行機械，在雲霄之上搭建了龐大的懸浮群島，布設全自動物資分類系統與立體交通網絡，證明了和平創造的偉大奇蹟。",
          "genesis": "內戰平息後，主世界地表滿目瘡痍。Parrot 決心跳出常規地表束縛，開創全服前所未有的雲端科技烏托邦。",
          "conflict": "Parrot 運用遠古紅石科技與反重力飛行機械，在雲霄之上搭建了龐大的懸浮群島。城中布設了全自動物資分類系統、自癒型護盾與立體交通網絡。這座宏偉工程證明了和平創造的偉大奇蹟。",
          "lootAndAnomaly": "Floating Citadel Core（懸浮衛城反重力核心）",
          "impact": "雲端衛城的建造成為全服科技文明的新標竿，吸引各路建築大師與技術專家匯聚。",
          "keyPlotPoints": [
            "在內戰廢墟之上規劃全服首座懸浮高空現代化科技城市",
            "搭建巨型自動化紅石飛行機械平台與反重力基柱",
            "建立全服最先進的自動化物流與防空防禦體系",
            "開闢平民安置特區，實現繁榮共存",
            "點亮懸浮衛城核心，照亮整座伺服器夜空"
          ],
          "psychology": "「摧毀只需要幾秒鐘，而建造需要無數顆堅毅的心靈。」",
          "sourceVideos": [
            {
              "id": "1EgS0othQe4",
              "title": "I Built Minecraft's Most Advanced Civilization",
              "channel": "ParrotX2",
              "duration": "36:25",
              "thumbnail": "https://i.ytimg.com/vi/1EgS0othQe4/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=1EgS0othQe4",
              "publishDate": "2026-08-12",
              "formattedDate": "2026 年 8 月 12 日"
            }
          ]
        },
        {
          "id": "parrot_arc_12",
          "title": "第十二章：千人極限礦場黑牢社會學實驗",
          "subtitle": "1000 人極限礦場黑牢社會學實驗、資源博弈與地脈崩塌前夕",
          "publishDate": "2026-09-05",
          "formattedDate": "2026 年 9 月 5 日",
          "summary": "為探究極限高壓與物資匱乏環境下的人性秩序，Parrot 主導了一場震撼全服的「1000 人極限礦場黑牢模擬」社會學實驗。牢區內嚴格限制資源，囚徒被編組開採礦石換取配給。在長達數十小時的封閉環境中，Parrot 平息數起武裝暴動，記錄微觀社會演變，卻在結尾偵測到底層代碼異動。",
          "genesis": "為探究極限高壓與物資匱乏環境下的人性秩序，Parrot 發起並主導了一場震撼全服的「1000 人極限礦場黑牢模擬」社會學實驗。",
          "conflict": "牢區內嚴格限制各項資源，囚徒被編組開採礦石換取麵包。在長達數十小時的封閉環境中，幫派暗鬥與密謀越獄層出不窮。Parrot 嚴格監控系統運行，在維持基本秩序的同時觀察微觀社會演變。然而實驗尾聲，地脈深處傳來了未知代碼異動。",
          "lootAndAnomaly": "Warden's Heavy Pickaxe（極限礦牢典獄長重鎬）",
          "impact": "實驗揭示了極限環境下群體心理的脆弱與堅韌，亦為隨後的伺服器底層空間崩潰埋下伏筆。",
          "keyPlotPoints": [
            "規劃並主持 1000 名玩家模擬極限礦場黑牢的巨型實驗",
            "設立嚴密的計件配給制與底層防衛矩陣",
            "平息牢區內部數起激進勢力的武裝暴動與密謀越獄",
            "記錄極限社會組織演變的珍貴第一手數據",
            "在實驗結尾偵測到來自基岩深處的致命代碼共振"
          ],
          "psychology": "「秩序不是天然存在的，它是由無數妥協與原則共同維繫的脆弱天平。」",
          "sourceVideos": [
            {
              "id": "we2dBzQxtgQ",
              "title": "1000 Players Simulate Mining Prison in Minecraft",
              "channel": "ParrotX2",
              "duration": "48:50",
              "thumbnail": "https://i.ytimg.com/vi/we2dBzQxtgQ/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=we2dBzQxtgQ",
              "publishDate": "2026-09-05",
              "formattedDate": "2026 年 9 月 5 日"
            }
          ]
        },
        {
          "id": "parrot_arc_13",
          "title": "第十三章：墜入幽冥深淵與引力奇點大脫逃",
          "subtitle": "墜入無光失落維度、回聲盲跳與穿透引力奇點的大逃脫",
          "publishDate": "2026-09-22",
          "formattedDate": "2026 年 9 月 22 日",
          "summary": "礦場實驗末期突發連鎖崩壞，基岩底層碎裂，Parrot 墜入連日月星辰都不復存在的失落維度「幽冥地底深淵（Underworld）」。深淵中無任何天然光源，火把會被瞬間熄滅。Parrot 依託腳步踩踏方塊的回聲定位懸崖，在碎島間極限盲跳，最後以終界珍珠穿透引力奇點奇蹟殺回主世界。",
          "genesis": "礦場實驗末期突發連鎖崩壞，基岩底層碎裂，Parrot 墜入連日月星辰都不復存在的恐怖失落維度「幽冥地底深淵（Underworld）」。",
          "conflict": "深淵中無任何天然光源，火把會被瞬間熄滅，四周盤踞著無視碰撞箱的代碼畸變異獸。Parrot 依託腳步踩踏方塊的回聲定位懸崖，用僅存的材料製作微光共振儀，在碎島間極限盲跳。在追獵者逼近的最後一刻，他以終界珍珠穿透引力通道奇蹟殺回主世界。",
          "lootAndAnomaly": "Underworld Void Catalyst（幽冥虛空催化石）",
          "impact": "證實了主世界之下存在著被刪除的失落維度，伺服器正式邁入維度爭霸新紀元。",
          "keyPlotPoints": [
            "遭遇伺服器底層代碼大崩潰，墜入漆黑恐怖的幽冥地底深淵",
            "在所有光源熄滅的絕境中，發明腳步回聲定位法辨識懸崖路徑",
            "躲避無形代碼畸變異獸的連環圍堵追獵",
            "在遠古遺跡頂端精準投擲終界珍珠穿透引力奇點",
            "攜帶幽冥虛空催化石震撼重返陽間"
          ],
          "psychology": "「深淵並不可怕，可怕的是在黑暗中放棄尋找光源的心。」",
          "sourceVideos": [
            {
              "id": "BWmWZTDxFrk",
              "title": "Escaping the Minecraft Underworld",
              "channel": "ParrotX2",
              "duration": "41:15",
              "thumbnail": "https://i.ytimg.com/vi/BWmWZTDxFrk/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=BWmWZTDxFrk",
              "publishDate": "2026-09-22",
              "formattedDate": "2026 年 9 月 22 日"
            }
          ]
        },
        {
          "id": "parrot_arc_14",
          "title": "第十四章：Spoke 終界黑牢、角鬥場生死試煉與密碼門大突破",
          "subtitle": "被俘押入 Spoke 終界黑牢、角鬥場生死試煉與 20 小時密碼門大突破",
          "publishDate": "2026-10-15",
          "formattedDate": "2026 年 10 月 15 日",
          "summary": "逃離幽冥深淵的 Parrot 遭 NULL 重兵伏擊被捕，押入 Spoke 在終界虛空親手打造的千人心理煉獄「End Prison」。Parrot 在角鬥場中空手格擋反殺敵意刺客，重逢舊友 MinuteTech 展開極限戰技與跑酷特訓。兩人耗費整整 20 餘小時破譯機關密碼門，推開防爆閘門直面守門冠軍 X！",
          "genesis": "逃離幽冥深淵的 Parrot 遭 NULL 重兵伏擊被捕，押入 Spoke 在終界虛空親手打造的千人心理煉獄「End Prison」。1000 名編號囚犯在角鬥場中被迫廝殺。",
          "conflict": "Parrot 在擂台中空手格擋反殺敵意刺客，隨後奇蹟重逢舊友 MinuteTech 展開極限戰技與跑酷特訓。兩人耗費整整 20 餘小時破譯了極度複雜的機關密碼門，最終推開防爆閘門直面黑牢守門冠軍 X，宿命大戰未完待續！",
          "lootAndAnomaly": "End Purgatory Key & Cipher Slate（終界煉獄密鑰與解密石板）",
          "impact": "終界千人黑牢的爆發徹底揭開了 Unstable SMP 最新維度篇章，終界維度的反抗戰火全面點燃！",
          "keyPlotPoints": [
            "遭 NULL 重裝伏擊被捕，押入 Spoke 建造的終界千人黑曜石煉獄",
            "在角鬥場死鬥制度下，空手格擋反殺惡意刺客名震牢區",
            "奇蹟重逢 MinuteTech，接受高強度極限戰技與跑酷特訓",
            "連續推演超過 20 小時，成功破譯深層機關密碼門",
            "推開防爆大門闖入最終殿堂，正面迎戰黑牢守門冠軍「X」"
          ],
          "psychology": "「Spoke 想用這座黑牢重現他心中的煉獄，但他忘了，高牆只能關住怯懦，關不住對自由的渴望。」",
          "sourceVideos": [
            {
              "id": "9-j9GWjyWpY",
              "title": "1000 Players Simulate End Prison in Minecraft",
              "channel": "ParrotX2",
              "duration": "1:12:54",
              "thumbnail": "https://i.ytimg.com/vi/9-j9GWjyWpY/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=9-j9GWjyWpY",
              "publishDate": "2026-10-15",
              "formattedDate": "2026 年 10 月 15 日"
            }
          ]
        }
      ],
      "unexpectedItems": [
        {
          "name": "Parrot's Spyglass（靈魂觀測望遠鏡）",
          "rarity": "MYTHIC",
          "rarityColor": "#e0e7ff",
          "howAcquired": "在調查禁忌迷霧時，由神秘盟友 Wifies 秘密移交。據稱鏡片內部折射著舊世界的虛空殘渣。",
          "effectDesc": "不僅能大幅拉近視野，還能穿透一般的匿蹤迷霧與假名牌偽裝，成為 Parrot 破譯無數陰謀的標誌性信物。",
          "glitchCode": "NBT: {UnstableTag: 'SoulLens_01', PenetrateStealth: true, Lore: ['It sees what should not exist.']}"
        },
        {
          "name": "World Destroyer Button（世界毀滅紅石按鈕）",
          "rarity": "ANOMALY",
          "rarityColor": "#ef4444",
          "howAcquired": "在荒漠地下未命名遺跡的祭壇核心挖掘出土，按下會引發周圍 16 個區塊的封包丟失與伺服器震盪。",
          "effectDesc": "象徵著隨時能將一切歸零的終極威脅，Parrot 數次在被逼入絕境時以它作為最後的博弈籌碼。",
          "glitchCode": "NBT: {ServerEvent: 'Packet_Overload', DestructiveRadius: 256, BannedItem: true}"
        },
        {
          "name": "Smuggled Paragon Shulker（Paragon 禁忌走私界伏盒）",
          "rarity": "BANNED",
          "rarityColor": "#a855f7",
          "howAcquired": "在 Paragon 監獄最深層的看守長密室中，利用視線盲區以活塞位移偷運出來的未註冊黑箱。",
          "effectDesc": "內部裝滿了受管制的穿牆紫頌果、最高等級隱形藥水以及一把被磨平代碼序列的逃脫鎬。",
          "glitchCode": "NBT: {Contraband: true, SecurityLevel: 'OMEGA', Origin: 'Paragon_Cell_00'}"
        },
        {
          "name": "The Sovereign Scepter（Unstable 國王權杖與冠冕）",
          "rarity": "ROYAL",
          "rarityColor": "#facc15",
          "howAcquired": "在全服公開選民大會獲勝登基時加冕，由初代管理者遺留的法典金錠鍛造而成。",
          "effectDesc": "擁有在全伺服器公頻發佈最高等級通緝令、指派禁衛軍以及調動國庫儲備的合法權能。",
          "glitchCode": "NBT: {Role: 'Monarch', Realm: 'Unstable_SMP', BroadcastPermission: true}"
        },
        {
          "name": "Null Code Compass（虛空異常代碼羅盤）",
          "rarity": "GLITCHED",
          "rarityColor": "#06b6d4",
          "howAcquired": "在追蹤不存在的失蹤文明時，羅盤指針意外脫離磁極，瘋狂指向世界底層基岩下方的亂碼座標。",
          "effectDesc": "能夠感應伺服器中代碼異常擾動的區域，提前預警獵人或地下勢力的逼近。",
          "glitchCode": "NBT: {Target: 'NULL_ENTITY', LodestoneTrack: false, AnomalyFreq: 404}"
        }
      ],
      "videos": [
        {
          "id": "soYelcGVPac",
          "title": "This Button Destroys the World",
          "titleZh": "這顆按鈕能毀滅整個世界",
          "duration": "28:45",
          "thumbnail": "https://i.ytimg.com/vi/soYelcGVPac/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=soYelcGVPac",
          "summary": "故事的偉大起點！Parrot 在極遠荒野邊境探勘時，意外挖穿一座被古代封印的地下紅石密室。在密室中央矗立著一枚直接綁定伺服器指令、能一鍵重置全服存檔與崩潰區塊的禁斷按鈕。本集完整記錄了 Parrot 面對毀滅世界的終極誘惑時的內心掙扎，以及他如何以精妙微操拆解機關並將其轉化為護界神兵的傳奇開端。",
          "unexpectedLoot": "World Destroyer Button（世界毀滅按鈕）",
          "keyMoments": [
            "在座標 X:48200 荒原探測到異常區塊抖動並開鑿地下豎井",
            "在黑暗迷宮中冷靜拆解連鎖高爆 TNT 與滯留藥水陷阱",
            "在敵對追蹤軍團破門前夕外科手術般剝離按鈕並隱匿撤離"
          ],
          "publishDate": "2024-04-27",
          "formattedDate": "2024 年 4 月 27 日"
        },
        {
          "id": "6dtNsa-MGs8",
          "title": "I Broke into Minecraft's Most Secure Prison",
          "titleZh": "我闖入了 Minecraft 最森嚴的 Paragon 黑牢",
          "duration": "35:12",
          "thumbnail": "https://i.ytimg.com/vi/6dtNsa-MGs8/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=6dtNsa-MGs8",
          "summary": "震撼全宇宙的越獄史詩！遭背叛被俘的 Parrot 被投入深海黑牢 Paragon。在深海長老永久挖掘疲勞與多重浸水黑曜石的絕境下，Parrot 運用驚人心算推算出伺服器端儲存資料時的 1.2 秒卡頓延遲，成功走私紫頌果穿牆脫逃，並帶出了揭露黑牢走私名冊的禁忌界伏盒。",
          "unexpectedLoot": "Smuggled Paragon Shulker（Paragon 禁忌走私界伏盒）",
          "keyMoments": [
            "在牢房地板夾層利用漏斗微弱傳輸縫隙藏匿走私紫頌果",
            "摸清深海長老雷射巡邏規律與伺服器端存檔延遲節奏",
            "雷雨之夜短路牢區電網，藉紫頌果穿透基岩天井躍入怒海"
          ],
          "publishDate": "2024-06-08",
          "formattedDate": "2024 年 6 月 8 日"
        },
        {
          "id": "VSI12NnAnAY",
          "title": "I Got Hunted by Minecraft's Deadliest Players",
          "titleZh": "我遭到全伺服器最致命的賞金獵人追殺",
          "duration": "31:40",
          "thumbnail": "https://i.ytimg.com/vi/VSI12NnAnAY/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=VSI12NnAnAY",
          "summary": "越獄之後全服發布了對 Parrot 的巨額懸賞令，數十名頂級武裝獵人手持定位指南針跨地圖圍剿。Parrot 在雪原與峽谷中展開教科書級的游擊反殺，巧妙利用靈魂觀測望遠鏡偵測獵人視野盲區，藉地形落差與預設紅石絆線陷阱全殲追兵。",
          "unexpectedLoot": "Parrot's Spyglass（靈魂觀測望遠鏡）",
          "keyMoments": [
            "在雪山峽谷中以一敵眾利用陡峭地勢卡死追兵射界",
            "透過靈魂觀測望遠鏡洞悉數百格外的伏擊部隊動向",
            "啟動山洞預埋陷阱引發雪崩活埋獵人主力"
          ],
          "publishDate": "2024-06-29",
          "formattedDate": "2024 年 6 月 29 日"
        },
        {
          "id": "2WusTNLmBpE",
          "title": "I Became King of the Unstable SMP",
          "titleZh": "我登基成為 Unstable SMP 的第一任國王",
          "duration": "33:20",
          "thumbnail": "https://i.ytimg.com/vi/2WusTNLmBpE/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=2WusTNLmBpE",
          "summary": "伺服器無序混亂催生文明渴望。Parrot 順應民意參選國王，黑手黨家族在造勢廣場派遣隱形刺客發動致命狙擊。Parrot 在演講台上反手重弩盲射絕殺刺客，以 89% 歷史得票率登基加冕，高舉國王權杖宣告秩序時代降臨！",
          "unexpectedLoot": "The Sovereign Scepter（國王權杖）",
          "keyMoments": [
            "在千人演說台上敏銳察覺空中隱形藥水殘滴異象",
            "以穿透 V 重弩隔空射穿鐘樓木樑爆頭隱形刺客",
            "在全服萬眾矚目下接過國王權杖正式登基宣誓"
          ],
          "publishDate": "2026-02-10",
          "formattedDate": "2026 年 2 月 10 日"
        },
        {
          "id": "TphfLyzVbqQ",
          "title": "100 Days as King of the Unstable SMP",
          "titleZh": "在 Unstable SMP 擔任國王的極限統治紀實",
          "duration": "42:15",
          "thumbnail": "https://i.ytimg.com/vi/TphfLyzVbqQ/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=TphfLyzVbqQ",
          "summary": "登基之後的統治風暴！Parrot 面對國庫空虛、黑手黨殘黨反撲與內部大臣貪腐的重重危機，推行《和平治安法典》，建立皇家守衛團，並在中央主城興建起壯麗的白色大理石王宮，完整記錄了其宏大而艱辛的治國歷程。",
          "unexpectedLoot": "Royal Peace Accord Seal（皇家治安法典金印）",
          "keyMoments": [
            "破獲王國內部大臣勾結黑市洗錢的重大貪腐窩案",
            "平定南部邊境武裝匪幫暴動並建立全服巡邏防線",
            "主城中央大理石議會大廈與公共圖書館正式竣工"
          ],
          "publishDate": "2026-02-28",
          "formattedDate": "2026 年 2 月 28 日"
        },
        {
          "id": "zMoihcFz2kY",
          "title": "I Exposed a Corrupt Minecraft Civilization",
          "titleZh": "我揭發了一個虛偽腐敗的超級文明",
          "duration": "29:50",
          "thumbnail": "https://i.ytimg.com/vi/zMoihcFz2kY/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=zMoihcFz2kY",
          "summary": "Parrot 深入調查邊境人口失蹤案，撕開了號稱『慈善烏托邦』的白金文明假面具。他在其地下數十層基岩中發現了數百名被奴役的玩家與違規複製工廠，並冒死將現場錄像在全服廣播公頻發布，點燃了正義復仇的導火線。",
          "unexpectedLoot": "Corrupt Ledger of Utopia（烏托邦血色黑帳）",
          "keyMoments": [
            "喬裝成流浪工匠混入白金要塞地下機密管區",
            "親眼目睹數百名平民被強制勞作的地下奴役地獄",
            "破解終端控制台並向全服公頻廣播地下實況錄像"
          ],
          "publishDate": "2026-03-19",
          "formattedDate": "2026 年 3 月 19 日"
        },
        {
          "id": "O-ipuD6qy1Q",
          "title": "Searching for a Civilization that Doesn't Exist",
          "titleZh": "尋找一個不存在於地圖上的神秘失落文明",
          "duration": "34:05",
          "thumbnail": "https://i.ytimg.com/vi/O-ipuD6qy1Q/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=O-ipuD6qy1Q",
          "summary": "循著遠古代碼石板的指引，Parrot 踏上了探尋伺服器遠古文明的壯麗冒險。在跨越極端地形與虛空邊界後，他發現了一處被伺服器地圖渲染引擎遺忘的浮空遺蹟，解開了 Unstable SMP 世界創生時期的重大秘密。",
          "unexpectedLoot": "Null Code Compass（虛空代碼羅盤）",
          "keyMoments": [
            "利用鞘翅穿過世界邊界迷霧覆蓋的未載入區塊",
            "解開懸浮空島古代方塊排列的神廟機關密碼門",
            "在祭壇深處取得永恆指向代碼源頭的虛空羅盤"
          ],
          "publishDate": "2026-04-14",
          "formattedDate": "2026 年 4 月 14 日"
        },
        {
          "id": "HDDxxeh3r-E",
          "title": "I Created the World's Largest Minecraft Army",
          "titleZh": "我組建了 Minecraft 史上最龐大的玩家軍團",
          "duration": "38:40",
          "thumbnail": "https://i.ytimg.com/vi/HDDxxeh3r-E/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=HDDxxeh3r-E",
          "summary": "內戰一觸即發，面對敵對聯盟的數千僱傭軍，Parrot 號召全服平民散戶與友好公會團結自救。他建立全自動化軍械庫，夜以繼日為千名士兵鍛造滿級獄髓裝備與高爆箭矢，組建起 Unstable 史上規模最龐大的自由軍團！",
          "unexpectedLoot": "Standard-Issue Vanguard Netherite Kit（先鋒全套獄髓軍備）",
          "keyMoments": [
            "動員全體工匠在地下建造全自動化鐵砧附魔軍工廠",
            "在荒原大平原舉行千名士兵的方陣合練與戰術推演",
            "發表誓師動員演講，全軍高呼保衛自由直指戰場"
          ],
          "publishDate": "2026-05-04",
          "formattedDate": "2026 年 5 月 4 日"
        },
        {
          "id": "bP86n9nFoJY",
          "title": "Unstable SMP: Civil War",
          "titleZh": "Unstable SMP：千人大內戰全面爆發",
          "duration": "45:30",
          "thumbnail": "https://i.ytimg.com/vi/bP86n9nFoJY/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=bP86n9nFoJY",
          "summary": "全服規模最壯烈的歷史大決戰前篇！兩千餘名全副武裝的玩家在中央主城盆地正面對撼。戰火漫天、巨砲轟鳴，Parrot 與盟友 Wemmbu、Spoke 協同作戰，在前線以堅壁清野的戰術抵禦敵方裝甲洪流的第一波猛攻。",
          "unexpectedLoot": "War-Torn Battle Standard（烽火戰旗標誌）",
          "keyMoments": [
            "敵軍以數百門軌道砲同時轟鳴發起毀滅性衝鋒",
            "Parrot 啟動防禦陣地水流反制系統化解敵軍炸藥波次",
            "與 Wemmbu 突擊部隊在盆地中央壕溝完成關鍵會師"
          ],
          "publishDate": "2026-05-16",
          "formattedDate": "2026 年 5 月 16 日"
        },
        {
          "id": "NT2Is90lFoI",
          "title": "Unstable SMP: Civil War FINALE",
          "titleZh": "Unstable SMP：內戰總決戰（Civil War FINALE）",
          "duration": "50:18",
          "thumbnail": "https://i.ytimg.com/vi/NT2Is90lFoI/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=NT2Is90lFoI",
          "summary": "千人大內戰的史詩終局！在戰事陷入慘烈膠著之際，Parrot 身先士卒拔出佩劍，率領敢死隊親自鑿穿敵軍三道核心防線。敵方白金城塞在聯軍的怒火中崩塌，腐敗軍閥徹底瓦解，三巨頭共同登頂宣告世界重歸和平！",
          "unexpectedLoot": "Fallen Overlord's Broken Helm（覆滅軍閥的碎裂頭盔）",
          "keyMoments": [
            "手持戰旗親冒箭雨帶領重步兵方陣發起總反攻衝鋒",
            "親手斬殺敵軍負隅頑抗的最後三名精銳侍衛官",
            "在燃燒的敵軍要塞頂峰升起自由聯盟的勝利旗幟"
          ],
          "publishDate": "2026-06-03",
          "formattedDate": "2026 年 6 月 3 日"
        },
        {
          "id": "1EgS0othQe4",
          "title": "I Built Minecraft's Most Advanced Civilization",
          "titleZh": "我在戰後廢墟打造了最先進的高科技文明",
          "duration": "36:25",
          "thumbnail": "https://i.ytimg.com/vi/1EgS0othQe4/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=1EgS0othQe4",
          "summary": "戰後重建新紀元！Parrot 引領流離失所的平民利用戰利品與高階紅石技術，在荒原拔地建造了一座懸浮於雲端之上的高科技現代城邦。全自動垂直物流、光速珍珠飛行通道與安全屏障網，樹立了全服文明建設的至高標竿。",
          "unexpectedLoot": "Quantum Redstone Conduit Core（量子紅石傳導核心）",
          "keyMoments": [
            "設計並落成貫通天地兩界的超高速水流珍珠推進軌道",
            "架設全服最龐大的自動化物資分類與物流傳輸網絡",
            "懸浮水晶宮殿落成，各路流浪玩家紛紛遷入定居"
          ],
          "publishDate": "2026-08-12",
          "formattedDate": "2026 年 8 月 12 日"
        },
        {
          "id": "we2dBzQxtgQ",
          "title": "1000 Players Simulate Mining Prison in Minecraft",
          "titleZh": "1000 名玩家在極限黑牢礦場模擬生存",
          "duration": "48:50",
          "thumbnail": "https://i.ytimg.com/vi/we2dBzQxtgQ/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=we2dBzQxtgQ",
          "summary": "極具社會學深度的震撼實驗！Parrot 構建了一座全封閉的地下基岩礦場監獄，召集 1000 名志願玩家在極度匱乏的物資與森嚴的階級制度下生存。從幫派割據、黑市物資走私到全監獄大規模武裝暴動，呈現了人性在極限壓迫下的真實演變。",
          "unexpectedLoot": "Prison Warden's Heavy Iron Baton（典獄長精鋼警棍）",
          "keyMoments": [
            "1000 名囚犯被分配至三層封閉礦坑展開高強度作業",
            "地下囚犯秘密結盟，利用私藏鐵塊打造出成套精鋼盔甲",
            "午夜時分暴動全面爆發，千人砸破鐵閘佔領中央典獄台"
          ],
          "publishDate": "2026-09-05",
          "formattedDate": "2026 年 9 月 5 日"
        },
        {
          "id": "BWmWZTDxFrk",
          "title": "Escaping the Minecraft Underworld",
          "titleZh": "逃離 Minecraft 幽冥地底深淵（最新熱播中！）",
          "duration": "41:15",
          "thumbnail": "https://i.ytimg.com/vi/BWmWZTDxFrk/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=BWmWZTDxFrk",
          "summary": "2026 年最新主線史詩！黑牢實驗誘發地脈崩塌，Parrot 墜入連基岩都不復存在的失落維度『幽冥地底深淵』。在無光源的絕對死局與未知畸變實體的圍獵下，Parrot 憑藉驚人毅力利用回聲定位與極限珍珠盲投殺出深淵，戰火未完待續！",
          "unexpectedLoot": "Underworld Void Catalyst（幽冥虛空催化石）",
          "keyMoments": [
            "地面基岩瞬間碎裂，整座礦場失重墜入無底虛空裂隙",
            "在光源熄滅的漆黑深淵中憑腳步回聲盲跳踩踏浮島",
            "在異獸圍攻的千鈞一髮之際投擲終界珍珠穿透引力奇點回歸主世界"
          ],
          "publishDate": "2026-09-22",
          "formattedDate": "2026 年 9 月 22 日"
        },
        {
          "id": "9-j9GWjyWpY",
          "title": "1000 Players Simulate End Prison in Minecraft",
          "titleZh": "1000 名玩家在終界黑牢模擬殘酷生存",
          "duration": "1:12:54",
          "thumbnail": "https://i.ytimg.com/vi/9-j9GWjyWpY/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=9-j9GWjyWpY",
          "summary": "逃離幽冥深淵後，Parrot 遭未知勢力 NULL 捕獲押入深處於終界維度的黑曜石萬人煉獄。這座由 Spoke 親手打造的心理煉獄關押了 1000 名編號囚犯，每日以角鬥場殘酷死鬥汰除弱者。Parrot 在生死擂台中力克刺客，奇蹟般重逢盟友 MinuteTech 展開極限戰技特訓，耗費 20 餘小時破解機關密碼門，最終直面終界守護者 X 打響震撼全服的宿命決戰。",
          "unexpectedLoot": "End Purgatory Key & Cipher Slate（終界煉獄密鑰與解密石板）",
          "publishDate": "2026-10-15",
          "formattedDate": "2026 年 10 月 15 日"
        }
      ],
      "channel": "ParrotX2",
      "channelUrl": "https://www.youtube.com/@ParrotX2"
    },
    "wemmbu": {
      "id": "wemmbu",
      "name": "Wemmbu",
      "realHandle": "Wemmbu",
      "roleTitle": "神級戰力泰坦 · 禁忌金庫掠奪者 · 帝國文明統治者",
      "tagline": "「規則是弱者為自保而制定的，而強者直接重構整個文明。」",
      "themeColor": "#f59e0b",
      "accentGlow": "rgba(245, 158, 11, 0.4)",
      "badge": "MIGHT & WEALTH",
      "avatar": "assets/avatars/wemmbu.jpg",
      "skinBody": "assets/skins/wemmbu_3d.png",
      "appearance": {
        "summary": "一頭俐落黑髮，頭頂配戴暗紫色龍角/惡魔雙角與精緻銀紫王冠（Tiara），身披暗色戰袍，霸氣十足。",
        "features": [
          "標誌性特徵：頭部兩側高聳的暗紫色龍角 / 惡魔尖角",
          "專屬頭飾：象徵至高統治權限的銀紫色細緻王冠（Tiara）",
          "服裝風格：深色高階獄髓戰甲與長袍，散發令人窒息的壓迫感",
          "現實說明：Wemmbu 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方頻道當前最新使用之標誌性頭冠形象照"
        ]
      },
      "stats": {
        "intellect": 88,
        "strategy": 92,
        "pvpCombat": 97,
        "influence": 94,
        "stealth": 79
      },
      "personality": "霸氣外露、擁有壓倒性實力與財富野心的霸主。他對弱者的哀鳴無動於衷，卻對出生入死的夥伴（如 Eggchan）有著至死不渝的承諾。只要認定目標，連神級金庫與整個伺服器都無法阻擋他的鐵蹄。",
      "biography": "Wemmbu 是 Unstable SMP 世界中象徵「絕對霸權與財富力量」的頂點人物。從隻身強行突破全服公認無法攻破的「非法基岩保險庫」開始，他就成為了全服懸賞金最高的通緝犯。\n\n他不屑於小打小鬧，而是直接在極限硬核環境下建立起號稱最繁盛的鋼鐵帝國；面對老牌勁旅 PrinceZam 帝國的宣戰，他以碾壓般的戰術摧毀了對方的整座都城。在經歷了無數背叛與黑手黨的暗算後，Wemmbu 更是做出了「親手摧毀 Unstable SMP」以終結腐敗輪迴的極端抉擇。",
      "storyArcs": [
        {
          "id": "wemmbu_arc_1",
          "title": "第一章：突破全服最非法禁忌地下金庫",
          "subtitle": "深埋基岩層的非法黑資產庫、紅石密碼暗門與神話熔爐之刃",
          "publishDate": "2024-05-04",
          "formattedDate": "2024 年 5 月 4 日",
          "summary": "作為 Unstable SMP 公認的單挑戰神與戰術奇才，Wemmbu 鎖定了伺服器最神秘的一座非法黑金庫。該金庫隱藏在基岩層之下，由複合密碼暗門與滯留毒藥陷阱死守。Wemmbu 憑藉極限微操與精確到毫秒的時間差計算，強行破譯防爆外殼，斬獲傳說中的『熔爐與棋局之刃』，奠定了他作為全服最危險獨立掠奪者的地位。",
          "genesis": "全服各路大工會暗中在負 Y 軸基岩邊界私設未受監管的地下黑金庫，囤積大量透過漏洞洗出的頂級軍備。Wemmbu 透過探針偵測到了高頻紅石訊號，鎖定該處。",
          "conflict": "金庫入口布設了多重連續重置密碼門與溺斃陷阱。Wemmbu 運用精妙的水流與鐵砧重壓，在警報器觸發倒計時歸零前最後一秒斬斷主電路，在重重黑曜石阻隔中硬生生鑿出脫逃通道。",
          "lootAndAnomaly": "The Crucible & Gambit（熔爐與棋局之刃）",
          "impact": "大工會的非法資金庫被神不知鬼不覺洗劫一空，引發黑市震撼，全服開始流傳 Wemmbu 的神出鬼沒傳說。",
          "keyPlotPoints": [
            "探測到底層基岩座標處的高頻紅石訊號，鎖定非法黑金庫",
            "在窒息陷阱與毒藥噴霧中冷靜破解多位數密碼暗門",
            "於警報引爆前最後一秒破壞自毀系統",
            "繳獲傳說中的至尊近戰重兵『熔爐與棋局之刃』",
            "全身而退，引發全服地下金融體系震盪"
          ],
          "psychology": "「規則是弱者用來互相束縛的枷鎖，而我是撕裂枷鎖的刀刃。」",
          "sourceVideos": [
            {
              "id": "s4Qm81fKfyk",
              "title": "Breaking Into Minecraft's Most Illegal Vault",
              "channel": "Wemmbu",
              "duration": "26:30",
              "thumbnail": "https://i.ytimg.com/vi/s4Qm81fKfyk/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=s4Qm81fKfyk",
              "publishDate": "2024-05-04",
              "formattedDate": "2024 年 5 月 4 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_2",
          "title": "第二章：絕境獵殺！不可能被捕獲的孤影戰神",
          "subtitle": "獵王之誓、四面楚歌下的虛空走位與極限反殺賞金獵人部隊",
          "publishDate": "2024-05-25",
          "formattedDate": "2024 年 5 月 25 日",
          "summary": "因洗劫地下金庫，全服開出了前所未有的天價懸賞。五名身穿滿附魔獄髓套裝、手持神級重弩的頂尖賞金獵人對 Wemmbu 展開了長達數千格的地毯式圍剿。Wemmbu 在險峻峽谷中展現了令人窒息的 PVP 走位，利用地形高度差與滯留藥水逐一擊破追兵，反殺敵方頭領，斬獲獵王之誓獄髓顱骨。",
          "genesis": "地下金庫幕後金主聯合懸賞公會，組織了一支由退役職業高手組成的終極獵殺部隊，號稱『絕對無人生還』。",
          "conflict": "追捕戰跨越沼澤與高山峽谷。面對漫天投擲型傷害藥水與重弩穿透壓制，Wemmbu 毫無懼色，利用極限跳劈、盾牌彈反與瞬時搭路將獵人隊形強行撕裂，在一對多劣勢下連續完成四次極限反殺。",
          "lootAndAnomaly": "Apex Predator's Trophy（獵王之誓獄髓顱骨）",
          "impact": "證明了在 Unstable SMP 的無情荒野中，再龐大的獵人組織也無法抗衡極致的個人戰技與冷靜心態。",
          "keyPlotPoints": [
            "在峽谷平原遭遇五名滿配賞金獵人精銳合圍",
            "在藥水雨中以極限反手跳劈秒殺敵方先鋒重弩手",
            "利用懸崖地形打出致命摔落擊殺，粉碎敵軍包夾陣型",
            "正面擊潰獵人隊長並剝離其獄髓防具",
            "斬獲獵王之誓象徵物，確立全服最強單兵神話"
          ],
          "psychology": "「他們以為自己是獵人，直到我拔劍的那一刻，他們才明白誰才是真正的獵物。」",
          "sourceVideos": [
            {
              "id": "o8ocybrrdfw",
              "title": "It's Impossible to Catch this Player",
              "channel": "Wemmbu",
              "duration": "29:10",
              "thumbnail": "https://i.ytimg.com/vi/o8ocybrrdfw/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=o8ocybrrdfw",
              "publishDate": "2024-05-25",
              "formattedDate": "2024 年 5 月 25 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_3",
          "title": "第三章：鋼鐵雄心！締造全服最強不可摧毀文明",
          "subtitle": "築起堅不可摧的鋼鐵要塞、自動化軍備生產線與大帝國基石",
          "publishDate": "2024-06-15",
          "formattedDate": "2024 年 6 月 15 日",
          "summary": "厭倦了四處流亡與無休止的暗殺，Wemmbu 決定以一己之力創建一個無人敢犯的巨型軍事帝國。他在險要平原建立起覆蓋數百區塊的鋼鐵要塞，搭建了全自動獄髓鍛造工廠與防空防爆護盾，吸引了無數流民前來依附，奠定了一代強權的霸業根基。",
          "genesis": "無政府狀態下的無休止殺戮讓 Wemmbu 意識到，只有絕對的力量才能帶來真正的安寧。他拿出所有掠奪累積的戰略資產，開啟建國大計。",
          "conflict": "敵對工會在要塞奠基之初發動了數十次破壞性襲擊。Wemmbu 頂住壓力，白天親自率隊禦敵，夜晚規劃高難度自動化紅石流水線，硬是在戰火中築起了厚達三重黑曜石的無敵防線。",
          "lootAndAnomaly": "Architect's Master Blueprint（鋼鐵文明總工程圖）",
          "impact": "一個以鐵血紀律與頂級軍備著稱的新興超級文明拔地而起，徹底改變了伺服器原本由黑手黨壟斷的權力格局。",
          "keyPlotPoints": [
            "選定戰略樞紐高地，規劃覆蓋數百區塊的鋼鐵衛城",
            "在敵軍連續騷擾下堅持完成全自動軍備流水線建造",
            "建立全服首創的自癒型紅石防禦護城河",
            "向全服平民發布庇護法令，收編上百名優秀工匠",
            "繪製出象徵帝國基石的《鋼鐵文明總工程圖》"
          ],
          "psychology": "「和平不是乞求來的，而是用黑曜石要塞與無盡的利刃鑄造出來的。」",
          "sourceVideos": [
            {
              "id": "wbTIN42an0o",
              "title": "I Created Minecraft's Greatest Civilization",
              "channel": "Wemmbu",
              "duration": "33:45",
              "thumbnail": "https://i.ytimg.com/vi/wbTIN42an0o/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=wbTIN42an0o",
              "publishDate": "2024-06-15",
              "formattedDate": "2024 年 6 月 15 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_4",
          "title": "第四章：為什麼我親手毀滅了 Unstable SMP 舊主城",
          "subtitle": "舊體制腐化、全服主城大爆破與親手點燃虛空重置導火線",
          "publishDate": "2024-07-08",
          "formattedDate": "2024 年 7 月 8 日",
          "summary": "伺服器舊主城逐漸被腐敗的權貴階層佔據，資源被徹底壟斷，新人玩家淪為奴隸。在看透舊體制的不可救藥後，Wemmbu 作出了一個令全服震驚的決定：他親手引爆了埋設在舊主城地底的海量高爆 TNT，徹底夷平象徵虛偽繁榮的舊主城，強迫全服歷史步入重置與新生。",
          "genesis": "舊主城議會被黑金財閥把持，發布多項剝削性苛捐雜稅，甚至私設秘密監獄殘害異己。Wemmbu 決心摧毀這座腐朽的溫床。",
          "conflict": "Wemmbu 耗時數週在主城地脈深處暗中鋪設了綿延數千格的紅石導線與巨量高爆 TNT。在被議會巡邏隊察覺的生死關頭，Wemmbu 在公頻發表了震撼全服的滅世宣言，毅然按下了遠程引爆終端，火光沖天，舊城化為焦土。",
          "lootAndAnomaly": "Annihilation Remote Detonator（虛空重置引爆終端）",
          "impact": "舊主城的灰飛煙滅宣告了舊統治階級的徹底退場，Unstable SMP 正式進入群雄割據的戰國時代。",
          "keyPlotPoints": [
            "暗中潛入舊主城地底，完成龐大爆破紅石網絡的鋪設",
            "面對議會衛隊的包圍，臨危不亂堅守引爆中樞",
            "在全服公頻播發歷史性檄文，宣告舊時代的終結",
            "按下引爆終端，將腐朽的舊體制主城化作萬丈焦土",
            "帶領麾下精銳撤回鋼鐵要塞，開啟新紀元"
          ],
          "psychology": "「有些枯樹早已從根部腐爛，唯有烈火將其燒成灰燼，這片焦土才能開出新的花朵。」",
          "sourceVideos": [
            {
              "id": "_qc8ZF2KyeQ",
              "title": "Why I Destroyed the Unstable SMP",
              "channel": "Wemmbu",
              "duration": "38:20",
              "thumbnail": "https://i.ytimg.com/vi/_qc8ZF2KyeQ/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=_qc8ZF2KyeQ",
              "publishDate": "2024-07-08",
              "formattedDate": "2024 年 7 月 8 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_5",
          "title": "第五章：蒼穹奇觀！探勘失落的天空高空文明",
          "subtitle": "雲層之上的失落天空城、風暴祭壇與蒼穹皇者鞘翅核心",
          "publishDate": "2024-10-30",
          "formattedDate": "2024 年 10 月 30 日",
          "summary": "在舊主城覆滅後的混亂期，Wemmbu 駕馭鞘翅巡視高空，意外穿透厚重雷暴雲層，在 Y: 320 高度發掘了一座懸浮於空中的古代天空神殿。他在神殿中擊敗了守護神獸，獲得了能極大延長滑翔動力並無視雷擊的『蒼穹皇者鞘翅核心』，為日後的跨維度作戰奠定了空中制霸權。",
          "genesis": "伺服器高空一直被視為建築極限與荒蕪之地，然而遠古代碼中殘留著關於『天空神壇』的破碎傳說。Wemmbu 決心衝破極限一探究竟。",
          "conflict": "高空狂風與稀薄空氣帶來持續減速 Debuff，神殿外圍更有由烈焰使者與幻術師組成的守衛陣法。Wemmbu 憑藉超凡的鞘翅滑翔微操，在浮島裂隙間穿梭狙擊，最終破壞祭壇水晶奪取核心。",
          "lootAndAnomaly": "Skybound Sovereign Elytra Core（蒼穹皇者鞘翅核心）",
          "impact": "揭開了伺服器隱藏的天空維度遺跡，空戰戰術自此成為各大陣營角逐的新維度。",
          "keyPlotPoints": [
            "駕駛鞘翅突破 Y: 320 雲層風暴極限，發現懸浮神殿群",
            "在暴風雨與高空幻術師圍攻下完成精準凌空狙殺",
            "破譯風暴祭壇的遠古紅石引導機關",
            "奪取蘊含無盡動能的蒼穹皇者鞘翅核心",
            "開創全服三維立體高空俯衝戰術"
          ],
          "psychology": "「大地是凡人的戰場，而天空是屬於雄鷹的王座。」",
          "sourceVideos": [
            {
              "id": "haxHwlvEN5g",
              "title": "I Discovered a Minecraft Sky Civilization",
              "channel": "Wemmbu",
              "duration": "31:05",
              "thumbnail": "https://i.ytimg.com/vi/haxHwlvEN5g/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=haxHwlvEN5g",
              "publishDate": "2024-10-30",
              "formattedDate": "2024 年 10 月 30 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_6",
          "title": "第六章：黑手黨決戰風暴與摯友血盟",
          "subtitle": "犯罪家族橫行、摯友 Eggchan 結義與向黑手黨宣戰",
          "publishDate": "2026-03-12",
          "formattedDate": "2026 年 3 月 12 日",
          "summary": "隨著舊秩序坍塌，殘暴的黑手黨犯罪家族在地下死灰復燃，瘋狂洗劫新手村。Wemmbu 與志同道合的生死摯友 Eggchan 結為血盟。兩人聯手突襲黑手黨最大的地下走私碼頭，血戰黑手黨精銳打手，繳獲了記錄黑手黨高層名單的血盟筆記，向全服黑暗勢力公開宣戰。",
          "genesis": "黑手黨綁架了多名無辜散戶並勒索巨額獄髓贖金。Wemmbu 與好友 Eggchan 忍無可忍，決定以牙還牙發動全面反攻。",
          "conflict": "黑手黨地下碼頭布滿暗哨與劇毒陷阱。Wemmbu 擔任主攻先鋒正面吸引火力，Eggchan 則從後方切斷補給線。兩人在槍林彈雨中配合無間，以摧枯拉朽之勢全殲敵方守軍。",
          "lootAndAnomaly": "Eggchan’s Keepsake Book（摯友的血盟筆記）",
          "impact": "打擊了黑手黨的囂張氣焰，確立了 Wemmbu 與 Eggchan 堅不可摧的兄弟情誼，成為無數玩家心中的正義化身。",
          "keyPlotPoints": [
            "與生死摯友 Eggchan 在戰火中立下誓守家園的血盟",
            "深夜奇襲黑手黨最大的地下物資走私核心碼頭",
            "正面迎戰並擊潰黑手黨王牌近衛部隊",
            "繳獲記錄全服黑金交易名單的絕密筆記",
            "公開向黑手黨幕後教父發布終極戰書"
          ],
          "psychology": "「只要我身邊還有可以交付後背的兄弟，這世上便沒有攻不破的堡壘。」",
          "sourceVideos": [
            {
              "id": "cEXBN7fTs00",
              "title": "Unstable SMP: The Mafia",
              "channel": "Wemmbu",
              "duration": "40:10",
              "thumbnail": "https://i.ytimg.com/vi/cEXBN7fTs00/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=cEXBN7fTs00",
              "publishDate": "2026-03-12",
              "formattedDate": "2026 年 3 月 12 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_7",
          "title": "第七章：摯友離奇失蹤！萬格荒原大搜救",
          "subtitle": "Eggchan 離奇失蹤、跨區塊千里搜捕與尋獲染血羽毛",
          "publishDate": "2026-05-09",
          "formattedDate": "2026 年 5 月 9 日",
          "summary": "黑手黨戰役後不久，Wemmbu 的摯友 Eggchan 突然在基地外圍離奇失蹤，未留下任何死亡訊息。悲憤交加的 Wemmbu 踏遍方圓數萬格荒原、雪山與沼澤，追蹤蛛絲馬跡。最終在黑手黨廢棄的地牢深處，他只找到了一根沾滿血跡的摯友羽毛，揭開了更大陰謀的黑幕。",
          "genesis": "Eggchan 的通訊信號突然在伺服器坐標中永久中斷，基地周邊發現了明顯的代碼擦除痕跡。Wemmbu 發誓即便翻遍全服也必須查明真相。",
          "conflict": "Wemmbu 獨闖三大神秘敵對工會領地展開嚴酷審訊。面對層層阻撓與假線索誤導，他以鐵血手段碾壓一切抵抗，在一座被黑曜石嚴密封死的地下水牢中挖出了 Eggchan 留下的最後遺物。",
          "lootAndAnomaly": "Eggchan’s Missing Feather（失落的摯友羽毛）",
          "impact": "摯友的失蹤讓 Wemmbu 的性格變得更加冷冽與決絕，他的復仇之火徹底引燃，促成了後續一系列血雨腥風的軍事行動。",
          "keyPlotPoints": [
            "發現摯友 Eggchan 訊號離奇蒸發，基地陷入一級戒備",
            "隻身奔襲數萬格未知疆界，破獲三處黑手黨秘密聯絡站",
            "在黑曜石地牢深處發掘殘留戰鬥痕跡與代碼擦除結界",
            "拾起摯友留下的唯一染血羽毛，立下血仇誓言",
            "將復仇目標鎖定伺服器隱藏的跨陣營黑手"
          ],
          "psychology": "「動我兄弟者，上天入地，我必將其挫骨揚灰！」",
          "sourceVideos": [
            {
              "id": "ZjO0dep5VjU",
              "title": "Searching For My Friend Who Went Missing",
              "channel": "Wemmbu",
              "duration": "27:45",
              "thumbnail": "https://i.ytimg.com/vi/ZjO0dep5VjU/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=ZjO0dep5VjU",
              "publishDate": "2026-05-09",
              "formattedDate": "2026 年 5 月 9 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_8",
          "title": "第八章：硬核血戰打響！黑曜石戰壕的先鋒衝鋒",
          "subtitle": "硬核血戰全面爆發、黑曜石戰壕突破與先鋒破城巨刃",
          "publishDate": "2026-05-30",
          "formattedDate": "2026 年 5 月 30 日",
          "summary": "為追查失蹤真相與消滅背後黑手，Wemmbu 毅然投身硬核極限大內戰。在黑曜石構築的死亡塹壕前，敵方布設了密集的箭雨與防禦工事。Wemmbu 手持破城重斧身先士卒發起孤勇衝鋒，在槍林彈雨中撕開第一道缺口，斬獲令敵軍聞風喪膽的『先鋒破城巨刃』。",
          "genesis": "多方勢力試圖借內戰之機將 Wemmbu 徹底剷除，派出重裝步兵軍團在主戰場修築了長達千格的黑曜石戰壕。",
          "conflict": "敵軍火力極度兇猛，滯留藥水與高爆彈片橫飛。Wemmbu 憑藉超凡的盾牌切換走位與近身纏鬥，在戰壕狹窄空間內展開刺刀見紅的肉搏，以一人之力連續斬落敵方三名衝鋒隊長。",
          "lootAndAnomaly": "Vanguard Siege Cleaver（先鋒破城巨刃）",
          "impact": "打破了戰場長達數天的僵持局面，帶領所屬部隊長驅直入，奠定了戰線推進的關鍵勝勢。",
          "keyPlotPoints": [
            "親臨極限硬核主戰場最前線黑曜石戰壕陣地",
            "在敵方漫天重弩火力壓制下帶頭發起破陣衝鋒",
            "近身肉搏格殺三名重裝守軍，強行撕裂防禦缺口",
            "奪取敵方陣地象徵物『先鋒破城巨刃』",
            "引導後續部隊完成防線佔領"
          ],
          "psychology": "「在絕對的勇氣與刀鋒面前，黑曜石築成的高牆不過是一堆碎石。」",
          "sourceVideos": [
            {
              "id": "_hyFGrcVv5U",
              "title": "I Went to WAR on a Hardcore Minecraft SMP",
              "channel": "Wemmbu",
              "duration": "37:10",
              "thumbnail": "https://i.ytimg.com/vi/_hyFGrcVv5U/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=_hyFGrcVv5U",
              "publishDate": "2026-05-30",
              "formattedDate": "2026 年 5 月 30 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_9",
          "title": "第九章：1000 人無規則肅清之夜的浴血壁壘",
          "subtitle": "1000 人無規則肅清之夜、黑夜狂潮殺戮與浴血鋼鐵壁壘",
          "publishDate": "2026-06-06",
          "formattedDate": "2026 年 6 月 6 日",
          "summary": "伺服器管理端開啟了長達數十小時的『1000 人無規則肅清之夜（The Purge）』，所有和平保護機制全數關閉，死亡即淘汰。面對上千名陷入瘋狂的掠奪狂潮，Wemmbu 巍然挺立於基地門口，手持染血盾牌化身全服散戶的最後壁壘，斬退數十波衝擊，守護了最後的避難所。",
          "genesis": "全服規則徹底失效，各路野心家與瘋狂散戶組建了大規模殺戮小隊，所過之處寸草不生。無數平民湧向 Wemmbu 的基地尋求庇護。",
          "conflict": "長達整夜的殘酷車輪戰。敵方動用了包括 TNT 飛船、三叉戟突襲在內的極端手段。Wemmbu 帶領守軍寸步不讓，盾牌被打碎數面，戰甲染滿敵血，始終如中流砥柱般未讓任何入侵者越雷池一步。",
          "lootAndAnomaly": "Purge Defender's Bloodied Bulwark（肅清守護者浴血壁壘）",
          "impact": "肅清之夜過後，Wemmbu 成為全服唯一在萬人狂潮中屹立不倒的守護神，其聲望達到頂點。",
          "keyPlotPoints": [
            "伺服器全面進入無規則狂暴肅清狀態，收容上百名避難平民",
            "正面迎戰數十個掠奪狂徒公會的連環夜襲",
            "在要塞入口築起鋼鐵防禦陣線，浴血斬退千人衝擊",
            "繳獲見證慘烈守城戰的『浴血壁壘』象徵盾",
            "在黎明到來之際宣告庇護所全員平安生還"
          ],
          "psychology": "「只要我還有一口氣在，這座大門背後的無辜者，誰也休想動一根寒毛。」",
          "sourceVideos": [
            {
              "id": "4v_jk0w7wR0",
              "title": "1000 Players Simulate THE PURGE in Minecraft",
              "channel": "Wemmbu",
              "duration": "44:30",
              "thumbnail": "https://i.ytimg.com/vi/4v_jk0w7wR0/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=4v_jk0w7wR0",
              "publishDate": "2026-06-06",
              "formattedDate": "2026 年 6 月 6 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_10",
          "title": "第十章：帝國覆滅！瓦解 PrinceZam 皇家同盟",
          "subtitle": "帝國圍攻戰、瓦解 PrinceZam 皇室同盟與奪取皇家金印",
          "publishDate": "2026-08-22",
          "formattedDate": "2026 年 8 月 22 日",
          "summary": "由 PrinceZam 領導的傲慢皇家文明試圖以武力統一伺服器，對散戶實行極權統治。Wemmbu 策劃了長達數週的全面反攻戰略，調遣軌道重砲轟破皇宮護盾，親手在王座前擊敗 PrinceZam，奪取其帝國皇家金印，徹底瓦解了這座盤踞已久的超級帝國。",
          "genesis": "PrinceZam 帝國恃強凌弱，甚至暗中資助抹除 Eggchan 線索的行動。Wemmbu 決定以雷霆之勢將其徹底拔除。",
          "conflict": "皇宮要塞防禦固若金湯。Wemmbu 運用鑽地機甲與高空轟炸雙管齊下破開外城，隨後在宮殿內與 PrinceZam 展開長達數十分鐘的頂級戰技單挑，最終以神級連招將其斬殺於王座之下。",
          "lootAndAnomaly": "PrinceZam's Siphoned Seal（被奪取的帝國皇家金印）",
          "impact": "全服最強大的極權帝國土崩瓦解，其囤積的海量資源被無償分發給被奴役的平民，伺服器力量重歸平衡。",
          "keyPlotPoints": [
            "制定多維度圍攻戰略，精準鎖定皇宮黑曜石防空盲點",
            "突破三重外城禁衛軍團防線，攻入中央王座大殿",
            "與帝國領袖 PrinceZam 展開巔峰神話級單挑對決",
            "正面斬殺敵酋，繳獲象徵至高皇權的皇家金印",
            "宣布帝國解體，將掠奪資源回歸全服散戶"
          ],
          "psychology": "「戴上皇冠並不代表你就是神，在我眼裡，任何壓迫平民的暴君都只有一個下場——倒下。」",
          "sourceVideos": [
            {
              "id": "Ytm8WiQLNZA",
              "title": "How I Destroyed an Entire Minecraft Civilization",
              "channel": "Wemmbu",
              "duration": "32:15",
              "thumbnail": "https://i.ytimg.com/vi/Ytm8WiQLNZA/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=Ytm8WiQLNZA",
              "publishDate": "2026-08-22",
              "formattedDate": "2026 年 8 月 22 日"
            }
          ]
        },
        {
          "id": "wemmbu_arc_11",
          "title": "第十一章：拯救世界！修復代碼崩潰核心之戰",
          "subtitle": "伺服器主執行緒過載危機、搶修代碼核心與力挽狂瀾救世之戰",
          "publishDate": "2026-09-19",
          "formattedDate": "2026 年 9 月 19 日",
          "summary": "多維度大戰引發底層數據雪崩，伺服器主執行緒 TPS 驟降至 1.5，世界即將面臨永久刪檔厄運。在這生死存亡之際，Wemmbu 放下所有恩怨，隻身闖入即將崩潰的伺服器代碼核心樞紐。在狂暴的代碼風暴中搶修主分區，手持過載核心穩定器力挽狂瀾，奇蹟般拯救了全服！",
          "genesis": "長期的戰爭爆破與黑客代碼攻擊導致伺服器主機遭遇內存溢出危機，整個 Unstable SMP 面臨被直接銷毀的滅頂之災。",
          "conflict": "核心樞紐內部充斥著致命的虛空漏洞與畸變方塊。Wemmbu 必須在極限倒計時內手動重置三個超頻冷卻陣列，同時抵禦因代碼錯亂而生成的狂暴實體，最終在世界崩塌前最後 3 秒完成修復。",
          "lootAndAnomaly": "Overclocked Core Stabilizer（過載核心穩定器）",
          "impact": "Wemmbu 用實際行動證明了自己不僅是無可匹敵的戰神，更是這座世界在生死關頭的真正拯救者。",
          "keyPlotPoints": [
            "伺服器瀕臨全面崩潰刪檔，TPS 跌入絕望谷底",
            "隻身躍入虛空代碼核心分區，承擔全服存亡重任",
            "在狂暴代碼風暴中精準重置超頻冷卻矩陣",
            "以過載核心穩定器鎖定主執行緒，化解數據雪崩危機",
            "拯救全服數以萬計玩家的存檔，加冕為救世英雄"
          ],
          "psychology": "「我不容許這個世界以這樣的方式毀滅。只要我的心臟還在跳動，這個世界就必須活下去！」",
          "sourceVideos": [
            {
              "id": "5hG_nAYEC2g",
              "title": "How I Saved the World's Largest Minecraft Server",
              "channel": "Wemmbu",
              "duration": "46:50",
              "thumbnail": "https://i.ytimg.com/vi/5hG_nAYEC2g/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=5hG_nAYEC2g",
              "publishDate": "2026-09-19",
              "formattedDate": "2026 年 9 月 19 日"
            }
          ]
        }
      ],
      "unexpectedItems": [
        {
          "name": "The Crucible & Gambit（天罰破甲裁決巨刃）",
          "rarity": "MYTHIC",
          "rarityColor": "#fbbf24",
          "howAcquired": "從非法基岩金庫最深處的水晶祭壇強行搶奪出土的失傳兵器，附魔屬性超越常規上限。",
          "effectDesc": "揮動時自帶破盾衝擊波與撕裂護甲效果，是 Wemmbu 橫掃各大文明軍團的標誌性凶器。",
          "glitchCode": "NBT: {Weapon: 'TheCrucible', Sharpness: 7, ArmorPierce: 0.45, Lore: ['Forged in the heart of stolen vaults']}"
        },
        {
          "name": "Eggchan’s Keepsake Book（摯友的血盟筆記）",
          "rarity": "RELIC",
          "rarityColor": "#34d399",
          "howAcquired": "在黑手黨圍攻戰役中，摯友 Eggchan 在捨身掩護撤退前塞入他懷中的隨身日記本。",
          "effectDesc": "記錄著兩人在極限生存中的暗號、座標與未竟心願，是 Wemmbu 在冰冷征服之路上唯一的救贖與執念。",
          "glitchCode": "NBT: {BoundPlayer: 'Eggchan', EmotionalWeight: 'MAX', MemoryUnlocked: true}"
        },
        {
          "name": "Sky Civilization Grav-Core（浮空島反重力神核）",
          "rarity": "ANOMALY",
          "rarityColor": "#38bdf8",
          "howAcquired": "在意外航行至未被載入的天空廢棄文明時，自浮空祭壇底座強行撬下的動力核心。",
          "effectDesc": "使持有者在空中受擊時免除跌落傷害，並能短暫進行二段跳躍衝刺，大幅強化空戰突襲能力。",
          "glitchCode": "NBT: {GravityModifier: -0.6, FallImmunity: true, Origin: 'LostSkyIsle'}"
        },
        {
          "name": "Banned Vault God-Axe（禁斷碎盾神斧）",
          "rarity": "BANNED",
          "rarityColor": "#f87171",
          "howAcquired": "洗劫違規金庫時所獲，由黑市工匠利用非法 NBT 標籤合成出的超常規格鬥斧。",
          "effectDesc": "破盾冷卻時間長達 10 秒，且暴擊時自帶短暫震退失明效果，讓對手毫無反抗之機。",
          "glitchCode": "NBT: {Efficiency: 6, DisableShieldTime: 10, BlackMarketOrigin: true}"
        },
        {
          "name": "Orbital Cannon Control Remote（軌道加農砲發射遙控儀）",
          "rarity": "SUPERWEAPON",
          "rarityColor": "#ef4444",
          "howAcquired": "親手召集全服最頂尖紅石工程師，在高空 Y=320 建造全伺服器第一台軌道轟炸陣列時裝配的核心終端。",
          "effectDesc": "輸入座標即可在 3 秒內召喚從天而降的 500 發高壓 TNT 齊射，瞬間將敵軍主基地化為熔岩坑。",
          "glitchCode": "NBT: {Device: 'Orbital_Terminal', TNT_Burst: 500, Range: 'UNLIMITED'}"
        }
      ],
      "videos": [
        {
          "id": "s4Qm81fKfyk",
          "title": "Breaking Into Minecraft's Most Illegal Vault",
          "titleZh": "闖入 Minecraft 最非法的地下禁忌金庫",
          "duration": "26:30",
          "thumbnail": "https://i.ytimg.com/vi/s4Qm81fKfyk/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=s4Qm81fKfyk",
          "summary": "傳奇戰神揚名立萬的奠基之戰！Wemmbu 孤身鎖定寡頭同盟深埋基岩層 40 格的非法黑金庫。面對八重防爆黑曜石與震動警報，他計算出 0.25 格活塞空隙精準珍珠瞬移，在狹窄迴廊完成一穿三極限反殺，洗劫了數十個裝滿滿級獄髓與神刀 The Crucible 的界伏盒！",
          "unexpectedLoot": "The Crucible & Gambit（熔爐與棋局之刃）",
          "keyMoments": [
            "在深層地脈勘測確認寡頭同盟非法基岩黑金庫精確座標",
            "利用 0.25 格活塞死角投擲終界珍珠完成不可思議的穿牆突破",
            "幽閉走廊以極限跳劈破盾擊殺三名滿裝打手洗劫金庫撤離"
          ],
          "publishDate": "2024-05-04",
          "formattedDate": "2024 年 5 月 4 日"
        },
        {
          "id": "o8ocybrrdfw",
          "title": "It's Impossible to Catch this Player",
          "titleZh": "要抓到這個玩家根本是不可能的任務",
          "duration": "29:10",
          "thumbnail": "https://i.ytimg.com/vi/o8ocybrrdfw/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=o8ocybrrdfw",
          "summary": "面對全服十餘家公會組建的獵人聯合軍團與巨額賞金搜捕，Wemmbu 上演了一場長達數萬格的教科書級空地大逃殺。在黑橡樹林極速穿林滑翔、雪山之巔預設連鎖高爆雪崩陷阱，並在絕壁之上拔刀反擊全殲追兵主力！",
          "unexpectedLoot": "Apex Predator's Trophy（獵王之誓獄髓顱骨）",
          "keyMoments": [
            "黑橡樹林離地兩格的高難度鞘翅蛇形機動甩開追兵",
            "暴風雪山巔巧妙預埋積雪連鎖高爆陷阱重創獵人主力",
            "崖邊拔出 The Crucible 巨刃以一敵眾斬首敵軍王牌小隊長"
          ],
          "publishDate": "2024-05-25",
          "formattedDate": "2024 年 5 月 25 日"
        },
        {
          "id": "wbTIN42an0o",
          "title": "I Created Minecraft's Greatest Civilization",
          "titleZh": "我打造了 Minecraft 最不可摧毀的強盛文明",
          "duration": "33:45",
          "thumbnail": "https://i.ytimg.com/vi/wbTIN42an0o/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=wbTIN42an0o",
          "summary": "從逃亡浪子到文明領袖！Wemmbu 動用洗劫黑金庫所得的億萬物資，招募百名流民工匠在荒原建造了三層深板岩鋼鐵文明要塞。完善的紅石城防、外圍護城熔岩海與全自動哨戒塔，為全服散戶提供了最堅實的庇護所。",
          "unexpectedLoot": "Architect's Master Blueprint（鋼鐵文明總工程圖）",
          "keyMoments": [
            "在荒原動工平整土地，建造三層深板岩防爆要塞核心",
            "引導地底熔岩流構築起綿延千格的自動化防禦隔離帶",
            "全服流浪散戶慕名而來，鋼鐵文明衛城宣告正式落成"
          ],
          "publishDate": "2024-06-15",
          "formattedDate": "2024 年 6 月 15 日"
        },
        {
          "id": "_qc8ZF2KyeQ",
          "title": "Why I Destroyed the Unstable SMP",
          "titleZh": "為什麼我決定毀滅 Unstable SMP 舊主城",
          "duration": "38:20",
          "thumbnail": "https://i.ytimg.com/vi/_qc8ZF2KyeQ/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=_qc8ZF2KyeQ",
          "summary": "看透伺服器腐朽體制的毀滅宣言！當發現舊主城徹底淪為地下黑手黨吸血與洗錢的溫床後，Wemmbu 在成功救出摯友 Eggchan 後毅然按下引爆終端，以數萬枚地埋 TNT 將整座舊主城化為焦土，為世界迎來真正的新生。",
          "unexpectedLoot": "Annihilation Remote Detonator（虛空重置引爆終端）",
          "keyMoments": [
            "深入地下管網勘測黑手黨掌控舊主城的腐敗證據鏈",
            "秘密接通蔓延數萬格的地下連鎖引爆紅石電路網絡",
            "在荒原高處親手按下終端，目睹罪惡舊城在火海中坍塌"
          ],
          "publishDate": "2024-07-08",
          "formattedDate": "2024 年 7 月 8 日"
        },
        {
          "id": "haxHwlvEN5g",
          "title": "I Discovered a Minecraft Sky Civilization",
          "titleZh": "我發現了飄浮在雲層之上的天空失落文明",
          "duration": "31:05",
          "thumbnail": "https://i.ytimg.com/vi/haxHwlvEN5g/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=haxHwlvEN5g",
          "summary": "一場震撼的高空奇幻冒險！Wemmbu 駕駛滿附魔鞘翅穿越極高空積雨雲層，在 Y=320 建築極限高度之上發現了一座懸浮的天空神廟文明。他在古代浮島中解開了遠古深海長老留下的紅石音律機關，帶回了失傳的古代空戰聖遺物。",
          "unexpectedLoot": "Skybound Sovereign Elytra Core（蒼穹皇者鞘翅核心）",
          "keyMoments": [
            "突破 Y=320 極限高度在暴風雨中尋找浮空島嶼座標",
            "破解守護浮空神廟的古代深海長老雷射機關陷阱",
            "取得蒼穹皇者鞘翅核心完成驚心動魄的高空無動力俯衝"
          ],
          "publishDate": "2024-10-30",
          "formattedDate": "2024 年 10 月 30 日"
        },
        {
          "id": "cEXBN7fTs00",
          "title": "Unstable SMP: The Mafia",
          "titleZh": "Unstable SMP：黑手黨決戰風暴",
          "duration": "40:10",
          "thumbnail": "https://i.ytimg.com/vi/cEXBN7fTs00/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=cEXBN7fTs00",
          "summary": "戰神為救摯友怒戰黑幫！黑手黨綁架了 Wemmbu 的生死之交 Eggchan 意圖勒索。Wemmbu 孤身持刀踹碎黑手黨總舵大門，在樓梯狹道斬碎數十名黑衣殺手，在定時炸彈僅剩最後 3 秒時擲刀斷索救出摯友，霸氣震懾全服！",
          "unexpectedLoot": "Eggchan’s Keepsake Book（摯友的血盟筆記）",
          "keyMoments": [
            "接到帶血勒索信後單槍匹馬殺入黑手黨總部要塞大樓",
            "在旋轉樓梯間以純粹近戰跳劈殺穿數十名持弩守衛阻攔",
            "在炸藥計時器最後 3 秒精準擲刃斬斷鎖鏈抱救摯友破窗躍下"
          ],
          "publishDate": "2026-03-12",
          "formattedDate": "2026 年 3 月 12 日"
        },
        {
          "id": "ZjO0dep5VjU",
          "title": "Searching For My Friend Who Went Missing",
          "titleZh": "尋找離奇失蹤的生死摯友 Eggchan",
          "duration": "27:45",
          "thumbnail": "https://i.ytimg.com/vi/ZjO0dep5VjU/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=ZjO0dep5VjU",
          "summary": "內戰之後摯友 Eggchan 在代碼異變中離奇失蹤，未留下隻字片語。Wemmbu 踏遍全服四荒六合，循著地脈殘留的神秘亂碼線索展開千里追尋。在暗無天日的廢墟深處，他發現了幕後黑手 Lattice K 與 The LAW 暗中布控的恐怖陰謀！",
          "unexpectedLoot": "Eggchan’s Missing Feather（失落的摯友羽毛）",
          "keyMoments": [
            "勘察摯友最後失蹤的實驗室現場，收集神秘代碼碎屑",
            "沿著座標紊亂的地下暗河一路追蹤至世界邊境斷層",
            "在斷層深處發掘刻有 The LAW 專屬執法印記的密函"
          ],
          "publishDate": "2026-05-09",
          "formattedDate": "2026 年 5 月 9 日"
        },
        {
          "id": "_hyFGrcVv5U",
          "title": "I Went to WAR on a Hardcore Minecraft SMP",
          "titleZh": "我在極限硬核伺服器打響全面戰爭",
          "duration": "37:10",
          "thumbnail": "https://i.ytimg.com/vi/_hyFGrcVv5U/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=_hyFGrcVv5U",
          "summary": "千人大內戰 Wemmbu 突擊第一視角！Wemmbu 攜帶軌道巨砲火控終端親臨戰場最前線。他率領親衛隊冒著漫天火雨強渡護城河，揮舞 The Crucible 巨刃以一己之力劈開敵城第一道基岩防線，為同盟大軍撕開勝利之門！",
          "unexpectedLoot": "Vanguard Siege Cleaver（先鋒破城巨刃）",
          "keyMoments": [
            "冒著暴風雨般密集的箭雨與炸藥投擲搶渡外圍護城河",
            "手持巨刃正面硬撼敵方五名滿裝將領完成陣前斬將",
            "引導己方軌道砲精準摧毀敵軍主城門，率大軍殺入要塞"
          ],
          "publishDate": "2026-05-30",
          "formattedDate": "2026 年 5 月 30 日"
        },
        {
          "id": "4v_jk0w7wR0",
          "title": "1000 Players Simulate THE PURGE in Minecraft",
          "titleZh": "1000 名玩家在 Minecraft 展開無規則肅清之夜",
          "duration": "44:30",
          "thumbnail": "https://i.ytimg.com/vi/4v_jk0w7wR0/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=4v_jk0w7wR0",
          "summary": "極度混亂的無規則肅清之夜！全服安全法規全數停擺，千名武裝狂徒在黑夜中展開無差別劫掠。Wemmbu 隻身一人守護在平民避難所的大門前，在連續數小時的慘烈圍攻中寸步不退，以戰神之名斬退數百暴徒，守護了人間微光！",
          "unexpectedLoot": "Purge Defender's Bloodied Bulwark（肅清守護者浴血壁壘）",
          "keyMoments": [
            "在避難要塞門口畫下生死紅線，警告全服暴徒不得越界",
            "面對多支百人掠奪公會的連鎖衝鋒，以一敵眾浴血斬殺匪首",
            "黎明曙光破曉，要塞內上千名老弱平民毫髮無損迎來新生"
          ],
          "publishDate": "2026-06-06",
          "formattedDate": "2026 年 6 月 6 日"
        },
        {
          "id": "Ytm8WiQLNZA",
          "title": "How I Destroyed an Entire Minecraft Civilization",
          "titleZh": "我如何親手摧毀了一整座敵對文明",
          "duration": "32:15",
          "thumbnail": "https://i.ytimg.com/vi/Ytm8WiQLNZA/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=Ytm8WiQLNZA",
          "summary": "面對殘暴霸權 PrinceZam 帝國的步步緊逼，Wemmbu 展現了令人膽寒的毀滅工程力。他架設 120 格跨區塊軌道砲，穿透數個未載入區塊將 PrinceZam 的金碧輝煌王宮轟成焦土廢墟，親自送葬了欺壓平民的龐大帝國！",
          "unexpectedLoot": "PrinceZam's Siphoned Seal（被奪取的帝國皇家金印）",
          "keyMoments": [
            "精密計算跨區塊彈道軌跡，裝填千枚高壓 TNT 巨砲",
            "按下火控終端，砲火穿越空間精準抹平敵國中央宮殿",
            "親率鐵騎踏平敵方殘存指揮營地，繳獲帝國皇家金印"
          ],
          "publishDate": "2026-08-22",
          "formattedDate": "2026 年 8 月 22 日"
        },
        {
          "id": "5hG_nAYEC2g",
          "title": "How I Saved the World's Largest Minecraft Server",
          "titleZh": "我如何拯救了世界上最龐大的 Minecraft 伺服器（最新熱播中！）",
          "duration": "46:50",
          "thumbnail": "https://i.ytimg.com/vi/5hG_nAYEC2g/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=5hG_nAYEC2g",
          "summary": "2026 最新震撼主線！肅清之夜引爆伺服器底層記憶體崩潰危機，世界面臨永久格式化。Wemmbu 隻身跳入高溫熔岩翻滾的世界核心機房，在最後五分鐘獻祭全身神裝抵禦高溫，手動鍵入穩定演算法指令，成功挽救了全宇宙！",
          "unexpectedLoot": "Overclocked Core Stabilizer（過載核心穩定器）",
          "keyMoments": [
            "伺服器核心過載警報響徹全圖，世界即將被強制永久抹除",
            "隻身縱身躍入熔岩翻滾的核心機房，以肉身抵擋致命高溫輻射",
            "在倒數最後一秒精準輸入穩定指令，成功重塑伺服器底層秩序"
          ],
          "publishDate": "2026-09-19",
          "formattedDate": "2026 年 9 月 19 日"
        }
      ],
      "channel": "Wemmbu",
      "channelUrl": "https://www.youtube.com/@wemmbu"
    },
    "spoke": {
      "id": "spoke",
      "name": "Spoke (SpokeIsHere)",
      "realHandle": "SpokeIsHere",
      "roleTitle": "漏洞神偷 · 陷阱詭術大師 · 黑手黨致命雙面臥底",
      "tagline": "「只要伺服器還在運算，就沒有我找不出的漏洞與陷阱。」",
      "themeColor": "#10b981",
      "accentGlow": "rgba(16, 185, 129, 0.4)",
      "avatar": "assets/avatars/spoke.jpg",
      "skinBody": "assets/skins/spoke_3d.png",
      "appearance": {
        "summary": "標誌性的螢光翠綠色連帽衫（Green Hoodie），金棕色微卷髮絲從兜帽垂下，嘴角帶著一抹招牌壞笑。",
        "features": [
          "標誌性服飾：高飽和度螢光綠色運動連帽衫（Iconic Green Hoodie）",
          "面部神韻：嘴角揚起標誌性的戲謔與自信微笑（Signature Smirk）",
          "角色氣質：混亂與代碼漏洞的狂熱藝術家，行動神出鬼沒",
          "現實說明：Spoke 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方百萬頻道當前最新使用之綠衣招牌頭像"
        ]
      },
      "stats": {
        "intellect": 96,
        "strategy": 93,
        "pvpCombat": 84,
        "influence": 86,
        "stealth": 99
      },
      "personality": "幽默搞怪的外表下藏著令人膽寒的極限智商與破壞慾。他是無序混亂的化身，對伺服器底層機制瞭若指掌。他以玩弄強大勢力為樂，無論是富豪帝國還是殘暴黑手黨，最後都淪為他惡作劇陷阱的犧牲品。",
      "biography": "Spoke 是 Unstable SMP 開播初始就引爆整個宇宙的傳奇引路人。他在系列揭幕之際就聯手夥伴發現了震撼伺服器的古老漏洞，直接預告了世界的不穩定本質。\n\n他的事蹟充满了令人瞠目結舌的荒誕與精妙：從洗劫超過 10,000,000 件非法複製裝備、以假貨和陷阱逼得全服首富破產，到孤身潛伏進橫行霸道的黑手黨擔任雙面間諜，在最關鍵一刻將整個犯罪家族連根拔起。在面對「不存在的玩家」與代碼亂碼狂潮時，他更是唯一的代碼引路人。",
      "storyArcs": [
        {
          "id": "spoke_arc_1",
          "title": "第一章：毀滅 Unstable SMP 的時空漏洞核心",
          "subtitle": "伺服器起源第一劫、底層漏洞拆解與掌控時空漏洞核心",
          "publishDate": "2024-04-21",
          "formattedDate": "2024 年 4 月 21 日",
          "summary": "作為 Unstable SMP 最神出鬼沒的混沌智囊，Spoke 早在開服之初便敏銳洞察了底層時序封包的同步缺陷。他穿梭於荒野之中，成功利用區塊載入延遲觸發了伺服器首個代碼漏洞，從中提取出了能扭曲局部時空的『時空漏洞核心』，拉開了他智謀翻覆全服歷史的傳奇序幕。",
          "genesis": "伺服器初期架構極不穩定，封包在跨維度傳輸時存在數毫秒的異步空檔。Spoke 是全服第一個意識到此漏洞具有改寫世界威能的玩家。",
          "conflict": "在驗證漏洞的過程中，局部區塊發生了連鎖時空坍塌，方塊無序錯位。Spoke 必須在幾何扭曲的危險空間中精準操作漏斗與偵測器，在空間崩塌前成功凝結出穩定的核心實體。",
          "lootAndAnomaly": "Chronos Glitch Core（時空漏洞核心）",
          "impact": "證明了代碼漏洞對生存法則的絕對碾壓，Spoke 自此成為各大勢力敬畏與提防的超級變數。",
          "keyPlotPoints": [
            "比對伺服器底層傳輸協議，發現時序異步的關鍵漏洞",
            "深入未開闢邊界進行極限代碼壓力測試",
            "在局部空間坍塌的生死邊緣穩定紅石時序矩陣",
            "成功凝結並掌控傳奇物品『時空漏洞核心』",
            "開啟其作為 Unstable SMP 幕後操盤手的非凡歷程"
          ],
          "psychology": "「常人遵守規則，智者理解規則，而我——利用規則來重構整個世界。」",
          "sourceVideos": [
            {
              "id": "wG9dbWNsems",
              "title": "How to Destroy the Unstable SMP",
              "channel": "SpokeIsHere",
              "duration": "24:18",
              "thumbnail": "https://i.ytimg.com/vi/wG9dbWNsems/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=wG9dbWNsems",
              "publishDate": "2024-04-21",
              "formattedDate": "2024 年 4 月 21 日"
            }
          ]
        },
        {
          "id": "spoke_arc_2",
          "title": "第二章：神鬼搬空！盜取千萬級非法複製神裝",
          "subtitle": "史上最大洗錢劫案、神鬼搬空千萬級非法複製界伏盒",
          "publishDate": "2024-05-13",
          "formattedDate": "2024 年 5 月 13 日",
          "summary": "某巨型非法集團利用區塊重置漏洞秘密複製了超過 10,356,000 件滿級裝備與神級附魔金蘋果，企圖透過壟斷顛覆全服經濟。Spoke 洞悉了其地下儲備基地的座標，精心設計了一套幽靈漏斗傳輸網絡，在神不知鬼不覺間將整個千萬級金庫搬空，完成史上最偉大的世紀洗劫！",
          "genesis": "非法複製集團行事極度囂張，在黑市肆意哄抬物價，破壞遊戲平衡。Spoke 決定給這群投機分子一記沉痛的教訓。",
          "conflict": "基地周圍被數百層基岩防護外殼包裹，並有大量精英守衛輪班把守。Spoke 化裝成維護人員潛入內部，利用幽靈漏斗礦車與穿牆終界珍珠巧妙繞開所有警報，將上百個塞滿神裝的界伏盒全部轉移。",
          "lootAndAnomaly": "10,356,000 Duped Gear Hoard（千萬級複製物資秘藏）",
          "impact": "複製集團一夜之間宣告破產，黑市物價瞬間平抑，Spoke 成為全服散戶私下膜拜的神偷傳奇。",
          "keyPlotPoints": [
            "破譯複製集團地下總部的隱秘座標與人員換班規律",
            "研發出無聲無息的幽靈漏斗高速物資抽吸系統",
            "神不知鬼不覺滲透進嚴密設防的地下深層金庫",
            "一夜之間徹底搬空超過千萬件複製頂級神裝界伏盒",
            "將巨額戰略物資秘密隱匿，重創黑產集團根基"
          ],
          "psychology": "「他們以為把東西鎖在黑曜石箱子裡就安全了？在智慧面前，世上本就沒有鎖。」",
          "sourceVideos": [
            {
              "id": "E5jfdzB6RnY",
              "title": "How I Stole 10,356,000 Duped Items",
              "channel": "SpokeIsHere",
              "duration": "36:40",
              "thumbnail": "https://i.ytimg.com/vi/E5jfdzB6RnY/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=E5jfdzB6RnY",
              "publishDate": "2024-05-13",
              "formattedDate": "2024 年 5 月 13 日"
            }
          ]
        },
        {
          "id": "spoke_arc_3",
          "title": "第三章：金融風暴！搞垮全服最富有的億萬富豪帝國",
          "subtitle": "金融操盤與物資做空、搞垮壟斷全服資源的億萬富豪黑金庫",
          "publishDate": "2024-07-19",
          "formattedDate": "2024 年 7 月 19 日",
          "summary": "主城興起了一個由寡頭財閥組成的『億萬金庫聯盟』，透過囤積居奇逼得散戶家破人亡。Spoke 策劃了一場震驚全服的金融做空大戰。他利用手頭海量資源在黑市低價拋售引發恐慌性拋售，隨後精準爆破聯盟中央金庫，徹底讓全服最富有的帝國瞬間破產！",
          "genesis": "億萬富豪寡頭聯手封鎖了所有獄髓礦脈與終界物資交易，散戶生存空間被極度擠壓。Spoke 決心以經濟戰摧毀對手。",
          "conflict": "面對財閥僱用的頂尖打手巡邏，Spoke 巧妙利用雙重身份在交易所製造虛假利好，誘導財閥將所有流動資產轉移至單一金庫，隨後引導引爆蟲群在地下破開金庫底層，將所有財富化為烏有。",
          "lootAndAnomaly": "The Billionaire's Counterfeit Vault（被搬空的億萬富豪黑箱）",
          "impact": "徹底粉碎了金權政治對伺服器的壟斷，確立了自由貿易的新秩序，全服經濟體系重獲健康運轉。",
          "keyPlotPoints": [
            "精確分析寡頭財閥的資金流向與物資儲備節點",
            "在全服黑市精準掀起恐慌性做空風暴",
            "調虎離山引開財閥主力僱傭兵軍團",
            "直搗黃龍爆破中央金庫底層，搬空全部流動資金",
            "宣告億萬帝國全面破產，解放被壟斷的市場"
          ],
          "psychology": "「用金錢堆砌的王國最為脆弱，只要抽走最底層的一根支柱，萬丈高樓瞬間化為齏粉。」",
          "sourceVideos": [
            {
              "id": "KyLqZkfv3BU",
              "title": "I Bankrupted Minecraft's Richest Civilization",
              "channel": "SpokeIsHere",
              "duration": "31:22",
              "thumbnail": "https://i.ytimg.com/vi/KyLqZkfv3BU/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=KyLqZkfv3BU",
              "publishDate": "2024-07-19",
              "formattedDate": "2024 年 7 月 19 日"
            }
          ]
        },
        {
          "id": "spoke_arc_4",
          "title": "第四章：深入虎穴！影狼偽裝臥底黑手黨家族",
          "subtitle": "穿上黑手黨西裝雙面間諜、潛入地下教父核心決策圈",
          "publishDate": "2024-11-18",
          "formattedDate": "2024 年 11 月 18 日",
          "summary": "為徹底摸清黑手黨犯罪家族的組織架構與幕後黑手，Spoke 換上代表家族高階幹部的黑西裝，以雙面間諜身份潛入黑手黨核心。憑藉過人的智謀與心理博弈，他成功贏得了地下教父的信任，甚至被委以重任，暗中掌握了黑手黨所有的安全密碼與據點網絡。",
          "genesis": "黑手黨行事隱秘，外人難以觸及核心。Spoke 決定採取高風險的臥底策略，從內部將其徹底瓦解。",
          "conflict": "在多次忠誠度考驗中，Spoke 臨危不亂，數次在教父的槍口與測謊密室中以精妙話術與偽造情報化險為夷，甚至反手利用黑手黨資源除掉了多個敵對公會的耳目。",
          "lootAndAnomaly": "Shadow Wolf's Infiltration Suit（影狼潛伏西裝）",
          "impact": "黑手黨內部情報對 Spoke 而言徹底單向透明，為隨後的滅頂之災埋下了最致命的引信。",
          "keyPlotPoints": [
            "精心偽造身份背景，成功打入黑手黨初級外圍組織",
            "在殘酷的內部審查與測謊考驗中展現影帝級心理博弈",
            "晉升為高階幹部，獲得自由出入教父總部的特權",
            "獲取黑手黨在全服布設的二十八處秘密據點分佈圖",
            "將整套防護代碼悄然備份，收穫影狼潛伏西裝"
          ],
          "psychology": "「最好的偽裝，是讓敵人把你視作他們最鋒利的一把刀。」",
          "sourceVideos": [
            {
              "id": "Ss5ggp8Ij14",
              "title": "I Infiltrated The Minecraft Mafia",
              "channel": "SpokeIsHere",
              "duration": "29:45",
              "thumbnail": "https://i.ytimg.com/vi/Ss5ggp8Ij14/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=Ss5ggp8Ij14",
              "publishDate": "2024-11-18",
              "formattedDate": "2024 年 11 月 18 日"
            }
          ]
        },
        {
          "id": "spoke_arc_5",
          "title": "第五章：教父末日！親手終結黑手黨犯罪帝國",
          "subtitle": "家族內部政變血洗、教父黑手黨帝國全面覆滅",
          "publishDate": "2025-01-29",
          "formattedDate": "2025 年 1 月 29 日",
          "summary": "時機成熟之際，Spoke 啟動了醞釀已久的內部政變計劃。他在教父召集全體家族幹部的年度晚宴上突然發難，切斷所有逃生通道並引爆地底黑曜石機關。在火光中，Spoke 正面擊潰教父的貼身衛隊，奪下燒融的族徽戒指，宣告橫行全服的黑手黨時代徹底終結！",
          "genesis": "黑手黨搜集了全服大量玩家的底層數據準備發起總攻擊，Spoke 決定在敵軍行動前發動外科手術式斬首打擊。",
          "conflict": "晚宴大廳化身修羅戰場。教父祭出了秘密研發的近戰毒刃機甲，Spoke 則利用預先埋設的阻斷紅石與滯留噴霧封死走位，反手一記致命跳劈斬碎教父護盾，完成全面制裁。",
          "lootAndAnomaly": "The Godfather's Burned Signet（教父燒融的黑手黨族徽戒指）",
          "impact": "Unstable SMP 歷史上最龐大的犯罪網絡徹底灰飛煙滅，全服治安迎來歷史性轉折點。",
          "keyPlotPoints": [
            "在年度黑手黨首腦大會前夕封鎖所有撤退秘密傳送點",
            "於晚宴核心時刻亮明身份，引爆預設紅石機關",
            "在混戰中斬落三名黑手黨王牌執法者",
            "正面迎戰教父本尊並將其徹底斬首擊潰",
            "收繳教父象徵族徽戒指，焚毀黑手黨犯罪總部"
          ],
          "psychology": "「當你沉溺於掌控他人的命運時，別忘了，你的命運早已在暗中被標好了價碼。」",
          "sourceVideos": [
            {
              "id": "x9-V64fR9sU",
              "title": "The End of the Minecraft Mafia",
              "channel": "SpokeIsHere",
              "duration": "38:15",
              "thumbnail": "https://i.ytimg.com/vi/x9-V64fR9sU/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=x9-V64fR9sU",
              "publishDate": "2025-01-29",
              "formattedDate": "2025 年 1 月 29 日"
            }
          ]
        },
        {
          "id": "spoke_arc_6",
          "title": "第六章：代碼煉獄！探索虛空與 NULL 組織之謎",
          "subtitle": "虛空代碼煉獄 Purgatory、NULL 組織浮現與掌控虛空無效化圖騰",
          "publishDate": "2026-06-23",
          "formattedDate": "2026 年 6 月 23 日",
          "summary": "隨著黑手黨覆滅，伺服器背後一個自稱『NULL』的超維度代碼幽靈組織浮出水面。Spoke 追蹤異常代碼訊號，隻身闖入被稱為『代碼煉獄（Purgatory）』的未編譯空間。在那裡他直面無視物理法則的代碼虛影，成功奪取了能使一切常規攻擊無效化的『虛空無效化圖騰』！",
          "genesis": "伺服器日誌中開始頻繁出現不屬於任何玩家的異常登入紀錄與 NULL 簽名。Spoke 決心揭開這股未知力量的真面目。",
          "conflict": "Purgatory 空間重力紊亂，方塊不斷碎裂重組。Spoke 在無底虛空中精準搭橋前行，與守護神壇的 NULL 代碼幻影展開超維度心智與身法對決，成功將圖騰封印入盒。",
          "lootAndAnomaly": "Totem of Null（虛空無效化圖騰）",
          "impact": "證實了伺服器內部存在著超越常規玩家維度的神秘黑手，為整個 Unstable SMP 的世界觀掀開了震撼新章。",
          "keyPlotPoints": [
            "破譯日誌中的代碼簽名，定位代碼煉獄 Purgatory 坐標",
            "在重力紊亂與虛空坍塌中極限跑酷前行",
            "直面神秘組織 NULL 的守護幻象並看破其虛實攻擊",
            "奪取具備改寫代碼法則權能的虛空無效化圖騰",
            "全身而退，帶回關於維度黑手的關鍵第一手情報"
          ],
          "psychology": "「未知的深淵並不可怕，可怕的是你連凝視深淵的勇氣都沒有。」",
          "sourceVideos": [
            {
              "id": "8_Au10osdEo",
              "title": "Unstable SMP: The NULL / Purgatory Saga",
              "channel": "SpokeIsHere",
              "duration": "33:50",
              "thumbnail": "https://i.ytimg.com/vi/8_Au10osdEo/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=8_Au10osdEo",
              "publishDate": "2026-06-23",
              "formattedDate": "2026 年 6 月 23 日"
            }
          ]
        },
        {
          "id": "spoke_arc_7",
          "title": "第七章：終界拓荒！1000 名玩家建立終界文明",
          "subtitle": "1000 名玩家終界大拓荒、跨虛空天橋與建造終界殖民要塞",
          "publishDate": "2026-07-26",
          "formattedDate": "2026 年 7 月 26 日",
          "summary": "主世界已然飽和，Spoke 號召 1000 名玩家共同踏上終界大開拓之旅。在無盡虛空之上，他主持建造了長達數萬格的黑曜石跨虛空天橋與宏偉的終界殖民衛城，搭建了全自動紫頌果農場與終界龍息提取站，將荒涼的終界開闢為生機勃勃的全新文明中心。",
          "genesis": "主世界戰亂頻仍，資源日漸匱乏。Spoke 提出開拓終界作為全服避難所的宏偉構想，獲得千名平民熱烈響應。",
          "conflict": "終界開拓面臨漫天終界使者與虛空墜落的巨大風險。Spoke 親自設計了防視線水流安全天橋，並在遭遇虛空海盜騷擾時果斷帶隊將敵軍全數逼落虛空，保證了大工程的順利落成。",
          "lootAndAnomaly": "End Void Bridge Master Key（終界虛空天橋大師密匙）",
          "impact": "終界從一個單純的擊殺 Boss 副本蛻變為全服最重要的戰略前哨基地，文明疆域獲得歷史性擴張。",
          "keyPlotPoints": [
            "發布全服終界拓荒動員令，集結千人開拓先鋒隊伍",
            "在虛空深淵之上規劃並修築數萬格防摔天橋樞紐",
            "建造全自動紫頌果與龍息資源提取終端基地",
            "擊潰試圖截斷天橋的虛空掠奪者小隊",
            "鑄造終界天橋大師密匙，正式確立終界殖民地"
          ],
          "psychology": "「在虛空中架起橋樑，我們便能在絕望的盡頭創造希望。」",
          "sourceVideos": [
            {
              "id": "ynkhNRpQ9Xc",
              "title": "1000 Players Build END Civilization in Hardcore Minecraft",
              "channel": "SpokeIsHere",
              "duration": "43:10",
              "thumbnail": "https://i.ytimg.com/vi/ynkhNRpQ9Xc/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=ynkhNRpQ9Xc",
              "publishDate": "2026-07-26",
              "formattedDate": "2026 年 7 月 26 日"
            }
          ]
        },
        {
          "id": "spoke_arc_8",
          "title": "第八章：幽靈軍團！打造全服最強鐵血軍武體系",
          "subtitle": "幽靈軍團正式成軍、全服最強現代化鐵血軍武體系",
          "publishDate": "2026-08-13",
          "formattedDate": "2026 年 8 月 13 日",
          "summary": "面對即將到來的全維度戰爭，Spoke 打造了一支全服最具紀律性與戰鬥力的精銳武裝力量——『幽靈軍團（Shadow Phantom）』。他引進了現代軍事化協同作戰體系，配備高機動隱形裝備與遠程重砲，在實戰演習中以零傷亡戰績全殲三支老牌僱傭軍團，確立了無可置疑的軍事霸權。",
          "genesis": "各自為戰的散兵游勇在大規模軍團戰中不堪一擊。Spoke 決心打造一支能應對任何極端情況的特種精銳部隊。",
          "conflict": "多個老牌軍事公會聯手向幽靈軍團發起挑釁性突襲。Spoke 指揮若定，運用分散式游擊、隱形夾擊與水流阻絕戰術，在幾分鐘內將敵軍主力完全包夾殲滅。",
          "lootAndAnomaly": "Shadow Phantom War Signet（幽靈軍團戰神徽印）",
          "impact": "宣告了冷兵器單挑時代的落幕，Unstable SMP 正式進入現代化高度協同的特種軍武大時代。",
          "keyPlotPoints": [
            "制定現代化軍事操典，嚴格篩選組建幽靈軍團",
            "為部隊研發高機動隱形作戰套裝與立體戰術通訊",
            "在實戰對抗中以超凡戰術幾分鐘內全殲三支敵對聯軍",
            "獲封軍團至高統帥戰神徽印",
            "幽靈軍團成為全服最具威懾力的定海神針"
          ],
          "psychology": "「真正的力量不在於單個人的勇武，而在於千人如一人的鋼鐵意志。」",
          "sourceVideos": [
            {
              "id": "V9HzAdwgf-I",
              "title": "I Created Minecraft's Greatest Military",
              "channel": "SpokeIsHere",
              "duration": "35:40",
              "thumbnail": "https://i.ytimg.com/vi/V9HzAdwgf-I/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=V9HzAdwgf-I",
              "publishDate": "2026-08-13",
              "formattedDate": "2026 年 8 月 13 日"
            }
          ]
        },
        {
          "id": "spoke_arc_9",
          "title": "第九章：深淵起源！探索被伺服器遺忘的遠古維度",
          "subtitle": "踏入被伺服器遺忘的遠古深淵維度、解讀創世原始碼石板",
          "publishDate": "2026-09-07",
          "formattedDate": "2026 年 9 月 7 日",
          "summary": "Spoke 循著遠古代碼指引，隻身啟動了深埋於地底遺蹟的折射傳送門，成功踏入了一個被伺服器底層遺忘、未完全刪除的史前深淵維度。在那裡他歷經未知代碼生物的致命圍堵，在遠古神廟祭壇中解讀了記錄 Unstable SMP 誕生真相的『創世原始碼石板』！",
          "genesis": "伺服器更新歷史中曾有過數次『未公開刪除記錄』。Spoke 懷疑某些初代地圖碎片仍漂浮在代碼夾層之中。",
          "conflict": "深淵維度充斥著代碼撕裂與致命盲目效果。Spoke 憑藉精準的火把座標標記與心算距離，在迷宮中甩開代碼異形追殺，在祭壇陷阱塌陷前搶下石板回傳主世界。",
          "lootAndAnomaly": "Origin Code Slate（創世原始碼石板）",
          "impact": "帶回了伺服器誕生之初的原始架構圖，揭開了整個 Unstable SMP 多重危機的終極根源。",
          "keyPlotPoints": [
            "啟動古代地底折射傳送門，跨入被遺忘的史前深淵維度",
            "在代碼撕裂力場與致盲黑霧中摸索前進",
            "破解史前神廟的代碼連鎖封印機關",
            "在異形生物合圍前奪取至關重要的創世原始碼石板",
            "成功開啟逃生裂隙返回主世界"
          ],
          "psychology": "「過去並未真正消失，它只是靜靜潛伏在陰影裡，等待著揭開真相的人。」",
          "sourceVideos": [
            {
              "id": "lA1ohDqw8XA",
              "title": "Exploring Minecraft’s Forgotten Dimension",
              "channel": "SpokeIsHere",
              "duration": "39:15",
              "thumbnail": "https://i.ytimg.com/vi/lA1ohDqw8XA/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=lA1ohDqw8XA",
              "publishDate": "2026-09-07",
              "formattedDate": "2026 年 9 月 7 日"
            }
          ]
        },
        {
          "id": "spoke_arc_10",
          "title": "第十章：至高帝國！加冕終界霸主與虛空戰鎧",
          "subtitle": "終界至尊帝國大加冕、統治三維度的虛空戰鎧與至高霸權",
          "publishDate": "2026-09-20",
          "formattedDate": "2026 年 9 月 20 日",
          "summary": "集齊三大維度戰略優勢的 Spoke 迎來了他的榮耀巔峰。在終界黑曜石王座之上，他在千名軍民的歡呼聲中加冕為終界帝國至尊大帝。他穿上由虛空精華與頂級獄髓融合鍛造的『終界至尊虛空戰鎧』，正式建立了跨越主世界、地獄與終界的龐大超級帝國！",
          "genesis": "經過長達數個紀元的征戰與經營，Spoke 麾下的幽靈軍團與終界殖民地已成為全服最強大、最具組織力的超級實體。",
          "conflict": "加冕儀式前夕，敵對霸權聯盟組織了最後的敢死隊企圖空降破壞王座。Spoke 親自出手，身披虛空戰鎧在半空中將敵方刺客盡數斬落，展現了無可爭議的絕對帝王霸氣。",
          "lootAndAnomaly": "End Sovereign Void-Plate（終界至尊虛空戰鎧）",
          "impact": "Unstable SMP 史上首個真正統一三維度資源與軍事的至高帝國正式確立，Spoke 的權力達到極盛。",
          "keyPlotPoints": [
            "完成主世界、地獄與終界三大維度軍事貿易網絡的一體化整合",
            "在終界黑曜石之巔落成至高帝國中央王座宮殿",
            "反手挫敗敵方敢死隊的空中斬首突襲",
            "正式穿戴終界至尊虛空戰鎧登基加冕",
            "向全服頒布帝國法典，開啟至尊帝國盛世"
          ],
          "psychology": "「帝國的榮耀由刀劍築起，但帝國的長青依託於智慧與秩序。我將引領這個世界走向真正的終局。」",
          "sourceVideos": [
            {
              "id": "IOS7FKtiyxE",
              "title": "I Created Minecraft’s Greatest Empire",
              "channel": "SpokeIsHere",
              "duration": "47:20",
              "thumbnail": "https://i.ytimg.com/vi/IOS7FKtiyxE/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=IOS7FKtiyxE",
              "publishDate": "2026-09-20",
              "formattedDate": "2026 年 9 月 20 日"
            }
          ]
        }
      ],
      "unexpectedItems": [
        {
          "name": "10,356,000 Duped Gear Hoard（千萬級複製物資秘藏）",
          "rarity": "GLITCHED",
          "rarityColor": "#10b981",
          "howAcquired": "神不知鬼不覺截獲地下複製集團的自動分流漏斗，一口氣盜走並藏匿在基岩夾層的千萬件違禁物資。",
          "effectDesc": "擁有用不完的不死圖騰、附魔金蘋果與滿級獄髓套裝，使 Spoke 在物資消耗戰中立於不敗之地。",
          "glitchCode": "NBT: {ItemCount: 10356000, Source: 'Dupe_Network_Alpha', InfiniteReserves: true}"
        },
        {
          "name": "The Totem of Null（虛空代碼不死圖騰）",
          "rarity": "ANOMALY",
          "rarityColor": "#8b5cf6",
          "howAcquired": "在伺服器強行回檔修復的臨界瞬間，將圖騰放入副手時產生的資料錯位產物。",
          "effectDesc": "觸發復活時不會在原地生成，而是將玩家隨機短距離傳送穿透方塊，自帶 3 秒絕對幽靈穿牆狀態。",
          "glitchCode": "NBT: {Phasing: true, NullShift: 3.0, AnomalyTag: 'BypassCollider'}"
        },
        {
          "name": "Dean’s Screaming Goat Horn（哀號悲鳴山羊角）",
          "rarity": "RELIC",
          "rarityColor": "#f43f5e",
          "howAcquired": "在搜查被抹消玩家 Dean 的舊廢墟時，於土堆深處撿拾到的破損山羊角。",
          "effectDesc": "吹響時會發出淒厲的人聲呼救音頻，據稱能夠在特定維度召喚出伺服器被刪除角色的投影殘影。",
          "glitchCode": "NBT: {CustomSound: 'dean_help_audio.ogg', DimensionResonance: true}"
        },
        {
          "name": "Mafia Syndicate Black Ledger（黑手黨地下洗錢密碼本）",
          "rarity": "LORE",
          "rarityColor": "#64748b",
          "howAcquired": "臥底期間趁教父外出巡視，利用隱形藥水潛入辦公室暗格撬開保險箱抄錄的黑手黨全服賄賂名單。",
          "effectDesc": "詳細記錄了伺服器哪些領主和管理員收受了黑手黨賄賂，成為擊垮整個地下帝國的最致命法律重錘。",
          "glitchCode": "NBT: {BookData: 'MafiaBlackmail_Full', Signatures: ['Don_Sal', 'ShadowCouncil']}"
        },
        {
          "name": "Resonance Minecart Detonator（高頻共振秒殺礦車）",
          "rarity": "SUPERWEAPON",
          "rarityColor": "#ef4444",
          "howAcquired": "Spoke 獨創的陷阱藝術，將數百台 TNT 礦車壓縮在同一鐵軌格點上利用動量重疊引發代碼跳 tick。",
          "effectDesc": "一旦被引爆，爆炸威力會在零幀內疊加，即使身穿滿裝神級獄髓甲與持有不死圖騰也會被瞬間瞬秒蒸發。",
          "glitchCode": "NBT: {MinecartCount: 400, InstantDamage: 99999, TickSkipKill: true}"
        }
      ],
      "videos": [
        {
          "id": "wG9dbWNsems",
          "title": "How to Destroy the Unstable SMP",
          "titleZh": "如何毀滅 Unstable SMP（傳奇開山首集）",
          "duration": "24:18",
          "thumbnail": "https://i.ytimg.com/vi/wG9dbWNsems/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=wG9dbWNsems",
          "summary": "整個 Unstable SMP 系列的傳奇奠基開山首集！Spoke 與戰友 Jamato 深入邊界荒原，利用特殊的方塊更新檢測器（BUD）與漏斗堆疊，建造了一台微型時空卡頓器。裝置啟動使全服 TPS 驟降至 2.5，世界時鐘幾乎停止，向全服玩家首次揭示了底層代碼的致命漏洞！",
          "unexpectedLoot": "Chronos Glitch Core（時空漏洞核心）",
          "keyMoments": [
            "與 Jamato 脫離常規生存軌跡深入邊界山谷探測伺服器端極限",
            "巧妙拼裝僅佔地數格的紅石與漏斗時空運算卡頓器",
            "啟動裝置使全服 TPS 驟降至 2.5，在看門狗重啟前三秒果斷斷電"
          ],
          "publishDate": "2024-04-21",
          "formattedDate": "2024 年 4 月 21 日"
        },
        {
          "id": "E5jfdzB6RnY",
          "title": "How I Stole 10,356,000 Duped Items",
          "titleZh": "我如何神不知鬼不覺偷走 10,356,000 件複製神裝",
          "duration": "36:40",
          "thumbnail": "https://i.ytimg.com/vi/E5jfdzB6RnY/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=E5jfdzB6RnY",
          "summary": "Minecraft 史上最壯觀的物資截胡劫案！Spoke 循線挖穿違規複製工廠的哭泣黑曜石外牆。面對浩瀚的物資流水線，他利用反向比較器漏斗在地下架設暗渠，4 小時內神不知鬼不覺地將 10,356,000 件滿級獄髓與圖騰分流搬空，留下一面搞怪小丑旗震驚黑市！",
          "unexpectedLoot": "10,356,000 Duped Gear Hoard（千萬級複製物資秘藏）",
          "keyMoments": [
            "藉由黑市異常界伏盒聲學探勘挖穿地下加密哭泣黑曜石外牆",
            "在敵方主管道下精密安裝反向觸發比較器漏斗分流暗渠",
            "4 小時內分流轉移千萬件獄髓與圖騰，留下一面小丑旗撤離"
          ],
          "publishDate": "2024-05-13",
          "formattedDate": "2024 年 5 月 13 日"
        },
        {
          "id": "KyLqZkfv3BU",
          "title": "I Bankrupted Minecraft's Richest Civilization",
          "titleZh": "我搞垮了 Minecraft 最富有的億萬帝國",
          "duration": "31:22",
          "thumbnail": "https://i.ytimg.com/vi/KyLqZkfv3BU/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=KyLqZkfv3BU",
          "summary": "一場優雅的怪盜經濟學！面對寡頭 Roshambo 徵收 50% 暴利關稅的中央儲備銀行，Spoke 偽裝成海外大亨開立帳戶摸清金庫紅石傳感器。隨後以偽造交易引開守衛主力，潛入金庫將數萬塊黃金掉包為鍍金高爆 TNT，引爆了整座銀行，讓全服首富一夕破產！",
          "unexpectedLoot": "The Billionaire's Counterfeit Vault（被搬空的億萬富豪黑箱）",
          "keyMoments": [
            "喬裝海外神祕大亨高調入城開戶，藉參觀暗中在通風口植入偵測器",
            "偽造黑市交易引走銀行主力守衛，利用幽靈礦車卡角潛入金庫",
            "將數萬塊黃金洗劫一空，掉包為鍍金 TNT 遠程引爆摧毀銀行"
          ],
          "publishDate": "2024-07-19",
          "formattedDate": "2024 年 7 月 19 日"
        },
        {
          "id": "Ss5ggp8Ij14",
          "title": "I Infiltrated The Minecraft Mafia",
          "titleZh": "我臥底潛入了橫行霸道的黑手黨犯罪家族",
          "duration": "29:45",
          "thumbnail": "https://i.ytimg.com/vi/Ss5ggp8Ij14/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=Ss5ggp8Ij14",
          "summary": "黑手黨猖獗企圖暗殺國王，Spoke 褪去綠色連帽衫換上黑色西裝，化名冷酷獨行刺客『影狼』臥底潛入黑手黨內部。面對地下刑房紅石測謊儀與教父的苛刻考核，Spoke 展現影帝級心理素質贏得信任，成功打入犯罪家族核心最高層！",
          "unexpectedLoot": "Shadow Wolf's Infiltration Suit（影狼潛伏西裝）",
          "keyMoments": [
            "換裝黑曜石色西裝在地下酒館雷霆出手引起黑手黨教父注意",
            "在刑房頂住紅石測謊椅生死審問，以超凡演技贏得教父信任",
            "接過黑手黨專屬徽章，正式被任命為加冕大典暗殺行動副指揮"
          ],
          "publishDate": "2024-11-18",
          "formattedDate": "2024 年 11 月 18 日"
        },
        {
          "id": "x9-V64fR9sU",
          "title": "The End of the Minecraft Mafia",
          "titleZh": "黑手黨帝國的終結之日",
          "duration": "38:15",
          "thumbnail": "https://i.ytimg.com/vi/x9-V64fR9sU/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=x9-V64fR9sU",
          "summary": "黑手黨家族的毀滅葬禮！在黑手黨首腦於摩天大樓頂層召開誓師大會當夜，身為副指揮的 Spoke 悄然溜入地下室，在單格軌道上極限堆疊了 64 輛共振 TNT 礦車。扣動扳機的瞬間，整座摩天大樓在連鎖殉爆中灰飛煙滅，黑手黨帝國徹底終結！",
          "unexpectedLoot": "The Godfather's Burned Signet（教父燒融的黑手黨族徽戒指）",
          "keyMoments": [
            "利用雙面間諜身份向盟友傳遞暗殺路線並摸清總部承重結構",
            "在總部地下單格軌道堆疊 64 輛具備幾何級殉爆的共振 TNT 礦車",
            "在頂樓教父舉杯之際遠程引爆，整座大樓崩解為漫天齏粉"
          ],
          "publishDate": "2025-01-29",
          "formattedDate": "2025 年 1 月 29 日"
        },
        {
          "id": "8_Au10osdEo",
          "title": "Unstable SMP: The NULL / Purgatory Saga",
          "titleZh": "Unstable SMP：虛空煉獄與 NULL 代碼之謎",
          "duration": "33:50",
          "thumbnail": "https://i.ytimg.com/vi/8_Au10osdEo/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=8_Au10osdEo",
          "summary": "黑手黨滅亡後，伺服器出現了不可名狀的幽靈代碼異象。Spoke 隻身穿梭於被放逐的代碼煉獄維度，在虛空亂流與代碼殘渣中與幽靈實體博弈，最終掌握了能穿透物理碰撞體、在致命傷害前強行重寫狀態的禁忌神器 Totem of Null！",
          "unexpectedLoot": "Totem of Null（虛空無效化圖騰）",
          "keyMoments": [
            "追蹤主世界頻繁出現的幽靈代碼碎屑，開啟隱藏的煉獄傳送門",
            "在重力紊亂的代碼裂隙中與未知的代碼幽靈實體展開極限周旋",
            "在世界重置臨界瞬間完成副手錯位卡位，起獲虛空無效化圖騰"
          ],
          "publishDate": "2026-06-23",
          "formattedDate": "2026 年 6 月 23 日"
        },
        {
          "id": "ynkhNRpQ9Xc",
          "title": "1000 Players Build END Civilization in Hardcore Minecraft",
          "titleZh": "1000 名玩家在極限硬核 Minecraft 建立終界龐大文明",
          "duration": "43:10",
          "thumbnail": "https://i.ytimg.com/vi/ynkhNRpQ9Xc/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=ynkhNRpQ9Xc",
          "summary": "波瀾壯闊的千人遠征！為了擺脫主世界各大霸權與 The LAW 的監控，Spoke 帶領千名玩家進軍終界虛空。在深不見底的虛空深淵之上，千人協同作戰，克服龍息與虛空墜落，搭建起綿延數萬格的黑曜石懸浮要塞與跨島文明通道！",
          "unexpectedLoot": "End Void Bridge Master Key（終界虛空天橋大師密匙）",
          "keyMoments": [
            "千名玩家集體穿越終界傳送門，在無垠虛空中展開第一座空島基建",
            "克服龍息毒霧與虛空墜落威脅，建立起四通八達的跨島空中天橋",
            "終界黑曜石第一衛城正式宣告落成，迎來千人定居新紀元"
          ],
          "publishDate": "2026-07-26",
          "formattedDate": "2026 年 7 月 26 日"
        },
        {
          "id": "V9HzAdwgf-I",
          "title": "I Created Minecraft's Greatest Military",
          "titleZh": "我打造了 Minecraft 史上最強大的精銳軍團",
          "duration": "35:40",
          "thumbnail": "https://i.ytimg.com/vi/V9HzAdwgf-I/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=V9HzAdwgf-I",
          "summary": "終界帝國的軍事崛起！為了保衛終界文明不受主世界軍隊干涉，Spoke 將隱形藥水突襲、高頻終界珍珠閃擊與瞬爆礦車戰術全面體系化，親自訓練出一支戰無不勝的終界幽靈軍團，成為令全服各大勢力聞風喪膽的頂級軍事統帥！",
          "unexpectedLoot": "Shadow Phantom War Signet（幽靈軍團戰神徽印）",
          "keyMoments": [
            "在終界訓練場將高頻珍珠閃擊與跳劈破盾編寫為制式操典",
            "為千名士兵配備滿級獄髓盔甲、隱形藥水與瞬爆礦車突擊包",
            "在終界大演習中展現幽靈軍團瞬息蒸發敵陣的恐怖戰鬥力"
          ],
          "publishDate": "2026-08-13",
          "formattedDate": "2026 年 8 月 13 日"
        },
        {
          "id": "lA1ohDqw8XA",
          "title": "Exploring Minecraft’s Forgotten Dimension",
          "titleZh": "探索 Minecraft 被遺忘的失落維度（幽冥深淵秘境）",
          "duration": "39:15",
          "thumbnail": "https://i.ytimg.com/vi/lA1ohDqw8XA/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=lA1ohDqw8XA",
          "summary": "深淵探索史詩！Spoke 穿透地獄熔岩海下方的虛空基岩，孤身降臨漆黑未知的失落維度（Underworld）。在無光死局與無形代碼異獸的狂暴追獵下，Spoke 憑藉絕頂身法穿行於破碎浮島，成功發掘出記載世界起源的遠古代碼石板！",
          "unexpectedLoot": "Origin Code Slate（起源原始碼石板）",
          "keyMoments": [
            "穿透地獄熔岩海底部的虛空基岩，失重墜入漆黑的失落維度",
            "避開無常規碰撞箱的古代代碼異獸追殺，在浮空碎島極限跳躍",
            "在遠古遺跡祭壇起獲記載世界底層架構的起源原始碼石板"
          ],
          "publishDate": "2026-09-07",
          "formattedDate": "2026 年 9 月 7 日"
        },
        {
          "id": "IOS7FKtiyxE",
          "title": "I Created Minecraft’s Greatest Empire",
          "titleZh": "我締造了 Minecraft 史上最偉大的至高帝國（最新熱播中！）",
          "duration": "47:20",
          "thumbnail": "https://i.ytimg.com/vi/IOS7FKtiyxE/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=IOS7FKtiyxE",
          "summary": "2026 最新震撼主線！攜帶失落維度的遠古神力，Spoke 重返終界整合三界資源，正式加冕並宣告建立 Minecraft 史上最強帝國！面對 Lattice K 與 The LAW 大軍在邊界的重裝集結，終界帝皇率無敵軍團隔空對峙，傳奇持續燃燒！",
          "unexpectedLoot": "End Sovereign Void-Plate（終界至尊虛空戰鎧）",
          "keyMoments": [
            "融合三界資源在終界核心島築起千格高的終界至尊宮殿",
            "手持起源石板在萬軍簇擁下正式加冕為終界至高帝皇",
            "率領幽靈軍團在維度傳送門前直面 The LAW 大軍，霸氣宣戰"
          ],
          "publishDate": "2026-09-20",
          "formattedDate": "2026 年 9 月 20 日"
        }
      ],
      "channel": "SpokeIsHere",
      "channelUrl": "https://www.youtube.com/@SpokeIsHere",
      "badge": "CHAOS & TACTICS"
    },
    "flamefrags": {
      "id": "flamefrags",
      "name": "FlameFrags",
      "realHandle": "FlameFrags",
      "roleTitle": "極限戰神 · Terminus 破獄者 · 千人萬軍先鋒統帥",
      "tagline": "「在無情的戰火與追殺中，唯有純粹的戰鬥技藝才能換來永生。」",
      "themeColor": "#f97316",
      "avatar": "assets/avatars/flamefrags.jpg",
      "skinBody": "assets/skins/flamefrags_3d.png",
      "appearance": {
        "summary": "烈焰赤紅與深黑交織的作戰裝束，手持近戰戰刃，眼神如鷹隼般銳利冷冽，周身環繞著不滅戰火。",
        "features": [
          "色彩基調：熔岩赤紅（Flame Red）與深淵黑曜石黑（Obsidian Black）之高對比戰甲",
          "裝備輪廓：特製獄髓重裝戰甲，胸口刻有先鋒軍團專屬銘文",
          "戰鬥神態：目光如電，手握 Truth-Seeker 處決戰刃，時刻處於無懈可擊的臨戰姿態",
          "現實說明：FlameFrags 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方百萬頻道當前最新使用之烈焰紅黑頭像"
        ]
      },
      "stats": {
        "intellect": 84,
        "strategy": 89,
        "pvpCombat": 99,
        "influence": 91,
        "stealth": 76
      },
      "personality": "熱血堅韌、為戰而生的絕對武力代表。他不在乎繁複的政治權謀，只相信手中揮舞的戰刃與流淌的熱血。在隊友陷入絕境時，他永遠是那個一人一劍擋在萬軍之前的最堅固盾牌。",
      "biography": "FlameFrags 在 Unstable SMP 的登場徹底改變了伺服器的戰力格局。身處殘酷的極限硬核環境，他以純粹的原生近戰技藝與身法登頂全服最強戰神之位（The Skill & Training Arc）。\n\n他曾隻身一人在雪峰全殲盤踞作惡的五人霸凌公會；更在遭到暗算押入全服最恐怖的特級死刑黑牢「Terminus」時上演絕命大逃亡；在全服公開大會上，他當眾戳穿所謂『最強戰神』的作弊外掛假面具；在爭奪資源命脈的「巨型農場爭奪戰（The Great Farm War）」與震驚宇宙的千人大內戰中，他更作為自由同盟的突擊先鋒總司令，一人一劍撕裂敵軍防線！",
      "storyArcs": [
        {
          "id": "flamefrags_arc_1",
          "title": "第一章：硬核不死神話！解鎖異常不死金心",
          "subtitle": "硬核極限不死神話、利用生命代碼機制合成異常不死金心",
          "publishDate": "2025-05-03",
          "formattedDate": "2025 年 5 月 3 日",
          "summary": "作為 Unstable SMP 最具個人風格的熱血戰士，FlameFrags 剛踏入這片危險大陸時，便面臨極限硬核的一命通關挑戰。面對苛刻的環境，他敏銳發掘了一套利用傷害延遲與金蘋果抗性疊加的生命代碼機制，成功合成出能持續提供額外吸收護盾的『代碼異常不死金心』，成就了他孤狼生存的不死傳奇。",
          "genesis": "Unstable SMP 極端殘酷的生存機制使得新手存活率不足百分之五。FlameFrags 決心尋找一條打破常規的生存之道。",
          "conflict": "在測試抗性疊加臨界值時，FlameFrags 數次將血量壓制在半顆心的死亡懸崖邊緣，引導爬行者與骷髏弓箭手同時造成傷害，在極限幀率中成功觸發屬性鎖定，將異常金心收入囊中。",
          "lootAndAnomaly": "Glitched Immortal Heart Reservoir（代碼異常不死金心）",
          "impact": "不死金心的誕生讓 FlameFrags 擁有了敢於在任何險境中單挑整支軍團的底氣，成為全服聞風喪膽的硬漢代表。",
          "keyPlotPoints": [
            "踏入 Unstable SMP 極限硬核荒原，直面一命通關死亡威脅",
            "深入研究生命值結算與藥水抗性的微秒級時間差",
            "在血量僅剩半顆心的生死邊緣極限完成機制觸發",
            "成功鍛造出具備超強自癒屬性的代碼異常不死金心",
            "確立孤狼戰士不可戰勝的生存信條"
          ],
          "psychology": "「只要你心中沒有對死亡的恐懼，死亡便無法追上你的腳步。」",
          "sourceVideos": [
            {
              "id": "Vhnn_sG7xUk",
              "title": "I Became Immortal on a Hardcore Minecraft SMP",
              "channel": "FlameFrags",
              "duration": "25:40",
              "thumbnail": "https://i.ytimg.com/vi/Vhnn_sG7xUk/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=Vhnn_sG7xUk",
              "publishDate": "2025-05-03",
              "formattedDate": "2025 年 5 月 3 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_2",
          "title": "第二章：孤狼血戰！單挑全服最囂張毒瘤公會",
          "subtitle": "孤狼單挑囂張毒瘤霸權、以一敵十血洗基地與廢墟純白之花",
          "publishDate": "2025-05-17",
          "formattedDate": "2025 年 5 月 17 日",
          "summary": "一個以霸凌新人著稱的毒瘤公會在野外圍攻散戶，掠奪所有隨身物品。FlameFrags 孤身一人拔劍介入，在敵方大本營展開長達數十分鐘的瘋狂單挑。他憑藉剛猛無匹的斧盾連招與極限跳劈，將敵方十餘名全副武裝的霸凌者全數斬殺，並在戰火廢墟中留下一朵純白之花。",
          "genesis": "毒瘤公會甚至在公共公頻公然叫囂侮辱弱小玩家。FlameFrags 隻身攜帶滿裝備前往其總部討伐。",
          "conflict": "敵方十餘人組成盾牆與弩箭陣伺候。FlameFrags 祭出極致的近身纏鬥的身法，在敵群中如同烈火般穿梭，破盾、跳劈、補刀一氣呵成，將囂張的毒瘤公會打至心理崩潰徹底潰散。",
          "lootAndAnomaly": "Rejoice’s Flower（戰火廢墟中的純白之花）",
          "impact": "一戰封神！FlameFrags 孤身滅隊的壯舉傳遍各大伺服器，讓無數散戶看到了反抗強權的希望。",
          "keyPlotPoints": [
            "回應散戶求援，隻身踏足毒瘤公會重兵把守的大本營",
            "面對十倍於己的武裝守軍毫無懼色拔劍正面迎敵",
            "憑藉神級破盾與正手跳劈連續格殺五名敵軍主力",
            "一人之力平推整座基地，逼迫敵方公會長繳械下跪",
            "在焦土廢墟中插上一朵象徵希望與重生的純白之花"
          ],
          "psychology": "「以強凌弱者，必將被更強大的刀刃所終結。我就是你們的夢魘。」",
          "sourceVideos": [
            {
              "id": "UJyBjBXaiZI",
              "title": "SOLO Player VS Toxic Minecraft Team",
              "channel": "FlameFrags",
              "duration": "30:15",
              "thumbnail": "https://i.ytimg.com/vi/UJyBjBXaiZI/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=UJyBjBXaiZI",
              "publishDate": "2025-05-17",
              "formattedDate": "2025 年 5 月 17 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_3",
          "title": "第三章：農場風雲！全服巨型物資農場爭奪戰",
          "subtitle": "全服自動化巨型農場爭奪大戰、先鋒戰戟誓死捍衛糧道",
          "publishDate": "2025-08-12",
          "formattedDate": "2025 年 8 月 12 日",
          "summary": "物資是戰爭的血液。多個強盜聯盟聯合圍攻散戶合資建立的巨型自動化糧食與物資農場。FlameFrags 應邀擔任前線防守司令官。他在狹窄的農場通道布下立體伏擊網，手持戰戟浴血奮戰三天三夜，打退七波敵方瘋狂衝鋒，誓死捍衛了全服散戶的生命糧道。",
          "genesis": "自動化農場是數百名平民玩家賴以生存的命脈，一旦淪陷，整個區域將陷入大饑荒。FlameFrags 義無反顧接下防守重任。",
          "conflict": "敵軍祭出了掘地炸彈與水流推進戰術。FlameFrags 親臨第一線搶修防線，利用狹窄地利實施一夫當關萬夫莫開的阻擊，反手斬殺敵方先鋒指揮官，徹底打崩敵軍士氣。",
          "lootAndAnomaly": "Harvester’s Vanguard Glaive（豐收之護先鋒戰戟）",
          "impact": "成功保全了全服最大的公共物資基地，獲贈代表全體平民感謝的先鋒戰戟，成為平民心目中的無雙守護神。",
          "keyPlotPoints": [
            "受託擔任巨型公共農場最高戰術防守指揮官",
            "在連綿數百格的農作物區域布設紅石隱蔽防禦陷阱",
            "正面迎擊敵方七輪輪番轟炸與重裝步兵衝鋒",
            "於前線戰壕斬殺敵軍首席進攻總指揮官",
            "獲贈象徵豐收與守護的先鋒戰戟，贏得散戶崇敬"
          ],
          "psychology": "「他們想搶走孩子們的麵包，就必須先踏過我這具被鋼鐵包裹的軀體。」",
          "sourceVideos": [
            {
              "id": "xxbwmsi4n-U",
              "title": "Unstable SMP: The Great Farm War",
              "channel": "FlameFrags",
              "duration": "34:25",
              "thumbnail": "https://i.ytimg.com/vi/xxbwmsi4n-U/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=xxbwmsi4n-U",
              "publishDate": "2025-08-12",
              "formattedDate": "2025 年 8 月 12 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_4",
          "title": "第四章：千人狂潮！萬人大內戰的先鋒破陣",
          "subtitle": "兩千人全面陣營大混戰、鋒線第一殺戮突進與奪取先鋒軍旗",
          "publishDate": "2026-05-31",
          "formattedDate": "2026 年 5 月 31 日",
          "summary": "Unstable SMP 迎來了史上最震撼的 1000 VS 1000 玩家萬人大內戰。在綿延數公里的血火戰場上，FlameFrags 作為正義陣營的第一箭頭，親率敢死隊直插敵軍中央主陣。在漫天箭雨與 TNT 轟炸中，他一人斬將奪旗，生生在敵軍鋼鐵防線上鑿出了一條通往勝利的血路！",
          "genesis": "陣營矛盾積累至頂點，雙方各動員千名精銳展開全服命運大決戰。FlameFrags 主動請纓擔任最危險的前鋒突破手。",
          "conflict": "戰場視線被硝煙與火焰徹底吞沒。FlameFrags 頂著重型投石機與密集弩箭雨，手握戰斧狂暴突進，破盾如碎紙，連續挑翻敵方三座哨塔，親手拔下敵方中央軍旗。",
          "lootAndAnomaly": "1000-Player Vanguard War Banner（萬人大內戰先鋒軍旗）",
          "impact": "先鋒突破直接導致敵軍中軍指揮系統混亂，為大軍後續全面合圍奠定了決定性勝局。",
          "keyPlotPoints": [
            "在兩千人巨型戰場上擔任自由聯盟第一突擊先鋒官",
            "冒著連天火海帶領精銳小隊發起決死反衝鋒",
            "單兵斬破敵軍黑曜石重裝防線，挑落三名敵軍千夫長",
            "登上敵方中央指揮高地，強行斬斷並奪取敵軍破陣戰旗",
            "為萬人大內戰吹響全面勝利的反攻號角"
          ],
          "psychology": "「衝在最前面的人或許最容易倒下，但他的腳步將為身後的千軍萬馬照亮方向。」",
          "sourceVideos": [
            {
              "id": "UnFIrVKA9Zc",
              "title": "1000 VS 1000 Player Minecraft Civil War",
              "channel": "FlameFrags",
              "duration": "48:10",
              "thumbnail": "https://i.ytimg.com/vi/UnFIrVKA9Zc/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=UnFIrVKA9Zc",
              "publishDate": "2026-05-31",
              "formattedDate": "2026 年 5 月 31 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_5",
          "title": "第五章：加冕戰神！鍛造全服最強烈焰戰鎧",
          "subtitle": "登頂伺服器最強個人戰神、親手鍛造專屬烈焰重戰甲",
          "publishDate": "2026-06-09",
          "formattedDate": "2026 年 6 月 9 日",
          "summary": "內戰封神後，FlameFrags 正式加冕為全服公認的最強單挑戰神。為迎接更高層次的挑戰，他深入極限地獄熔岩之海，採集最純淨的古代遠古遺骸與地獄之星，親手打造了一套帶有烈焰回敬與傷害反彈屬性的『烈焰專屬獄髓重戰甲』，戰力邁入神話領域。",
          "genesis": "隨著威名遠揚，無數隱世高手紛紛前來挑戰。FlameFrags 感到現有裝備已無法完全釋放其狂暴的戰鬥潛能，決心打造神兵戰鎧。",
          "conflict": "鍛造過程中必須在千度熔岩瀑布旁維持極致專注的打鐵節奏，同時擊退趁機偷襲的熔岩異獸。FlameFrags 在烈焰洗禮中將意志注入獄髓，成功完成神器出世。",
          "lootAndAnomaly": "Flame’s Bespoke Warplate（烈焰專屬獄髓重戰甲）",
          "impact": "專屬戰鎧的出世宣告了 FlameFrags 個人武力的極致昇華，成為全服戰鬥力排行榜榜首。",
          "keyPlotPoints": [
            "深入地獄最深層熔岩海採掘稀世遠古遺骸與地獄之星",
            "在烈火熔爐前連續鍛打三天三夜注入戰鬥意志",
            "成功抵禦熔岩怪物與偷襲刺客的連環騷擾",
            "鍛成兼具極限防禦與烈焰反擊的專屬獄髓重戰甲",
            "正式被全服玩家公推加冕為最強無雙戰神"
          ],
          "psychology": "「鋼鐵需要烈火的淬煉才能鋒利，勇士需要鮮血與磨難的洗禮才能無敵。」",
          "sourceVideos": [
            {
              "id": "Ym2wmd19S_c",
              "title": "I Became the Strongest on the Unstable SMP",
              "channel": "FlameFrags",
              "duration": "28:50",
              "thumbnail": "https://i.ytimg.com/vi/Ym2wmd19S_c/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=Ym2wmd19S_c",
              "publishDate": "2026-06-09",
              "formattedDate": "2026 年 6 月 9 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_6",
          "title": "第六章：死神追獵！宗師 ClownPierce 的致命試煉",
          "subtitle": "遭到死神宗師 ClownPierce 極限追獵、以戰養戰領會連斬戰鐮",
          "publishDate": "2026-06-18",
          "formattedDate": "2026 年 6 月 18 日",
          "summary": "名揚全服的 FlameFrags 引來了全世界最可怕的 PVP 死神——ClownPierce 的親自追獵！在這場代表 Minecraft 戰技巔峰的對決中，FlameFrags 與 ClownPierce 展開了數萬格跨地形長途追逐與廝殺。FlameFrags 在生死一線中以戰養戰，領會了對方的核心刀意，獲贈 ClownPierce 親傳的連斬戰鐮！",
          "genesis": "ClownPierce 聽聞 Unstable SMP 出現了一位未嘗一敗的熱血戰神，親自降臨伺服器展開高規格格鬥考驗。",
          "conflict": "巔峰級的刀法與走位碰撞。ClownPierce 的出刀角度刁鑽狠辣令人窒息，FlameFrags 則以剛猛的格擋與極限反手跳劈頑強對抗，兩人在峽谷中大戰數百回合，打得天地變色。",
          "lootAndAnomaly": "ClownPierce’s Training Scythe（死神親傳連斬戰鐮）",
          "impact": "這場曠世對決被無數玩家錄製為 PVP 必修教材，FlameFrags 贏得了格鬥天花板 ClownPierce 的真誠認可。",
          "keyPlotPoints": [
            "遭遇全服公認 PVP 死神宗師 ClownPierce 的致命獵殺挑戰",
            "在萬丈深淵與荒原雪山展開極限拉扯與巔峰對抗",
            "正面接下 ClownPierce 號稱無解的連續跳劈殺招",
            "在生死搏殺中完成技術突破，領悟死神刀法精髓",
            "獲得 ClownPierce 贈予的象徵傳承的特訓戰鐮"
          ],
          "psychology": "「只有與最強大的對手交手，你才能看清自己極限的真正邊界在哪裡。」",
          "sourceVideos": [
            {
              "id": "ljppGDO4HlU",
              "title": "I Got Hunted By a Minecraft Combat Master",
              "channel": "FlameFrags",
              "duration": "32:30",
              "thumbnail": "https://i.ytimg.com/vi/ljppGDO4HlU/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=ljppGDO4HlU",
              "publishDate": "2026-06-18",
              "formattedDate": "2026 年 6 月 18 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_7",
          "title": "第七章：魔鬼特訓！世界頂級格鬥宗師的洗禮",
          "subtitle": "接受世界頂尖格鬥宗師魔鬼特訓、研磨出絕對精準大師砥石",
          "publishDate": "2026-07-03",
          "formattedDate": "2026 年 7 月 3 日",
          "summary": "與 ClownPierce 的交手讓 FlameFrags 意識到自己的技術仍有打磨空間。他毅然拜入頂級格鬥宗師門下，展開為期數百小時的魔鬼特訓。他在高壓實戰中將走位反應速度提升至微秒級，親手研磨出象徵武道大成的『絕對精準大師砥石』，完成由猛將向一代宗師的蛻變。",
          "genesis": "為了在未來的伺服器大戰中守護身邊的人，FlameFrags 決心將自己的戰技打磨至完美無瑕的境界。",
          "conflict": "特訓內容包括蒙眼盲聽格擋、極限空間一對三閃避等非人考驗。FlameFrags 忍受著無數次被擊飛的痛楚，日以繼夜瘋狂練習，最終實現了肌肉記憶與武器的完美合一。",
          "lootAndAnomaly": "Master’s Whetstone of Absolute Precision（絕對精準大師砥石）",
          "impact": "戰鬥力達到返璞歸真的全新境界，出招不再僅憑蠻力，而是招招直擊敵方破綻的絕對精準。",
          "keyPlotPoints": [
            "進入封閉特訓營，接受格鬥大師制定的地獄級極限考驗",
            "完成蒙眼聽聲辨位格擋一千箭矢的嚴酷試煉",
            "突破人類神經反應極限，微操精度達到微秒級別",
            "以精湛心血研磨出武道大成信物『大師砥石』",
            "完成戰士向全能格鬥宗師的歷史性跨越"
          ],
          "psychology": "「力量會隨時間衰竭，但銘刻進靈魂深處的精準戰技將永不磨滅。」",
          "sourceVideos": [
            {
              "id": "yBy5NnLTiWQ",
              "title": "I Got Trained By the World's Deadliest Minecraft Player",
              "channel": "FlameFrags",
              "duration": "35:15",
              "thumbnail": "https://i.ytimg.com/vi/yBy5NnLTiWQ/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=yBy5NnLTiWQ",
              "publishDate": "2026-07-03",
              "formattedDate": "2026 年 7 月 3 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_8",
          "title": "第八章：血冕加冕！頂尖高手 PVP 模擬錦標賽",
          "subtitle": "全服頂尖高手 PVP 死亡淘汰模擬賽、一路浴血加冕血冕總冠軍",
          "publishDate": "2026-07-21",
          "formattedDate": "2026 年 7 月 21 日",
          "summary": "全服最頂尖的數十位職業選手與工會領袖齊聚角鬥場，舉辦殘酷的單敗淘汰 PVP 模擬大賽。FlameFrags 抽籤落入死亡之組，但他一路披荊斬棘，以全勝戰績連克強敵，在總決賽中以一記驚世駭俗的反向盾反連斬奪得冠軍，戴上了象徵無敵霸業的血冕總冠軍桂冠！",
          "genesis": "各大勢力為劃分領地與勢力範圍，發起了一場憑實力說話的最高規格武道大會。全服目光聚焦於此。",
          "conflict": "每一輪對手皆是成名已久的頂級高手。FlameFrags 展現了教科書般的戰術應變，時而穩若泰山，時而疾如烈火，在決賽落後的情況下上演絕地大翻盤，技驚四座。",
          "lootAndAnomaly": "Grand Champion’s Laurel of Blood（血冕總冠軍桂冠）",
          "impact": "無可挑剔地登頂競技 PVP 之巔，各大陣營再無一人敢質疑其戰神實力。",
          "keyPlotPoints": [
            "受邀出戰全服最高榮譽的頂尖高手死亡淘汰錦標賽",
            "在死亡之組連續擊敗四名老牌公會第一戰力代表",
            "在準決賽殘血絕境下上演神級反手連招絕殺對手",
            "總決賽憑藉大師級精準戰法完勝奪冠",
            "加冕萬人景仰的血冕總冠軍桂冠"
          ],
          "psychology": "「擂台之上沒有退路，每一次出劍，都是對自己靈魂的叩問。」",
          "sourceVideos": [
            {
              "id": "BCiRLHaeHkI",
              "title": "Minecraft's Best Players Simulate PVP Tournament",
              "channel": "FlameFrags",
              "duration": "41:40",
              "thumbnail": "https://i.ytimg.com/vi/BCiRLHaeHkI/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=BCiRLHaeHkI",
              "publishDate": "2026-07-21",
              "formattedDate": "2026 年 7 月 21 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_9",
          "title": "第九章：撕破偽善！公開揭發作弊偽神的面具",
          "subtitle": "當眾揭發偽神外掛作弊醜聞、真實之眼破偽裁決戰刃斬落神壇",
          "publishDate": "2026-08-14",
          "formattedDate": "2026 年 8 月 14 日",
          "summary": "某位自詡為『不可戰勝的戰神』的高人氣玩家在伺服器大肆斂財，暗中卻利用外掛代碼修改攻擊距離。FlameFrags 敏銳捕捉到其碰撞箱異常，精心搜集了數十條底層封包作弊鐵證，並在全服直播的巔峰挑戰賽中當場拆穿其偽裝，以破偽裁決戰刃將其親手斬落神壇！",
          "genesis": "作弊偽神的行徑嚴重污染了競技環境，甚至引導粉絲圍攻敢於質疑的普通玩家。FlameFrags 決定為競技正義挺身而出。",
          "conflict": "挑戰賽現場，作弊者試圖以非法連點壓制。FlameFrags 依靠精妙的走位卡死視角，同時透過後台指令同步輸出作弊日誌，隨後一劍破盾將其斬殺，作弊者當場被伺服器系統封禁。",
          "lootAndAnomaly": "The Truth-Seeker's Executioner Blade（真實之眼破偽裁決戰刃）",
          "impact": "淨化了伺服器的競技生態，捍衛了無數光明磊落競技者的尊嚴，贏得全服廣泛敬重。",
          "keyPlotPoints": [
            "細緻分析作弊者戰鬥錄影，提取底層異常距離封包數據",
            "公開發起全服見證的現場巔峰一對一挑戰",
            "在擂台實戰中當面逼出作弊者的外掛漏洞破綻",
            "同步公開鐵證日誌，一劍將虛偽的作弊者斬殺封號",
            "收繳裁決戰刃，捍衛公平競爭的崇高底線"
          ],
          "psychology": "「真正的榮耀是用汗水與傷痕換來的，任何靠卑劣手段竊取的虛名，都將在陽光下化為齏粉。」",
          "sourceVideos": [
            {
              "id": "BkYekSPynVo",
              "title": "I Exposed Minecraft's 'Strongest' Player",
              "channel": "FlameFrags",
              "duration": "27:50",
              "thumbnail": "https://i.ytimg.com/vi/BkYekSPynVo/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=BkYekSPynVo",
              "publishDate": "2026-08-14",
              "formattedDate": "2026 年 8 月 14 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_10",
          "title": "第十章：幽靈金庫！尋找不存在於地圖的寶藏",
          "subtitle": "踏遍八萬格尋找被代碼隱蔽的隱形金庫、獲取幽靈協議卡",
          "publishDate": "2026-09-11",
          "formattedDate": "2026 年 9 月 11 日",
          "summary": "伺服器深處流傳著一座『不存在的金庫』傳說，據說那裡存放著能干擾伺服器指令的幽靈協議。FlameFrags 憑藉微弱的代碼震顫線索，隻身跨越八萬格蠻荒冰原與極限空島，在虛空裂縫邊緣解開了空間折射機關，成功獲取了象徵虛空通行權的『幽靈協議金庫卡』！",
          "genesis": "許多尋寶者在尋找這座金庫時迷失在無盡虛空中。FlameFrags 接受了這項近乎不可能的尋寶委託。",
          "conflict": "金庫周圍布設了空間扭曲力場，稍有不慎便會被傳送進虛空死亡。FlameFrags 運用高超的珍珠投擲技術與坐標對照，在隱形浮島間摸索前進，成功穿透保護結界。",
          "lootAndAnomaly": "Ghost Protocol Keycard（幽靈協議金庫卡）",
          "impact": "掌握了打開全服最隱秘空間的鑰匙，為應對即將到來的全服監獄危機做好了戰略鋪墊。",
          "keyPlotPoints": [
            "解讀古老石板謎題，踏上跨越八萬格荒原的尋寶長征",
            "克服指南針失靈與空間扭曲力場的雙重迷障",
            "在虛空裂縫邊緣發現利用代碼隱身的幽靈金庫入口",
            "破解多重幾何空間折射暗門機關",
            "獲取至關重要的幽靈協議金庫卡"
          ],
          "psychology": "「世界上最珍貴的寶藏，往往隱藏在最讓人望而卻步的絕境之中。」",
          "sourceVideos": [
            {
              "id": "h68WUZ8b0O0",
              "title": "Searching for a Vault that Doesn't Exist",
              "channel": "FlameFrags",
              "duration": "33:10",
              "thumbnail": "https://i.ytimg.com/vi/h68WUZ8b0O0/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=h68WUZ8b0O0",
              "publishDate": "2026-09-11",
              "formattedDate": "2026 年 9 月 11 日"
            }
          ]
        },
        {
          "id": "flamefrags_arc_11",
          "title": "第十一章：逃離絕境！破碎 Terminus 最致命死刑黑牢",
          "subtitle": "逃離全服最致命死刑黑牢 Terminus、破獄獄髓鎬粉碎牢籠",
          "publishDate": "2026-10-06",
          "formattedDate": "2026 年 10 月 6 日",
          "summary": "在最新劇情中，FlameFrags 遭到神秘組織背刺暗算，被關押進號稱防守等級超越 Paragon 的全服最殘酷死刑黑牢『Terminus』。牢內四壁被多層浸水黑曜石與基岩阻絕，更有重兵 24 小時無死角巡邏。FlameFrags 憑藉驚人的意志與智慧，暗中利用金庫卡破譯防線，手持破獄獄髓鎬粉碎牢籠奇蹟越獄！",
          "genesis": "敵對聯盟勾結黑客勢力，企圖借 Terminus 黑牢將 FlameFrags 永久封印淘汰。黑牢號稱『走入此門者，放棄一切希望』。",
          "conflict": "在被剝奪所有常規裝備的絕境中，FlameFrags 巧妙利用衛兵巡邏間隙製造混亂，用隱藏的微型紅石工具觸發自毀系統，隨後手持自製的破獄鎬一路破壁突圍，在全服警報聲中從容殺出血路！",
          "lootAndAnomaly": "Terminus Breaker Pickaxe（Terminus 破獄者獄髓鎬）",
          "impact": "再次打破了號稱無懈可擊的神話牢籠，昭示著 FlameFrags 的傳奇仍在繼續，沒有任何力量能將他永遠禁錮！",
          "keyPlotPoints": [
            "遭敵對勢力暗算，被剝奪全套神裝打入死刑黑牢 Terminus",
            "在重重守衛與監視器下暗中聯絡反抗盟友",
            "利用隱藏紅石零件製造短路引發全牢房警報混亂",
            "手持自製的破獄獄髓鎬強行鑿穿黑曜石防爆外牆",
            "從萬丈懸崖一躍而下逃出生天，傳奇未完待續"
          ],
          "psychology": "「牢籠只能鎖住膽怯的肉體，永遠困不住一顆渴望自由與戰鬥的心！」",
          "sourceVideos": [
            {
              "id": "8t8YBu7bdT0",
              "title": "Escaping Terminus: The Deadliest Minecraft Prison",
              "channel": "FlameFrags",
              "duration": "38:45",
              "thumbnail": "https://i.ytimg.com/vi/8t8YBu7bdT0/maxresdefault.jpg",
              "youtubeUrl": "https://www.youtube.com/watch?v=8t8YBu7bdT0",
              "publishDate": "2026-10-06",
              "formattedDate": "2026 年 10 月 6 日"
            }
          ]
        }
      ],
      "unexpectedItems": [
        {
          "name": "Terminus Breaker Pickaxe（Terminus 破獄者獄髓鎬）",
          "rarity": "ANOMALY",
          "rarityColor": "#ea580c",
          "howAcquired": "在特級死刑牢 Terminus 底層，利用私藏微型元件與被磨去序列號的獄髓殘渣熔鑄而成的破獄神兵。",
          "effectDesc": "具備無視挖掘疲勞的極速鑿擊效能，能瞬間粉碎敵軍布置的黑曜石防線與密室屏障。",
          "glitchCode": "NBT: {Tool: 'TerminusBreaker', Efficiency: 7, HasteImmunity: true, Origin: 'Terminus_Prison_Cell'}"
        },
        {
          "name": "The Truth-Seeker's Executioner Blade（真實之眼破偽裁決戰刃）",
          "rarity": "MYTHIC",
          "rarityColor": "#ef4444",
          "howAcquired": "在公開大擂台上當眾戳穿作弊偽神時使用的公正利刃，劍身銘刻著破除一切虛妄的真實符文。",
          "effectDesc": "自帶破盾與反制延遲補償的鎖定攻擊判定，使一切身法外掛與假動作無所遁形。",
          "glitchCode": "NBT: {Weapon: 'TruthSeeker', AntiLagSwitch: true, Sharpness: 6, SweepDamage: 0.9}"
        },
        {
          "name": "Ghost Vault Keycard（虛空金庫幽靈密匙）",
          "rarity": "GLITCHED",
          "rarityColor": "#06b6d4",
          "howAcquired": "在追蹤傳說中『不存在的金色寶庫（Searching for a Vault that Doesn't Exist）』時，於世界代碼殘渣中發掘的幽靈卡片。",
          "effectDesc": "能感應隱藏在虛空裂隙中的非法儲物箱，是探秘 Unstable 隱密地下網路的關鍵憑證。",
          "glitchCode": "NBT: {VaultKey: 'Ghost_Sector_404', PhaseDetect: true, Lore: ['Opens that which does not exist.']}"
        },
        {
          "name": "Flame’s Bespoke Warplate（烈焰專屬獄髓重戰甲）",
          "rarity": "MYTHIC",
          "rarityColor": "#f97316",
          "howAcquired": "在加冕為 Unstable SMP 最強之人時，由全服頂級工匠在極溫熔岩爐中千錘百煉打造的專屬胸甲。",
          "effectDesc": "附帶最高等級保護與抗擊退特性，受到近戰暴擊時自帶短暫灼燒反噬，防禦力冠絕全服。",
          "glitchCode": "NBT: {Armor: 'FlameNetherite_V2', Protection: 5, Thorns: 4, KnockbackResist: 0.8}"
        },
        {
          "name": "1000-Player Vanguard War Banner（萬人大內戰先鋒軍旗）",
          "rarity": "ROYAL",
          "rarityColor": "#dc2626",
          "howAcquired": "在千人內戰總決戰中，由後方萬名戰士親手交給 FlameFrags 插在衝鋒第一線的染血戰旗。",
          "effectDesc": "周圍 32 格範圍內的盟友將獲得力量 I 與速度 I 的士氣光環，象徵永不退縮的戰神意志。",
          "glitchCode": "NBT: {BannerType: 'Vanguard_1000', MoraleAura: true, Commander: 'FlameFrags'}"
        }
      ],
      "videos": [
        {
          "id": "Vhnn_sG7xUk",
          "title": "I Became Immortal on a Hardcore Minecraft SMP",
          "titleZh": "我在極限硬核 Minecraft SMP 成為不死之身",
          "duration": "25:40",
          "thumbnail": "https://i.ytimg.com/vi/Vhnn_sG7xUk/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=Vhnn_sG7xUk",
          "summary": "極限硬核神話的誕生！在生命只有一次的殘酷伺服器中，FlameFrags 深入研究不死圖騰的觸發機制，在毫秒級的時序差中利用副手卡位判定，成功卡出了突破生命上限、永不消逝的常駐代碼金色血條，一戰震撼全服！",
          "unexpectedLoot": "Glitched Immortal Heart Reservoir（代碼異常不死金心）",
          "keyMoments": [
            "深入地獄堡壘在極限殘血下測試伺服器端圖騰觸發判定幀",
            "以微秒級的副手切換卡出突破版本限制的常駐金色生命槽",
            "頂著成群怪物的狂暴圍攻展示不死之軀，奠定戰狂神話"
          ],
          "publishDate": "2025-05-03",
          "formattedDate": "2025 年 5 月 3 日"
        },
        {
          "id": "UJyBjBXaiZI",
          "title": "SOLO Player VS Toxic Minecraft Team",
          "titleZh": "孤狼單挑全服最囂張的毒瘤公會",
          "duration": "30:15",
          "thumbnail": "https://i.ytimg.com/vi/UJyBjBXaiZI/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=UJyBjBXaiZI",
          "summary": "一場大快人心的正義清算！五名滿裝惡霸洗劫公益農場殘害無辜，FlameFrags 故意脫下重裝佯裝逃亡雪山。在暴風雪山巔的絕壁之上，他利用一夫當關的地形優勢跳劈破盾，上演震撼全服的 1v5 團滅奇蹟！",
          "unexpectedLoot": "Rejoice’s Flower（戰火廢墟中的純白之花）",
          "keyMoments": [
            "在被焚燬的農場墓前拾起沾血殘花立下復仇血誓",
            "穿破皮甲以身作餌將五名滿裝惡霸誘入極寒暴風雪絕壁",
            "瞬間換回神裝在單格狹道上跳劈破盾完成 1v5 全殲壯舉"
          ],
          "publishDate": "2025-05-17",
          "formattedDate": "2025 年 5 月 17 日"
        },
        {
          "id": "xxbwmsi4n-U",
          "title": "Unstable SMP: The Great Farm War",
          "titleZh": "Unstable SMP：全服巨型農場爭奪大戰",
          "duration": "34:25",
          "thumbnail": "https://i.ytimg.com/vi/xxbwmsi4n-U/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=xxbwmsi4n-U",
          "summary": "農場保衛戰的全面升級！各大公會為爭奪食物與物資供應鏈打響陣地戰。FlameFrags 單兵游擊穿插於交戰前線，以神出鬼沒的突襲摧毀敵方補給營地，以無敵近戰壓迫感逼退三大軍團，捍衛了公共平民農場的自由。",
          "unexpectedLoot": "Harvester’s Vanguard Glaive（豐收之護先鋒戰戟）",
          "keyMoments": [
            "單兵夜襲敵對公會的重裝前進基地，引爆後勤物資倉庫",
            "在麥田平原以一敵十連續破盾斬殺敵軍前鋒衝鋒隊",
            "迫使三大進攻公會簽署和平撤軍條約，捍衛平民農場安全"
          ],
          "publishDate": "2025-08-12",
          "formattedDate": "2025 年 8 月 12 日"
        },
        {
          "id": "UnFIrVKA9Zc",
          "title": "1000 VS 1000 Player Minecraft Civil War",
          "titleZh": "1000 對 1000 玩家萬人大內戰（先鋒衝鋒視角）",
          "duration": "48:10",
          "thumbnail": "https://i.ytimg.com/vi/UnFIrVKA9Zc/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=UnFIrVKA9Zc",
          "summary": "千人大內戰最震撼的鋒刃視角！被推舉為先鋒總司令的 FlameFrags 手扛萬人大內戰先鋒軍旗，帶領敢死隊冒著漫天砲火發起絕命衝鋒。他親自揮刃斬斷敵軍三道防線的鎖鏈，為聯軍主力開闢了通往勝利的血路！",
          "unexpectedLoot": "1000-Player Vanguard War Banner（萬人大內戰先鋒軍旗）",
          "keyMoments": [
            "扛著血色先鋒軍旗帶領敢死隊頂著萬千箭雨強渡平原盆地",
            "在要塞城門前以狂暴跳劈斬殺敵軍王牌守城巨漢",
            "親自炸穿第一道城門防線，護送主力軍團長驅直入"
          ],
          "publishDate": "2026-05-31",
          "formattedDate": "2026 年 5 月 31 日"
        },
        {
          "id": "Ym2wmd19S_c",
          "title": "I Became the Strongest on the Unstable SMP",
          "titleZh": "我加冕成為 Unstable SMP 的最強戰神",
          "duration": "28:50",
          "thumbnail": "https://i.ytimg.com/vi/Ym2wmd19S_c/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=Ym2wmd19S_c",
          "summary": "武道榮耀之巔！在全服矚目的中央大競技場邀請賽上，FlameFrags 迎戰各大公會推舉的八位頂級角鬥士。他以純粹的原生近戰技藝連克強敵，破盾時機精準至毫秒，在全服玩家的起立歡呼中加冕最強戰神披風！",
          "unexpectedLoot": "Flame’s Bespoke Warplate（烈焰專屬獄髓重戰甲）",
          "keyMoments": [
            "在萬人圍觀的擂台上以不可思議的走位連續化解強攻",
            "不到三分鐘內以精準破盾連續斬落四名重甲擂主",
            "全服強者心悅誠服共同為其披上戰神披風，登頂武道至尊"
          ],
          "publishDate": "2026-06-09",
          "formattedDate": "2026 年 6 月 9 日"
        },
        {
          "id": "ljppGDO4HlU",
          "title": "I Got Hunted By a Minecraft Combat Master",
          "titleZh": "我遭到 Minecraft 頂級格鬥宗師的致命追殺",
          "duration": "32:30",
          "thumbnail": "https://i.ytimg.com/vi/ljppGDO4HlU/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=ljppGDO4HlU",
          "summary": "強者的惺惺相惜與生死切磋！面對隱居江湖多年的頂級格鬥宗師 ClownPierce 的全力圍捕，FlameFrags 在幽暗峽谷中展開了長達數十分鐘的窒息對決，兩大天花板選手的每一次碰撞都堪稱 Minecraft PVP 歷史教科書！",
          "unexpectedLoot": "ClownPierce’s Training Scythe（死神親傳連斬戰鐮）",
          "keyMoments": [
            "在峽谷深處與傳奇宗師 ClownPierce 展開閃電般的盾斧切換死鬥",
            "連續五次極限格擋化解對手致命跳劈背刺",
            "在力竭終局贏得宗師敬意，獲贈親傳連斬戰鐮"
          ],
          "publishDate": "2026-06-18",
          "formattedDate": "2026 年 6 月 18 日"
        },
        {
          "id": "yBy5NnLTiWQ",
          "title": "I Got Trained By the World's Deadliest Minecraft Player",
          "titleZh": "我接受了世界上最致命玩家的魔鬼特訓",
          "duration": "35:15",
          "thumbnail": "https://i.ytimg.com/vi/yBy5NnLTiWQ/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=yBy5NnLTiWQ",
          "summary": "面對 The LAW 鐵腕霸權的逼近，FlameFrags 拜入世界上最致命的頂級殺手門下接受殘酷特訓。在失明、高頻擊退與極限低血量下，他突破人體反應極限，將戰鬥感知昇華至能預判敵方肌肉抖動的超凡神域！",
          "unexpectedLoot": "Master’s Whetstone of Absolute Precision（絕對精準大師砥石）",
          "keyMoments": [
            "在全盲狀態下僅憑耳力回聲格擋四面八方襲來的暗器",
            "在半顆心極限狀態下完成萬次跳劈破盾肌肉記憶訓練",
            "成功在模擬戰中完成一穿十魔鬼考核，戰鬥意識蛻變"
          ],
          "publishDate": "2026-07-03",
          "formattedDate": "2026 年 7 月 3 日"
        },
        {
          "id": "BCiRLHaeHkI",
          "title": "Minecraft's Best Players Simulate PVP Tournament",
          "titleZh": "Minecraft 頂尖高手集結模擬殘酷錦標賽",
          "duration": "41:40",
          "thumbnail": "https://i.ytimg.com/vi/BCiRLHaeHkI/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=BCiRLHaeHkI",
          "summary": "全服頂級高手集結！一場完全模擬極限硬核環境的單敗淘汰錦標賽。FlameFrags 面對水晶 PVP、床炸彈與傳統盾斧高手，以萬化歸一的原生走位與壓制節奏連克強手，再次證明誰才是真正的無冕之王！",
          "unexpectedLoot": "Grand Champion’s Laurel of Blood（血冕總冠軍桂冠）",
          "keyMoments": [
            "在水晶轟炸擂台以靈活走位規避致命爆炸衝擊波",
            "殘血狀態下反手一記極限橫掃劈翻奪冠大熱門選手",
            "捧起象徵全服 PVP 最高榮耀的血冕冠軍獎盃"
          ],
          "publishDate": "2026-07-21",
          "formattedDate": "2026 年 7 月 21 日"
        },
        {
          "id": "BkYekSPynVo",
          "title": "I Exposed Minecraft's 'Strongest' Player",
          "titleZh": "我當眾撕下了號稱『最強戰神』的虛偽面具",
          "duration": "27:50",
          "thumbnail": "https://i.ytimg.com/vi/BkYekSPynVo/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=BkYekSPynVo",
          "summary": "正義裁決之戰！面對自封無敵、實則利用延遲補償外掛的偽神，FlameFrags 在公開擂台布設紅石封包檢測器，當眾投影出對方竄改參數的確鑿日誌。隨後拔出真實之眼戰刃在 30 秒內三次破盾將作弊偽神斬落台下！",
          "unexpectedLoot": "The Truth-Seeker's Executioner Blade（真實之眼破偽裁決戰刃）",
          "keyMoments": [
            "紅石計時器響徹全場，空中投射出偽神竄改封包的作弊日誌",
            "拔出破偽裁決戰刃無視對方數值加成展開疾風驟雨連擊",
            "30 秒內三次破盾將惱羞成怒的偽神斬殺於擂台之上"
          ],
          "publishDate": "2026-08-14",
          "formattedDate": "2026 年 8 月 14 日"
        },
        {
          "id": "h68WUZ8b0O0",
          "title": "Searching for a Vault that Doesn't Exist",
          "titleZh": "尋找那座『不存在的隱形金庫』",
          "duration": "33:10",
          "thumbnail": "https://i.ytimg.com/vi/h68WUZ8b0O0/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=h68WUZ8b0O0",
          "summary": "為追尋世界深層代碼的真相，FlameFrags 循著線索深入座標失真的 404 虛空扇區。在無底深淵中盲跳踩踏隱形方塊，成功開啟傳說中不存在的金色寶庫，起獲能感應虛空裂隙的幽靈密匙卡！",
          "unexpectedLoot": "Ghost Protocol Keycard（幽靈協議金庫卡）",
          "keyMoments": [
            "利用盲跳與珍珠定位虛空邊界隱形路徑",
            "破譯失落古代密室的十六進制代碼門",
            "在萬丈虛空中央解鎖金光璀璨的幽靈保險庫"
          ],
          "publishDate": "2026-09-11",
          "formattedDate": "2026 年 9 月 11 日"
        },
        {
          "id": "8t8YBu7bdT0",
          "title": "Escaping Terminus: The Deadliest Minecraft Prison",
          "titleZh": "逃離 Terminus：Minecraft 最致命的死刑黑牢（最新熱播中！）",
          "duration": "38:45",
          "thumbnail": "https://i.ytimg.com/vi/8t8YBu7bdT0/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=8t8YBu7bdT0",
          "summary": "2026 年 10 月最新史詩！遭 The LAW 設伏被押入全服最恐怖特級黑牢 Terminus。在多重守衛者雷射與基岩絕境中，FlameFrags 徒手擊殺獄卒奪回兵器，炸穿天井完成震驚全宇宙的越獄大逆轉，戰火未完待續！",
          "unexpectedLoot": "Terminus Breaker Pickaxe（Terminus 破獄者獄髓鎬）",
          "keyMoments": [
            "在浸水黑曜石牢房摸清守衛雷射 1.5 秒盲區",
            "利用私藏微型紅石短路癱瘓牢區電網",
            "擊殺典獄長奪得 Terminus 破獄者獄髓鎬破牆越獄"
          ],
          "publishDate": "2026-10-06",
          "formattedDate": "2026 年 10 月 6 日"
        }
      ],
      "channel": "FlameFrags",
      "channelUrl": "https://www.youtube.com/@FlameFrags",
      "badge": "PVP COMBAT WARLORD"
    }
  },
  "timelineMatrix": [
    {
      "epoch": "第一紀元：代碼裂縫與伺服器初啼",
      "headline": "世界規則開始扭曲，禁忌金庫與毀滅按鈕出土",
      "details": {
        "parrot": "在極遠荒野廢棄地下室勘測到異常區塊抖動，挖出具備抹除全服存檔權能的『毀滅世界按鈕』，首次向全服揭露了世界底層代碼隨時可能崩潰的致命真相，並決心以冷靜心智充當其守護人。",
        "wemmbu": "單槍匹馬突襲全服公認無法攻破的基岩違法黑金庫，在狹窄走廊完成不可思議的一穿三反殺，奪走傳奇神刀 The Crucible 與海量禁忌界伏盒，一戰威震全宇宙。",
        "spoke": "在系列揭開序幕之際與 Jamato 深入邊界裂谷，利用 BUD 方塊更新與漏斗尋路循環建造微型時空卡頓器，使全服 TPS 驟降至 2.5，向全服宣告混亂與漏洞時代正式降臨。",
        "flamefrags": "在殘酷的極限硬核環境下展開地獄式淬煉，於瀕死一線間以微秒級判定卡出令全服震驚的常駐代碼不死金心，並在中央角鬥場力克八位王牌擂主加冕最強戰神。"
      },
      "sources": {
        "parrot": {
          "id": "soYelcGVPac",
          "title": "This Button Destroys the World",
          "channel": "ParrotX2",
          "url": "https://www.youtube.com/watch?v=soYelcGVPac"
        },
        "wemmbu": {
          "id": "s4Qm81fKfyk",
          "title": "Breaking Into Minecraft's Most Illegal Vault",
          "channel": "Wemmbu",
          "url": "https://www.youtube.com/watch?v=s4Qm81fKfyk"
        },
        "spoke": {
          "id": "wG9dbWNsems",
          "title": "How to Destroy the Unstable SMP",
          "channel": "SpokeIsHere",
          "url": "https://www.youtube.com/watch?v=wG9dbWNsems"
        },
        "flamefrags": {
          "id": "Vhnn_sG7xUk",
          "title": "I Became Immortal on a Hardcore Minecraft SMP",
          "channel": "FlameFrags",
          "url": "https://www.youtube.com/watch?v=Vhnn_sG7xUk"
        }
      }
    },
    {
      "epoch": "第二紀元：大追捕與 Paragon 絕海黑牢大越獄",
      "headline": "統治階層加強打壓，通緝與反抗狂潮席捲全服",
      "details": {
        "parrot": "遭到各大勢力重兵設伏被投入號稱無人生還的深海黑牢 Paragon，在深海長老挖掘疲勞壓迫下暗中摸清伺服器端存檔 1.2 秒延遲，藉由走私紫頌果穿透基岩天井躍入怒海奇蹟脫逃。",
        "wemmbu": "面對全服各大老牌公會組建的數十人精銳獵人軍團全面圍剿，依靠神級低空穿林鞘翅滑翔與暴風雪山巔的連鎖雪崩高爆陷阱，在萬仞絕壁完成 1vMany 驚天反殺奇蹟。",
        "spoke": "透過黑市線索聲學監聽挖穿地下加密哭泣黑曜石外牆，在違規集團主管道下方巧設反向分流暗渠，四小時內無聲無息搬空 10,356,000 件複製神裝，引發黑市大恐慌。",
        "flamefrags": "目睹五人霸凌公會洗劫公益農場並殘害新人，以身作餌褪下重甲將五名惡霸誘入暴風雪絕壁，憑一夫當關地勢跳劈破盾全殲敵方，將染血小黃花插在胸甲誓做弱者之盾。"
      },
      "sources": {
        "parrot": {
          "id": "6dtNsa-MGs8",
          "title": "I Broke into Minecraft's Most Secure Prison",
          "channel": "ParrotX2",
          "url": "https://www.youtube.com/watch?v=6dtNsa-MGs8"
        },
        "wemmbu": {
          "id": "o8ocybrrdfw",
          "title": "It's Impossible to Catch this Player",
          "channel": "Wemmbu",
          "url": "https://www.youtube.com/watch?v=o8ocybrrdfw"
        },
        "spoke": {
          "id": "E5jfdzB6RnY",
          "title": "How I Stole 10,356,000 Duped Items",
          "channel": "SpokeIsHere",
          "url": "https://www.youtube.com/watch?v=E5jfdzB6RnY"
        },
        "flamefrags": {
          "id": "UJyBjBXaiZI",
          "title": "SOLO Player VS Toxic Minecraft Team",
          "channel": "FlameFrags",
          "url": "https://www.youtube.com/watch?v=UJyBjBXaiZI"
        }
      }
    },
    {
      "epoch": "第三紀元：文明崛起、帝國爭雄與經濟崩盤",
      "headline": "巨型要塞拔地而起，億萬經濟在一夕之間傾覆",
      "details": {
        "parrot": "順應全服散戶民意宣布參選第一任國王，在造勢大會廣場演說時透過靈魂觀測望遠鏡看破黑手黨隱形刺客狙擊並反手重弩絕殺，以 89% 歷史得票率登基頒布《治安法典》。",
        "wemmbu": "動用黑金庫所得建立三重防爆鋼鐵文明要塞庇護流民，面對軍閥 PrinceZam 帝國的傾國圍攻，祭出 120 格跨區塊軌道 TNT 大砲精準抹平敵國皇城，覆滅殘暴帝國。",
        "spoke": "化身神祕海外大亨開戶刺探金庫防禦，策劃虛假黑市交易誘走銀行主力守衛，潛入首富 Roshambo 的中央金庫將數萬塊黃金掉包為鍍金高爆 TNT，引爆銀行搞垮億萬帝國。",
        "flamefrags": "在全服武道大會力壓群雄奪得至高戰神榮譽，並在公開擂台布設紅石封包計時器，當眾抓包並以真實之眼戰刃在 30 秒內三次破盾斬殺依靠延遲外掛作弊的『偽神』。"
      },
      "sources": {
        "parrot": {
          "id": "2WusTNLmBpE",
          "title": "I Became King of the Unstable SMP",
          "channel": "ParrotX2",
          "url": "https://www.youtube.com/watch?v=2WusTNLmBpE"
        },
        "wemmbu": {
          "id": "wbTIN42an0o",
          "title": "I Created Minecraft's Greatest Civilization",
          "channel": "Wemmbu",
          "url": "https://www.youtube.com/watch?v=wbTIN42an0o"
        },
        "spoke": {
          "id": "KyLqZkfv3BU",
          "title": "I Bankrupted Minecraft's Richest Civilization",
          "channel": "SpokeIsHere",
          "url": "https://www.youtube.com/watch?v=KyLqZkfv3BU"
        },
        "flamefrags": {
          "id": "BkYekSPynVo",
          "title": "I Exposed Minecraft's 'Strongest' Player",
          "channel": "FlameFrags",
          "url": "https://www.youtube.com/watch?v=BkYekSPynVo"
        }
      }
    },
    {
      "epoch": "第四紀元：暗夜風暴！黑手黨覆滅與 The LAW 執法崛起",
      "headline": "地下犯罪帝國崩塌，Lattice K 創立 The LAW 建立鐵腕秩序",
      "details": {
        "parrot": "追查邊境人口失蹤大案，孤身潛入自詡神聖的白金烏托邦揭發地下奴工黑幕，在全服公頻公佈罪證並在強敵宣戰威脅下，毅然聯手各大領袖籌備反抗軍團。",
        "wemmbu": "面對黑手黨綁架生死摯友 Eggchan 的勒索，隻身持刀殺穿黑幫總舵大樓，在炸彈倒數最後 3 秒救出摯友，並親手接通全城地埋炸藥陣列將罪惡舊主城徹底化為火海焦土。",
        "spoke": "褪去綠色連帽衫換上黑曜石西裝，化名冷血刺客『影狼』臥底黑手黨內部贏得教父信任，在犯罪首腦峰會當晚於地下室堆疊 64 輛共振 TNT 礦車，一舉送葬黑手黨家族。",
        "flamefrags": "在神祕組織 The LAW 實施戒嚴強行收繳民間武裝之際，拒絕交出兵刃，拜入極境格鬥宗師門下完成戰鬥感知蛻變，成為令各大陣營忌憚三分的絕對自由戰魂。"
      },
      "sources": {
        "parrot": {
          "id": "zMoihcFz2kY",
          "title": "I Exposed a Corrupt Minecraft Civilization",
          "channel": "ParrotX2",
          "url": "https://www.youtube.com/watch?v=zMoihcFz2kY"
        },
        "wemmbu": {
          "id": "_qc8ZF2KyeQ",
          "title": "Why I Destroyed the Unstable SMP",
          "channel": "Wemmbu",
          "url": "https://www.youtube.com/watch?v=_qc8ZF2KyeQ"
        },
        "spoke": {
          "id": "Ss5ggp8Ij14",
          "title": "I Infiltrated The Minecraft Mafia",
          "channel": "SpokeIsHere",
          "url": "https://www.youtube.com/watch?v=Ss5ggp8Ij14"
        },
        "flamefrags": {
          "id": "h68WUZ8b0O0",
          "title": "Searching for a Vault that Doesn't Exist",
          "channel": "FlameFrags",
          "url": "https://www.youtube.com/watch?v=h68WUZ8b0O0"
        }
      }
    },
    {
      "epoch": "第五紀元：千人大內戰風雲（Civil War Era）",
      "headline": "四條命運之線匯聚，千人軍團在主城盆地打響陣營大對決",
      "details": {
        "parrot": "以自由陣營統帥身份登高一呼發表戰鬥檄文，動員千名平民志願軍在主城盆地修築陣地，運用精妙水流反制敵方炸藥衝鋒，力挽狂瀾贏得歷史性決戰大勝。",
        "wemmbu": "手持 The Crucible 巨刃與軌道巨砲火控終端親臨戰場最前沿，冒著暴風雨般密集的箭雨強渡護城河，陣前斬落敵將並引導重砲轟碎敵軍主城門。",
        "spoke": "率領暗夜部隊在戰場後方實施情報刺探與交通封鎖，利用代碼圖騰突破敵軍結界，精準切斷敵軍主力補給動脈，策應正面部隊長驅直入。",
        "flamefrags": "被三巨頭共同推舉為突擊先鋒總司令，高舉血染先鋒軍旗率領敢死隊發起絕命衝鋒，在漫天火網中以無敵身法親自鑿穿敵軍三道基岩防線，鎖定全服勝局。"
      },
      "sources": {
        "parrot": {
          "id": "bP86n9nFoJY",
          "title": "Unstable SMP: Civil War",
          "channel": "ParrotX2",
          "url": "https://www.youtube.com/watch?v=bP86n9nFoJY"
        },
        "wemmbu": {
          "id": "cEXBN7fTs00",
          "title": "Unstable SMP: The Mafia",
          "channel": "Wemmbu",
          "url": "https://www.youtube.com/watch?v=cEXBN7fTs00"
        },
        "spoke": {
          "id": "x9-V64fR9sU",
          "title": "The End of the Minecraft Mafia",
          "channel": "SpokeIsHere",
          "url": "https://www.youtube.com/watch?v=x9-V64fR9sU"
        },
        "flamefrags": {
          "id": "UnFIrVKA9Zc",
          "title": "1000 VS 1000 Player Minecraft Civil War",
          "channel": "FlameFrags",
          "url": "https://www.youtube.com/watch?v=UnFIrVKA9Zc"
        }
      }
    },
    {
      "epoch": "第六紀元：幽冥深淵、維度爭霸與新秩序（持續連載中・未完結）",
      "headline": "世界絕無終局！四大主角在 2026 年下半年開啟全新維度篇章，抗衡 Lattice K 的 The LAW 統治",
      "details": {
        "parrot": "在經歷幽冥深淵大逃亡後遭 NULL 勢力伏擊押入 Spoke 的終界千人黑曜石煉獄，聯手重逢的 MinuteTech 耗時 20 小時破解機關密碼門並力戰格鬥冠軍 X，終界維度反抗戰火持續燃燒！",
        "wemmbu": "為尋找離奇失蹤的摯友 Eggchan 闖入無規則千人肅清之夜，一人一刀鎮守避難所阻擊狂徒，並躍入熔岩核心在最後倒數極限修復記憶體溢出挽救世界，尋友征程未完待續！",
        "spoke": "率千人遠征終界虛空搭建黑曜石空島要塞與全服最強幽靈軍團，穿越基岩深淵發掘起源原始碼石板加冕終界帝皇，與 Lattice K 的 The LAW 鐵腕大軍隔空對峙，傳奇持續燃燒！",
        "flamefrags": "在座標失真的 404 虛空扇區奪取幽靈金庫卡後遭 The LAW 伏擊被押入最致命特級死刑黑牢 Terminus，徒手奪刃格殺看守並以破獄者神鎬炸穿基岩天井浴火越獄，戰神強勢歸來！"
      },
      "sources": {
        "parrot": {
          "id": "9-j9GWjyWpY",
          "title": "1000 Players Simulate End Prison in Minecraft",
          "channel": "ParrotX2",
          "url": "https://www.youtube.com/watch?v=9-j9GWjyWpY"
        },
        "wemmbu": {
          "id": "5hG_nAYEC2g",
          "title": "How I Saved the World's Largest Minecraft Server",
          "channel": "Wemmbu",
          "url": "https://www.youtube.com/watch?v=5hG_nAYEC2g"
        },
        "spoke": {
          "id": "ynkhNRpQ9Xc",
          "title": "1000 Players Build END Civilization in Hardcore Minecraft",
          "channel": "SpokeIsHere",
          "url": "https://www.youtube.com/watch?v=ynkhNRpQ9Xc"
        },
        "flamefrags": {
          "id": "8t8YBu7bdT0",
          "title": "Escaping Terminus: The Deadliest Minecraft Prison",
          "channel": "FlameFrags",
          "url": "https://www.youtube.com/watch?v=8t8YBu7bdT0"
        }
      }
    }
  ],
  "questGame": {
    "title": "Unstable Survival Quest // 宇宙命運模擬器",
    "subtitle": "選擇你的主角視角，運用意外神器，在崩潰邊緣的 Unstable SMP 中做出你的抉擇！",
    "chapters": [
      {
        "id": "chapter_select",
        "name": "序章：角色降臨",
        "description": "在漆黑的代碼虛空中，世界伺服器的時鐘正在倒數。你想以誰的視角介入這場混亂？",
        "choices": [
          {
            "text": "【Parrot】以智慧與調查為武器，追查伺服器崩潰真相",
            "nextId": "parrot_c1",
            "charId": "parrot"
          },
          {
            "text": "【Wemmbu】以純粹力量與財富橫掃一切，目標直指基岩金庫",
            "nextId": "wemmbu_c1",
            "charId": "wemmbu"
          },
          {
            "text": "【Spoke】化身混亂與漏洞之主，用陷阱與惡作劇戲耍全服",
            "nextId": "spoke_c1",
            "charId": "spoke"
          },
          {
            "text": "【FlameFrags】極限硬核不死戰狂，只相信手中的戰刃與血性",
            "nextId": "flame_c1",
            "charId": "flamefrags"
          }
        ]
      },
      {
        "id": "parrot_c1",
        "name": "Parrot 篇：廢棄紅石密室的抉擇",
        "charId": "parrot",
        "description": "你在沙漠深處挖到了一座基岩密封艙，石台上赫然放著一顆跳動著紅色符文的【毀滅世界按鈕】。耳邊傳來巡邏獵人的腳步聲，他們正逼近入口！",
        "choices": [
          {
            "text": "冷靜收起按鈕，掏出 Parrot's Spyglass 偵察獵人動線與埋伏",
            "nextId": "parrot_c2_spyglass",
            "itemGain": "Parrot's Spyglass",
            "statCheck": "intellect"
          },
          {
            "text": "直接將按鈕通電！用伺服器區塊震盪逼退追兵",
            "nextId": "parrot_c2_glitch",
            "itemGain": "World Destroyer Button",
            "statCheck": "strategy"
          }
        ]
      },
      {
        "id": "parrot_c2_spyglass",
        "name": "Parrot 篇：王座之選與和平法典",
        "charId": "parrot",
        "description": "你成功避開伏擊抵達中央廣場。此時群眾正因混亂爆發暴動，各方軍閥虎視眈眈。你手握望遠鏡看清了混亂背後的挑唆者，你決定：",
        "choices": [
          {
            "text": "登上講台發表震撼演說，出示證據並宣布參選國王，建立秩序！",
            "nextId": "parrot_ending_king",
            "statCheck": "influence"
          },
          {
            "text": "潛入 Paragon 黑牢解救無辜被囚者，組建地下自由反抗軍！",
            "nextId": "parrot_ending_rebel",
            "statCheck": "stealth"
          }
        ]
      },
      {
        "id": "parrot_c2_glitch",
        "name": "Parrot 篇：封包狂暴與虛空羅盤",
        "charId": "parrot",
        "description": "按鈕觸發的震盪讓周圍 16 區塊陷入黑屏。在亂碼之中，你從地底裂縫摸到了一塊指向負 Y 軸的【Null Code Compass】！",
        "choices": [
          {
            "text": "順著羅盤指針深入地底，探尋伺服器管理者的真實身份！",
            "nextId": "parrot_ending_truth",
            "statCheck": "intellect"
          }
        ]
      },
      {
        "id": "wemmbu_c1",
        "name": "Wemmbu 篇：突破基岩金庫防線",
        "charId": "wemmbu",
        "description": "你站在全服防守最森嚴的非法金庫前。眼前是雙層黑曜石水浸防爆牆與三名重裝守衛。你背包裡只有幾枚 TNT 與你的赤手空拳。",
        "choices": [
          {
            "text": "用沙子填平水源阻斷防爆，零距離引爆高壓 TNT 強行破門！",
            "nextId": "wemmbu_c2_raid",
            "itemGain": "The Crucible & Gambit",
            "statCheck": "pvpCombat"
          },
          {
            "text": "掏出鞘翅高速低空俯衝，從通風換氣孔直插核心金庫！",
            "nextId": "wemmbu_c2_raid",
            "itemGain": "The Crucible & Gambit",
            "statCheck": "strategy"
          }
        ]
      },
      {
        "id": "wemmbu_c2_raid",
        "name": "Wemmbu 篇：Eggchan 的求救信號",
        "charId": "wemmbu",
        "description": "你奪得了神兵 The Crucible！但此時黑手黨傳來密信：你的摯友 Eggchan 被綁架在地底熔岩室，勒索你交出所有金庫戰利品。",
        "choices": [
          {
            "text": "毫不猶豫單刀赴會！啟動軌道巨砲鎖定黑手黨基地，強勢踏平！",
            "nextId": "wemmbu_ending_hero",
            "itemGain": "Eggchan’s Keepsake Book",
            "statCheck": "pvpCombat"
          },
          {
            "text": "親手引爆伺服器核心能源，以同歸於盡的決心終結整個 SMP 的腐敗！",
            "nextId": "wemmbu_ending_destroyer",
            "statCheck": "strategy"
          }
        ]
      },
      {
        "id": "spoke_c1",
        "name": "Spoke 篇：千萬複製物資大劫案",
        "charId": "spoke",
        "description": "你發現了違法團隊的物資分流管。一千多萬件附魔金蘋果和滿裝獄髓甲正源源不絕地流向他們的金庫。你打算：",
        "choices": [
          {
            "text": "架設秘密漏斗旁路管道，把一千萬件物資全數轉移到自己的基岩密室！",
            "nextId": "spoke_c2_heist",
            "itemGain": "10,356,000 Duped Gear Hoard",
            "statCheck": "intellect"
          },
          {
            "text": "在管道終點堆疊 400 輛共振 TNT 礦車，送他們一場伺服器卡頓煙火並順手牽羊！",
            "nextId": "spoke_c2_heist",
            "itemGain": "Resonance TNT Minecart Core",
            "statCheck": "strategy"
          }
        ]
      },
      {
        "id": "spoke_c2_heist",
        "name": "Spoke 篇：黑手黨的測謊椅",
        "charId": "spoke",
        "description": "黑手黨看中你的偷竊技術，邀請你共進晚餐。教父手持匕首逼問你是否願意效忠。桌底下就藏著教父的絕密黑帳本！",
        "choices": [
          {
            "text": "發揮頂級演技假意效忠，趁機順走黑手黨賄賂黑帳本並反手引爆大樓！",
            "nextId": "spoke_ending_agent",
            "itemGain": "Mafia Syndicate Black Ledger",
            "statCheck": "stealth"
          },
          {
            "text": "掏出 Totem of Null 觸發幽靈穿牆，瞬間遁入虛空瀟灑離去！",
            "nextId": "spoke_ending_null",
            "itemGain": "The Totem of Null",
            "statCheck": "intellect"
          }
        ]
      },
      {
        "id": "flame_c1",
        "name": "FlameFrags 篇：逃離最致命黑牢 Terminus",
        "charId": "flamefrags",
        "description": "你遭到陷害被關入 Unstable SMP 最恐怖的特級死刑黑牢 Terminus，四周被多重浸水黑曜石、深海長老結界與精銳獄卒嚴密看守。此時你手邊只有一把手工打磨的破壞鎬碎片！",
        "choices": [
          {
            "text": "利用微型紅石元件短路電網，在雷射充能盲區手持破壞鎬鑿穿基岩天井！",
            "nextId": "flame_c2_breakout",
            "itemGain": "Terminus Breaker Pickaxe",
            "statCheck": "pvpCombat"
          },
          {
            "text": "正面徒手格鬥反殺獄卒隊長，奪回神裝並搶走金庫通行卡殺出重圍！",
            "nextId": "flame_c2_breakout",
            "itemGain": "Ghost Vault Keycard",
            "statCheck": "pvpCombat"
          }
        ]
      },
      {
        "id": "flame_c2_breakout",
        "name": "FlameFrags 篇：萬人大內戰的先鋒號角",
        "charId": "flamefrags",
        "description": "你成功越獄重返自由同盟，並在擂台上當眾戳穿作弊偽神的面具！千人大內戰全面打響，自由同盟被敵軍基岩城牆阻攔，全軍士氣低落！",
        "choices": [
          {
            "text": "扛起 1000-Player 先鋒軍旗，揮舞 Truth-Seeker 處決戰刃，隻身鑿碎敵軍防線！",
            "nextId": "flame_ending_vanguard",
            "itemGain": "The Truth-Seeker's Executioner Blade",
            "statCheck": "pvpCombat"
          },
          {
            "text": "身披特製重裝戰甲發起刺殺戰術，陣斬敵方作弊主將奪回戰場主導權！",
            "nextId": "flame_ending_assassin",
            "itemGain": "Flame’s Bespoke Warplate",
            "statCheck": "strategy"
          }
        ]
      },
      {
        "id": "parrot_ending_king",
        "name": "結局：王座上的守護者（Parrot 經典線）",
        "description": "你成功加冕為 Unstable SMP 首任國王！在治理王國期間，你用智慧抵禦了背叛與刺殺，建立起受全服敬仰的新秩序。你的名字被永遠刻在主城法典第一頁！",
        "badge": "👑 傳奇國王 (The Sovereign)",
        "isEnding": true
      },
      {
        "id": "parrot_ending_rebel",
        "name": "結局：自由同盟軍總司令",
        "description": "你從黑牢解救了無數反抗鬥士，率領平民起義推翻了暴政文明，成為 Unstable 世界永不褪色的自由象徵！",
        "badge": "⚔️ 自由先驅 (The Liberator)",
        "isEnding": true
      },
      {
        "id": "parrot_ending_truth",
        "name": "結局：破譯代碼的先知",
        "description": "你跟隨虛空羅盤找到了伺服器代碼核心，揭開了 Unstable 背後所有的實驗秘密，成為超越常規玩家存在的代碼觀測者！",
        "badge": "👁️ 宇宙觀測者 (The Overseer)",
        "isEnding": true
      },
      {
        "id": "wemmbu_ending_hero",
        "name": "結局：不朽情義與帝國霸主（Wemmbu 經典線）",
        "description": "你以無可爭議的絕對戰力摧毀黑手黨，救出了摯友 Eggchan。在你們手中，鋼鐵帝國迎來了前所未有的繁榮，成為全服不可撼動的武力巔峰！",
        "badge": "🏆 鐵血霸王 (The Iron Sovereign)",
        "isEnding": true
      },
      {
        "id": "wemmbu_ending_destroyer",
        "name": "結局：重構世界的終結者",
        "description": "烈焰吞噬了主城與腐敗的官僚。你親手毀滅了舊 Unstable，但在焦土之上，新的無暇世界正悄然孕育！",
        "badge": "🔥 終結者 (World Purger)",
        "isEnding": true
      },
      {
        "id": "spoke_ending_agent",
        "name": "結局：埋葬黑手黨的無間教父（Spoke 經典線）",
        "description": "黑手黨在連環殉爆中化作飛灰，而你手握全服賄賂黑帳本與千萬複製神裝，坐在廢墟頂端咬著蘋果微笑。你才是黑暗中真正的操盤手！",
        "badge": "🎭 幕後大玩家 (The Grand Puppetmaster)",
        "isEnding": true
      },
      {
        "id": "spoke_ending_null",
        "name": "結局：虛空漫遊者",
        "description": "你藉由 Totem of Null 穿透了方塊碰撞體，遊走在代碼與實體之間，成為了 Unstable 宇宙中無人能夠觸及的幽靈怪盜！",
        "badge": "🌌 虛空幽靈 (The Null Ghost)",
        "isEnding": true
      },
      {
        "id": "flame_ending_vanguard",
        "name": "結局：萬軍莫敵的先鋒戰神（FlameFrags 經典線）",
        "description": "你手持先鋒軍旗與 Truth-Seeker 處決戰刃，以一己之力鑿穿千人敵陣！戰爭結束之時，你站在殘垣斷壁之上，全服戰士為你的勇武齊聲高呼！",
        "badge": "⚡ 先鋒戰神 (The Vanguard Sovereign)",
        "isEnding": true
      },
      {
        "id": "flame_ending_assassin",
        "name": "結局：幽影處決者",
        "description": "作弊敵將首級在瞬息之間落地，偽神的謊言被徹底撕碎。戰場上只留下烈焰劃過的赤紅殘影與永恆傳奇！",
        "badge": "🗡️ 破偽處決者 (The Truth Executor)",
        "isEnding": true
      }
    ]
  },
  "masterChronology": [
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 1,
      "chapterId": "spoke_arc_1",
      "videoId": "wG9dbWNsems",
      "title": "How to Destroy the Unstable SMP",
      "titleZh": "如何毀滅 Unstable SMP（傳奇開山首集）",
      "publishDate": "2024-04-21",
      "formattedDate": "2024 年 4 月 21 日",
      "duration": "24:18",
      "thumbnail": "https://i.ytimg.com/vi/wG9dbWNsems/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=wG9dbWNsems",
      "summary": "整個 Unstable SMP 系列的傳奇奠基開山首集！Spoke 與戰友 Jamato 深入邊界荒原，利用特殊的方塊更新檢測器（BUD）與漏斗堆疊，建造了一台微型時空卡頓器。裝置啟動使全服 TPS 驟降至 2.5，世界時鐘幾乎停止，向全服玩家首次揭示了底層代碼的致命漏洞！",
      "loot": "Chronos Glitch Core（時空漏洞核心）",
      "globalOrder": 1
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 1,
      "chapterId": "parrot_arc_1",
      "videoId": "soYelcGVPac",
      "title": "This Button Destroys the World",
      "titleZh": "這顆按鈕能毀滅整個世界",
      "publishDate": "2024-04-27",
      "formattedDate": "2024 年 4 月 27 日",
      "duration": "28:45",
      "thumbnail": "https://i.ytimg.com/vi/soYelcGVPac/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=soYelcGVPac",
      "summary": "故事的偉大起點！Parrot 在極遠荒野邊境探勘時，意外挖穿一座被古代封印的地下紅石密室。在密室中央矗立著一枚直接綁定伺服器指令、能一鍵重置全服存檔與崩潰區塊的禁斷按鈕。本集完整記錄了 Parrot 面對毀滅世界的終極誘惑時的內心掙扎，以及他如何以精妙微操拆解機關並將其轉化為護界神兵的傳奇開端。",
      "loot": "World Destroyer Button（世界毀滅按鈕）",
      "globalOrder": 2
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 1,
      "chapterId": "wemmbu_arc_1",
      "videoId": "s4Qm81fKfyk",
      "title": "Breaking Into Minecraft's Most Illegal Vault",
      "titleZh": "闖入 Minecraft 最非法的地下禁忌金庫",
      "publishDate": "2024-05-04",
      "formattedDate": "2024 年 5 月 4 日",
      "duration": "26:30",
      "thumbnail": "https://i.ytimg.com/vi/s4Qm81fKfyk/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=s4Qm81fKfyk",
      "summary": "傳奇戰神揚名立萬的奠基之戰！Wemmbu 孤身鎖定寡頭同盟深埋基岩層 40 格的非法黑金庫。面對八重防爆黑曜石與震動警報，他計算出 0.25 格活塞空隙精準珍珠瞬移，在狹窄迴廊完成一穿三極限反殺，洗劫了數十個裝滿滿級獄髓與神刀 The Crucible 的界伏盒！",
      "loot": "The Crucible & Gambit（熔爐與棋局之刃）",
      "globalOrder": 3
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 2,
      "chapterId": "spoke_arc_2",
      "videoId": "E5jfdzB6RnY",
      "title": "How I Stole 10,356,000 Duped Items",
      "titleZh": "我如何神不知鬼不覺偷走 10,356,000 件複製神裝",
      "publishDate": "2024-05-13",
      "formattedDate": "2024 年 5 月 13 日",
      "duration": "36:40",
      "thumbnail": "https://i.ytimg.com/vi/E5jfdzB6RnY/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=E5jfdzB6RnY",
      "summary": "Minecraft 史上最壯觀的物資截胡劫案！Spoke 循線挖穿違規複製工廠的哭泣黑曜石外牆。面對浩瀚的物資流水線，他利用反向比較器漏斗在地下架設暗渠，4 小時內神不知鬼不覺地將 10,356,000 件滿級獄髓與圖騰分流搬空，留下一面搞怪小丑旗震驚黑市！",
      "loot": "10,356,000 Duped Gear Hoard（千萬級複製物資秘藏）",
      "globalOrder": 4
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 2,
      "chapterId": "wemmbu_arc_2",
      "videoId": "o8ocybrrdfw",
      "title": "It's Impossible to Catch this Player",
      "titleZh": "要抓到這個玩家根本是不可能的任務",
      "publishDate": "2024-05-25",
      "formattedDate": "2024 年 5 月 25 日",
      "duration": "29:10",
      "thumbnail": "https://i.ytimg.com/vi/o8ocybrrdfw/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=o8ocybrrdfw",
      "summary": "面對全服十餘家公會組建的獵人聯合軍團與巨額賞金搜捕，Wemmbu 上演了一場長達數萬格的教科書級空地大逃殺。在黑橡樹林極速穿林滑翔、雪山之巔預設連鎖高爆雪崩陷阱，並在絕壁之上拔刀反擊全殲追兵主力！",
      "loot": "Apex Predator's Trophy（獵王之誓獄髓顱骨）",
      "globalOrder": 5
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 2,
      "chapterId": "parrot_arc_2",
      "videoId": "6dtNsa-MGs8",
      "title": "I Broke into Minecraft's Most Secure Prison",
      "titleZh": "我闖入了 Minecraft 最森嚴的 Paragon 黑牢",
      "publishDate": "2024-06-08",
      "formattedDate": "2024 年 6 月 8 日",
      "duration": "35:12",
      "thumbnail": "https://i.ytimg.com/vi/6dtNsa-MGs8/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=6dtNsa-MGs8",
      "summary": "震撼全宇宙的越獄史詩！遭背叛被俘的 Parrot 被投入深海黑牢 Paragon。在深海長老永久挖掘疲勞與多重浸水黑曜石的絕境下，Parrot 運用驚人心算推算出伺服器端儲存資料時的 1.2 秒卡頓延遲，成功走私紫頌果穿牆脫逃，並帶出了揭露黑牢走私名冊的禁忌界伏盒。",
      "loot": "Smuggled Paragon Shulker（Paragon 禁忌走私界伏盒）",
      "globalOrder": 6
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 3,
      "chapterId": "wemmbu_arc_3",
      "videoId": "wbTIN42an0o",
      "title": "I Created Minecraft's Greatest Civilization",
      "titleZh": "我打造了 Minecraft 最不可摧毀的強盛文明",
      "publishDate": "2024-06-15",
      "formattedDate": "2024 年 6 月 15 日",
      "duration": "33:45",
      "thumbnail": "https://i.ytimg.com/vi/wbTIN42an0o/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=wbTIN42an0o",
      "summary": "從逃亡浪子到文明領袖！Wemmbu 動用洗劫黑金庫所得的億萬物資，招募百名流民工匠在荒原建造了三層深板岩鋼鐵文明要塞。完善的紅石城防、外圍護城熔岩海與全自動哨戒塔，為全服散戶提供了最堅實的庇護所。",
      "loot": "Architect's Master Blueprint（鋼鐵文明總工程圖）",
      "globalOrder": 7
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 3,
      "chapterId": "parrot_arc_3",
      "videoId": "VSI12NnAnAY",
      "title": "I Got Hunted by Minecraft's Deadliest Players",
      "titleZh": "我遭到全伺服器最致命的賞金獵人追殺",
      "publishDate": "2024-06-29",
      "formattedDate": "2024 年 6 月 29 日",
      "duration": "31:40",
      "thumbnail": "https://i.ytimg.com/vi/VSI12NnAnAY/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=VSI12NnAnAY",
      "summary": "越獄之後全服發布了對 Parrot 的巨額懸賞令，數十名頂級武裝獵人手持定位指南針跨地圖圍剿。Parrot 在雪原與峽谷中展開教科書級的游擊反殺，巧妙利用靈魂觀測望遠鏡偵測獵人視野盲區，藉地形落差與預設紅石絆線陷阱全殲追兵。",
      "loot": "Parrot's Spyglass（靈魂觀測望遠鏡）",
      "globalOrder": 8
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 4,
      "chapterId": "wemmbu_arc_4",
      "videoId": "_qc8ZF2KyeQ",
      "title": "Why I Destroyed the Unstable SMP",
      "titleZh": "為什麼我決定毀滅 Unstable SMP 舊主城",
      "publishDate": "2024-07-08",
      "formattedDate": "2024 年 7 月 8 日",
      "duration": "38:20",
      "thumbnail": "https://i.ytimg.com/vi/_qc8ZF2KyeQ/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=_qc8ZF2KyeQ",
      "summary": "看透伺服器腐朽體制的毀滅宣言！當發現舊主城徹底淪為地下黑手黨吸血與洗錢的溫床後，Wemmbu 在成功救出摯友 Eggchan 後毅然按下引爆終端，以數萬枚地埋 TNT 將整座舊主城化為焦土，為世界迎來真正的新生。",
      "loot": "Annihilation Remote Detonator（虛空重置引爆終端）",
      "globalOrder": 9
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 3,
      "chapterId": "spoke_arc_3",
      "videoId": "KyLqZkfv3BU",
      "title": "I Bankrupted Minecraft's Richest Civilization",
      "titleZh": "我搞垮了 Minecraft 最富有的億萬帝國",
      "publishDate": "2024-07-19",
      "formattedDate": "2024 年 7 月 19 日",
      "duration": "31:22",
      "thumbnail": "https://i.ytimg.com/vi/KyLqZkfv3BU/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=KyLqZkfv3BU",
      "summary": "一場優雅的怪盜經濟學！面對寡頭 Roshambo 徵收 50% 暴利關稅的中央儲備銀行，Spoke 偽裝成海外大亨開立帳戶摸清金庫紅石傳感器。隨後以偽造交易引開守衛主力，潛入金庫將數萬塊黃金掉包為鍍金高爆 TNT，引爆了整座銀行，讓全服首富一夕破產！",
      "loot": "The Billionaire's Counterfeit Vault（被搬空的億萬富豪黑箱）",
      "globalOrder": 10
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 5,
      "chapterId": "wemmbu_arc_5",
      "videoId": "haxHwlvEN5g",
      "title": "I Discovered a Minecraft Sky Civilization",
      "titleZh": "我發現了飄浮在雲層之上的天空失落文明",
      "publishDate": "2024-10-30",
      "formattedDate": "2024 年 10 月 30 日",
      "duration": "31:05",
      "thumbnail": "https://i.ytimg.com/vi/haxHwlvEN5g/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=haxHwlvEN5g",
      "summary": "一場震撼的高空奇幻冒險！Wemmbu 駕駛滿附魔鞘翅穿越極高空積雨雲層，在 Y=320 建築極限高度之上發現了一座懸浮的天空神廟文明。他在古代浮島中解開了遠古深海長老留下的紅石音律機關，帶回了失傳的古代空戰聖遺物。",
      "loot": "Skybound Sovereign Elytra Core（蒼穹皇者鞘翅核心）",
      "globalOrder": 11
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 4,
      "chapterId": "spoke_arc_4",
      "videoId": "Ss5ggp8Ij14",
      "title": "I Infiltrated The Minecraft Mafia",
      "titleZh": "我臥底潛入了橫行霸道的黑手黨犯罪家族",
      "publishDate": "2024-11-18",
      "formattedDate": "2024 年 11 月 18 日",
      "duration": "29:45",
      "thumbnail": "https://i.ytimg.com/vi/Ss5ggp8Ij14/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=Ss5ggp8Ij14",
      "summary": "黑手黨猖獗企圖暗殺國王，Spoke 褪去綠色連帽衫換上黑色西裝，化名冷酷獨行刺客『影狼』臥底潛入黑手黨內部。面對地下刑房紅石測謊儀與教父的苛刻考核，Spoke 展現影帝級心理素質贏得信任，成功打入犯罪家族核心最高層！",
      "loot": "Shadow Wolf's Infiltration Suit（影狼潛伏西裝）",
      "globalOrder": 12
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 5,
      "chapterId": "spoke_arc_5",
      "videoId": "x9-V64fR9sU",
      "title": "The End of the Minecraft Mafia",
      "titleZh": "黑手黨帝國的終結之日",
      "publishDate": "2025-01-29",
      "formattedDate": "2025 年 1 月 29 日",
      "duration": "38:15",
      "thumbnail": "https://i.ytimg.com/vi/x9-V64fR9sU/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=x9-V64fR9sU",
      "summary": "黑手黨家族的毀滅葬禮！在黑手黨首腦於摩天大樓頂層召開誓師大會當夜，身為副指揮的 Spoke 悄然溜入地下室，在單格軌道上極限堆疊了 64 輛共振 TNT 礦車。扣動扳機的瞬間，整座摩天大樓在連鎖殉爆中灰飛煙滅，黑手黨帝國徹底終結！",
      "loot": "The Godfather's Burned Signet（教父燒融的黑手黨族徽戒指）",
      "globalOrder": 13
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 1,
      "chapterId": "flamefrags_arc_1",
      "videoId": "Vhnn_sG7xUk",
      "title": "I Became Immortal on a Hardcore Minecraft SMP",
      "titleZh": "我在極限硬核 Minecraft SMP 成為不死之身",
      "publishDate": "2025-05-03",
      "formattedDate": "2025 年 5 月 3 日",
      "duration": "25:40",
      "thumbnail": "https://i.ytimg.com/vi/Vhnn_sG7xUk/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=Vhnn_sG7xUk",
      "summary": "極限硬核神話的誕生！在生命只有一次的殘酷伺服器中，FlameFrags 深入研究不死圖騰的觸發機制，在毫秒級的時序差中利用副手卡位判定，成功卡出了突破生命上限、永不消逝的常駐代碼金色血條，一戰震撼全服！",
      "loot": "Glitched Immortal Heart Reservoir（代碼異常不死金心）",
      "globalOrder": 14
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 2,
      "chapterId": "flamefrags_arc_2",
      "videoId": "UJyBjBXaiZI",
      "title": "SOLO Player VS Toxic Minecraft Team",
      "titleZh": "孤狼單挑全服最囂張的毒瘤公會",
      "publishDate": "2025-05-17",
      "formattedDate": "2025 年 5 月 17 日",
      "duration": "30:15",
      "thumbnail": "https://i.ytimg.com/vi/UJyBjBXaiZI/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=UJyBjBXaiZI",
      "summary": "一場大快人心的正義清算！五名滿裝惡霸洗劫公益農場殘害無辜，FlameFrags 故意脫下重裝佯裝逃亡雪山。在暴風雪山巔的絕壁之上，他利用一夫當關的地形優勢跳劈破盾，上演震撼全服的 1v5 團滅奇蹟！",
      "loot": "Rejoice’s Flower（戰火廢墟中的純白之花）",
      "globalOrder": 15
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 3,
      "chapterId": "flamefrags_arc_3",
      "videoId": "xxbwmsi4n-U",
      "title": "Unstable SMP: The Great Farm War",
      "titleZh": "Unstable SMP：全服巨型農場爭奪大戰",
      "publishDate": "2025-08-12",
      "formattedDate": "2025 年 8 月 12 日",
      "duration": "34:25",
      "thumbnail": "https://i.ytimg.com/vi/xxbwmsi4n-U/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=xxbwmsi4n-U",
      "summary": "農場保衛戰的全面升級！各大公會為爭奪食物與物資供應鏈打響陣地戰。FlameFrags 單兵游擊穿插於交戰前線，以神出鬼沒的突襲摧毀敵方補給營地，以無敵近戰壓迫感逼退三大軍團，捍衛了公共平民農場的自由。",
      "loot": "Harvester’s Vanguard Glaive（豐收之護先鋒戰戟）",
      "globalOrder": 16
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 4,
      "chapterId": "parrot_arc_4",
      "videoId": "2WusTNLmBpE",
      "title": "I Became King of the Unstable SMP",
      "titleZh": "我登基成為 Unstable SMP 的第一任國王",
      "publishDate": "2026-02-10",
      "formattedDate": "2026 年 2 月 10 日",
      "duration": "33:20",
      "thumbnail": "https://i.ytimg.com/vi/2WusTNLmBpE/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=2WusTNLmBpE",
      "summary": "伺服器無序混亂催生文明渴望。Parrot 順應民意參選國王，黑手黨家族在造勢廣場派遣隱形刺客發動致命狙擊。Parrot 在演講台上反手重弩盲射絕殺刺客，以 89% 歷史得票率登基加冕，高舉國王權杖宣告秩序時代降臨！",
      "loot": "The Sovereign Scepter（國王權杖）",
      "globalOrder": 17
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 5,
      "chapterId": "parrot_arc_5",
      "videoId": "TphfLyzVbqQ",
      "title": "100 Days as King of the Unstable SMP",
      "titleZh": "在 Unstable SMP 擔任國王的極限統治紀實",
      "publishDate": "2026-02-28",
      "formattedDate": "2026 年 2 月 28 日",
      "duration": "42:15",
      "thumbnail": "https://i.ytimg.com/vi/TphfLyzVbqQ/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=TphfLyzVbqQ",
      "summary": "登基之後的統治風暴！Parrot 面對國庫空虛、黑手黨殘黨反撲與內部大臣貪腐的重重危機，推行《和平治安法典》，建立皇家守衛團，並在中央主城興建起壯麗的白色大理石王宮，完整記錄了其宏大而艱辛的治國歷程。",
      "loot": "Royal Peace Accord Seal（皇家治安法典金印）",
      "globalOrder": 18
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 6,
      "chapterId": "wemmbu_arc_6",
      "videoId": "cEXBN7fTs00",
      "title": "Unstable SMP: The Mafia",
      "titleZh": "Unstable SMP：黑手黨決戰風暴",
      "publishDate": "2026-03-12",
      "formattedDate": "2026 年 3 月 12 日",
      "duration": "40:10",
      "thumbnail": "https://i.ytimg.com/vi/cEXBN7fTs00/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=cEXBN7fTs00",
      "summary": "戰神為救摯友怒戰黑幫！黑手黨綁架了 Wemmbu 的生死之交 Eggchan 意圖勒索。Wemmbu 孤身持刀踹碎黑手黨總舵大門，在樓梯狹道斬碎數十名黑衣殺手，在定時炸彈僅剩最後 3 秒時擲刀斷索救出摯友，霸氣震懾全服！",
      "loot": "Eggchan’s Keepsake Book（摯友的血盟筆記）",
      "globalOrder": 19
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 6,
      "chapterId": "parrot_arc_6",
      "videoId": "zMoihcFz2kY",
      "title": "I Exposed a Corrupt Minecraft Civilization",
      "titleZh": "我揭發了一個虛偽腐敗的超級文明",
      "publishDate": "2026-03-19",
      "formattedDate": "2026 年 3 月 19 日",
      "duration": "29:50",
      "thumbnail": "https://i.ytimg.com/vi/zMoihcFz2kY/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=zMoihcFz2kY",
      "summary": "Parrot 深入調查邊境人口失蹤案，撕開了號稱『慈善烏托邦』的白金文明假面具。他在其地下數十層基岩中發現了數百名被奴役的玩家與違規複製工廠，並冒死將現場錄像在全服廣播公頻發布，點燃了正義復仇的導火線。",
      "loot": "Corrupt Ledger of Utopia（烏托邦血色黑帳）",
      "globalOrder": 20
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 7,
      "chapterId": "parrot_arc_7",
      "videoId": "O-ipuD6qy1Q",
      "title": "Searching for a Civilization that Doesn't Exist",
      "titleZh": "尋找一個不存在於地圖上的神秘失落文明",
      "publishDate": "2026-04-14",
      "formattedDate": "2026 年 4 月 14 日",
      "duration": "34:05",
      "thumbnail": "https://i.ytimg.com/vi/O-ipuD6qy1Q/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=O-ipuD6qy1Q",
      "summary": "循著遠古代碼石板的指引，Parrot 踏上了探尋伺服器遠古文明的壯麗冒險。在跨越極端地形與虛空邊界後，他發現了一處被伺服器地圖渲染引擎遺忘的浮空遺蹟，解開了 Unstable SMP 世界創生時期的重大秘密。",
      "loot": "Null Code Compass（虛空代碼羅盤）",
      "globalOrder": 21
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 8,
      "chapterId": "parrot_arc_8",
      "videoId": "HDDxxeh3r-E",
      "title": "I Created the World's Largest Minecraft Army",
      "titleZh": "我組建了 Minecraft 史上最龐大的玩家軍團",
      "publishDate": "2026-05-04",
      "formattedDate": "2026 年 5 月 4 日",
      "duration": "38:40",
      "thumbnail": "https://i.ytimg.com/vi/HDDxxeh3r-E/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=HDDxxeh3r-E",
      "summary": "內戰一觸即發，面對敵對聯盟的數千僱傭軍，Parrot 號召全服平民散戶與友好公會團結自救。他建立全自動化軍械庫，夜以繼日為千名士兵鍛造滿級獄髓裝備與高爆箭矢，組建起 Unstable 史上規模最龐大的自由軍團！",
      "loot": "Standard-Issue Vanguard Netherite Kit（先鋒全套獄髓軍備）",
      "globalOrder": 22
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 7,
      "chapterId": "wemmbu_arc_7",
      "videoId": "ZjO0dep5VjU",
      "title": "Searching For My Friend Who Went Missing",
      "titleZh": "尋找離奇失蹤的生死摯友 Eggchan",
      "publishDate": "2026-05-09",
      "formattedDate": "2026 年 5 月 9 日",
      "duration": "27:45",
      "thumbnail": "https://i.ytimg.com/vi/ZjO0dep5VjU/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=ZjO0dep5VjU",
      "summary": "內戰之後摯友 Eggchan 在代碼異變中離奇失蹤，未留下隻字片語。Wemmbu 踏遍全服四荒六合，循著地脈殘留的神秘亂碼線索展開千里追尋。在暗無天日的廢墟深處，他發現了幕後黑手 Lattice K 與 The LAW 暗中布控的恐怖陰謀！",
      "loot": "Eggchan’s Missing Feather（失落的摯友羽毛）",
      "globalOrder": 23
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 9,
      "chapterId": "parrot_arc_9",
      "videoId": "bP86n9nFoJY",
      "title": "Unstable SMP: Civil War",
      "titleZh": "Unstable SMP：千人大內戰全面爆發",
      "publishDate": "2026-05-16",
      "formattedDate": "2026 年 5 月 16 日",
      "duration": "45:30",
      "thumbnail": "https://i.ytimg.com/vi/bP86n9nFoJY/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=bP86n9nFoJY",
      "summary": "全服規模最壯烈的歷史大決戰前篇！兩千餘名全副武裝的玩家在中央主城盆地正面對撼。戰火漫天、巨砲轟鳴，Parrot 與盟友 Wemmbu、Spoke 協同作戰，在前線以堅壁清野的戰術抵禦敵方裝甲洪流的第一波猛攻。",
      "loot": "War-Torn Battle Standard（烽火戰旗標誌）",
      "globalOrder": 24
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 8,
      "chapterId": "wemmbu_arc_8",
      "videoId": "_hyFGrcVv5U",
      "title": "I Went to WAR on a Hardcore Minecraft SMP",
      "titleZh": "我在極限硬核伺服器打響全面戰爭",
      "publishDate": "2026-05-30",
      "formattedDate": "2026 年 5 月 30 日",
      "duration": "37:10",
      "thumbnail": "https://i.ytimg.com/vi/_hyFGrcVv5U/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=_hyFGrcVv5U",
      "summary": "千人大內戰 Wemmbu 突擊第一視角！Wemmbu 攜帶軌道巨砲火控終端親臨戰場最前線。他率領親衛隊冒著漫天火雨強渡護城河，揮舞 The Crucible 巨刃以一己之力劈開敵城第一道基岩防線，為同盟大軍撕開勝利之門！",
      "loot": "Vanguard Siege Cleaver（先鋒破城巨刃）",
      "globalOrder": 25
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 4,
      "chapterId": "flamefrags_arc_4",
      "videoId": "UnFIrVKA9Zc",
      "title": "1000 VS 1000 Player Minecraft Civil War",
      "titleZh": "1000 對 1000 玩家萬人大內戰（先鋒衝鋒視角）",
      "publishDate": "2026-05-31",
      "formattedDate": "2026 年 5 月 31 日",
      "duration": "48:10",
      "thumbnail": "https://i.ytimg.com/vi/UnFIrVKA9Zc/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=UnFIrVKA9Zc",
      "summary": "千人大內戰最震撼的鋒刃視角！被推舉為先鋒總司令的 FlameFrags 手扛萬人大內戰先鋒軍旗，帶領敢死隊冒著漫天砲火發起絕命衝鋒。他親自揮刃斬斷敵軍三道防線的鎖鏈，為聯軍主力開闢了通往勝利的血路！",
      "loot": "1000-Player Vanguard War Banner（萬人大內戰先鋒軍旗）",
      "globalOrder": 26
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 10,
      "chapterId": "parrot_arc_10",
      "videoId": "NT2Is90lFoI",
      "title": "Unstable SMP: Civil War FINALE",
      "titleZh": "Unstable SMP：內戰總決戰（Civil War FINALE）",
      "publishDate": "2026-06-03",
      "formattedDate": "2026 年 6 月 3 日",
      "duration": "50:18",
      "thumbnail": "https://i.ytimg.com/vi/NT2Is90lFoI/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=NT2Is90lFoI",
      "summary": "千人大內戰的史詩終局！在戰事陷入慘烈膠著之際，Parrot 身先士卒拔出佩劍，率領敢死隊親自鑿穿敵軍三道核心防線。敵方白金城塞在聯軍的怒火中崩塌，腐敗軍閥徹底瓦解，三巨頭共同登頂宣告世界重歸和平！",
      "loot": "Fallen Overlord's Broken Helm（覆滅軍閥的碎裂頭盔）",
      "globalOrder": 27
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 9,
      "chapterId": "wemmbu_arc_9",
      "videoId": "4v_jk0w7wR0",
      "title": "1000 Players Simulate THE PURGE in Minecraft",
      "titleZh": "1000 名玩家在 Minecraft 展開無規則肅清之夜",
      "publishDate": "2026-06-06",
      "formattedDate": "2026 年 6 月 6 日",
      "duration": "44:30",
      "thumbnail": "https://i.ytimg.com/vi/4v_jk0w7wR0/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=4v_jk0w7wR0",
      "summary": "極度混亂的無規則肅清之夜！全服安全法規全數停擺，千名武裝狂徒在黑夜中展開無差別劫掠。Wemmbu 隻身一人守護在平民避難所的大門前，在連續數小時的慘烈圍攻中寸步不退，以戰神之名斬退數百暴徒，守護了人間微光！",
      "loot": "Purge Defender's Bloodied Bulwark（肅清守護者浴血壁壘）",
      "globalOrder": 28
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 5,
      "chapterId": "flamefrags_arc_5",
      "videoId": "Ym2wmd19S_c",
      "title": "I Became the Strongest on the Unstable SMP",
      "titleZh": "我加冕成為 Unstable SMP 的最強戰神",
      "publishDate": "2026-06-09",
      "formattedDate": "2026 年 6 月 9 日",
      "duration": "28:50",
      "thumbnail": "https://i.ytimg.com/vi/Ym2wmd19S_c/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=Ym2wmd19S_c",
      "summary": "武道榮耀之巔！在全服矚目的中央大競技場邀請賽上，FlameFrags 迎戰各大公會推舉的八位頂級角鬥士。他以純粹的原生近戰技藝連克強敵，破盾時機精準至毫秒，在全服玩家的起立歡呼中加冕最強戰神披風！",
      "loot": "Flame’s Bespoke Warplate（烈焰專屬獄髓重戰甲）",
      "globalOrder": 29
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 6,
      "chapterId": "flamefrags_arc_6",
      "videoId": "ljppGDO4HlU",
      "title": "I Got Hunted By a Minecraft Combat Master",
      "titleZh": "我遭到 Minecraft 頂級格鬥宗師的致命追殺",
      "publishDate": "2026-06-18",
      "formattedDate": "2026 年 6 月 18 日",
      "duration": "32:30",
      "thumbnail": "https://i.ytimg.com/vi/ljppGDO4HlU/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=ljppGDO4HlU",
      "summary": "強者的惺惺相惜與生死切磋！面對隱居江湖多年的頂級格鬥宗師 ClownPierce 的全力圍捕，FlameFrags 在幽暗峽谷中展開了長達數十分鐘的窒息對決，兩大天花板選手的每一次碰撞都堪稱 Minecraft PVP 歷史教科書！",
      "loot": "ClownPierce’s Training Scythe（死神親傳連斬戰鐮）",
      "globalOrder": 30
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 6,
      "chapterId": "spoke_arc_6",
      "videoId": "8_Au10osdEo",
      "title": "Unstable SMP: The NULL / Purgatory Saga",
      "titleZh": "Unstable SMP：虛空煉獄與 NULL 代碼之謎",
      "publishDate": "2026-06-23",
      "formattedDate": "2026 年 6 月 23 日",
      "duration": "33:50",
      "thumbnail": "https://i.ytimg.com/vi/8_Au10osdEo/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=8_Au10osdEo",
      "summary": "黑手黨滅亡後，伺服器出現了不可名狀的幽靈代碼異象。Spoke 隻身穿梭於被放逐的代碼煉獄維度，在虛空亂流與代碼殘渣中與幽靈實體博弈，最終掌握了能穿透物理碰撞體、在致命傷害前強行重寫狀態的禁忌神器 Totem of Null！",
      "loot": "Totem of Null（虛空無效化圖騰）",
      "globalOrder": 31
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 7,
      "chapterId": "flamefrags_arc_7",
      "videoId": "yBy5NnLTiWQ",
      "title": "I Got Trained By the World's Deadliest Minecraft Player",
      "titleZh": "我接受了世界上最致命玩家的魔鬼特訓",
      "publishDate": "2026-07-03",
      "formattedDate": "2026 年 7 月 3 日",
      "duration": "35:15",
      "thumbnail": "https://i.ytimg.com/vi/yBy5NnLTiWQ/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=yBy5NnLTiWQ",
      "summary": "面對 The LAW 鐵腕霸權的逼近，FlameFrags 拜入世界上最致命的頂級殺手門下接受殘酷特訓。在失明、高頻擊退與極限低血量下，他突破人體反應極限，將戰鬥感知昇華至能預判敵方肌肉抖動的超凡神域！",
      "loot": "Master’s Whetstone of Absolute Precision（絕對精準大師砥石）",
      "globalOrder": 32
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 8,
      "chapterId": "flamefrags_arc_8",
      "videoId": "BCiRLHaeHkI",
      "title": "Minecraft's Best Players Simulate PVP Tournament",
      "titleZh": "Minecraft 頂尖高手集結模擬殘酷錦標賽",
      "publishDate": "2026-07-21",
      "formattedDate": "2026 年 7 月 21 日",
      "duration": "41:40",
      "thumbnail": "https://i.ytimg.com/vi/BCiRLHaeHkI/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=BCiRLHaeHkI",
      "summary": "全服頂級高手集結！一場完全模擬極限硬核環境的單敗淘汰錦標賽。FlameFrags 面對水晶 PVP、床炸彈與傳統盾斧高手，以萬化歸一的原生走位與壓制節奏連克強手，再次證明誰才是真正的無冕之王！",
      "loot": "Grand Champion’s Laurel of Blood（血冕總冠軍桂冠）",
      "globalOrder": 33
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 7,
      "chapterId": "spoke_arc_7",
      "videoId": "ynkhNRpQ9Xc",
      "title": "1000 Players Build END Civilization in Hardcore Minecraft",
      "titleZh": "1000 名玩家在極限硬核 Minecraft 建立終界龐大文明",
      "publishDate": "2026-07-26",
      "formattedDate": "2026 年 7 月 26 日",
      "duration": "43:10",
      "thumbnail": "https://i.ytimg.com/vi/ynkhNRpQ9Xc/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=ynkhNRpQ9Xc",
      "summary": "波瀾壯闊的千人遠征！為了擺脫主世界各大霸權與 The LAW 的監控，Spoke 帶領千名玩家進軍終界虛空。在深不見底的虛空深淵之上，千人協同作戰，克服龍息與虛空墜落，搭建起綿延數萬格的黑曜石懸浮要塞與跨島文明通道！",
      "loot": "End Void Bridge Master Key（終界虛空天橋大師密匙）",
      "globalOrder": 34
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 11,
      "chapterId": "parrot_arc_11",
      "videoId": "1EgS0othQe4",
      "title": "I Built Minecraft's Most Advanced Civilization",
      "titleZh": "我在戰後廢墟打造了最先進的高科技文明",
      "publishDate": "2026-08-12",
      "formattedDate": "2026 年 8 月 12 日",
      "duration": "36:25",
      "thumbnail": "https://i.ytimg.com/vi/1EgS0othQe4/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=1EgS0othQe4",
      "summary": "戰後重建新紀元！Parrot 引領流離失所的平民利用戰利品與高階紅石技術，在荒原拔地建造了一座懸浮於雲端之上的高科技現代城邦。全自動垂直物流、光速珍珠飛行通道與安全屏障網，樹立了全服文明建設的至高標竿。",
      "loot": "Quantum Redstone Conduit Core（量子紅石傳導核心）",
      "globalOrder": 35
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 8,
      "chapterId": "spoke_arc_8",
      "videoId": "V9HzAdwgf-I",
      "title": "I Created Minecraft's Greatest Military",
      "titleZh": "我打造了 Minecraft 史上最強大的精銳軍團",
      "publishDate": "2026-08-13",
      "formattedDate": "2026 年 8 月 13 日",
      "duration": "35:40",
      "thumbnail": "https://i.ytimg.com/vi/V9HzAdwgf-I/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=V9HzAdwgf-I",
      "summary": "終界帝國的軍事崛起！為了保衛終界文明不受主世界軍隊干涉，Spoke 將隱形藥水突襲、高頻終界珍珠閃擊與瞬爆礦車戰術全面體系化，親自訓練出一支戰無不勝的終界幽靈軍團，成為令全服各大勢力聞風喪膽的頂級軍事統帥！",
      "loot": "Shadow Phantom War Signet（幽靈軍團戰神徽印）",
      "globalOrder": 36
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 9,
      "chapterId": "flamefrags_arc_9",
      "videoId": "BkYekSPynVo",
      "title": "I Exposed Minecraft's 'Strongest' Player",
      "titleZh": "我當眾撕下了號稱『最強戰神』的虛偽面具",
      "publishDate": "2026-08-14",
      "formattedDate": "2026 年 8 月 14 日",
      "duration": "27:50",
      "thumbnail": "https://i.ytimg.com/vi/BkYekSPynVo/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=BkYekSPynVo",
      "summary": "正義裁決之戰！面對自封無敵、實則利用延遲補償外掛的偽神，FlameFrags 在公開擂台布設紅石封包檢測器，當眾投影出對方竄改參數的確鑿日誌。隨後拔出真實之眼戰刃在 30 秒內三次破盾將作弊偽神斬落台下！",
      "loot": "The Truth-Seeker's Executioner Blade（真實之眼破偽裁決戰刃）",
      "globalOrder": 37
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 10,
      "chapterId": "wemmbu_arc_10",
      "videoId": "Ytm8WiQLNZA",
      "title": "How I Destroyed an Entire Minecraft Civilization",
      "titleZh": "我如何親手摧毀了一整座敵對文明",
      "publishDate": "2026-08-22",
      "formattedDate": "2026 年 8 月 22 日",
      "duration": "32:15",
      "thumbnail": "https://i.ytimg.com/vi/Ytm8WiQLNZA/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=Ytm8WiQLNZA",
      "summary": "面對殘暴霸權 PrinceZam 帝國的步步緊逼，Wemmbu 展現了令人膽寒的毀滅工程力。他架設 120 格跨區塊軌道砲，穿透數個未載入區塊將 PrinceZam 的金碧輝煌王宮轟成焦土廢墟，親自送葬了欺壓平民的龐大帝國！",
      "loot": "PrinceZam's Siphoned Seal（被奪取的帝國皇家金印）",
      "globalOrder": 38
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 12,
      "chapterId": "parrot_arc_12",
      "videoId": "we2dBzQxtgQ",
      "title": "1000 Players Simulate Mining Prison in Minecraft",
      "titleZh": "1000 名玩家在極限黑牢礦場模擬生存",
      "publishDate": "2026-09-05",
      "formattedDate": "2026 年 9 月 5 日",
      "duration": "48:50",
      "thumbnail": "https://i.ytimg.com/vi/we2dBzQxtgQ/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=we2dBzQxtgQ",
      "summary": "極具社會學深度的震撼實驗！Parrot 構建了一座全封閉的地下基岩礦場監獄，召集 1000 名志願玩家在極度匱乏的物資與森嚴的階級制度下生存。從幫派割據、黑市物資走私到全監獄大規模武裝暴動，呈現了人性在極限壓迫下的真實演變。",
      "loot": "Prison Warden's Heavy Iron Baton（典獄長精鋼警棍）",
      "globalOrder": 39
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 9,
      "chapterId": "spoke_arc_9",
      "videoId": "lA1ohDqw8XA",
      "title": "Exploring Minecraft’s Forgotten Dimension",
      "titleZh": "探索 Minecraft 被遺忘的失落維度（幽冥深淵秘境）",
      "publishDate": "2026-09-07",
      "formattedDate": "2026 年 9 月 7 日",
      "duration": "39:15",
      "thumbnail": "https://i.ytimg.com/vi/lA1ohDqw8XA/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=lA1ohDqw8XA",
      "summary": "深淵探索史詩！Spoke 穿透地獄熔岩海下方的虛空基岩，孤身降臨漆黑未知的失落維度（Underworld）。在無光死局與無形代碼異獸的狂暴追獵下，Spoke 憑藉絕頂身法穿行於破碎浮島，成功發掘出記載世界起源的遠古代碼石板！",
      "loot": "Origin Code Slate（起源原始碼石板）",
      "globalOrder": 40
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 10,
      "chapterId": "flamefrags_arc_10",
      "videoId": "h68WUZ8b0O0",
      "title": "Searching for a Vault that Doesn't Exist",
      "titleZh": "尋找那座『不存在的隱形金庫』",
      "publishDate": "2026-09-11",
      "formattedDate": "2026 年 9 月 11 日",
      "duration": "33:10",
      "thumbnail": "https://i.ytimg.com/vi/h68WUZ8b0O0/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=h68WUZ8b0O0",
      "summary": "為追尋世界深層代碼的真相，FlameFrags 循著線索深入座標失真的 404 虛空扇區。在無底深淵中盲跳踩踏隱形方塊，成功開啟傳說中不存在的金色寶庫，起獲能感應虛空裂隙的幽靈密匙卡！",
      "loot": "Ghost Protocol Keycard（幽靈協議金庫卡）",
      "globalOrder": 41
    },
    {
      "characterKey": "wemmbu",
      "characterName": "Wemmbu",
      "characterAvatar": "assets/avatars/wemmbu.jpg",
      "characterBadge": "MIGHT & WEALTH",
      "themeColor": "#f59e0b",
      "episodeIndex": 11,
      "chapterId": "wemmbu_arc_11",
      "videoId": "5hG_nAYEC2g",
      "title": "How I Saved the World's Largest Minecraft Server",
      "titleZh": "我如何拯救了世界上最龐大的 Minecraft 伺服器（最新熱播中！）",
      "publishDate": "2026-09-19",
      "formattedDate": "2026 年 9 月 19 日",
      "duration": "46:50",
      "thumbnail": "https://i.ytimg.com/vi/5hG_nAYEC2g/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=5hG_nAYEC2g",
      "summary": "2026 最新震撼主線！肅清之夜引爆伺服器底層記憶體崩潰危機，世界面臨永久格式化。Wemmbu 隻身跳入高溫熔岩翻滾的世界核心機房，在最後五分鐘獻祭全身神裝抵禦高溫，手動鍵入穩定演算法指令，成功挽救了全宇宙！",
      "loot": "Overclocked Core Stabilizer（過載核心穩定器）",
      "globalOrder": 42
    },
    {
      "characterKey": "spoke",
      "characterName": "Spoke (SpokeIsHere)",
      "characterAvatar": "assets/avatars/spoke.jpg",
      "characterBadge": "CHAOS & TACTICS",
      "themeColor": "#10b981",
      "episodeIndex": 10,
      "chapterId": "spoke_arc_10",
      "videoId": "IOS7FKtiyxE",
      "title": "I Created Minecraft’s Greatest Empire",
      "titleZh": "我締造了 Minecraft 史上最偉大的至高帝國（最新熱播中！）",
      "publishDate": "2026-09-20",
      "formattedDate": "2026 年 9 月 20 日",
      "duration": "47:20",
      "thumbnail": "https://i.ytimg.com/vi/IOS7FKtiyxE/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=IOS7FKtiyxE",
      "summary": "2026 最新震撼主線！攜帶失落維度的遠古神力，Spoke 重返終界整合三界資源，正式加冕並宣告建立 Minecraft 史上最強帝國！面對 Lattice K 與 The LAW 大軍在邊界的重裝集結，終界帝皇率無敵軍團隔空對峙，傳奇持續燃燒！",
      "loot": "End Sovereign Void-Plate（終界至尊虛空戰鎧）",
      "globalOrder": 43
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 13,
      "chapterId": "parrot_arc_13",
      "videoId": "BWmWZTDxFrk",
      "title": "Escaping the Minecraft Underworld",
      "titleZh": "逃離 Minecraft 幽冥地底深淵（最新熱播中！）",
      "publishDate": "2026-09-22",
      "formattedDate": "2026 年 9 月 22 日",
      "duration": "41:15",
      "thumbnail": "https://i.ytimg.com/vi/BWmWZTDxFrk/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=BWmWZTDxFrk",
      "summary": "2026 年最新主線史詩！黑牢實驗誘發地脈崩塌，Parrot 墜入連基岩都不復存在的失落維度『幽冥地底深淵』。在無光源的絕對死局與未知畸變實體的圍獵下，Parrot 憑藉驚人毅力利用回聲定位與極限珍珠盲投殺出深淵，戰火未完待續！",
      "loot": "Underworld Void Catalyst（幽冥虛空催化石）",
      "globalOrder": 44
    },
    {
      "characterKey": "flamefrags",
      "characterName": "FlameFrags",
      "characterAvatar": "assets/avatars/flamefrags.jpg",
      "characterBadge": "PVP COMBAT WARLORD",
      "themeColor": "#f97316",
      "episodeIndex": 11,
      "chapterId": "flamefrags_arc_11",
      "videoId": "8t8YBu7bdT0",
      "title": "Escaping Terminus: The Deadliest Minecraft Prison",
      "titleZh": "逃離 Terminus：Minecraft 最致命的死刑黑牢（最新熱播中！）",
      "publishDate": "2026-10-06",
      "formattedDate": "2026 年 10 月 6 日",
      "duration": "38:45",
      "thumbnail": "https://i.ytimg.com/vi/8t8YBu7bdT0/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=8t8YBu7bdT0",
      "summary": "2026 年 10 月最新史詩！遭 The LAW 設伏被押入全服最恐怖特級黑牢 Terminus。在多重守衛者雷射與基岩絕境中，FlameFrags 徒手擊殺獄卒奪回兵器，炸穿天井完成震驚全宇宙的越獄大逆轉，戰火未完待續！",
      "loot": "Terminus Breaker Pickaxe（Terminus 破獄者獄髓鎬）",
      "globalOrder": 45
    },
    {
      "characterKey": "parrot",
      "characterName": "Parrot (ParrotX2)",
      "characterAvatar": "assets/avatars/parrot.jpg",
      "characterBadge": "INTEL & STRATEGY",
      "themeColor": "#38bdf8",
      "episodeIndex": 14,
      "chapterId": "parrot_arc_14",
      "videoId": "9-j9GWjyWpY",
      "title": "1000 Players Simulate End Prison in Minecraft",
      "titleZh": "1000 名玩家在終界黑牢模擬殘酷生存",
      "publishDate": "2026-10-15",
      "formattedDate": "2026 年 10 月 15 日",
      "duration": "1:12:54",
      "thumbnail": "https://i.ytimg.com/vi/9-j9GWjyWpY/maxresdefault.jpg",
      "youtubeUrl": "https://www.youtube.com/watch?v=9-j9GWjyWpY",
      "summary": "逃離幽冥深淵後，Parrot 遭未知勢力 NULL 捕獲押入深處於終界維度的黑曜石萬人煉獄。這座由 Spoke 親手打造的心理煉獄關押了 1000 名編號囚犯，每日以角鬥場殘酷死鬥汰除弱者。Parrot 在生死擂台中力克刺客，奇蹟般重逢盟友 MinuteTech 展開極限戰技特訓，耗費 20 餘小時破解機關密碼門，最終直面終界守護者 X 打響震撼全服的宿命決戰。",
      "loot": "End Purgatory Key & Cipher Slate（終界煉獄密鑰與解密石板）",
      "globalOrder": 46
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = UNSTABLE_DATA;
}
