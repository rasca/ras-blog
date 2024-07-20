---
title: "Living Forks"
description: "Towards trully decentralized open source."
date: "Nov 4 2022"
tags: [
    "humane technology",
    "code",
    "malleable systems",
]
---

Have you ever forked a repo for a small change you wanted, got it to run but
after a while the maintenance burden became too much to handle? What if I told
you this can be done much easier with less friction? I've been toying with this
idea for a while now.

Currently all the burden falls to the fork maintainer. We have many tools at
our disposal that with a bit of mix and matching, and some glue code in the
middle can improve this tremendously.

In my ideal world many forks of the same code can live in the wild with minimum
effort. Users have the freedom to  try and use different forks that get updated
semi automatically. I call this _**living forks**_.

## A little bit of background

I believe in free software. Free as in I can not only use it but modify it to
my needs. Inspect the code, understand it, modify it, test it and then use it.
Current open source software fails to achieve this ideal. It's just too hard to
maintain forks of several projects at the same time. It becomes a full time job
rather quickly as you fork more and more repos. And your forks are doomed to
become outdated.

I mostly fork repos of libraries dependencies for projects I work on. When the
change is not specific to my repo I try to create a PR upstream so I don't need
to rely on my fork anymore. But most of the times I just leave them there
languishing until I need to update the framework version of the project and the
fork stops working and breaks the project. At that point I start a tedious
process of bringing the repo back in sync with the upstream code. Sometimes
that's rather easy but I have to almost always go over all the commits in the
main repo to make sure nothing broke.

I must admit that I'm lazy and most of the times I don't write a test for the
change I incorporated. It would be much nicer if I get notified that a change
upstream conflicts with my fork or makes a test don't run anymore. If this were
true I would be much more inclined to write that test.

The other case in which I fork repos is for software I personally use but I
want to make a small change in UX or functionality to most easily fulfil my
needs. In this case I need to build from source, and if I don't keep up with
the changes my installation of the software becomes stuck in an old version
subject to security vulnerabilities.

I would like to still have automatic updates with my change applied. Of course
this updates would be optimistic but I can always go back to the previous
version if something breaks till I fix it.

There's nothing stopping us/me from having all this. In this article I'll lay
out a plan on how we can achieve this (and much more).

## Github network graph

Github helped a lot in the path towards free software, making it much more
accessible to fork a repo and provide a unifyed way to contribute changes
upstream via pull requests. The first time I saw the network graph that showed
you the "living forks" of a repo I was mesmerised and this idea started to take
form. But it falls short of my vision. Not only that, nowadays it's even more
difficult to access the graph than before. You need more clicks and to know
where to find it. It's lost relevance. It should be foremost to bring freedom
to the user in a way they can decide with fork to use.

I personally use it a lot. Before forking a repo I first investigate the forks
network to see if someone else has already made the change. But github does not
make it easy. I want to quickly see if a repo is being updated, or how many
commits it's fallen behind. I want to see at a glance the list of commits they
made to understand the change. I want to see if the fork contributed a Pull
Request and it's purpose has been fulfilled. Right now I need to hover over
small dots to read the commit messages and in some repos I need to endlessly
scroll horizontally to find the changes, sometimes split into several small
chunks of activity over a long time.  Currently I end up with dozens of open
tabs one per fork.

Once upon a time Wikipedia had a page explaining how to use it, that told you
that you should always read the Talks discussion page for context on the
article. At the time of writing I couldn't find it. Github should have
something similar explaining the steps you should make before forking a repo
like it sometimes does explain for creating a new issue. I only found [this
page](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/understanding-connections-between-repositories)
that only explains how to navigate towards it.

## Forks as a tree

In order to have multiple living forks of a project as a normal reality we
need to start thinking about repos as a tree of related forks instead of
thinking about them as a single unit. Each fork should be set to track another
fork (or upstream) that tries to automatically follow them whenever possible.
Once this change of mentality is done and we apply it to the current concepts
everything decants easily.

Let's consider a commit. Once we push a new commit to a branch we have a CI job
run that tells us if all tests pass. In the new way of thinking about this, it
should automatically try to apply the commit to all forks and run tests
everywhere indicating to the commit author in how many forks there where merge
conflicts, in how many forks tests failed due to the commit and in how many
forks did the changeset applied nicely without failing any tests.

And once this commit is pushed into a main branch the forks maintainers should
be notified as well. Of course this "nicely applied without failing any test"
is an optimistic score but it's much more useful than what we have today.

This way the upstream repo owner knows how their changes affect the network and
the fork owners know they have to fix a conflict.

The same thing applies to releases. When an upstream repo creates a release why
don't all the forks get notified about it with the option to automatically and
optimistically build a release to test the software? There's nothing preventing
us from doing this.

All releases can be tied to a central error aggregator such a Sentry that can
track different releases across forks so we can add _in the wild_ error
tracking on top of merge conflicts and failing tests.

We might also want automatic deployments of every fork (if it applies) so we
can easily test that the automatic tracking is working properly.

## Implementation

Software like github/gitlab are the ideal hosts for this idea because they
already have all the pieces needed in order to build this.

For each fork tracking another one we need to create an optimistic branch that
automatically applies new commits in order to run tests, build releases and
automatically deploy the code. Once a manual review/test has been done, we can
merge the optimistic branch into the main one.

When a commit breaks more than one fork in the same way we can call them a
cohort. If a fork of the cohort fixes the error, the system should try to apply
the fix to all the other forks in the cohort.

Many repos have good tests coverage with CI/CD and automatic builds so we would
only need to add the error tracking layer to have all the pieces in place.

We would then need to work on the UX of choosing a fork and figure out the
software distribution for easy install and change across forks.

## An improved network graph

With all these evolved concepts we can start thinking about an improved network
graph. Instead of commits it would show forks with the tracking relationships
in a tree shape. We can paint the colors of each fork based on if they have
applied the latest changes cleanly or if they have breaking changes and are
outdated and in this case the severity of the outdate.

A green check should appear in the latest release that has been manually
checked by the fork maintainer.

It should also pinpoint which commits are the culprits so they can be fixed by
the community.

I think that having this tool completely automated is a necessity before the
living forks can become a reality and users can have a free decision on which
fork to use.

## Conclusions

A change like this will most likely bring many more contributors to open source
and free software, forks will be more easily maintained and a new ecosystem of
living forks will emerge.

We already have all the tools in place, we just need them to work in tandem
across forks.

As a second order effect, I believe that test coverage will improve across the
board and software will start to be written taking into consideration how it
affects the community much more than it is today. In particular software
maintainers will be made aware of breaking changes and in a more abstract way
software will be written in a way that it's easier to change getting us a step
closer to malleable systems.
