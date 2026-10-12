---
title: "OpenShift console: Cluster updates and agentic execution"
description: "Update-agent Phase 2 interaction models, skip-level EUS upgrade touchpoints, and Agentic Runs alignment on Cluster Update."
year: 2026
role: Senior UX designer
category: UX Strategy
order: 96
heroImage: /images/work/red-hat-logo.svg
externalUrl: https://openshift-platform-prototype.vercel.app/administration/cluster-update
parentCaseStudy: openshift-console-platform-prototypes
tags:
  - OpenShift
  - Cluster management
  - Agentic
draft: false
---

## Context

Cluster updates are high-stakes. Phase 1 update-agent work focused on **analysis**; Phase 2 adds **execution**: review the plan, accept risks, and trigger platform (CVO) and catalog operator (OLM) upgrades from Cluster Update, with accepted-risk API integration.

Proactive UX targets the 5.2+ window so interaction models are decided before implementation capacity opens. A parallel track maps Console touchpoints for **skip-level EUS upgrades**: channel selection, preflight validation including OLM compatibility, and progress monitoring.

Prior accepted-risk and preflight designs remain reuse targets, not redesign from scratch.

## Problem framing

Admins need to understand analysis output, accept or mitigate risks, and trigger upgrades without fighting the domain Cluster Update UI or generic Lightspeed chat. Failed pre-update checks (OLM operator stale, firing alerts, unaccepted conditional risks) need clear next steps with **AI transparency** (no sparkle-only buttons on every failure).

Separately, EUS customers executing skip-level upgrades must trust channel/target choices and preflight results surfaced in Console.

## Approach

- Facilitated exploration of interaction models: page-scaffolded Cluster Update UI vs serialized chat vs generic Agentic Runs, with cluster updates treated as an intentional exception to shared triage patterns where needed.
- Mapped tabs such as Update Plans, Active AgenticRuns, and Update History to the chosen model.
- Coordinated with OTA and Lightspeed stakeholders so Phase 2 engineering does not ship undecided IA.

## Roadmap (public-facing)

- **Update-agent Phase 2:** Complete exploration with a signed interaction-model recommendation; feed upcoming cluster-update user research before high-fidelity Make work.
- **Skip-level EUS:** Map flow on Cluster Settings > Updates patterns when long-term support upgrade work is scheduled.
- **Agentic Runs:** Reuse shared Runs detail patterns where possible; keep cluster-update and agentic-run prototypes visually consistent.

## Prototype entry points

- [Cluster update](https://openshift-platform-prototype.vercel.app/administration/cluster-update)
- [Agentic runs](https://openshift-platform-prototype.vercel.app/agentic-runs)

## Outcome

Cluster Update should feel like a controlled procedure: analysis, explicit acceptance, observable execution, and agentic assistance that respects domain layout and Red Hat AI patterns.
