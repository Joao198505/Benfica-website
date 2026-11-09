// =====================================================
//  Benfica-Fanseite – Script
// =====================================================

// ===== Sprache (Deutsch / Português) =====
let sprache = "de";
try { sprache = localStorage.getItem("benfica-sprache") || "de"; } catch (e) {}

// Portugiesische Texte für alle Elemente mit data-i18n
// (die deutschen Texte stehen direkt in index.html)
const pt = {
  nav_kader: "Plantel", nav_geschichte: "História", nav_titel: "Títulos", nav_stadion: "Estádio",
  hero_kicker: "Sport Lisboa e Benfica · desde 1904",
  hero_titel: "As Águias<br>de Lisboa",
  hero_text: "O maior campeão de Portugal, bicampeão europeu e um clube que, para milhões de pessoas, é muito mais do que futebol.",
  stat_jahre: "Anos de história", stat_meister: "Campeonatos (recorde)", stat_europa: "Taças dos Campeões Europeus",
  countdown_titel: "Próximo jogo",
  btn_kader: "Ver o plantel atual", btn_entdecken: "Descobrir ↓",
  geschichte_titel: "História", geschichte_intro: "Clica num ano para saber mais.",
  geschichte_verein: "O clube", geschichte_wappen: "O emblema",
  tl_1904: "A 28 de fevereiro de 1904 é fundado o clube em Lisboa, inicialmente com o nome Sport Lisboa. Poucos anos depois dá-se a fusão que origina o Sport Lisboa e Benfica.",
  tl_1961: "Em Berna, o Benfica vence o FC Barcelona na final e conquista a Taça dos Campeões Europeus, pondo fim ao domínio do Real Madrid.",
  tl_1962: "Revalidação do título: em Amesterdão, o Benfica bate o Real Madrid por 5-3. O jovem Eusébio marca dois golos na final.",
  tl_1966: "No Mundial de Inglaterra, Eusébio leva Portugal ao terceiro lugar e é o melhor marcador do torneio. Torna-se a primeira grande estrela mundial do clube.",
  tl_2003: "É inaugurado o novo Estádio da Luz. Um ano depois recebe a final do Euro 2004.",
  tl_heute_jahr: "Hoje",
  tl_heute: "O Benfica é um dos clubes com mais sócios no mundo e é conhecido pela sua forte academia de formação no Seixal.",
  eu_kicker: "O Pantera Negra · 1942–2014",
  eu_text: "O “Pantera Negra” chegou de Moçambique a Lisboa em 1960 e tornou-se o maior jogador da história do clube. Com a sua velocidade e o seu remate poderoso marcou uma era inteira. Uma estátua em frente ao Estádio da Luz recorda-o e, desde 2015, repousa no Panteão Nacional em Lisboa.",
  eu_tore: "Golos oficiais pelo Benfica", eu_meister: "Campeonatos", eu_schuh: "Botas de Ouro", eu_wm: "Golos no Mundial de 1966",
  titel_titel: "Sala de Troféus", titel_intro: "Clica numa taça. Atualizado: verão de 2026.",
  stadion_1: "O “Estádio da Luz” é a casa do Benfica e um dos maiores estádios de Portugal. Aqui realizaram-se, entre outras, a final do Euro 2004 e a final da Liga dos Campeões de 2014.",
  stadion_2: "Antes de muitos jogos em casa, uma águia verdadeira voa pelo estádio e pousa no emblema do clube. Para muitos adeptos é o momento mais emocionante do dia de jogo.",
  fakten: "Factos", f_ort: "Local:", f_eroeffnet: "Inaugurado:", f_kap: "Capacidade:", f_kap_wert: "mais de 60.000", f_spitz: "Alcunha:",
  legenden_titel: "Lendas",
  leg_coluna_rolle: "Médio · 1954–1970", leg_coluna: "O lendário capitão da geração de ouro que conquistou duas vezes a Taça dos Campeões.",
  leg_aguas_rolle: "Avançado · 1950–1963", leg_aguas: "Goleador e capitão na primeira conquista europeia, em 1961.",
  leg_rui_rolle: "Médio · formado no clube", leg_rui: "Elegante número 10 que, depois de anos em Itália, regressou ao clube do coração.",
  fans_zitat: "De muitos, um: “E Pluribus Unum” é o lema do clube.",
  fan_aguias: "A águia simboliza força e independência e é o símbolo do clube.",
  fan_encarnados: "Alcunha que vem das tradicionais camisolas vermelhas.",
  fan_welt_titel: "No mundo inteiro",
  fan_welt: "Há Casas do Benfica em Portugal e em todo o mundo, também na Alemanha.",
  quiz_titel: "Quiz do Benfica", quiz_intro: "Quanto sabes sobre as Águias?",
  kader_titel: "Plantel 2026/27", kader_stand: "Treinador: Marco Silva · Atualizado: outono de 2026",
  news_intro: "O mais recente sobre as Águias – resumido por palavras nossas, com link para o artigo original.",
  footer_1: "Um site de adeptos · Feito com ❤️ pelo Joao",
  footer_2: "Não é um site oficial do Sport Lisboa e Benfica.",
  ergebnisse_titel: "Últimos resultados", tabelle_titel: "Classificação Liga Portugal",
  bq_titel: "Créditos das imagens",
  bq_text: `<p>Este site de adeptos é privado e não comercial.</p>
          <ul>
            <li><strong>Emblemas (atual e históricos):</strong> sinais e marcas do Sport Lisboa e Benfica.</li>
            <li><strong>Taças:</strong> direitos dos respetivos organizadores (UEFA, Liga Portugal, Federação Portuguesa de Futebol) ou dos fotógrafos.</li>
            <li><strong>Fotografias</strong> (início, estádio, adeptos, Eusébio): direitos dos respetivos fotógrafos.</li>
          </ul>
          <p>Todos os outros gráficos, como a águia a voar e as camisolas, são criação própria. Quem tiver direitos sobre uma imagem e quiser que seja retirada ou identificada de outra forma, será atendido de imediato.</p>`,
  ds_titel: "Privacidade",
  ds_text: `<ul>
            <li>Este site não usa cookies nem serviços de análise, rastreio ou publicidade.</li>
            <li>As fontes são carregadas diretamente deste site. Não há ligação à Google nem a outros fornecedores de fontes.</li>
            <li>A tua escolha de idioma e o teu jogador preferido ficam guardados apenas no teu próprio navegador (localStorage) e não são transmitidos. Podes apagá-los a qualquer momento nas definições do navegador.</li>
            <li>Ao abrir o site, o fornecedor de alojamento processa dados técnicos necessários, como o teu endereço IP, para entregar a página.</li>
            <li>Os links para sites de notícias levam a páginas de terceiros. Só quando clicas neles se aplicam as respetivas políticas de privacidade.</li>
          </ul>`
};

