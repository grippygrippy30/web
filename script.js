const games = [
  {
    title: '星航余烬',
    category: '科幻 RPG',
    year: 2025,
    tone: '群像、多线选择',
    tags: ['太空', '多结局', '阵营博弈'],
    hook: `在崩坏的星际航路上，船员的每一次抉择都会改写文明的去向。`,
    synopsis: `玩家接手一艘搁浅的殖民舰，与来自不同星球的船员合作或对抗，决定是否重启跃迁科技，亦或让舰上文明重新适应星海的残酷法则。`,
    copy: `“如果这一跃失败，人类的星图将彻底被时间抹平。” 故事以跃迁引擎修复为核心，玩家需要在权力真空中团结或瓦解派系：技术官僚希望恢复旧制，黑市船员拥抱无政府的自由，宗教者则宣称恒星之火是神意。每个选择都会留下不可逆的记录，成为广播剧般的旁白片段，拼接出属于你的星际寓言。`,
  },
  {
    title: '烟火长夜',
    category: '叙事冒险',
    year: 2023,
    tone: '都市、悬疑',
    tags: ['双主角', '分章节', '轻解谜'],
    hook: `一夜横跨城市天桥与地下酒吧，真相藏在每一次并肩走过的长街。`,
    synopsis: `两位失联多年的童年玩伴，因一场突如其来的烟花秀重逢。他们在一夜之间串联起都市的秘密：收藏家、黑客、街头艺人与失踪档案。`,
    copy: `游戏采用“实时夜行”结构，时间推进即剧情推进。玩家需要决定何时停留、何时直行，以收集碎片化线索。情绪文案围绕“错过与和解”展开：路灯下的对话像胶片回放，公交牌上的广告语成了对彼此的提示，最终在黎明前决定是揭开旧伤，还是把秘密埋入第一缕阳光。`,
  },
  {
    title: '极昼零点',
    category: '动作 Roguelike',
    year: 2024,
    tone: '极地科幻、快节奏',
    tags: ['肉鸽', '连击', '光影战斗'],
    hook: `极昼中没有夜晚，只有疯狂闪光的敌人与永不冷却的战意。`,
    synopsis: `在失控的极地科研站，光能实验引发生物变异。玩家操纵可重组的光刃，穿梭冰裂与机械走廊，选择强化光谱或温度，进化出独特的战斗风格。`,
    copy: `核心卖点是“光谱构筑”。不同颜色的光片会改变技能轨迹，触发连段或蓄力爆发。每次战斗后，广播里都会播报你造成的光污染指数，直接影响下一关的敌人形态。剧情旁白以科学日志和个人录音交替展开，让每一次升级都像撕开更深一层的真相。`,
  },
  {
    title: '山海异邮',
    category: '开放世界',
    year: 2022,
    tone: '国风、生态探索',
    tags: ['山海经', '摄影', '驯化'],
    hook: `用手札记录百兽，用镜头捕捉流传千年的山海谣。`,
    synopsis: `玩家作为旅拍写手，穿行在现代与上古交错的山海秘境，驯化奇兽、修复断裂的古路，并把见闻上传至云端，唤醒沉睡的古籍数据。`,
    copy: `文案强调“温柔的冒险”。社群玩家可分享自己的兽志卡片，附上音频注释；单人玩家则能按季节刷新生态。剧情主线围绕一本缺页的《山海异邮》，每完成一章都会解锁民俗广播，讲述当地的歌谣与传说，让探索兼具民俗科考的厚度。`,
  },
  {
    title: '霓裳试炼',
    category: '模拟经营',
    year: 2023,
    tone: '国潮、美妆工坊',
    tags: ['服装设计', '店铺经营', '剧情养成'],
    hook: `把一间老裁缝铺打造成潮流圣地，每件衣裙都是一个人物的回忆。`,
    synopsis: `从租下斑驳的胡同店面开始，玩家要调配布料、设计版型、经营口碑，并完成客人带来的情感委托。`,
    copy: `文案卖点在“情感定制”。每位客人都有一段需求：舞者需要一袭能在聚光灯下闪耀的裙子，婚纱师想为自己做人生第一件礼服。通过对话选择和设计思路，玩家既能解锁服装技能，又能书写他们的故事。剧情章节以节日档期串联，形成“月时装志”。`,
  },
  {
    title: '雾锁港湾',
    category: '悬疑解谜',
    year: 2021,
    tone: '港风、推理',
    tags: ['线索拼图', '非线性', '广播剧风'],
    hook: `一座被海雾吞没的旧港，每个路灯下都藏着另一种时间线。`,
    synopsis: `玩家扮演外地记者，跟随老捕快重走案件现场。通过收集录音、地图标记和街坊八卦，拼合出发生在不同时期的连环案全貌。`,
    copy: `叙事采用“声音+地图”双轨。每个场景都会解锁一段广播剧，配合地图上的线索贴纸。玩家决定先调查哪个年份的案件，剧情会根据信息碎片重排，形成独特的推理顺序。文案突出港口雨夜、霓虹和海雾的氛围，为解谜过程营造电影感。`,
  },
  {
    title: '风暴协同',
    category: '合作射击',
    year: 2024,
    tone: 'PVE 战术、生存',
    tags: ['四人小队', '灾厄怪潮', '战术道具'],
    hook: `风暴撕裂城市，只有协同才能撑过一波又一波的怪潮。`,
    synopsis: `在全球风暴后的废墟里，玩家组成四人小队清理异化体，建设临时防线，分配有限的能量与物资。`,
    copy: `主打“共振战术”玩法：角色技能在叠加时会触发额外效果，如护盾与雷击形成“离子壁流”。每局开始前的广播调度会用简短文案强调任务节奏——“三分钟后北街封锁，所有队伍撤入地铁”，带来实时战术压力。剧情通过战后汇报与基地日记展开，突出队友间的信任感。`,
  },
  {
    title: '细语森林',
    category: '治愈经营',
    year: 2022,
    tone: '慢节奏、温馨',
    tags: ['农场', '心灵疗愈', '动物伙伴'],
    hook: `你疗愈森林，森林也疗愈你。`,
    synopsis: `玩家继承一片濒临枯竭的森林疗养地，通过种植、采集与陪伴动物，让森林恢复活力，并为来访的旅客提供心灵平静的空间。`,
    copy: `文案突出“互相治愈”的主题。每种植物都有情绪属性，能影响旅客的心情；夜晚的篝火旁会播放匿名来信，提供新的经营灵感。章节任务围绕“季节与心情”展开，让玩家感到自己的经营选择正在温柔地改变每个人。`,
  },
  {
    title: '零域新生',
    category: '赛博平台跳跃',
    year: 2025,
    tone: '节奏、速度感',
    tags: ['电音', '跑酷', 'Boss 挑战'],
    hook: `赛博都市的屋檐与霓虹是你的跑道，音乐节拍就是武器。`,
    synopsis: `玩家扮演数据快递员，在垂直都市的管道间奔跑，随着音乐节奏完成跳跃、射击与黑客入侵，与巨型 AI 中枢展开对决。`,
    copy: `关卡采用“曲目关卡”概念，每首曲子都是一条跑道。踩准节拍可获得加速度与子弹强化，偏离节奏则会触发电子噪音干扰。文案强调“速度与律动”的爽感，同时提供角色背景：主角为逃亡的 DJ 黑客，用音乐解锁城市被封印的记忆碎片。`,
  },
  {
    title: '余烬与铁',
    category: '策略卡牌',
    year: 2023,
    tone: '蒸汽朋克、战棋',
    tags: ['卡组构筑', '战棋网格', '资源管理'],
    hook: `蒸汽列车驶向前线，卡牌就是战术齿轮。`,
    synopsis: `玩家指挥列车军团，在网格战场上调度机甲与步兵，利用蒸汽与电能驱动的卡牌触发连携。`,
    copy: `卖点是“路线规划+卡组成长”。每次停靠车站可改装车厢、雇佣随从并解锁剧情信件，讲述不同派系对战争的理解。战斗中文案以简短指令呈现，确保节奏紧凑；战后则会有“车站日志”铺陈世界观，使策略与叙事相互支撑。`,
  },
];

