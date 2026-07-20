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