// Kurze Texte, die per JavaScript erzeugt werden
const t = {
  de: {
    tage: "Tage", std: "Std", min: "Min", sek: "Sek",
    laeuft: "Das Spiel läuft gerade! 🔴⚪", uhr: "Uhr (deutsche Zeit)", zeitFolgt: "Uhrzeit folgt", spieltag: "Heute ist Spieltag! 🔴⚪", keinSpiel: "Nächstes Spiel folgt",
    lieblings: "Dein Lieblingsspieler:", keinLiebling: "Tipp auf ❤️, um deinen Lieblingsspieler zu wählen",
    tor: "Tor", abwehr: "Abwehr", mittelfeld: "Mittelfeld", sturm: "Sturm",
    frage: "Frage", richtig: "Richtig! 🦅", falsch: "Leider falsch.",
    weiter: "Nächste Frage →", ergebnis: "Ergebnis anzeigen", nochmal: "Nochmal spielen",
    punkte: (p, n) => `Du hast ${p} von ${n} Fragen richtig!`,
    perfekt: "Echter Benfiquista! 🔴⚪", geht: "Da geht noch was – versuch es nochmal!",
    menue: "Menü öffnen",
    sp: "Sp.", pkt: "Pkt.", tabelleStand: (r, d) => `Nach dem ${r}. Spieltag · Stand: ${d}`,
    s: "S", u: "U", n: "N"
  },
  pt: {
    tage: "Dias", std: "Horas", min: "Min", sek: "Seg",
    laeuft: "O jogo está a decorrer! 🔴⚪", uhr: "(hora alemã)", zeitFolgt: "hora a confirmar", spieltag: "Hoje há jogo! 🔴⚪", keinSpiel: "Próximo jogo em breve",
    lieblings: "O teu jogador preferido:", keinLiebling: "Toca em ❤️ para escolher o teu jogador preferido",
    tor: "Guarda-redes", abwehr: "Defesas", mittelfeld: "Médios", sturm: "Avançados",
    frage: "Pergunta", richtig: "Certo! 🦅", falsch: "Errado.",
    weiter: "Próxima pergunta →", ergebnis: "Ver resultado", nochmal: "Jogar outra vez",
    punkte: (p, n) => `Acertaste ${p} de ${n} perguntas!`,
    perfekt: "Benfiquista a sério! 🔴⚪", geht: "Ainda dá para melhorar – tenta outra vez!",
    menue: "Abrir menu",
    sp: "J", pkt: "Pts", tabelleStand: (r, d) => `Após a ${r}.ª jornada · Atualizado: ${d}`,
    s: "V", u: "E", n: "D"
  }
};

// Deutsche Originaltexte aus dem HTML merken
const de = {};
document.querySelectorAll("[data-i18n]").forEach(el => { de[el.dataset.i18n] = el.innerHTML; });

function setzeSprache(neu) {
  sprache = neu;
  try { localStorage.setItem("benfica-sprache", neu); } catch (e) {}
  document.documentElement.lang = neu;
  const quelle = neu === "pt" ? pt : de;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const text = quelle[el.dataset.i18n];
    if (text !== undefined) el.innerHTML = text;
  });
  document.querySelectorAll(".sprache button").forEach(b =>
    b.classList.toggle("aktiv", b.dataset.lang === neu)
  );
  setzeAufLandeplatz();
  baueNews();
  baueSaison();
  baueVitrine();
  baueWappen();
  aktualisiereCountdown();
  zeigeFrage();
  if (!modal.hidden) baueKader();
}

document.querySelectorAll(".sprache button").forEach(b =>
  b.addEventListener("click", () => setzeSprache(b.dataset.lang))
);

// ===== Jahre seit der Gründung =====
const heute = new Date();
let jahre = heute.getFullYear() - 1904;
if (heute < new Date(heute.getFullYear(), 1, 28)) jahre--;
document.getElementById("jahre").textContent = jahre;

// ===== Handy-Menü =====
const links = document.querySelector(".nav-links");
document.querySelector(".nav-toggle").addEventListener("click", () => links.classList.toggle("offen"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("offen")));

// ===== Fliegender Adler, landet auf dem letzten Buchstaben =====
const adler = document.getElementById("adler");
const hero = document.querySelector(".hero");
const ADLER_BREITE = 260;              // Breite im Flug (px)
let adlerGelandet = false;

// Letzten Buchstaben der Überschrift markieren (N bei „Lissabon“)
function markiereLandeplatz() {
  const h1 = document.querySelector(".hero h1");
  if (h1.querySelector(".landeplatz")) return;
  const html = h1.innerHTML.trimEnd();
  h1.innerHTML = html.slice(0, -1) + `<span class="landeplatz">${html.slice(-1)}</span>`;
}

// Punkt, an dem die Krallen landen: Mitte oben auf dem Buchstaben
function landepunkt() {
  const span = document.querySelector(".landeplatz");
  const r = span.getBoundingClientRect();
  const h = hero.getBoundingClientRect();
  const stil = getComputedStyle(span);
  const schrift = parseFloat(stil.fontSize);
  // Abstand von der Oberkante der Zeile bis zur Oberkante des Buchstabens messen
  let abstand = schrift * 0.18;
  try {
    const m = document.createElement("canvas").getContext("2d");
    m.font = `${stil.fontWeight} ${stil.fontSize} ${stil.fontFamily}`;
    const mass = m.measureText(span.textContent);
    if (mass.fontBoundingBoxAscent) {
      abstand = mass.fontBoundingBoxAscent - mass.actualBoundingBoxAscent
              + (r.height - mass.fontBoundingBoxAscent - mass.fontBoundingBoxDescent) / 2;
    }
  } catch (e) {}
  return {
    x: r.left - h.left + r.width / 2,
    y: r.top - h.top + abstand,          // Oberkante des Buchstabens
    groesse: Math.min(1, (schrift * 1.4) / ADLER_BREITE)
  };
}

// Die Krallen sitzen bei 50 % Breite / 35 % Höhe der Grafik
function stellung(x, y, skala, drehung) {
  return `translate(${x - ADLER_BREITE * 0.5}px, ${y - ADLER_BREITE * 0.35}px) scale(${skala}) rotate(${drehung}deg)`;
}

function lassAdlerFliegen() {
  markiereLandeplatz();
  adlerGelandet = false;
  adler.classList.remove("gelandet");
  adler.style.transformOrigin = `${ADLER_BREITE * 0.5}px ${ADLER_BREITE * 0.35}px`;

  const ziel = landepunkt();
  const B = hero.clientWidth, H = hero.clientHeight;

  const flug = adler.animate([
    { transform: stellung(-200, H * 0.8, 0.55, -12), opacity: 0, offset: 0 },
    { opacity: 1, offset: 0.08 },
    { transform: stellung(B * 0.45, H * 0.15, 0.95, 6), offset: 0.45 },
    { transform: stellung(B * 0.85, H * 0.3, 0.9, -6), offset: 0.65 },
    { transform: stellung(ziel.x + 60, ziel.y - 90, ziel.groesse * 1.15, -8), offset: 0.85 },
    { transform: stellung(ziel.x, ziel.y, ziel.groesse, 0), opacity: 1, offset: 1 }
  ], { duration: 6500, easing: "ease-in-out", fill: "forwards" });

  flug.onfinish = () => {
    adlerGelandet = true;
    adler.classList.add("gelandet");
    flug.commitStyles?.();
    flug.cancel();
    setzeAufLandeplatz();
  };
}

