---
title: "OpenShift console: GitOps plugin"
description: "GitOps progressive delivery, protected UI patterns when Argo CD owns configuration, and AI-assisted remediation for unhealthy Applications."
year: 2026
role: Senior UX designer
category: UX Strategy
order: 98
heroImage: /images/work/red-hat-logo.svg
externalUrl: https://openshift-platform-prototype.vercel.app/gitops/overview
parentCaseStudy: openshift-console-platform-prototypes
tags:
  - OpenShift
  - GitOps
  - PatternFly
draft: false
---

## Context

Teams run OpenShift with GitOps as the source of truth, but the console still invites direct edits that create drift. Separately, when Applications are unhealthy, operators need a **trustworthy** path from the GitOps plugin into Lightspeed-backed diagnosis without one-off plugin chrome that fights cross-console Agentic Runs patterns.

## Problem framing

**Protected UI:** Customer research surfaced demand for disabling or clearly gating UI changes when GitOps manages configuration. The pattern applies beyond a single product surface: namespace-scoped protection, per-resource ownership, and emergency override paths must be understandable.

**AI remedies:** Unhealthy Application detection needs consistent **View AI Recommendation** entry points (list and detail), in-plugin **AgenticRun** progress, and surfaces for evidence, remediation options, and risk/rollback. Shared Agentic Runs patterns must inform GitOps-specific flows before handoff.

## Approach

- Extended the GitOps + Agentic exploration design doc with plugin-specific entry points and consultation with GitOps eng/PM.
- Explored read-only and protected-action patterns with Console and GitOps stakeholders; documented edge cases (mixed GitOps/manual resources, RBAC, partial management).
- Prototyped rollouts, application health, and agentic progress in the hosted console prototype for async critique, building on prior GitOps plugin GA work.

## Roadmap (public-facing)

- **AI remedies:** Document list/detail entry points; align in-plugin agentic experience with shared Runs patterns; accessibility review for AI transparency (visual and verbal indicators per Red Hat AI guidance).
- **Protected UI:** Recommend primary UX pattern(s) for protected edits; scope implementation handoff when prioritized with Console PM and GitOps.
- **Prototype:** Continue linking GitOps overview, rollouts, and application flows on the hosted prototype as scenarios mature.

## Prototype entry points

- [GitOps overview](https://openshift-platform-prototype.vercel.app/gitops/overview)
- [Rollouts](https://openshift-platform-prototype.vercel.app/gitops/rollouts)

## Outcome

GitOps in the console should feel intentional: either the UI respects declared configuration, or it explains why an action is blocked and what to do next. Remediation should reuse platform agentic patterns instead of inventing a parallel assistant UI.