const pillsContainer = document.getElementById('category-pills');
const gameGrid = document.getElementById('game-grid');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const resetBtn = document.getElementById('reset-filters');
const resultCount = document.getElementById('result-count');

const categories = ['全部', ...new Set(games.map((g) => g.category))];
let activeCategory = '全部';
let activeSearch = '';
let activeSort = 'featured';

function createPills() {
  categories.forEach((cat) => {
    const pill = document.createElement('button');
    pill.className = 'pill';
    pill.textContent = cat;
    if (cat === activeCategory) pill.classList.add('active');
    pill.addEventListener('click', () => {
      activeCategory = cat;
      document.querySelectorAll('.pill').forEach((el) => el.classList.remove('active'));
      pill.classList.add('active');
      render();
    });
    pillsContainer.appendChild(pill);
  });
}

function filterGames() {
  return games
    .filter((g) => (activeCategory === '全部' ? true : g.category === activeCategory))
    .filter((g) => {
      if (!activeSearch) return true;
      const keyword = activeSearch.toLowerCase();
      const fields = [g.title, g.tone, g.hook, g.synopsis, ...g.tags];
      return fields.some((f) => f.toLowerCase().includes(keyword));
    })
    .sort((a, b) => {
      if (activeSort === 'newest') return b.year - a.year;
      if (activeSort === 'oldest') return a.year - b.year;
      return a.title.localeCompare(b.title);
    });
}