// Beim Ändern der Fenstergröße oder Sprache auf dem Buchstaben bleiben
function setzeAufLandeplatz() {
  if (!adlerGelandet) return;
  markiereLandeplatz();
  const ziel = landepunkt();
  adler.style.opacity = 1;
  adler.style.transform = stellung(ziel.x, ziel.y, ziel.groesse, 0);
}
window.addEventListener("resize", setzeAufLandeplatz);

window.addEventListener("load", () => {
  // erst starten, wenn die Schrift geladen ist, damit der Landepunkt stimmt
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => setTimeout(lassAdlerFliegen, 600));
});
document.querySelector(".nav-logo").addEventListener("click", lassAdlerFliegen);

// ===== Konfetti =====
const leinwand = document.getElementById("konfetti");
const ctx = leinwand.getContext("2d");
let teilchen = [];
let laeuft = false;

function groesseAnpassen() {
  leinwand.width = window.innerWidth;
  leinwand.height = window.innerHeight;
}
window.addEventListener("resize", groesseAnpassen);
groesseAnpassen();

function konfetti() {
  const farben = ["#d0021b", "#ffffff", "#f2c14e", "#8e0012"];
  for (let i = 0; i < 220; i++) {
    teilchen.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
      y: window.innerHeight * 0.7,
      vx: (Math.random() - 0.5) * 18,
      vy: -Math.random() * 20 - 8,
      groesse: Math.random() * 8 + 5,
      farbe: farben[Math.floor(Math.random() * farben.length)],
      drehung: Math.random() * 360,
      dreh: (Math.random() - 0.5) * 12,
      leben: 180
    });
  }
  if (!laeuft) { laeuft = true; requestAnimationFrame(zeichneKonfetti); }
}

function zeichneKonfetti() {
  ctx.clearRect(0, 0, leinwand.width, leinwand.height);
  teilchen.forEach(p => {
    p.vy += 0.45;          // Schwerkraft
    p.vx *= 0.99;
    p.x += p.vx;
    p.y += p.vy;
    p.drehung += p.dreh;
    p.leben--;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.drehung * Math.PI / 180);
    ctx.fillStyle = p.farbe;
    ctx.globalAlpha = Math.max(0, p.leben / 60);
    ctx.fillRect(-p.groesse / 2, -p.groesse / 4, p.groesse, p.groesse / 2);
    ctx.restore();
  });
  teilchen = teilchen.filter(p => p.leben > 0 && p.y < leinwand.height + 50);
  if (teilchen.length) requestAnimationFrame(zeichneKonfetti);
  else { laeuft = false; ctx.clearRect(0, 0, leinwand.width, leinwand.height); }
}

document.getElementById("carrega").addEventListener("click", konfetti);

// ===== Countdown zum nächsten Spiel =====
// Neue Spiele hier eintragen. "anstoss" in deutscher Zeit (Europe/Berlin),
// Format: JJJJ-MM-TT HH:MM – z. B. "2026-11-08 21:30"
// Ist die Uhrzeit noch nicht bekannt, nur das Datum eintragen: "2026-11-22"
// Quelle: Flashscore / OneFootball
const spiele = [
  { heim: "Estrela da Amadora", gast: "Benfica", anstoss: "2026-11-08 21:30", wettbewerb: "Liga Portugal" },
  { heim: "Torreense", gast: "Benfica", anstoss: "2026-11-22 21:45", wettbewerb: "Taça de Portugal" },
  { heim: "Viktoria Pilsen", gast: "Benfica", anstoss: "2026-11-26 18:45", wettbewerb: "Europa League" },
  { heim: "Benfica", gast: "Famalicão", anstoss: "2026-11-30", wettbewerb: "Liga Portugal" }
];

// Deutsche Zeit in einen echten Zeitpunkt umrechnen (Winter- und Sommerzeit automatisch)
function zeitBekannt(text) { return text.includes(" "); }

function deutscheZeit(text) {
  const [datum, uhr = "00:00"] = text.split(" ");
  const [J, M, T] = datum.split("-").map(Number);
  const [h, min] = uhr.split(":").map(Number);
  const alsUTC = Date.UTC(J, M - 1, T, h, min);
  // Versatz von Berlin zu UTC zu diesem Zeitpunkt bestimmen
  const teile = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin", hourCycle: "h23",
    year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"
  }).formatToParts(new Date(alsUTC));
  const w = Object.fromEntries(teile.map(p => [p.type, p.value]));
  const berlinAlsUTC = Date.UTC(+w.year, +w.month - 1, +w.day, +w.hour, +w.minute);
  return new Date(alsUTC - (berlinAlsUTC - alsUTC));
}

const SPIELDAUER = 2 * 60 * 60 * 1000;   // ca. 2 Stunden inkl. Pause

function naechstesSpiel() {
  const jetzt = Date.now();
  return spiele.find(s => {
    const dauer = zeitBekannt(s.anstoss) ? SPIELDAUER : 24 * 60 * 60 * 1000;
    return deutscheZeit(s.anstoss).getTime() + dauer > jetzt;
  });
}

function aktualisiereCountdown() {
  const text = t[sprache];
  const spielEl = document.getElementById("countdown-spiel");
  const zahlenEl = document.getElementById("countdown-zahlen");
  const spiel = naechstesSpiel();

  if (!spiel) {
    spielEl.textContent = text.keinSpiel;
    zahlenEl.innerHTML = "";
    return;
  }

  const anstoss = deutscheZeit(spiel.anstoss);
  const bekannt = zeitBekannt(spiel.anstoss);
  const optionen = { timeZone: "Europe/Berlin", weekday: "short", day: "numeric", month: "long" };
  if (bekannt) { optionen.hour = "2-digit"; optionen.minute = "2-digit"; }
  const datumText = anstoss.toLocaleString(sprache === "pt" ? "pt-PT" : "de-DE", optionen);
  const teile = [`${spiel.heim} – ${spiel.gast}`, bekannt ? `${datumText} ${text.uhr}` : `${datumText} · ${text.zeitFolgt}`];
  if (spiel.wettbewerb) teile.push(spiel.wettbewerb);
  spielEl.textContent = teile.join(" · ");

  const rest = anstoss - Date.now();
  if (rest <= 0) {
    zahlenEl.innerHTML = `<div><small style="font-size:16px;opacity:1">${bekannt ? text.laeuft : text.spieltag}</small></div>`;
    return;
  }
  const d = Math.floor(rest / 86400000);
  const h = Math.floor(rest / 3600000) % 24;
  const m = Math.floor(rest / 60000) % 60;
  const s = Math.floor(rest / 1000) % 60;
  zahlenEl.innerHTML = [[d, text.tage], [h, text.std], [m, text.min], [s, text.sek]]
    .map(([zahl, label]) => `<div><span>${String(zahl).padStart(2, "0")}</span><small>${label}</small></div>`)
    .join("");
}
setInterval(aktualisiereCountdown, 1000);

