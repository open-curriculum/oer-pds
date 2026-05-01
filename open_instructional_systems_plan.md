# Open Instructional Systems Reference Library: Plan of Action

**Working definition:** Open instructional systems are reusable, remixable, and openly licensed structures for designing learning experiences. They make instructional logic explicit: patterns, scaffolding, assessment evidence, learner agency, feedback routines, accessibility assumptions, AI-use expectations, and adaptation rules.

**Revised project goal:** Build a standalone public reference and documentation site for a pedagogical design system: a library of pedagogical tokens, instructional patterns, pedagogical themes, implementation recipes, validation rules, examples, and AI-agent-readable files. The existing OER content platform should remain unchanged for now. Later, the reference library can be used to enhance that platform and other OER/course-development tools.

**Core thesis:** OER made educational content shareable. OERSchema made open learning materials semantically legible. **Open Instructional Systems make instructional intent portable, adaptable, automatable, and researchable.**

---

## 1. Strategic Shift

The immediate task is **not** to modify the current OER content platform.

The immediate task is to create a **public pedagogical design-system reference** that anyone can understand and implement.

This should function more like:

- `oerschema.org`
- a design-system documentation site
- a pattern library
- a token registry
- an implementation guide
- an AI-readable knowledge package

The existing OER platform becomes a future implementation target, not the initial build site.

### Before

> Add tokens, patterns, themes, renderers, and validation directly into the existing Nuxt/DecapCMS OER platform.

### Now

> Define the open instructional system as an independent reference library first, then later apply it to the OER platform, LMS exports, AI course builders, HAX/Pressbooks/Canvas workflows, and other tools.

This is the stronger move because it separates the **standard-like intellectual contribution** from any one technical implementation.

---

## 2. What This Project Is

This project is a **pedagogical design system for open education**.

It should define:

1. **Pedagogical tokens**  
   Atomic instructional decisions such as scaffolding level, feedback mode, assessment evidence, revision expectation, AI-use policy, and learner agency.

2. **Instructional patterns**  
   Reusable sequences of learning activity such as observe → analyze → create → critique → revise.

3. **Pedagogical themes**  
   Coherent teaching styles composed from tokens and patterns, such as constructivist studio, mastery pathway, direct instruction, inquiry-based learning, or AI-literacy studio.

4. **Renderer profiles**  
   Recommended ways to turn instructional logic into outputs such as a project brief, critique worksheet, course map, lesson page, instructor guide, or LMS assignment.

5. **Validation rules**  
   Checks that help humans and AI agents evaluate whether learning objectives, activities, assessments, evidence, and policies are aligned.

6. **Implementation recipes**  
   Step-by-step guidance for platforms, instructors, instructional designers, and AI agents.

7. **AI-readable reference files**  
   Structured JSON, JSON Schema, Markdown, and `llms.txt` files that allow AI agents to understand and apply the system.

---

## 3. What This Project Is Not

This project is not, at least initially:

- a new LMS
- a replacement for OERSchema
- a replacement for the existing OER content platform
- a full course-authoring platform
- an AI course generator
- a rigid instructional-design standard
- a universal theory of learning

It should be framed as a **reference profile and practical vocabulary**:

> A shared language for describing, applying, adapting, validating, and automating instructional design decisions in open educational materials.

---

## 4. Relationship to OERSchema, AIUL, and the Existing OER Platform

### OERSchema

OERSchema describes the semantic structure of open educational resources: learning components, objectives, assessments, activities, patterns, courses, and related resources.

Open Instructional Systems should sit beside OERSchema as a **pedagogical design layer**:

```text
OERSchema = what the learning resource is and how its educational parts relate.
OIS = how the learning experience is pedagogically structured, styled, adapted, and validated.
```

This means the documentation should explicitly map OIS concepts to OERSchema concepts, but not require every implementer to use OERSchema immediately.

### AIUL

AIUL can become one token family inside the broader system.

For example:

```yaml
aiUse.policy: assisted-disclosed
aiUse.disclosureRequired: true
aiUse.reflectionRequired: true
aiUse.allowedFunctions:
  - brainstorming
  - critique
  - debugging
  - reference-generation
```

This positions AIUL as a concrete example of pedagogical tokenization: AI expectations become explicit, portable, and assessable at the assignment level.

### Existing OER Content Platform

The current OER content platform should be treated as a future implementation target.

Near-term documentation can include an implementation recipe such as:

> How to apply OIS to a Nuxt/DecapCMS/OERSchema platform.

But actual platform changes should wait until the reference library is stable enough to be useful beyond one codebase.

---

## 5. Strongest Public Positioning

Use this sentence often:

