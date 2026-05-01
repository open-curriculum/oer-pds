---
title: Implementation Recipes for AI Agents
description: Step-by-step guides for AI agents implementing OIS in course design, content generation, and validation workflows.
---

## Recipe 1: Design a Learning Activity

Use this recipe when asked to design a new lesson, project, or exercise.

```
1. Parse the instructional context
   - What is the learning goal?
   - What is the learner level?
   - What domain or subject?
   - What constraints (time, tools, context)?

2. Select a pedagogical theme
   - Fetch ois-index.json → themes
   - Match theme to instructional goal and context
   - Note the theme's default token values

3. Select an instructional pattern
   - Fetch ois-index.json → patterns
   - Match pattern to the activity type and learning goal
   - Check pattern's recommendedTokens

4. Resolve tokens
   - Start with theme defaults
   - Apply pattern requirements
   - Apply any local overrides from the user's context

5. Check validation rules
   - Fetch ois-index.json → validationRules
   - Check each rule against resolved tokens
   - Flag any errors or warnings

6. Generate the learning experience
   - Use the pattern sequence as the structural guide
   - Apply the resolved tokens to each phase
   - Produce the requested output format (project brief, lesson page, etc.)

7. Generate transparency summary
   - List the theme, pattern, and tokens used
   - List any validation warnings
   - List any assumptions made
```

## Recipe 2: Adapt an Existing OER

Use when asked to adapt or restyle an existing learning resource.

```
1. Identify the existing resource's pedagogy
   - Does it have OIS metadata? If so, use it.
   - If not, infer the implicit theme and pattern from the content structure.

2. Identify the target style
   - What theme should the adapted version use?
   - What pattern is appropriate?

3. Preserve the core content
   - Keep learning objectives
   - Keep key concepts and vocabulary
   - Keep license and attribution

4. Restyle the pedagogy
   - Apply the new theme's token defaults
   - Replace or restructure the sequence using the new pattern
   - Generate new student-facing materials for the new style

5. Generate before/after comparison
   - Show original token profile (or inferred)
   - Show new token profile
   - Highlight what changed and why
```

## Recipe 3: Validate a Course Plan

Use when asked to check whether a course plan is pedagogically aligned.

```
1. Extract all token values from the course plan
2. Fetch ois-index.json → validationRules
3. Run each rule:
   - Check if the condition is met
   - If yes, check if the expected state is also met
   - If not, record the rule ID, severity, and message
4. Group results by severity (errors, warnings, info)
5. Return validation report with specific recommendations
```

## Recipe 4: Generate an AI-Use Assignment

Use when asked to create an assignment that explicitly incorporates AI use.

```
1. Set aiUse.policy based on the intended AI role
   - assisted-disclosed: AI helps, learner decides
   - collaborative-disclosed: AI is a partner
   - experimental: AI use is the subject of study

2. Specify aiUse.allowedFunctions
   - Be specific — list only what is actually permitted
   - Never leave this unspecified when policy ≠ prohibited

3. Set reflection tokens
   - reflection.required: true
   - reflection.focus: ethical-use (required)
   - May add: creative-choice, process

4. Set disclosure requirement
   - aiUse.disclosureRequired: true

5. Generate materials
   - Project brief with AI use instructions
   - AI disclosure statement template
   - Reflection prompts specific to the AI functions used

6. Run validation
   - ai-use-requires-disclosure
   - ai-use-requires-reflection
   - ai-collaborative-requires-reflection (if applicable)
```