// ===== News =====
// Neueste Meldung oben. Texte in eigenen Worten, mit Link zum Originalartikel.
// "datum" im Format JJJJ-MM-TT (leer lassen, wenn unbekannt).
const newsStand = "2026-11-09";
const news = [
  {
    datum: "2026-11-08", kat_de: "Liga Portugal", kat_pt: "Liga Portugal",
    titel_de: "Pavlidis rettet den Sieg in Amadora",
    titel_pt: "Pavlidis decide na Amadora",
    text_de: "Benfica gewinnt bei Estrela da Amadora mit 3:2. Prestianni bringt die Adler in Führung, nach einem Eigentor von Schappo gleicht Estrela zweimal aus, ehe Pavlidis in der Nachspielzeit den Siegtreffer erzielt. Benfica bleibt Zweiter, fünf Punkte hinter Spitzenreiter FC Porto und vier vor Sporting.",
    text_pt: "O Benfica ganhou por 3-2 na Amadora. Prestianni abriu o marcador e, depois de um autogolo de Schappo, o Estrela empatou por duas vezes, até Pavlidis resolver já nos descontos. As águias seguem em segundo, a cinco pontos do líder FC Porto e com quatro de vantagem sobre o Sporting.",
    quelle: "Flashscore", url: "https://www.flashscore.pt/noticias/futebol-liga-portugal-betclic-a-obra-de-arte-antes-da-morte-do-artista-benfica-vence-estrela-da-amadora/pjHRNsoK/"
  },
  {
    datum: "2026-11-08", kat_de: "Verletzungen", kat_pt: "Lesões",
    titel_de: "Aursnes mit Muskelverletzung",
    titel_pt: "Aursnes com lesão muscular",
    text_de: "Fredrik Aursnes stand in Amadora wegen einer Muskelverletzung im rechten Oberschenkel nicht im Kader. Wie lange er fehlt, ist offen. Die Länderspiele mit Norwegen dürfte er wohl verpassen.",
    text_pt: "Fredrik Aursnes ficou fora da convocatória na Amadora devido a uma lesão muscular na coxa direita. O tempo de paragem não foi revelado, mas deverá falhar os jogos da seleção norueguesa.",
    quelle: "Flashscore", url: "https://www.flashscore.pt/noticias/futebol-liga-portugal-betclic-aursnes-falha-jogo-com-o-estrela-da-amadora-devido-a-lesao-muscular/4pT1kVrn/"
  },
  {
    datum: "2026-11-07", kat_de: "Transfers", kat_pt: "Mercado",
    titel_de: "Bayern-Interesse an Prestianni",
    titel_pt: "Bayern de olho em Prestianni",
    text_de: "Zum Interesse des FC Bayern an Prestianni gibt sich Trainer Marco Silva gelassen. Laut Silva verhandelt Benfica mit dem Flügelspieler, wie mit weiteren Profis, über eine Vertragsverlängerung. Er rechnet mit einer Einigung.",
    text_pt: "Marco Silva desvalorizou o interesse do Bayern em Prestianni. Segundo o treinador, o Benfica está a negociar a renovação do extremo, tal como a de outros jogadores do plantel, e espera um desfecho positivo.",
    quelle: "Flashscore", url: "https://www.flashscore.pt/noticias/marco-silva-fala-de-prestianni-trubin-e-paulo-fonseca-antes-da-visita-ao-estrela/ERz4TIjf/"
  },
  {
    datum: "2026-11-06", kat_de: "Verein", kat_pt: "Clube",
    titel_de: "Aus für die U23",
    titel_pt: "Fim da equipa sub-23",
    text_de: "Benfica löst seine U23-Mannschaft nach der Saison 2026/27 auf. Künftig setzt der Klub ganz auf die U19 und das B-Team, damit Talente schneller den Sprung zu den Profis schaffen. Bis dahin spielt die U23 weiter in der Liga Next Gen.",
    text_pt: "O Benfica vai extinguir a equipa sub-23 no fim da época 2026/27. O clube passa a apostar nos sub-19 e na equipa B, para acelerar a chegada dos jovens ao futebol sénior. Até lá, os sub-23 continuam na Liga Next Gen.",
    quelle: "A Bola", url: "https://www.abola.pt/noticias/oficial-benfica-acaba-com-equipa-sub-23-2026110613590973165"
  },
  {
    datum: "2026-11-05", kat_de: "Europa League", kat_pt: "Liga Europa",
    titel_de: "Vierter Sieg im vierten Spiel",
    titel_pt: "Quarta vitória em quatro jogos",
    text_de: "Benfica schlägt Lech Posen im Estádio da Luz mit 3:1. Rafa, Prestianni und Sudakov treffen. Mit 12 Punkten aus vier Spielen gehören die Adler zur Spitzengruppe der Ligaphase.",
    text_pt: "O Benfica venceu o Lech Poznań por 3-1 na Luz, com golos de Rafa, Prestianni e Sudakov. Com 12 pontos em quatro jogos, as águias estão no grupo da frente da fase de liga.",
    quelle: "Flashscore", url: "https://www.flashscore.pt/noticias/futebol-liga-europa-ao-vivo-benfica-lech-poznan/hv10kfRh/"
  },
  {
    datum: "", kat_de: "Taça de Portugal", kat_pt: "Taça de Portugal",
    titel_de: "Pokalspiel gegen Torreense im Jamor?",
    titel_pt: "Torreense-Benfica no Jamor?",
    text_de: "Für das Pokalspiel am 22. November sucht Torreense ein größeres Stadion, weil die eigene Arena weniger als 2.500 Plätze hat. Im Gespräch ist das Nationalstadion im Jamor. Entschieden ist noch nichts.",
    text_pt: "Para o jogo da Taça a 22 de novembro, o Torreense procura um estádio maior, já que o seu tem menos de 2.500 lugares. O Estádio Nacional, no Jamor, é uma hipótese. Ainda não há decisão.",
    quelle: "Flashscore", url: "https://www.flashscore.pt/noticias/taca-de-portugal-jamor-e-possibilidade-para-o-torreense-benfica/QZws9n0e/"
  }
];

function baueNews() {
  const grid = document.getElementById("news-grid");
  const locale = sprache === "pt" ? "pt-PT" : "de-DE";
  grid.innerHTML = "";
  news.forEach(n => {
    const datum = n.datum
      ? new Date(n.datum + "T12:00:00").toLocaleDateString(locale, { day: "numeric", month: "short" })
      : (sprache === "pt" ? "Novo" : "Neu");
    const karte = document.createElement("article");
    karte.className = "news-karte";
    karte.innerHTML = `
      <div class="news-kopf">
        <span class="news-kategorie">${sprache === "pt" ? n.kat_pt : n.kat_de}</span>
        <span class="news-datum">${datum}</span>
      </div>
      <div class="news-body">
        <h3>${sprache === "pt" ? n.titel_pt : n.titel_de}</h3>
        <p>${sprache === "pt" ? n.text_pt : n.text_de}</p>
        <a class="news-link" href="${n.url}" target="_blank" rel="noopener">${sprache === "pt" ? "Ler em" : "Weiterlesen bei"} ${n.quelle} →</a>
      </div>`;
    grid.appendChild(karte);
  });
  const stand = new Date(newsStand + "T12:00:00").toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  document.getElementById("news-stand").textContent = (sprache === "pt" ? "Atualizado: " : "Stand: ") + stand;
}

