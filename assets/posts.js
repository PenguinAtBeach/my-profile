/*
 * Shared blog post data — used by both the homepage Writing preview
 * (index.html) and the dedicated blog page (blog.html).
 *
 * To publish a new post, prepend an object to POSTS. `body` is an HTML
 * string rendered inside .article — use <p>, <h2>, <ul>, <blockquote>,
 * <code>, <a>. Keep `slug` unique and URL-safe: it becomes blog.html?post=<slug>.
 */
(function (root) {
  var POSTS = [
    {
      slug: 'ai-tech-roundup-jul-20-2026',
      tag: 'Reading list',
      date: '2026-07-20',
      read: '5 min read',
      title: 'Kimi K3 rattles chip stocks, Gemini 3.5 Pro slips again',
      excerpt: "Six stories from the last few days: a 2.8T-parameter open model that knocked semiconductors into a bear market, Google's flagship model missing a second deadline, OpenAI's AI red-teams itself, and Unitree heads for a Shanghai IPO.",
      body: `
        <p>A follow-up to my last sweep, a few days on — the news cycle didn't slow down. This one is shorter and more concentrated: one open-weight model release from China moved global chip valuations, Google's flagship LLM missed a deadline for the second time, and two AI labs published very different takes on how to make models safer. Grouped by topic, sourced across multiple outlets per story.</p>

        <h2>LLMs</h2>
        <ul>
          <li><strong>Moonshot AI's Kimi K3 takes the #1 spot on Arena.ai's Frontend Code Arena</strong>, surpassing Claude Fable 5 — a 17-place jump from its predecessor, Kimi K2.6. It's a 2.8-trillion-parameter mixture-of-experts model (the largest openly downloadable model to date) with a 1M-token context, and Moonshot — backed by Alibaba — is releasing the full weights for free on July 27. The real story isn't the benchmark, it's the pricing: a model this close to the frontier, downloadable and self-hostable, directly undercuts the case for paying frontier-lab API rates. <a href="https://techstartups.com/2026/07/16/moonshot-ai-launches-kimi-k3-claims-1-spot-on-code-arena-beating-claude-fable-5/" target="_blank" rel="noopener">Tech Startups, Jul 16 →</a> · <a href="https://www.axios.com/2026/07/17/china-ai-kimi-k3-open-source-anthropic-opus" target="_blank" rel="noopener">Axios, Jul 17 →</a></li>
          <li><strong>Google's Gemini 3.5 Pro slips again</strong>, months past the June 2026 launch it was promised at May's I/O. The stated reason is coding performance — internal benchmarks came up short even after a retrain on more code-heavy data — and the market reaction was immediate: Alphabet shares fell about 4.4%, erasing roughly $200B in market value in a single day. Coming right as Kimi K3 and GPT-5.6 both shipped, it reads as Google losing the release-cadence race, not just a single slipped date. <a href="https://www.cnbc.com/2026/07/16/alphabet-stock-gemini-3-5-pro-ai.html" target="_blank" rel="noopener">CNBC, Jul 16 →</a> · <a href="https://www.fool.com/investing/2026/07/19/alphabets-gemini-35-pro-is-late-and-the-stock-is-s/" target="_blank" rel="noopener">The Motley Fool, Jul 19 →</a></li>
        </ul>

        <h2>Infrastructure</h2>
        <p><strong>Kimi K3's release pushed the Philadelphia Semiconductor Index into a technical bear market</strong> — down more than 20% from its June peak, its worst week in over 15 months, with Nvidia, AMD, and Broadcom all sliding. The logic traders are pricing in: if a Chinese open-weight model can get this close to the frontier this cheaply, it undercuts the assumption that catching up requires ever-larger GPU spend — the same valuation case that's been propping up the whole AI-infrastructure trade. It's the DeepSeek moment again, with a bigger model and a more mature market to shake. <a href="https://startupfortune.com/a-chinese-ai-model-just-pushed-chip-stocks-into-a-bear-market/" target="_blank" rel="noopener">Startup Fortune, Jul 18 →</a> · <a href="https://english.news.cn/20260718/3a7128e8ba5e4146b87ec169223cb3b4/c.html" target="_blank" rel="noopener">Xinhua, Jul 18 →</a></p>

        <h2>Safety &amp; research</h2>
        <ul>
          <li><strong>OpenAI details GPT-Red, an in-house automated red-teaming model</strong> trained via self-play — an attacker model rewarded for eliciting failures like prompt injection, pitted against defender models trained to resist them. It reportedly beat human red-teamers 84% to 13% on prompt-injection discovery, and adversarially training GPT-5.6 against it cut prompt-injection failures roughly sixfold versus the model from four months earlier, without raising refusal rates on legitimate tasks. The notable design choice is closing the loop — using a model to generate the training signal that hardens the next model, rather than relying solely on human red-teams. <a href="https://openai.com/index/unlocking-self-improvement-gpt-red/" target="_blank" rel="noopener">OpenAI, Jul 15 →</a> · <a href="https://www.marktechpost.com/2026/07/16/openai-details-gpt-red-an-internal-automated-red-teaming-model-that-beat-human-red-teamers-84-to-13-on-prompt-injection/" target="_blank" rel="noopener">MarkTechPost, Jul 16 →</a></li>
          <li><strong>Google DeepMind and Isomorphic Labs formalize a joint "bioresilience" effort</strong>, aimed both at preventing AI models from being misused to design biological threats and at giving governments and biosecurity researchers the same tools to build countermeasures faster. It builds on AlphaFold and Isomorphic's drug-design engine, and names over 15 partners already in place, including Lawrence Livermore National Laboratory, the UK AI Security Institute, and CEPI — dual-use risk and defensive tooling treated as one program rather than a policy statement bolted onto a product announcement. <a href="https://deepmind.google/blog/our-approach-to-bioresilience/" target="_blank" rel="noopener">Google DeepMind, Jul 16 →</a> · <a href="https://www.axios.com/2026/07/16/google-deepmind-biosecurity-safety" target="_blank" rel="noopener">Axios, Jul 16 →</a></li>
        </ul>

        <h2>Robotics</h2>
        <p><strong>Unitree clears its final regulatory hurdle for a Shanghai STAR Market IPO</strong>, aiming to raise roughly $619M (4.2B yuan) at an implied valuation near 42B yuan. What stands out against the usual humanoid-robotics hype: Unitree is already profitable, reporting about $250M in FY2025 revenue and $41M in net profit, and the approval took just 73 days from filing — the fastest under the STAR Market's pre-review mechanism. A debut is expected as early as late July, which would make it the first humanoid-robot IPO on a mainland Chinese exchange. <a href="https://www.caixinglobal.com/2026-07-03/unitree-robotics-wins-approval-for-618-million-star-market-ipo-102460136.html" target="_blank" rel="noopener">Caixin Global, Jul 3 →</a> · <a href="https://www.scmp.com/tech/tech-trends/article/3359290/unitree-ipo-test-valuations-venture-capital-floods-china-robotics" target="_blank" rel="noopener">South China Morning Post →</a></p>

        <blockquote>Same caveat as last time: cross-checked across multiple outlets per story rather than taken from a single source, but this is public reporting, not primary research — read the linked pieces before repeating the numbers.</blockquote>
      `
    },
    {
      slug: 'ai-tech-roundup-jul-2026',
      tag: 'Reading list',
      date: '2026-07-20',
      read: '7 min read',
      title: "What I'm reading — a two-week AI & tech roundup",
      excerpt: 'Nine stories that actually moved something: a new OpenAI model family, a fully open 975B-parameter model, a disputed proof, two competing pushes on AI governance, and a reshuffling of who’s most valuable in the AI stack.',
      body: `
        <p>I try to skim a broad cut of tech and AI coverage regularly — partly to stay current for work, partly because the pace right now makes it worth tracking on purpose rather than passively. This sweep across Hacker News, TechCrunch, the OpenAI and DeepMind blogs, and a few policy outlets turned up more than a single day would justify, so it's a two-week cut: nine stories, grouped by topic, with the part of each that actually seemed worth remembering.</p>

        <h2>LLMs</h2>
        <ul>
          <li><strong>OpenAI ships the GPT-5.6 family — Sol, Terra, Luna.</strong> Three durable capability tiers instead of one flagship, priced $5/$30, $2.50/$15, and $1/$6 per million input/output tokens, and the first frontier release gated by a pre-publication U.S. government safety review. The naming change is the real signal — OpenAI now seems to expect to iterate tiers independently rather than replace a single flagship each cycle. <a href="https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/" target="_blank" rel="noopener">TechCrunch, Jul 9 →</a></li>
          <li><strong>Thinking Machines releases Inkling, its first open-weight model.</strong> A 975B-parameter (41B active) mixture-of-experts model with a 1M-token context, released fully open under Apache 2.0. Mira Murati's team is explicit that Inkling isn't the strongest model available — the bet is on calibration (knowing what it doesn't know) and a cost/reasoning-depth dial, with the actual business built on their Tinker fine-tuning platform rather than the model itself. <a href="https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/" target="_blank" rel="noopener">TechCrunch, Jul 15 →</a></li>
        </ul>

        <h2>Research</h2>
        <p><strong>A researcher claims GPT-5.6 Sol closed a 30-year-old gap in convex optimization</strong> — a Lean 4-verified proof that a class of nonsmooth optimization requires Ω(d²) function evaluations. What's more interesting than the result is the process: reportedly a year of scaffolding and repeated failures on earlier model generations before one prompt worked, with the prompt itself withheld pending peer review. The Hacker News thread is mostly mathematicians actively arguing about whether this is genuine novelty or elaborate pattern-matching — worth watching for the verdict, not the headline. <a href="https://news.ycombinator.com/item?id=48957779" target="_blank" rel="noopener">Hacker News →</a></p>

        <h2>Policy</h2>
        <ul>
          <li><strong>Xi Jinping launches WAICO</strong>, a 29-nation AI governance body headquartered in Shanghai, with 5,000 pledged AI-training slots for developing nations over five years. It's a formal rival track to the US/EU-anchored governance framework, aimed squarely at Global South countries not yet aligned with either bloc. <a href="https://www.aljazeera.com/news/2026/7/17/chinas-xi-jinping-launches-new-ai-alliance-what-is-it" target="_blank" rel="noopener">Al Jazeera, Jul 17 →</a></li>
          <li><strong>DeepMind's Demis Hassabis calls for a U.S.-led global AI watchdog.</strong> His proposal borrows the FINRA model — industry-funded, technically staffed, government-backed — reviewing frontier models up to 30 days pre-release. It's a specific, previously-used regulatory template, not a vague call for oversight, and notably voluntary-first rather than statutory. <a href="https://www.axios.com/2026/07/14/demis-hassabis-ai-regulation-google-deepmind" target="_blank" rel="noopener">Axios, Jul 14 →</a></li>
        </ul>

        <h2>Infrastructure</h2>
        <ul>
          <li><strong>Apple overtakes Nvidia as the world's most valuable company</strong>, briefly hitting a $4.88T market cap as Nvidia shares dropped almost 4% intraday. Apple is up roughly 23% year-to-date against Nvidia's roughly 7%, which reads less like a one-day swing and more like investors rotating from AI compute supply toward AI distribution — devices and ecosystem over chips. <a href="https://www.cnbc.com/2026/07/17/apple-nvidia-aapl-nvda-market-cap.html" target="_blank" rel="noopener">CNBC, Jul 17 →</a></li>
          <li><strong>Japan and Nvidia launch the world's first national AI infrastructure</strong> — a Vera Rubin-based "AI factory" (13,750 Vera CPUs, 27,500 Rubin GPUs) framed as sovereign infrastructure for manufacturing, logistics, healthcare, and telecom. It's a template other governments hedging against dependence on US hyperscalers are likely to copy — GPU clusters treated like a power grid, not a cloud contract. <a href="https://www.globenewswire.com/news-release/2026/07/16/3328258/0/en/Japan-Government-Industrial-Leaders-and-NVIDIA-Launch-the-World-s-First-National-AI-Infrastructure.html" target="_blank" rel="noopener">GlobeNewswire, Jul 16 →</a></li>
        </ul>

        <h2>Robotics</h2>
        <p><strong>Agility Robotics is going public via a $2.5B SPAC merger</strong> — the first pure-play humanoid robotics IPO, raising over $620M. The detail that undercuts the usual humanoid-robot hype: over $300M in booked, multi-year revenue across roughly 1,000 deployed Digit robots at nine customers (Schaeffler, GXO, Toyota, Mercado Libre) on a robots-as-a-service model, even as the CEO downplays near-term consumer applications. <a href="https://techcrunch.com/2026/07/05/this-humanoid-robotics-company-is-going-public-but-its-ceo-isnt-promising-a-robot-in-your-home-anytime-soon/" target="_blank" rel="noopener">TechCrunch, Jul 5 →</a></p>

        <h2>Product launches</h2>
        <p><strong>Anthropic launches Claude for Teachers</strong> for U.S. K-12 educators — free premium access through June 2027, built around a "Learning Commons" connector mapped to academic standards in all 50 states. That standards-mapping is the actual product work — a structured knowledge layer down to granular learning-competency sequences per state, not a generic chatbot with an education skin — in what's openly a competitive push for classroom mindshare against other AI vendors. <a href="https://www.chalkbeat.org/2026/07/14/anthropic-launches-claude-for-teachers-as-ai-companies-battle-for-classrooms/" target="_blank" rel="noopener">Chalkbeat, Jul 14 →</a></p>

        <blockquote>Sourced from public reporting and cross-checked across multiple outlets rather than a single fetch of each article — worth flagging here for the same reason I'd flag it in a design doc: know what your evidence actually supports.</blockquote>
      `
    },
    {
      slug: 'streaming-millions-of-records',
      tag: 'Architecture',
      date: '2024-11-12',
      read: '6 min read',
      title: 'Streaming millions of records without freezing the UI',
      excerpt: 'Why an asynchronous, queue-backed pipeline beat the obvious "just loop and insert" approach when we built tenant-to-tenant data migration at Skedulo.',
      body: `
        <p>When we set out to move configuration and record data between Skedulo tenants, the naive version was tempting: read everything, loop, write everything. It works beautifully on a demo dataset and falls apart the moment a customer has millions of rows.</p>
        <h2>The three constraints that shaped everything</h2>
        <ul>
          <li>The migration could take minutes — the UI could not block or hold a connection open for it.</li>
          <li>We could not load an entire tenant into memory.</li>
          <li>Whatever we built had to fit the existing <code>NestJS</code> + AWS stack, not introduce a new one.</li>
        </ul>
        <p>That pushed us toward an asynchronous pipeline. The export side streams records in bounded batches; each batch is dropped onto an SQS queue; import workers pull from the queue and write to the target tenant at their own pace.</p>
        <blockquote>The user kicks off a migration and walks away. The system does the patient work.</blockquote>
        <h2>Why bounded batches matter</h2>
        <p>Batching is the whole trick. A fixed batch size — we settled around 500 — keeps memory flat regardless of dataset size, gives the queue natural back-pressure, and makes the work <em>resumable</em>: if a worker dies, only its in-flight batch replays.</p>
        <p>The lesson I keep relearning: for anything unbounded, design for the largest input you can imagine, then make the memory cost independent of it.</p>
      `
    },
    {
      slug: 'building-forms-safely',
      tag: 'Frontend',
      date: '2024-08-03',
      read: '4 min read',
      title: 'Letting non-developers build forms, safely',
      excerpt: 'A data-driven rendering model turned a manual form-building workforce into a visual editor — and kept the output valid by construction.',
      body: `
        <p>Skedulo's Form Builder replaces a client's manual form-building process with a visual editor. The hard part isn't the drag-and-drop — it's guaranteeing that whatever a non-technical user assembles produces valid JSON for our Mobile rendering Engine (MEX).</p>
        <h2>Make invalid states unrepresentable</h2>
        <p>Instead of validating after the fact, the editor is driven by a schema that only exposes valid choices. Every widget on the canvas maps to a typed node; the tree of nodes <em>is</em> the document. There is no separate "serialize" step that can drift from what the user sees.</p>
        <p>For the trickier pieces we lean on the <code>TypeScript</code> Compiler API to parse source and derive options, and <code>Zustand</code> for a small, predictable store. The result: what you drag is what ships.</p>
        <blockquote>Constrain the inputs and correctness stops being a test you run — it becomes a shape the data can't escape.</blockquote>
      `
    },
    {
      slug: 'why-i-hand-code',
      tag: 'Craft',
      date: '2024-05-19',
      read: '3 min read',
      title: 'Why I still hand-code my portfolio',
      excerpt: 'No framework, no build step — just one HTML file. A small argument for occasionally working close to the metal.',
      body: `
        <p>This site is hand-coded — no framework, no bundler for the page itself. That's a deliberate choice, and every year I'm more convinced it's the right one for a page like this.</p>
        <h2>What you get for free</h2>
        <ul>
          <li><strong>It loads instantly.</strong> There's nothing to hydrate.</li>
          <li><strong>It never breaks.</strong> No dependency will be deprecated out from under it.</li>
          <li><strong>It stays legible.</strong> Anyone can open the source and understand the whole thing.</li>
        </ul>
        <p>Working close to the platform is a good calibration exercise. It reminds you what the browser actually gives you — flexbox, custom properties, <code>IntersectionObserver</code>, a live clock in three lines — before you reach for a tool to abstract it away.</p>
        <blockquote>Reach for the framework when the problem needs it, not before.</blockquote>
      `
    }
  ];

  function formatPostDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    return isNaN(d) ? iso : new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: 'numeric' }).format(d);
  }

  root.POSTS = POSTS;
  root.formatPostDate = formatPostDate;
})(typeof window !== 'undefined' ? window : this);
