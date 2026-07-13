const letterMap = {
  A:1,J:1,S:1,
  B:2,K:2,T:2,
  C:3,L:3,U:3,
  D:4,M:4,V:4,
  E:5,N:5,W:5,
  F:6,O:6,X:6,
  G:7,P:7,Y:7,
  H:8,Q:8,Z:8,
  I:9,R:9
};
const vowelSet = new Set(['A','E','I','O','U']);

const numberMeanings = {
  1:{label:'1',keyword:'スタート・独立・リーダーシップ',essence:'自分から動き出す力を持つ数字。人より一歩早く行動し、新しいことを始める役割を担いやすい人です。',gift:'決断力、先頭に立つ力',caution:'人に頼るのが苦手になりやすいこと',love:'好きになったら自分から動くタイプ。相手に主導権を譲りすぎると物足りなさを感じやすいことも。',work:'起業・新規事業・独立など、ゼロから何かを始める場面で力を発揮します。',say:'「自分から動く力がある人」という前向きな言い方で伝えましょう。',avoid:'「わがまま」「自己中心的」と決めつけないこと。',mini:'新しいことを始めるとき、人の後ろについていくより自分で切り拓く方が力を発揮するタイプですね。'},
  2:{label:'2',keyword:'調和・サポート・繊細さ',essence:'人と人との間に立ち、場を整える力を持つ数字。相手の気持ちを汲み取るのが得意な人です。',gift:'協調性、細やかな気配り',caution:'自分の意見を後回しにしやすいこと',love:'相手に合わせることが多く、聞き役になりやすいタイプ。自分の気持ちも伝える練習をすると関係が深まります。',work:'チームのサポート役、調整役、アシスタント業務などで力を発揮します。',say:'「人を支える力がある人」という言い方で伝えましょう。',avoid:'「優柔不断」「主体性がない」と決めつけないこと。',mini:'場の空気を読んで、人と人の間に立つのが自然とできる方ですね。'},
  3:{label:'3',keyword:'表現・楽しさ・創造性',essence:'気持ちや発想を言葉や形にして届ける力を持つ数字。場を明るくする存在になりやすい人です。',gift:'表現力、発想の豊かさ',caution:'気分にムラが出やすいこと',love:'楽しい雰囲気を作るのが得意。深刻になりすぎず、明るく関係を育てるタイプです。',work:'企画、SNS発信、接客、クリエイティブ職など、表現を活かす仕事に向きます。',say:'「表現する力がある人」という言い方で伝えましょう。',avoid:'「気分屋」「軽い」と決めつけないこと。',mini:'思ったことを言葉や形にして届ける力が、自然と周りを明るくしていますね。'},
  4:{label:'4',keyword:'安定・誠実・積み上げ',essence:'コツコツと積み上げ、形あるものを作っていく力を持つ数字。信頼を積み重ねるタイプです。',gift:'堅実さ、継続する力',caution:'変化への抵抗が強くなりやすいこと',love:'じっくり時間をかけて関係を育てるタイプ。安定を大事にします。',work:'経理、事務、品質管理など、正確さとコツコツ続ける力が求められる仕事に向きます。',say:'「積み上げる力がある人」という言い方で伝えましょう。',avoid:'「頭が固い」「面白みがない」と決めつけないこと。',mini:'一歩ずつ確実に積み上げていくところが、この方の一番の強みですね。'},
  5:{label:'5',keyword:'自由・変化・好奇心',essence:'変化や刺激を求めて動き回る力を持つ数字。新しい経験を通して成長するタイプです。',gift:'行動力、状況への適応力',caution:'落ち着きのなさが出やすいこと',love:'刺激や変化のある関係を求めるタイプ。同じ日々の繰り返しに息苦しさを感じやすいことも。',work:'営業、旅行関連、複数のプロジェクトを掛け持つ仕事など、変化のある働き方に向きます。',say:'「変化に強い人」という言い方で伝えましょう。',avoid:'「飽きっぽい」「落ち着きがない」と決めつけないこと。',mini:'新しい環境に飛び込む力が、この方をどんどん成長させていますね。'},
  6:{label:'6',keyword:'愛情・責任・調和',essence:'家族やコミュニティを大切に思い、人を支える力を持つ数字。世話好きなタイプです。',gift:'面倒見の良さ、責任感',caution:'一人で背負い込みやすいこと',love:'相手を支え、世話をすることに愛情を感じるタイプ。尽くしすぎないバランスも大切です。',work:'教育、医療・福祉、家族経営など、人を支える仕事に向きます。',say:'「人を支える愛情深い人」という言い方で伝えましょう。',avoid:'「お節介」「重い」と決めつけないこと。',mini:'人を放っておけないやさしさが、この方の一番の魅力ですね。'},
  7:{label:'7',keyword:'探求・分析・内省',essence:'物事の本質を見極めようとする力を持つ数字。一人の時間の中で深く考えるタイプです。',gift:'洞察力、専門性を極める力',caution:'人と距離を置きすぎやすいこと',love:'一人の時間を大切にするタイプ。深く理解し合える相手だと心を開きやすくなります。',work:'研究、専門職、分析やデータを扱う仕事に向きます。',say:'「深く考える力がある人」という言い方で伝えましょう。',avoid:'「暗い」「近寄りがたい」と決めつけないこと。',mini:'物事の本質を静かに見極める力が、この方の強みですね。'},
  8:{label:'8',keyword:'達成・力・現実的な豊かさ',essence:'目標に向かって現実を動かしていく力を持つ数字。物事を形にし、成果を出すタイプです。',gift:'実行力、物事を采配する力',caution:'結果や評価にこだわりすぎやすいこと',love:'対等なパートナーシップを求めるタイプ。上下関係になりやすい相手とは疲れやすいことも。',work:'経営、マネジメント、営業のトップなど、成果と結果が求められる仕事に向きます。',say:'「現実を動かす力がある人」という言い方で伝えましょう。',avoid:'「お金にがめつい」「支配的」と決めつけないこと。',mini:'目標に向かって現実を動かしていく力が、この方の一番の武器ですね。'},
  9:{label:'9',keyword:'博愛・完了・手放す力',essence:'個人の枠を超えて、人や社会のために力を使う数字。物事をまとめ、締めくくる役割を担いやすい人です。',gift:'包容力、視野の広さ',caution:'自分の気持ちを後回しにしやすいこと',love:'広い心で相手を受け止めるタイプ。自分の気持ちも後回しにしすぎないことが大切です。',work:'福祉、NPO、教育など、社会や人のために力を使う仕事に向きます。',say:'「大きな視野を持つ人」という言い方で伝えましょう。',avoid:'「自己犠牲的」「感情がない」と決めつけないこと。',mini:'個人の枠を超えて人のために動ける、包容力のある方ですね。'},
  11:{label:'11／2',keyword:'直感・気づき・精神性',essence:'強い感受性と直感力を持つ、2の発展形。人に気づきを与える存在になりやすい数字です。',gift:'ひらめき、人を導く力',caution:'繊細さゆえに不安定になりやすいこと',love:'感受性が高く、相手の気持ちを敏感に察知するタイプ。繊細さを理解してくれる相手と安定しやすくなります。',work:'カウンセリング、ヒーリング、アート、教育など、直感と気づきを活かす仕事に向きます。',say:'「気づきを人に届けられる人」という言い方で伝え、2の力が強まった数字であることも添えましょう。',avoid:'「神秘的」「特別な人」と過度に神格化しないこと。',mini:'人が気づかないことに、ふっと気づく力を持っている方ですね。'},
  22:{label:'22／4',keyword:'大きな構築・現実化する力',essence:'壮大なビジョンを現実の形にしていく、4の発展形。大きな仕組みを作る力を持つ数字です。',gift:'実現するスケールの大きさ',caution:'プレッシャーを感じやすいこと',love:'大きなビジョンを一緒に描ける相手を求めるタイプ。将来像を共有できる関係を大事にします。',work:'大規模プロジェクト、組織づくり、社会的な仕組みを作る仕事に向きます。',say:'「大きな仕組みを作る力がある人」という言い方で伝え、4の力が強まった数字であることも添えましょう。',avoid:'「大物」「特別」と過度に神格化しないこと。',mini:'壮大なビジョンを現実の形にしていく力を持っている方ですね。'},
  33:{label:'33／6',keyword:'無条件の愛・奉仕',essence:'見返りを求めずに人を支える、6の発展形。深い愛情で人を包み込む数字です。',gift:'深い包容力、癒しの力',caution:'自分を犠牲にしやすいこと',love:'見返りを求めず相手を包み込む愛情深さがあるタイプ。自分を後回しにしすぎないことも意識したいところです。',work:'教育、医療、ヒーリング、福祉など、深い愛情で人を支える仕事に向きます。',say:'「無条件に人を支える力がある人」という言い方で伝え、6の力が強まった数字であることも添えましょう。',avoid:'「聖人」「特別」と過度に神格化しないこと。',mini:'見返りを求めない深い愛情で、人を包み込む力を持っている方ですね。'}
};