// ===== Saison: letzte Ergebnisse und Tabelle =====
// Wird wie spiele und news automatisch gepflegt.
// ergebnisse: neueste zuerst, tore immer "Heim:Gast"
const ergebnisse = [
  { datum: "2026-11-08", heim: "Estrela da Amadora", gast: "Benfica", tore: "2:3", wettbewerb: "Liga Portugal" },
  { datum: "2026-11-05", heim: "Benfica", gast: "Lech Poznań", tore: "3:1", wettbewerb: "Europa League" },
  { datum: "2026-11-02", heim: "Benfica", gast: "Alverca", tore: "1:0", wettbewerb: "Liga Portugal" }
];
// tabelle: die ersten 5 Plätze (und Benfica, falls schlechter als Platz 5)
const tabelle = {
  runde: 11, stand: "2026-11-09",
  teams: [
    { platz: 1, team: "FC Porto", spiele: 11, punkte: 33 },
    { platz: 2, team: "Benfica", spiele: 11, punkte: 28 },
    { platz: 3, team: "Sporting", spiele: 11, punkte: 24 },
    { platz: 4, team: "Santa Clara", spiele: 11, punkte: 21 },
    { platz: 5, team: "Arouca", spiele: 11, punkte: 20 }
  ]
};

function baueSaison() {
  const text = t[sprache];
  const locale = sprache === "pt" ? "pt-PT" : "de-DE";
  // Ergebnisse aus Benfica-Sicht: Sieg, Unentschieden, Niederlage
  const liste = document.getElementById("ergebnis-liste");
  liste.innerHTML = "";
  ergebnisse.forEach(e => {
    const [h, g] = e.tore.split(":").map(Number);
    const eigene = e.heim === "Benfica" ? h : g;
    const andere = e.heim === "Benfica" ? g : h;
    const art = eigene > andere ? "s" : eigene === andere ? "u" : "n";
    const datum = new Date(e.datum + "T12:00:00").toLocaleDateString(locale, { day: "numeric", month: "short" });
    const li = document.createElement("li");
    li.innerHTML = `<span class="ergebnis-art ${art}">${text[art]}</span>
      <span class="ergebnis-teams">${e.heim} – ${e.gast}<small>${datum} · ${e.wettbewerb}</small></span>
      <span class="ergebnis-tore">${e.tore}</span>`;
    liste.appendChild(li);
  });
  // Tabelle
  const tab = document.getElementById("tabelle");
  tab.innerHTML = `<tr><th></th><th></th><th>${text.sp}</th><th>${text.pkt}</th></tr>` +
    tabelle.teams.map(z => `<tr class="${z.team === "Benfica" ? "benfica" : ""}">
      <td>${z.platz}.</td><td>${z.team}</td><td>${z.spiele}</td><td><strong>${z.punkte}</strong></td></tr>`).join("");
  const stand = new Date(tabelle.stand + "T12:00:00").toLocaleDateString(locale, { day: "numeric", month: "long" });
  document.getElementById("tabelle-stand").textContent = text.tabelleStand(tabelle.runde, stand);
}

// ===== Trophäen-Vitrine =====
const pokale = [
  { anzahl: 2,  bild: "img/pokale/landesmeister.png", de: "Europapokal der Landesmeister", pt: "Taça dos Campeões Europeus",
    info_de: "1961 (3:2 gegen Barcelona) und 1962 (5:3 gegen Real Madrid)",
    info_pt: "1961 (3-2 ao Barcelona) e 1962 (5-3 ao Real Madrid)" },
  { anzahl: 38, bild: "img/pokale/meisterschaft.png", de: "Portugiesische Meisterschaft", pt: "Campeonato Nacional",
    info_de: "Rekordmeister Portugals – kein Verein hat öfter die Liga gewonnen.",
    info_pt: "Recordista nacional – nenhum clube ganhou mais vezes o campeonato." },
  { anzahl: 26, bild: "img/pokale/taca-de-portugal.png", de: "Taça de Portugal", pt: "Taça de Portugal",
    info_de: "Rekordsieger im portugiesischen Pokal.",
    info_pt: "Recordista de vitórias na Taça de Portugal." },
  { anzahl: 8,  bild: "img/pokale/taca-da-liga.png", de: "Taça da Liga", pt: "Taça da Liga",
    info_de: "Rekordsieger im Ligapokal, zuletzt 2025 im Finale gegen Sporting.",
    info_pt: "Recordista da Taça da Liga, a última em 2025 na final frente ao Sporting." },
  { anzahl: 10, bild: "img/pokale/supertaca.png", de: "Supertaça", pt: "Supertaça",
    info_de: "Zuletzt 2025 mit einem Sieg gegen Sporting gewonnen.",
    info_pt: "A última conquistada em 2025, com vitória frente ao Sporting." }
];

const pokalSVG = `
  <svg viewBox="0 0 90 110" aria-hidden="true">
    <path d="M20 8 H70 V30 C70 52 58 62 45 64 C32 62 20 52 20 30 Z" fill="#f2c14e"/>
    <path d="M20 14 C6 14 4 34 22 42" fill="none" stroke="#f2c14e" stroke-width="5"/>
    <path d="M70 14 C84 14 86 34 68 42" fill="none" stroke="#f2c14e" stroke-width="5"/>
    <path d="M28 12 V30 C28 44 34 52 40 56" fill="none" stroke="#fff6d6" stroke-width="4" opacity="0.6"/>
    <rect x="40" y="64" width="10" height="16" fill="#d9a93a"/>
    <rect x="28" y="80" width="34" height="8" rx="2" fill="#f2c14e"/>
    <rect x="22" y="88" width="46" height="14" rx="2" fill="#7a4a1e"/>
  </svg>`;

function baueVitrine() {
  const vitrine = document.getElementById("vitrine");
  const info = document.getElementById("pokal-info");
  vitrine.innerHTML = "";
  info.textContent = "";
  pokale.forEach(p => {
    const btn = document.createElement("button");
    btn.className = "pokal";
    // Foto des echten Pokals, sonst der gezeichnete Pokal als Ersatz
    const grafik = p.bild ? `<img src="${p.bild}" alt="${p[sprache]}" loading="lazy">` : pokalSVG;
    btn.innerHTML = `${grafik}<span class="pokal-anzahl">${p.anzahl}×</span><span class="pokal-name">${p[sprache]}</span>`;
    btn.addEventListener("click", () => {
      vitrine.querySelectorAll(".pokal").forEach(b => b.classList.remove("aktiv"));
      btn.classList.add("aktiv");
      info.textContent = `🏆 ${p[sprache]}: ${sprache === "pt" ? p.info_pt : p.info_de}`;
    });
    vitrine.appendChild(btn);
  });
}