function createCard(game) {
  const card = document.createElement('article');
  card.className = 'card';

  const header = document.createElement('header');
  const title = document.createElement('h3');
  title.textContent = game.title;
  const category = document.createElement('span');
  category.className = 'category-tag';
  category.textContent = game.category;
  header.appendChild(title);
  header.appendChild(category);

  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.innerHTML = `<span>发布：${game.year}</span><span>${game.tone}</span>`;

  const hook = document.createElement('p');
  hook.className = 'copy';
  hook.textContent = game.hook;

  const tags = document.createElement('div');
  tags.className = 'tag-row';
  game.tags.forEach((tag) => {
    const badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = tag;
    tags.appendChild(badge);
  });

  const details = document.createElement('div');
  details.className = 'details';
  details.innerHTML = `
    <p class="copy"><strong>剧情提要：</strong>${game.synopsis}</p>
    <p class="copy"><strong>文案段落：</strong>${game.copy}</p>
  `;

  const actions = document.createElement('div');
  actions.className = 'actions';
  const toggle = document.createElement('button');
  toggle.className = 'toggle';
  toggle.textContent = '展开详情';
  toggle.addEventListener('click', () => {
    const isOpen = details.classList.toggle('open');
    toggle.textContent = isOpen ? '收起详情' : '展开详情';
  });

  actions.appendChild(toggle);

  card.append(header, meta, hook, tags, details, actions);
  return card;
}

function render() {
  const filtered = filterGames();
  gameGrid.innerHTML = '';
  filtered.forEach((game) => gameGrid.appendChild(createCard(game)));
  resultCount.textContent = `共 ${filtered.length} 款游戏`;
}

searchInput.addEventListener('input', (e) => {
  activeSearch = e.target.value.trim();
  render();
});

sortSelect.addEventListener('change', (e) => {
  activeSort = e.target.value;
  render();
});

resetBtn.addEventListener('click', () => {
  activeCategory = '全部';
  activeSearch = '';
  activeSort = 'featured';
  document.querySelectorAll('.pill').forEach((el) => el.classList.remove('active'));
  document.querySelectorAll('.pill')[0]?.classList.add('active');
  searchInput.value = '';
  sortSelect.value = 'featured';
  render();
});

createPills();
render();
