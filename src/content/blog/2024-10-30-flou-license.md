---
title: "Choosing the Flou License"
description: ""
date: "Oct 30 2024"
tags: [
    "flou",
    "free software",
    "open source",
]
---

Time has come that Flou is mature enough and is actually providing value to its
users. We believe it's the right time to open-source it, sharing it with a
broader audience and start building a vibrant community around it.

In this post, I'll share the journey we went through with Flou, making our
process transparent and providing insights to anyone on their own path to
open-sourcing their project.

## Goals and roadmap

Flou was born with open source principles in mind since its inception, but we
believe that open-sourcing a project comes with responsibilities: documenting
it, making it accessible and engaging with the community.

Closed source was never an option, as we believe community contributions will
make or break the project.

Our main challenge in open-sourcing Flou is deciding which license to adopt.
I'm personally a firm supporter of free software and its philosophy, but during
the processes of choosing a license several things steered me into different
directions: my personal beliefs and philosophy and the reality of the market
and ecosystem.

On one hand I firmly believe that Flou's success relies on it becoming a
ubiquitous project, a foundation layer upon which everyone can build LLM-powered
apps.  To achieve this, Flou needs to be as open as possible. On the other hand,
I honestly accept that for Flou to iterate, grow and cement itself in today's
fast-paced environment we'll need a strong business model, funding and
protection against potential exploitation by the big corps.

Our main goals are to:

* Create a vibrant and engaged community
* Appeal to a broad user base, including developers and corporations
* Foster and maximize community contributions
* Sustain and grow the core development
* Protect Flou from abusive or unfair competition

Throughout this process, we consulted prominent open source advocates and
community builders, founders with successful open core business models,
founders of failed open-source startups and licensing lawyers.

## Free software

Our first instinct was to use a copyleft license for SaSS:
[AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html). For our purposes this
means that anyone modifying Flou must publicly share their changes. This
strongly supports the project's freedom but we know that AGPL's restrictions can
be unappealing to many corporations and projects.

Other licenses we considered, like
[SSPL](https://www.mongodb.com/legal/licensing/server-side-public-license),
[BSL](https://en.wikipedia.org/wiki/Business_Source_License)
and [FCL](https://fcl.dev/) (neither OSI approved) share similar limitations and
are lesser known.

Dual licensing with a commercial license is an option (and one even [RMS
advocates](https://www.gnu.org/philosophy/selling-exceptions.en.html)), but it
would require each contributor to sign a Contributor License Agreement (CLA)
which could alienate potential contributors and complicate the contributing
process.

We ultimately ruled out AGPL and other restrictive licenses or open core
privative licenses.

We also considered writing a custom license but we're focused on pioneering
innovation in building LLM-powered apps, so writing a novel open source license
is just beyond our scope.

## A realistic approach

The [MIT license](https://choosealicense.com/licenses/mit/) is the current
standard for open source frameworks being a permissive license that's widely
recognized and used. Its main drawbacks for us is that it enables unfair
competition from big tech and derivate work might not be open-sourced. Its main
appeal is that it won't prevent anyone from using and contributing to Flou if
they choose.

We want to be transparent about our monetization strategy to help Flou meet its
goals. Our business roadmap focuses on three main pillars:

* Cloud hosting of Flou with collaborative features
* Enterprise features
* An AI Copilot

We decided to follow a proven Open Core model with a MIT license and are
considering dual licensing with AGPL + CLA or Fair Licensing for these three
features.

Changing licenses down the line is difficult, as it requires consent from
contributors, so we've carefully weighed this decision. We're confident this
approach serves the future prosperity of Flou and its incipient community.

For those interested in exploring different licensing options, here are some
helpful resources:

* [Open Source Initiative (OSI)](https://opensource.org/): What constitutes
  Open Source?
* [Choose a License](https://choosealicense.com/): a tl;dr; for licensing
* [RMS on dual
  licensing](https://www.gnu.org/philosophy/selling-exceptions.en.html)
* [Fair Source software](https://fair.io/)
* [CLA chooser](https://contributoragreements.org/ca-cla-chooser/): a tool for
  creating your CLA

## Contact me

If you have any question about Flou's licensing model or want to share feedback
please reach out to me at raskovsky@gmail.com.