// ===== Zeitleiste =====
// ===== Geschichte des Wappens =====
// Quelle der Fakten: slbenfica.pt (Seite „Símbolos“)
const wappen = [
  { jahre: "1904–1906", bild: "img/wappen/1904.png",
    name_de: "Sport Lisboa", name_pt: "Sport Lisboa",
    text_de: "Das erste Wappen entsteht schon vor der Gründung am 28. Februar 1904: ein rot-weißer Schild mit den Buchstaben „S.L.“ und einem Ball, darüber der Adler mit dem Band „E Pluribus Unum“.",
    text_pt: "O primeiro emblema nasce ainda antes da fundação, a 28 de fevereiro de 1904: um escudo vermelho e branco com as letras “S.L.” e uma bola, encimado pela águia com a fita “E Pluribus Unum”." },
  { jahre: "1906–1908", bild: "img/wappen/1906.png",
    name_de: "Grupo Sport Benfica", name_pt: "Grupo Sport Benfica",
    text_de: "Der Grupo Sport Benfica, gegründet 1906, hat ein eigenes Wappen: einen Schild mit den Buchstaben „G.S.B.“ in einem Fahrradrad.",
    text_pt: "O Grupo Sport Benfica, fundado em 1906, tem o seu próprio emblema: um escudo com as letras “G.S.B.” dentro de uma roda de bicicleta." },
  { jahre: "1908–1930", bild: "img/wappen/1908.png",
    name_de: "Sport Lisboa e Benfica", name_pt: "Sport Lisboa e Benfica",
    text_de: "Nach der Fusion beider Vereine wird das Wappen des Sport Lisboa um das Fahrradrad ergänzt. Aus „S.L.“ wird „S.L.B.“.",
    text_pt: "Depois da fusão dos dois clubes, o emblema do Sport Lisboa ganha a roda de bicicleta. “S.L.” passa a “S.L.B.”." },
  { jahre: "1930–1961", bild: "img/wappen/1930.png",
    name_de: "Die heutige Form entsteht", name_pt: "Nasce a forma atual",
    text_de: "Ab 1930 bekommt das Wappen im Wesentlichen seine heutige Gestalt: goldener Adler, grün-rotes Band, blaue Schärpe mit „S.L.B.“ und ein Ball im Schild.",
    text_pt: "A partir de 1930, o emblema ganha no essencial a forma atual: águia dourada, fita verde e vermelha, faixa azul com “S.L.B.” e uma bola no escudo." },
  { jahre: "1961–1973", bild: "img/wappen/1961.png",
    name_de: "Neue Farben", name_pt: "Novas cores",
    text_de: "Der Aufbau bleibt gleich, aber die Farben ändern sich: Das Rad bekommt einen kräftigen orangeroten Ring, die Schärpe wird grün.",
    text_pt: "A estrutura mantém-se, mas as cores mudam: a roda ganha um anel vermelho-alaranjado forte e a faixa passa a verde." },
  { jahre: "1973–1999", bild: "img/wappen/1973.png",
    name_de: "Zurück zu hellen Tönen", name_pt: "Regresso aos tons claros",
    text_de: "Der Ring wird wieder hell, die Schärpe hellblau. Linien und Farben wirken klarer.",
    text_pt: "O anel volta a ser claro e a faixa passa a azul-claro. As linhas e as cores ficam mais nítidas." },
  { jahre: "seit 1999", jahre_pt: "desde 1999", bild: "img/wappen/1999.png",
    name_de: "Das heutige Wappen", name_pt: "O emblema atual",
    text_de: "Das Wappen wird leicht überarbeitet: Die ursprünglichen Linien bleiben, der Adler bekommt eine neue Position. So sieht es bis heute aus.",
    text_pt: "O emblema é ligeiramente redesenhado: mantém as linhas originais e a águia muda de posição. É assim que se apresenta até hoje." }
];
let wappenAuswahl = 0;

function zeigeWappen(i) {
  wappenAuswahl = i;
  const w = wappen[i];
  const bild = document.getElementById("wappen-bild");
  bild.src = w.bild;
  bild.alt = sprache === "pt" ? w.name_pt : w.name_de;
  document.getElementById("wappen-jahre").textContent = sprache === "pt" && w.jahre_pt ? w.jahre_pt : w.jahre;
  document.getElementById("wappen-name").textContent = sprache === "pt" ? w.name_pt : w.name_de;
  document.getElementById("wappen-text").textContent = sprache === "pt" ? w.text_pt : w.text_de;
  document.querySelectorAll(".wappen-knopf").forEach((k, n) => k.classList.toggle("aktiv", n === i));
}

function baueWappen() {
  const leiste = document.getElementById("wappen-leiste");
  leiste.innerHTML = "";
  wappen.forEach((w, i) => {
    const knopf = document.createElement("button");
    knopf.className = "wappen-knopf";
    const jahr = w.jahre.match(/\d{4}/)[0];
    knopf.innerHTML = `<img src="${w.bild}" alt="" loading="lazy"><span>${jahr}</span>`;
    knopf.addEventListener("click", () => zeigeWappen(i));
    leiste.appendChild(knopf);
  });
  zeigeWappen(wappenAuswahl);
}

document.querySelectorAll(".timeline-year").forEach(button =>
  button.addEventListener("click", () => button.parentElement.classList.toggle("offen"))
);

// ===== Kader als Trikots =====
// Fotos: Bild in img/spieler/ ablegen und Dateinamen bei "bild" eintragen.
const kader = {
  tor: [
    { nr: 1,  name: "Anatoliy Trubin", trikot: "Trubin", flagge: "🇺🇦", bild: "" },
    { nr: 24, name: "Samuel Soares", trikot: "Soares", flagge: "🇵🇹", bild: "" }
  ],
  abwehr: [
    { nr: 2,  name: "Clément Lenglet", trikot: "Lenglet", flagge: "🇫🇷", bild: "" },
    { nr: 3,  name: "Alessandro Circati", trikot: "Circati", flagge: "🇦🇺", bild: "" },
    { nr: 6,  name: "Alexander Bah", trikot: "Bah", flagge: "🇩🇰", bild: "" },
    { nr: 26, name: "Samuel Dahl", trikot: "Dahl", flagge: "🇸🇪", bild: "" },
    { nr: 33, name: "Índio", trikot: "Índio", flagge: "🇧🇷", bild: "" },
    { nr: 44, name: "Tomás Araújo", trikot: "Araújo", flagge: "🇵🇹", bild: "" },
    { nr: 58, name: "Daniel Banjaqui", trikot: "Banjaqui", flagge: "🇵🇹", bild: "" },
    { nr: 62, name: "José Neto", trikot: "Neto", flagge: "🇵🇹", bild: "" }
  ],
  mittelfeld: [
    { nr: 5,  name: "Enzo Barrenechea", trikot: "Barrenechea", flagge: "🇦🇷", bild: "" },
    { nr: 8,  name: "Fredrik Aursnes", trikot: "Aursnes", flagge: "🇳🇴", bild: "" },
    { nr: 10, name: "Heorhiy Sudakov", trikot: "Sudakov", flagge: "🇺🇦", bild: "" },
    { nr: 16, name: "Manu Silva", trikot: "Manu", flagge: "🇵🇹", bild: "" },
    { nr: 18, name: "Leandro Barreiro", trikot: "Barreiro", flagge: "🇱🇺", bild: "" },
    { nr: 21, name: "Andreas Schjelderup", trikot: "Schjelderup", flagge: "🇳🇴", bild: "" },
    { nr: 27, name: "Rafa Silva", trikot: "Rafa", flagge: "🇵🇹", bild: "" },
    { nr: 30, name: "Claudio Echeverri", trikot: "Echeverri", flagge: "🇦🇷", bild: "" },
    { nr: 36, name: "João Palhinha", trikot: "Palhinha", flagge: "🇵🇹", bild: "" },
    { nr: 73, name: "Miguel Figueiredo", trikot: "Figueiredo", flagge: "🇵🇹", bild: "" }
  ],
  sturm: [
    { nr: 11, name: "Dodi Lukebakio", trikot: "Lukebakio", flagge: "🇧🇪", bild: "" },
    { nr: 14, name: "Vangelis Pavlidis", trikot: "Pavlidis", flagge: "🇬🇷", bild: "" },
    { nr: 22, name: "Jhon Durán", trikot: "Durán", flagge: "🇨🇴", bild: "" },
    { nr: 25, name: "Gianluca Prestianni", trikot: "Prestianni", flagge: "🇦🇷", bild: "" }
  ]
};