const personalYearMeanings = {
  1:'新しい何かを始めるタイミング。行動を起こすほど流れが動きやすい年。',
  2:'人との協力や、待つことが大切になる年。焦らず土台を整える時期。',
  3:'表現やコミュニケーションを楽しむ年。人との交流が運気を後押しする。',
  4:'基盤を固める年。地道な積み重ねが後々の安定につながる時期。',
  5:'変化や新しい出会いが増える年。柔軟に流れに乗ると運が開ける。',
  6:'人間関係や家庭、責任と向き合う年。人を支えることでも運気が育つ。',
  7:'内側を見つめ直す年。一人の時間を大切にすると気づきが増える。',
  8:'これまでの努力が形になりやすい年。仕事や成果に力を注ぐとよい時期。',
  9:'何かを締めくくり、手放す年。次のサイクルへの準備期間。'
};

const numberRoles = {
  lifePath:{name:'ライフパスナンバー',role:'生まれ持った人生の土台・大きなテーマ'},
  birthday:{name:'バースデーナンバー',role:'生まれ持った得意なこと・才能のクセ'},
  destiny:{name:'ディスティニーナンバー',role:'今の名前が示す、人生で果たす役割'},
  soul:{name:'ソウルナンバー',role:'心の奥にある、本当の望み'},
  personality:{name:'パーソナリティナンバー',role:'周囲から見えている、あなたの印象'}
};