> **Open Instructional Systems extend OER from reusable content into reusable instructional infrastructure.**

Alternate versions:

> OER made educational content shareable. OERSchema made it machine-readable. Open Instructional Systems make it pedagogically reusable.

> The next frontier of OER is not only open content, but open instructional logic.

> Open Instructional Systems let educators and AI agents apply pedagogical “styles” to learning materials: not visual styles, but instructional styles.

---

## 6. Recommended Site Structure

Create a standalone documentation site, similar in spirit to `oerschema.org`.

Suggested information architecture:

```text
/
  index.md
  about.md
  getting-started.md
  glossary.md

/concepts/
  open-instructional-systems.md
  pedagogical-styling.md
  pedagogical-tokens.md
  instructional-patterns.md
  pedagogical-themes.md
  renderer-profiles.md
  validation-rules.md
  ai-agent-readiness.md

/tokens/
  index.md
  scaffolding.md
  agency.md
  feedback.md
  assessment.md
  revision.md
  reflection.md
  collaboration.md
  accessibility.md
  localization.md
  ai-use.md

/patterns/
  index.md
  observe-analyze-create-critique-revise.md
  demo-guided-practice-independent-production.md
  case-stakeholder-analysis-response-design.md
  prompt-ai-experiment-evaluate-disclose.md
  reference-study-technical-exercise-creative-application.md
  constraint-based-project-sprint.md
  peer-review-studio-cycle.md
  mastery-checkpoint-pathway.md
  artifact-analysis-reflection.md
  community-contextualized-design-brief.md

/themes/
  index.md
  direct-instruction.md
  constructivist-studio.md
  mastery-learning.md
  inquiry-based.md
  critical-media-analysis.md
  project-based-production.md
  accessibility-first.md
  ai-literacy.md
  low-bandwidth-global.md
  community-engaged.md

/examples/
  index.md
  same-content-four-styles.md
  camera-framing-demo.md
  aiul-assignment-demo.md
  course-module-demo.md
  adaptation-before-after.md

/implementation/
  index.md
  for-instructors.md
  for-platforms.md
  for-ai-agents.md
  for-oer-repositories.md
  for-lms-export.md
  for-oerschema.md
  for-nuxt-decapcms.md
  for-hax.md
  for-pressbooks.md
  for-canvas.md

/ai/
  index.md
  llms.md
  prompt-contracts.md
  agent-recipes.md
  validation-prompts.md
  course-design-workflows.md
  implementation-checklists.md

/research/
  index.md
  instructor-adaptation-study.md
  student-learning-study.md
  ai-course-design-study.md
  artifact-analysis-rubric.md
  metrics-and-impact.md

/spec/
  index.md
  ois-profile-0.1.md
  token-object.md
  pattern-object.md
  theme-object.md
  renderer-profile-object.md
  validation-rule-object.md
  json-ld-context.md
  changelog.md
```

---

## 7. Recommended Technical Approach for the Documentation Site

The first version should be simple, open, and easy to mirror.

Good options:

1. **Astro Starlight**
   - Strong documentation ergonomics.
   - Good navigation.
   - Easy static deployment.
   - Good for reference sites.

2. **VitePress**
   - Lightweight.
   - Markdown-first.
   - Good for spec-like documentation.

3. **Docusaurus**
   - Strong docs/versioning features.
   - Good for larger open-source projects.

4. **Plain GitHub Pages/Jekyll**
   - Minimal dependency burden.
   - Familiar for open web documentation.
   - Good if the goal is maximum simplicity.

Recommendation:

> Use a static Markdown-first documentation site with machine-readable files generated from the same source data.

The site should not depend on a database, login system, or CMS. The first public version should be forkable and inspectable.

---

## 8. Repository Structure

Suggested repository name options:

```text
open-instructional-systems
open-instructional-systems-profile
ois-profile
pedagogical-tokens
```

Recommended:

```text
open-instructional-systems
```

Suggested repo structure:

