---
title: "OpenShift console: Global search"
description: "Predictable Administration Search defaults, query composition, and findability at scale for cluster administrators."
year: 2026
role: Senior UX designer
category: UX Strategy
order: 95
heroImage: /images/work/red-hat-logo.svg
parentCaseStudy: openshift-console-platform-prototypes
tags:
  - OpenShift
  - Search
  - Research
draft: false
---

## Context

Administrators search across Kubernetes objects daily. Customer feedback and historical console issues show friction: the Administration Search page defaults to **Label** while many users expect **Name**; filter behavior is inconsistent across plugin sections; label syntax varies (`key:value` vs `key=value`); a11y gaps exist between Name and Label modes.

Engineering partially addresses defaults via in-flight preference work in the console repository. UX reframes Search as a **5.2 design program**: proactive partnership beyond reactive fixes, building on prior standardized querying explorations.

## Problem framing

Search is not a single control. It is defaults, query language, cross-page consistency, and performance when thousands of objects match. Operators waste time re-learning the same micro-decisions on every visit.

## Approach

- Audited historical requests, pull requests, and prior UX work into themes: **predictive defaulting**, **visual query builder alternatives**, and **high-scale filter performance**.
- Planned engineering sync on 5.2 feasibility, API constraints, and dependency on in-flight preference work.
- Intended to document prototype scenarios on the hosted console or Figma as wireframes progress (Administration Search landing and high-cardinality resource scenarios).

## Roadmap (public-facing)

- **Theme A:** Context-aware defaults beyond a single Name/Label toggle (page context, resource type, remembered preference).
- **Theme B:** Point-and-click relational querying informed by advanced-search explorations elsewhere in the portfolio.
- **Theme C:** Progressive disclosure and performant chips for high-cardinality searches (e.g., NADs, Secrets).
- **Planning:** Align with product initiative owners when Console 5.2 scope is locked.

## Outcome

Search should feel predictable the first time and the hundredth time: defaults match intent, filters compose clearly, and scale does not collapse the UI.
