---
title: Course Design Workflows
description: Step-by-step AI-assisted workflows for designing OIS-annotated courses and modules from scratch.
---

These workflows are designed for AI agents assisting instructors or instructional designers who are building a course or module from scratch.

## Workflow 1: New Course Design

Use this workflow when an instructor is starting from a blank slate.

### Step 1: Establish the learning context

Ask the instructor:
1. What is the subject and level? (e.g., "Intermediate 3D animation in a community college program")
2. Who are the learners? (experience, constraints, tech access, institutional context)
3. What should learners be able to **do** by the end of this course? (actionable learning outcomes)
4. How many weeks/sessions? What is the overall format?

### Step 2: Identify the overarching pedagogical theme

Present the 10 themes with brief descriptions. Ask which best matches the instructor's teaching philosophy for this course.

If the instructor has never heard of OIS, use the analogy:
> "Think of this like choosing a visual design style — minimalist, maximalist, brutalist — but for how you teach. These themes describe your instructional approach."

### Step 3: Identify per-module variation

Most courses use one dominant theme with variation. Map modules to sub-themes:

```
Course: Camera and Lighting for 3D Animation
Overall theme: constructivist-studio
Module 1: direct-instruction (foundational technical skills)
Module 2: constructivist-studio (production + critique)
Module 3: constructivist-studio (project + critique)
Module 4: project-based-production (capstone)
```

### Step 4: Draft course-level pedagogy block

```yaml
pedagogy:
  version: "0.1"
  courseTheme: constructivist-studio
  aiUse.policy: assisted-disclosed
  aiUse.disclosureRequired: "true"
  localization.level: none
  accessibility.mode: screen-reader-compatible
```

### Step 5: Generate module-level structure

For each module, follow the Module Design Workflow (below).

---

## Workflow 2: Module Design

Use this workflow when designing a single module with a theme already established.

### Step 1: Define the module learning objective

Write one specific, observable objective:
> "Learners will be able to identify and intentionally apply six camera shot types in service of a narrative goal."

### Step 2: Select a pattern

Match the pattern to the module goal. From the registry, the most commonly appropriate patterns by theme:

| Theme | Typical pattern |
|-------|----------------|
| `direct-instruction` | `demo-guided-practice-independent-production` |
| `constructivist-studio` | `observe-analyze-create-critique-revise` |
| `mastery-learning` | `mastery-checkpoint-pathway` |
| `inquiry-based` | `artifact-analysis-reflection` or `case-stakeholder-analysis-response-design` |
| `ai-literacy` | `prompt-ai-experiment-evaluate-disclose` |

### Step 3: Build the token bundle

Start from theme defaults. Override for any module-specific decisions:

```yaml
tokens:
  scaffolding.level: medium    # override from theme default if needed
  aiUse.policy: prohibited     # override if this module doesn't allow AI
  revision.required: "true"
  feedback.timing: before-submission
```

### Step 4: Validate

Run the token bundle through the validation rules. See [Validation Prompts](/ai/validation-prompts/).

### Step 5: Generate content

Specify renderer profile + generate. Include the completed pedagogy block in the output.

---

## Workflow 3: Retrofitting Existing Content

Use this workflow when an instructor has existing content and wants to annotate it with OIS.

### Step 1: Read the existing content

Analyze the assignment brief, lesson description, or syllabus. Identify:
- What does the learner DO in this activity?
- What does the instructor DO?
- What is submitted? How is it evaluated?
- Is there a revision or feedback cycle?

### Step 2: Infer the token bundle

From the activity description, infer the most accurate token values. If the information is ambiguous, use the question list from Workflow 1 to fill gaps.

### Step 3: Surface the implicit theme

Given the inferred tokens, identify the best-matching theme. This is often revealing — instructors discover their teaching has an identifiable style they hadn't named.

### Step 4: Generate the pedagogy block

Write the pedagogy block and return it to the instructor for confirmation:

> "Based on your assignment, the closest OIS theme is `constructivist-studio`. Here's the token bundle I inferred. Does this match your intent?"

### Step 5: Embed and validate

Add the pedagogy block to the content frontmatter or metadata. Run validation.

---

## Output Template

After any of these workflows, return:

```
PEDAGOGY BLOCK:
[complete YAML pedagogy block]

VALIDATION RESULT:
[pass / list of errors]

GENERATED CONTENT:
[content using correct renderer profile]
```