function reduceNumber(nRaw){
  let n = Number(nRaw);
  while(n > 9){
    if(n === 11 || n === 22 || n === 33) return n;
    n = String(n).split('').reduce((a,c) => a + Number(c), 0);
  }
  return n;
}

function meaningOf(n){ return numberMeanings[n] || numberMeanings[reduceNumber(n)]; }

function displayNumber(n){
  return (n === 11 || n === 22 || n === 33) ? `${n}<small>／${n===11?2:n===22?4:6}</small>` : `${n}`;
}

function lifePathNumber(y, m, d){
  const total = reduceNumber(m) + reduceNumber(d) + reduceNumber(y);
  return reduceNumber(total);
}

function birthdayNumber(d){
  return reduceNumber(d);
}

function reduceFull(nRaw){
  let n = Number(nRaw);
  while(n > 9){ n = String(n).split('').reduce((a,c) => a + Number(c), 0); }
  return n;
}

function personalYearNumber(m, d, year){
  const total = reduceFull(m) + reduceFull(d) + reduceFull(year);
  return reduceFull(total);
}

function maturityNumber(lifePath, destiny){
  return reduceNumber(Number(lifePath) + Number(destiny));
}

function onlyLetters(name){
  return (name || '').toUpperCase().replace(/[^A-Z]/g, '');
}

function destinyNumber(name){
  const letters = onlyLetters(name);
  let total = 0;
  for(const ch of letters){ total += letterMap[ch] || 0; }
  return reduceNumber(total);
}

function soulNumber(name){
  const letters = onlyLetters(name);
  let total = 0;
  for(const ch of letters){ if(vowelSet.has(ch)) total += letterMap[ch] || 0; }
  return reduceNumber(total || 0);
}

function personalityNumber(name){
  const letters = onlyLetters(name);
  let total = 0;
  for(const ch of letters){ if(!vowelSet.has(ch)) total += letterMap[ch] || 0; }
  return reduceNumber(total || 0);
}

function calcChart(name, y, m, d){
  return {
    name,
    birth: `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`,
    lifePath: lifePathNumber(y, m, d),
    birthday: birthdayNumber(d),
    destiny: destinyNumber(name),
    soul: soulNumber(name),
    personality: personalityNumber(name)
  };
}

function getMe(){
  try{ return JSON.parse(localStorage.getItem('numeMe') || 'null'); }catch(e){ return null; }
}

function setMe(name, y, m, d){
  const entry = calcChart(name, y, m, d);
  try{ localStorage.setItem('numeMe', JSON.stringify(entry)); }catch(e){}
  addToRoster(entry);
  return entry;
}

function getRoster(){
  try{ return JSON.parse(localStorage.getItem('numeRoster') || '[]'); }catch(e){ return []; }
}

function addToRoster(entry){
  const roster = getRoster();
  const idx = roster.findIndex(r => r.name === entry.name);
  if(idx >= 0) roster[idx] = entry; else roster.push(entry);
  try{ localStorage.setItem('numeRoster', JSON.stringify(roster)); }catch(e){}
  return roster;
}

function sensei(html){
  return `<div class="sensei-row"><div class="sensei-avatar">🦊</div><div class="sensei-bubble-wrap"><div class="sensei-name">かず先生</div><div class="sensei-bubble">${html}</div></div></div>`;
}

function initSubjectSelect(selectEl, onChange){
  const roster = getRoster();
  if(roster.length === 0) return null;
  selectEl.innerHTML = roster.map((r,i) => `<option value="${i}">${r.name}</option>`).join('');
  const meEntry = getMe();
  if(meEntry){
    const idx = roster.findIndex(r => r.name === meEntry.name);
    if(idx >= 0) selectEl.selectedIndex = idx;
  }
  selectEl.addEventListener('change', () => onChange(roster[Number(selectEl.value)]));
  return roster[Number(selectEl.value)];
}
