/**
 * Unstable SMP Universe Database (Unstable SMP 宇宙資料庫)
 * 完整收錄：四位傳奇主角個人全紀錄、全部官方原片來源、劇情深度講解、意外與漏洞禁忌物品、多視角事件矩陣與冒險遊戲資料
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
          "subtitle": "荒野深處的下沉密室、未記錄的協議與伺服器崩壞威懾",
          "summary": "在探索伺服器極遠荒野邊境時，Parrot 意外發掘了一座未記錄在伺服器端生成清單中的古代紅石地下密室。在密室最核心的神壇上，他挖出了一枚標註為『抹除協議』的禁忌按鈕，通電即會引發全服封包遺失與區塊崩潰。這起震撼發現打破了常規生存的假象，揭露了 Unstable SMP 背後被代碼腐化籠罩的真實面貌，也讓 Parrot 成為各大陣營暗中鎖定的首要調查目標。",
          "genesis": "伺服器初建之時，大部分玩家仍沉浸在開採礦石與圈地建城的繁榮假象中。然而，心思細膩的 Parrot 在日常遊歷時，敏銳地注意到邊界座標 X: 48,200、Z: -36,500 的地脈出現了異常的區塊抖動（Chunk Stuttering）與紅石訊號延遲。透過比對伺服器地圖種子碼的原始生成數據，他確認該區域存在一個本不該存在的負 Y 軸基岩結構。在攜帶足量挖掘工具、隱形藥水與水桶後，Parrot 隻身一人深入這片被暴風雪掩埋的荒蕪邊境，徒手開鑿了一條直通地底基岩的垂直豎井，最終在幽暗的地底深處撞破了一道刻滿未知名牌的石磚結界。",
          "conflict": "密室內部布滿了極具惡意的連鎖防禦機關：隱蔽的絆線鉤連接著裝滿瞬爆 TNT 的投擲器，下方則是浸潤著致命滯留傷害藥水的深坑。Parrot 運用精密的水流阻絕與紅石電路逆向破解技術，以極限微操在暗光中逐一拆解引信。當他穿越三道厚重的哭泣黑曜石閘門抵達中央核心神壇時，赫然看見一枚懸浮在屏障方塊（Barrier Block）之上的石質按鈕，四周環繞著散發微光的紅石中繼器陣列。經過脈衝頻率探測，他驚駭地發現該按鈕直接綁定了伺服器底層指令——一旦通電，將強行向伺服器端注入無限迴圈的溢出資料，引發全服主執行緒崩潰並導致所有玩家的物品庫數據徹底歸零。就在此時，密室外傳來了追蹤者的腳步聲與鎬子敲擊聲，數名企圖奪取按鈕稱霸全服的狂徒已然逼近。面對一鍵毀滅整個世界的終極力量誘惑與生死關頭，Parrot 展現出非凡的克制力；他並未盲目引爆，而是冷靜利用水流卡位與高頻紅石干擾使追兵陷入混亂，隨後以精準的外科手術式挖掘，在完全避開伺服器端安全警報日誌的前提下，將這枚禁忌按鈕完整剝離收納，轉化為日後制衡全服強權的最強底牌。",
          "lootAndAnomaly": "發掘並秘密封存傳奇禁斷神器《World Destroyer Button（世界毀滅按鈕）》，並自製了能洞悉暗處靈魂軌跡的《Parrot's Spyglass（靈魂觀測望遠鏡）》，掌握了對伺服器底層運行的最高知情權。",
          "impact": "世界毀滅按鈕的現世，徹底粉碎了 Unstable SMP 虛偽的平靜。各大軍事工會與財閥集團開始意識到世界規則的存在性漏洞，伺服器從此進入了人人自危、暗流湧動的冷戰紀元，Parrot 亦正式確立了其『真理探索者』的關鍵地位。",
          "keyPlotPoints": [
            "在邊界荒原勘測到異常的伺服器時序震顫，鎖定基岩層未登記的古代地下密室座標",
            "在伸手不見五指的迷宮中破解三道連鎖高爆陷阱與致命滯留藥水機關",
            "親眼見證中央神壇上具備抹除全服存檔權能的『世界毀滅按鈕』",
            "在敵對追蹤軍團破門而入的千鈞一髮之際，外科手術般拆解按鈕並巧妙隱匿撤離",
            "決心不濫用毀滅神力，將按鈕轉化為守護弱者與制衡野心霸權的最高威懾籌碼"
          ],
          "psychology": "「力量若沒有智慧作為韁繩，終將化為吞噬一切的深淵。這顆按鈕能輕易抹去這座世界的所有罪惡，但同樣也會抹去所有無辜者的心血。我將成為它的守門人，直到真正需要審判的那一天到來。」",
          "sourceVideos": [
            {
              "id": "soYelcGVPac",
              "title": "This Button Destroys the World",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=soYelcGVPac",
              "thumbnail": "https://i.ytimg.com/vi/soYelcGVPac/maxresdefault.jpg",
              "duration": "18:42"
            }
          ]
        },
        {
          "id": "parrot_arc_2",
          "title": "第二章：Paragon 絕海黑牢大越獄",
          "subtitle": "基岩海深處的活體地獄、極限走私與不可思議的穿牆脫逃",
          "summary": "遭到腐敗執法集團與貪婪賞金獵人的多方設伏圍剿，Parrot 在寡不敵眾下不幸被俘，被秘密押送至號稱『絕對無人生還』的極限深海黑牢「Paragon」。在多重浸水黑曜石、深海長老的挖掘疲勞結界與無死角監控下，Parrot 依靠驚人的心算推演摸清了伺服器儲存資料時的載入延遲，策劃了一場震驚全宇宙的史詩級越獄，重獲自由並揭穿了黑牢背後的走私黑幕。",
          "genesis": "自毀滅按鈕被封存後，伺服器各方勢力對 Parrot 的下落虎視眈眈。在一次前往邊陲廢棄村莊採集補給的途中，Parrot 遭到三支頂級賞金獵人小隊的聯合埋伏。敵方動用了數十枚緩速藥水與高壓終界水晶轟炸，將其護衛隊全數擊潰。負傷的 Parrot 被戴上重鐐，剝奪了所有隨身裝備與背包，被黑布蒙頭押上一艘特製的加固黑曜石囚船，一路運往極海深處一座地圖未標註的恐怖孤島——Paragon 監獄。",
          "conflict": "Paragon 監獄通體由三重浸水黑曜石、古代殘骸與屏障方塊混築而成，外圍被冰冷刺骨的深海環繞。牢區內部常駐四隻深海長老（Elder Guardian），給所有囚犯施加了永續的『挖掘疲勞 III』詛咒，使得徒手甚至用鎬子破壞哪怕一塊方塊都成為不可能。獄卒更實行三班倒嚴密巡邏，每隔十五秒便對囚室進行一次紅石掃描。身處暗無天日的底層牢房，Parrot 毫無頹喪之氣。他藉由每日放飯時微弱的光影變化，在腦海中構建出整座監獄的三維立體地圖，並憑藉心算測算出衛兵交接班的 4 秒空檔，以及伺服器端在整點『儲存區塊資料』時所產生的 1.2 秒瞬間載入延遲。\n\nParrot 秘密串聯了相鄰牢房的反抗囚徒，利用牢房通風排氣漏斗極度微弱的物品傳輸間隔，花費數週時間，將獄卒非法走私的極限物資——數顆未被去代碼化的紫頌果、兩瓶高階隱形藥水以及半把磨利的鐵鎬碎片——一點一滴藏匿在牢房地板的石縫夾層中。行動當夜，暴風雨席捲海面，雷鳴掩蓋了聲響。Parrot 引發了預埋在電路走線中的微型短路，致使全牢房警報大作、紅石探照燈瞬間熄滅。在獄卒手持重弩衝入牢房的剎那，Parrot 仰頭服下隱形藥水並吞下紫頌果。利用紫頌果的隨機座標判定，他奇蹟般穿透了厚達兩格的基岩夾層，瞬間置身於守衛森嚴的天井上方！隨後他奪下衛兵的重弩射爆油燈，引爆了排氣管道內的易燃氣體，在烈火與坍塌聲中縱身躍入百米之下的冰冷怒海，成功逃出生天。",
          "lootAndAnomaly": "繳獲典獄長隨身密匙與《Smuggled Paragon Shulker（Paragon 禁忌走私界伏盒）》，盒中藏匿了黑牢高層與外界奴隸貿易、非法裝備複製的絕密交易帳本。",
          "impact": "Paragon 監獄的不破神話被徹底砸碎，典獄長的腐敗名冊被公之於眾，引發全服譁然。這場不可思議的越獄不僅讓 Parrot 的聲望推至頂點，更促使廣大底層散戶與中小型公會開始聚集在其麾下，為日後的王權崛起奠定了民意基石。",
          "keyPlotPoints": [
            "在邊陲遭遇賞金獵人重兵伏擊，力戰不敵後被剝奪全部神裝，押入深海黑牢 Paragon",
            "在深海長老永久挖掘疲勞的非人壓迫下，暗中摸清伺服器儲存區塊資料時的 1.2 秒延遲規則",
            "透過通風漏斗極限走私紫頌果與隱形藥水，建立牢房地下反抗情報網",
            "在雷雨之夜短路牢區供電系統，藉由紫頌果穿牆奇蹟瞬移突破基岩天井防線",
            "跳入萬丈絕海逃脫追捕，並帶出揭露黑牢人口與軍火走私的禁忌界伏盒"
          ],
          "psychology": "「基岩可以困住血肉之軀，卻困不住對自由的渴望與精密的計算。只要世界上存在規則，就必然存在規則的邊界。他們自以為是典獄長，卻不知自己早已成為這套腐朽系統的陪葬品。」",
          "sourceVideos": [
            {
              "id": "6dtNsa-MGs8",
              "title": "I Broke into Minecraft's Most Secure Prison",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=6dtNsa-MGs8",
              "thumbnail": "https://i.ytimg.com/vi/6dtNsa-MGs8/maxresdefault.jpg",
              "duration": "21:15"
            },
            {
              "id": "VSI12NnAnAY",
              "title": "I Got Hunted by Minecraft's Deadliest Players",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=VSI12NnAnAY",
              "thumbnail": "https://i.ytimg.com/vi/VSI12NnAnAY/maxresdefault.jpg",
              "duration": "23:40"
            }
          ]
        },
        {
          "id": "parrot_arc_3",
          "title": "第三章：王權大選與王座治理風暴",
          "subtitle": "文明無序時代的領袖擔當、造勢廣場反暗殺與《治安法典》",
          "summary": "隨著名聲大噪與伺服器治安急遽惡化，黑手黨與非法掠奪集團四處燒殺搶掠。在全服玩家的熱烈擁戴下，Parrot 正式宣布參選 Unstable SMP 第一任民選國王。面對地下黑手黨在造勢演說現場的致命隱形暗殺，Parrot 憑藉超凡洞察力反殺刺客，以壓倒性票數加冕為王，並頒布著名的《和平治安法典》，在混亂廢墟中築起秩序的宏偉城邦。",
          "genesis": "越獄之後的 Unstable SMP 陷入了嚴重的權力真空期。由於缺乏統一的法律約束，各大黑道家族與武裝匪幫在主城周邊橫行霸道，搶奪新人的木材與鐵礦，甚至公然設立非法路障收繳重稅。底層散戶與建築愛好者苦不堪言，紛紛在中央公共看板留言，懇求曾擊碎黑牢的 Parrot 出面主持大局。在深思熟慮後，Parrot 明白光靠孤膽英雄無法根除體制之惡，唯有建立透明公正的政權體系才能保全所有人。他公開發布參選宣言，宣布角逐第一任 Unstable SMP 國王之位，承諾廢除一切非法關稅、建立全服公共安全巡邏隊。",
          "conflict": "Parrot 的參選直接動搖了黑手黨家族的根基。黑手黨教父開出天價懸賞，甚至暗中派遣全服頂級的匿蹤暗殺團潛入造勢現場。在中央大廣場進行決定性競選演說的當天，台下聚集了上千名熱情的民眾。就在演講進行到高潮、Parrot 痛斥犯罪家族之際，四周的空氣驟然變冷。Parrot 敏銳捕捉到身旁護衛盾牌上反射的一絲異常光學折射——那是一滴從高處滴落的隱形藥水殘液！\n\n兩名服下高階隱形藥水的頂級刺客正手持浸毒弒君之刃，悄然攀爬至中央大鐘樓的橫樑，準星已鎖定他的心臟。Parrot 面不改色，看似在慷慨陳詞，實則暗中掏出了《Parrot's Spyglass（靈魂觀測望遠鏡）》。在望遠鏡的幽藍鏡片下，兩道隱匿在虛空中的紅色幽靈人形無所遁形。Parrot 猛然側身避開呼嘯而至的致命穿雲箭，反手拔出預先裝填了穿透 V 附魔的重型精鋼弩，伴隨著刺耳的破空呼嘯，一箭貫穿鐘樓立柱，強大的衝擊力直接將兩名隱形刺客射穿並震落高空。刺客跌落廣場中央現出原形，被憤怒的群眾與衛隊當場生擒。全場爆發出雷鳴般的歡呼，這場驚天逆轉徹底粉碎了黑手黨的暗殺陰謀。在隨後的投票中，Parrot 以創紀錄的 89% 壓倒性得票率當選國王，在萬眾矚目下由全服代表共同為其加冕，並高舉《The Sovereign Scepter（國王權杖）》宣告文明新時代的誕生。",
          "lootAndAnomaly": "在加冕典禮上接受全服共同鑄造的至高信物《The Sovereign Scepter（國王權杖）》，並從刺客身上搜出黑手黨買兇暗殺的密函，將其銘刻為《治安法典》的序言石碑。",
          "impact": "Unstable SMP 迎來了建服以來首個合法且受廣泛承認的文明政權。Parrot 成立中央皇家法庭，推行自由貿易協定，使荒涼的主城在數週內蛻變為商貿繁盛的巨型大都會，文明邁向空前鼎盛。",
          "keyPlotPoints": [
            "回應全服苦難玩家的強烈請願，正式發表參選演說競逐第一任民選國王",
            "黑手黨家族密謀在造勢大會發動隱形狙擊暗殺，企圖以血腥恐嚇阻礙選舉",
            "在演說台上透過靈魂觀測望遠鏡看破刺客匿蹤，反手重弩盲射完成神級絕殺",
            "以 89% 歷史最高得票率加冕為王，接過象徵全服文明正統的國王權杖",
            "頒布《和平治安法典》，建立皇家守衛團，開啟長達數百天的繁榮大治"
          ],
          "psychology": "「王冠從來不是榮耀的裝飾，而是一座沉重的十字架。當全服玩家把他們的信任交付給我，我的每一次拔劍、每一道法令，都必須為這片土地上最弱小的靈魂負責。」",
          "sourceVideos": [
            {
              "id": "2WusTNLmBpE",
              "title": "I Became King of the Unstable SMP",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=2WusTNLmBpE",
              "thumbnail": "https://i.ytimg.com/vi/2WusTNLmBpE/maxresdefault.jpg",
              "duration": "24:36"
            },
            {
              "id": "TphfLyzVbqQ",
              "title": "100 Days as King of the Unstable SMP",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=TphfLyzVbqQ",
              "thumbnail": "https://i.ytimg.com/vi/TphfLyzVbqQ/maxresdefault.jpg",
              "duration": "30:12"
            }
          ]
        },
        {
          "id": "parrot_arc_4",
          "title": "第四章：揭發偽善文明與千人大內戰風雲",
          "subtitle": "烏托邦假面具撕碎、三巨頭同盟締結與席捲全服的歷史性決戰",
          "summary": "繁華表象之下暗藏更深沉的危機。在調查邊境人口神秘失蹤案時，Parrot 意外揭露了自詡為『神聖烏托邦』的高級文明背後駭人聽聞的奴役工廠與非法複製黑產。面對該偽善文明的武裝挑釁與全服分裂危機，Parrot 與 Wemmbu、Spoke 結成抗暴同盟，親自統帥由千名平民組成的自由聯合軍團，在主城盆地打響了決定世界命運的『千人大內戰（Civil War）』，最終徹底搗毀了極權體制。",
          "genesis": "在王座治理進入平穩期後，王國戶籍總署連續收到多起邊境城鎮居民離奇失蹤的報告。受害者多為獨行玩家與技術工匠，且失蹤現場均留有高級白石磚與海磷石結晶的特殊痕跡。Parrot 卸下華麗王袍，換上耐磨的遠征皮靴，孤身展開跨越數萬格的密道追查。在穿過世界裂谷與深海迷宮後，他發現了一座宏偉壯麗、對外宣稱『永久和平慈善烏托邦』的白金巨城。然而，在城池光鮮亮麗的表面下，其地下數十層基岩空腔中竟囚禁著數百名被剝奪身分的玩家，日夜在皮鞭下進行高強度的違規資源複製與苦工勞作。",
          "conflict": "Parrot 秘密蒐集了該文明高層的貪腐錄像與非法人身買賣名單，並在全服公共廣播公頻公佈，瞬間引發滔天怒潮。自知罪行敗露的烏托邦統治者惱羞成怒，聯合了伺服器數個極端武裝軍團，集結千名重甲僱傭兵向王國宣戰，企圖以軍事力量洗劫主城並摧毀所有證據。\n\n面對兵臨城下的絕境，Parrot 展現出非凡的政治號召力與戰略胸襟。他親自與素有嫌隙的游擊戰王 Wemmbu 以及神偷謀略家 Spoke 舉行秘密峰會，促成了三大巨頭的歷史性同盟。Parrot 負責軍團動員與後勤陣地構築，Wemmbu 統領正面重裝突擊部隊，Spoke 則負責情報滲透與切斷敵軍補給。\n\n在決戰當日，超過兩千名玩家在中央大荒原盆地迎頭相撞，史稱「千人大內戰」。戰場上火光沖天，漫天的 TNT 拋射軌跡遮蔽了日光。敵軍依仗精良的獄髓重甲與無限附魔金蘋果步步進逼，王國聯軍前線一度陷入崩潰。在此危急關頭，Parrot 手持染血的戰旗躍上高地，發表了震撼人心的戰鬥檄文，穩住軍心。他親自指揮紅石工兵部隊啟動地埋式水流阻絕網，精準瓦解了敵方重裝騎兵的衝鋒陣型；隨後與 Wemmbu 的巨刃部隊合流，頂著密集箭雨強行鑿穿了敵軍中央指揮所。在一場長達三小時的浴血搏殺中，敵方最高統帥被當場斬落馬下，偽善文明的白金要塞在聯軍的怒火中化為焦土，勝利的戰歌響徹 Unstable SMP 天際。",
          "lootAndAnomaly": "攻克敵軍地下核心實驗室，起獲《Null Code Compass（虛空代碼羅盤）》與整套被篡改的伺服器白名單控制樞紐，徹底終結了奴隸複製產業鏈。",
          "impact": "千人大內戰是 Unstable SMP 歷史上規模最大、傷亡最慘烈但也最具轉折意義的世紀大戰。舊時代的偽善財閥與腐朽寡頭被連根拔起，三巨頭的英雄傳奇深入人心，但戰火也使得世界基岩產生了永久性代碼裂痕，為後續更深層的虛空異變埋下了伏筆。",
          "keyPlotPoints": [
            "追查邊境平民失蹤謎案，孤身潛入自詡神聖的『白金烏托邦』揭發地下奴工黑幕",
            "在全服公頻公開確鑿證據，引發腐敗軍閥的瘋狂宣戰與大軍壓境",
            "促成 Parrot、Wemmbu 與 Spoke 三大傳奇領袖的歷史性會盟，建立反抗統一戰線",
            "統率千名平民自由聯軍在中央荒原正面硬撼僱傭軍主力，以陣地戰智慧力挽狂瀾",
            "攻克敵軍總部摧毀非法奴役工廠，奪得能指引虛空裂隙的《虛空代碼羅盤》"
          ],
          "psychology": "「和平從來不是靠妥協換來的，而是靠敢於向不公揮劍的勇氣所淬煉出來的。當我們所有人站在一起，即便是神祇鑄造的高牆，也將在人民的意志下轟然倒塌。」",
          "sourceVideos": [
            {
              "id": "bP86n9nFoJY",
              "title": "Unstable SMP: Civil War",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=bP86n9nFoJY",
              "thumbnail": "https://i.ytimg.com/vi/bP86n9nFoJY/maxresdefault.jpg",
              "duration": "28:50"
            },
            {
              "id": "NT2Is90lFoI",
              "title": "Unstable SMP: Civil War FINALE",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=NT2Is90lFoI",
              "thumbnail": "https://i.ytimg.com/vi/NT2Is90lFoI/maxresdefault.jpg",
              "duration": "32:14"
            },
            {
              "id": "zMoihcFz2kY",
              "title": "I Exposed a Corrupt Minecraft Civilization",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=zMoihcFz2kY",
              "thumbnail": "https://i.ytimg.com/vi/zMoihcFz2kY/maxresdefault.jpg",
              "duration": "22:15"
            }
          ]
        },
        {
          "id": "parrot_arc_5",
          "title": "第五章：新文明重構、礦場黑牢實驗與幽冥深淵大逃亡",
          "subtitle": "戰後高科技懸浮衛城崛起、千人黑牢暴動與墜入地底幽冥世界",
          "summary": "內戰勝利後，Parrot 引領倖存者利用代碼重構技術，在平原廢墟上建立起空前繁榮的高科技現代化衛城。然而，對極限社會結構的探究促使他開展了震撼全服的「1000 人極限礦場黑牢社會實驗」。在實驗尾聲突發的未知世界代碼崩塌中，Parrot 墜入連基岩都不復存在的恐怖失落維度「幽冥地底深淵（Underworld）」。在無光死局與未知代碼實體的圍獵下，Parrot 再度憑藉鋼鐵意志殺回主世界，而更大的幕後黑手 The LAW 與 Lattice K 正步步逼近，故事持續連載中！",
          "genesis": "在千人大內戰的廢墟之上，如何防止下一次動亂成為全服共同的命題。Parrot 運用戰後發掘的遠古建築藍圖與紅石自動化技術，在短短數月內建造了一座漂浮於雲層之上的超級高科技衛城（I Built Minecraft's Most Advanced Civilization）。然而，隨著伺服器底層代碼的持續不穩定，新興霸權「The LAW」及其神祕領袖 Lattice K 開始在暗中布控。為了測試極限高壓環境下人類群體的心理耐受力與資源自組織機制，Parrot 主導並監管了一場前所未有的「1000 名玩家模擬極限礦場黑牢（1000 Players Simulate Mining Prison）」社會學實驗。然而，這場實驗卻意外觸碰到了伺服器底層最隱密的封印。",
          "conflict": "黑牢實驗進行到後期時，底層地脈突然爆發了代碼級的連鎖崩潰。整座礦場監獄的基岩底層如玻璃般碎裂，無底的黑色漩渦將所有設施與留守的 Parrot 一同吞噬。當 Parrot 甦醒時，他發現自己身處一個完全超越常理的異度空間——幽冥地底深淵（Underworld / Forgotten Dimension）。\n\n這裡沒有日月星辰，四周只有懸浮在虛空中的殘破黑曜石碎島與不斷閃爍的亂碼代碼流。更致命的是，深淵中盤踞著完全不受常規碰撞箱約束的代碼畸變異獸，且空間內無任何自然光源，火把與燈籠在此處會被無形暗影瞬間熄滅。身無長物的 Parrot 再次置身於比當年 Paragon 監獄凶險萬倍的死局。\n\n在無盡的漆黑中，Parrot 冷靜依靠腳步踩踏不同方塊產生的回聲來定位懸崖邊界。他利用隨身僅剩的一根火燭棒與微量紅石粉，製作出能夠短暫發出微光的共振探測儀。在避開代碼異獸瘋狂追獵的同時，他手腳並用在浮空碎島間進行極限跳躍。在一處遠古神廟遺跡中，他發現了一條由代碼逆流構成的引力上升通道。當追獵異獸群撲上來的最後一剎那，Parrot 藉由終界珍珠的極限仰角盲投，精準穿透引力奇點，化作一道流光撕裂深淵壁壘，震撼重返主世界！然而，重返陽光下的他赫然發現，伺服器已被 Lattice K 統率的 The LAW 鐵腕軍團全面戒嚴，新的反抗戰火已然點燃。",
          "lootAndAnomaly": "自幽冥深淵最深處帶回神祕失落遺跡核心《Underworld Void Catalyst（幽冥虛空催化石）》，具備干擾常規維度重力與探測代碼裂隙的未知神力。",
          "impact": "Parrot 從地底幽冥深淵的生還被全服奉為神蹟，證實了主世界之下存在著被刪除的失落維度。隨著 The LAW 強權的全面壓制與各大主角的相繼捲入，Unstable SMP 邁入了維度爭霸與對抗終極審判者的最新高潮主線！",
          "keyPlotPoints": [
            "在內戰廢墟上主導建造超越時代的高科技文明衛城，奠定戰後繁榮秩序",
            "監管並推動 1000 名玩家模擬極限礦場黑牢實驗，探索極限環境下的社會博弈",
            "遭遇突發的伺服器底層代碼崩塌，穿越碎裂基岩墜入漆黑恐怖的『幽冥地底深淵』",
            "在無光源、充滿畸變實體的深淵死局中，靠回聲定位與極限珍珠盲投成功脫逃",
            "攜帶幽冥虛空催化石重返主世界，直面 Lattice K 與 The LAW 的全服戒嚴，抗爭未完待續"
          ],
          "psychology": "「深淵並不可怕，可怕的是在黑暗中放棄尋找光源的心。我曾從最嚴密的黑牢生還，也曾從世界的墓穴中爬出。只要眼眸中尚存一絲火光，這座伺服器的自由就絕不會被任何人奴役。」",
          "sourceVideos": [
            {
              "id": "BWmWZTDxFrk",
              "title": "Escaping the Minecraft Underworld",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=BWmWZTDxFrk",
              "thumbnail": "https://i.ytimg.com/vi/BWmWZTDxFrk/maxresdefault.jpg",
              "duration": "35:48"
            },
            {
              "id": "we2dBzQxtgQ",
              "title": "1000 Players Simulate Mining Prison in Minecraft",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=we2dBzQxtgQ",
              "thumbnail": "https://i.ytimg.com/vi/we2dBzQxtgQ/maxresdefault.jpg",
              "duration": "31:20"
            },
            {
              "id": "1EgS0othQe4",
              "title": "I Built Minecraft's Most Advanced Civilization",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=1EgS0othQe4",
              "thumbnail": "https://i.ytimg.com/vi/1EgS0othQe4/maxresdefault.jpg",
              "duration": "27:40"
            }
          ]
        },
        {
          "id": "parrot_arc_6",
          "title": "第六章：終界黑牢千人煉獄、代碼解密與宿命決鬥（最新連載中）",
          "subtitle": "被俘墜入 Spoke 的終界煉獄、千人角鬥死鬥與 20 小時密碼門大突破",
          "summary": "逃離幽冥地底深淵後，Parrot 遭未知勢力 NULL 重兵伏擊逮捕，押送至主要塞並投入由 Spoke 親手在終界維度建造的黑曜石心理煉獄「End Prison」。在這座關押了 1000 名編號囚犯的絕望死局中，囚徒被迫在競技場進行殘酷死鬥。Parrot 憑戰技力克刺客，奇蹟重逢戰友 MinuteTech 展開極限戰技與跑酷特訓。兩人耗費整整 20 餘小時破譯了極度複雜的機關密碼門，最終闖入深層殿堂直面黑牢守門冠軍 X，引爆震撼全服的宿命決戰！",
          "genesis": "從地底幽冥深淵的極限死局生還後，Parrot 尚未能重組力量，便在主世界要塞廢墟周圍遭遇了未知勢力 NULL 的精銳重裝部隊伏擊。在多重緩速藥水與虛空壓制下，負傷的 Parrot 被解除武裝、押入終界傳送門。當他從昏迷中甦醒時，發現自己置身於一座拔地而起的無邊黑曜石巨塔——這是 Spoke 為了重現自己曾承受之苦難而親手設計的極限心理煉獄「End Prison」。超過 1000 名玩家被剝奪名字與裝備，僅以囚犯編號相稱，每天在冰冷的黑曜石牢房與全天候紅石探照燈下苟延殘喘。",
          "conflict": "這座終界黑牢奉行殘酷的角鬥場輪選淘汰制，看守衛兵會隨機唱名囚徒，將其推入萬丈懸崖之上的競技擂台展開生死死鬥。Parrot 入獄不久便遭遇敵對陣營老囚徒的利刃突襲，他憑藉以往無數次極限血戰磨練出的近身纏鬥與空手奪刃技巧，成功反殺對手震撼牢區。\n\n隨後，他在底層牢房的陰影處奇蹟般重逢了失散已久的戰友 MinuteTech。兩人秘密締結反抗同盟，MinuteTech 為 Parrot 量身展開了地獄式的跑酷與競技身法特訓，幫助他在一輪又一輪更加凶險的競技場決鬥中連續斬獲全勝。\n\n然而，通往終界監獄外界的唯一退路被深處一道由古代紅石邏輯鎖死的巨型連鎖防爆密碼門阻隔。在看守換班巡邏的短暫縫隙中，Parrot 與 MinuteTech 廢寢忘食地推演密碼矩陣，整整耗費了 20 多個小時，終於在經歷數百次嘗試後成功解密並啟動液壓開關，轟然推開厚重無比的黑曜石大門！在門後的終極競技大廳中，終界監獄最強守門人格鬥之王「X」正拔劍靜候，一場決定 1000 名囚徒自由與全服維度命運的宿命決鬥全面引爆！",
          "lootAndAnomaly": "起獲 Spoke 終界黑牢通行符印《End Purgatory Key & Cipher Slate（終界煉獄密鑰與解密石板）》，內部烙印著整座虛空監獄的底層紅石電路藍圖與終界文明維度座標。",
          "impact": "終界千人黑牢的爆發徹底揭開了 Unstable SMP 的全新維度篇章。Spoke 的終界帝國與 Parrot 的反抗命運再度正面碰撞，1000 名囚犯的反抗怒火在終界虛空引發連鎖海嘯，預示著對抗 NULL 與 The LAW 統治的新秩序戰爭已進入白熱化階段！",
          "keyPlotPoints": [
            "自幽冥深淵生還後遭遇 NULL 勢力重裝伏擊，被強行押送至 Spoke 建造的終界千人黑曜石煉獄",
            "在殘酷的角鬥場死鬥制度下，空手格擋反殺敵意刺客，名震牢區",
            "奇蹟重逢戰友 MinuteTech，接受高強度極限戰技與跑酷特訓，連克競技場強敵",
            "在紅石防線夾縫中連續推演超過 20 小時，成功破譯深層機關密碼門",
            "推開防爆閘門闖入最終殿堂，正面迎戰終界守門格鬥冠軍「X」，宿命大戰未完待續"
          ],
          "psychology": "「Spoke 打造了這座煉獄想要困住所有人的靈魂，但他忘了，高牆與基岩只能關住怯懦，關不住對光芒的渴望。經歷了 20 個小時的黑暗解密與無數場生死死鬥，我們已經推開了最後的大門。這一次，終界的虛空將見證真正的自由！」",
          "sourceVideos": [
            {
              "id": "9-j9GWjyWpY",
              "title": "1000 Players Simulate End Prison in Minecraft",
              "channel": "ParrotX2",
              "channelUrl": "https://www.youtube.com/@ParrotX2",
              "youtubeUrl": "https://www.youtube.com/watch?v=9-j9GWjyWpY",
              "thumbnail": "https://i.ytimg.com/vi/9-j9GWjyWpY/maxresdefault.jpg",
              "duration": "1:12:54"
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        },
        {
          "id": "9-j9GWjyWpY",
          "title": "1000 Players Simulate End Prison in Minecraft",
          "titleZh": "1000 名玩家在終界黑牢模擬殘酷生存",
          "duration": "1:12:54",
          "thumbnail": "https://i.ytimg.com/vi/9-j9GWjyWpY/maxresdefault.jpg",
          "youtubeUrl": "https://www.youtube.com/watch?v=9-j9GWjyWpY",
          "summary": "逃離幽冥深淵後，Parrot 遭未知勢力 NULL 捕獲押入深處於終界維度的黑曜石萬人煉獄。這座由 Spoke 親手打造的心理煉獄關押了 1000 名編號囚犯，每日以角鬥場殘酷死鬥汰除弱者。Parrot 在生死擂台中力克刺客，奇蹟般重逢盟友 MinuteTech 展開極限戰技特訓，耗費 20 餘小時破解機關密碼門，最終直面終界守護者 X 打響震撼全服的宿命決戰。",
          "unexpectedLoot": "End Purgatory Key & Cipher Slate（終界煉獄密鑰與解密石板）"
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
          "title": "第一章：突襲全服最非法的地下金庫",
          "subtitle": "基岩最深處的重裝防線、精確珍珠穿透與單兵掠空黑金庫",
          "summary": "數個全服早期的大型寡頭公會組建秘密同盟，利用地獄門座標重疊漏洞複製了海量神裝，並將這些數以億計的非法資產封存於基岩層 40 格以下的特製防爆黑金庫。Wemmbu 孤身一人鎖定目標，耗時數日精確計算活塞防爆盲區與終界珍珠卡角，以不可思議的單兵強攻撕裂防線，在狹窄走廊完成震撼的一穿三反殺，將整座地下金庫的神級儲備洗劫一空，一戰名震全宇宙。",
          "genesis": "初入伺服器的 Wemmbu 很快發現普通資源早已被各大老牌聯盟瓜分殆盡，弱小散戶只能任人宰割。在探訪深層廢棄礦道時，他無意間探測到了地底深處傳來的微弱紅石時鐘震動，順藤摸瓜確認了這座守備森嚴的黑金庫座標。這座地下防禦工事由八重浸水黑曜石、哭泣黑曜石夾層與震動感應連鎖警報包裹，外部設有全自動落沙防空腔與高壓發射器矩陣。更致命的是，內部有三名全身附魔保護 IV 獄髓全套、手持附魔金蘋果的頂級職業打手日夜輪值守衛，號稱連一隻蒼蠅都無法飛入。",
          "conflict": "Wemmbu 沒有選擇笨拙費時的硬挖，而是爬上相鄰天然溶洞頂部，透過精密測距儀，計算出一個因方塊更新機制缺陷而產生的 0.25 格活塞推動死角縫隙。他深吸一口氣，將終界珍珠以刁鑽的角度投向夾縫，在毫秒級的延遲判定中瞬移擠入核心走廊！\n\n警報在剎那間淒厲拉響，刺耳的紅石蜂鳴響徹地底。留守的三名頂級精英殺手立刻服下力量 II 藥水與附魔金蘋果，手持附魔鑽石斧與獄髓劍，咆哮著從走廊兩端夾擊而來。面對兩格高、一格寬的狹窄通道死局，Wemmbu 毫無退意。他展現出令人窒息的微操技術——利用跳劈（Jump-Crit）的最高點卡在天花板半磚盲區，在避開敵方橫掃之刃的同時，手中的重斧精準劈在領頭守衛的盾牌上，造成致命的盾牌失效（Shield Disable）狀態！隨後他以閃電般的副手切換，掏出不死圖騰抵消了身後的致命背刺，緊接著反手一記疾跑橫掃將側翼兩人震退。\n\n在不到兩分鐘的狂暴近身死鬥中，Wemmbu 憑藉極限的走砍與跳劈節奏，在狹小空間內完成了震撼的一穿三全殲神蹟。緊接著，他掏出滿級挖掘鎬砸開內層金庫大門，映入眼簾的是數十個裝滿滿級獄髓套裝、不死圖騰與超越版本極限神兵的界伏盒。在外部大批援軍破門而入的最後三秒，Wemmbu 啟動了預埋的靈魂沙水梯逆流噴射，伴隨著嘲弄的冷笑從容撤離，留給敵人的只有空空如也的防爆保險庫與滿地狼藉。",
          "lootAndAnomaly": "繳獲全服唯一傳奇戰刃《The Crucible & Gambit（熔爐與棋局之刃）》以及數十個裝滿滿級獄髓裝備、不死圖騰與附魔金蘋果的走私界伏盒。",
          "impact": "地下黑金庫的覆滅直接導致寡頭同盟的經濟動脈崩潰，黑市物價劇烈震盪。Wemmbu 憑藉此役一戰封神，成為全服弱小散戶心中的反抗圖騰，但也因此登上了各大公會的最高格殺名單。",
          "keyPlotPoints": [
            "在深層地底廢棄礦道勘測到異常紅石脈衝，鎖定寡頭同盟非法基岩黑金庫座標",
            "精準計算出 0.25 格活塞空隙，以極限終界珍珠瞬移盲投突破外圍重甲防禦",
            "在兩格寬的幽閉走廊單挑三名頂級打手，以跳劈破盾與極限切圖騰完成 1v3 團滅",
            "砸開核心金庫奪取神刀 The Crucible，將數十個界伏盒頂級物資席捲一空",
            "藉由隱秘靈魂沙高速水梯在敵方大軍圍困前從容脫逃，震驚全服"
          ],
          "psychology": "「他們用基岩和黑曜石築起高牆，自以為金庫堅不可摧。但在真正的獵手眼中，再厚重的高牆也比不過一顆渴望撕裂不公的心。這把刀，我收下了。」",
          "sourceVideos": [
            {
              "id": "s4Qm81fKfyk",
              "title": "Breaking Into Minecraft's Most Illegal Vault",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=s4Qm81fKfyk",
              "thumbnail": "https://i.ytimg.com/vi/s4Qm81fKfyk/maxresdefault.jpg",
              "duration": "17:28"
            }
          ]
        },
        {
          "id": "wemmbu_arc_2",
          "title": "第二章：全服大追捕中的不可捕捉者",
          "subtitle": "獵人聯合軍團的全面圍剿、雷暴空戰與雪峰反殺奇蹟",
          "summary": "洗劫黑金庫引發了各大勢力的滔天怒火。十餘家老牌公會懸賞海量物資組建『獵人聯合軍團』，數十名頂級 PVP 高手攜帶定位羅盤與極速鞘翅展開跨地圖大搜捕。Wemmbu 在雪原、峽谷與雷暴中與追兵展開極限拉鋸，以神級低空滑翔穿林身法與山巔反殺奇蹟，向全宇宙詮釋了何為『絕對無法被捕捉之人』。",
          "genesis": "黑金庫失竊後，惱羞成怒的各大寡頭聯盟在全服各大交通樞紐設立檢查哨，懸賞總額高達數百萬遊戲幣與頂級神裝。一支由二十多名身經百戰的刺客與退役傭兵組成的精銳獵人軍團迅速成型。他們利用綁定了 Wemmbu 頻率的磁石羅盤（Lodestone Compass），在全地圖展開地毯式追獵。在邊境平原一處補給點，Wemmbu 遭遇了先頭部隊的突襲，在射落三名先鋒後，他展開鞘翅騰空而起，漫長的千里大逃殺正式拉開帷幕。",
          "conflict": "這場追捕跨越了數萬格地形。獵人軍團採用了梯次輪換戰術，不斷利用高空煙火火箭保持俯衝高速，企圖將 Wemmbu 的鞘翅耐久耗盡。面對身後呼嘯而來的密集箭雨與附魔三叉戟投擲，Wemmbu 展現了天花板級的飛行操作：他在茂密的黑橡樹森林中以離地僅兩格的極限高度進行蛇形穿梭，利用樹冠枝葉阻擋身後的高空追擊。\n\n在飛越一座高聳入雲的極寒雪峰時，天空驟然降下暴風雪與滾滾雷鳴。Wemmbu 的鞘翅耐久即將見底，前方已是萬丈絕壁。他果斷收起鞘翅，順著陡峭雪坡滑降，反手在身後甩出三枚絆線鉤與預製的壓力板高爆陷阱。緊追不捨的五名獵人前鋒如餓狼般撲上山巔，正好觸發了隱藏在積雪下的連鎖炸藥！伴隨著沖天火光與滾滾雪崩，追兵前鋒瞬間被衝擊波掀翻下懸崖。\n\n緊接著，Wemmbu 拔出 The Crucible 巨刃回身發起反衝鋒。在漫天飛雪中，他頂著殘餘敵人的狂暴攻擊，以行雲流水的跳劈接平 A 走砍，短短數十秒內連斬三名重甲獵人，護衛圖騰碎裂的脆響在雪山之巔連綿不絕。最後一名殘存的獵人隊長驚駭欲絕地企圖跳崖逃跑，Wemmbu 換上強弓，在半空中盲射一箭精準穿透其心臟。山巔之上，唯餘 Wemmbu 迎風傲立，漫天風雪亦為之退避。",
          "lootAndAnomaly": "收割《Apex Predator's Trophy（獵王之誓獄髓顱骨）》與十餘套被擊落頂級高手的完整軍備補給，確立了全服第一游擊戰狂的赫赫威名。",
          "impact": "獵人聯合軍團的慘烈全滅徹底打碎了各大公會以武力壓服自由玩家的妄想。Wemmbu 成為全服玩家口耳相傳的不可捉摸幽靈，各大勢力被迫放棄野外搜捕，轉向收縮防線。",
          "keyPlotPoints": [
            "二十餘名頂級賞金獵人手持磁石羅盤發動跨越全服的終極追緝",
            "在黑橡樹林中上演離地兩格的極限鞘翅低空超速穿林飛行",
            "在暴風雪覆蓋的萬仞雪峰預埋積雪連鎖高爆陷阱重創追兵前鋒",
            "雪嶺絕頂拔出 The Crucible 展開絕命反殺，以恐怖近戰技藝連斬三名王牌刺客",
            "凌空盲射擊殺最後一名企圖逃竄的獵人指揮官，登頂全服不可捕捉之巔"
          ],
          "psychology": "「他們以為人多就是力量，以為獵鷹會被麻雀圍困。在天空與風雪中，規則由我書寫。想抓我？下輩子多練練走位吧。」",
          "sourceVideos": [
            {
              "id": "o8ocybrrdfw",
              "title": "It's Impossible to Catch this Player",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=o8ocybrrdfw",
              "thumbnail": "https://i.ytimg.com/vi/o8ocybrrdfw/maxresdefault.jpg",
              "duration": "19:12"
            }
          ]
        },
        {
          "id": "wemmbu_arc_3",
          "title": "第三章：建立最強文明與摧毀 PrinceZam 帝國",
          "subtitle": "荒原拔起的鋼鐵要塞、跨區塊軌道砲與帝國之城的覆滅",
          "summary": "攜帶掠奪而來的龐大資產，Wemmbu 聚集了一批志同道合的散戶工匠，在荒原之上拔地建造起號稱永不陷落的鋼鐵文明要塞。然而，鄰近的霸權帝國統治者 PrinceZam 視其為眼中釘，率領皇家軍團發動圍城血戰。Wemmbu 祭出研發已久的秘密殺器——超遠程跨區塊軌道 TNT 大砲，一砲轟塌敵國中央宮殿與城防核心，以摧枯拉朽之勢覆滅了 PrinceZam 的龐大帝國！",
          "genesis": "厭倦了流亡生涯的 Wemmbu 明白，唯有建立屬於自己的基地才能長久庇護弱小。他選址於一片被群山環抱的偏遠平原，動用黑金庫中奪得的海量資源，招募了上百名頂級建築師與紅石工程師。一座由三層深板岩防爆牆、外圍護城岩漿海以及全自動哨戒塔構成的鋼鐵要塞在數月內拔地而起。然而，這片荒原正是殘暴軍閥 PrinceZam 劃定的勢力範圍。自命不凡的 PrinceZam 認為臥榻之側豈容他人酣睡，隨即調集了麾下最精銳的皇家近衛軍與攻城車隊，浩浩蕩蕩開拔至要塞門前，叫囂要在一日內將要塞夷為平地。",
          "conflict": "PrinceZam 麾下的軍隊裝備精良，數百名重裝騎士配備了最高階的衝角攻城器，對要塞外圍護城河發起兇猛的填土強攻。Wemmbu 站在要塞最高城樓之上，冷靜指揮守軍以密集箭雨與燃燒彈壓制，但敵軍倚仗雄厚兵力依然突破了第一道防線。\n\n關鍵時刻，Wemmbu 放棄了傳統的被動防守，而是啟動了他雪藏已久的工程奇蹟——『超遠程跨區塊軌道 TNT 大砲（Orbital Rail Cannon）』。這台長達 120 格的巨型機械利用高頻紅石中繼線路與瞬間活塞壓縮技術，能將上百枚 TNT 瞬間聚攏並在未載入區塊中高速推進。伴隨著刺耳的空氣撕裂巨響，數十道耀眼的白光劃破天際，精準落向數千格之外 PrinceZam 王城的中央皇家宮殿！\n\n幾秒鐘後，地平線盡頭升騰起遮天蔽日的蘑菇雲，轟鳴聲如滾雷般席捲大地。PrinceZam 的王城防禦中樞在一瞬間被炸得粉碎，連鎖殉爆將其皇家倉庫與重生錨陣列徹底炸成焦土！前線原本氣勢洶洶的敵軍陷入前所未有的恐慌與混亂。此時，Wemmbu 拔出 The Crucible 巨刃親率親衛騎兵從要塞正門殺出，如狂暴龍捲風般席捲敵軍潰散的殘部。PrinceZam 在親信拚死掩護下狼狽逃竄，不可一世的帝國在短短半日內宣告灰飛煙滅。",
          "lootAndAnomaly": "繳獲 PrinceZam 皇家金庫遺留之《PrinceZam's Siphoned Seal（被奪取的帝國皇家金印）》與整套跨區塊軌道發射火控終端圖紙。",
          "impact": "PrinceZam 帝國的瞬間瓦解震動了全服各大板塊，Wemmbu 的要塞一躍成為 Unstable SMP 最具威懾力的軍事科技中心，奠定了其足以與 Parrot 王國分庭抗禮的霸主地位。",
          "keyPlotPoints": [
            "在荒原腹地動員百名工匠打造三重防爆鋼鐵文明要塞，庇護四方流民",
            "軍閥 PrinceZam 集結皇家精銳近衛軍發動大規模圍城血戰",
            "要塞第一道防線告急之際，啟動 120 格超遠程跨區塊軌道 TNT 巨砲",
            "高壓火砲精準打擊數千格外的敵國皇城，一舉摧毀中央宮殿與城防樞紐",
            "親率鐵騎反衝鋒擊潰敵軍殘部，徹底終結 PrinceZam 的殘暴統治"
          ],
          "psychology": "「帝國的榮耀往往建立在弱者的骸骨之上。既然你執意要將戰火燒到我的家園，那我就讓你的整座王都，在跨區塊的火光中化為歷史的塵埃。」",
          "sourceVideos": [
            {
              "id": "wbTIN42an0o",
              "title": "I Created Minecraft's Greatest Civilization",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=wbTIN42an0o",
              "thumbnail": "https://i.ytimg.com/vi/wbTIN42an0o/maxresdefault.jpg",
              "duration": "26:14"
            },
            {
              "id": "Ytm8WiQLNZA",
              "title": "How I Destroyed an Entire Minecraft Civilization",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=Ytm8WiQLNZA",
              "thumbnail": "https://i.ytimg.com/vi/Ytm8WiQLNZA/maxresdefault.jpg",
              "duration": "22:15"
            }
          ]
        },
        {
          "id": "wemmbu_arc_4",
          "title": "第四章：終結腐敗輪迴！親手引爆舊主城",
          "subtitle": "摯友被縛的絕命營救、對世界道德的死心與轟殺黑手黨老巢",
          "summary": "當發現伺服器底層已被地下黑手黨的洗錢網路與腐敗管理階層徹底蛀空時，Wemmbu 逐漸看透了這個世界的荒誕輪迴。尤其在生死之交 Eggchan 遭到黑手黨綁架勒索後，Wemmbu 孤身殺穿黑手黨總舵救出摯友，並親手接通埋藏於主城地脈的數萬枚終極炸藥陣列，以一場焚盡一切的烈火，親手埋葬了犯罪家族的一切罪惡！",
          "genesis": "隨著文明的不斷擴張，主城看似繁花似錦，實則已被盤根錯節的地下黑手黨家族完全掌控。黑手黨不僅私自篡改市場交易稅率，更透過暗殺與綁架清除異己。Wemmbu 唯一信任的生死之交 Eggchan 在一次外出勘察時離奇失蹤，隨後黑手黨派人送來了一封帶血的勒索信與 Eggchan 破碎的護身符，要求 Wemmbu 交出 The Crucible 巨刃與全部要塞科技，否則將在午夜前將 Eggchan 處決。",
          "conflict": "黑手黨以為拿捏住了戰神的軟肋，在總舵大樓布設了上百道致命陷阱與全副武裝的黑衣槍手。然而，Wemmbu 選擇了最決絕的方式。他沒有攜帶任何談判籌碼，而是手持 The Crucible 孤身踹碎了大樓正門！在狹長的迴廊與盤旋樓梯間，Wemmbu 如同化身嗜血修羅，手中的戰刃瘋狂舞動，每一記跳劈都伴隨著骨骼碎裂與盾牌崩解的聲響，硬生生從一層殺穿至頂層密室。\n\n在密室的計時炸彈僅剩最後 3 秒的生死關頭，Wemmbu 擲出巨刃精準斬斷了束縛 Eggchan 的鐵索，一把將重傷的摯友拽入懷中並服下跳躍藥水破窗躍出。落地後的 Wemmbu 看著懷中奄奄一息的摯友，以及整座被罪惡侵蝕得千瘡百孔的城市，眼中最後一絲溫情化為冰冷的決然。\n\n他早就對這座由偽君子與黑幫共治的腐朽主城徹底絕望。在將 Eggchan 安置在安全區域後，Wemmbu 轉身步入主城地下深處的電力中樞，接通了數週前秘密鋪設、蔓延數萬格的地下連鎖引爆電路網路。站在荒原高坡上，Wemmbu 緩緩按下了《Annihilation Remote Detonator（虛空重置引爆終端）》。在震天撼地的連鎖巨響中，整座主城的摩天大樓、黑手黨總部與地下金庫如多米諾骨牌般轟然坍塌，沖天烈焰染紅了整個夜空，宣告舊時代的罪惡就此灰飛煙滅。",
          "lootAndAnomaly": "持有《Annihilation Remote Detonator（虛空重置引爆終端）》與保存著兩人約定的《Eggchan’s Keepsake Book（摯友的血盟筆記）》。",
          "impact": "舊主城的徹底毀滅粉碎了黑手黨數年的地下統治體系，伺服器版圖迎來徹底洗牌。這場壯烈的毀滅行動促成了各大殘存勢力反思秩序的真諦，為後續千人大內戰與自由同盟的成立提供了決心契機。",
          "keyPlotPoints": [
            "生死摯友 Eggchan 遭黑手黨秘密綁架，面對勒索信毅然決定孤身強攻",
            "單兵殺穿黑手黨總部大樓，在炸彈倒數最後 3 秒救出重傷摯友",
            "看透世界體制的不可挽回之腐敗，立誓用最純粹的毀滅帶來新生",
            "返回罪惡核心，接通蔓延數萬格的地下連鎖引爆電路網路",
            "親手按下引爆終端將整座舊主城化為焦土廢墟，洗淨全服罪孽"
          ],
          "psychology": "「如果一座城市只能靠吸食弱者的骨髓而苟延殘喘，那它的繁華便是一種罪。Eggchan，抓緊我。今天，就由我親手點燃這場大火，為我們所有人燒出一個乾淨的明天。」",
          "sourceVideos": [
            {
              "id": "_qc8ZF2KyeQ",
              "title": "Why I Destroyed the Unstable SMP",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=_qc8ZF2KyeQ",
              "thumbnail": "https://i.ytimg.com/vi/_qc8ZF2KyeQ/maxresdefault.jpg",
              "duration": "24:08"
            },
            {
              "id": "cEXBN7fTs00",
              "title": "Unstable SMP: The Mafia",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=cEXBN7fTs00",
              "thumbnail": "https://i.ytimg.com/vi/cEXBN7fTs00/maxresdefault.jpg",
              "duration": "28:30"
            }
          ]
        },
        {
          "id": "wemmbu_arc_5",
          "title": "第五章：千人肅清之夜、尋找失蹤摯友與拯救世界（持續進行中）",
          "subtitle": "摯友離奇失蹤、狂暴千人肅清與拯救世界最大伺服器之戰",
          "summary": "舊主城毀滅後，摯友 Eggchan 在一次神秘代碼異常事件中再度離奇失蹤。為了尋找線索，Wemmbu 隻身闖入全服最恐怖的無規則狂歡「千人肅清之夜（The Purge）」。在面對全服暴徒的圍攻下，Wemmbu 單兵殺出血路庇護無辜平民，並發掘出伺服器底層記憶體過載的毀滅性漏洞。在世界即將被強制抹除的終極倒數中，戰神親手修復核心拯救了世界，精彩主線持續進行中！",
          "genesis": "在千人大內戰落幕、世界看似步入正軌之際，一場突如其來的伺服器底層熱更新抹去了部分玩家的登錄檔案，其中便包括了 Eggchan。留給 Wemmbu 的，只有一本記載著亂碼座標的血盟筆記（Searching For My Friend Who Went Missing）。為了逼出幕後黑手，管理階層宣布啟動代號為「The Purge（千人肅清之夜）」的極端測試——全服所有規則、領地保護與安全區在 24 小時內全部失效，允許任意掠奪與殺戮。整座伺服器瞬間淪為血腥的角鬥場。",
          "conflict": "在肅清之夜的混亂狂潮中，數百名嗜血的武裝暴徒將目標對準了聚集在避難所的弱小無辜者。Wemmbu 手持 The Crucible 巨刃隻身擋在避難所要塞前。面對漫天箭雨、高爆礦車與瘋狂衝鋒的人潮，Wemmbu 如同無可撼動的巍峨天塹。他的每一次揮砍都掀起狂暴的旋風，在長達數小時的高強度血戰中，一人斬殺數十位窮凶極惡的匪首，以一己之力守護了身後的上千名平民（1000 Players Simulate THE PURGE in Minecraft）。\n\n然而，這場肅清的背後隱藏著更加恐怖的陰謀：神祕組織 The LAW 與 Lattice K 企圖利用肅清之夜產生的高額資料垃圾，故意引爆伺服器記憶體溢出，從而將整個世界強制格式化為絕對服從的空白領域！在避難所地底深處，伺服器世界核心過載警報狂鳴，倒數計時只剩最後五分鐘。\n\nWemmbu 告別了被庇護的民眾，隻身躍入熔岩翻滾的世界核心機房。面對即將崩潰的高溫核心與狂暴紊亂的代碼亂流，Wemmbu 拋開生死，將自己的神裝耐久全數獻祭作為緩衝隔熱層。他用染血的雙手在燙得冒煙的紅石終端上，按照 Eggchan 筆記中的古老演算法，以超乎人類極限的手速逐行輸入穩定協議指令。在全服即將黑屏抹除的最後一秒，指令成功執行！過載的虛空核心平息下來，湛藍色的穩定代碼如甘霖般重塑大地，Wemmbu 憑藉凡人之軀，成功拯救了世界上最龐大的 Minecraft 伺服器！戰火初歇，但他尋找 Eggchan 與抗衡 Lattice K 的征途才剛剛啟程。",
          "lootAndAnomaly": "獲得世界核心饋贈之《Overclocked Core Stabilizer（過載核心穩定器）》與摯友留下的唯一代碼信物《Eggchan’s Missing Feather（失落的摯友羽毛）》。",
          "impact": "Wemmbu 在肅清之夜的大無畏守護與挽救世界崩潰的壯舉，使其徹底超越了單純的戰士形象，成為全服億萬玩家公認的救世守護神。然而，隨著 The LAW 鐵腕陣營的全面浮上水面，更大的終極風暴正蓄勢待發。",
          "keyPlotPoints": [
            "生死摯友 Eggchan 在代碼異常中離奇失蹤，循著亂碼線索展開千里追尋",
            "全服開啟無規則殘酷『千人肅清之夜』，一人一刀鎮守避難要塞阻擊暴徒軍團",
            "識破幕後勢力企圖藉肅清之亂引爆伺服器記憶體溢出、永久格式化世界的毒計",
            "隻身躍入熔岩翻滾的世界核心機房，在最後倒數極限輸入穩定演算法指令",
            "在千鈞一髮之際拯救世界最大伺服器，矢志不渝尋找摯友並對抗 The LAW 強權"
          ],
          "psychology": "「他們想讓這座世界在混亂中自毀，想讓所有人成為代碼的祭品。但我答應過他，要守護好我們走過的每一寸土地。只要我手中還能握緊戰刃，這座世界就絕不會向毀滅低頭。」",
          "sourceVideos": [
            {
              "id": "5hG_nAYEC2g",
              "title": "How I Saved the World's Largest Minecraft Server",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=5hG_nAYEC2g",
              "thumbnail": "https://i.ytimg.com/vi/5hG_nAYEC2g/maxresdefault.jpg",
              "duration": "32:10"
            },
            {
              "id": "4v_jk0w7wR0",
              "title": "1000 Players Simulate THE PURGE in Minecraft",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=4v_jk0w7wR0",
              "thumbnail": "https://i.ytimg.com/vi/4v_jk0w7wR0/maxresdefault.jpg",
              "duration": "25:40"
            },
            {
              "id": "ZjO0dep5VjU",
              "title": "Searching For My Friend Who Went Missing",
              "channel": "Wemmbu",
              "channelUrl": "https://www.youtube.com/@wemmbu",
              "youtubeUrl": "https://www.youtube.com/watch?v=ZjO0dep5VjU",
              "thumbnail": "https://i.ytimg.com/vi/ZjO0dep5VjU/maxresdefault.jpg",
              "duration": "27:18"
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          "title": "第一章：啟動毀滅伺服器的古老漏洞",
          "subtitle": "宇宙篇章的揭幕之作、方塊更新阻斷與極限卡頓引擎",
          "summary": "作為整個 Unstable SMP 系列的揭幕奠基人，Spoke 與戰友 Jamato 在無意中發掘了 Minecraft 伺服器端在多執行緒處理與實體碰撞檢測上的致命缺陷。透過極度廉價的音符盒、投擲器與紅石時鐘連結，他向全宇宙展示了如何讓整座伺服器的物理運算徹底陷入癱瘓，親手點燃了 Unstable SMP『不穩定性』的核心主線導火線。",
          "genesis": "伺服器剛開荒之時，所有人都忙於採集木頭與挖掘鐵礦。而對循規蹈矩感到無比厭倦的 Spoke 帶著夥伴 Jamato 脫離了文明保護區，深入遠方無人探索的邊境邊界，試圖測試伺服器端在特定邊界區塊重載時的抗壓極限。在跋涉數萬格後，他們在邊界的一座天然深邃裂谷底部建立秘密實驗室。Spoke 敏銳察覺到：當高頻的方塊更新檢測器（BUD）與大量漏斗中的流動物品相互干涉時，伺服器端主執行緒的垃圾回收機制會產生微秒級的堆疊溢出。",
          "conflict": "在裂谷深處，Spoke 巧妙利用幾十塊泥土、音符盒、漏斗與幾根紅石火把，拼裝出了一台僅佔地數格的微型『時空運算卡頓器（Time-Space Lag Engine）』。當 Spoke 咧嘴笑著按下拉桿閉合電路的那一刻，整個世界的時間彷彿在剎那間凝固！\n\n伺服器端主執行緒被強行塞滿了無效的實體尋路請求與碰撞箱計算，全服 TPS 在數秒之內從滿幀 20 驟降至令人窒息的 2.5。全服所有線上玩家的聊天公頻、方塊破壞與移動同步瞬間陷入卡死與亂碼。玩家們驚恐地看著浮在半空中的箭矢與無法撿起的鑽石，世界陷入了末日般的恐慌。Spoke 平靜地坐在監控面板前，記錄下伺服器端的崩潰閾值與記憶體佔用極限。就在伺服器即將被自動看門狗（Watchdog）判定為死機並強制重啟的最後三秒，Spoke 手起鎬落精準砸碎了紅石中繼線路，世界的齒輪才重新恢復運轉。\n\n這場震驚全服的極限操作向所有人證明：這個世界絕非堅不可摧，底層代碼的規則可以被任意玩弄。Spoke 由此成為了 Unstable SMP 中令管理員與各路霸權最為忌憚的『漏洞神偷』。",
          "lootAndAnomaly": "研發並收錄《Chronos Glitch Core（時空漏洞核心）》，掌握了利用毫秒級時序差引發區塊卡頓、讓實體碰撞箱脫節的非法漏洞技術。",
          "impact": "本集作為 Unstable Universe 的開山首部曲，確立了全系列的敘事基調——『代碼漏洞並非系統的缺陷，而是神偷與智者手中的最強兵刃』。Spoke 從此成為混亂與技術流的最高象徵。",
          "keyPlotPoints": [
            "與 Jamato 攜手脫離常規生存軌跡，深入邊界山谷探測伺服器端承載極限",
            "利用特殊方塊更新機制與漏斗實體尋路循環，自製超微型時空卡頓引擎",
            "啟動裝置使全服 TPS 驟降至 2.5，製造全服時序停滯與聊天公頻大崩潰",
            "在伺服器端即將崩潰重啟的倒數三秒精準斷電，消除系統日誌追蹤",
            "正式向全服宣告 Unstable SMP 宇宙的不穩定性，拉開傳奇時代大幕"
          ],
          "psychology": "「他們以為管理員制定的規則就是絕對的真理。但只要你懂得代碼的呼吸，即便是最卑微的音符盒與漏斗，也能成為讓整個宇宙心跳停止的死神之鐮。」",
          "sourceVideos": [
            {
              "id": "wG9dbWNsems",
              "title": "How to Destroy the Unstable SMP",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=wG9dbWNsems",
              "thumbnail": "https://i.ytimg.com/vi/wG9dbWNsems/maxresdefault.jpg",
              "duration": "16:45"
            }
          ]
        },
        {
          "id": "spoke_arc_2",
          "title": "第二章：地下物流截擊！狂偷一千萬件複製神裝",
          "subtitle": "基岩黑產主動脈的暗渠截流、千萬神級物資入庫與經濟震盪",
          "summary": "神秘犯罪集團利用漏洞在地底基岩深處建造了一座規模空前的全自動物品複製工廠，試圖武裝軍隊顛覆整個伺服器。Spoke 循著黑市線索展開長達數週的聲學探勘，在完全未觸發敵方警報的情況下，神不知鬼不覺地在敵方主傳輸管道正下方架設了反向分流暗渠，將整整 10,356,000 件滿級獄髓神裝與不死圖騰洗劫一空，留下一面綠色小丑旗揚長而去！",
          "genesis": "在黑市遊蕩時，Spoke 在一個流浪商人處偶然撿到一個標註有亂碼序列號的神秘界伏盒，盒內裝滿了超越常規產量的附魔金蘋果。他敏銳意識到地下深處必定存在一座規模龐大的非法複製農場。隨後，他攜帶消音鏟與回聲探測儀展開了長達數千格的地毯式搜查。透過監聽地表微弱的水流沖刷聲與紅石發射器的高頻節奏，他最終在世界負 Y 軸最深處，鎖定了一處被整面哭泣黑曜石加固的地下空間。",
          "conflict": "映入眼簾的景象令人瞠目結舌：數百條密密麻麻的紅石水流管道與漏斗交織成龐大的物流網路，正在晝夜不息地運送著剛複製出來的滿級獄髓套裝、不死圖騰與附魔金蘋果。防守方配備了多道震動感應門與全天候巡邏守衛，稍有動靜便會銷毀整個農場以防被查。\n\nSpoke 露出了招牌的戲謔微笑。他像一名頂級外科醫生一樣，沒有選擇強攻或舉報，而是在敵方主傳輸管道正下方悄然挖出一條長達數百格的平行暗渠。他精巧地安裝了反向觸發的比較器漏斗分流閥——每當水流將一組神裝衝過時，分流閥便無聲無息地將其中 95% 的物資吸入地下暗管，順著水流全數運往他深埋在相鄰區塊的數百個隱密界伏盒倉庫中。\n\n在接下來的四個小時裡，巨量物資如瀑布般湧入 Spoke 的腰包，累計達到了驚人的 10,356,000 件！當違規集團頭目興高采烈地帶領武裝軍隊趕來查驗金庫時，打開箱子卻發現空空如也，只有中央孤零零立著一面 Spoke 專屬的搞怪綠色小丑旗。全服黑市在幾小時內徹底陷入恐慌，物價如雪崩般暴跌，而 Spoke 早已坐擁無盡的圖騰儲備，成為了名副其實的物資帝皇。",
          "lootAndAnomaly": "收割不可思議的《10,356,000 Duped Gear Hoard（千萬級複製物資秘藏）》，擁有了近乎無限的圖騰儲備與滿級神裝，徹底實現了物資自由。",
          "impact": "此舉直接摧毀了違規集團武裝顛覆伺服器的政變陰謀，引發了全服地下黑市的劇烈恐慌與物價洗牌，Spoke 憑藉千萬神裝奠定了日後組建無敵幽靈軍團的雄厚物質基礎。",
          "keyPlotPoints": [
            "黑市撿拾異常編碼界伏盒，敏銳推斷出地下複製黑產網路的存在",
            "歷經數千格聲學監聽，在基岩深處挖穿敵方加密哭泣黑曜石外牆",
            "在主物流管道下巧妙架設微型比較器漏斗分流閥，瞞天過海實施暗渠分流",
            "四小時內無聲無息轉移 10,356,000 件滿級獄髓神裝與不死圖騰入庫",
            "在空空如也的金庫留下面具小丑旗瀟灑撤離，引發全服黑市大崩盤"
          ],
          "psychology": "「他們辛辛苦苦用漏洞複製出整個世界的財富，企圖稱王稱霸。但我甚至不需要破壞方塊，只需要多放一個漏斗。謝謝你們的辛勤勞動，小丑先生笑納了。」",
          "sourceVideos": [
            {
              "id": "E5jfdzB6RnY",
              "title": "How I Stole 10,356,000 Duped Items",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=E5jfdzB6RnY",
              "thumbnail": "https://i.ytimg.com/vi/E5jfdzB6RnY/maxresdefault.jpg",
              "duration": "20:30"
            }
          ]
        },
        {
          "id": "spoke_arc_3",
          "title": "第三章：全服首富破產計！經濟閃電戰搞垮 Roshambo",
          "subtitle": "中央儲備銀行的致命漏洞、偷樑換柱偽裝術與富豪帝國瞬間瓦解",
          "summary": "全服首富兼金融寡頭 Roshambogames 依靠高利貸與壟斷掠奪積累了天文數字的黃金儲備，並對全服平民徵收 50% 的暴利交易關稅。Spoke 策劃了一場名垂青史的『特洛伊木馬式經濟閃電戰』——他喬裝成海外神祕大亨開立信用帳戶，用偽造的黑市交易引開守衛主力，隨後利用礦車卡角潛入中央儲備金庫，將整座金庫的黃金偷樑換柱換成 TNT 炸藥，令萬億富豪帝國在一夜之間徹底破產！",
          "genesis": "富豪 Roshambogames 在主城最繁華地段修建了號稱全服安保最森嚴的「中央儲備銀行」，以私人重裝軍團為後盾，強制規定全服所有大額交易必須經由其銀行清算並抽取高達 50% 的血腥手續費，任何敢私下交易的散戶都會遭到抄家滅族。全服怨聲載道，物價飛漲，貨幣信用體系瀕臨崩潰。Spoke 決定給這位貪婪的銀行家上一堂刻骨銘心的『自由市場經濟學』實踐課。",
          "conflict": "Roshambogames 的中央銀行四壁鋪設了三重防爆結晶與水流防空腔，金庫大門由十組密碼紅石門鎖死。強攻絕無可能，Spoke 展現了頂級騙徒的偽裝術：他脫下綠色兜帽，換上一身金絲刺繡的貴族長袍，化名『神秘海外公爵』攜帶數箱神級附魔書高調入城，在銀行開立了頂級 VIP 帳戶。在長達三天的商務洽談中，Spoke 藉由參觀金庫的短暫間隙，將微型偵測器（Observer）以極限角度塞入了金庫通風口的陰影處。\n\n行動當天，Spoke 透過黑市情報網發布了一條虛假的『百萬級地獄之星走私案』座標，成功將銀行的私人守衛主力調離主城。隨後，他利用特製的無碰撞箱幽靈礦車卡穿過金庫天花板鐵砧夾層，神不知鬼不覺地滑入這座存放了數萬組金塊的中央保險庫！\n\n然而，Spoke 並沒有單純搬運黃金——他展開了一場優雅的偷樑換柱。他將數萬塊黃金逐一收入界伏盒，同時在原地碼放上由鍍金深板岩偽裝、內部塞滿高爆 TNT 與紅石觸發器的外觀完全一致的假金磚！當 Roshambogames 興沖沖地帶領保鏢回到銀行、準備向股東展示金庫時，Spoke 早已遠在數千格之外的雲端。伴隨著一聲響指，引信被遠程脈衝點燃，這座象徵剝削與財富的中央銀行在一團絢爛的火光與金色碎屑中化作巨大的深坑。全服手續費制度瞬間廢除，物價重歸平穩，而 Roshambogames 在焦黑的廢墟前抱頭痛哭，宣告破產。",
          "lootAndAnomaly": "奪取《The Billionaire's Counterfeit Vault（被搬空的億萬富豪黑箱）》與 Roshambogames 的全套私人黃金儲備帳本，徹底摧毀了伺服器金融寡頭體系。",
          "impact": "這場荒誕而壯麗的經濟閃電戰徹底粉碎了 Unstable SMP 的財閥壟斷體制，使全服商品物價恢復合理水準。Spoke 劫富濟貧的怪盜形象深入人心，成為全服散戶津津樂道的傳奇佳話。",
          "keyPlotPoints": [
            "首富 Roshambogames 壟斷全服交易並抽取 50% 暴利關稅引發天怒人怨",
            "化名海外神祕大亨高調入城開戶，藉 VIP 參觀在通風口暗植微型偵測器",
            "策劃虛假黑市交易誘走銀行主力守衛，利用幽靈礦車卡角潛入核心金庫",
            "將數萬組黃金洗劫一空，並以鍍金偽裝高爆 TNT 進行驚天偷樑換柱",
            "遠程引爆摧毀中央銀行，宣告剝削寡頭徹底破產，還自由予全服市場"
          ],
          "psychology": "「黃金若是用來築造奴役他人的鎖鏈，那它就只配化作炸碎這條鎖鏈的引信。現在，所有人的債務都一筆勾銷了——這是小丑給全服的一份免單禮物。」",
          "sourceVideos": [
            {
              "id": "KyLqZkfv3BU",
              "title": "I Bankrupted Minecraft's Richest Civilization",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=KyLqZkfv3BU",
              "thumbnail": "https://i.ytimg.com/vi/KyLqZkfv3BU/maxresdefault.jpg",
              "duration": "23:18"
            }
          ]
        },
        {
          "id": "spoke_arc_4",
          "title": "第四章：臥底黑手黨！雙面間諜引爆教父家族黃昏",
          "subtitle": "潛伏深淵的影狼、教父的血色信任與 64 輛瞬爆礦車的葬禮",
          "summary": "黑手黨犯罪家族愈發猖獗，甚至企圖在即將登基的國王 Parrot 的加冕大典上發動血腥暗殺。為了徹底剷除這顆毒瘤，Spoke 褪去綠色連帽衫，換上全套漆黑西裝，化名冷血獨行刺客『影狼』臥底潛入黑手黨內部。在經受住測謊儀與生死考驗後，他贏得了教父的絕對信任，最終在犯罪首腦峰會召開當晚，於地下室堆疊 64 輛共振瞬爆礦車，以一場驚天動地的物理連鎖殉爆將整個黑手黨家族送入歷史黃昏！",
          "genesis": "黑手黨的暗殺令與收買傳單貼滿了全服暗巷。黑手黨教父狂妄地宣稱，任何試圖在 Unstable SMP 建立法律的狂徒都將死無全屍。Spoke 明白，單純從外部拔除據點只會讓黑手黨化整為零，唯有精準斬首並摧毀其核心高層才能一勞永逸。他收起標誌性的螢光綠兜帽衫與壞笑，換上挺拔的黑曜石色西裝與無表情面具，手持染血的雙刃，在黑手黨名下的一處地下酒館以雷霆手段擊殺了前來鬧事的仇家，成功引起了教父心腹的注意，獲准前往黑手黨總舵面試。",
          "conflict": "黑手黨的內部甄別殘酷至極。在幽暗的地下刑房中，Spoke 被按在特製的紅石測謊椅上，四周圍繞著數名手持重弩的行刑者。面對教父多番刁鑽狠辣的盤問，Spoke 展現出影帝級的心心理素質，心跳與神態毫無波瀾，甚至精準道出了幾處仇敵公會的虛構破綻，令教父深信這是一位不可多得的冷血殺戮機器。教父大喜過望，當場將象徵家族核心成員的黑手黨徽章交給 Spoke，並任命其為加冕暗殺行動的副總指揮。\n\n在接下來的數週裡，Spoke 擔任雙面間諜，一邊暗中透過死信箱向 Parrot 與 Wemmbu 傳遞刺客路線，一邊藉巡邏之便摸透了黑手黨高層大樓的所有承重結構。在黑手黨全體長老與幹部集結召開加冕前夜誓師大會的當晚，整棟大樓守備森嚴。\n\n趁著高層在頂樓奢華宴會廳舉杯狂歡之際，Spoke 悄然溜至大樓正下方的地基深處。在一處狹窄的單格軌道上，他利用 Minecraft 特殊的物理堆疊機制，重疊放置了整整 64 輛裝滿 TNT 的共振礦車（Resonance TNT Minecarts）！這種堆疊會在觸發瞬間產生幾何倍數的物理碰撞計算，產生數十倍於常規炸藥的摧毀半徑。布置完畢後，Spoke 登上大樓外側的逃生滑索，在夜風中摘下面具，對著頂樓的教父舉杯致敬，隨即扣動了微型遙控器。伴隨著一聲超越伺服器端音效緩衝極限的沉悶巨響，64 輛礦車同時共振爆炸，整座數十層高的黑手黨總部大樓在瞬間被崩解為漫天齏粉，煙塵沖天！教父與全體黑手黨高層在火光中瞬間蒸發，盤踞伺服器多年的黑暗家族至此徹底覆滅。",
          "lootAndAnomaly": "收繳《The Godfather's Burned Signet（教父燒融的黑手黨族徽戒指）》與記載了全服所有黑警與叛徒名單的《Mafia Syndicate Black Ledger（黑手黨賄賂黑帳本）》。",
          "impact": "黑手黨核心的瞬間蒸發徹底瓦解了黑暗勢力的武裝叛亂企圖，直接捍衛了國王 Parrot 的登基大典與文明秩序的確立。Spoke 雙面間諜的傳奇事蹟成為全服不朽的神話。",
          "keyPlotPoints": [
            "黑手黨密謀加冕大典暗殺國王 Parrot，Spoke 決定化名冷血刺客『影狼』臥底潛入",
            "在地下刑房硬抗紅石測謊椅生死審問，憑藉超凡演技贏得教父絕對信任",
            "暗中擔任雙面間諜，向同盟傳送情報的同時摸清黑手黨總部建築承重結構",
            "在總部地下單格軌道極限重疊 64 輛共振瞬爆 TNT 礦車，布設終極殺局",
            "高層誓師大會當夜遠程引爆共振礦車，整座黑手黨大樓瞬間灰飛煙滅"
          ],
          "psychology": "「在黑暗中行走太久，有時你會忘記自己本來的模樣。但只要你心中始終記掛著那一抹綠色與朋友的笑容，深淵就永遠吞噬不了你的靈魂。永別了，教父。」",
          "sourceVideos": [
            {
              "id": "Ss5ggp8Ij14",
              "title": "I Infiltrated The Minecraft Mafia",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=Ss5ggp8Ij14",
              "thumbnail": "https://i.ytimg.com/vi/Ss5ggp8Ij14/maxresdefault.jpg",
              "duration": "25:52"
            },
            {
              "id": "x9-V64fR9sU",
              "title": "The End of the Minecraft Mafia",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=x9-V64fR9sU",
              "thumbnail": "https://i.ytimg.com/vi/x9-V64fR9sU/maxresdefault.jpg",
              "duration": "29:10"
            },
            {
              "id": "8_Au10osdEo",
              "title": "Unstable SMP: The NULL / Purgatory Saga",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=8_Au10osdEo",
              "thumbnail": "https://i.ytimg.com/vi/8_Au10osdEo/maxresdefault.jpg",
              "duration": "31:45"
            }
          ]
        },
        {
          "id": "spoke_arc_5",
          "title": "第五章：終界文明建立、最強軍團與失落維度探索（持續進行中）",
          "subtitle": "千人終界拓荒、組建伺服器最強軍團、穿梭失落維度與締造至高帝國",
          "summary": "內戰過後主世界勢力錯綜複雜，新興強權 The LAW 步步緊逼。Spoke 帶領千名開拓者進軍無垠的終界虛空，在懸浮空島群間搭建起綿延數萬格的黑曜石要塞與全服最強軍隊（I Created Minecraft's Greatest Military）。對世界底層的探究促使他穿透基岩墜入『失落維度（Underworld）』發掘遠古代碼石板；重返世界的他集結所有維度資源，正式加冕並宣告建立 Minecraft 最強帝國，成為連 Lattice K 也忌憚三分的終界帝皇，故事精彩連載中！",
          "genesis": "千人大內戰落幕後，主世界雖迎來短暫和平，但隨著 Lattice K 創立的 The LAW 組織開始在全服推行極端戒嚴與宵禁，Spoke 敏銳察覺到主世界已過度擁擠且處處受到監控。不願寄人籬下的他做出了大膽的決定：率領千名跟隨他的鐵桿粉絲與散戶工匠，集體遷徙至無人敢涉足的終界虛空荒原（1000 Players Build END Civilization in Hardcore Minecraft）。然而，終界的極端虛空墜落風險與龍息毒霧，讓這場拓荒成為一場生死豪賭。",
          "conflict": "在深邃死寂的終界虛空中，Spoke 展現了天才般的統率與基建能力。他指揮千名工匠在浮空島群間搭建起綿延數萬格的黑曜石防禦空島、高速終界珍珠發射軌道以及跨島物流網路。為了捍衛終界文明不受各大霸權與 The LAW 的武力干涉，Spoke 著手打造全服最強軍隊——他將隱形藥水、高頻珍珠突襲、瞬爆礦車戰術與盾牌跳劈破盾體系化，組建出一支戰無不勝的幽靈軍團（I Created Minecraft's Greatest Military）！\n\n然而，對世界底層代碼的痴迷促使他進一步涉險。在研究終界折躍門的時序代碼時，他偶然發現了地獄基岩下方隱藏的虛空斷層。Spoke 孤身穿透地獄熔岩海下方的虛空基岩，墜入傳說中被伺服器系統刪除的『失落維度（Forgotten Dimension / Underworld）』！在無光無色的亂碼深淵中，Spoke 避開無形代碼異獸的瘋狂追獵，發掘出世界起源的遠古代碼石板；在成功破譯石板上的維度穿梭代碼後，Spoke 攜帶遠古神力重返世界，集結終界、地獄與主世界的三界資源，正式加冕並宣告建立 Minecraft 最強帝國（I Created Minecraft’s Greatest Empire）！面對 Lattice K 與 The LAW 大軍的邊界集結，Spoke 站在終界之巔，戰意昂揚。",
          "lootAndAnomaly": "起獲失落維度源石《Origin Code Slate（起源原始碼石板）》與全服唯一防穿透神裝《End Sovereign Void-Plate（終界至尊虛空戰鎧）》。",
          "impact": "終界帝國的崛起徹底打破了主世界的雙雄爭霸格局，形成了三足鼎立的新世界秩序。Spoke 麾下的幽靈軍團成為連 Lattice K 也不敢輕舉妄動的最高軍事存在，Unstable SMP 邁向多維度宇宙戰爭的全新宏大篇章！",
          "keyPlotPoints": [
            "拒絕接受主世界 The LAW 的監控戒嚴，率千名開拓者遠征極端終界虛空",
            "在終界浮島間築起綿延數萬格黑曜石空島要塞，組建全服最強幽靈軍隊",
            "穿透基岩盲區孤身探索被刪除的失落維度，發掘世界起源的遠古代碼石板",
            "掌握維度跳躍技術震撼重返，集結三界資源正式加冕建立 Minecraft 最強帝國",
            "與 Lattice K 的 The LAW 大軍隔空對峙，宣告終界帝國永不受任何霸權奴役"
          ],
          "psychology": "「他們以為把我們逼入虛空，我們就會墜落摔死。但他們忘了，小丑本就是在深淵邊緣起舞的行家。現在，整個終界都是我的國度，敢踏入這片虛空者，唯有一死！」",
          "sourceVideos": [
            {
              "id": "ynkhNRpQ9Xc",
              "title": "1000 Players Build END Civilization in Hardcore Minecraft",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=ynkhNRpQ9Xc",
              "thumbnail": "https://i.ytimg.com/vi/ynkhNRpQ9Xc/maxresdefault.jpg",
              "duration": "27:45"
            },
            {
              "id": "lA1ohDqw8XA",
              "title": "Exploring Minecraft’s Forgotten Dimension",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=lA1ohDqw8XA",
              "thumbnail": "https://i.ytimg.com/vi/lA1ohDqw8XA/maxresdefault.jpg",
              "duration": "26:10"
            },
            {
              "id": "V9HzAdwgf-I",
              "title": "I Created Minecraft's Greatest Military",
              "channel": "SpokeIsHere",
              "channelUrl": "https://www.youtube.com/@SpokeIsHere",
              "youtubeUrl": "https://www.youtube.com/watch?v=V9HzAdwgf-I",
              "thumbnail": "https://i.ytimg.com/vi/V9HzAdwgf-I/maxresdefault.jpg",
              "duration": "28:15"
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ],
      "channel": "SpokeIsHere",
      "channelUrl": "https://www.youtube.com/@SpokeIsHere"
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
          "id": "flame_arc_1",
          "title": "第一章：加冕最強之人！Unstable SMP 的極限戰技之路",
          "subtitle": "極限硬核環境的殘酷修煉、破盾技巧巔峰與全服最強戰神傳奇",
          "summary": "初入 Unstable SMP 的殘酷硬核環境，FlameFrags 拒絕依靠外物與複製，而是沉下心將 Minecraft 原生近戰格鬥技巧磨礪至人類極限。在深入鑽研伺服器端命中判定與跳劈滯空幀數後，他以微秒級的操作卡出常駐代碼不死金心。在全服矚目的中央角鬥場巔峰對決中，他連克八位頂級公會王牌擂主，憑藉純粹的技術征服全服，被共同加冕為 Unstable SMP 的最強戰神！",
          "genesis": "在各大勢力沉迷於違規複製與強權壓迫的時代，初入伺服器的 FlameFrags 孑然一身。他目睹了無數新人和散戶在老牌公會的屠刀下淪為經驗與裝備的養分。深知『唯有自身的絕對力量才能捍衛尊嚴』的 FlameFrags，隻身走入極限硬核荒野與深淵峽谷，展開了長達數月的地獄式格鬥淬煉。在險象環生的野外怪物潮與惡劣氣候中，他不配戴任何護甲，僅憑一把鐵斧與木盾與成群的怪物肉搏，將格擋、走砍、跳劈與滯空時長刻入肌肉記憶。",
          "conflict": "在一次深入廢棄地獄要塞的極限死鬥中，FlameFrags 遭遇了烈焰使者與凋靈骷髏的重重包圍。在生命值僅剩半顆心的生死一線間，他觸發了不死圖騰，並敏銳地捕捉到伺服器端在處理瀕死判定與封包回傳時產生的微秒級時序差。憑藉不可思議的極限手速，他在圖騰碎裂的同一遊戲刻（Game Tick）切換副手，成功卡出了一組突破生命上限、永不消逝的代碼金色血條（Immortal Heart Reservoir）！\n\n攜帶這份天地淬煉的底蘊，FlameFrags 登上了全服公會聯合舉辦的『中央大擂台巔峰邀請賽』。八大老牌公會派遣了各自最強的武裝近衛隊長與角鬥冠軍輪番攻擂。在面對身穿滿級獄髓戰甲、手持附魔金蘋果的各路強者時，FlameFrags 展現了令人窒息的壓迫感：他在刀光劍影中身如鬼魅，無論面對重盾鐵衛還是游擊弓手，均能在兩招之內精準預判出對手的格擋抬手，以疾跑跳劈在毫秒級的時間窗口強行破盾（Shield Disable）並接順勢橫掃！短短半小時內，八位成名已久的頂級高手相繼被斬落擂台，全場上萬名圍觀玩家起立震撼致敬。各路公會強者心悅誠服，共同將象徵全服至高武力的戰神披風披在 FlameFrags 身上，宣告最強戰神的誕生。",
          "lootAndAnomaly": "掌握常駐不死金心機制《Glitched Immortal Heart Reservoir（代碼異常不死金心）》，並收繳鍛造專屬神裝《Flame’s Bespoke Warplate（烈焰專屬獄髓重戰甲）》。",
          "impact": "FlameFrags 的崛起向所有人證明了純粹個人格鬥技術的無上上限，打破了公會人數與複製裝備的壟斷迷信。他成為無數平民玩家爭相效仿的武道偶像，但也引起了執法機構 The LAW 的高度戒備。",
          "keyPlotPoints": [
            "拒絕同流合污，隻身深入極限硬核深谷展開長達數月的魔鬼式近戰淬煉",
            "在瀕死瞬間精準卡中伺服器判定時序差，掌握常駐不滅的代碼不死金心",
            "在中央角鬥場巔峰大會連克八位頂級公會王牌擂主，刀光連斬震驚全服",
            "以無解的跳劈破盾與身法節奏摧枯拉朽取勝，獲得全服共同加冕最強戰神",
            "獲贈烈焰專屬獄髓重戰甲，正式確立其在 Unstable SMP 戰力天花板地位"
          ],
          "psychology": "「裝備終究只是死物，唯有千錘百煉的技藝與永不退縮的勇氣，才是真正的無敵之刃。加冕為王對我而言毫無意義，我的雙眼，只會注視下一個更強的對手。」",
          "sourceVideos": [
            {
              "id": "Vhnn_sG7xUk",
              "title": "I Became Immortal on a Hardcore Minecraft SMP",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=Vhnn_sG7xUk",
              "thumbnail": "https://i.ytimg.com/vi/Vhnn_sG7xUk/maxresdefault.jpg",
              "duration": "15:50"
            },
            {
              "id": "Ym2wmd19S_c",
              "title": "I Became the Strongest on the Unstable SMP",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=Ym2wmd19S_c",
              "thumbnail": "https://i.ytimg.com/vi/Ym2wmd19S_c/maxresdefault.jpg",
              "duration": "21:40"
            }
          ]
        },
        {
          "id": "flame_arc_2",
          "title": "第二章：孤狼血戰！單兵團滅五人霸凌公會與農場大戰",
          "subtitle": "以身作餌誘敵深入、雪峰峭壁的極限連劈與誓死守護之花",
          "summary": "惡名昭彰的掠奪公會「掠奪之影（Shadow Raiders）」五名滿裝精銳仗勢欺人，惡意洗劫和平新人的巨型農場並屠戮無辜。FlameFrags 憤然拔刀，以身作餌褪下重甲誘敵深入暴風雪山。在萬仞絕壁之上，他藉險峻地形化解敵方人數優勢，以一敵五完成震撼全服的團滅奇蹟，並將逝去新手贈予的小黃花插在胸甲之上，誓言做全服弱者的堅盾！",
          "genesis": "在主城東部平原，一群愛好和平的休閒建築玩家耗費數月心血，搭建了一座供全服新手免費領取食物與建材的巨型公益農場。然而，臭名昭著的五人霸凌公會『掠奪之影』垂涎其物資，突然發動血腥突襲。他們不僅掠奪了所有儲備，更用熔岩將整個農場燒成焦土，並將守護農場的一名新手圍毆致死。在廢墟中目睹慘狀的 FlameFrags，在死去新手的墓前拾起了一朵被踩殘的小黃花，眼眸中燃燒起冰冷的復仇烈焰。",
          "conflict": "掠奪之影五人全員配備滿級獄髓裝甲與充足的附魔金蘋果，正面交鋒極易讓其憑藉人數優勢圍毆甚至乘鞘翅逃脫。FlameFrags 展現出頂級戰術大師的心智：他故意脫下了威嚴的烈焰戰甲，換上一身破爛皮甲，佯裝慌不擇路地逃向荒無人煙的極寒雪山（Mount Desolation）。五名貪婪傲慢的狂徒見狀全員出動，在公頻大肆嘲弄並狂追不捨。\n\n當追兵踏入雪山之巔的狂暴暴風雪中時，地勢陡峭險峻，兩側皆是深不見底的萬丈冰崖。FlameFrags 驟然止步回身，在包圍網合攏的剎那瞬間換回全套滿級神裝！敵方為首的重裝狂徒尚未來得及反應，FlameFrags 已藉由雪坡滑翔的慣性飛身躍起，戰斧裹挾著刺耳的破空巨響直劈而下，一擊將對手的前排大盾砸至破防！\n\n緊接著，FlameFrags 利用峭壁一格寬的險要地形實施『一夫當關』卡位，使敵方無法五人同時近身。他以令人眼花繚亂的跳劈接平 A 走砍，在漫天箭雨中如穿花繞蝶般穿梭。短短幾分鐘內，前排兩人連遭數記重擊，護衛圖騰連環碎裂，最終慘叫著倒在血泊中！剩下的三人驚駭欲絕，企圖點燃煙火火箭搭乘鞘翅逃跑。FlameFrags 眼神如電，換上滿附魔重弓，在漫天飛雪中以神級預判凌空盲射，箭矢精準穿透敵方翅膀！失去動力的殘兵墜落雪嶺，被趕到的 FlameFrags 一刀斃命。戰後，FlameFrags 默默將那朵沾血的小黃花插在自己的胸甲銘文之上，宣告正義絕不缺席。",
          "lootAndAnomaly": "起獲掠奪公會全部非法洗劫軍備，並將那朵象徵純真與誓言的《Rejoice’s Flower（戰火廢墟中的純白之花）》永久鑲嵌於戰甲心臟位置。",
          "impact": "這場驚心動魄的 1v5 絕地雪山團滅戰被全服玩家封為傳奇，殘暴霸凌勢力遭受毀滅性打擊，各大黑道公會聞 FlameFrags 之名無不膽寒，平民玩家的權益得到了前所未有的捍衛。",
          "keyPlotPoints": [
            "惡霸公會洗劫公益農場並殘殺無辜新手，在廢墟墓前拾起殘花立誓復仇",
            "故意褪下重甲換穿破爛皮甲，以身作餌誘騙五名滿裝惡霸深入雪山絕壁",
            "在狂暴暴風雪與萬丈懸崖地形卡死敵軍陣型，瞬間換回神裝發起絕命反擊",
            "以險峻地形逐個擊破，跳劈破盾瞬殺前排，凌空重弓精準射落逃竄鞘翅",
            "完成 1v5 驚天團滅奇蹟，將染血小黃花插在戰甲胸口，誓做弱者之盾"
          ],
          "psychology": "「他們以為全副武裝就能肆意踐踏弱小，以為人數眾多就能無法無天。這朵花很輕，但在我心中，它比你們所有人的黃金與王冠都要沉重。傷害它的人，必須用鮮血償還。」",
          "sourceVideos": [
            {
              "id": "UJyBjBXaiZI",
              "title": "SOLO Player VS Toxic Minecraft Team",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=UJyBjBXaiZI",
              "thumbnail": "https://i.ytimg.com/vi/UJyBjBXaiZI/maxresdefault.jpg",
              "duration": "18:25"
            },
            {
              "id": "xxbwmsi4n-U",
              "title": "Unstable SMP: The Great Farm War",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=xxbwmsi4n-U",
              "thumbnail": "https://i.ytimg.com/vi/xxbwmsi4n-U/maxresdefault.jpg",
              "duration": "22:10"
            }
          ]
        },
        {
          "id": "flame_arc_3",
          "title": "第三章：戳穿作弊偽神！千人大內戰突擊先鋒總司令",
          "subtitle": "公開擂台抓包延遲外掛、萬軍對陣與千人大內戰先鋒之鋒",
          "summary": "一名依靠修改伺服器端補償參數、使用延遲外掛（Lag-Switch）的自封『無敵偽神』在全服不可一世，狂言天下無敵。FlameFrags 在萬人圍觀的擂台上欣然應戰，暗中布設紅石封包計時器當眾抓包其作弊日誌，並拔出裁決戰刃在 30 秒內三次破盾將其徹底斬落神壇！隨後，在決定全服命運的千人大內戰中，FlameFrags 被推舉為突擊先鋒總司令，率敢死隊連碎三道基岩防線迎來輝煌大勝！",
          "genesis": "在 Unstable SMP 聲名遠播之際，一名自稱『Eternal_God』的神秘玩家突然橫空出世。他憑藉不可思議的瞬移背刺與無法被擊退的詭異特性，在各處野外強取豪奪，並在全服公共廣播公然叫囂『凡人皆為螻蟻，我是此界唯一的神』，甚至對 FlameFrags 發出公開挑戰書。富有實戰經驗的 FlameFrags 在觀摩其錄像後敏銳發現：該玩家的命中判定總是在特定網路跳 tick 時生效，這絕非技術，而是極為隱蔽的伺服器端延遲補償外掛作弊。",
          "conflict": "在萬人空巷的主城中央大擂台上，決戰如期而至。偽神手持泛著妖異光芒的武器，氣焰囂張。然而他不知道的是，FlameFrags 早在擂台四角的黑曜石立柱下，暗中布設了高頻紅石脈衝封包計時器。\n\n戰鬥打響的瞬間，對方再度啟動外掛，身形如幽靈般在空中卡頓並企圖瞬移至 FlameFrags 身後突襲。就在此時，四角的紅石計時器驟然發出尖銳刺耳的警報，中央投影水晶在天空投射出巨幅日誌——清晰顯示該玩家在短短半秒內向伺服器端注入了數千個非法偽造延遲封包，將作弊行徑當眾實錘！\n\n騙局被當場戳穿的作弊者惱羞成怒，企圖仗著數值優勢強行擊殺滅口。FlameFrags 眼中寒芒暴漲，拔出《The Truth-Seeker's Executioner Blade（真實之眼破偽裁決戰刃）》，以完全無外掛的極限身法發起雷霆連擊！他精準踩在對手延遲回彈的死角，第一記跳劈直接砸碎其鑽石盾牌；在對手掏出圖騰的瞬間，第二記疾跑平 A 打斷其副手更換；緊接著第三記霸道無匹的橫掃重斬，在不到三十秒內三次破盾，直接將作弊偽神斬落擂台、名牌粉碎！\n\n全場萬名玩家爆發出雷鳴般的掌聲與怒吼。隨後，在席捲全服的『千人大內戰（1000 VS 1000 Civil War）』中，盟友 Parrot 與 Wemmbu 一致推舉 FlameFrags 擔任聯軍突擊先鋒總司令。他手持象徵不屈的《1000-Player Vanguard War Banner（萬人大內戰先鋒軍旗）》，身先士卒衝破敵軍漫天火網與三道基岩城牆，斬殺敵軍前鋒統領，與盟友一同登上敵城要塞之巔，迎來了 Unstable SMP 的輝煌勝利。",
          "lootAndAnomaly": "繳獲《The Truth-Seeker's Executioner Blade（真實之眼破偽裁決戰刃）》與全服僅此一面的《1000-Player Vanguard War Banner（萬人大內戰先鋒軍旗）》。",
          "impact": "當眾戳穿作弊偽神不僅肅清了競技風氣，更確立了 FlameFrags『真理裁決者』的威名。而在千人大內戰中的先鋒破陣之功，更使其軍事聲望達到頂點，成為整個 Unstable 宇宙中最受敬畏的戰魂。",
          "keyPlotPoints": [
            "自封無敵的神秘作弊者利用延遲外掛肆虐全服並公開向戰神挑釁",
            "在擂台暗植紅石封包檢測器，當眾抓包其篡改伺服器端補償參數的作弊日誌",
            "拔出裁決戰刃以純粹原生技藝在 30 秒內三次破盾將作弊偽神斬首下台",
            "在千人大內戰中被推舉為突擊先鋒總司令，掌管全軍鋒刃部隊",
            "肩扛血染先鋒軍旗親自鑿穿敵軍三道基岩防線，鎖定歷史性輝煌大勝"
          ],
          "psychology": "「外掛可以篡改你的數值，但它買不來面對強敵時的勇氣，更買不來日夜苦練出的真正技藝。站在虛妄頂峰的偽神，終將在真實的刀鋒下現出原形。」",
          "sourceVideos": [
            {
              "id": "BkYekSPynVo",
              "title": "I Exposed Minecraft's 'Strongest' Player",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=BkYekSPynVo",
              "thumbnail": "https://i.ytimg.com/vi/BkYekSPynVo/maxresdefault.jpg",
              "duration": "20:15"
            },
            {
              "id": "UnFIrVKA9Zc",
              "title": "1000 VS 1000 Player Minecraft Civil War",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=UnFIrVKA9Zc",
              "thumbnail": "https://i.ytimg.com/vi/UnFIrVKA9Zc/maxresdefault.jpg",
              "duration": "34:20"
            }
          ]
        },
        {
          "id": "flame_arc_4",
          "title": "第四章：對抗 The LAW 強權與追尋不存在的虛空金庫",
          "subtitle": "最高領袖 Lattice K 鐵腕統治、戰神特訓與虛空 404 金庫探秘",
          "summary": "內戰過後，神祕鐵腕組織「The LAW」及其最高領袖 Lattice K 迅速崛起，以維護絕對秩序為由全面推行苛政與全服戒嚴，並將獨立戰神 FlameFrags 列為頭號威脅。在經歷了致命格鬥宗師的魔鬼淬煉後，FlameFrags 循著古代羊皮紙亂碼線索獨闖世界邊界，在座標完全失真的『404 虛空扇區』中踩著隱形方塊盲跳探秘，成功解鎖了深埋在伺服器快取中的神秘隱形金庫，獲得了足以逆轉戰局的古代神鑰！",
          "genesis": "隨著千人大內戰的硝煙散去，一個打著『終結所有不穩定代碼』旗號的龐大跨維度武裝組織「The LAW」在暗中接管了主城周邊。其最高領袖 Lattice K 奉行極端的鐵腕獨裁，將所有擁有高階戰力與自製神裝的散戶視為潛在威脅，強制作廢私人財產並展開全面監控。不願交出武器與戰旗的 FlameFrags 自然成為了 The LAW 的眼中釘。在多次擊退前來圍捕的執法小隊後，FlameFrags 意識到自己的極限戰力面對龐大的國家機器仍有不足，必須進一步突破自我。",
          "conflict": "為了對抗 The LAW 的科技碾壓，FlameFrags 歷經千辛萬苦尋訪到隱居在極境絕嶺的傳奇戰神導師（I Got Trained By a Minecraft Combat Master）。在為期數月的極限特訓中，他在無視野、高頻重力顛倒與極限低血量的死局中反覆搏殺，將反應神經磨礪至超越凡人的超凡境界。\n\n出師之後，FlameFrags 循著古代羊皮紙殘卷上的十六進制亂碼，穿越了世界邊界屏障。在座標完全顯示為 `NaN` 與 `404` 的失真扇區中，四周是一片死寂的虛無，只有漂浮在空中的未載入方塊殘片與致命的虛空虛線。傳說中，這裡埋藏著伺服器創世時期被遺忘的隱形金色寶庫（Searching for a Vault that Doesn't Exist）。\n\n在沒有任何實體地面的無底深淵之上，FlameFrags 展現了非人的膽魄與幾何直覺。他踩著肉眼完全不可見的隱形碰撞箱步步為營，依靠終界珍珠的極限盲投在懸浮碎塊間穿梭。每一步踩空，等待他的都將是永久銷毀檔案的虛空深淵！在歷經數十次險象環生的跳躍後，他在虛空的核心位置輸入了破譯的代碼密碼，一座散發著璀璨金芒的古代保險庫在虛空中轟然現形。打開寶庫，他取得了一張能感應全服所有隱蔽儲物箱的幽靈密匙卡，掌握了反抗 The LAW 統治的最強王牌。",
          "lootAndAnomaly": "發掘深埋於虛空快取中的神祕古物《Ghost Protocol Keycard（幽靈協議金庫卡）》，具備探知隱藏於虛空夾層中的非法儲物箱的獨特感應能力。",
          "impact": "隱形金庫的破獲為反抗陣營提供了源源不絕的代碼級物資支持，徹底打破了 The LAW 對全服資源的絕對封鎖。Lattice K 將 FlameFrags 的威脅等級提升至最高級，一場席捲整個宇宙的圍獵在所難免。",
          "keyPlotPoints": [
            "Lattice K 創立 The LAW 實施全服鐵腕戒嚴，將拒絕收編的戰神列為頭號眼中釘",
            "拜入極境隱居格鬥大師門下，在無光盲戰中完成戰鬥意識的終極蛻變",
            "追蹤古代羊皮紙亂碼線索，隻身穿越世界邊界踏入座標失真的 404 虛空扇區",
            "在萬丈虛空踩踏隱形方塊盲跳推進，依靠精準終界珍珠定位古代幽靈寶庫",
            "成功解鎖不存在的金色保險庫起獲神鑰，粉碎 The LAW 對全服物資的壟斷"
          ],
          "psychology": "「他們用『秩序』的鐵籠將所有人囚禁在恐懼中，自稱是救世的律法。但只要世界還有一處邊界未被征服，只要靈魂深處還渴望自由，他們的鐵壁就終會被我鑿出裂痕。」",
          "sourceVideos": [
            {
              "id": "h68WUZ8b0O0",
              "title": "Searching for a Vault that Doesn't Exist",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=h68WUZ8b0O0",
              "thumbnail": "https://i.ytimg.com/vi/h68WUZ8b0O0/maxresdefault.jpg",
              "duration": "24:12"
            },
            {
              "id": "yBy5NnLTiWQ",
              "title": "I Got Trained By the World's Deadliest Minecraft Player",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=yBy5NnLTiWQ",
              "thumbnail": "https://i.ytimg.com/vi/yBy5NnLTiWQ/maxresdefault.jpg",
              "duration": "27:55"
            },
            {
              "id": "ljppGDO4HlU",
              "title": "I Got Hunted By a Minecraft Combat Master",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=ljppGDO4HlU",
              "thumbnail": "https://i.ytimg.com/vi/ljppGDO4HlU/maxresdefault.jpg",
              "duration": "25:30"
            }
          ]
        },
        {
          "id": "flame_arc_5",
          "title": "第五章：逃離 Terminus！Minecraft 史上最致命死刑黑牢大逃亡（持續進行中）",
          "subtitle": "遭 The LAW 設伏囚禁、基岩深淵特級黑牢、破譯雷射死角與浴火大越獄",
          "summary": "在 2026 年 10 月的最新震撼主線中，FlameFrags 遭到敵對執法大軍設伏暗算，被剝奪全部兵刃重裝，押入伺服器底層最恐怖的特級死刑黑牢「Terminus」（Escaping Terminus: The Deadliest Minecraft Prison）。面對基岩壁壘、浸水黑曜石與深海長老雷射殺局，FlameFrags 憑藉鋼鐵意志與極限近戰本能徒手格殺看守奪回武器，暴力鑿穿排氣天井殺出重圍，宣告戰神回歸，精彩主線持續進行中！",
          "genesis": "在獲取虛空金庫神物後，FlameFrags 成為 The LAW 最高統帥部除之而後快的眼中釘。在荒原邊界一次力量極其懸殊的圍剿伏擊戰中，The LAW 出動了數十名重裝特種執法隊，動用壓制性緩速藥水與終界水晶地毯式轟炸。在孤軍力竭之後，FlameFrags 不幸被俘。為了永絕後患，執法隊剝奪了他所有的戰甲與武器，將其秘密押送至號稱『絕對無人生還、世界最致命監獄』的基岩黑牢 Terminus。",
          "conflict": "Terminus 建立在世界負 Y 軸最深處（Y = -60）的天然基岩空腔中，四壁完全由五重浸水黑曜石與防爆結晶封死。牢區內部不僅常駐數隻深海長老施加不可驅散的『挖掘疲勞 III』詛咒，更配備了高密度全自動守衛者雷射矩陣與全副武裝的巡邏重裝看守。囚犯被關在特製的懸空水牢中，連挪動腳步都會受到雷射鎖定。\n\n面對剝奪一切神裝的絕境，FlameFrags 毫無半分懼色。在暗無天日的水牢中，他利用獄卒換崗的間隙，冷靜觀察自動雷射砲塔的充能軌跡，以精密的計時測算出雷射在每次轉向充能時存在致命的 1.5 秒射擊死角！隨後，他利用暗中藏匿在舌底的一枚微型紅石火把碎片，在牢房換氣孔的排水溝內製造了短路，引發整片牢區的供電系統短暫跳閘停電！\n\n在警報淒厲大作、紅石探照燈熄滅的混亂瞬間，FlameFrags 宛如破籠猛虎般躍出水牢。赤手空拳的他迎著衝入牢房的重裝看守正面撲上，以凶悍的空手格鬥鎖喉奪下獄卒手中的精鋼戰刃，在短短十秒內以極限走位連續格殺三名看守，成功奪回了被扣押的專屬武器！緊接著，他揮動特製的《Terminus Breaker Pickaxe（Terminus 破獄者獄髓鎬）》，在深海長老雷射充能的間隙中，對著基岩夾層的排氣天井展開瘋狂的暴力鑿擊。伴隨著碎石飛濺與坍塌的烈焰警報，天井轟然破裂！FlameFrags 如鳳凰涅槃般浴火殺出黑牢重圍，重見陽光，向整個宇宙宣告戰神強勢歸來！",
          "lootAndAnomaly": "奪取傳奇神兵《Terminus Breaker Pickaxe（Terminus 破獄者獄髓鎬）》與典獄長特級執法印記，確立了砸碎一切神話的無敵意志。",
          "impact": "Terminus 號稱永不可攻破的死刑神話被 FlameFrags 親手砸碎，震撼了以 Lattice K 為首的統治階層，宣告戰狂永不言敗，Unstable SMP 戰火愈演愈烈！",
          "keyPlotPoints": [
            "遭 The LAW 精銳部隊多方圍捕力戰被俘，押入全服最恐怖特級死刑黑牢 Terminus",
            "在浸水黑曜石與深海長老雷射封鎖下，精準計算出雷射充能的 1.5 秒盲區",
            "利用私藏微型元件短路癱瘓監獄供電網路，徒手搏殺奪回被扣押神裝",
            "手持 Terminus 破獄者神鎬暴力鑿穿基岩夾層排氣天井",
            "在警報震天與烈焰翻滾中殺出絕境黑牢，強勢重返 Unstable SMP 宇宙，故事未完待續"
          ],
          "psychology": "「基岩是世界上最堅硬的方塊，但它依然擋不住一柄渴望自由的鎬子。Lattice K，告訴你的人，把武器磨亮一點——戰神 FlameFrags，回來了！」",
          "sourceVideos": [
            {
              "id": "8t8YBu7bdT0",
              "title": "Escaping Terminus: The Deadliest Minecraft Prison",
              "channel": "FlameFrags",
              "channelUrl": "https://www.youtube.com/@FlameFrags",
              "youtubeUrl": "https://www.youtube.com/watch?v=8t8YBu7bdT0",
              "thumbnail": "https://i.ytimg.com/vi/8t8YBu7bdT0/maxresdefault.jpg",
              "duration": "36:40"
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ],
      "channel": "FlameFrags",
      "channelUrl": "https://www.youtube.com/@FlameFrags"
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
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = UNSTABLE_DATA;
}