```text
open-instructional-systems/
  README.md
  LICENSE.md
  CONTRIBUTING.md
  CHANGELOG.md
  CODE_OF_CONDUCT.md

  docs/
    index.md
    about.md
    getting-started.md
    concepts/
    tokens/
    patterns/
    themes/
    examples/
    implementation/
    ai/
    research/
    spec/

  registry/
    tokens/
      scaffolding.yml
      agency.yml
      feedback.yml
      assessment.yml
      revision.yml
      reflection.yml
      collaboration.yml
      accessibility.yml
      localization.yml
      ai-use.yml
    patterns/
      observe-analyze-create-critique-revise.yml
      demo-guided-practice-independent-production.yml
      case-stakeholder-analysis-response-design.yml
      prompt-ai-experiment-evaluate-disclose.yml
    themes/
      constructivist-studio.yml
      direct-instruction.yml
      mastery-learning.yml
      ai-literacy.yml
    renderers/
      project-brief.yml
      lesson-page.yml
      critique-worksheet.yml
      instructor-guide.yml
    validation/
      alignment-rules.yml
      ai-use-rules.yml
      accessibility-rules.yml

  schemas/
    ois-token.schema.json
    ois-pattern.schema.json
    ois-theme.schema.json
    ois-renderer.schema.json
    ois-validation-rule.schema.json
    ois-profile.schema.json

  public/
    ois-index.json
    ois-context.jsonld
    llms.txt
    llms-full.txt

  examples/
    camera-framing/
      content-object.yml
      direct-instruction.yml
      constructivist-studio.yml
      critical-media-analysis.yml
      mastery-pathway.yml
      ai-agent-package.json
    aiul-assignment/
    course-module/

  scripts/
    build-index.js
    validate-registry.js
    build-llms-txt.js
```

Key principle:

> The documentation and the machine-readable registry should come from the same source files.

---

## 9. Core Deliverables for Version 0.1

Version 0.1 should be useful, but deliberately small.

### Human-readable deliverables

- Definition of Open Instructional Systems.
- Explanation of pedagogical styling.
- Glossary.
- Token library.
- Pattern library.
- Theme library.
- Implementation guide.
- AI-agent guide.
- Research/evaluation plan.
- At least one complete example.

### Machine-readable deliverables

- `ois-index.json`
- `ois-context.jsonld`
- `llms.txt`
- `llms-full.txt`
- JSON Schemas for tokens, patterns, themes, renderers, and validation rules.
- Example AI-agent package for at least one learning module.

### Demonstration deliverables

- Same content rendered through at least four pedagogical styles.
- One AIUL-aligned assignment example.
- One course-module planning example.
- One validation example showing alignment warnings and recommendations.

---

## 10. Pedagogical Tokens

Pedagogical tokens are atomic instructional choices.

They should be:

- named consistently
- human-readable
- machine-readable
- documented with examples
- easy to combine
- easy to validate
- easy for AI agents to reference

### Example token object

```yaml
id: scaffolding.level
name: Scaffolding Level
category: scaffolding
type: enum
values:
  - none
  - low
  - medium
  - high
  - adaptive
definition: Degree of instructional support provided before independent learner performance.
useWhen:
  - Designing lessons, exercises, projects, or modules where the level of support affects learner autonomy.
doNotUseWhen:
  - The resource is purely informational and does not include learner action.
examples:
  - value: high
    explanation: Students receive worked examples, step-by-step guidance, and a checklist.
  - value: low
    explanation: Students receive a goal and constraints but limited process guidance.
relatedTokens:
  - scaffolding.type
  - agency.mode
  - feedback.timing
oerSchemaMapping:
  relatedClasses:
    - LearningComponent
    - Task
    - LearningObjective
aiGuidance: Use this token to decide how much support to include before asking the learner to perform independently.
```

### Starter token groups

Start with these groups:

1. `scaffolding.*`
2. `agency.*`
3. `feedback.*`
4. `assessment.*`
5. `revision.*`
6. `reflection.*`
7. `collaboration.*`
8. `accessibility.*`
9. `localization.*`
10. `aiUse.*`
11. `pacing.*`
12. `evidence.*`

### Starter token list

```yaml
scaffolding.level:
  values: [none, low, medium, high, adaptive]

scaffolding.type:
  values: [worked-example, checklist, template, guided-steps, exemplar, coaching, none]

agency.mode:
  values: [fixed-path, bounded-choice, open-choice, self-directed]

agency.choicePoint:
  values: [topic, tool, medium, sequence, partner, deliverable, audience]

feedback.mode:
  values: [none, self, peer, instructor, automated, community, peer-plus-instructor, mixed]

feedback.timing:
  values: [before-submission, during-process, after-submission, iterative, on-demand]

assessment.evidence:
  values: [quiz, artifact, performance, portfolio, reflection, critique-notes, process-documentation, presentation, artifact-plus-reflection]

assessment.mode:
  values: [formative, summative, diagnostic, ipsative, mastery, critique-based]

revision.required:
  values: [true, false]

revision.mode:
  values: [optional, required-once, required-until-proficient, iterative-cycle]

reflection.required:
  values: [true, false]

reflection.focus:
  values: [process, concept-transfer, creative-choice, ethical-use, collaboration, failure-analysis, metacognition]

collaboration.structure:
  values: [individual, pair, small-group, peer-review, studio-critique, community-partner]

collaboration.roleClarity:
  values: [none, informal, assigned-roles, rotating-roles]

accessibility.mode:
  values: [standard, low-bandwidth, screen-reader-first, multimodal, flexible-deadline, universal-design]

accessibility.mediaAlternatives:
  values: [captions, transcript, alt-text, printable, audio-description, downloadable-assets]

localization.level:
  values: [none, language-only, examples-localized, culturally-adapted, community-co-designed]

bandwidth.assumption:
  values: [low, medium, high, offline-capable]

aiUse.policy:
  values: [prohibited, assisted-disclosed, collaborative-disclosed, experimental, instructor-specified]

aiUse.allowedFunctions:
  values: [brainstorming, outlining, debugging, critique, feedback, reference-generation, image-generation, code-generation, final-artifact-generation]

aiUse.disclosureRequired:
  values: [true, false]

aiUse.reflectionRequired:
  values: [true, false]
```

