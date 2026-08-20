import { useEffect, useId, useState, type CSSProperties } from "react";

const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${file}`;

const scenes = [
  { name: "桥边行走", en: "WALK BY THE BRIDGE", image: asset("bridge-close.webp"), copy: "桥洞与水面保留着垂虹最直接的时间痕迹。" },
  { name: "塔下停留", en: "PAUSE UNDER THE TOWER", image: asset("tower.webp"), copy: "层层出檐的轮廓，成为今日街区清晰的视觉坐标。" },
  { name: "街角相遇", en: "MEET AT THE CORNER", image: asset("cafe.webp"), copy: "咖啡、展览与休憩，让文化自然进入日常生活。" },
  { name: "暮色夜游", en: "A WALK AFTER DARK", image: asset("night.webp"), copy: "灯光映入桥洞，新的街区体验随夜色继续生长。" },
];

const applications = [
  { name: "公共展示墙", category: "空间", image: asset("app-29.webp") },
  { name: "街巷导视", category: "空间", image: asset("app-33.webp") },
  { name: "入口玻璃标识", category: "空间", image: asset("app-28.webp") },
  { name: "户外灯箱", category: "空间", image: asset("app-32.webp") },
  { name: "街区路旗", category: "空间", image: asset("app-30.webp") },
  { name: "方向导视", category: "空间", image: asset("app-31.webp") },
  { name: "墙面发光标识", category: "空间", image: asset("app-34.webp") },
  { name: "数字导览", category: "数字", image: asset("app-23.webp") },
  { name: "工作人员证件", category: "服务", image: asset("app-14.webp") },
  { name: "公共服务触点", category: "服务", image: asset("app-15.webp") },
  { name: "饮用水包装", category: "服务", image: asset("app-17.webp") },
  { name: "帆布袋系列", category: "文创", image: asset("app-21.webp") },
  { name: "帆布袋场景", category: "文创", image: asset("app-22.webp") },
  { name: "主题邮票", category: "文创", image: asset("app-16.webp") },
  { name: "随身镜", category: "文创", image: asset("app-20.webp") },
  { name: "旅行眼罩", category: "文创", image: asset("app-19.webp") },
  { name: "品牌名片", category: "印刷", image: asset("app-13.webp") },
  { name: "文化手册", category: "印刷", image: asset("app-25.webp") },
  { name: "品牌刊物", category: "印刷", image: asset("app-26.webp") },
  { name: "视觉应用系统", category: "印刷", image: asset("app-18.webp") },
];

function BrandMark({ assembled = true, light = false, activePiece = 0 }: { assembled?: boolean; light?: boolean; activePiece?: number }) {
  const gradientId = useId().replace(/:/g, "");
  return (
    <svg className={`brand-mark ${assembled ? "is-assembled" : "is-open"} identity-step-${activePiece}`} viewBox="270 58 92 98" role="img" aria-label="垂虹文化街区标志">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={light ? "#ffffff" : "#1070ec"} />
          <stop offset="1" stopColor={light ? "#ffffff" : "#25b36c"} />
        </linearGradient>
      </defs>
      <g className="brand-piece brand-roof"><path fill={`url(#${gradientId})`} d="M294.76,76.83c3.65.36,7.83.48,12.41.11,12.53-1.03,22.34-5.33,28.59-8.81v15.59s-17.29,9.04-40.99,6.29v-13.17Z" /></g>
      <g className="brand-piece brand-tower"><path fill={`url(#${gradientId})`} d="M315.79,90.33c-1.97,2.46-4.28,5.03-6.98,7.59-2.29,2.17-5.65,5.32-10.73,8.4-4.86,2.94-8.46,4.11-9.28,4.37-2.09.66-3.9,1.03-5.22,1.25v1.7h64.42v-1.7c-2.19-.38-5.23-1.09-8.66-2.5-5.17-2.13-8.55-4.76-11.62-7.17-3.26-2.57-7.58-6.44-11.93-11.93Z" /></g>
      <g className="brand-piece brand-bridge"><path fill={`url(#${gradientId})`} d="M293.96,135.81c0-11.77,9.77-21.32,21.83-21.32s21.83,9.54,21.83,21.32" /></g>
    </svg>
  );
}

