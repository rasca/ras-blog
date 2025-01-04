---
title: "Why git is wrong for decentralization"
description: ""
date: "Sep 27 2022"
tags: [
    "decentralization",
]
---

Following the Living Forks' ideas I've come to realize that git is an incorrect
abstraction for a truly decentralized development.

We don't want a linear history. We want pieces of work, features as the atom.
That's most important, the patch, not the sha1.

We need to know which atoms another atom needs in order to make them run. And
then we can merge any atom we want and compare to other repos that have other
atoms.

Wach atom says which atoms it needs to run (`requires`). Instead of parents we
have requirements. That can have been applied in any order.

Merges are going to become more important. And maybe more complicates. Can we
move them along with AI?

We need to do everything that git does and more.

## Analysis of what git cannot achieve

Merges are between atoms, and have a history and nested merges on top of them.

If I have a monorepo with several apps, I want to have each app in a different
version. Or update them one by one. --> This can be achieved by several
different git's one per product.


You need to be able to mark a merge as unsuccessful not only via code merge
errors but by user testing and you need to propagate that to everyone.

You need to have migrations built in, to go forward and backwards. And a
database with a time machine. (A new type of database for going back and
forward between the data).
Mmm.. or al least in the programming language and require some kind of ligature
between migrations and atoms.

Compare between forks and show difference of atoms and clashes, things that are
incompatible. When comparing we need the maximum common divisor (the diff). And
how far appart are whe (taking into consideration merges). Things we can try,
things that need coding to be fixed and compatible. Can we go back and forth?
(do we have back-forth migrations, or way (which) or no path to migrate).

We need to be able to "socialize" on merges. A complete platform. But not
centralized like github, but in your one computer.
You can visualize it via github. But our github is more of an api and you run
the browser and code locally. You use can use a central blah blah for social
data and updates. But you can replicate it all locally. Truly decentralized.

## The combinatorial possibilities

There are many "tips", sets of atoms that exisitis in a repo. Someone created
this mix.

And there's all the possible mixes imaginable. Some of the are "green" have
merges, some of them are not.

We can analyze all these data to figure out branches and how big the merge
might be.

We can also analyse what works (certantly) and what might (code merges, but
it's so far appart that no one has tested it).

We can also figure out what's popular and what's not.


## How close are to CRDTs?

We can apply things in different order garantizing the same output. Conflic
resolution becomes much more important.

They both have a social decentralized thing.

## Can git be used as underlying substance?

Maybe abusing it, tags, submodules.
