/**
 * Unstable SMP Universe Database (Unstable SMP 宇宙資料庫)
 * 完整收錄：四位傳奇主角個人全紀錄、全部影片清單、劇情深度講解、意外與漏洞禁忌物品、多視角事件矩陣與冒險遊戲資料
 */

const UNSTABLE_DATA = {
  metadata: {
    title: "Unstable SMP: The Complete Lore & Chronicle",
    version: "2.0.0",
    universeName: "Unstable Universe / Unstable SMP",
    description: "Minecraft 史上最震撼的劇情式極限硬核伺服器 — 四大主角全視角故事、影片解析、意外禁忌物品與互動冒險指南",
    githubRepo: "https://github.com/hsiaoyujui114-code/unstable-smp-chronicles",
    githubPagesUrl: "https://hsiaoyujui114-code.github.io/unstable-smp-chronicles/"
  },

  // 四位核心主角完整檔案
  characters: {
    parrot: {
      id: "parrot",
      name: "Parrot (ParrotX2)",
      realHandle: "ParrotX2",
      roleTitle: "伺服器調查者 · 越獄智將 · Unstable 第一任民選國王",
      tagline: "「當伺服器的規則開始崩塌，唯有尋找代碼背後的真相才能倖存。」",
      themeColor: "#38bdf8", // Sky / Blue
      accentGlow: "rgba(56, 189, 248, 0.4)",
      badge: "INTEL & STRATEGY",
      avatar: "assets/avatars/parrot.jpg",
      skinBody: "assets/skins/parrot_3d.png",
      appearance: {
        summary: "身穿標誌性海軍藍連帽衫，配戴紅黃藍三色金剛鸚鵡羽飾耳機，眼神冷靜而睿智。",
        features: [
          "標誌性服飾：深海藍色高領兜帽風衣，袖口飾有輕靈羽翼紋理",
          "頭部配飾：模仿金剛鸚鵡色彩（紅、黃、藍三色漸變）的特製羽飾耳機",
          "神態特質：冷靜敏銳的洞察者，隨時保持防範與觀察姿態",
          "現實說明：ParrotX2 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方百萬頻道當前最新使用之形象照"
        ]
      },
      stats: {
        intellect: 98,
        strategy: 95,
        pvpCombat: 82,
        influence: 96,
        stealth: 88
      },
      personality: "冷靜敏銳的戰略家與真相追尋者。他不輕易相信任何人，善於在重重謊言中找到系統底層漏洞，但當身負王國責任時，展現出無與倫比的領導擔當。",
      biography: `Parrot 是 Unstable SMP 的靈魂敘事核心之一。從最初無意間挖出足以毀滅整個伺服器的「紅石異常按鈕」開始，他就被捲入了隱藏在日常生存背後的龐大陰謀。

面對由腐敗勢力打造的「Paragon 絕海黑牢」，他憑藉精密計算的紅石走私技巧完成不可思議的破獄脫逃；在伺服器陷入無序廝殺時，他挺身而出競選第一任國王，在王座上竭力治理風雨飄搖的 Unstable，抵禦刺殺與內部叛變。在最後的千人大內戰中，他更統帥聯合軍團直面伺服器最黑暗的命運。`,
      storyArcs: [
        {
          title: "第一章：代碼裂痕與毀滅世界的按鈕",
          subtitle: "荒野深處的下沉密室、未記錄的協議與伺服器崩壞威懾",
          summary: "Parrot 在探索伺服器極遠荒野邊境時，意外發掘了一座未記錄在服務端生成清單中的古代紅石地下密室。在密室最核心的神壇上，他挖出了一枚標註為『抹除協議』的禁忌按鈕，通電即會引發全服封包丟失與區塊崩潰。這起震撼發現打破了常規生存的假象，揭露了 Unstable SMP 背後被代碼腐化籠罩的真實面貌。",
          genesis: "起初，Parrot 只是想在遠離紛爭的邊陲荒原建立隱秘補給站，卻在挖掘地下通道時遭遇了異常的方塊阻滯。他發現常規石層下方竟嵌合著人為打磨的哭泣黑曜石與隱蔽紅石線路，順著線路深掘 40 格後，一座被徹底封閉的遠古密室赫然現世。",
          conflict: "密室內部布滿了感應線與連鎖高爆陷阱。Parrot 運用精密的水流阻絕與紅石逆向破解，層層拆解看守者留下的致命機關。當他抵達核心時，發現屏障方塊中央赫然立著一枚石質按鈕。經過紅石脈衝偵測，他震驚地意識到這是一枚能夠直接對服務端發送溢出指令的『毀滅按鈕』。面對將全服一鍵歸零的極致權力誘惑，Parrot 展現出沉穩心智，放棄盲目引爆，而是以極度精準的手法在避開服務端日誌告警的情況下將按鈕拆下封存，轉化為日後制衡強權的最高籌碼。",
          lootAndAnomaly: "成功取得《World Destroyer Button（世界毀滅紅石按鈕）》，並解讀了石板上遺留的一串神秘十六進制代碼，首次獲悉『抹除協議（Purge Protocol）』的存在。",
          impact: "這起事件使 Parrot 成為全服首位洞察伺服器本質並非普通遊戲、而是代碼隨時可能坍塌之試驗場的人。這枚按鈕成為他日後周旋於野心公會與暴虐黑手黨之間最重要的威懾底牌。",
          keyPlotPoints: [
            "邊陲荒原地下深掘，意外遭遇非自然生成的哭泣黑曜石地宮結構",
            "步步為營破除古代連鎖高爆紅石陷阱，直抵地底神壇核心",
            "脈衝檢測確認按鈕具備直接干擾服務端線程、製造區塊崩潰的非法權能",
            "克服毀滅慾望，以水流隔離與活塞位移完成無告警拆卸",
            "將毀滅按鈕秘密封存於個人隱蔽金庫，正式開啟宇宙真相調查歷程"
          ],
          psychology: "「當你手中掌握著能夠抹殺所有人努力的按鈕時，真正的力量不是按下去，而是選擇不按，並找出到底是誰把這顆按鈕放在這裡。」"
        },
        {
          title: "第二章：Paragon 絕海黑牢大越獄",
          subtitle: "基岩海深處的活體地獄、極限走私與不可思議的穿牆脫逃",
          summary: "因持續深入調查多名玩家無端失蹤的隱密名單，Parrot 觸犯了特權執法階層的禁忌，遭多名全套滿裝神甲刺客伏擊後押入號稱『絕對無法生還』的 Paragon 絕海黑牢。面對基岩壁壘與守衛者的持續疲勞詛咒，Parrot 在數週暗無天日的囚禁中制定出縝密脫逃計畫，上演了震驚全宇宙的傳奇大越獄。",
          genesis: "Parrot 在試圖與一名持有失蹤名單線索的神秘線人於中立浮島碰頭時，落入了特權階層設下的連環埋伏。在經過長達半小時的消耗戰、圖騰耗盡後力竭被捕，被剝奪全部物資押送至世界底層的孤立監牢 Paragon。",
          conflict: "Paragon 監獄通體由基岩、古代殘骸與屏障方塊構成，內部常駐多隻遠古守衛者施加永久挖掘疲勞，看守輪班毫無死角。身處絕境的 Parrot 依靠驚人的心算能力，日夜記錄衛兵巡邏的時間差，發現伺服器在保存區塊數據時會產生約 1.2 秒的加載延遲。他秘密串聯其他囚徒，透過通風漏斗微弱的物品傳輸間隙，將極限數量的穿牆紫頌果、隱身藥水與未註冊的去編碼鎬分批走私入獄。越獄當夜，Parrot 點燃預埋在供電中樞的線路引發全獄警報與守衛混亂，隨後在守衛破門瞬間服下紫頌果，藉由坐標隨機判定奇蹟般穿透基岩夾層，並在監獄頂層引爆預藏炸藥，縱身躍入無盡黑海逃出生天。",
          lootAndAnomaly: "繳獲《Smuggled Paragon Shulker（Paragon 禁忌走私潛影盒）》與典獄長隨身密匙，揭露了監獄背後龐大的人口買賣名冊。",
          impact: "Paragon 黑牢號稱不可逾越的百年神話被徹底打破，Parrot 從一名單純的調查者一躍成為全服反抗強權壓迫的精神領袖，無數受欺凌的自由玩家開始慕名投奔其麾下。",
          keyPlotPoints: [
            "中立浮島遭特權階層多重伏擊，力戰不敵遭剝奪全套裝備押入基岩黑牢",
            "於暗無天日的牢房中摸清守衛換班規律與服務端區塊保存延遲機制",
            "利用下水道微弱漏斗物流，神不知鬼不覺完成違禁紫頌果與鎬子的極限走私",
            "切斷供電中樞引發全獄大暴動，服下紫頌果精準卡穿基岩防爆夾層",
            "在漫天追兵的箭雨中炸開絕頂天井，躍入絕海完成全服史詩級大越獄"
          ],
          psychology: "「基岩或許可以阻隔實體方塊的破壞，但它永遠封鎖不住一個渴望自由且懂得利用規則漏洞的人類大腦。」"
        },
        {
          title: "第三章：王權大選與王座治理風暴",
          subtitle: "文明無序時代的領袖擔當、造勢廣場反暗殺與《治安法典》",
          summary: "黑牢瓦解後，伺服器因群龍無首陷入空前殘酷的無序割據狀態，各大土匪公會與地下黑手黨肆意屠戮弱小。為了終結叢林法則，Parrot 毅然挺身而出參選 Unstable 首任民選國王。在經歷了殘酷的政治圍剿、造勢暗殺防禦與廣場生死決鬥後，他以壓倒性票數登基加冕，推行法治憲政，正面迎戰黑暗勢力對王座的瘋狂反撲。",
          genesis: "伺服器新人死亡率飆升至歷史頂點，主城淪為強盜掠奪的屠宰場。看著無數無辜散戶的心血被毀，隱姓埋名已久的 Parrot 意識到僅靠游擊反抗無法拯救世界，必須建立合法的中央秩序與公權力體系。",
          conflict: "宣布參選後，暗中控制經濟命脈的地下黑手黨企圖以數萬顆鑽石賄賂遭 Parrot 當面痛斥。惱羞成怒的黑手黨隨即僱用全服頂級刺客團在造勢大會展開暗殺。在中央大廣場演說當天，刺客服下高階隱身藥水埋伏在鐘樓屋頂，Parrot 敏銳祭出靈魂觀測望遠鏡（Parrot's Spyglass）穿透迷霧鎖定刺客方位，反手一記預判貫穿弩箭將其當場格殺。隨後他在萬民歡呼中以絕對優勢票數贏得大選，正式登基加冕。即位後，他頒布《全服治安法典》，劃定安全交易專區，組織皇家禁衛軍打擊黑市。然而內憂外患接踵而至，邊境野心領主發動武裝叛亂，甚至連宮廷內衛都遭到黑手黨收買策反，Parrot 在王座上日夜勞心，展現出驚人的鐵腕與智慧。",
          lootAndAnomaly: "加冕獲封《The Sovereign Scepter（Unstable 國王權杖與冠冕）》，享有全服公頻最高廣播通緝權與調動國庫法典物資之權威。",
          impact: "開啟了 Unstable SMP 歷史上最繁榮的中興治理紀元，庇護了成百上千的新生代玩家，確立了文明與法治的基石，同時也徹底將他推向了舊利益集團的對立面。",
          keyPlotPoints: [
            "不忍伺服器淪為人間地獄，公開發表競選宣言角逐首任民選國王",
            "拒絕地下黑手黨的巨額賄賂收買，公開向腐敗地下黑金秩序宣戰",
            "造勢大會現場以靈魂觀測望遠鏡識破隱形狙擊手並當眾完成精準反殺",
            "全服選民公投壓倒性獲勝，於中央祭壇正式加冕為王建立法典憲政",
            "建立中央安全交易區，親率皇家禁衛軍擊潰邊境叛軍維護文明秩序"
          ],
          psychology: "「戴上冠冕的那一刻，我明白了王冠不是榮耀的裝飾，而是一條沉重到足以壓垮靈魂的鎖鏈。但我若退縮，這座世界將重歸黑暗。」"
        },
        {
          title: "第四章：揭發偽善文明與萬人內戰大決戰",
          subtitle: "烏托邦假面具撕碎、三巨頭同盟締結與決定宇宙命運的終局決戰",
          summary: "表面繁華祥和的超級文明『烏托邦（Utopia）』暗中實施人口奴役與殘酷的活體代碼抽取。Parrot 深入虎穴蒐集鐵證，在全服最高代表大會上當眾戳穿偽善帝國的謊言，引發了 Unstable SMP 史上規模最宏大的『萬人大內戰（The Great Civil War）』。Parrot 統率王國大軍，攜手 Wemmbu 與 FlameFrags 組成自由同盟，在漫天烽火中迎戰終局。",
          genesis: "邊境多個村落再度離奇消失，所有線索皆指向東方自稱人間天國的烏托邦帝國。Parrot 攜帶虛空代碼羅盤感應到了前所未有的強烈異常擾動，決定冒險微服潛入烏托邦腹地查明真相。",
          conflict: "在烏托邦富麗堂皇的宮殿地下深處，Parrot 驚駭地目睹了被囚禁在玻璃屏障內的大量失蹤玩家，他們的經驗值與屬性正被非法紅石裝置強制抽取以餵養帝國核心。Parrot 冒死拷貝了實驗日誌與受害者名冊，隨後在全服各勢力齊聚的高峰大會上，當著所有領主與萬民的面將所有鐵證公之於眾。烏托邦首腦惱羞成怒，聯合所有頑固舊勢力發動全面內戰。面對遮天蔽日的敵軍軍團，Parrot 展現出非凡的胸襟與號召力，成功聯手力量霸主 Wemmbu 與不死戰神 FlameFrags 締結三巨頭自由同盟。決戰之日，Parrot 身披王國戰袍屹立於中央要塞指揮塔，調動跨區塊軌道砲陣列壓制敵軍火力，指揮同盟大軍奮勇反攻，親手終結了偽善帝國的殘暴統治。",
          lootAndAnomaly: "收繳《Null Code Compass（虛空異常代碼羅盤）》與烏托邦地下抽取代碼核心殘卷，拼湊出完整的宇宙真相圖譜。",
          impact: "內戰的勝利徹底摧毀了全服最大的壓迫壟斷巨頭，使自由意志重回大地；這場浩劫也徹底凝聚了四大傳奇主角的命運羈絆，為整個 Unstable 宇宙寫下了永不磨滅的英雄史詩。",
          keyPlotPoints: [
            "憑藉虛空羅盤深入烏托邦幽暗地下，查獲大規模玩家奴役與代碼抽取設施",
            "峰會現場公開解密鐵證，粉碎偽善文明統治假象，引爆全服大內戰",
            "促成與 Wemmbu、FlameFrags 的歷史性會晤，結成三巨頭自由抵抗大同盟",
            "於中央盆地大決戰指揮前沿軌道砲陣地，頂住敵方數倍兵力的瘋狂猛攻",
            "全殲偽善帝國主力，為飽經滄桑的 Unstable SMP 迎來自由與曙光"
          ],
          psychology: "「歷史是由戰勝恐懼的人寫下的。我們所守護的從來不是某個虛幻的帝國，而是每一個在這片土地上自由奔跑、勇敢生存的靈魂。」"
        }
      ],
      unexpectedItems: [
        {
          name: "Parrot's Spyglass（靈魂觀測望遠鏡）",
          rarity: "MYTHIC",
          rarityColor: "#e0e7ff",
          howAcquired: "在調查禁忌迷霧時，由神秘盟友 Wifies 秘密移交。據稱鏡片內部折射著舊世界的虛空殘渣。",
          effectDesc: "不僅能大幅拉近視野，還能穿透一般的匿蹤迷霧與假名牌偽裝，成為 Parrot 破譯無數陰謀的標誌性信物。",
          glitchCode: "NBT: {UnstableTag: 'SoulLens_01', PenetrateStealth: true, Lore: ['It sees what should not exist.']}"
        },
        {
          name: "World Destroyer Button（世界毀滅紅石按鈕）",
          rarity: "ANOMALY",
          rarityColor: "#ef4444",
          howAcquired: "在荒漠地下未命名遺跡的祭壇核心挖掘出土，按下會引發周圍 16 個區塊的封包丟失與伺服器震盪。",
          effectDesc: "象徵著隨時能將一切歸零的終極威脅，Parrot 數次在被逼入絕境時以它作為最後的博弈籌碼。",
          glitchCode: "NBT: {ServerEvent: 'Packet_Overload', DestructiveRadius: 256, BannedItem: true}"
        },
        {
          name: "Smuggled Paragon Shulker（Paragon 禁忌走私潛影盒）",
          rarity: "BANNED",
          rarityColor: "#a855f7",
          howAcquired: "在 Paragon 監獄最深層的看守長密室中，利用視線盲區以活塞位移偷運出來的未註冊黑箱。",
          effectDesc: "內部裝滿了受管制的穿牆紫頌果、最高等級隱形藥水以及一把被磨平代碼序列的逃脫鎬。",
          glitchCode: "NBT: {Contraband: true, SecurityLevel: 'OMEGA', Origin: 'Paragon_Cell_00'}"
        },
        {
          name: "The Sovereign Scepter（Unstable 國王權杖與冠冕）",
          rarity: "ROYAL",
          rarityColor: "#facc15",
          howAcquired: "在全服公開選民大會獲勝登基時加冕，由初代管理者遺留的法典金錠鍛造而成。",
          effectDesc: "擁有在全伺服器公頻發佈最高等級通緝令、指派禁衛軍以及調動國庫儲備的合法權能。",
          glitchCode: "NBT: {Role: 'Monarch', Realm: 'Unstable_SMP', BroadcastPermission: true}"
        },
        {
          name: "Null Code Compass（虛空異常代碼羅盤）",
          rarity: "GLITCHED",
          rarityColor: "#06b6d4",
          howAcquired: "在追蹤不存在的失蹤文明時，羅盤指針意外脫離磁極，瘋狂指向世界底層基岩下方的亂碼座標。",
          effectDesc: "能夠感應伺服器中代碼異常擾動的區域，提前預警獵人或地下勢力的逼近。",
          glitchCode: "NBT: {Target: 'NULL_ENTITY', LodestoneTrack: false, AnomalyFreq: 404}"
        }
      ],
      videos: [
        {
          id: "soYelcGVPac",
          title: "This Button Destroys the World",
          titleZh: "這顆按鈕能毀滅整個世界",
          publishDate: "2024-04-27",
          duration: "24:15",
          thumbnail: "https://i.ytimg.com/vi/soYelcGVPac/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=soYelcGVPac",
          summary: "故事的起點！Parrot 在探索中意外挖出一座被封印的紅石密室，中央矗立著足以重置伺服器數據的禁斷按鈕。本集奠定了整個 Unstable Universe 的世界觀，揭示了伺服器底層隨時可能崩塌的致命隱患。",
          keyMoments: [
            "挖掘到違規的基岩夾層密室",
            "測試按鈕觸發伺服器全服掉幀與閃電警報",
            "引發全服強者對該按鈕座標的瘋狂搜尋"
          ],
          unexpectedLoot: "World Destroyer Button（世界毀滅紅石按鈕）"
        },
        {
          id: "6dtNsa-MGs8",
          title: "I Broke into Minecraft's Most Secure Prison",
          titleZh: "我闖入了 Minecraft 最森嚴的 Paragon 黑牢",
          publishDate: "2024-06-09",
          duration: "31:40",
          thumbnail: "https://i.ytimg.com/vi/6dtNsa-MGs8/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=6dtNsa-MGs8",
          summary: "Parrot 為了營救被非法囚禁的盟友並搜集罪證，偽裝身份主動潛入全服戒備最森嚴的 Paragon 監獄。在層層守衛與致命陷阱中，他利用精密時鐘與走私物資引發內部大暴動並成功脫逃！",
          keyMoments: [
            "避開多層哨塔自動弓箭矩陣與守衛者激光",
            "在牢房地板夾層藏匿走私潛影盒",
            "引爆主控制室珍珠傳送陣完成極限脫出"
          ],
          unexpectedLoot: "Smuggled Paragon Shulker & Guard Master Key"
        },
        {
          id: "unstable_parrot_hunt",
          title: "I Got Hunted by Minecraft's Deadliest Players",
          titleZh: "我遭到全伺服器最致命的賞金獵人追殺",
          publishDate: "2024-06-30",
          duration: "28:50",
          thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=ParrotX2+Unstable+SMP+Hunted",
          summary: "因越獄事件名震全服後，各大公會聯合開出天價懸賞。Parrot 在三大生態系中穿梭逃亡，利用地貌優勢、自製地雷陣反殺多名頂尖 PvP 殺手，展現極致的智謀反擊。",
          keyMoments: [
            "冰原峽谷滑行風箏戰術",
            "利用地獄門重疊機制甩掉第一波追獵者",
            "首次啟動 Parrot's Spyglass 提前 300 格鎖定伏兵"
          ],
          unexpectedLoot: "Parrot's Spyglass（靈魂觀測望遠鏡）"
        },
        {
          id: "unstable_parrot_king",
          title: "I Became King of the Unstable SMP",
          titleZh: "我登基成為 Unstable SMP 的第一任國王",
          publishDate: "2024-09-12",
          duration: "35:10",
          thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=ParrotX2+Unstable+SMP+King",
          summary: "全服群龍無首、混亂升級之際，Parrot 發起大選宣言。面對黑金勢力與暗殺陰謀，他組建公正同盟並在全服大會上力排眾議加冕為王，制定了第一部伺服器和平憲章。",
          keyMoments: [
            "發表震撼全服的中央廣場演說",
            "挫敗刺客的 TNT 礦車自殺式襲擊",
            "取得全服首批領主的效忠誓詞與加冕王冠"
          ],
          unexpectedLoot: "The Sovereign Scepter（國王權杖）"
        },
        {
          id: "unstable_parrot_100days",
          title: "King of the Unstable SMP: The Reign",
          titleZh: "在 Unstable SMP 擔任國王的極限統治紀實",
          publishDate: "2024-11-20",
          duration: "42:15",
          thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=ParrotX2+King+Unstable+SMP",
          summary: "王權統治下的殘酷現實：物資短缺、黑手黨在暗處滋生、邊疆領主密謀造反。Parrot 在執政期間經歷了最考驗人性的抉擇，如何在暴政與滅亡之間維持王國的脆弱平衡？",
          keyMoments: [
            "平定西境礦業同盟的武裝叛亂",
            "查抄地下走私集團的非法複製窩點",
            "發現王宮地下暗藏的虛空代碼羅盤"
          ],
          unexpectedLoot: "Null Code Compass（虛空異常代碼羅盤）"
        },
        {
          id: "unstable_parrot_civilwar",
          title: "Unstable SMP: Civil War FINALE",
          titleZh: "Unstable SMP：萬人內戰大結局",
          publishDate: "2025-02-15",
          duration: "48:30",
          thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=ParrotX2+Unstable+SMP+Civil+War+Finale",
          summary: "整個系列的史詩最高潮！四大陣營、上千名武裝玩家在主城盆地打響決定世界歸宿的最後戰役。Parrot 身披殘破戰甲，指揮前線部隊與空中山羊大砲，與昔日對手一同改寫伺服器命運。",
          keyMoments: [
            "千人軍團衝撞主城護城河基岩防線",
            "天空要塞墜落與最後的王座守衛戰",
            "四大主角視角匯聚，迎接新世界的黎明"
          ],
          unexpectedLoot: "Shattered Crown Shard & Core of Unstable"
        }
      ]
    },

    wemmbu: {
      id: "wemmbu",
      name: "Wemmbu",
      realHandle: "Wemmbu",
      roleTitle: "神級戰力泰坦 · 禁忌金庫掠奪者 · 帝國文明統治者",
      tagline: "「規則是弱者為自保而制定的，而強者直接重構整個文明。」",
      themeColor: "#f59e0b", // Amber / Gold
      accentGlow: "rgba(245, 158, 11, 0.4)",
      badge: "MIGHT & WEALTH",
      avatar: "assets/avatars/wemmbu.jpg",
      skinBody: "assets/skins/wemmbu_3d.png",
      appearance: {
        summary: "一頭俐落黑髮，頭頂配戴暗紫色龍角/惡魔雙角與精緻銀紫王冠（Tiara），身披暗色戰袍，霸氣十足。",
        features: [
          "標誌性特徵：頭部兩側高聳的暗紫色龍角 / 惡魔尖角",
          "專屬頭飾：象徵至高統治權限的銀紫色細緻王冠（Tiara）",
          "服裝風格：深色高階合金戰鎧與長袍，散發令人窒息的壓迫感",
          "現實說明：Wemmbu 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方頻道當前最新使用之標誌性頭冠形象照"
        ]
      },
      stats: {
        intellect: 88,
        strategy: 92,
        pvpCombat: 97,
        influence: 94,
        stealth: 79
      },
      personality: "霸氣外露、擁有壓倒性實力與財富野心的霸主。他對弱者的哀鳴無動於衷，卻對出生入死的夥伴（如 Eggchan）有著至死不渝的承諾。只要認定目標，連神級金庫與整個伺服器都無法阻擋他的鐵蹄。",
      biography: `Wemmbu 是 Unstable SMP 世界中象徵「絕對霸權與財富力量」的頂點人物。從隻身強行突破全服公認無法攻破的「非法基岩保險庫」開始，他就成為了全服懸賞金最高的通緝犯。

他不屑於小打小鬧，而是直接在極限硬核環境下建立起號稱最繁盛的鋼鐵帝國；面對老牌勁旅 PrinceZam 帝國的宣戰，他以碾壓般的戰術摧毀了對方的整座都城。在經歷了無數背叛與黑手黨的暗算後，Wemmbu 更是做出了「親手摧毀 Unstable SMP」以終結腐敗輪迴的極端抉擇。`,
      storyArcs: [
        {
          title: "第一章：突襲全服最非法的地下金庫",
          subtitle: "基岩最深處的重裝防線、精確珍珠穿透與單兵掠空黑金庫",
          summary: "數個全服早期的大型寡頭公會組建秘密同盟，利用地獄門坐標重疊漏洞複製了海量神裝，並將這些數以億計的非法資產封存於基岩層 40 格以下的特製防爆黑金庫。Wemmbu 孤身一人鎖定目標，耗時數日精確計算活塞防爆盲區與終界珍珠卡角，以不可思議的單兵強攻撕裂防線，將整座地下金庫的神級儲備洗劫一空，一戰名震全宇宙。",
          genesis: "初入伺服器的 Wemmbu 很快發現普通資源早已被各大老牌聯盟瓜分殆盡，弱小散戶只能任人宰割。在探訪深層廢棄礦道時，他無意間探測到了地底深處傳來的微弱紅石時鐘震動，順藤摸瓜確認了這座守備森嚴的黑金庫坐標。",
          conflict: "黑金庫四周鋪設了多層防水層、浸水黑曜石與震動感應連鎖警報，內部更有三名滿編頂級裝備的守衛日夜輪守。Wemmbu 沒有選擇笨拙的挖掘，而是爬上相鄰天然溶洞頂部，精確計算出一個僅有 0.25 格縫隙的活塞推動死角。他朝著夾縫投擲終界珍珠，在極限毫秒內瞬移擠入核心走廊。警報拉響瞬間，留守的三名頂級精英殺手手持附魔金蘋果撲向入侵者。Wemmbu 毫無懼色，揮動戰斧展開近身跳劈，憑藉狂暴的壓制節奏與盾牌瞬切，在狹窄走廊完成一穿三的震撼反殺。隨後他用高效鎬砸開內庫，將數十個裝滿滿級下界合金套裝、附魔金蘋果與超越版本極限神兵的潛影盒洗劫一空，在外部援軍趕到前藉由預設的靈魂沙水梯從容撤離。",
          lootAndAnomaly: "奪取傳奇神兵《The Crucible & Gambit（天罰破甲裁決巨刃）》以及堆積如山的滿編違法複製神裝，一舉躍居全服物資首富階層。",
          impact: "此役徹底粉碎了寡頭聯盟對神級資源的絕對壟斷，Wemmbu 一戰封神，但也直接被暗黑聯盟列為全服懸賞金最高的頭號通緝犯，引發了後續席捲全服的大圍剿。",
          keyPlotPoints: [
            "深層礦道探勘鎖定寡頭公會非法基岩黑金庫的隱密坐標",
            "連續數日潛伏偵察，計算活塞推動週期找出 0.25 格的物理防禦死角",
            "精準珍珠拋擲瞬移穿透外圍防爆結界，觸發全庫最高防禦警報",
            "狹窄走廊以 1v3 逆境強攻連續斬殺三名滿裝精英守衛",
            "奪取神刀 The Crucible，席捲數十個潛影盒頂級物資並從容脫逃"
          ],
          psychology: "「如果這座世界的規則就是強者通吃，那我 Wemmbu 就會成為最強的那一個。你們用謊言和漏洞偷來的財富，今天由我親手收繳。」"
        },
        {
          title: "第二章：全服大追捕中的不可捕捉者",
          subtitle: "獵人聯合軍團的全面圍剿、雷暴空戰與雪峰反殺奇蹟",
          summary: "金庫失竊引發全服震動，受辱的寡頭聯盟開出天文數字的懸賞，集結了超過 30 名滿裝頂尖 PVP 高手組成的聯合搜捕大軍展開全圖追殺。Wemmbu 不僅未曾躲藏，反而以整座大陸為獵場，在狂風暴雨的海面與險峻雪山中將追捕軍團逐一擊潰，成為令全服聞風喪膽的『不可捕捉之 Apex Predator』。",
          genesis: "全服廣播瘋狂輪播 Wemmbu 的懸賞令，無論走到哪裡都會引來蜂擁而至的賞金獵人。面對連綿不絕的敵意，Wemmbu 決定以一場無可爭議的血腥反擊，徹底打碎所有獵人的貪婪幻想。",
          conflict: "追捕軍團兵分三路將 Wemmbu 包圍於沿海盆地。正值雷暴天候降臨，追兵乘著鞘翅從千米高空俯衝襲擊。身陷重圍的 Wemmbu 祭出三叉戟，借由激流與引雷附魔沖天而起，在空中以超高速旋轉衝撞。他在雲層與閃電中將敵方空中編隊撕成碎片，連續將多名鞘翅高手直接凌空擊墜於怒濤之中。隨後，他將殘存的陸面重裝部隊誘入陡峭的雪山峽谷。在狹窄的峭壁通道上，Wemmbu 利用預先鋪設的深層積雪陷阱使敵軍集體陷入冰凍失足，並在制高點引爆 TNT 引發大雪崩。最後面對敵軍統帥的求和，Wemmbu 拔出 The Crucible 巨刃無情裁決，全殲追擊部隊。",
          lootAndAnomaly: "收割《Apex Predator's Trophy（獵王之誓下界合金顱骨）》與十餘套被擊落頂級高手的完整軍備補給。",
          impact: "這場以少勝多的戰役徹底擊潰了賞金獵人聯盟的心理防線，全服公會意識到 Wemmbu 擁有的單兵作戰能力已非凡人所能抗衡，再無任何隊伍敢輕易接下針對他的追殺令。",
          keyPlotPoints: [
            "全服天價懸賞令發布，三十餘名頂級高手組成聯合搜繳軍團步步進逼",
            "雷暴天氣借助三叉戟激流化作空中狂雷，斬落敵方鞘翅制空編隊",
            "險峻雪山通道設計冰雪陷阱，限制敵方重甲步兵的移動速度",
            "居高臨下引發連環雪崩與高爆陷阱，將敵軍主力部隊全面打殘",
            "親斬追擊聯盟統帥，宣告全服大搜捕行動以獵人全軍覆沒徹底告終"
          ],
          psychology: "「你們自稱是捕獵我的狼群，但當雷暴與風雪降臨時，你們才終於明白——站在暴風雨中央的，自始至終只有我一頭猛獸。」"
        },
        {
          title: "第三章：建立最強文明與摧毀 PrinceZam 帝國",
          subtitle: "荒原拔起的鋼鐵要塞、跨區塊軌道砲與帝國之城的覆滅",
          summary: "度過追捕風暴後的 Wemmbu 意識到建立永久威懾需要基於城邦文明的組織力量。他投入金庫搶來的全部財富，創立了號稱全服最先進的鋼鐵泰坦帝國。然而他的崛起招致了老牌霸權 PrinceZam 帝國的宣戰偷襲。憤怒的 Wemmbu 以超現代軌道加農砲戰術回擊，親率部隊將敵對帝國連根拔起，徹底從地圖上抹除。",
          genesis: "Wemmbu 在平原腹地建立了集工業熔煉、自動防空與深層基岩避難所於一體的巨型泰坦文明。然而盤踞西方的老牌帝國 PrinceZam 視其為眼中釘，在無宣戰預警的情況下派遣精銳小隊夜襲 Wemmbu 的邊境前哨站並屠殺盟友，點燃了文明大戰的導火線。",
          conflict: "面對敵軍的公然挑釁，Wemmbu 放棄了傳統的步兵推進，而是展現了他可怕的工程研發才華。他在己方要塞邊界架設了長達上百格的『超遠程跨區塊軌道 TNT 大砲』。當夜幕籠罩大地，Wemmbu 裝填數千枚高爆 TNT，按下發射終端。刺耳的空氣撕裂聲中，軌道砲穿透數個未加載區塊，精準落入 PrinceZam 王城的中央宮殿與城防核心。伴隨著連綿不絕的火光與轟鳴，號稱不可攻破的巨石城牆在幾分鐘內徹底坍塌。隨後，Wemmbu 手持巨刃帶領親衛隊從破口殺入，在燃燒的廢墟宮殿前迎戰 PrinceZam 的皇家近衛軍。Wemmbu 勢不可擋，以一敵眾斬碎敵方最後一道防線，將整座帝國首都化為火海焦土。",
          lootAndAnomaly: "研發並收錄《Orbital Cannon Targeting Core（軌道加農砲終端）》，並收繳了 PrinceZam 帝國的全部國庫金庫存儲。",
          impact: "此役宣告了舊帝國霸權時代的終結與 Wemmbu 泰坦帝國在 Unstable SMP 的至高統治地位，確立了現代化遠程紅石科技在伺服器軍事對抗中的絕對主導權。",
          keyPlotPoints: [
            "建立全服工業水平最高的泰坦要塞文明，吸引大量厭倦紛爭的散戶定居",
            "遭遇 PrinceZam 帝國撕毀條約的無恥偷襲，誓言發動滅國級報復",
            "秘密攻堅設計跨區塊超遠程軌道 TNT 大砲，完成精確彈道校準",
            "萬彈齊發實施跨地圖毀滅性轟炸，瞬間夷平 PrinceZam 核心城防",
            "長驅直入親手斬斷敵方帝國戰旗，將傲慢的舊霸權徹底從地圖抹除"
          ],
          psychology: "「我的帝國從不主動尋釁，但也絕不吞下任何侮辱。如果你選擇踏入我的領地揮動屠刀，那就準備好承擔整座文明從地圖上消失的代價。」"
        },
        {
          title: "第四章：終結腐敗輪迴！親手引爆 Unstable SMP",
          subtitle: "摯友被縛的絕命營救、對世界道德的死心與最終毀滅抉擇",
          summary: "當發現伺服器底層已被地下黑手黨的洗錢網絡與腐敗管理階層徹底蛀空時，Wemmbu 逐漸看透了這個世界的荒誕輪迴。尤其在生死之交 Eggchan 遭到黑手黨綁架勒索後，Wemmbu 孤身殺穿黑手黨總部救出摯友，但深感道德修復無望的他，最終做出了極端而悲壯的抉擇：親手引爆埋藏於地脈的終極炸藥陣列，埋葬 Unstable SMP 的一切罪惡。",
          genesis: "伺服器表面上的大和平掩蓋著更深層的骯髒交易。地下黑手黨為了逼迫 Wemmbu 交出國庫所有權，卑劣地設伏綁架了 Wemmbu 唯一的生死盟友 Eggchan，並在公頻限時威脅：若不交出所有裝備，將當眾處死 Eggchan。",
          conflict: "Wemmbu 沒有絲毫妥協，他攜帶全部家當直奔黑手黨總部老巢。面對上百名武裝歹徒與密布的陷阱陣列，Wemmbu 化作一尊狂暴修羅，憑藉 The Crucible 巨刃的撕裂護甲效果強行開路，在最後 3 秒的倒數前斬殺處刑看守，將渾身是傷的 Eggchan 救入懷中。然而救出摯友後的 Wemmbu 凝視著遍地狼藉與背叛者的屍體，內心湧起無邊的疲倦。他明白只要這座世界的代碼與貪婪依然存在，無論消滅多少敵人，新的惡霸總會捲土重來。在把 Eggchan 送往遠離戰火的安全邊界後，Wemmbu 獨自返回伺服器中心。他接通了耗費數週在世界地脈深處布設的數萬枚連鎖 TNT 引信，在漫天月光下平靜地按下了《Annihilation Remote Detonator（虛空重置引爆終端）》。大地開裂、天塌地陷，這座充斥著背叛與榮耀的 Unstable SMP 在他眼前化為壯烈的火海星塵。",
          lootAndAnomaly: "持有《Annihilation Remote Detonator（虛空重置引爆終端）》與保存著兩人約定的《Eggchan’s Keepsake Book（摯友的血盟筆記）》。",
          impact: "Wemmbu 親手為 Unstable SMP 畫下了無可挽回的震撼休止符。他從萬人景仰的鐵血霸主變成了爭議無盡的滅世狂徒，但這場終極引爆也徹底淨化了盤根錯節的腐朽利益鏈，成為全宇宙玩家心中永遠的傳奇哀歌。",
          keyPlotPoints: [
            "黑手黨卑鄙綁架摯友 Eggchan 敲詐勒索，觸碰 Wemmbu 唯一不可逾越的逆鱗",
            "單刀赴會血洗黑手黨總舵，在最後幾秒極限救出夥伴破除必死之局",
            "送別摯友遠赴安寧之所，徹底看清伺服器制度性腐敗與永無休止的貪婪輪迴",
            "返回世界核心，接通蔓延數萬格的地下連鎖引爆電路網絡",
            "從容按下引爆終端，在撼天動地的火光與廢墟中親手終結 Unstable 宇宙時代"
          ],
          psychology: "「如果這座世界只剩下背叛、貪婪與對弱者的掠奪，那它的繁華不過是一場病態的幻覺。今天由我親手點火，讓這片腐朽的焦土在烈焰中重獲安寧。」"
        }
      ],
      unexpectedItems: [
        {
          name: "The Crucible & Gambit（天罰破甲裁決巨刃）",
          rarity: "MYTHIC",
          rarityColor: "#fbbf24",
          howAcquired: "從非法基岩金庫最深處的水晶祭壇強行搶奪出土的失傳兵器，附魔屬性超越常規上限。",
          effectDesc: "揮動時自帶破盾衝擊波與撕裂護甲效果，是 Wemmbu 橫掃各大文明軍團的標誌性凶器。",
          glitchCode: "NBT: {Weapon: 'TheCrucible', Sharpness: 7, ArmorPierce: 0.45, Lore: ['Forged in the heart of stolen vaults']}"
        },
        {
          name: "Eggchan’s Keepsake Book（摯友的血盟筆記）",
          rarity: "RELIC",
          rarityColor: "#34d399",
          howAcquired: "在黑手黨圍攻戰役中，摯友 Eggchan 在捨身掩護撤退前塞入他懷中的隨身日記本。",
          effectDesc: "記錄著兩人在極限生存中的暗號、座標與未竟心願，是 Wemmbu 在冰冷征服之路上唯一的救贖與執念。",
          glitchCode: "NBT: {BoundPlayer: 'Eggchan', EmotionalWeight: 'MAX', MemoryUnlocked: true}"
        },
        {
          name: "Sky Civilization Grav-Core（浮空島反重力神核）",
          rarity: "ANOMALY",
          rarityColor: "#38bdf8",
          howAcquired: "在意外航行至未被載入的天空廢棄文明時，自浮空祭壇底座強行撬下的動力核心。",
          effectDesc: "使持有者在空中受擊時免除跌落傷害，並能短暫進行二段跳躍衝刺，大幅強化空戰突襲能力。",
          glitchCode: "NBT: {GravityModifier: -0.6, FallImmunity: true, Origin: 'LostSkyIsle'}"
        },
        {
          name: "Banned Vault God-Axe（禁斷碎盾神斧）",
          rarity: "BANNED",
          rarityColor: "#f87171",
          howAcquired: "洗劫違規金庫時所獲，由黑市工匠利用非法 NBT 標籤合成出的超常規格鬥斧。",
          effectDesc: "破盾冷卻時間長達 10 秒，且暴擊時自帶短暫震退失明效果，讓對手毫無反抗之機。",
          glitchCode: "NBT: {Efficiency: 6, DisableShieldTime: 10, BlackMarketOrigin: true}"
        },
        {
          name: "Orbital Cannon Control Remote（軌道加農砲發射遙控儀）",
          rarity: "SUPERWEAPON",
          rarityColor: "#ef4444",
          howAcquired: "親手召集全服最頂尖紅石工程師，在高空 Y=320 建造全伺服器第一台軌道轟炸陣列時裝配的核心終端。",
          effectDesc: "輸入座標即可在 3 秒內召喚從天而降的 500 發高壓 TNT 齊射，瞬間將敵軍主基地化為熔岩坑。",
          glitchCode: "NBT: {Device: 'Orbital_Terminal', TNT_Burst: 500, Range: 'UNLIMITED'}"
        }
      ],
      videos: [
        {
          id: "s4Qm81fKfyk",
          title: "Breaking Into Minecraft's Most Illegal Vault",
          titleZh: "闖入 Minecraft 最非法的地下禁忌金庫",
          publishDate: "2024-05-04",
          duration: "26:30",
          thumbnail: "https://i.ytimg.com/vi/s4Qm81fKfyk/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=s4Qm81fKfyk",
          summary: "Wemmbu 在 Unstable 的成名之作！深入千尺地下，面對水簾陷阱、黑曜石厚牆與哨兵守衛，他憑藉極致的精準計算與神級裝備強行炸開非法金庫，搶走價值連城的違禁神物。",
          keyMoments: [
            "利用沙子與 TNT 破開水浸防爆牆",
            "在警報大作中 1v3 瞬秒守庫長老",
            "奪得全服第一把超越上限的 The Crucible 巨刃"
          ],
          unexpectedLoot: "The Crucible & Illegal Enchanted Gear"
        },
        {
          id: "unstable_wemmbu_catch",
          title: "It's Impossible to Catch this Player",
          titleZh: "要抓到這個玩家根本是不可能的任務",
          publishDate: "2024-05-25",
          duration: "29:10",
          thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Wemmbu+It%27s+Impossible+to+Catch+this+Player",
          summary: "洗劫金庫後引發全服通緝！十幾支精銳獵殺小隊圍追堵截，Wemmbu 展現了天花板級別的逃生技巧與反殺操作，將整場追捕變成了他個人的華麗狩獵場。",
          keyMoments: [
            "利用鞘翅穿過僅一格寬的岩漿瀑布縫隙",
            "在末地折躍門反設拌線陷阱埋葬追兵",
            "反搶獵人首領的所有物資並從容離去"
          ],
          unexpectedLoot: "Master Hunter's Stolen Crest"
        },
        {
          id: "unstable_wemmbu_civ",
          title: "I Created Minecraft's Greatest Civilization",
          titleZh: "我打造了 Minecraft 最不可摧毀的強盛文明",
          publishDate: "2024-06-15",
          duration: "33:45",
          thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Wemmbu+I+Created+Minecraft%27s+Greatest+Civilization",
          summary: "Wemmbu 將掠奪來的財富投入帝國建設，召集工匠在巨型盆地中拔地而起一座賽博朋克與中世紀結合的鋼鐵要塞，設立了全服最完備的武器庫與防禦工事。",
          keyMoments: [
            "建造全自動防空天幕與反珍珠陣列",
            "任命 Eggchan 為帝國副官與物資總管",
            "迎接來自伺服器各方勢力的稱臣使節"
          ],
          unexpectedLoot: "Architect's Imperial Seal"
        },
        {
          id: "5hG_nAYEC2g",
          title: "Why I Destroyed the Unstable SMP",
          titleZh: "為什麼我決定毀滅 Unstable SMP",
          publishDate: "2024-07-08",
          duration: "38:20",
          thumbnail: "https://i.ytimg.com/vi/5hG_nAYEC2g/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=5hG_nAYEC2g",
          summary: "震撼全服的思想轉折！當看透了伺服器內部不可救藥的黑手黨腐敗與暗殺勾結，Wemmbu 毅然按下引爆整個地圖連鎖反應的終極裝置，用烈火與廢墟洗禮這片土地。",
          keyMoments: [
            "在審訊室直面黑手黨高層的偽善自白",
            "親自點燃連接伺服器主能源的爆破導線",
            "主城在熊熊烈火中化為焦土的震撼長鏡頭"
          ],
          unexpectedLoot: "Orbital Cannon Blueprint & Ashes of the Realm"
        },
        {
          id: "unstable_wemmbu_sky",
          title: "I Discovered a Minecraft Sky Civilization",
          titleZh: "我發現了飄浮在雲層之上的天空失落文明",
          publishDate: "2024-10-30",
          duration: "31:05",
          thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Wemmbu+Sky+Civilization+Unstable+SMP",
          summary: "浩劫重生後，Wemmbu 駕駛自製飛行器探索伺服器邊境，意外突破雲層高度限制，在 Y=300 發現了從未記載在伺服器檔案裡的古代浮空島群與反重力科技！",
          keyMoments: [
            "穿越狂風與低氧空域的危險登島過程",
            "破解守護浮空神廟的古代遠古守衛者機關",
            "挖掘出散發淡藍微光的 Sky Grav-Core 核心"
          ],
          unexpectedLoot: "Sky Civilization Grav-Core（浮空島反重力神核）"
        },
        {
          id: "unstable_wemmbu_mafia",
          title: "Unstable SMP: The Mafia",
          titleZh: "Unstable SMP：黑手黨決戰風暴",
          publishDate: "2025-01-21",
          duration: "40:10",
          thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Wemmbu+Unstable+SMP+The+Mafia",
          summary: "黑手黨綁架了 Eggchan 並威脅 Wemmbu 交出所有神級裝備。Wemmbu 孤身殺入黑手黨地下總部，以近乎瘋狂的火力與戰術徹底踏平犯罪帝國，救出摯友！",
          keyMoments: [
            "破門而入單挑黑手黨四大貼身保鏢",
            "在炸藥倒數計時最後 3 秒抱出 Eggchan",
            "將黑手黨教父逼入牆角完成宿命清算"
          ],
          unexpectedLoot: "Eggchan's Keepsake Book & Mafia Vault Key"
        }
      ]
    },

    spoke: {
      id: "spoke",
      name: "Spoke (SpokeIsHere)",
      realHandle: "SpokeIsHere",
      roleTitle: "漏洞神偷 · 陷阱詭術大師 · 黑手黨致命雙面臥底",
      tagline: "「只要伺服器還在運算，就沒有我找不出的漏洞與陷阱。」",
      themeColor: "#10b981", // Emerald / Toxic Green
      accentGlow: "rgba(16, 185, 129, 0.4)",
      avatar: "assets/avatars/spoke.jpg",
      skinBody: "assets/skins/spoke_3d.png",
      appearance: {
        summary: "標誌性的螢光翠綠色連帽衫（Green Hoodie），金棕色微卷髮絲從兜帽垂下，嘴角帶著一抹招牌壞笑。",
        features: [
          "標誌性服飾：高飽和度螢光綠色運動連帽衫（Iconic Green Hoodie）",
          "面部神韻：嘴角揚起標誌性的戲謔與自信微笑（Signature Smirk）",
          "角色氣質：混亂與代碼漏洞的狂熱藝術家，行動神出鬼沒",
          "現實說明：Spoke 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方百萬頻道當前最新使用之綠衣招牌頭像"
        ]
      },
      stats: {
        intellect: 96,
        strategy: 93,
        pvpCombat: 84,
        influence: 86,
        stealth: 99
      },
      personality: "幽默搞怪的外表下藏著令人膽寒的極限智商與破壞慾。他是無序混亂的化身，對伺服器底層機制瞭若指掌。他以玩弄強大勢力為樂，無論是富豪帝國還是殘暴黑手黨，最後都淪為他惡作劇陷阱的犧牲品。",
      biography: `Spoke 是 Unstable SMP 開播初始就引爆整個宇宙的傳奇引路人。他在系列揭幕之際就聯手夥伴發現了震撼伺服器的古老漏洞，直接預告了世界的不穩定本質。

他的事蹟充满了令人瞠目結舌的荒誕與精妙：從洗劫超過 10,000,000 件非法複製裝備、以假貨和陷阱逼得全服首富破產，到孤身潛伏進橫行霸道的黑手黨擔任雙面間諜，在最關鍵一刻將整個犯罪家族連根拔起。在面對「不存在的玩家」與代碼亂碼狂潮時，他更是唯一的代碼引路人。`,
      storyArcs: [
        {
          title: "第一章：啟動毀滅伺服器的古老漏洞",
          subtitle: "宇宙篇章的揭幕之作、方塊更新阻斷與極限卡頓引擎",
          summary: "作為整個 Unstable SMP 系列的揭幕奠基人，Spoke 與戰友 Jamato 在無意中發掘了 Minecraft 服務端在多線程處理與實體碰撞檢測上的致命缺陷。透過極度廉價的音符盒、投擲器與紅石時鐘鏈接，他向全宇宙展示了如何讓整座伺服器的物理運算徹底陷入癱瘓，親手點燃了 Unstable SMP『不穩定性』的核心主線導火線。",
          genesis: "伺服器剛開荒之時，所有人都忙於採集木頭與挖掘鐵礦。而對循規蹈矩感到無比厭倦的 Spoke 帶著夥伴 Jamato 脫離了文明保護區，深入遠方無人探索的邊境邊界，試圖測試服務端在特定邊界區塊重載時的抗壓極限。",
          conflict: "在邊界的一座天然裂谷底部，Spoke 利用特殊方塊更新阻斷機制（BUD）與漏斗的高頻實體檢測，巧妙拼裝了一台僅佔地數格的『時空運算卡頓器』。當紅石信號閉合的那一刻，服務端主線程被強行塞滿無效的實體尋路請求，全服 TPS 在數秒之內從滿幀 20 驟降至令人窒息的 2.5。全服所有在線玩家的聊天公頻、方塊破壞與移動同步瞬間陷入卡死與亂碼。Spoke 在監控面板上平靜地記錄下服務端的崩潰閾值，並在伺服器即將被自動看門狗（Watchdog）強制重啟的前三秒，果斷切斷了電源。這場極限操作完美證明了世界底層規則的脆弱，並拉開了整個不穩定宇宙的傳奇序幕。",
          lootAndAnomaly: "研發並收錄《Chronos Glitch Core（時空漏洞核心）》，掌握了利用毫秒級時序差引發區塊實體過載的終極代碼密匙。",
          impact: "本集作為 Unstable Universe 的開山首部曲，確立了全系列的敘事基調——『代碼漏洞並非系統錯誤，而是強者手中的終極兵器』，使 Spoke『漏洞大師與規則玩弄者』的名號響徹全宇宙。",
          keyPlotPoints: [
            "與 Jamato 攜手脫離常規生存軌跡，深入邊界山谷探測服務端承載極限",
            "利用廉價音符盒與活塞設計出高頻方塊更新死循環引擎",
            "啟動裝置引發全服 TPS 斷崖式暴跌至 2.5，製造全服時空凝滯奇觀",
            "在服務端即將崩潰重啟的倒數三秒精準斷電，消除系統日誌追蹤",
            "在筆記中寫下漏洞核心代碼，正式揭開 Unstable SMP 宇宙篇章"
          ],
          psychology: "「規則存在的唯一意義，就是等待著有人找到那條未被修復的代碼裂縫，然後笑著將它撕開一條縫隙，看看背後藏著什麼秘密。」"
        },
        {
          title: "第二章：地下物流截擊！狂偷一千萬件複製神裝",
          subtitle: "基岩黑產主動脈的暗渠截流、千萬神級物資入庫與經濟震盪",
          summary: "一個盤踞在基岩夾層的違規老手集團秘密研發出全自動的複製物資農場，企圖囤積千萬級裝備武裝私軍掌控伺服器。Spoke 憑藉對紅石物流的敏銳嗅覺順藤摸瓜找到地下管道，以精妙絕倫的漏斗分流暗渠在數小時內將超過 10,356,000 件複製神裝席捲一空，以最荒誕滑稽的方式摧毀了違規集團的霸權野心。",
          genesis: "Spoke 在黑市中偶然撿到一個標註有亂碼序列號的神秘潛影盒，盒內裝滿了超越常規產量的附魔金蘋果。他敏銳意識到地下深處必定存在一座規模龐大的非法複製農場，隨即攜帶消音鏟展開了長達數千格的地下地質探勘。",
          conflict: "經過無數次挖掘與回聲探測，Spoke 終於在基岩深處挖穿了一堵人工加固的哭泣黑曜石牆，映入眼簾的是令人瞠目結舌的龐大物流網絡——數百條紅石水流管道與漏斗正在晝夜不息地運送著剛複製出來的滿級下界合金套裝、不死圖騰與附魔金蘋果。Spoke 沒有選擇向管理員舉報，而是露出了招牌的戲謔微笑。他像一名頂級外科醫生一樣，在敵方主傳輸管道正下方悄然挖出一條長條形暗渠，安裝了反向觸發的比較器漏斗分流閥。在接下來的數小時裡，巨量物資被無聲無息地分流至他深埋在相鄰區塊的數百個隱秘潛影盒倉庫中。當違規集團成員興奮地趕來查驗時，箱內空無一物，只有中央立著一面 Spoke 專屬的搞怪綠色小丑旗。",
          lootAndAnomaly: "收割不可思議的《10,356,000 Duped Gear Hoard（千萬級複製物資秘藏）》，擁有了近乎無限的圖騰儲備與滿級神裝。",
          impact: "此舉直接摧毀了違規集團武裝顛覆伺服器的政變陰謀，引發了全服地下黑市的劇烈恐慌與物價洗牌，Spoke 成為全服隱形物資儲備最多的無冕之王。",
          keyPlotPoints: [
            "黑市撿拾異常編碼潛影盒，敏銳推斷出地下複製黑產網絡的存在",
            "地底長途遁地探勘，成功穿透黑曜石屏障發現巨型自動物資傳輸動脈",
            "在主物流管道下精密布設隱蔽漏斗分流暗渠，實施全自動偷天換日",
            "神不知鬼不覺搬空整整 10,356,000 件滿級神裝與無盡不死圖騰",
            "在空箱留下一面小丑旗，粉碎了違規霸權的奪權陰謀並引發黑市地震"
          ],
          psychology: "「他們想用作弊的代碼建造一個暴政王國，而我只是順手替他們做了一次免費的垃圾分類與資源回收罷了。」"
        },
        {
          title: "第三章：全服首富破產計！經濟閃電戰搞垮 Roshambo",
          subtitle: "中央儲備銀行的致命漏洞、偷樑換柱偽裝術與富豪帝國瞬間瓦解",
          summary: "全服第一富豪 Roshambogames 依靠對礦產的壟斷與殘酷的高利貸體系，建立起不可一世的中央儲備銀行，並在全服大會上公開羞辱散戶。看不慣富豪囂張氣焰的 Spoke 策劃了一場精妙絕倫的『經濟閃電戰』，利用調虎離山計深入銀行金庫，將整座金庫的金塊與鑽石全數替換為偽裝 TNT，在眾目睽睽下引爆，一夕之間將全服首富打成身無分文的乞丐。",
          genesis: "富豪 Roshambo 宣布對所有非聯盟玩家的交易徵收 50% 的暴利過路稅，並以重裝私軍扣押反對者的全部資產。看著無數無辜散戶被逼得傾家蕩產，Spoke 決定給這位不可一世的金融寡頭一個終極諷刺。",
          conflict: "Roshambo 的中央銀行號稱擁有全服最頂級的三重安保防護。Spoke 先是喬裝成海外神秘大亨開立巨額賬戶，藉由多次大額存取款在行長面前建立信任，暗中利用音波探測繪製出金庫地牢的三維平面圖。行動當日，Spoke 在銀行正門安排了假人傀儡引發爆炸騷亂，引開了銀行內部 90% 的精銳看守。與此同時，Spoke 攜帶消音鎬從下水道精準挖穿金庫防爆地板。在短短二十分鐘內，他動用千萬物資庫存，將金庫所有的純金塊、鑽石塊與綠寶石全數打包帶走，並以高超的方塊偽裝術將其替換為外表塗滿金粉的沙子與瞬爆 TNT。隔日當 Roshambo 召集全服名流貴族召開年度財富發布會並當眾打開金庫大門時，Spoke 站在鐘樓頂端按下了引爆器——整座金庫在漫天火光與碎石中化為廢墟，富豪當場崩潰癱軟在泥土中，徹底破產。",
          lootAndAnomaly: "奪取《The Billionaire's Counterfeit Vault（被搬空的億萬富豪黑箱）》與全服自由交易體系的定價權。",
          impact: "這場荒誕而壯麗的經濟閃電戰徹底粉碎了 Unstable SMP 的財閥壟斷體制，使全服商品物價恢復合理，Spoke 被廣大平民玩家崇敬地譽為『綠衣怪盜羅賓漢』。",
          keyPlotPoints: [
            "偽裝神秘豪客大額存款刺探中央銀行深層保險庫的結構防衛盲區",
            "正門策劃調虎離山大騷亂，牽制走全服最昂貴的私人保鏢衛隊",
            "下水道直插金庫核心，以驚人手速搬空全服最大的純金與鑽石儲備",
            "神鬼不覺以偽裝金粉沙子與引信 TNT 填補空缺，完成瞞天過海替換",
            "在全服名流盛典上當面引爆假金庫，宣告第一富豪帝國瞬間破產覆滅"
          ],
          psychology: "「金錢在 Minecraft 裡不過是代碼生成的幾組數字。當你把人性的尊嚴當作商品來踐踏時，就別怪我用一堆 TNT 來幫你的虛榮心清盤結算。」"
        },
        {
          title: "第四章：臥底黑手黨！雙面間諜引爆教父家族黃昏",
          subtitle: "潛伏深淵的影狼、教父的血色信任與 64 輛瞬爆礦車的葬禮",
          summary: "勢力日益猖獗的地下黑手黨企圖在全服國王大選中刺殺候選人 Parrot，建立完全黑道掌控的傀儡暴政。為了將這顆致命毒瘤連根拔起，Spoke 孤身犯險展開極端危險的臥底行動。他憑藉滴水不漏的演技贏得教父信任並晉升為家族衛隊長，在黑手黨首腦召開清算峰會的當晚，將所有人反鎖於大廳，引爆埋設在底部的 64 輛瞬爆礦車，以一己之力親手埋葬了黑手黨時代。",
          genesis: "黑手黨綁架暗殺頻繁，甚至放出話來要讓即將登基的 Parrot『血濺加冕台』。Spoke 明白正面交鋒只會引發無休止的游擊消耗戰，唯有從心臟部位實施外科手術式打擊，才能徹底肅清這個犯罪帝國。",
          conflict: "Spoke 隱藏了標誌性的綠色連帽衫，換上全套黑衣，化名冷酷無情的獨行殺手『影狼』前去投誠。黑手黨對他施加了極其殘忍的入會試煉，Spoke 憑藉頂級的心理素質與反偵察能力逐一化解，甚至在一次遭遇戰中替教父擋下致命一擊，從而贏得了教父無可動搖的信任，被破格任命為家族衛隊長，負責總舵最高安保。決戰前夕，黑手黨教父召集麾下各堂口首腦齊聚地下秘密會議廳，商討刺殺 Parrot 與瓜分全服物資的最終計畫。擔任現場總策劃的 Spoke 表面恭敬執法，實則暗中在厚重的羊毛地毯下方鋪設了整整 64 輛堆疊共振的瞬爆 TNT 礦車。確認全體首腦與護法全員入座後，Spoke 藉故步出大廳，將兩扇數噸重的黑曜石防爆大門從外部徹底焊死。在教父驚恐察覺異樣的剎那，Spoke 在門外優雅地彈出一枚紅石火把。天搖地動的巨爆瞬間吞沒了整個會議廳，不可一世的黑手黨核心首腦全員被從伺服器除名，犯罪帝國隨之轟然倒塌。",
          lootAndAnomaly: "收繳《The Godfather's Burned Signet（教父燒融的黑手黨族徽戒指）》與記載著全服所有地下特務名單的黑皮書。",
          impact: "黑手黨核心的瞬間蒸發徹底瓦解了黑暗勢力的武裝叛亂企圖，直接捍衛了國王 Parrot 的登基大典與文明憲政，Spoke 的這場雙面間諜絕殺成為全宇宙津津樂道的傳奇之作。",
          keyPlotPoints: [
            "換裝改名孤身臥底黑手黨，以血肉之軀硬抗殘酷的忠誠度生死考驗",
            "以無懈可擊的演技逐步贏得教父賞識，執掌總舵核心安保最高指揮權",
            "暗中為自由陣營傳遞情報，並在會議廳地毯下暗藏 64 輛瞬爆 TNT 礦車",
            "在家族高層首腦秘密峰會時鎖死黑曜石大門，斷絕所有逃生退路",
            "點燃紅石引信瞬間抹殺全體黑道首領，以一己之力終結黑手黨殘暴統治"
          ],
          psychology: "「當一個壞人很容易，但在惡狼身邊扮演更狠的惡狼，同時守住心底那一抹光明，才是一場最危險也最迷人的遊戲。今晚，遊戲通關了。」"
        }
      ],
      unexpectedItems: [
        {
          name: "10,356,000 Duped Gear Hoard（千萬級複製物資秘藏）",
          rarity: "GLITCHED",
          rarityColor: "#10b981",
          howAcquired: "神不知鬼不覺截獲地下複製集團的自動分流漏斗，一口氣盜走並藏匿在基岩夾層的千萬件違禁物資。",
          effectDesc: "擁有用不完的不死圖騰、附魔金蘋果與滿級下界合金套裝，使 Spoke 在物資消耗戰中立於不敗之地。",
          glitchCode: "NBT: {ItemCount: 10356000, Source: 'Dupe_Network_Alpha', InfiniteReserves: true}"
        },
        {
          name: "The Totem of Null（虛空代碼不死圖騰）",
          rarity: "ANOMALY",
          rarityColor: "#8b5cf6",
          howAcquired: "在伺服器強行回檔修復的臨界瞬間，將圖騰放入副手時產生的數據錯位產物。",
          effectDesc: "觸發復活時不會在原地生成，而是將玩家隨機短距離傳送穿透方塊，自帶 3 秒絕對幽靈穿牆狀態。",
          glitchCode: "NBT: {Phasing: true, NullShift: 3.0, AnomalyTag: 'BypassCollider'}"
        },
        {
          name: "Dean’s Screaming Goat Horn（哀號悲鳴山羊角）",
          rarity: "RELIC",
          rarityColor: "#f43f5e",
          howAcquired: "在搜查被抹消玩家 Dean 的舊廢墟時，於土堆深處撿拾到的破損山羊角。",
          effectDesc: "吹響時會發出淒厲的人聲呼救音頻，據稱能夠在特定維度召喚出伺服器被刪除角色的投影殘影。",
          glitchCode: "NBT: {CustomSound: 'dean_help_audio.ogg', DimensionResonance: true}"
        },
        {
          name: "Mafia Syndicate Black Ledger（黑手黨地下洗錢密碼本）",
          rarity: "LORE",
          rarityColor: "#64748b",
          howAcquired: "臥底期間趁教父外出巡視，利用隱形藥水潛入辦公室暗格撬開保險箱抄錄的黑手黨全服賄賂名單。",
          effectDesc: "詳細記錄了伺服器哪些領主和管理員收受了黑手黨賄賂，成為擊垮整個地下帝國的最致命法律重錘。",
          glitchCode: "NBT: {BookData: 'MafiaBlackmail_Full', Signatures: ['Don_Sal', 'ShadowCouncil']}"
        },
        {
          name: "Resonance Minecart Detonator（高頻共振秒殺礦車）",
          rarity: "SUPERWEAPON",
          rarityColor: "#ef4444",
          howAcquired: "Spoke 獨創的陷阱藝術，將數百台 TNT 礦車壓縮在同一鐵軌格點上利用動量重疊引發代碼跳 tick。",
          effectDesc: "一旦被引爆，爆炸威力會在零幀內疊加，即使身穿滿裝神級合金甲與持有不死圖騰也會被瞬間瞬秒蒸發。",
          glitchCode: "NBT: {MinecartCount: 400, InstantDamage: 99999, TickSkipKill: true}"
        }
      ],
      videos: [
        {
          id: "wG9dbWNsems",
          title: "How to Destroy the Unstable SMP",
          titleZh: "如何毀滅 Unstable SMP（傳奇開山首集）",
          publishDate: "2024-04-21",
          duration: "21:15",
          thumbnail: "https://i.ytimg.com/vi/wG9dbWNsems/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=wG9dbWNsems",
          summary: "震撼全網的 Unstable SMP 系列第一部影片！Spoke 與 Jamato 在開端之際就打破常規，不走傳統開荒路線，而是直接利用機制缺陷製造連鎖混亂，奠定了伺服器註定走向動盪的宿命基調。",
          keyMoments: [
            "發掘第一處利用水流與漏斗卡死伺服器 tick 的漏洞",
            "向全服玩家發出混亂宣戰通告",
            "首次揭示伺服器背後不為人知的神秘代碼"
          ],
          unexpectedLoot: "Exploit Master Core Blueprint"
        },
        {
          id: "unstable_spoke_dupe",
          title: "How I Stole 10,356,000 Duped Items",
          titleZh: "我如何神不知鬼不覺偷走 10,356,000 件複製神裝",
          publishDate: "2024-05-13",
          duration: "27:40",
          thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Spoke+How+I+Stole+10356000+Duped+Items",
          summary: "史上最大規模物資盜竊案！Spoke 發現了某大軍團的秘密複製基地，他沒有硬碰硬，而是以高超工程學挖通引流管，在對手眼皮底下將一千萬件神裝全數轉移至自己的秘密金庫。",
          keyMoments: [
            "利用地圖畫假牆完美掩飾挖掘通道",
            "編寫漏斗計數器精確盜取 10,356,000 件物資",
            "給受害團隊留下一塊寫滿嘲諷的木告示牌"
          ],
          unexpectedLoot: "10,356,000 Duped Gear Hoard"
        },
        {
          id: "unstable_spoke_bankrupt",
          title: "I Bankrupted Minecraft's Richest Civilization",
          titleZh: "我搞垮了 Minecraft 最富有的億萬帝國",
          publishDate: "2024-07-19",
          duration: "30:15",
          thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Spoke+I+Bankrupted+Minecraft%27s+Richest+Civilization",
          summary: "Roshambogames 的經濟體自以為固若金湯。Spoke 策劃了一場史詩級的黑客式調虎離山，透過偽造黑市交易吸引守衛主力，隨後潛入中央銀行清空金庫並引發全服通膨，令其文明土崩瓦解。",
          keyMoments: [
            "偽裝成神秘買家拋售虛擬物資引發市場混亂",
            "潛入中央保險庫用 TNT 替換所有金塊",
            "在富豪首領眼前引爆金庫煙火秀"
          ],
          unexpectedLoot: "Roshambogames' Ruined Treasury Bond"
        },
        {
          id: "V9HzAdwgf-I",
          title: "I Infiltrated The Minecraft Mafia",
          titleZh: "我臥底潛入了橫行霸道的黑手黨犯罪家族",
          publishDate: "2024-11-18",
          duration: "34:50",
          thumbnail: "https://i.ytimg.com/vi/V9HzAdwgf-I/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=V9HzAdwgf-I",
          summary: "Spoke 假意向黑手黨低頭稱臣，通過多重忠誠考驗打入內部。他表面上幫黑手黨收保護費，暗地裡在每個堂口地下埋設連環共振炸彈並複印黑帳，上演頂級無間道！",
          keyMoments: [
            "通過教父的逼供椅心理測謊考驗",
            "在黑手黨總舵暗格竊得絕密黑帳本",
            "在深夜偷偷調包黑手黨軍火庫的武器附魔"
          ],
          unexpectedLoot: "Mafia Syndicate Black Ledger & Underboss Ring"
        },
        {
          id: "unstable_spoke_endmafia",
          title: "The End of the Minecraft Mafia",
          titleZh: "黑手黨帝國的終結之日",
          publishDate: "2025-01-30",
          duration: "37:25",
          thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Spoke+The+End+of+the+Minecraft+Mafia",
          summary: "臥底收網的偉大高潮！在黑手黨召開年度首腦峰會時，Spoke 撕下偽裝，在主講台上按下了起爆器。整座總部大樓在連環殉爆中灰飛煙滅，宣告黑手黨時代徹底終結！",
          keyMoments: [
            "會議室終極摊牌對決",
            "啟動瞬爆礦車共振陷阱一舉秒殺三位黑道頭目",
            "奪得神秘受詛咒的 Dean 悲鳴山羊角"
          ],
          unexpectedLoot: "Dean’s Screaming Goat Horn（哀號山羊角）"
        },
        {
          id: "unstable_spoke_null",
          title: "Unstable SMP: The NULL / Purgatory Saga",
          titleZh: "Unstable SMP：虛空煉獄與 NULL 代碼之謎",
          publishDate: "2025-03-05",
          duration: "41:00",
          thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=Spoke+Unstable+SMP+NULL+Saga",
          summary: "黑手黨滅亡後，伺服器出現了更加不可名狀的代碼幽靈。Spoke 隻身進入被放逐的煉獄維度，與殘存的數據殘渣博弈，最終掌握了能穿透物理碰撞體的 Totem of Null！",
          keyMoments: [
            "被傳送至沒有任何生物群系的亂碼煉獄世界",
            "避開無形代碼幽靈的連續追捕",
            "在崩壞終點成功合成出 Totem of Null"
          ],
          unexpectedLoot: "The Totem of Null（虛空代碼不死圖騰）"
        }
      ]
    },

    flamefrags: {
      id: "flamefrags",
      name: "FlameFrags",
      realHandle: "FlameFrags",
      roleTitle: "不死戰神 · 極限生存先鋒 · 千人萬軍角鬥之王",
      tagline: "「在無情的戰火與追殺中，唯有純粹的戰鬥技藝才能換來永生。」",
      themeColor: "#f97316", // Flame Orange / Crimson
      avatar: "assets/avatars/flamefrags.jpg",
      skinBody: "assets/skins/flamefrags_3d.png",
      appearance: {
        summary: "烈焰赤紅與深黑交織的作戰裝束，手持近戰戰刃，眼神如鷹隼般銳利冷冽，周身環繞著不滅戰火。",
        features: [
          "色彩基調：熔岩赤紅（Flame Red）與深淵黑曜石黑（Obsidian Black）之高對比戰甲",
          "裝備輪廓：特製下界合金重裝戰甲，胸口刻有不死吸血銘文",
          "戰鬥神態：目光如電，手握死神戰鐮，時刻處於無懈可擊的臨戰姿態",
          "現實說明：FlameFrags 為未公開面孔之創作者（Faceless），本照片為其 YouTube 官方百萬頻道當前最新使用之烈焰紅黑頭像"
        ]
      },
      stats: {
        intellect: 84,
        strategy: 89,
        pvpCombat: 99,
        influence: 91,
        stealth: 76
      },
      personality: "熱血堅韌、為戰而生的絕對武力代表。他不在乎繁複的政治權謀，只相信手中揮舞的戰刃與流淌的熱血。在隊友陷入絕境時，他永遠是那個一人一劍擋在萬軍之前的最堅固盾牌。",
      biography: `FlameFrags 在 Unstable SMP 的登場徹底改變了伺服器的戰力格局。身處殘酷的極限硬核環境，死亡即代表失去一切，但他卻透過對遊戲底層生命機制與同步封包的極限理解，卡出了令全服聞風喪膽的「永生不死心數」。

他曾隻身一人全殲由五名頂級殺手組成的惡質霸凌公會；為了追求武道的終極境界，他甚至主動拜伺服器最恐怖的死神 ClownPierce 為師，經受地獄修煉獲得傳奇收割戰鐮。在震驚宇宙的千人大內戰中，他是衝在最前線、帶領部隊撕裂敵軍防線的狂暴戰神。`,
      storyArcs: [
        {
          title: "第一章：生死毫秒差！極限硬核卡出不死金心之謎",
          subtitle: "深海遺跡的瀕死絕境、數據封包溢出與突破極限的不死金心",
          summary: "在人人自危、死亡即永久除名的極限硬核生存初期，FlameFrags 於深海神殿探索中遭遇遠古守衛者與溺屍大軍的致命合圍。在圖騰碎裂與生命歸零的萬分之一秒，他藉由金蘋果飽食度延遲與伺服器區塊保存的微小卡頓，觸發了客戶端與服務端的生命封包溢出衝突，意外將自己的血條永久鎖定在額外 10 顆常駐金心，成為全服首位實質上的『不死戰神』。",
          genesis: "極限硬核模式的殘酷之處在於零容錯率，任何一次意外都意味著一切歸零。為了獲取稀缺的深海潮汐之心，FlameFrags 在尚未配備頂級神甲的初期冒險潛入未探索的大型深海神殿，卻因水肺藥水耗盡與多隻遠古守衛者的雷射鎖定而陷入絕境。",
          conflict: "在深海無光環境下，三道雷射同時充能完畢，周圍更有十餘名手持三叉戟的溺屍群瘋狂穿刺。FlameFrags 的護甲在瞬間破裂，唯一的副手不死圖騰在雷射轟擊下化作金光碎裂。就在圖騰無敵時間消逝、第二波致命傷害降臨的萬分之一秒，FlameFrags 吞下了最後一顆附魔金蘋果，而此刻伺服器恰好發生了常規的區塊自動保存（Autosave Lag）。極限的判定毫秒差導致客戶端上報的吸收生命增益與服務端確認的扣血封包發生邏輯衝突，數據產生不可逆的溢出。當 FlameFrags 掙扎游出水面時，驚異地發現自己的血條下方多出了一整排閃耀著金芒的吸收心，且無論時間推移還是自然消耗，這 10 顆額外金心都牢牢鎖定不再消失。他隨即以身試法進行了高空墜落與烈焰焚燒測試，確認自己真正打破了系統的生命限制，獲得了令全宇宙震撼的不死之軀。",
          lootAndAnomaly: "覺醒神技《Glitched Immortal Heart Reservoir（代碼異常不死金心）》，享有超越常規玩家一倍以上的硬核血量儲備。",
          impact: "這起奇蹟般的代碼漏洞事件徹底重塑了 FlameFrags 的戰鬥哲學，消除了他對硬核死亡的後顧之憂，使他從一名普通的求生戰士升華為敢於在萬軍之中捨命衝鋒的無敵先鋒。",
          keyPlotPoints: [
            "初期單兵勇闖深海神殿，遭遇三頭遠古守衛者與溺屍大軍的致命夾擊",
            "水下激戰護甲破碎，副手不死圖騰遭雷射穿透瞬間碎裂觸發瀕死",
            "於圖騰破碎與服務端區塊保存延遲間卡入金蘋果吸收封包判定",
            "生命數據溢出導致服務端將 10 顆額外金色吸收心永久固化於角色數據庫",
            "經嚴苛極限測試確認不死金心穩定生效，奠定全服最強近戰坦克的威名"
          ],
          psychology: "「當死亡的陰影在深海中扼住我的咽喉時，我聽到了代碼崩裂的聲音。從那一刻起，恐懼不再屬於我，而是屬於每一個在戰場上面對我的敵人。」"
        },
        {
          title: "第二章：孤狼血戰！單兵團滅五人霸凌毒瘤公會",
          subtitle: "以身作餌誘敵深入、雪峰峭壁的極限連劈與誓死守護之花",
          summary: "惡名昭彰的五人惡意公會『掠奪之影（Shadow Raiders）』霸佔核心礦區，無差別虐殺新手掠奪資產。目睹無辜同伴被害的 FlameFrags 怒火中燒，決心以暴制暴。他故意身著破損甲冑將敵方全體主力誘至險峻雪峰，在長達兩小時的殊死搏殺中以一敵五，憑藉不死身法與破盾走砍完成全殲團滅，一戰名震全服。",
          genesis: "一個剛加入伺服器不久的友善散戶新手，在中央盆地辛勤搭建的小屋遭到掠奪之影五名幹部無情焚毀，該新手在絕望求饒中被當眾虐殺。目睹這一切的 FlameFrags 在廢墟中握緊拳頭，決心用這群惡霸的鮮血來告慰亡者。",
          conflict: "掠奪之影五人皆為滿裝精銳，且戰術狡詐。FlameFrags 故意脫下重裝戰甲，換上破爛皮甲出現在敵方斥候視野中，佯裝驚慌逃向荒無人煙的高聳雪山。五名貪婪的惡霸見狀全員出動狂追不捨。踏入雪山之巔的狂風暴雪中，FlameFrags 驟然止步，在敵方包圍網合攏的剎那瞬間換回滿級下界合金神裝。在長達兩個多小時的殘酷拉鋸死鬥中，FlameFrags 頂著漫天箭雨與藥水轟擊，將不死金心的容錯率發揮到極致。他利用陡峭地形卡位，使敵方無法同時五人近身，隨即以精準的跳劈接橫掃破開前排兩人的重盾，連續斬殺敵軍前鋒。剩下的三人企圖搭乘鞘翅四散逃跑，FlameFrags 換上強弓以神級預判凌空穿透敵方翅膀，在積雪染紅的懸崖上完成了不可思議的 1v5 團滅奇蹟。戰後，他在廢墟中拾起新手生前贈予的一朵小黃花插在胸甲之上，誓言做全服弱者的盾牌。",
          lootAndAnomaly: "收繳《Annihilator's Trophy Armor（被全殲公會的染血五套頂裝）》與隨身佩戴的紀念小花《Hope of the Fallen》。",
          impact: "這場以少勝多的傳奇血戰徹底打碎了毒瘤公會橫行霸道的囂張氣焰，震撼了全服各大勢力，FlameFrags 的『正義孤狼戰神』之名自此深植於每位玩家心中。",
          keyPlotPoints: [
            "目睹善良新手遭惡霸公會殘虐殺害，誓言踏上以暴制暴的正義復仇之路",
            "身穿殘破偽裝以身為餌，將傲慢的五名滿裝惡霸誘入無退路的絕境雪峰",
            "雪巔絕境暴風雪中瞬間披掛神裝反打，打破敵方包圍陣列卡死地形走位",
            "以驚人的破盾跳劈與近戰走砍節奏連續斬殺前排兩名重裝首領",
            "預判神射擊墜敵方逃竄的鞘翅成員，達成全服震動的 1v5 團滅神話"
          ],
          psychology: "「他們以為人多勢眾就可以踐踏弱小的尊嚴，但我會用手中的刀告訴他們——當正義的怒火燃燒時，人數只不過是一串等待被收割的數字。」"
        },
        {
          title: "第三章：拜師死神 ClownPierce！地獄特訓獲死神戰鐮",
          subtitle: "黑曜石荒原尋訪死神、角鬥場無裝十招試煉與死神親傳戰鐮",
          summary: "隨著伺服器進入全面軍備競賽，各路野心領主勾結頂尖 PVP 僱傭兵，FlameFrags 意識到單憑本能的勇猛已不足以應對即將到來的宇宙浩劫。他遠赴世界邊界尋訪號稱『Minecraft 死神』的傳奇殺神 ClownPierce，在經歷了生不如死的殘酷特訓與試煉後，領悟了絕世近戰刀法，獲贈象徵死神傳承的傳奇收割戰鐮。",
          genesis: "多次小規模遭遇戰中，FlameFrags 察覺到敵軍開始頻繁使用複雜的水晶爆破與雙手盾瞬切戰術。為了在正面戰場上達到無可匹敵的武道極致，他決定尋找全服唯一被奉為天花板的存在——殺神 ClownPierce。",
          conflict: "在世界邊境由純黑曜石構築的死亡角鬥場中，FlameFrags 見到了氣場森然的 ClownPierce。起初死神對收徒嗤之以鼻，只給了他一個近乎必死的考驗：卸下所有防具與藥水，在空手狀態下接下死神十刀。在無數次被擊飛、骨骼碎裂的劇痛中，FlameFrags 依靠不可思議的意志力死死咬牙站起，在第九招利用極限側滑避開要害，硬生生撐到了第十刀落地，贏得了傲慢死神的敬重。在隨後長達數週的地獄特訓中，ClownPierce 親自教授他毫秒級走砍連擊、聽聲辨位盲打以及反破盾身法。出師之日，ClownPierce 在祭壇前將親自附魔、泛著深邃紫黑光芒的《ClownPierce's Netherite Scythe（死神親傳收割戰鐮）》鄭重授予他，象徵新一代戰神的正式誕生。",
          lootAndAnomaly: "獲贈傳奇兵器《ClownPierce's Netherite Scythe（死神親傳收割戰鐮）》，並領悟全服最高境界的近戰連鎖斬殺技巧。",
          impact: "這次特訓完成了 FlameFrags 從『蠻勇戰士』到『近戰殺戮宗師』的終極蛻變，使自由聯盟獲得了在未來千人大戰中足以對抗任何敵軍王牌的核武級常規戰力。",
          keyPlotPoints: [
            "為了突破個人武力瓶頸，歷經萬里跋涉尋訪隱居邊界的傳奇死神 ClownPierce",
            "在黑曜石角鬥場無甲狀態硬接死神十記殺招，憑鋼鐵意志贏得尊重",
            "在日夜無休的地獄式實戰對決中，磨礪出無懈可擊的走砍與盲打身法",
            "破譯頂級 PVP 領域的瞬切防禦與反制節奏，戰鬥思維全面昇華",
            "於世界邊緣祭壇獲贈死神親傳戰鐮，正式晉升為全宇宙公認的戰神宗師"
          ],
          psychology: "「在死神的刀鋒下，我學會了放下憤怒，將呼吸與心跳融入手中的利刃。真正的強大不是毀滅，而是在生死的狹縫中精準把握那一線生機。」"
        },
        {
          title: "第四章：千人大內戰總先鋒！一人一劍撕裂敵軍陣線",
          subtitle: "萬人血戰的號角、血色軍旗開路與直插敵軍心臟的決定性衝鋒",
          summary: "在 Unstable SMP 迎來命運終結的『萬人大內戰（The Great Civil War）』中，FlameFrags 被三巨頭共同推舉為自由同盟突擊先鋒總司令。身披重裝染血戰甲、高擎同盟戰旗，他率領前鋒衛隊頂著狂風暴雨般的炮火與箭雨發起撼地衝鋒，在重圍之中手起鐮落連破敵方三道防禦壁壘，為大部隊奠定了整場史詩決戰的勝局。",
          genesis: "烏托邦偽善帝國聯合金錢黑手黨與野心領主，組建了數百名滿裝戰士的龐大軍團在中央平原列陣。自由同盟面臨著生死存亡的一役，必須有一支無畏的先鋒部隊頂住第一波滅頂之災般的遠程火力，鑿開敵軍護城要塞的缺口。",
          conflict: "衝鋒號角長鳴，大地為之顫抖。FlameFrags 一馬當先，左手緊握《Vanguard Flag of Unstable（內戰先鋒之血色軍旗）》，右手揮舞死神戰鐮，率領兩百名敢死隊員踏入敵方致命的火力交叉網。數以百計的滯留型傷害藥水與 TNT 投石彈在他身邊接連爆炸，FlameFrags 憑藉不死金心的高額吸收護盾硬頂衝擊，身先士卒狠狠撞碎了敵方前哨的水晶防線。在戰事最膠著的關頭，敵方兩名重裝近衛隊長企圖繞後突襲指揮官 Parrot，FlameFrags 敏銳察覺，飛身橫空攔截。在以一敵二的搏殺中，他施展出死神親傳的連鎖戰鐮技巧，雙刀連斬順勢旋轉破盾，當場斬殺兩名敵酋。士氣大振的同盟主力隨即全線壓上，順著 FlameFrags 親手鑿開的三道防禦缺口湧入敵營，徹底擊潰了敵軍主力，迎來了決定宇宙歸宿的偉大勝利。",
          lootAndAnomaly: "高舉象徵永不屈服的《Vanguard Flag of Unstable（內戰先鋒之血色軍旗）》，獲封自由同盟至高榮譽勳章。",
          impact: "這場波瀾壯闊的先鋒衝鋒成為 Unstable SMP 歷史上最激勵人心的戰鬥史詩，FlameFrags 用無可爭議的血性與武道，向全宇宙詮釋了何為真正的守護者與不死戰神。",
          keyPlotPoints: [
            "受全體同盟軍推舉出任萬人大內戰先鋒總司令，立下有我無敵之誓",
            "手擎血色戰旗率先發起衝鋒，肉身硬抗敵軍暴雨般的轟炸與箭網",
            "千鈞一髮之際回身格殺企圖刺殺 Parrot 的敵軍斬首王牌小隊",
            "死神戰鐮狂暴橫掃，一人之姿強行鑿穿敵軍要塞三道核心防線",
            "引領自由大軍直插敵營心臟擊潰偽善聯軍，為全服贏得傳奇終章"
          ],
          psychology: "「只要我的戰鐮還在揮舞，只要胸膛中的熱血尚未冷卻，我就永遠是阻擋在暴政與苦難之前的第一道高牆。為了自由，衝鋒！」"
        }
      ],
      unexpectedItems: [
        {
          name: "Glitched Immortal Heart Reservoir（代碼異常不死金心）",
          rarity: "ANOMALY",
          rarityColor: "#ea580c",
          howAcquired: "在生死一線時利用生命同步延遲意外觸發的數據溢出，使生命值在客戶端與服務端之間鎖定在額外高值。",
          effectDesc: "使持有者多出 10 顆常駐吸收心數，大幅降低被高爆 TNT 或神裝暴擊秒殺的風險。",
          glitchCode: "NBT: {AbsorptionLock: 20, HealthSyncGlitch: true, ImmortalityStatus: 'ACTIVE'}"
        },
        {
          name: "Flame’s Bespoke Warplate（烈焰專屬下界合金重戰甲）",
          rarity: "MYTHIC",
          rarityColor: "#f97316",
          howAcquired: "由全服頂級鍛造師親自調試，在極溫熔岩熔爐中歷經千錘百煉淬火鍛造，專門為 FlameFrags 量身打造的近戰胸甲。",
          effectDesc: "附帶最高等級保護與荊棘反射，受到近戰攻擊時自帶短暫灼燒與擊退抗性，防禦性能傲視全服。",
          glitchCode: "NBT: {Armor: 'FlameNetherite_V2', Protection: 5, Thorns: 4, KnockbackResist: 0.8}"
        },
        {
          name: "ClownPierce’s Training Scythe（死神親傳連斬戰鐮）",
          rarity: "RELIC",
          rarityColor: "#ef4444",
          howAcquired: "在完成 ClownPierce 設置的三道殘酷生死決鬥試煉後，由死神親自遞交的傳承兵刃。",
          effectDesc: "橫掃之刃半徑擴大 150%，且每次成功連擊將堆疊短暫移動速度提升，戰場收割能力所向披靡。",
          glitchCode: "NBT: {MasterBlade: 'ClownPierce_Legacy', SweepRadius: 2.5, ComboSpeed: true}"
        },
        {
          name: "Rejoice’s Flower（戰火廢墟中的純白之花）",
          rarity: "LORE",
          rarityColor: "#fef08a",
          howAcquired: "在清剿毒瘤公會的燃燒要塞殘骸時，於一處破裂花盆中偶然拾獲並小心翼翼收在背包裡的蒲公英。",
          effectDesc: "沒有任何數值加成，卻是 FlameFrags 在血腥殺戮世界中始終珍藏的信物，時刻提醒他為何而戰。",
          glitchCode: "NBT: {Item: 'White_Flower', PreservedInWar: true, Lore: ['A spark of innocence in endless war.']}"
        },
        {
          name: "1000-Player Vanguard War Banner（萬人大內戰先鋒軍旗）",
          rarity: "ROYAL",
          rarityColor: "#dc2626",
          howAcquired: "在千人內戰總決戰中，由後方萬名戰士親手交給 FlameFrags 插在衝鋒第一線的染血戰旗。",
          effectDesc: "周圍 32 格範圍內的盟友將獲得力量 I 與速度 I 的士氣光環，象徵永不退縮的戰神意志。",
          glitchCode: "NBT: {BannerType: 'Vanguard_1000', MoraleAura: true, Commander: 'FlameFrags'}"
        }
      ],
      videos: [
        {
          id: "Vhnn_sG7xUk",
          title: "I Became Immortal on a Hardcore Minecraft SMP",
          titleZh: "我在極限硬核 Minecraft SMP 成為不死之身",
          publishDate: "2024-05-18",
          duration: "25:40",
          thumbnail: "https://i.ytimg.com/vi/Vhnn_sG7xUk/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=Vhnn_sG7xUk",
          summary: "FlameFrags 在 Unstable SMP 最震撼的封神之戰！面對死亡即封禁的殘酷環境，他透過對極限機制的鑽研與冒險測試，意外卡出了永久不死心數，奠定了他作為無敵先鋒的傳奇起點。",
          keyMoments: [
            "在殘血 0.5 顆心的極限狀態下完成機制卡位",
            "在全服公頻引來管理員與強者的不可置信圍觀",
            "親身測試承受一次高空墜落與 TNT 直擊依然屹立不倒"
          ],
          unexpectedLoot: "Glitched Immortal Heart Reservoir"
        },
        {
          id: "unstable_flame_solo",
          title: "SOLO Player VS Toxic Minecraft Team",
          titleZh: "孤狼單挑全服最囂張的毒瘤公會",
          publishDate: "2024-06-22",
          duration: "28:15",
          thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=FlameFrags+SOLO+Player+VS+Toxic+Minecraft+Team",
          summary: "毒瘤公會佔山為王並獵殺弱小，FlameFrags 隻身下戰書。在複雜的山脈地形中，他以高超的三叉戟追擊與水晶放置技術，以 1 敵 5 斬殺對方全員，繳獲整座基地的戰利品。",
          keyMoments: [
            "雪山頂峰的水晶瞬爆雙殺反擊",
            "在追逐戰中冷靜預判並截斷敵軍退路",
            "在廢墟殘骸中拾獲純潔的 Rejoice's Flower"
          ],
          unexpectedLoot: "Rejoice’s Flower & Overlord's Slain Trophy"
        },
        {
          id: "unstable_flame_strongest",
          title: "I Became the Strongest on the Unstable SMP",
          titleZh: "我加冕成為 Unstable SMP 的最強戰神",
          publishDate: "2024-08-14",
          duration: "32:50",
          thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=FlameFrags+I+Became+the+Strongest+on+the+Unstable+SMP",
          summary: "伺服器舉辦武道大會，各路豪強雲集。FlameFrags 一路過關斬將，在決賽中面對神裝拉滿的守擂霸主，以極限刀速與步法粉碎對手防線，奪得全服最強稱號。",
          keyMoments: [
            "八強賽 10 秒速勝破盾戰術展示",
            "決賽長達 15 分鐘的極限耐久大對決",
            "全場觀眾起立致敬，披上最強戰神披風"
          ],
          unexpectedLoot: "Flame’s Bespoke Warplate"
        },
        {
          id: "unstable_flame_expose",
          title: "I Exposed Minecraft's 'Strongest' Player",
          titleZh: "我當眾撕下了號稱『最強戰神』的虛偽面具",
          publishDate: "2024-10-05",
          duration: "27:30",
          thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=FlameFrags+I+Exposed+Minecraft%27s+Strongest+Player",
          summary: "某位備受推崇的明星選手暗中利用伺服器延遲外掛與替身打假賽。FlameFrags 在一場公開賭鬥中佈置了無延遲鏡頭與紅石檢測，在百萬觀眾面前當場戳穿騙局並給予審判。",
          keyMoments: [
            "用紅石時鐘封包計時器現場抓包延遲作弊",
            "以純粹的原生技術在零外掛狀態下擊碎對手",
            "將偽強者的名牌釘在主城恥辱柱上"
          ],
          unexpectedLoot: "Exposed Cheat Module Evidence"
        },
        {
          id: "yBy5NnLTiWQ",
          title: "I Got Trained By a Minecraft Combat Master",
          titleZh: "我接受了 Minecraft 死神 ClownPierce 的魔鬼特訓",
          publishDate: "2024-12-10",
          duration: "36:45",
          thumbnail: "https://i.ytimg.com/vi/yBy5NnLTiWQ/maxresdefault.jpg",
          youtubeUrl: "https://www.youtube.com/watch?v=yBy5NnLTiWQ",
          summary: "為了突破自己的戰力瓶頸，FlameFrags 找到全服聞風喪膽的傳奇死神 ClownPierce。面對一擊必殺的魔鬼特訓，他經歷了上百次陣亡邊緣的痛苦淬煉，最終繼承死神戰鐮！",
          keyMoments: [
            "在狹窄黑曜石角鬥場對決 ClownPierce 的恐怖壓迫感",
            "領悟 360 度無死角切刀與破防節奏",
            "完成最終考核獲贈 ClownPierce 親傳戰鐮"
          ],
          unexpectedLoot: "ClownPierce’s Training Scythe（死神親傳戰鐮）"
        },
        {
          id: "unstable_flame_1000war",
          title: "1000 VS 1000 Player Minecraft Civil War",
          titleZh: "1000 對 1000 玩家萬人大內戰（先鋒衝鋒視角）",
          publishDate: "2025-02-18",
          duration: "45:20",
          thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
          youtubeUrl: "https://www.youtube.com/results?search_query=FlameFrags+1000+VS+1000+Civil+War",
          summary: "Unstable SMP 歷史上最壯烈的總攻！FlameFrags 手持先鋒軍旗，帶領突擊縱隊率先衝入敵軍重裝陣地。火光沖天、殘骸遍野，他以一人之力硬生生鑿穿敵軍中軍大營！",
          keyMoments: [
            "扛著 1000-Player War Banner 發起第一波捨身衝鋒",
            "在密密麻麻的箭雨與高爆火砲中連斬敵方八名大將",
            "與 Parrot、Wemmbu 共同登上敵軍要塞殘頂迎來勝利"
          ],
          unexpectedLoot: "1000-Player Vanguard War Banner"
        }
      ]
    }
  },

  // 四主角多視角大事件矩陣（同一歷史節點，四位主角在做什麼）
  timelineMatrix: [
    {
      epoch: "第一紀元：代碼裂縫與伺服器初啼",
      headline: "世界規則開始扭曲，禁忌金庫與毀滅按鈕出土",
      details: {
        parrot: "在廢棄地下室挖出『毀滅世界按鈕』，首次發現伺服器底層隨時可能崩潰的致命代碼。",
        wemmbu: "單槍匹馬突襲全服公認無法攻破的基岩違法金庫，奪走 The Crucible 巨刃與海量禁忌物資。",
        spoke: "在系列揭開序幕之際就發掘出利用水流漏斗讓伺服器瀕臨跳 tick 的古老漏洞，向全服宣告混亂來臨。",
        flamefrags: "在極限硬核環境下，以毫秒級判定卡出令全服震驚的常駐不死金心，奠定戰狂傳奇。"
      }
    },
    {
      epoch: "第二紀元：大追捕與 Paragon 絕海黑牢大越獄",
      headline: "統治階層加強打壓，通緝與反抗狂潮席捲全服",
      details: {
        parrot: "遭伏擊押入號稱無人生還的 Paragon 監獄，暗中策劃數週引發暴動並成功炸穿基岩脫逃。",
        wemmbu: "遭到數十名精銳 PVP 殺手聯合追殺，依靠極限鞘翅低空飛行與陷阱反殺全服獵人軍團。",
        spoke: "鎖定違規複製團隊的秘密基地，神不知鬼不覺搬空 10,356,000 件複製神裝，震驚黑市。",
        flamefrags: "隻身挑戰並全殲惡名昭彰的毒瘤公會，在燃燒的廢墟殘骸中拾獲象徵純真的小花。"
      }
    },
    {
      epoch: "第三紀元：文明崛起、帝國爭雄與經濟崩盤",
      headline: "巨型要塞拔地而起，億萬經濟在一夕之間傾覆",
      details: {
        parrot: "深入荒原搜查失蹤名單，在迷霧中獲得靈魂觀測望遠鏡，察覺幕後更大黑手。",
        wemmbu: "動用掠奪所得打造鋼鐵要塞文明，與 PrinceZam 帝國爆發大戰並以軌道加農砲取得大勝。",
        spoke: "以精妙假交易與調虎離山計潛入全服首富中央銀行，用 TNT 換掉金塊引發經濟大崩盤。",
        flamefrags: "在全服武道大會力壓群雄奪得最強稱號，並當眾戳穿利用延遲作弊的偽強者面具。"
      }
    },
    {
      epoch: "第四紀元：暗夜風暴！黑手黨崛起與無間滲透",
      headline: "地下犯罪帝國操控全服，暗殺、臥底與復仇怒火",
      details: {
        parrot: "被推舉為王位候選人，在黑手黨的暗殺威脅下發表廣場演說，以壓倒性票數加冕為王。",
        wemmbu: "面對黑手黨綁架摯友 Eggchan 的威脅，隻身血洗黑手黨總舵，在最後 3 秒救出夥伴。",
        spoke: "假意投誠黑手黨擔任雙面間諜，在教父首腦峰會時引爆共振瞬爆礦車，埋葬犯罪家族。",
        flamefrags: "深感自身實力不足，尋訪死神 ClownPierce 經歷地獄修煉，繼承傳奇連斬戰鐮。"
      }
    },
    {
      epoch: "第五紀元：王權興衰與萬人大內戰（終局之戰）",
      headline: "四條命運之線匯聚，千人軍團在主城盆地打響宇宙決戰",
      details: {
        parrot: "以國王身份統帥自由聯合軍團，發表最後戰鬥檄文，率眾直面腐敗殘餘勢力。",
        wemmbu: "攜帶軌道巨砲終端與 The Crucible 巨刃親臨戰場，充當同盟最強火力支柱摧毀敵城壘。",
        spoke: "在戰場後方切斷敵軍補給線，利用代碼圖騰突破敵軍結界，策應正面主力。",
        flamefrags: "手扛先鋒軍旗帶領敢死隊率先發起衝鋒，在漫天火砲中親自鑿穿敵軍三道核心防線。"
      }
    }
  ],

  // 互動冒險遊戲章節資料（Unstable Survival Quest: 網頁內嵌文字RPG小遊戲）
  questGame: {
    title: "Unstable Survival Quest // 宇宙命運模擬器",
    subtitle: "選擇你的主角視角，運用意外神器，在崩潰邊緣的 Unstable SMP 中做出你的抉擇！",
    chapters: [
      {
        id: "chapter_select",
        name: "序章：角色降臨",
        description: "在漆黑的代碼虛空中，世界伺服器的時鐘正在倒數。你想以誰的視角介入這場混亂？",
        choices: [
          { text: "【Parrot】以智慧與調查為武器，追查伺服器崩潰真相", nextId: "parrot_c1", charId: "parrot" },
          { text: "【Wemmbu】以純粹力量與財富橫掃一切，目標直指基岩金庫", nextId: "wemmbu_c1", charId: "wemmbu" },
          { text: "【Spoke】化身混亂與漏洞之主，用陷阱與惡作劇戲耍全服", nextId: "spoke_c1", charId: "spoke" },
          { text: "【FlameFrags】極限硬核不死戰狂，只相信手中的戰刃與血性", nextId: "flame_c1", charId: "flamefrags" }
        ]
      },
      // Parrot 線
      {
        id: "parrot_c1",
        name: "Parrot 篇：廢棄紅石密室的抉擇",
        charId: "parrot",
        description: "你在沙漠深處挖到了一座基岩密封艙，石台上赫然放著一顆跳動著紅色符文的【毀滅世界按鈕】。耳邊傳來巡邏獵人的腳步聲，他們正逼近入口！",
        choices: [
          {
            text: "冷靜收起按鈕，掏出 Parrot's Spyglass 偵察獵人動線與埋伏",
            nextId: "parrot_c2_spyglass",
            itemGain: "Parrot's Spyglass",
            statCheck: "intellect"
          },
          {
            text: "直接將按鈕通電！用伺服器區塊震盪逼退追兵",
            nextId: "parrot_c2_glitch",
            itemGain: "World Destroyer Button",
            statCheck: "strategy"
          }
        ]
      },
      {
        id: "parrot_c2_spyglass",
        name: "Parrot 篇：王座之選與和平法典",
        charId: "parrot",
        description: "你成功避開伏擊抵達中央廣場。此時群眾正因混亂爆發暴動，各方軍閥虎視眈眈。你手握望遠鏡看清了混亂背後的挑唆者，你決定：",
        choices: [
          {
            text: "登上講台發表震撼演說，出示證據並宣布參選國王，建立秩序！",
            nextId: "parrot_ending_king",
            statCheck: "influence"
          },
          {
            text: "潛入 Paragon 黑牢解救無辜被囚者，組建地下自由反抗軍！",
            nextId: "parrot_ending_rebel",
            statCheck: "stealth"
          }
        ]
      },
      {
        id: "parrot_c2_glitch",
        name: "Parrot 篇：封包狂暴與虛空羅盤",
        charId: "parrot",
        description: "按鈕觸發的震盪讓周圍 16 區塊陷入黑屏。在亂碼之中，你從地底裂縫摸到了一塊指向負 Y 軸的【Null Code Compass】！",
        choices: [
          {
            text: "順著羅盤指針深入地底，探尋伺服器管理者的真實身份！",
            nextId: "parrot_ending_truth",
            statCheck: "intellect"
          }
        ]
      },
      // Wemmbu 線
      {
        id: "wemmbu_c1",
        name: "Wemmbu 篇：突破基岩金庫防線",
        charId: "wemmbu",
        description: "你站在全服防守最森嚴的非法金庫前。眼前是雙層黑曜石水浸防爆牆與三名重裝守衛。你背包裡只有幾枚 TNT 與你的赤手空拳。",
        choices: [
          {
            text: "用沙子填平水源阻斷防爆，零距離引爆高壓 TNT 強行破門！",
            nextId: "wemmbu_c2_raid",
            itemGain: "The Crucible & Gambit",
            statCheck: "pvpCombat"
          },
          {
            text: "掏出鞘翅高速低空俯衝，從通風換氣孔直插核心金庫！",
            nextId: "wemmbu_c2_air",
            statCheck: "strategy"
          }
        ]
      },
      {
        id: "wemmbu_c2_raid",
        name: "Wemmbu 篇：Eggchan 的求救信號",
        charId: "wemmbu",
        description: "你奪得了神兵 The Crucible！但此時黑手黨傳來密信：你的摯友 Eggchan 被綁架在地底熔岩室，勒索你交出所有金庫戰利品。",
        choices: [
          {
            text: "毫不猶豫單刀赴會！啟動軌道巨砲鎖定黑手黨基地，強勢踏平！",
            nextId: "wemmbu_ending_hero",
            itemGain: "Eggchan’s Keepsake Book",
            statCheck: "pvpCombat"
          },
          {
            text: "親手引爆伺服器核心能源，以同歸於盡的決心終結整個 SMP 的腐敗！",
            nextId: "wemmbu_ending_destroyer",
            statCheck: "strategy"
          }
        ]
      },
      // Spoke 線
      {
        id: "spoke_c1",
        name: "Spoke 篇：千萬複製物資大劫案",
        charId: "spoke",
        description: "你發現了違法團隊的物資分流管。一千多萬件附魔金蘋果和滿裝合金甲正源源不絕地流向他們的金庫。你打算：",
        choices: [
          {
            text: "架設秘密漏斗旁路管道，把一千萬件物資全數轉移到自己的基岩密室！",
            nextId: "spoke_c2_heist",
            itemGain: "10,356,000 Duped Gear Hoard",
            statCheck: "intellect"
          },
          {
            text: "在管道終點堆疊 400 輛共振 TNT 礦車，送他們一場伺服器卡頓煙火！",
            nextId: "spoke_c2_boom",
            statCheck: "strategy"
          }
        ]
      },
      {
        id: "spoke_c2_heist",
        name: "Spoke 篇：黑手黨的測謊椅",
        charId: "spoke",
        description: "黑手黨看中你的偷竊技術，邀請你共進晚餐。教父手持匕首逼問你是否願意效忠。桌底下就藏著教父的絕密黑帳本！",
        choices: [
          {
            text: "發揮頂級演技假意效忠，趁機順走黑手黨賄賂黑帳本並反手引爆大樓！",
            nextId: "spoke_ending_agent",
            itemGain: "Mafia Syndicate Black Ledger",
            statCheck: "stealth"
          },
          {
            text: "掏出 Totem of Null 觸發幽靈穿牆，瞬間遁入虛空瀟灑離去！",
            nextId: "spoke_ending_null",
            itemGain: "The Totem of Null",
            statCheck: "intellect"
          }
        ]
      },
      // FlameFrags 線
      {
        id: "flame_c1",
        name: "FlameFrags 篇：卡出不死之身",
        charId: "flamefrags",
        description: "在極限硬核伺服器中，你身陷五名賞金殺手的包圍，生命值僅剩半顆心！此時你背包裡只剩一顆金蘋果與一個圖騰，判定時間只剩 50 毫秒！",
        choices: [
          {
            text: "極限同步吃下金蘋果並切換副手圖騰，觸發封包延遲卡出不死金心！",
            nextId: "flame_c2_immortal",
            itemGain: "Glitched Immortal Heart Reservoir",
            statCheck: "pvpCombat"
          },
          {
            text: "以命相搏！揮舞戰刃直接衝向獵人首領，誓死同歸於盡！",
            nextId: "flame_c2_berserk",
            statCheck: "pvpCombat"
          }
        ]
      },
      {
        id: "flame_c2_immortal",
        name: "FlameFrags 篇：萬人大內戰的先鋒號角",
        charId: "flamefrags",
        description: "你擁有了十顆常駐不死心數，並完成了 ClownPierce 的地獄修煉！萬人大內戰打響，自由同盟被敵軍基岩城牆阻攔，全軍士氣低落！",
        choices: [
          {
            text: "扛起 1000-Player 先鋒軍旗，揮舞死神連斬戰鐮，隻身撞碎城門！",
            nextId: "flame_ending_vanguard",
            itemGain: "ClownPierce’s Training Scythe",
            statCheck: "pvpCombat"
          },
          {
            text: "在敵軍後方發起刺殺戰術，陣斬敵方主將奪回戰場主導權！",
            nextId: "flame_ending_assassin",
            statCheck: "strategy"
          }
        ]
      },
      // 結局
      {
        id: "parrot_ending_king",
        name: "結局：王座上的守護者（Parrot 經典線）",
        description: "你成功加冕為 Unstable SMP 首任國王！在治理王國期間，你用智慧抵禦了背叛與刺殺，建立起受全服敬仰的新秩序。你的名字被永遠刻在主城法典第一頁！",
        badge: "👑 傳奇國王 (The Sovereign)",
        isEnding: true
      },
      {
        id: "parrot_ending_rebel",
        name: "結局：自由同盟軍總司令",
        description: "你從黑牢解救了無數反抗鬥士，率領平民起義推翻了暴政文明，成為 Unstable 世界永不褪色的自由象徵！",
        badge: "⚔️ 自由先驅 (The Liberator)",
        isEnding: true
      },
      {
        id: "parrot_ending_truth",
        name: "結局：破譯代碼的先知",
        description: "你跟隨虛空羅盤找到了伺服器代碼核心，揭開了 Unstable 背後所有的實驗秘密，成為超越常規玩家存在的代碼觀測者！",
        badge: "👁️ 宇宙觀測者 (The Overseer)",
        isEnding: true
      },
      {
        id: "wemmbu_ending_hero",
        name: "結局：不朽情義與帝國霸主（Wemmbu 經典線）",
        description: "你以無可爭議的絕對戰力摧毀黑手黨，救出了摯友 Eggchan。在你們手中，鋼鐵帝國迎來了前所未有的繁榮，成為全服不可撼動的武力巔峰！",
        badge: "🏆 鐵血霸王 (The Iron Sovereign)",
        isEnding: true
      },
      {
        id: "wemmbu_ending_destroyer",
        name: "結局：重構世界的終結者",
        description: "烈焰吞噬了主城與腐敗的官僚。你親手毀滅了舊 Unstable，但在焦土之上，新的無暇世界正悄然孕育！",
        badge: "🔥 終結者 (World Purger)",
        isEnding: true
      },
      {
        id: "spoke_ending_agent",
        name: "結局：埋葬黑手黨的無間教父（Spoke 經典線）",
        description: "黑手黨在連環殉爆中化作飛灰，而你手握全服賄賂黑帳本與千萬複製神裝，坐在廢墟頂端咬著蘋果微笑。你才是黑暗中真正的操盤手！",
        badge: "🎭 幕後大玩家 (The Grand Puppetmaster)",
        isEnding: true
      },
      {
        id: "spoke_ending_null",
        name: "結局：虛空漫遊者",
        description: "你藉由 Totem of Null 穿透了方塊碰撞體，遊走在代碼與實體之間，成為了 Unstable 宇宙中無人能夠觸及的幽靈怪盜！",
        badge: "🌌 虛空幽靈 (The Null Ghost)",
        isEnding: true
      },
      {
        id: "flame_ending_vanguard",
        name: "結局：萬軍莫敵的不死戰神（FlameFrags 經典線）",
        description: "你手持先鋒軍旗與死神戰鐮，以一己之力鑿穿千人敵陣！戰爭結束之時，你站在殘垣斷壁之上，全服戰士為你的勇武齊聲高呼！",
        badge: "⚡ 不朽戰神 (The Immortal Vanguard)",
        isEnding: true
      },
      {
        id: "flame_ending_assassin",
        name: "結局：幽影戰刃",
        description: "敵將首級在瞬息之間落地。無人知曉你是如何接近的，只知道戰場上曾劃過一抹致命的死神紅光！",
        badge: "🗡️ 戰場收割者 (The Silent Reaper)",
        isEnding: true
      }
    ]
  }
};