let favorit = "";
try { favorit = localStorage.getItem("benfica-favorit") || ""; } catch (e) {}

function trikotSVG(s) {
  const name = s.trikot.toUpperCase();
  const schrift = name.length > 9 ? 11 : 15;
  return `
    <svg viewBox="0 0 140 150" aria-hidden="true">
      <path class="trikot-stoff" d="M40 10 L56 4 Q70 12 84 4 L100 10 L136 32 L122 60 L104 51 L104 146 L36 146 L36 51 L18 60 L4 32 Z"/>
      <path class="trikot-kragen" d="M56 4 Q70 20 84 4 Q70 12 56 4 Z"/>
      <path class="trikot-rand" d="M4 32 L9 29 L23 57 L18 60 Z"/>
      <path class="trikot-rand" d="M136 32 L131 29 L117 57 L122 60 Z"/>
      <text class="trikot-name" x="70" y="46" text-anchor="middle" style="font-size:${schrift}px">${name}</text>
      <text class="trikot-nummer" x="70" y="112" text-anchor="middle">${s.nr}</text>
    </svg>`;
}

function baueKader() {
  const text = t[sprache];
  const liste = document.getElementById("kader-liste");
  liste.innerHTML = "";

  const fav = Object.values(kader).flat().find(s => s.name === favorit);
  document.getElementById("kader-favorit").textContent =
    fav ? `${text.lieblings} ${fav.name} (#${fav.nr}) ⭐` : text.keinLiebling;

  for (const [position, spielerListe] of Object.entries(kader)) {
    const gruppe = document.createElement("div");
    gruppe.className = "kader-gruppe";
    gruppe.innerHTML = `<h3>${text[position]}</h3><div class="kader-grid"></div>`;
    const grid = gruppe.querySelector(".kader-grid");

    spielerListe.forEach(s => {
      const istFav = s.name === favorit;
      const karte = document.createElement("div");
      karte.className = "trikot" + (istFav ? " favorit" : "");
      const foto = s.bild ? `<img class="trikot-foto" src="img/spieler/${s.bild}" alt="${s.name}" onerror="this.remove()">` : "";
      karte.innerHTML = `
        <button class="herz" aria-label="Lieblingsspieler">${istFav ? "❤️" : "🤍"}</button>
        ${foto}
        ${trikotSVG(s)}
        <p class="trikot-unter">${s.flagge} ${s.name}</p>`;
      karte.querySelector(".herz").addEventListener("click", () => {
        favorit = istFav ? "" : s.name;
        try { localStorage.setItem("benfica-favorit", favorit); } catch (e) {}
        baueKader();
      });
      grid.appendChild(karte);
    });
    liste.appendChild(gruppe);
  }
}

