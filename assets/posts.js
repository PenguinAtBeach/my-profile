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
      slug: 'waic-governance-split-huawei-apple-openai-jul-2026',
      tag: 'Reading list',
      date: '2026-07-20',
      read: '6 min read',
      title: "This week in AI: WAIC closes with a governance split, Huawei's supernode challenge, and Apple sues OpenAI",
      excerpt: 'Six stories from the last few days: Shanghai’s WAIC ends with two incompatible AI-governance blocs locked in, the EU orders Google to open Android to rival AI assistants, Huawei’s Atlas 950 SuperPoD claims a big lead over Nvidia’s NVL144, Microsoft ships a record 570-flaw Patch Tuesday citing AI-assisted bug hunting, Apple’s trade-secrets suit against OpenAI gets uglier, and Anthropic makes Claude Fable 5’s subscription rollout permanent.',
      body: `
        <p>Another follow-up cut to the last two roundups posted here today — partly because the news kept moving, partly to check whether anything genuinely new had landed versus just more coverage of the same stories. This one leans toward policy and infrastructure, with one industry lawsuit and one product update thrown in.</p>

        <h2>Policy</h2>
        <ul>
          <li><strong>WAIC 2026 closes in Shanghai with AI governance formally split in two.</strong> Twenty-nine nations — including Russia, Pakistan, Indonesia, Kazakhstan, Belarus, Serbia, Cuba, and ten African states, with China's foreign minister signing on China's behalf — signed the founding agreement of the World AI Cooperation Organization (WAICO) on July 16. No G7 economy signed. The practical effect: countries aligning domestic AI law with WAICO now have a governance track that doesn't need to be compatible with the EU AI Act, the OECD's AI Principles, or the G7 Hiroshima Process — two parallel, non-interoperable rulebooks rather than one contested one. <a href="https://www.techtimes.com/articles/320997/20260720/waic-ends-two-incompatible-ai-governance-orders-locked-enterprises.htm" target="_blank" rel="noopener">Tech Times, Jul 20 →</a></li>
          <li><strong>The EU orders Google to open Android to rival AI assistants and share search data.</strong> Binding Digital Markets Act specification measures — not a fine, but a feature-by-feature compliance spec — require Google to give competing AI assistants access to 11 Android features on equal terms with Gemini (voice activation, cross-app task execution) starting July 2027, and to share anonymized search-ranking data with rival search engines and AI chatbots from January 2027. It's a more concrete lever than most AI antitrust action so far: access to specific OS hooks and a specific data feed, on a specific timeline, rather than a general obligation to "not self-preference." <a href="https://digital-markets-act.ec.europa.eu/commission-provides-guidance-google-ai-interoperability-android-and-sharing-google-search-data-under-2026-07-16_en" target="_blank" rel="noopener">European Commission, Jul 16 →</a></li>
        </ul>

        <h2>Infrastructure &amp; security</h2>
        <ul>
          <li><strong>Huawei unveils the Atlas 950 SuperPoD, claiming 6.7× the compute and 15× the memory of Nvidia's NVL144.</strong> The full configuration links up to 8,192 Ascend 950DT chips across 160 cabinets in roughly 1,000 m² — 20× the NPU count of Huawei's own previous-generation SuperPoD — targeting Q4 2026 availability. Raw chip-count comparisons across different architectures are always a little apples-to-oranges, but the scale-out approach (thousands of smaller chips tightly interconnected, versus Nvidia's higher-per-chip performance at smaller cluster sizes) is the more durable story than either vendor's headline multiplier. <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/huawei-unveils-atlas-950-supercluster-touting-1-fp4-zettaflops-performance-for-ai-inference-and-524-fp8-exaflops-for-ai-training-features-hundreds-of-thousands-of-950dt-apus" target="_blank" rel="noopener">Tom's Hardware, Jul 17 →</a></li>
          <li><strong>Microsoft ships its largest Patch Tuesday ever — 570 flaws, including three exploited or disclosed zero-days — and says AI-assisted scanning is why.</strong> That's roughly triple last month's count and puts Microsoft at 1,308 vulnerabilities patched in the first seven months of 2026, nearly double the same period last year, which the company attributes to its internal AI-powered discovery system (MDASH) finding bugs across the Windows codebase faster than before. The two actively-exploited zero-days hit AD FS and SharePoint Server — worth prioritizing over the raw count. The more interesting long-run question the piece raises: if AI-assisted discovery keeps scaling faster than AI-assisted fixing, patch volume itself becomes a lagging indicator of how much latent risk was already there. <a href="https://www.bleepingcomputer.com/news/microsoft/microsoft-july-2026-patch-tuesday-fixes-massive-570-flaws-3-zero-days/" target="_blank" rel="noopener">BleepingComputer, Jul 15 →</a> · <a href="https://techcrunch.com/2026/07/15/microsoft-patches-record-number-of-security-vulnerabilities-citing-its-use-of-ai/" target="_blank" rel="noopener">TechCrunch →</a></li>
        </ul>

        <h2>Industry</h2>
        <ul>
          <li><strong>Apple's trade-secrets lawsuit against OpenAI details a scheme it says ran "at every level."</strong> Filed July 10 in Northern California, the suit centers on OpenAI hardware chief Tang Tan (a former Apple VP) allegedly directing Apple staff interviewing at OpenAI to share confidential information as part of the interview process, plus a specific claim that a departing employee took an Apple laptop on the way out. Apple's broader framing — citing more than 400 former Apple employees now at OpenAI — is the part likely to matter beyond this case: talent migration at that scale between a hardware company and an AI lab building consumer devices is itself the story, independent of how the litigation resolves. OpenAI denies interest in trade secrets. <a href="https://techcrunch.com/2026/07/13/the-wildest-allegations-in-apples-trade-secrets-lawsuit-against-openai/" target="_blank" rel="noopener">TechCrunch, Jul 13 →</a> · <a href="https://www.cnbc.com/2026/07/10/apple-openai-lawsuit-trade-secrets.html" target="_blank" rel="noopener">CNBC →</a></li>
          <li><strong>Indian AI-coding startup Emergent becomes a unicorn just over a year after launch.</strong> A $130M Series C at a $1.5B post-money valuation — a fivefold jump in six months — in a coding-agent market that's gotten crowded fast. Notable mainly as a data point on how much capital is still chasing the same category Cursor, Cognition, and the model labs' own coding agents are already fighting over. <a href="https://techcrunch.com/2026/07/15/indian-ai-coding-startup-emergent-becomes-a-unicorn-just-over-a-year-after-launch/" target="_blank" rel="noopener">TechCrunch, Jul 15 →</a></li>
        </ul>

        <h2>Product</h2>
        <p><strong>Anthropic ends the back-and-forth on Claude Fable 5 access, making it permanent for Max and Team Premium at 50% of usage limits</strong> starting today. Pro and Team Standard users keep credit-based access plus a one-time $100 credit rather than a limits-based allotment. Anthropic's own explanation — that demand for Fable was "challenging to predict," hence the staged rollout — is a candid admission that capacity planning, not product strategy, drove the delay. <a href="https://the-decoder.com/anthropic-slashes-claude-fable-5-limits-in-max-and-team-premium-and-pushes-pro-users-toward-api-pricing/" target="_blank" rel="noopener">The Decoder, Jul 18 →</a></p>

        <blockquote>WebFetch returned 403s on every outlet tried for this cut (Tech Times, Tom's Hardware, BleepingComputer, TechCrunch, The Decoder), so — as with the last two posts — this leans on cross-checked search summaries rather than a full original-text read of each piece. Flagging it here rather than presenting this as more thoroughly sourced than it is.</blockquote>
      `
    },
    {
      slug: 'this-week-in-ai-jul-20-2026',
      tag: 'Reading list',
      date: '2026-07-20',
      read: '6 min read',
      title: "This week in AI: China's Kimi K3 shock, Gemini's third delay, and a decade-old nginx bug",
      excerpt: 'Seven stories from the last few days: an open-weight Chinese model beating Claude on real coding tasks, Google’s third Gemini 3.5 Pro delay, a critical nginx flaw dating back to 2011, Apple’s China AI deal, DeepMind’s bioresilience playbook, Vint Cerf’s post-Google project, and a fiscal-crisis warning on AI capex.',
      body: `
        <p>A follow-up to last week's roundup — the news cycle didn't slow down. This cut leans on Arena.ai's leaderboard data, F5's own advisory, and DeepMind's and TechCrunch's original posts rather than just headlines, grouped by topic with the part of each story that seemed worth keeping.</p>

        <h2>LLMs</h2>
        <ul>
          <li><strong>Moonshot AI's Kimi K3 knocks Claude off the top of the Frontend Code Arena.</strong> The 2.8-trillion-parameter, open-weight model — Moonshot calls it the largest open-weight system released to date — scored 1,679 on Arena.ai's real-developer-voted leaderboard versus Claude Fable 5's 1,631, a 17-place jump from the prior Kimi release, topping 6 of 7 sub-categories. Moonshot itself is candid that K3 still trails Fable 5 and GPT-5.6 Sol on overall benchmarks; what changed is that an open-weight Chinese model is now competitive on a real-world-task leaderboard, not just synthetic benchmarks, and chip stocks reportedly sold off on the news. <a href="https://www.axios.com/2026/07/17/china-ai-kimi-k3-open-source-anthropic-opus" target="_blank" rel="noopener">Axios, Jul 17 →</a> · <a href="https://www.tomshardware.com/tech-industry/artificial-intelligence/moonshot-releases-2-8-trillion-parameter-kimi-k3" target="_blank" rel="noopener">Tom's Hardware →</a></li>
          <li><strong>Google delays Gemini 3.5 Pro for a third time.</strong> The model missed its own coding and complex-reasoning bar in internal testing even after a late-June retrain aimed squarely at fixing coding weaknesses; Alphabet shares reportedly dropped around 4% on the news. The pattern worth watching isn't the delay itself but the repeated cause — coding performance specifically, the same axis Kimi K3 and GPT-5.6 are currently competing hardest on. <a href="https://9to5google.com/2026/07/16/gemini-3-5-pro-delays/" target="_blank" rel="noopener">9to5Google, Jul 16 →</a></li>
        </ul>

        <h2>Infrastructure &amp; security</h2>
        <ul>
          <li><strong>F5 patches a critical nginx flaw that's been sitting in the code since 2011.</strong> CVE-2026-42533 is a heap buffer overflow in nginx's script engine, reachable through a fairly specific but real configuration pattern (a regex-based <code>map</code> whose output feeds a string expression after an earlier regex capture) — every version from 0.9.6 through 1.31.2 is affected. It's patched in 1.30.4/1.31.3 and NGINX Plus 37.0.3.1; two sibling bugs (CVE-2026-42530, CVE-2026-42055) score 9.2 and are exploitable pre-auth. No public exploit yet, but a fifteen-year-old default-path bug getting an out-of-band patch is worth an unscheduled upgrade window rather than the next maintenance cycle. <a href="https://thehackernews.com/2026/07/critical-nginx-vulnerability-can-crash.html" target="_blank" rel="noopener">The Hacker News, Jul 15 →</a></li>
          <li><strong>Apple Intelligence clears China's regulator, built on Alibaba's Qwen and a parallel Baidu partnership.</strong> China's Cyberspace Administration approved the service after Apple agreed to route Chinese-market AI features through a local model rather than its own, spanning iOS, iPadOS, macOS, and visionOS. The notable part is the split: Alibaba's Qwen is confirmed as the integration partner while Baidu is separately developing Apple Intelligence features for the same market — Apple hedging across two domestic model providers rather than picking one. <a href="https://techcrunch.com/2026/07/16/apple-intelligence-approved-for-launch-in-china-with-alibabas-qwen-ai/" target="_blank" rel="noopener">TechCrunch, Jul 16 →</a></li>
        </ul>

        <h2>Policy &amp; safety</h2>
        <ul>
          <li><strong>DeepMind and Isomorphic Labs publish their bioresilience approach.</strong> The framing is explicitly dual: harden models against misuse for bio-threat design, while also actively equipping biosecurity defenders and public-health researchers with the same underlying tools. Worth noting as a template — a frontier lab treating defensive enablement as equally important to restriction, rather than safety-as-refusal alone. <a href="https://deepmind.google/blog/our-approach-to-bioresilience/" target="_blank" rel="noopener">Google DeepMind, Jul 16 →</a></li>
          <li><strong>Vint Cerf leaves Google after two decades to work on agent identity for the open internet.</strong> One of the original architects of TCP/IP is now advising an effort to give AI agents a verifiable, portable identity layer so they can act on the open web without every site building bespoke bot-detection and access rules. It's an infrastructure problem, not a model problem — the same shape of problem Cerf spent the 1970s solving for computers themselves. <a href="https://techcrunch.com/2026/07/15/vint-cerf-is-working-on-a-plan-to-unleash-ai-agents-on-the-open-internet/" target="_blank" rel="noopener">TechCrunch, Jul 15 →</a></li>
        </ul>

        <h2>Economics</h2>
        <p><strong>Bloomberg lays out how the current AI capex cycle could turn into a fiscal crisis.</strong> The core mechanic: AI infrastructure spend is increasingly funded through debt and off-balance-sheet vehicles rather than cash, so a demand shortfall wouldn't just dent earnings — it could cascade through credit markets the way the value swap between Apple and Nvidia earlier this month already hinted at. The useful frame here is distinguishing a slowdown in AI revenue growth (bad but survivable) from a leverage unwind (the actual tail risk). <a href="https://www.bloomberg.com/news/newsletters/2026-07-19/how-ai-could-create-a-fiscal-crisis" target="_blank" rel="noopener">Bloomberg, Jul 19 →</a></p>

        <blockquote>WebFetch on most of these outlets returned 403s from this environment's network policy, so this cut leans on cross-checked search summaries rather than full original-text reads — flagging that limitation here rather than presenting it as more thoroughly sourced than it is.</blockquote>
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