---

## 11. Instructional Patterns

Instructional patterns are reusable sequences of learning activity.

They should be written like design patterns: recurring problem, context, solution, sequence, consequences, examples, and implementation notes.

### Example pattern object

```yaml
id: observe-analyze-create-critique-revise
name: Observe, Analyze, Create, Critique, Revise
summary: A studio-learning pattern that moves learners from example analysis to artifact production, critique, revision, and reflection.
problem: Learners need to develop both conceptual understanding and production judgment, not simply complete a technical task.
context:
  - studio courses
  - design courses
  - media production
  - digital arts
  - portfolio-oriented learning
sequence:
  - id: observe
    learnerAction: Study examples or references.
    instructorAction: Provide curated examples and orienting questions.
  - id: analyze
    learnerAction: Identify principles, choices, techniques, or patterns.
    instructorAction: Facilitate discussion or provide analysis prompts.
  - id: create
    learnerAction: Produce an artifact using the observed principles.
    instructorAction: Provide constraints, tools, and expectations.
  - id: critique
    learnerAction: Give and receive feedback.
    instructorAction: Structure critique criteria and norms.
  - id: revise
    learnerAction: Improve the artifact based on feedback.
    instructorAction: Emphasize revision as evidence of learning.
  - id: reflect
    learnerAction: Explain choices, changes, and learning.
    instructorAction: Assess process and transfer.
recommendedTokens:
  scaffolding.level: medium
  agency.mode: bounded-choice
  feedback.mode: peer-plus-instructor
  revision.required: true
  reflection.required: true
assessmentEvidence:
  - artifact
  - critique-notes
  - revision-statement
  - reflection
aiGuidance: Use this pattern when the course goal includes creative judgment, process documentation, and iterative improvement.
```

### Starter pattern library

1. **Observe → Analyze → Create → Critique → Revise**
2. **Demo → Guided Practice → Independent Production**
3. **Case → Stakeholder Analysis → Response Design**
4. **Prompt → AI Experiment → Evaluate → Disclose**
5. **Reference Study → Technical Exercise → Creative Application**
6. **Constraint-Based Project Sprint**
7. **Peer Review Studio Cycle**
8. **Mastery Checkpoint Pathway**
9. **Artifact Analysis Reflection**
10. **Community-Contextualized Design Brief**

---

## 12. Pedagogical Themes

Pedagogical themes are bundles of tokens and preferred patterns.

They are the closest equivalent to visual design-system themes.

### Example theme object

```yaml
id: constructivist-studio
name: Constructivist Studio
summary: A making-centered instructional style emphasizing artifact production, critique, revision, and reflection.
tokens:
  scaffolding.level: medium
  agency.mode: bounded-choice
  feedback.mode: peer-plus-instructor
  assessment.evidence: artifact-plus-reflection
  revision.required: true
  revision.mode: iterative-cycle
  reflection.required: true
  reflection.focus: creative-choice
preferredPatterns:
  - observe-analyze-create-critique-revise
  - peer-review-studio-cycle
recommendedRendererProfiles:
  - project-brief
  - critique-worksheet
  - instructor-facilitation-guide
aiGuidance: When applying this theme, preserve learner choice, include structured critique, require revision, and ask learners to explain creative decisions.
```

### Starter themes

- `direct-instruction`
- `constructivist-studio`
- `mastery-learning`
- `inquiry-based`
- `critical-media-analysis`
- `project-based-production`
- `accessibility-first`
- `ai-literacy`
- `low-bandwidth-global`
- `community-engaged`

---

## 13. Renderer Profiles

Renderer profiles do not have to render anything in version 0.1. They can define expected output structures that platforms or AI agents can implement later.

Examples:

