---
title: "OpenShift console: Ecosystem and OLM coexistence"
description: "Classic and Next-Gen operator catalog, Installed Operators IA, and OLMv1 lifecycle flows during the OLMv0 to OLMv1 migration."
year: 2026
role: Senior UX designer
category: UX Strategy
order: 99
heroImage: /images/work/red-hat-logo.svg
externalUrl: https://openshift-platform-prototype.vercel.app/ecosystem/software-catalog
parentCaseStudy: openshift-console-platform-prototypes
tags:
  - OpenShift
  - PatternFly
  - Operators
draft: false
---

## Context

Cluster administrators must install and manage Next-Gen (OLMv1) operators alongside Classic (OLMv0) operators for multiple releases. The console cannot imply a single catalog or a single lifecycle engine when two coexist. Operators need to know which mode they are in, which packages are viable for Next-Gen, and how install, update, and uninstall behave for v1 extensions.

## Problem framing

Without separated surfaces and clear deployment-mode signaling, admins misread which OLM manages an operator or stall on GA-ready v1 tasks. An integrated combined catalog was explored earlier; alignment with engineering and PM moved the program toward **separated catalog and Installed Operators views** with a top-level toggle, compatibility filtering on the Next-Gen side, and lifecycle parity on Installed Operators (including basic update and unsubscribe + delete paths).

## Approach

- Reused prior unified-operator exploration but reframed for GA coexistence, not Tech Preview-only flows.
- Partnered with PM and console engineering on OLMv1 Console alignment: toggle IA, filter behavior, and tab structure for Installed Operators.
- Built hosted PatternFly prototypes for Software Catalog and Installed Operators so reviewers can click through install choice, mode badges, and lifecycle empty states before implementation lands.

## Roadmap (public-facing)

- **Near term:** Lock toggle and tab IA; ship dev-ready specs for Next-Gen catalog filtering and Installed Operators lifecycle columns.
- **Next:** Align Operator Upgrade Planner touchpoints with coexistence patterns without duplicating out-of-scope planner work.
- **Later:** Refine migration-adjacent messaging when operator migration features are scheduled separately from coexistence UX.

## Prototype entry points

- [Software Catalog](https://openshift-platform-prototype.vercel.app/ecosystem/software-catalog)
- [Installed Operators](https://openshift-platform-prototype.vercel.app/ecosystem/installed-operators)

## Outcome

A single narrative for how Classic and Next-Gen coexist in the console: separated surfaces, honest compatibility filtering, and lifecycle flows that match what OLMv1 can do at GA.
