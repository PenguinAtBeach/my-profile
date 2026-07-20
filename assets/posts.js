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