- `lesson-page`
- `project-brief`
- `studio-critique-guide`
- `student-checklist`
- `instructor-facilitation-guide`
- `rubric-aligned-assessment`
- `aiul-declaration`
- `course-map`
- `lms-assignment`
- `printable-handout`
- `ai-agent-context-package`

### Example renderer profile

```yaml
id: project-brief
name: Project Brief
summary: A student-facing assignment format for project-based learning.
requiredSections:
  - overview
  - learning-objectives
  - materials
  - process
  - deliverables
  - assessment-criteria
  - revision-expectations
  - reflection
optionalSections:
  - ai-use
  - peer-critique
  - accessibility-options
  - examples
compatiblePatterns:
  - observe-analyze-create-critique-revise
  - constraint-based-project-sprint
  - community-contextualized-design-brief
aiGuidance: Generate clear student-facing language, preserve learning objectives, include evidence requirements, and state revision expectations explicitly.
```

---

## 14. Validation Rules

Validation rules are what make the system useful for both humans and AI agents.

They can begin as documented heuristics before becoming executable code.

### Example validation rule

```yaml
id: ai-use-reflection-required
name: AI Use Requires Reflection
severity: warning
condition:
  aiUse.policy:
    in:
      - assisted-disclosed
      - collaborative-disclosed
      - experimental
expected:
  reflection.required: true
message: If AI use is allowed or encouraged, the learning experience should include reflection on how AI shaped the process, decisions, or artifact.
```

### Starter validation rule groups

1. **Objective/activity alignment**
   - Every learning objective should have an associated learner action.

2. **Objective/assessment alignment**
   - Every objective should have visible evidence of learning.

3. **AI-use transparency**
   - AI-permitted activities should include disclosure requirements.

4. **AI-use reflection**
   - AI-supported activities should include reflection or evaluation.

5. **Revision logic**
   - Critique-based patterns should include revision expectations.

6. **Feedback logic**
   - Peer-review patterns should specify feedback mode and timing.

7. **Accessibility logic**
   - Media-heavy materials should identify media alternatives.

8. **Agency/scaffolding balance**
   - Open-choice projects for novice learners should include adequate scaffolding.

9. **Localization logic**
   - Globally reusable examples should identify whether examples are culturally specific or adaptable.

---

## 15. AI-Agent Readiness

This is central to the project.

AI agents should be able to:

- discover the vocabulary
- understand token definitions
- select appropriate patterns
- apply themes
- follow implementation recipes
- validate instructional alignment
- generate platform-specific outputs
- preserve provenance, licensing, and attribution
- avoid inventing unsupported tokens or patterns

### Recommended AI-readable files

```text
/public/llms.txt
/public/llms-full.txt
/public/ois-index.json
/public/ois-context.jsonld
/schemas/ois-token.schema.json
/schemas/ois-pattern.schema.json
/schemas/ois-theme.schema.json
/schemas/ois-renderer.schema.json
/schemas/ois-validation-rule.schema.json
/examples/*/ai-agent-package.json
```

### `llms.txt` purpose

The `llms.txt` file should tell AI agents:

- what Open Instructional Systems are
- where to find the full specification
- how to use tokens, patterns, and themes
- what not to do
- how to cite or attribute the framework
- how to implement the system in another project

### AI agent operating rule

Use this as a core rule:

> AI agents should not generate courses from vague prompts alone. They should first identify learning goals, select or adapt an instructional pattern, apply a pedagogical theme, specify assessment evidence, validate alignment, and only then generate student-facing or instructor-facing materials.

### AI implementation recipe

```text
1. Parse the user’s instructional context.
2. Identify learning goals and learner level.
3. Select a suitable pedagogical theme.
4. Select one or more instructional patterns.
5. Apply relevant pedagogical tokens.
6. Generate or adapt the learning experience.
7. Validate objective/activity/assessment alignment.
8. Check AI-use, accessibility, and reflection requirements.
9. Produce the requested output format.
10. Include a transparent summary of pedagogical decisions.
```

---

## 16. Flagship Demonstration

The flagship demonstration should be independent of the existing platform.

The simplest demo:

> **Same content. Four pedagogical styles.**

Recommended content example:

**Camera Framing in 3D Animation**

Render as:

1. **Direct Instruction**
   - explanation
   - terminology
   - examples
   - short comprehension check
   - individual practice

2. **Constructivist Studio**
   - visual observation
   - analysis of examples
   - artifact production
   - peer critique
   - revision
   - reflection

3. **Critical Media Analysis**
   - framing as meaning-making
   - viewer attention
   - spectatorship
   - representation
   - written analysis
   - creative response

4. **Mastery Pathway**
   - micro-skills
   - scaffolded exercises
   - formative checkpoints
   - rubric-aligned evidence
   - revision until proficient

