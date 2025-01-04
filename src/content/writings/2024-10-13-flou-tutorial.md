---
title: "Writing the Flou Tutorial"
description: ""
date: "Oct 13 2024"
tags: [
    "flou",
    "llms",
]
---

Hi, I'm ras!  Welcome to my series _On Flou_.

In this post I'll share my ideas and impressions about writing [Flou's
Tutorial](https://flou.ai/tutorial/index.md).

## Why a Tutorial?

We're realeasing the first open version of Flou with the intent of sharing it
and gathering real external usage feedback. With the first users comes the need
to communicate and explain what Flou is about and how it works.

We started by writting [Getting Started](https://flou.ai/gettings-started/)
explaining how to quickly setup a dev environment and get you running. It
doesn't get into details so the [Documentation](https://flou.ai/documentation/)
quickly followed. It's written in a sequential fashion to be read in order and
work as a reference for future lookups. It includes every implemented aspect of
using Flou.

Once read the reader has an idea of what Flou does, but it doesn't explain how
to apply it to a real use case. Having talked with many startup founders and
executives one of the biggest problems they have when starting new AI projects
is how to get from zero to one. This is were the Tutorial comes in.

It is going to be focused on a single project and how to evolve the Network of
Agents from a simple PoC into a fully usable app using most of Flou's
fundamental features. The idea is to show and explain the first steps of
building a real project. 

As it's very early in the development of Flou we'll be using the tutorial as
dogfood to polish the first experience a developer has of Flou. 'll be
documenting my impressions on what we need to work on next.

## The project

We started analyzing a set of possible project ideas taken from real current
apps ranging from pet projects to fully funded Series startups.

After brainstorming and evaluating these ideas we scored each option by:

* approachability: how easy is the project and it's workflow is to understand
* performance difficulty: how easy it is to achieve quick good enough
  performance
* features showcased: amount of Flou's fundamental features showcased
* extrapolation to real use-cases: how similiar the building workflow is to
  building similar projects

**We choose a children's bedtime stories wrtiter app.**

At the end of the tutorial the users will be able to ask the app for a daily
bedtime story for their children. They will be able to customize the stories
and improve the writer on the go.

We will learn how to write a basic PoC and iterate into an efficient and
feature-rich Network of Agents.

The tutorial will be divided in parts reaching an usable checkpoint after each
one.

### Part 1: writing a story

This first part, we will create a simple PoC. We'll be prompting an LLM to
write a short story and getting familiarized with using Flou.

The reader will learn how to set up a Flou project, create a distilled version
of their Network of Agents and interact with it.

### Part 2: daily customized stories

We will now focus on iterating our Network of Agents, creating a daily short
stories and setting up customizations for our kids.

The reader will learn how to implement features from idea to a Network of
Agents implementation.

### Part 3: using the API & monitoring

We will leverage Flou's API to create a real app and learn how to monitor it in
production.

After the tutorial you will learn what Flou is capable of but also get a feel
of the rough edges and missing features.

## Community projects

We have an long lasting idea of creating community projects, where we showcase
different use cases of Flou via creating open source projects that the
community can benefit from. Not just from the final app but also from the
building blocks and journey.

We want to open them so the community itself can iterate them creating strong
solutions.


## Contact me

If you've read the tutorial and have feedback or any questions about Flou
please reach out to me at raskovsky@gmail.com.