const modal = document.getElementById("kader-modal");
document.querySelectorAll(".kader-oeffnen").forEach(el =>
  el.addEventListener("click", e => {
    e.preventDefault();
    baueKader();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  })
);
function schliesseKader() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
modal.querySelector(".modal-schliessen").addEventListener("click", schliesseKader);
modal.addEventListener("click", e => { if (e.target === modal) schliesseKader(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") schliesseKader(); });

// ===== Quiz =====
// Fragenpool: pro Runde werden zufällig FRAGEN_PRO_RUNDE Fragen gezogen,
// die Reihenfolge der Antworten wird jedes Mal neu gemischt.
// "richtig" ist der Index der richtigen Antwort in der Liste unten.
const fragenPool = [
  { de: "In welchem Jahr wurde Benfica gegründet?", pt: "Em que ano foi fundado o Benfica?",
    antworten: { de: ["1894", "1904", "1921", "1933"], pt: ["1894", "1904", "1921", "1933"] }, richtig: 1 },
  { de: "Wie heißt das Stadion von Benfica?", pt: "Como se chama o estádio do Benfica?",
    antworten: { de: ["Estádio do Dragão", "Estádio José Alvalade", "Estádio da Luz", "Estádio Nacional"],
                 pt: ["Estádio do Dragão", "Estádio José Alvalade", "Estádio da Luz", "Estádio Nacional"] }, richtig: 2 },
  { de: "Welcher Benfica-Spieler gewann 1965 den Ballon d'Or?", pt: "Que jogador do Benfica ganhou a Bola de Ouro em 1965?",
    antworten: { de: ["Eusébio", "Rui Costa", "Mário Coluna", "José Águas"], pt: ["Eusébio", "Rui Costa", "Mário Coluna", "José Águas"] }, richtig: 0 },
  { de: "Gegen wen gewann Benfica 1962 das Europapokalfinale?", pt: "Contra quem venceu o Benfica a final europeia de 1962?",
    antworten: { de: ["FC Barcelona", "AC Mailand", "Real Madrid", "Bayern München"], pt: ["FC Barcelona", "AC Milan", "Real Madrid", "Bayern de Munique"] }, richtig: 2 },
  { de: "Welches Tier ist das Symbol von Benfica?", pt: "Que animal é o símbolo do Benfica?",
    antworten: { de: ["Löwe", "Drache", "Adler", "Stier"], pt: ["Leão", "Dragão", "Águia", "Touro"] }, richtig: 2 },
  { de: "Wie oft wurde Benfica portugiesischer Meister (Stand 2026)?", pt: "Quantos campeonatos nacionais tem o Benfica (2026)?",
    antworten: { de: ["31", "35", "38", "42"], pt: ["31", "35", "38", "42"] }, richtig: 2 },
  { de: "Wie lautet das Motto von Benfica?", pt: "Qual é o lema do Benfica?",
    antworten: { de: ["Veni, vidi, vici", "E Pluribus Unum", "Mens sana in corpore sano", "Carpe diem"],
                 pt: ["Veni, vidi, vici", "E Pluribus Unum", "Mens sana in corpore sano", "Carpe diem"] }, richtig: 1 },
  { de: "Unter welchem Namen wurde der Verein 1904 gegründet?", pt: "Com que nome foi fundado o clube em 1904?",
    antworten: { de: ["Sport Lisboa", "Lisboa Futebol Clube", "Grupo Sport Benfica", "Os Encarnados"],
                 pt: ["Sport Lisboa", "Lisboa Futebol Clube", "Grupo Sport Benfica", "Os Encarnados"] }, richtig: 0 },
  { de: "In welchem Jahr wurde das neue Estádio da Luz eröffnet?", pt: "Em que ano foi inaugurado o novo Estádio da Luz?",
    antworten: { de: ["1998", "2001", "2003", "2006"], pt: ["1998", "2001", "2003", "2006"] }, richtig: 2 },
  { de: "Gegen wen gewann Benfica 1961 den ersten Europapokal?", pt: "Contra quem conquistou o Benfica a primeira Taça dos Campeões, em 1961?",
    antworten: { de: ["Real Madrid", "FC Barcelona", "Inter Mailand", "Manchester United"], pt: ["Real Madrid", "FC Barcelona", "Inter de Milão", "Manchester United"] }, richtig: 1 },
  { de: "In welcher Stadt fand das Europapokalfinale 1962 statt?", pt: "Em que cidade se jogou a final europeia de 1962?",
    antworten: { de: ["Bern", "Wien", "Amsterdam", "London"], pt: ["Berna", "Viena", "Amesterdão", "Londres"] }, richtig: 2 },
  { de: "Aus welchem Land kam Eusébio nach Lissabon?", pt: "De que país chegou Eusébio a Lisboa?",
    antworten: { de: ["Brasilien", "Angola", "Kap Verde", "Mosambik"], pt: ["Brasil", "Angola", "Cabo Verde", "Moçambique"] }, richtig: 3 },
  { de: "Wie viele Tore schoss Eusébio bei der WM 1966?", pt: "Quantos golos marcou Eusébio no Mundial de 1966?",
    antworten: { de: ["5", "7", "9", "12"], pt: ["5", "7", "9", "12"] }, richtig: 2 },
  { de: "Was bedeutet der Spitzname „Os Encarnados“?", pt: "A que se refere a alcunha “Os Encarnados”?",
    antworten: { de: ["Die Adler", "Die Roten", "Die Lissabonner", "Die Unbesiegbaren"],
                 pt: ["Às águias", "Às camisolas vermelhas", "Aos lisboetas", "Aos invencíveis"] }, richtig: 1 },
  { de: "Welcher Gegenstand steht seit 1908 im Benfica-Wappen?", pt: "Que objeto faz parte do emblema do Benfica desde 1908?",
    antworten: { de: ["Ein Anker", "Eine Krone", "Ein Fahrradrad", "Ein Schiff"], pt: ["Uma âncora", "Uma coroa", "Uma roda de bicicleta", "Um navio"] }, richtig: 2 },
  { de: "Wo liegt die Nachwuchsakademie von Benfica?", pt: "Onde fica a academia de formação do Benfica?",
    antworten: { de: ["Seixal", "Alcochete", "Olival", "Sintra"], pt: ["Seixal", "Alcochete", "Olival", "Sintra"] }, richtig: 0 },
  { de: "Welches Endspiel fand 2014 im Estádio da Luz statt?", pt: "Que final se disputou no Estádio da Luz em 2014?",
    antworten: { de: ["WM-Finale", "Champions-League-Finale", "EM-Finale", "Europa-League-Finale"],
                 pt: ["Final do Mundial", "Final da Liga dos Campeões", "Final do Europeu", "Final da Liga Europa"] }, richtig: 1 },
  { de: "Wie oft gewann Benfica die Taça de Portugal (Stand 2026)?", pt: "Quantas Taças de Portugal tem o Benfica (2026)?",
    antworten: { de: ["14", "20", "26", "31"], pt: ["14", "20", "26", "31"] }, richtig: 2 },
  { de: "Wie heißen die Fanclubs von Benfica auf der ganzen Welt?", pt: "Como se chamam as filiais do Benfica pelo mundo?",
    antworten: { de: ["Casas do Benfica", "Núcleos Águia", "Clubes da Luz", "Peñas Benfiquistas"],
                 pt: ["Casas do Benfica", "Núcleos Águia", "Clubes da Luz", "Peñas Benfiquistas"] }, richtig: 0 }
];
const FRAGEN_PRO_RUNDE = 8;

// Zufällig mischen (Fisher-Yates)
function mische(liste) {
  const a = [...liste];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Neue Runde: Fragen ziehen und Antworten mischen (gleiche Reihenfolge in beiden Sprachen)
function neueRunde() {
  return mische(fragenPool).slice(0, FRAGEN_PRO_RUNDE).map(f => {
    const reihenfolge = mische([0, 1, 2, 3]);
    return {
      de: f.de, pt: f.pt,
      antworten: { de: reihenfolge.map(i => f.antworten.de[i]), pt: reihenfolge.map(i => f.antworten.pt[i]) },
      richtig: reihenfolge.indexOf(f.richtig)
    };
  });
}

let fragen = neueRunde();
let aktuelleFrage = 0;
let punkte = 0;
const frageEl = document.getElementById("quiz-frage");
const antwortenEl = document.getElementById("quiz-antworten");
const feedbackEl = document.getElementById("quiz-feedback");
const weiterBtn = document.getElementById("quiz-weiter");

function zeigeFrage() {
  const text = t[sprache];
  if (aktuelleFrage >= fragen.length) { zeigeErgebnis(); return; }
  const f = fragen[aktuelleFrage];
  frageEl.textContent = `${text.frage} ${aktuelleFrage + 1}/${fragen.length}: ${f[sprache]}`;
  antwortenEl.innerHTML = "";
  feedbackEl.textContent = "";
  weiterBtn.hidden = true;
  f.antworten[sprache].forEach((antwort, index) => {
    const btn = document.createElement("button");
    btn.textContent = antwort;
    btn.addEventListener("click", () => pruefeAntwort(index));
    antwortenEl.appendChild(btn);
  });
}

function pruefeAntwort(index) {
  const text = t[sprache];
  const f = fragen[aktuelleFrage];
  const buttons = antwortenEl.querySelectorAll("button");
  buttons.forEach(b => (b.disabled = true));
  buttons[f.richtig].classList.add("richtig");
  if (index === f.richtig) {
    punkte++;
    feedbackEl.textContent = text.richtig;
  } else {
    buttons[index].classList.add("falsch");
    feedbackEl.textContent = text.falsch;
  }
  weiterBtn.hidden = false;
  weiterBtn.textContent = aktuelleFrage < fragen.length - 1 ? text.weiter : text.ergebnis;
}

function zeigeErgebnis() {
  const text = t[sprache];
  frageEl.textContent = text.punkte(punkte, fragen.length);
  antwortenEl.innerHTML = "";
  feedbackEl.textContent = punkte === fragen.length ? text.perfekt : text.geht;
  weiterBtn.hidden = false;
  weiterBtn.textContent = text.nochmal;
  if (punkte === fragen.length) konfetti();
}

weiterBtn.addEventListener("click", () => {
  if (aktuelleFrage >= fragen.length) {
    // neue Runde mit anderen Fragen
    fragen = neueRunde();
    aktuelleFrage = 0;
    punkte = 0;
  } else {
    aktuelleFrage++;
  }
  zeigeFrage();
});

// ===== Start =====
setzeSprache(sprache);