Each version should show:

- selected theme
- selected pattern
- applied tokens
- student-facing output
- instructor-facing notes
- assessment evidence
- validation report
- AI-agent-readable JSON

This will make the idea immediately understandable to educators, developers, and AI tool builders.

---

## 17. Demonstrating Usefulness

The project should demonstrate usefulness before claiming broad impact.

### Demonstration 1: Human understanding

Can educators understand and use the vocabulary?

Evidence:

- short usability interviews
- instructor feedback
- pattern-card comprehension
- adaptation exercises

### Demonstration 2: OER adaptation

Can instructors adapt an OER more quickly or more clearly using OIS?

Comparison:

- normal OER lesson
- OER lesson with OIS tokens, pattern, and theme

Measures:

- time to adapt
- perceived clarity
- confidence using the adapted lesson
- quality of objective/activity/assessment alignment
- likelihood of reuse

### Demonstration 3: AI-assisted course design

Can AI agents produce better instructional drafts when they use OIS?

Comparison:

- generic AI prompt
- AI prompt using OIS token/pattern/theme registry

Measures:

- alignment quality
- assessment appropriateness
- hallucination or unsupported claims
- consistency of student-facing expectations
- instructor revision burden
- time to usable draft

### Demonstration 4: Implementation portability

Can another person implement OIS in another system?

Evidence:

- external fork or implementation
- GitHub issue feedback
- platform-specific examples
- use in HAX, Pressbooks, Canvas, Nuxt, static sites, or other OER tools

---

## 18. Research and Evaluation Plan

### Study 1: Instructor Adaptation Study

Question:

> Does pedagogical tokenization make OER easier for instructors to adapt?

Materials:

- one OER lesson without OIS metadata
- the same lesson with OIS token/pattern/theme documentation

Measures:

- time to adapt
- perceived clarity
- perceived usefulness
- confidence teaching the adapted lesson
- quality of learning objective/activity/assessment alignment

Output:

- conference paper
- teaching-and-learning article
- OER community presentation

### Study 2: AI-Assisted Course Development Study

Question:

> Does an open instructional system improve the quality and reliability of AI-assisted course development?

Comparison:

- generic AI course-development prompt
- OIS-guided AI workflow

Measures:

- pedagogical alignment
- clarity of outputs
- assessment quality
- accessibility coverage
- provenance and attribution handling
- AI-use transparency
- instructor trust

### Study 3: Student Learning Experience Study

Question:

> Does an explicit pedagogical structure improve students’ understanding of expectations, feedback, agency, and revision?

Measures:

- expectation clarity
- perceived agency
- feedback usefulness
- confidence in revision
- fairness of assessment
- reflection quality
- artifact quality where applicable

### Study 4: Global Reuse and Localization Study

Question:

> Do OIS tokens and patterns make open materials easier to adapt across contexts?

Measures:

- localization decisions documented
- cultural/contextual adaptation quality
- instructor adaptation notes
- reuse across institutions or regions
- translated/localized pattern examples

---

## 19. Impact Ladder

Avoid starting with the claim that the project improves learning globally. Build the claim step by step.

### Level 1: Availability

- public site launched
- token registry published
- pattern library published
- JSON schemas available
- AI-readable files available

### Level 2: Understandability

- educators can explain the difference between content reuse and pedagogical reuse
- AI agents can summarize and apply the system accurately
- documentation is clear enough for external implementers

### Level 3: Adoption

- forks
- citations
- external implementations
- instructors using pattern cards
- platforms referencing OIS files
- AI workflows using OIS guidance

### Level 4: Adaptation Quality

- reduced time to adapt OER
- improved alignment between objectives, activities, and assessments
- clearer student-facing expectations
- better preservation of instructional intent during remixing

### Level 5: Learning Process Quality

- improved feedback structures
- stronger reflection
- better revision cycles
- clearer AI-use expectations
- more intentional learner agency

### Level 6: Learning Outcomes and Ecosystem Effects

- artifact-quality gains
- transfer of skills
- portfolio improvement
- course-quality improvements
- global remixing and localization
- inclusion in OER/learning-design/AI education conversations

Credible global-impact claim:

> Open Instructional Systems can increase the global usefulness of OER by making instructional intent portable, adaptable, automatable, and measurable across platforms and learning contexts.

---

## 20. Roadmap

### Phase 0: Name, Scope, and License

Deliverables:

- Confirm project name.
- Write one-page concept note.
- Choose license.
- Create repository.
- Publish README.

Recommended license approach:

- Documentation: CC BY 4.0
- Token and pattern registry: CC BY 4.0 or CC0
- JSON schemas: CC0 or MIT
- Code/scripts: MIT or Apache 2.0

