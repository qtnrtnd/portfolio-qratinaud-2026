import type { StaticImageData } from "next/image";

import ewenLarreur from "@/assets/projects/portfolio-ewen-larreur-2025.png";
import lavalVirtual from "@/assets/projects/hackathon-laval-virtual-2024.jpeg";
import landingGenerator from "@/assets/projects/app-landing-generator-2024.png";
import lissacBrige from "@/assets/projects/site-lissac-brige-2023.png";
import componentError from "@/assets/projects/component-error-2022.png";
import quentinRatinaud from "@/assets/projects/portfolio-quentin-ratinaud-2022.png";
import portrait from "@/assets/projects/app-portrait-2022.png";
import circum from "@/assets/projects/app-circum-2022.png";
import pokindex from "@/assets/projects/app-pokindex-2022.png";
import soundTidy from "@/assets/projects/app-soundtidy-2021.png";

import type { SiteTarget } from "@/lib/site-target";

export type Project = {
  slug: string;
  title: string;
  year: number;
  link?: string;
  thumbnail: StaticImageData;
  desktopOnly: boolean;
};

export type ProjectContent = {
  tags: string[];
  introduction: string[];
  ownership: string[];
  challenges: string[];
  architecture: string[];
};

export const projects = [
  {
    slug: "ewen-larreur",
    title: "Ewen Larreur",
    year: 2025,
    link: "https://ewenlarreur.com",
    thumbnail: ewenLarreur,
    desktopOnly: false,
  },
  {
    slug: "laval-virtual",
    title: "Laval Virtual",
    year: 2024,
    thumbnail: lavalVirtual,
    desktopOnly: false,
  },
  {
    slug: "landing-generator",
    title: "Landing Generator",
    year: 2024,
    thumbnail: landingGenerator,
    desktopOnly: false,
  },
  {
    slug: "lissac-brige",
    title: "Lissac Brige",
    year: 2023,
    link: "https://lissac-brige.fr",
    thumbnail: lissacBrige,
    desktopOnly: false,
  },
  {
    slug: "component-error",
    title: "Error",
    year: 2022,
    link: "https://component-error-2022.madebyquent.in",
    thumbnail: componentError,
    desktopOnly: false,
  },
  {
    slug: "quentin-ratinaud",
    title: "Quentin Ratinaud",
    year: 2022,
    link: "https://portfolio-qratinaud-2022.madebyquent.in/",
    thumbnail: quentinRatinaud,
    desktopOnly: true,
  },
  {
    slug: "portrait",
    title: "Portrait",
    year: 2022,
    link: "https://app-portrait-2022.madebyquent.in/",
    thumbnail: portrait,
    desktopOnly: true,
  },
  {
    slug: "circum",
    title: "Circum",
    year: 2022,
    link: "https://app-circum-2022.madebyquent.in/",
    thumbnail: circum,
    desktopOnly: true,
  },
  {
    slug: "pokindex",
    title: "Pokindex",
    year: 2022,
    link: "https://app-pokindex-2022.madebyquent.in/",
    thumbnail: pokindex,
    desktopOnly: true,
  },
  {
    slug: "sound-tidy",
    title: "Sound Tidy",
    year: 2021,
    link: "https://app-soundtidy-2021.madebyquent.in/",
    thumbnail: soundTidy,
    desktopOnly: true,
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export const projectContents: {
  default: Record<ProjectSlug, ProjectContent>;
} & {
  [key in Exclude<SiteTarget, "default">]?: {
    [key in ProjectSlug]?: ProjectContent;
  };
} = {
  default: {
    "ewen-larreur": {
      tags: ["SvelteKit", "GSAP", "Headless CMS", "Serverless"],
      introduction: [
        "Ewen Larreur is a French photographer based in Brest whose work spans portraiture, events, and street photography. He needed an online portfolio that could do justice to his visual identity: minimal, precise, and atmospheric, while functioning as an evolving gallery rather than a static showcase.",
        "The brief called for a custom-built website with rich animations, seamless page transitions, and a self-service content management system so the photographer could update his gallery independently at any time.",
      ],
      ownership: [
        "I handled every stage of this project from start to finish: discovery with the client, visual identity design, UI mockups, architecture decisions, development, deployment, and ongoing maintenance.",
        "With no design assets provided by the client, I derived the entire visual identity from his social media work. I studied his photographic style, color palette, and compositional choices to build a UI that feels like a natural extension of his photography rather than a generic portfolio template.",
        "I also configured the entire CMS so the client could manage his gallery autonomously, with no technical knowledge required.",
      ],
      challenges: [
        "The main challenge was making the animations feel like an integral part of the experience rather than a layer on top of it. Every page transition, image reveal, and navigation interaction had to feel intentional and consistent, which required building a solid animation architecture from the ground up rather than relying on ready-made solutions.",
        "A second challenge was balancing visual ambition with technical performance. The site scores 96 in performance on desktop, 100 in accessibility, 100 in best practices, and 100 in SEO on Lighthouse. The mobile performance score of 76 reflects a deliberate trade-off for a visually driven creative site serving high-resolution photography.",
        "Finally, the gallery needed to be both content-rich and easy to maintain. Designing a CMS structure flexible enough to handle categories, subjects, and featured photos, while remaining simple enough for a non-technical user to operate daily, was a key part of the work.",
      ],
      architecture: [
        "The frontend is built with SvelteKit and TypeScript, chosen for its flexibility, its server-side rendering capabilities, and its compatibility with GSAP for complex animation work.",
        "GSAP drives all animations and page transitions. I developed a custom animation layer on top of it to handle the specific needs of this project, and more broadly as part of a personal toolkit I am building for highly interactive SvelteKit projects.",
        "Content is managed through Directus, a self-hosted headless CMS running on a personal server. The photographer has his own account and can publish, update, or remove photos at any time without touching the codebase.",
        "The app is deployed to Cloudflare Workers for serverless edge performance at low cost. High-resolution photos are stored on Cloudflare R2, keeping delivery fast globally without overloading the self-hosted server. Tailwind CSS v4 handles styling.",
      ],
    },
    "laval-virtual": {
      tags: ["Unity", "Blender", "VR", "Hackathon"],
      introduction: [
        "Laval Virtual is one of Europe's most prominent trade shows dedicated to virtual and augmented reality professionals. Each year, its Students competition invites student teams to design and build an XR prototype in 30 hours around a shared theme.",
        "Our team of four students from IUT Lannion tackled this year's theme of XR accessibility, with the assigned subtheme of vicariance and perceptual substitution. We designed a VR fire safety simulator aimed at training employees in emergency procedures, using spatial audio and haptic cues to replace or reinforce visual signals, making the experience accessible to users with visual impairments.",
      ],
      ownership: [
        "My contributions split across two areas: 3D content creation and development support.",
        "On the asset side, I modelled the building where the competition took place in Blender, which served as the environment for the simulation. Grounding the experience in a real, recognizable space was a deliberate choice to reinforce the sense of presence and make the training feel plausible.",
        "On the development side, I contributed to Unity scripting, asset integration into the scene, and lighting setup to create a convincing and readable environment under VR constraints.",
      ],
      challenges: [
        "The biggest challenge was scope. With only 30 hours, no VR-specific background, and a deliberately open brief, the team had to move fast from concept to something actually presentable. Defining the right prototype boundaries early was critical.",
        "Working in VR for the first time at this level of ambition exposed the gap between what looks straightforward in theory and what is actually achievable in a sprint format. Lighting, spatial readability, and interaction design all behave differently in a headset than on a screen.",
        "Despite a difficult start and the gap in experience compared to teams from dedicated VR programs, we delivered a functional demo and defended it in front of the jury and the other competing teams. Out of roughly nine teams, not reaching the top 3 felt like a fair result given the context, and an honest baseline to improve from.",
      ],
      architecture: [
        "The prototype was built in Unity and ran on two Meta Quest 2 headsets. We chose this hardware for its reliability and our prior exposure to it through a university module.",
        "3D assets were created in Blender, with supporting work done in Adobe Illustrator and Photoshop for textures and UI elements.",
        "Given the time constraint, the priority was a stable, demonstrable experience over technical sophistication. Every decision was made in service of having something credible to show and defend.",
      ],
    },
    "landing-generator": {
      tags: ["Nuxt.js", "Symfony", "API Platform", "Internal Tooling"],
      introduction: [
        "During my second year of work-study at a marketing agency specializing in the optical retail sector, I led the development of an internal tool to centralize and automate the production of client landing pages.",
        "The agency offered landing pages as a recurring service to its clients: promotional offers, contest pages, and news announcements for optical stores. What started as fully manual, from-scratch development gradually evolved into a more structured system, culminating in a complete overhaul that I drove end to end.",
      ],
      ownership: [
        "I was the sole developer on this project. The rest of the team contributed to feature definition, user research, and code reviews, but I handled all implementation across the full stack: Symfony entities, services, controllers, migrations, and views on the backend, the intermediary API layer, and the Nuxt.js frontend application.",
        "I also ran user research sessions with the future non-technical users within the agency, both as a participant and as a facilitator in smaller workshops, to make sure the tool matched real workflows rather than assumptions.",
        "The project was delivered iteratively over several sprints, with regular reviews involving the development team, the marketing department, and the creative team.",
      ],
      challenges: [
        "The primary challenge was designing a tool that could serve two very different audiences at once: developers who needed flexibility and maintainability, and non-technical staff who needed to create a landing page in minutes without any help.",
        "Getting there required ongoing back-and-forth with future users to understand where they lost time, what information they already had at hand, and what felt confusing. The form auto-populating client data from the CRM came directly out of those conversations.",
        "A less expected challenge came with the contest landing pages. The spin-the-wheel mechanic involved probability logic that was hard to reason about intuitively, and the team had no way to verify it was working correctly. I extracted the game logic and built a simulation tool directly into the admin interface: given an estimated number of players, it runs the probabilities and surfaces any edge cases before the page goes live. This turned an abstract validation problem into something anyone on the team could understand and sign off on.",
        "The results were measurable: creating a landing page went from several hours of manual development to under 15 minutes for any team member familiar with the tool, across roughly 20 new landings per month plus the migration of existing ones.",
      ],
      architecture: [
        "The backend is built on Symfony, which was already the foundation of the agency's CRM. I extended it with the entities, services, controllers, and database migrations needed to support landing page management, and exposed the relevant data through a REST API built with API Platform.",
        "The landing pages themselves are a Nuxt.js application. It runs in standard mode for public visitors and switches to a preview mode when loaded inside the admin interface, allowing editors to see a live reflection of their changes as they fill in the form.",
        "That live preview is embedded directly in the CRM as an iframe. As the user fills in the form, the Nuxt app updates in real time, giving non-technical users immediate visual feedback without leaving the admin interface.",
        "The multi-section dynamic form auto-populates client information pulled from the CRM, reducing manual input and the risk of inconsistencies across landings.",
      ],
    },
    "lissac-brige": {
      tags: ["Nuxt.js", "Strapi", "Node.js", "Headless CMS"],
      introduction: [
        "Lissac Brige is a group of 19 optical stores spread across four departments in Normandy and Pays de la Loire. The group needed a single website that could present a unified brand identity while giving each individual store the ability to manage its own page content independently.",
        "The project was carried out during my work-study placement at a marketing agency specialising in the optical retail sector.",
      ],
      ownership: [
        "I was the sole front-end developer on this project, working from mockups produced by the in-house creative team. My role was to integrate the designs accurately and negotiate adjustments with the designers when technical constraints or evolving requirements made the original specs impractical.",
        "Beyond integration, I developed a Node.js API to handle file attachments for the job application form on the careers page. Candidates can upload their CV and cover letter directly on the site, which are then forwarded via Nodemailer before being discarded from memory.",
        "The CMS architecture was a shared responsibility with the wider development team. We collaborated to define a data model that was both consistent across the group and flexible enough to let each store manager update their own page independently.",
      ],
      challenges: [
        "The main structural challenge was designing a CMS that could serve two different user profiles at once: a group-level administrator managing shared content and branding, and around twenty store managers each responsible for their own page, without any risk of one affecting another.",
        "On the API side, deploying a file upload feature on Heroku required adapting to the platform's ephemeral filesystem. Writing files to disk is not viable in that environment, so I used Multer with in-memory storage to hold attachments just long enough to attach them to the outgoing email, without any persistent write operation.",
      ],
      architecture: [
        "The front end is built with Nuxt 2, providing server-side rendering out of the box and a component-based structure well suited to a site with many pages sharing the same layout.",
        "Content is managed through Strapi, a self-hosted headless CMS running on an Apache server. Each store has its own user account scoped to its own page, while group-wide content is managed centrally.",
        "The job application feature is powered by a separate Node.js API using Multer for in-memory file handling and Nodemailer for email delivery. The app is deployed on Heroku.",
      ],
    },
    "component-error": {
      tags: ["Vue.js", "Canvas API", "NPM Package", "Creative Coding"],
      introduction: [
        "This is an interactive 404 error page component built for Vue.js and Nuxt.js projects, developed during my work-study placement at a marketing agency specialising in the optical retail sector.",
        "Rather than shipping the default Nuxt error page to clients, the goal was to produce a set of reusable, customisable error components. This one takes the concept further: a fully animated space scene where a UFO follows the user's cursor with a lag effect, floating debris drifts through a radial light cone, and the error code itself becomes part of the composition.",
      ],
      ownership: [
        "I designed and developed the component entirely on my own, from the visual concept to the final published package. The brief gave me creative freedom on this one, so the art direction, animation approach, and technical architecture are all my own decisions.",
        "Once the component was stable, I packaged and published it to NPM as op-error-space so it could be installed and maintained consistently across all client projects, rather than being copied manually between codebases.",
      ],
      challenges: [
        "The main constraint was keeping the component free of third-party dependencies to avoid adding weight to the projects it would be integrated into. The Canvas animation loop, the floating objects, the radial culling, the cursor lag effect, and the responsive scaling system are all implemented with native browser APIs and vanilla JavaScript.",
        "Performance was a real concern for an always-on animation loop. I implemented a culling system so that only objects within the visible radial light zone are actually drawn each frame. Objects outside it still update their position but are skipped at render time, keeping the frame budget under control regardless of canvas size.",
      ],
      architecture: [
        "The canvas scene runs on a requestAnimationFrame loop. Floating objects (debris and particles) are modelled as class instances inheriting from a FloatingObject base class, each managing its own position, direction, speed, and visibility state independently.",
        "The radial light zone is the visual and technical core of the component. A radial gradient mask is applied using Canvas 2D composite operations: first as a destination-in clip to fade objects outside the cone, then as a source-over overlay to simulate the light itself. This gives the spotlight effect without any post-processing.",
        "The component is fully responsive through a font-size scaling system that ties all dimensions (UFO size, canvas object density, light cone radius) to the root em unit, adapting cleanly to any viewport.",
        "Customisation is handled through two props (error code and background colour) and named slots for the message text, making it straightforward to adapt to any client's branding without modifying the component itself.",
      ],
    },
    "quentin-ratinaud": {
      tags: ["Vanilla JS", "GSAP", "ScrollTrigger", "Creative Coding"],
      introduction: [
        "A first attempt at a creative portfolio built during my first year of BUT MMI, designed as both a personal branding exercise and a technical exploration of scroll-driven storytelling.",
        "The visual identity is editorial in spirit: oversized display typography spanning the full viewport, a strict black-and-white palette broken by warm photographic tones, and thin structural lines borrowed from print design. The layout treats the page as a composition rather than a document, with text, photo and artwork overlapping deliberately.",
        "The site remains unfinished and was never adapted to mobile. It is included here as a honest snapshot of where my frontend and creative skills stood at the start of my studies, and as evidence of the animation depth I was already exploring at that stage.",
      ],
      ownership: [
        "Every aspect of this project is mine: the visual identity, the art direction, the layout design, and the entire codebase. It was built independently as part of a BUT MMI assignment that gave each student full freedom over tools and creative direction.",
        "The brief was to design and build a portfolio from scratch. I used it as an opportunity to develop a singular visual language and push my understanding of scroll-based animation as far as I could at the time.",
      ],
      challenges: [
        "The core difficulty with a heavily sequenced scroll experience is that every animation trigger is tied to a precise scroll position, and those positions shift the moment the viewport is resized. Getting triggers to recalculate correctly across different window sizes without breaking the visual narrative required a careful debounced resize strategy and a full ScrollTrigger refresh cycle.",
        "A second challenge was managing the visual coherence of overlapping pinned sections. Several elements are pinned simultaneously at different scroll depths, and keeping their stacking, clipping, and transitions aligned without visual glitches meant thinking through the layout architecture before writing a single line of animation code.",
      ],
      architecture: [
        "The site is a single-page Vanilla JS application bundled with Parcel. No framework was needed given the low architectural complexity, and staying close to the platform helped me build a stronger understanding of the browser APIs I was working with.",
        "GSAP drives all animations, with ScrollTrigger for scroll-driven sequencing and ScrollSmoother for inertia scrolling. Key effects include a full-screen clip-path circle reveal between sections, animated text strips, SVG displacement filters applied to text based on scroll velocity, and parallax image skew that responds to scroll speed in real time.",
        "The scroll position logic is centralised in a global state module, and DOM references are separated into their own module to keep the main animation file readable. Styles are written in SCSS with a module-based architecture separating layout, components, and abstracts.",
        "The build is deployed as a static site on GitHub Pages.",
      ],
    },
    portrait: {
      tags: ["Creative Coding", "Canvas API", "Blender", "Vanilla JS"],
      introduction: [
        "Portrait is a university project built in two phases: first a graphic design piece, then its interactive web adaptation. The brief was open-ended, a self-portrait in the broadest sense, free of any formal constraint.",
        "Rather than a literal representation, I took the project as an opportunity to explore identity through atmosphere: a dark, cinematic composite image overlaid with custom chrome typography, turned into an interactive experience where light becomes the primary navigation mechanic.",
      ],
      ownership: [
        "The project was entirely self-directed. I made every creative and technical decision, from the visual concept to the final deployment.",
        "The image was built from scratch in Blender and Photoshop: a 3D-composited scene integrating real photography into a rendered environment, with careful attention to perspective matching, light coherence, and color grading.",
        "The chrome typography arching over the scene is a fully custom lettering piece, designed to feel sculptural and ambiguous, somewhere between graffiti and liquid metal.",
      ],
      challenges: [
        "The central challenge was making light interactive in a way that felt physically convincing, not decorative. The cursor needed to behave like a real spotlight moving through a dark scene.",
        "My first approach was to reproduce the 3D scene in the browser using Three.js and simulate the lighting in real time. The complexity-to-result ratio was poor, so I pivoted to a 2D image-based approach that proved far more effective.",
        "The final solution relies on two pre-rendered versions of the same image: one underexposed, one overexposed. A radial gradient mask follows the cursor and composites the light version on top of the dark one in real time using the Canvas 2D API, creating a convincing spotlight effect without any 3D overhead.",
        "A secondary CSS radial gradient subtly shifts the background warmth based on cursor position, reinforcing the sense of a live light source moving through the scene.",
      ],
      architecture: [
        "The app is intentionally framework-free. The low complexity of the project made any build tooling unnecessary, and keeping the bundle small was a conscious decision. In retrospect, GSAP could have been replaced by a simple easing utility to reduce the dependency footprint further.",
        "The lighting effect is handled entirely through the native Canvas 2D API, using globalCompositeOperation to mask and layer the two image versions. Four interactive hotspots are placed over the scene and each reveal a different SVG text layer, animated with SMIL animateTransform for a continuous marquee effect.",
        "The project is hosted on GitHub Pages.",
      ],
    },
    circum: {
      tags: ["TypeScript", "Canvas API", "Generative Art", "Web Workers"],
      introduction: [
        "Circum is a browser-based generative art tool built around a single geometric primitive: the circle. What started as a personal experiment to generate a black-and-white circular logo through an algorithm gradually grew into a fully featured interactive art generator.",
        "The tool lets users manipulate dozens of parameters in real time, including iteration count, scale, rotation, point deformation, color gradients per channel, smoothness, blend modes, and clipping. Each combination produces a unique organic composition. After several years of iteration, the project was overhauled with color support, a polished UI, and published online.",
      ],
      ownership: [
        "This is a solo personal project. I designed and built every layer of it: the generative algorithm, the rendering pipeline, the parameter system, the UI, the export features, and the deployment.",
        "The project also served as a deliberate testing ground for AI-assisted development. I used Claude Opus in agent mode inside VS Code to accelerate the refactoring of the parameter interface and the addition of new features, treating it as a genuine workflow experiment rather than a shortcut.",
      ],
      challenges: [
        "The first challenge was performance. With dozens of parameters controlling complex bezier curves rendered iteration after iteration, any change to a slider was triggering expensive redraws on the main thread. I offloaded the entire rendering pipeline to a Web Worker using the OffscreenCanvas API, keeping the UI fully responsive regardless of rendering complexity.",
        "The second challenge was the export workflow. Exporting a high-resolution image while keeping the interactive preview light required a two-resolution system: a fast low-resolution preview for real-time feedback, and a separate high-res render path triggered on demand. I also embedded the generation config directly into the exported PNG file as metadata, so any image can be dragged back into the tool to restore its exact parameters.",
        "The third challenge was knowing when and how to use AI assistance effectively. I used Claude Opus in agent mode to migrate the parameter interface to dat.gui and scaffold new features quickly. The experiment confirmed that AI agents are genuinely productive for well-scoped, mechanical tasks like interface wiring, but require careful human oversight on experimental or algorithmically complex logic where context is harder to convey.",
      ],
      architecture: [
        "The app is built in vanilla TypeScript without any UI framework, bundled with Parcel. The codebase is organized around dedicated manager classes: CircumApp as the main orchestrator, CanvasRenderer for drawing logic, ConfigManager for the parameter system, WorkerManager for the offscreen rendering pipeline, StateManager for undo/redo, and FileManager for import/export.",
        "Rendering runs inside a Web Worker via the OffscreenCanvas API. The main thread handles user input and composites the worker's output bitmap onto the screen canvas, with debouncing to avoid redundant render requests during slider interaction.",
        "The generation algorithm produces layered deformed circles built from bezier curves. Each iteration is independently controlled through start/end/ease/seed/randomize values per parameter, allowing smooth or abrupt progressions across the stack. Stroke and fill colors are defined in HSL with per-channel easing curves, and blend modes can be set independently for stroke and fill.",
        "Configurations are serialized as JSON and can be exported standalone or embedded directly into the PNG file via a custom iTXt metadata chunk, enabling reproducible outputs. The UI is powered by dat.gui, and Feather Icons are used for the toolbar.",
      ],
    },
    pokindex: {
      tags: ["Vanilla PHP", "CSS Driven", "UX Design", "Flat-file Database"],
      introduction: [
        "Pokindex is a first-year university project built around a strict set of technical constraints: pure vanilla PHP, no JavaScript, no third-party libraries, and a JSON-based API as the only data layer.",
        "The goal was to build a fully functional account system where users could manage a personal Pokémon collection, from authentication to collection browsing, capturing, releasing, and renaming their Pokémon.",
      ],
      ownership: [
        "I completed this project entirely solo, handling UI design, UX thinking, and all development from scratch.",
        "The visual identity and interface were entirely my own design choices. Beyond the feature requirements, the UX was a genuine design problem to solve: how to make a multi-step, interactive application feel fluid and intuitive with no JavaScript and no frontend framework.",
        "I also extended the university-provided API to better fit the architecture I had in mind, adding features such as bulk operations, nickname management, and database statistics generation.",
      ],
      challenges: [
        "The no-JavaScript constraint was the central creative challenge of the project. Every interactive feature that would normally rely on client-side scripting had to be reimagined in pure CSS.",
        "The sign-up form is the most demanding example: selecting a gender dynamically filters the avatar preview to show only the matching options, and selecting an avatar updates a live visual preview of the chosen character. All of this runs entirely on the checkbox hack, using :checked selectors combined with sibling combinators to drive visibility and state changes across the DOM.",
        "This kind of CSS-only interactivity requires careful upfront thinking about document structure, since CSS can only target elements that follow a reference node in the tree. Layout decisions and interaction logic become inseparable.",
        "Other interactions built without JavaScript include: an expandable nickname editor inside collection cards, a dismissible message notification system, and a zoom-on-click avatar preview.",
      ],
      architecture: [
        "The backend is written in pure PHP with a clear separation between the API layer, page controllers, and reusable partials. Each page handles its own POST request processing before rendering, following a pattern close to a simple MVC without the framework.",
        "Data is stored entirely in flat JSON files acting as a lightweight database: one file for users, one for Pokémon data, one for collector-Pokémon associations, and one for cached database statistics. All read and write operations go through a custom PHP API layer.",
        "Authentication is handled via PHP sessions, with passwords stored as bcrypt hashes. The admin panel, accessible only to a reserved user ID, allows creating and deleting accounts and refreshing database statistics.",
        "The application is self-hosted on a personal server, running inside a Dockerized PHP and Nginx stack.",
      ],
    },
    "sound-tidy": {
      tags: ["Vanilla JS", "Web Audio API", "UI Design", "Creative Coding"],
      introduction: [
        "SoundTidy is a browser-based playlist manager that lets users import local MP3 files, organize them into a playlist, and play them directly in the browser. The project was built entirely in the browser without any backend or framework.",
        "This was my first JavaScript project, built self-taught before starting my degree. The goal was to combine a functional music player with a visual experience that felt polished and intentional, not like a technical exercise.",
      ],
      ownership: [
        "I designed and built everything: the UI, the visual identity, and all the JavaScript logic. No frameworks, no bundler, no external help. Just HTML, CSS, and vanilla JS.",
        "Beyond the core playback features, I pushed the project further by implementing real-time audio frequency visualization, an animated 3D tilt on the album cover reacting to mouse and touch movement, and a procedurally generated animated star background.",
      ],
      challenges: [
        "Working with the Web Audio API for the first time was the main technical hurdle. Building the full audio graph (context, analyser, gain node, media source) and keeping it in sync with playback state, including pause, stop, resume, and track switching, required understanding a relatively low-level browser API with no prior experience.",
        "Managing the overall application state in plain JavaScript, without any reactive framework, meant designing my own patterns for keeping the playlist, the audio player, and the UI in sync at all times.",
      ],
      architecture: [
        "The app is built entirely with vanilla HTML, CSS, and JavaScript. No framework, no build step. This was a deliberate constraint that forced me to understand browser APIs directly: the File API for reading local files, the Web Audio API for playback and visualization, and the Blob API for the save and load system.",
        "Track metadata (title, artist, album, year, cover art) is extracted from MP3 ID3 tags using the jsmediatags library. Cover images are compressed client-side before being stored in memory. Playlists can be exported and reimported via a custom .soundtidy file format, which is a versioned JSON blob saved locally.",
        "The interface adapts to mobile with a dedicated layout and touch support for the 3D cover interaction. Keyboard shortcuts handle playback controls for desktop users.",
      ],
    },
  },
  web: {
    "ewen-larreur": {
      tags: ["Portfolio", "CMS", "SEO", "Client Training"],
      introduction: [
        "Ewen Larreur is a French photographer based in Brest who needed a portfolio website that could serve as both a professional showcase and an autonomous, self-managed gallery, updated by the client himself, without any technical knowledge.",
        "The project covered the full delivery cycle: discovery, design, development, deployment, CMS configuration, and client training.",
      ],
      ownership: [
        "I handled every stage from start to finish: client discovery, UI design derived from his visual identity, development, deployment, and CMS setup.",
        "A key part of the work was configuring the content management system so the photographer could publish, update, and remove photos entirely on his own, without ever needing to contact a developer.",
        "I also trained the client directly on the tool, and remain the point of contact for maintenance and updates.",
      ],
      challenges: [
        "The main challenge was balancing a visually ambitious result with strong technical fundamentals. The site scores 96/100 in performance, 100/100 in accessibility, best practices, and SEO on Lighthouse, metrics that reflect concrete work on image optimisation, semantic markup, and load performance.",
        "Designing a CMS structure that was flexible enough to handle categories and featured photos, while remaining simple enough for a non-technical user to manage daily, required thinking carefully about the client experience, not just the developer experience.",
      ],
      architecture: [
        "The frontend is built with SvelteKit, with content managed through Directus, a self-hosted headless CMS. The photographer has his own account and full autonomy over his gallery.",
        "The site is deployed to Cloudflare Workers for fast global delivery, with high-resolution photos stored on Cloudflare R2. Tailwind CSS handles styling.",
      ],
    },
    "landing-generator": {
      tags: ["Tool", "Agency", "Non-technical", "Automation"],
      introduction: [
        "During my second year of work-study at a digital marketing agency, I identified a recurring bottleneck: producing client landing pages, promotional offers, contests, news, required several hours of manual development each time.",
        "I proposed and led the development of an internal tool that allowed any team member, without technical skills, to create and publish a landing page in under 15 minutes.",
      ],
      ownership: [
        "I was the sole developer on this project, from the initial proposal to production delivery. I ran user research sessions with the future non-technical users, marketing and account management staff, to make sure the tool matched real workflows.",
        "The project was delivered iteratively with regular reviews across the development, marketing, and creative teams.",
      ],
      challenges: [
        "The central challenge was designing a tool usable by two very different audiences: developers who needed it to remain maintainable, and non-technical staff who needed to get a page live in minutes with no help.",
        "The results were measurable: production time dropped from several hours to under 15 minutes, with over 70 landing pages generated in the months following launch.",
      ],
      architecture: [
        "The tool integrates into the existing agency CMS, auto-populating client data from the CRM to reduce manual input. A live preview lets editors see their changes in real time before publishing.",
        "Contest pages include a built-in probability simulator so any team member can validate the prize logic before the page goes live, no developer involvement required.",
      ],
    },
    "lissac-brige": {
      tags: ["Showcase Site", "CMS", "Multi-user", "Integration"],
      introduction: [
        "Lissac Brige is a network of 19 optical stores across four departments. The project involved building a single website presenting a unified brand, while giving each store manager the ability to update their own page content independently.",
        "This was a client project carried out during my work-study placement at a digital marketing agency specialising in the optical retail sector.",
      ],
      ownership: [
        "I was the sole front-end developer and an active contributor to the CMS architecture: alongside the wider team, I helped define a data model consistent across the group while allowing each store to manage its own content independently.",
        "I integrated the designs accurately and coordinated with the designers when technical constraints required adjustments.",
        "I also developed the careers page job application feature, allowing candidates to upload their CV and cover letter directly on the site.",
      ],
      challenges: [
        "The main challenge was designing a CMS that could serve two user profiles at once: a central administrator managing shared branding and content, and around twenty store managers each responsible for their own page, with no risk of one affecting another.",
        "Delivering a coherent multi-site experience required close coordination with the creative team and clear communication with the client throughout the project.",
      ],
      architecture: [
        "The front end is built with Nuxt.js, providing server-side rendering and a component structure well suited to a site with many pages sharing the same layout.",
        "Content is managed through Strapi, with each store having its own scoped account, while group-wide content is managed centrally by the administrator.",
      ],
    },
    "component-error": {
      tags: ["Vue.js", "NPM", "Component", "UI Design"],
      introduction: [
        "Every client project at the agency shipped with the same default Nuxt error page, a missed opportunity for brand consistency. When the brief landed, I had full creative and technical ownership: concept, design, and implementation were entirely my own decisions.",
        "The goal was a drop-in component that any client project could adopt in minutes, customisable to any brand, with no added dependencies.",
      ],
      ownership: [
        "I designed and built the component entirely on my own, outside of assigned sprint work, and proposed it to the team as a shared agency asset.",
        "Once validated, I packaged and published it to NPM so it could be installed and updated consistently across all current and future client projects, without any copy-pasting between codebases.",
      ],
      challenges: [
        "The component had to be easy to integrate and customise for any client brand, with no mandatory dependencies that would add weight to the host project.",
        "Keeping it genuinely reusable meant thinking carefully about what to expose as props and slots, and what to keep opinionated, a balance between flexibility and ease of use.",
      ],
      architecture: [
        "Built as a Vue.js component, customisable via two props (error code and background colour) and named slots for message content.",
        "Published to NPM as op-error-space, making it installable in any Vue or Nuxt project with a single command and maintainable from a single source.",
      ],
    },
  },
};

export const filters: {
  [key in SiteTarget]?: ProjectSlug[];
} = {
  web: ["ewen-larreur", "landing-generator", "lissac-brige", "component-error"],
};

const setContent = (project: Project, target: SiteTarget) => {
  const slug = project.slug as ProjectSlug;
  return {
    ...project,
    ...(projectContents[target]?.[slug] ?? projectContents.default[slug]),
  };
};

export type FullProject = Project & ProjectContent;

export const getProject = (slug: string, target: SiteTarget): FullProject | null => {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;
  const filter = filters[target];
  if (filter && !filter.includes(project.slug as ProjectSlug)) return null;
  return setContent(project, target);
};

export const getAllProjects = (target: SiteTarget): FullProject[] => {
  return projects.flatMap((project) => {
    const filter = filters[target];
    if (filter && !filter.includes(project.slug as ProjectSlug)) {
      return [];
    }
    return setContent(project, target);
  });
};
