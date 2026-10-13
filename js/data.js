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
          title: "第一紀元：代碼裂痕與毀滅世界的按鈕",
          summary: "Parrot 在探索荒蕪邊境時，發現了一處未記錄在伺服器生成清單中的古代紅石地下室。在那裡，他挖出了一個被標註為『抹除協議』的按鈕，只要通電就會引發區塊數據崩潰。這個意外發現讓他意識到：Unstable 根本不是一個普通的多人伺服器，而是一個代碼不斷腐化崩解的致命試驗場。"
        },
        {
          title: "第二紀元：Paragon 絕海黑牢大越獄",
          summary: "因為追查失蹤玩家的名單，Parrot 遭到黑勢力伏擊，被秘密押送至號稱『絕對無法生還』的 Paragon 監獄。在禁錮中，他暗中策劃數週，利用衛兵輪班的視線死角，以不可思議的紅石走私手段藏匿關鍵物資，最終炸穿基岩屏障上演全服震驚的大越獄。"
        },
        {
          title: "第三紀元：王權大選與王座治理風暴",
          summary: "伺服器進入群雄割據時代，各方勢力肆意屠殺新手。Parrot 決定站出來參選 Unstable 首任國王。在經歷殘酷的政治鬥爭、造勢演說與暗殺防禦後，他以壓倒性票數登基。即位後他推行《治安法典》、設立物資安全區，但在執政期間，他必須同時對抗來自地下黑手黨的賄賂威脅與野心領主的叛變。"
        },
        {
          title: "第四紀元：揭發偽善文明與萬人內戰大決戰",
          summary: "表面繁榮的巨大文明暗中進行人口奴役與資源掠奪。Parrot 深入調查搜集鐵證，在全服面前揭穿偽善帝國的謊言。這引發了 Unstable 歷史上規模最龐大的『萬人大內戰（Civil War）』，Parrot 攜手 FlameFrags 與 Wemmbu 組成自由同盟，在漫天砲火與召喚巨物中迎來終局。"
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
          title: "第一紀元：突襲全服最非法的地下金庫",
          summary: "數個大公會暗中將全服透過漏洞複製的神級物資存放在深層基岩金庫。Wemmbu 鎖定目標，耗費漫長心力縝密計算活塞防爆盲區與珍珠拋擲角度，以不可思議的單兵戰力強行破庫，將堆積成山的違法神裝席捲一空，一戰封神。"
        },
        {
          title: "第二紀元：全服大追捕中的不可捕捉者",
          summary: "洗劫金庫後，全服組織了由數十名頂尖 PVP 玩家組成的追獵軍團。Wemmbu 依靠極致的走位、三叉戟雷暴飛行與鞘翅超低空突防，在重重包圍網中如入無人之境，反過來將多名追捕首領斬於馬下。"
        },
        {
          title: "第三紀元：建造最偉大文明與帝國決戰",
          summary: "Wemmbu 用洗劫來的巨額財富建立起超越時代的先進文明。這引起了傲慢的 PrinceZam 帝國的嫉恨，雙方爆發全面帝國戰爭。Wemmbu 運用軌道大砲與高壓 TNT 戰術，徹底將敵對文明從地圖上抹去。"
        },
        {
          title: "第四紀元：為何我決定親手毀滅 Unstable SMP",
          summary: "當發現伺服器底層已被黑手黨的假鈔網絡與腐敗管理層徹底蛀空時，Wemmbu 意識到拯救這個世界唯一的辦法就是徹底推倒重來。他啟動了引發全服大震盪的連鎖毀滅裝置，成為毀譽參半的悲劇霸主。"
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
          title: "第一紀元：啟動毀滅伺服器的古老漏洞",
          summary: "作為全系列開山首部曲，Spoke 與 Jamato 發掘了數個伺服器架構漏洞。透過特殊方塊更新阻斷與漏斗傳輸延遲，他展示了如何用最廉價的材料讓整個伺服器瀕臨崩潰，點燃了整個 Unstable Universe 的狂暴導火線。"
        },
        {
          title: "第二紀元：狂偷一千萬件複製神級物資",
          summary: "當得知大型違規團隊在地下建立自動刷物資農場時，Spoke 沒有舉報，而是暗中挖掘地道連通了對方的物流管道。他在短短數小時內神不知鬼不覺地搬空了超過 10,356,000 件複製神裝，震驚整個伺服器經濟圈。"
        },
        {
          title: "第三紀元：搞垮全服第一富豪文明",
          summary: "面對 Roshambogames 依靠壟斷建立的億萬財富帝國，Spoke 施展經濟戰術與精妙陷阱。他利用假金庫調虎離山，引爆對方的核心中央銀行，讓不可一世的富豪文明在一夕之間徹底破產淪為乞丐。"
        },
        {
          title: "第四紀元：滲透黑手黨與終結家族黃昏",
          summary: "黑手黨勢力企圖掌控全服命脈，Spoke 假意投誠加入，憑藉八面玲瓏的演技贏得教父信任並晉升為心腹。在黑手黨企圖奪權的決戰之夜，他反手引爆了埋在會議室底下的共振 TNT 礦車，徹底埋葬黑手黨。"
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
          title: "第一紀元：極限硬核卡出不死金心之謎",
          summary: "在全服人人自危的極限生存中，FlameFrags 透過食物金蘋果飽食度延遲與圖騰判定機制的微妙毫秒差，意外使自己的生命值突破上限，卡出了永久額外的不死心數儲備，成為全服首位實質上的『不死之人』。"
        },
        {
          title: "第二紀元：孤狼誓言！單兵清剿毒瘤公會",
          summary: "面對惡意霸凌新手、霸佔主要礦區的毒瘤公會，FlameFrags 拒絕妥協。他設下連環陷阱，在深山雪原展開長達兩小時的游擊拉鋸戰，以 1v5 的懸殊人數比將敵方五名幹部全員斬殺，名震全服。"
        },
        {
          title: "第三紀元：拜師死神！ClownPierce 的地獄修煉",
          summary: "為了應對日益強大的各路野心家，FlameFrags 尋訪到了深居簡出的全服第一戰神 ClownPierce。在長達數週生不如死的極限近戰特訓後，他掌握了絕世連刀與破盾節奏，獲贈象徵死神傳承的收割巨刃。"
        },
        {
          title: "第四紀元：萬人決戰！千軍大內戰的先鋒之鋒",
          summary: "在 Unstable SMP 最終的大內戰中，FlameFrags 擔任自由同盟的突擊先鋒總司令。身披染血的定制下界合金戰甲，他親自率領前鋒衛隊撕開敵軍三道防線，戰鬥到最後一刻，守護了同盟的榮耀。"
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
