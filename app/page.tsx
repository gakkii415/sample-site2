const content = {
  navigation: [
    { label: "OUR STYLE", href: "#style" },
    { label: "GALLERY", href: "#gallery" },
    { label: "SESSION", href: "#session" },
    { label: "ABOUT", href: "#about" },
    { label: "ACCESS", href: "#access" },
  ],
  hero: {
    title: ["SWEET,", "WITH A", "DARK SIDE."],
    lead: "かわいいだけじゃ、私じゃない。",
    description: [
      "甘いモチーフに、ほんの少しの違和感を。",
      "隠すためじゃなく、もっと自分を好きになるために。",
      "あなたの「好き」を、肌の上へ。",
    ],
  },
  sessionFeatures: [
    {
      icon: "/assets/decor/motif-thorn-heart.svg",
      title: "MOOD FIRST",
      label: "雰囲気から相談",
      description: "イメージ画像一枚からでも、好きな方向を整理できます。",
    },
    {
      icon: "/assets/decor/motif-botanical.svg",
      title: "CUSTOM DESIGN",
      label: "あなただけのデザイン",
      description: "モチーフをそのまま使わず、あなたに似合う形へ仕立てます。",
    },
    {
      icon: "/assets/decor/icon-bow.svg",
      title: "FIRST TATTOO",
      label: "初めてでも大丈夫",
      description: "位置やサイズ、施術の流れまで、分からないことから相談できます。",
    },
    {
      icon: "/assets/decor/motif-butterfly.svg",
      title: "AFTERCARE",
      label: "きれいに残すために",
      description: "施術後の過ごし方とケア方法まで、分かりやすく案内します。",
    },
  ],
};

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="A Tattoo Studio ホーム">
      <img src="/assets/decor/logo-monogram.svg" alt="" width="48" height="48" />
      <span>A Tattoo Studio</span>
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span>{children}</span>
      <img src="/assets/decor/icon-bow.svg" alt="" width="30" height="20" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <div className="film-wear" aria-hidden="true" />

      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          {content.navigation.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#booking">BOOK A SESSION</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="メニューを開く">MENU</summary>
          <nav aria-label="モバイルナビゲーション">
            {content.navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
            <a href="#booking">BOOK A SESSION</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/assets/images/hero-editorial.webp"
          alt="黒とくすみピンクの衣装をまとい、繊細なタトゥーを見せる女性"
          width="1586"
          height="992"
          fetchPriority="high"
        />
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__content page-shell">
          <div className="hero__copy">
            <p className="hero__kicker">A TATTOO STUDIO / DARK GIRLY</p>
            <h1 id="hero-title">
              {content.hero.title.map((line, index) => (
                <span key={line} className={index === 2 ? "accent" : ""}>{line}</span>
              ))}
            </h1>
            <img className="hero__bow" src="/assets/decor/icon-bow.svg" alt="" width="34" height="24" />
            <p className="hero__lead">{content.hero.lead}</p>
            <div className="hero__description">
              {content.hero.description.map((line) => <p key={line}>{line}</p>)}
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about" aria-label="次のセクションへ">
          <span>SCROLL</span><i />
        </a>
      </section>

      <section className="about paper-section" id="about" aria-labelledby="about-title">
        <img className="lace lace--about" src="/assets/textures/lace-corner.webp" alt="" aria-hidden="true" />
        <div className="about__inner page-shell">
          <figure className="about__photo photo-frame">
            <img src="/assets/images/studio-exterior.webp" alt="夜の路地に佇む黒いタトゥースタジオ" width="1122" height="1402" loading="lazy" />
            <figcaption>A TATTOO STUDIO / NIGHT VIEW</figcaption>
          </figure>
          <div className="about__copy">
            <Eyebrow>ABOUT US</Eyebrow>
            <h2 id="about-title">「好き」を、<br />肌のいちばん近くに。</h2>
            <div className="hairline" aria-hidden="true" />
            <div className="body-copy">
              <p>A Tattoo Studioがつくるのは、ガーリーで、繊細で、少しだけ危ういタトゥー。</p>
              <p>リボンも、蝶も、ハートも、甘いままでは終わらせない。</p>
              <p>ファッションやメイクまで含めて、あなたに似合うひとつを描きます。</p>
            </div>
          </div>
          <img className="about__stamp" src="/assets/decor/emblem-stamp.svg" alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="gallery dark-section" id="gallery" aria-labelledby="gallery-title">
        <img className="gallery__lineart gallery__lineart--one" src="/assets/decor/motif-botanical.svg" alt="" aria-hidden="true" />
        <img className="gallery__lineart gallery__lineart--two" src="/assets/decor/motif-butterfly.svg" alt="" aria-hidden="true" />
        <div className="gallery__inner page-shell">
          <div className="gallery__intro">
            <Eyebrow>SELECTED WORK</Eyebrow>
            <h2 id="gallery-title">PRETTY THINGS,<br /><em>SHARP EDGES.</em></h2>
            <div className="body-copy body-copy--light">
              <p>細いラインと、小さなモチーフ。</p>
              <p>近くで見たときにだけ気づく、少しの棘。</p>
              <p>甘さと危うさが混ざるデザインを集めました。</p>
            </div>
            <a className="text-link" href="#gallery-list">VIEW GALLERY <span>↗</span></a>
          </div>
          <div className="gallery-grid" id="gallery-list">
            <figure className="gallery-card gallery-card--portrait">
              <img src="/assets/images/gallery-portrait.webp" alt="リボンと植物のファインラインタトゥー" width="1122" height="1402" loading="lazy" />
            </figure>
            <figure className="gallery-card gallery-card--forearm">
              <img src="/assets/images/gallery-forearm.webp" alt="腕に施された繊細なリボンと植物のタトゥー" width="1086" height="1448" loading="lazy" />
            </figure>
            <figure className="gallery-card gallery-card--ankle">
              <img src="/assets/images/gallery-ankle.webp" alt="足首に施された月とリボンの小さなタトゥー" width="1448" height="1086" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      <section className="style" id="style" aria-labelledby="style-title">
        <div className="style__image-wrap">
          <img src="/assets/images/style-editorial.webp" alt="タトゥースタジオで振り返るダークガーリーな装いの女性" width="1448" height="1086" loading="lazy" />
          <span className="vertical-note">FINE LINE / DARK GIRLY / TOKYO</span>
        </div>
        <div className="style__copy paper-section">
          <img className="style__motif" src="/assets/decor/motif-botanical.svg" alt="" aria-hidden="true" />
          <div>
            <Eyebrow>OUR STYLE</Eyebrow>
            <h2 id="style-title">甘さは残す。<br />媚びは残さない。</h2>
            <div className="hairline" aria-hidden="true" />
            <div className="body-copy">
              <p>レース、リボン、黒、ピンク。</p>
              <p>いつもの服に自然となじみ、近くで見ると少しだけ悪い。</p>
              <p>地雷系や量産型のムードを、そのまま真似するのではなく、あなたらしいバランスへ仕立てます。</p>
            </div>
            <ul className="keywords" aria-label="デザインキーワード">
              {["FINE LINE", "RIBBON", "LACE", "BUTTERFLY", "BOTANICAL", "DARK GIRLY"].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="session dark-section" id="session" aria-labelledby="session-title">
        <div className="session__heading page-shell">
          <Eyebrow>BOOK A SESSION</Eyebrow>
          <h2 id="session-title">まだ言葉になっていない<br />「好き」からでも。</h2>
          <p>保存している写真や好きな服、メイクの雰囲気から、一緒にイメージを形にします。</p>
        </div>
        <div className="session__body page-shell">
          <div className="features">
            {content.sessionFeatures.map((feature, index) => (
              <article className="feature" key={feature.title}>
                <span className="feature__number">0{index + 1}</span>
                <img src={feature.icon} alt="" aria-hidden="true" />
                <p className="feature__title">{feature.title}</p>
                <h3>{feature.label}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
          <figure className="session__photo">
            <img src="/assets/images/studio-interior.webp" alt="黒い施術台とくすみピンクのカーテンがある清潔な施術室" width="1672" height="941" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="booking" id="booking" aria-labelledby="booking-title">
        <img className="booking__image" src="/assets/images/booking-still-life.webp" alt="黒いベルベットにリボンやアクセサリーを配した静物" width="1774" height="887" loading="lazy" />
        <div className="booking__overlay" aria-hidden="true" />
        <div className="booking__content">
          <img src="/assets/decor/icon-bow.svg" alt="" width="46" height="30" />
          <h2 id="booking-title">BOOK A SESSION</h2>
          <p className="booking__lead">かわいいの、その先を選ぶ。</p>
          <p>入れたい場所と、好きな雰囲気を教えてください。</p>
          <a className="outline-button" href="#access">相談をはじめる <span>→</span></a>
        </div>
      </section>

      <footer className="footer dark-section" id="access">
        <div className="footer__top page-shell">
          <Brand compact />
          <div className="footer__details">
            <p><span>LOCATION</span> DETAILS COMING SOON</p>
            <p><span>BOOKING</span> INFORMATION COMING SOON</p>
          </div>
          <nav aria-label="フッターナビゲーション">
            {content.navigation.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div className="footer__bottom page-shell">
          <p>© A TATTOO STUDIO</p>
          <p>可愛いのに、ちょっと悪い。</p>
          <div className="social-placeholder" aria-label="SNSリンク準備中"><span>IG</span><span>X</span><span>TT</span></div>
        </div>
      </footer>
    </main>
  );
}
