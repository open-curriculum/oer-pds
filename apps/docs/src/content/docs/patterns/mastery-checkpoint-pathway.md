---
title: Mastery Checkpoint Pathway
description: A competency-based pattern where learners demonstrate proficiency at each checkpoint before advancing.
---

**Pattern ID:** `mastery-checkpoint-pathway`

**Best for:** Competency-based progression, technical skill acquisition, self-paced learning, coding bootcamps, certification preparation.

## Sequence

### 1. Micro-skill Introduction
Present one discrete skill or concept at a time.

### 2. Practice Exercise
Learner completes a practice exercise for the micro-skill.

### 3. Checkpoint Assessment
Learner submits evidence. Must meet proficiency threshold to proceed.

### 4. Revision (if needed)
Learner revises until proficiency is demonstrated.

### 5. Advance
Learner progresses to the next skill only after passing the checkpoint.

## Assessment Evidence
- Checkpoint submissions
- Rubric proficiency scores
- Revision history

## Recommended Tokens

```yaml
scaffolding.level: high
agency.mode: fixed-path
feedback.mode: automated
assessment.evidence: artifact
assessment.mode: mastery
revision.required: true
revision.mode: required-until-proficient
```

## Compatible Themes
- `mastery-learning`
- `direct-instruction`