Success criterion:

> A visitor can understand the purpose of the project in under five minutes.

---

### Phase 1: Documentation Site Scaffold

Deliverables:

- Static docs site.
- Navigation structure.
- Glossary.
- Concept pages.
- Initial spec page.
- Contribution guide.

Success criterion:

> The site feels like a public reference, not a private project note.

---

### Phase 2: Core Registry

Deliverables:

- 30–40 starter tokens.
- 8–10 starter patterns.
- 6–10 starter themes.
- 4–6 renderer profiles.
- 8–12 validation rules.
- YAML/JSON source files.
- JSON Schemas.

Success criterion:

> The system is specific enough to guide implementation, but small enough to understand.

---

### Phase 3: Agent-Readable Package

Deliverables:

- `ois-index.json`
- `ois-context.jsonld`
- `llms.txt`
- `llms-full.txt`
- AI implementation guide.
- Prompt contracts.
- Agent recipes.
- Example AI-agent package.

Success criterion:

> An AI agent can read the project files and correctly apply a theme and pattern to a sample learning experience.

---

### Phase 4: Flagship Examples

Deliverables:

- Same content rendered four ways.
- AIUL assignment example.
- Course module example.
- Validation example.
- Before/after OER adaptation example.

Success criterion:

> A human visitor immediately understands why this is more than metadata.

---

### Phase 5: External Feedback and Pilot Use

Deliverables:

- Share with OER educators.
- Share with instructional designers.
- Share with AI/course-building developers.
- Collect issue-based feedback.
- Run one small instructor adaptation test.

Success criterion:

> At least a few people outside the project can use the vocabulary to improve or adapt a learning experience.

---

### Phase 6: Apply to Existing OER Platform

This is intentionally delayed.

Possible deliverables later:

- add OIS metadata fields to the platform
- expose OIS patterns in content editing
- generate OIS-enhanced JSON-LD
- add AI course-builder workflows
- add validation reports
- add styled rendering modes

Success criterion:

> The existing platform becomes a reference implementation of a stable public system rather than the place where the concept is still being invented.

---

## 21. First GitHub Issues

### Issue 1: Create Documentation Site Scaffold

Tasks:

- Select docs framework.
- Create homepage.
- Add navigation.
- Add glossary.
- Add concept pages.

---

### Issue 2: Write Core Concept Pages

Tasks:

- Define Open Instructional Systems.
- Define pedagogical styling.
- Define tokens, patterns, themes, renderers, and validation rules.
- Explain relationship to OERSchema and AIUL.

---

### Issue 3: Create Token Registry Format

Tasks:

- Define token object structure.
- Create JSON Schema.
- Add initial token groups.
- Add examples and AI guidance for each token.

---

### Issue 4: Create Starter Token Library

Tasks:

- Add scaffolding tokens.
- Add feedback tokens.
- Add assessment tokens.
- Add agency tokens.
- Add revision/reflection tokens.
- Add AI-use tokens.
- Add accessibility/localization tokens.

---

### Issue 5: Create Pattern Object Format

Tasks:

- Define pattern object structure.
- Create JSON Schema.
- Add fields for problem, context, sequence, evidence, tokens, examples, and AI guidance.

---

### Issue 6: Create Starter Pattern Library

Tasks:

- Add 8–10 starter patterns.
- Write each as both documentation page and YAML/JSON source.
- Include examples and implementation notes.

---

### Issue 7: Create Theme Object Format

Tasks:

- Define theme object structure.
- Create JSON Schema.
- Add token bundles and preferred patterns.

---

### Issue 8: Create Starter Theme Library

Tasks:

- Add direct instruction.
- Add constructivist studio.
- Add mastery learning.
- Add inquiry-based.
- Add AI literacy.
- Add accessibility-first.

---

### Issue 9: Create AI-Agent Guide

Tasks:

- Add `llms.txt`.
- Add `llms-full.txt`.
- Add agent operating rules.
- Add implementation recipes.
- Add example prompt contracts.

---

### Issue 10: Create Flagship Demo

Tasks:

- Choose sample content.
- Render it through four pedagogical styles.
- Show applied tokens and patterns.
- Include AI-readable JSON.
- Include validation report.

---

### Issue 11: Create Validation Rule Library

Tasks:

- Define validation rule object.
- Add alignment rules.
- Add AI-use rules.
- Add accessibility rules.
- Add critique/revision rules.

---

### Issue 12: Create Research and Evaluation Kit

Tasks:

- Add instructor adaptation study protocol.
- Add AI-assisted course-design evaluation rubric.
- Add student learning experience survey.
- Add artifact-analysis rubric.

---