export default function Home() {
  const [mapOpen, setMapOpen] = useState(false);
  const [historySplit, setHistorySplit] = useState(38);
  const [identityStep, setIdentityStep] = useState(0);
  const [patternMode, setPatternMode] = useState<"flow" | "arch" | "stack">("flow");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [appFilter, setAppFilter] = useState("全部");

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>(".water-cursor");
    const move = (event: PointerEvent) => {
      if (cursor) cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const enterChuiHong = () => {
    if (mapOpen) {
      document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setMapOpen(true);
    window.setTimeout(() => {
      document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
    }, 1450);
  };

  return (
    <main>
      <div className="water-cursor" aria-hidden="true" />
      <nav className="site-nav" aria-label="主导航">
        <a className="nav-brand" href="#top" aria-label="返回首页"><BrandMark /></a>
        <div className="nav-wordmark"><span>垂虹文化街区</span><small>CHUI HONG CULTURAL STREET</small></div>
        <div className="nav-links"><a href="#history">文脉</a><a href="#identity">形象</a><a href="#system">图形</a><a href="#visit">漫游</a><a href="#applications">应用</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SUZHOU · WUJIANG / 31.16°N 120.64°E</p>
          <h1>一桥<br /><span>入境</span></h1>
          <div className="hero-subcopy"><p>运河文脉 · 垂虹新意</p><span>从历史地标，到当代街区生活。</span></div>
        </div>
        <button className={`map-stage ${mapOpen ? "is-open" : ""}`} type="button" onClick={enterChuiHong} aria-pressed={mapOpen} aria-label="从地图进入垂虹文化街区">
          <img className="map-base" src={asset("map.webp")} alt="吴江垂虹文化街区位置地图" />
          <img className="map-destination" src={asset("bridge-wide.webp")} alt="垂虹桥与华严塔景观" />
          <span className="map-wash" /><span className="map-grid" />
          <span className="map-pin"><i /><b>点击进入</b></span>
          <span className="map-caption"><b>苏州 · 吴江</b><small>水系穿城，桥连接两岸</small></span>
          <span className="map-logo"><BrandMark light /><b>从这里，进入垂虹</b><small>画面将继续通往街区记忆</small></span>
        </button>
        <a className="scroll-cue" href="#history"><span>SCROLL TO ENTER</span><i /></a>
        <span className="hero-index">01 / 06</span>
      </section>

      <section className="history" id="history">
        <div className="section-number">01</div>
        <div className="history-copy">
          <p className="eyebrow light">A BRIDGE THROUGH TIME</p>
          <h2>断而<br /><em>不断</em></h2>
          <p>垂虹桥曾沟通南北、便利往来，也见证了吴江城市与运河文化的发展。桥的完整形态虽然不再，桥洞、遗址、诗句和城市记忆仍在延续。</p>
          <blockquote>桥连接两岸，也连接历史与今天。</blockquote>
        </div>
        <div className="history-visual">
          <div className="compare-stage" style={{ "--split": `${historySplit}%` } as CSSProperties}>
            <img className="compare-now" src={asset("bridge-wide.webp")} alt="今日垂虹桥与华严塔" />
            <div className="compare-then"><img src={asset("history.webp")} alt="垂虹桥历史影像" /></div>
            <span className="compare-line" /><span className="compare-tag now">今日</span><span className="compare-tag then">旧影</span>
          </div>
          <label className="compare-control"><span>拖动，穿过垂虹的时间</span><input type="range" min="8" max="92" value={historySplit} onChange={(event) => setHistorySplit(Number(event.target.value))} aria-label="比较垂虹桥历史与当代影像" /></label>
          <div className="history-meta"><span>始建 / 1048</span><span>国保 / 2019</span><span>吴江 · 松陵</span></div>
        </div>
      </section>

      <section className="identity" id="identity">
        <div className="section-number dark">02</div>
        <header className="identity-head">
          <p className="eyebrow">VISUAL IDENTITY / BRAND ORIGIN</p>
          <h2>从一座桥，生成一套街区语言。</h2>
          <p>从垂虹的建筑与水系中，提取屋檐、塔与桥洞三种基础形态。</p>
        </header>
        <div className="identity-stage">
          <button
            type="button"
            className="identity-mark"
            onClick={() => setIdentityStep((step) => (step >= 3 ? 1 : step + 1))}
            aria-label="依次查看标志中的屋檐、塔与桥洞"
          >
            <BrandMark activePiece={identityStep} />
            <span>{identityStep === 0 ? "点击查看标志构成" : identityStep === 1 ? "已识别屋檐 · 点击继续" : identityStep === 2 ? "已识别塔 · 点击继续" : "已识别桥洞 · 点击重新查看"}</span>
          </button>
          <svg className="identity-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="identity-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#1070ec" /><stop offset="1" stopColor="#25b36c" /></linearGradient></defs>
            <path className={identityStep >= 1 ? "is-revealed" : ""} d="M38 31 C47 31 50 33 59 33" pathLength="1" />
            <path className={identityStep >= 2 ? "is-revealed" : ""} d="M39 49 C48 49 50 50 59 50" pathLength="1" />
            <path className={identityStep >= 3 ? "is-revealed" : ""} d="M38 68 C47 68 50 67 59 67" pathLength="1" />
          </svg>
          <div className={`origin-notes ${identityStep === 0 ? "is-quiet" : "has-progress"}`}>
            <article className={`${identityStep >= 1 ? "is-revealed" : ""} ${identityStep === 1 ? "is-active" : ""}`}><b>01 / 屋檐</b><p>江南民居舒展、轻盈的建筑轮廓。</p></article>
            <article className={`${identityStep >= 2 ? "is-revealed" : ""} ${identityStep === 2 ? "is-active" : ""}`}><b>02 / 塔</b><p>华严塔层层向上的结构与城市天际线。</p></article>
            <article className={`${identityStep >= 3 ? "is-revealed" : ""} ${identityStep === 3 ? "is-active" : ""}`}><b>03 / 桥洞</b><p>垂虹桥连拱结构与水面倒影。</p></article>
          </div>
        </div>
        <div className="identity-footer"><p>三个形态由上至下组合，构成具有“垂”字意象的品牌标志。</p><span>垂虹蓝 #1070EC</span><span>岸芷绿 #25B36C</span></div>
      </section>

      <section className="visual-system" id="system">
        <div className="section-number">03</div>
        <header className="system-head">
          <div><p className="eyebrow">A LIVING VISUAL SYSTEM</p><h2>让静态的标志<br />继续生长。</h2></div>
          <p>品牌标志中的屋檐、塔、桥洞与水纹被拆解为基础图形，再通过重复、连接与动态重组，延展为水流、连桥和成塔三组视觉语言，让垂虹的文化意象持续生长。</p>
        </header>
        <div
          className={`pattern-canvas pattern-${patternMode}`}
          onPointerMove={(event) => {
            const box = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - box.left}px`);
            event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - box.top}px`);
          }}
        >
          <div className="pattern-glow" />
          <div key={patternMode} className={`pattern-transition transition-${patternMode}`} aria-hidden="true">
            <img
              src={patternMode === "flow" ? asset("aux-water.svg") : patternMode === "arch" ? asset("aux-bridge-ripples.png") : asset("aux-tower.svg")}
              alt=""
            />
          </div>
          <div className="aux-composition aux-flow" aria-hidden={patternMode !== "flow"}>
            <div className="aux-flow-track">
              <img src={asset("aux-water.svg")} alt="" />
              <img src={asset("aux-water.svg")} alt="" />
            </div>
          </div>
          <div className="aux-composition aux-bridge" aria-hidden={patternMode !== "arch"}>
            <div className="aux-bridge-field" />
            <img className="aux-bridge-houses" src={asset("aux-bridge.svg")} alt="" />
            <div className="aux-bridge-track">
              <img src={asset("aux-bridge-ripples.png")} alt="" />
              <img src={asset("aux-bridge-ripples.png")} alt="" />
              <img src={asset("aux-bridge-ripples.png")} alt="" />
            </div>
          </div>
          <div className="aux-composition aux-tower" aria-hidden={patternMode !== "stack"}>
            <img className="aux-tower-main" src={asset("aux-tower.svg")} alt="" />
            <img className="aux-tower-left" src={asset("aux-pavilion.svg")} alt="" />
            <img className="aux-tower-right" src={asset("aux-house.svg")} alt="" />
            <img className="aux-tower-gate" src={asset("aux-gate.svg")} alt="" />
            <img className="aux-tower-flower" src={asset("aux-flower.svg")} alt="" />
            <img className="aux-tower-lattice" src={asset("aux-lattice.svg")} alt="" />
          </div>
          <div className="pattern-title" aria-live="polite">
            <small>{patternMode === "flow" ? "FLOW / 水纹延展" : patternMode === "arch" ? "BRIDGE / 桥洞连接" : "GROW / 层檐生长"}</small>
            <b>{patternMode === "flow" ? "水流" : patternMode === "arch" ? "连桥" : "成塔"}</b>
          </div>
        </div>
        <div className="pattern-controls" aria-label="辅助图形组合方式">
          <span>重新组合垂虹</span>
          <div>
            <button className={patternMode === "flow" ? "active" : ""} onClick={() => setPatternMode("flow")}>01 流动</button>
            <button className={patternMode === "arch" ? "active" : ""} onClick={() => setPatternMode("arch")}>02 连桥</button>
            <button className={patternMode === "stack" ? "active" : ""} onClick={() => setPatternMode("stack")}>03 成塔</button>
          </div>
        </div>
      </section>

      <section className="street-life" id="visit">
        <div className="section-number">04</div>
        <header className="street-head">
          <p className="eyebrow">CONTEMPORARY STREET LIFE</p>
          <h2>垂虹不只被观看，<br />也可以进入、停留与相遇。</h2>
        </header>
        <div className="street-browser">
          <div className="street-photo">
            <img key={scenes[sceneIndex].image} src={scenes[sceneIndex].image} alt={scenes[sceneIndex].name} />
            <span>{String(sceneIndex + 1).padStart(2, "0")} / 04</span>
          </div>
          <div className="street-nav">
            {scenes.map((scene, index) => (
              <button key={scene.name} className={sceneIndex === index ? "active" : ""} onClick={() => setSceneIndex(index)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><b>{scene.name}</b><small>{scene.en}</small></div>
                <i>↗</i>
              </button>
            ))}
            <p>{scenes[sceneIndex].copy}</p>
          </div>
        </div>
      </section>

      <section className="applications" id="applications">
        <div className="section-number dark">05</div>
        <header className="applications-head">
          <div><p className="eyebrow">BRAND IN USE</p><h2>品牌进入街区，<br />也进入日常。</h2></div>
          <div className="app-filters" aria-label="筛选品牌应用">
            {["全部", "空间", "数字", "服务", "文创", "印刷"].map((filter) => <button key={filter} className={appFilter === filter ? "active" : ""} onClick={() => setAppFilter(filter)}>{filter}</button>)}
          </div>
        </header>
        <div className="app-grid">
          {applications.filter((item) => appFilter === "全部" || item.category === appFilter).map((item, index) => (
            <figure key={item.name} className={index % 7 === 0 ? "wide" : ""}>
              <div><img loading="lazy" src={item.image} alt={`垂虹文化街区${item.name}品牌应用`} /></div>
              <figcaption><span>{item.category} / {String(index + 1).padStart(2, "0")}</span><b>{item.name}</b></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <img src={asset("hero-street.webp")} alt="垂虹历史人文街区" />
        <div className="footer-overlay" />
        <div className="footer-content">
          <BrandMark light />
          <p className="eyebrow light">CHUI HONG CULTURAL STREET</p>
          <h2>看垂虹，忆吴江。</h2>
          <p>运河文脉 · 垂虹新意</p>
          <a href="#top">回到垂虹起点 <span>↑</span></a>
        </div>
        <div className="footer-meta"><span>SUZHOU · WUJIANG</span><span>让历史进入日常，让街区持续生长。</span><span>06 / 06</span></div>
      </footer>
    </main>
  );
}
