---
title: "OpenShift console: Networking"
description: "NetworkPolicy and MultiNetworkPolicy parity, configuration overview, and topology-oriented visibility for cluster administrators."
year: 2026
role: Senior UX designer
category: UX Strategy
order: 97
heroImage: /images/work/red-hat-logo.svg
externalUrl: https://openshift-platform-prototype.vercel.app/networking/topology
parentCaseStudy: openshift-console-platform-prototypes
tags:
  - OpenShift
  - Networking
  - PatternFly
draft: false
---

## Context

Networking administrators configure policies, services, routes, and multi-network attachments across a sprawl of console pages. Recent delivered work on network topology, form-based configuration, and relationship views established patterns for graph and guided editing. Current design extends that foundation toward **policy parity** and a **configuration overview** when troubleshooting.

## Problem framing

Admins cannot safely manage post-migration MultiNetworkPolicies without form-based **edit**, visible **NAD associations** on detail pages, templates, and status comparable to other networking resources. Separately, when configuration breaks, there is no single place that answers “what is wrong and where do I go next?”

## Approach

- Authored design documentation for NetworkPolicy and MultiNetworkPolicy console UX with P0/P1 alignment to engineering delivery slices.
- Mapped ingress/egress tables, conditions, clone, advanced selectors, and props-driven components for forklift reuse in the networking plugin.
- Prototyped topology and service/route adjacency in the hosted prototype so list/detail and graph views can be reviewed together.

## Roadmap (public-facing)

- **Policy parity (P0):** Dev-ready specs for edit flows and MNP NAD visibility; accessibility review on dense policy tables.
- **Policy parity (P1):** Clone, advanced selectors, and conditions parity with the next engineering slice.
- **Configuration overview:** Phase 1 shell and read-only aggregation when prioritized; builds on topology learnings from recent networking releases.

## Prototype entry points

- [Network topology](https://openshift-platform-prototype.vercel.app/networking/topology)
- [Services](https://openshift-platform-prototype.vercel.app/networking/services) (networking landing)

## Outcome

Networking UX should reduce tab-hopping: policies are editable where eng supports it, multi-network context is visible on detail, and overview work points admins at the broken layer faster.