## 22. Public Documentation Voice

The site should be written in a practical, invitational tone.

Avoid sounding like:

> This is the universal solution to instructional design.

Prefer:

> This is a shared vocabulary and reference library for making instructional decisions explicit, portable, adaptable, and automatable.

Avoid overclaiming. The project will be more credible if it presents itself as:

- useful
- extensible
- open
- researchable
- implementation-friendly
- compatible with existing standards

---

## 23. Sample Homepage Structure

Suggested homepage sections:

1. **Hero statement**

   > Open Instructional Systems extend OER from reusable content into reusable instructional infrastructure.

2. **Problem**

   OER materials are shareable, but their instructional logic is often implicit.

3. **Solution**

   OIS defines pedagogical tokens, instructional patterns, themes, renderer profiles, and validation rules.

4. **Quick example**

   Show one learning activity restyled as direct instruction, studio critique, mastery pathway, and AI-literacy activity.

5. **For humans**

   Instructors and designers can reuse patterns and adapt learning experiences.

6. **For machines**

   AI agents and platforms can use structured files to apply, validate, and export instructional designs.

7. **Get started**

   - Browse tokens.
   - Browse patterns.
   - Try an example.
   - Read the AI-agent guide.
   - Implement the profile.

---

## 24. Recommended First Public Example

Use a compact example that shows the concept clearly.

### Base content object

```yaml
id: camera-framing-intro
title: Camera Framing in 3D Animation
summary: Learners explore how camera placement and framing shape viewer attention and narrative meaning.
learningObjectives:
  - Analyze how framing directs viewer attention.
  - Create a rendered shot using intentional camera placement.
  - Explain how composition choices influence narrative meaning.
```

### Applied theme: Direct Instruction

```yaml
theme: direct-instruction
pattern: demo-guided-practice-independent-production
tokens:
  scaffolding.level: high
  agency.mode: fixed-path
  feedback.mode: instructor
  assessment.evidence: quiz
```

### Applied theme: Constructivist Studio

```yaml
theme: constructivist-studio
pattern: observe-analyze-create-critique-revise
tokens:
  scaffolding.level: medium
  agency.mode: bounded-choice
  feedback.mode: peer-plus-instructor
  assessment.evidence: artifact-plus-reflection
  revision.required: true
```

### Applied theme: Critical Media Analysis

```yaml
theme: critical-media-analysis
pattern: case-stakeholder-analysis-response-design
tokens:
  scaffolding.level: medium
  agency.mode: bounded-choice
  feedback.mode: peer
  assessment.evidence: written-analysis
  reflection.focus: concept-transfer
```

### Applied theme: Mastery Pathway

```yaml
theme: mastery-learning
pattern: mastery-checkpoint-pathway
tokens:
  scaffolding.level: adaptive
  agency.mode: fixed-path
  feedback.timing: iterative
  assessment.mode: mastery
  revision.mode: required-until-proficient
```

This example should be visible in human-readable form and downloadable in JSON/YAML.

---

## 25. Later Platform Integration Plan

Only after the reference library has a stable `0.1` or `0.2` release should it be integrated into the existing OER content platform.

Later implementation steps:

1. Add optional `pedagogy` fields to existing content frontmatter.
2. Reference OIS tokens by ID rather than hardcoding local values.
3. Add OIS pattern and theme selectors.
4. Generate OIS-aware JSON-LD.
5. Add styled previews.
6. Add alignment validator.
7. Generate AI-agent context from content + OIS registry.
8. Add course-builder workflows.
9. Add LMS export recipes.

This sequence protects the existing platform and makes the public reference library more general.

---

## 26. Recommended Next Move

The next move should be:

> Create the standalone Open Instructional Systems documentation repository and publish a version 0.1 reference library.

Minimum first release:

- homepage
- glossary
- concept overview
- 20–30 starter tokens
- 6 starter patterns
- 4 starter themes
- 1 flagship example
- `llms.txt`
- `ois-index.json`
- JSON Schema drafts

Do not start with automation.

Start with the grammar.

Then make the grammar readable by humans.

Then make the grammar readable by machines.

Then let AI agents use the grammar to build, adapt, validate, and export courses.

---

## 27. Working Summary

You are not missing a platform.

You are defining a missing layer for the open education ecosystem:

```text
Pedagogical tokens
+ Instructional patterns
+ Pedagogical themes
+ Renderer profiles
+ Validation rules
+ AI-agent-readable documentation
= Open Instructional Systems Reference Library
```

The existing OER content platform can become a future implementation of this system, but the immediate opportunity is larger:

> Build the public pedagogical design-system library first, so educators, developers, OER platforms, and AI agents can all implement the same instructional grammar.
