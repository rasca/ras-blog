---
title: "The Humane Score"
description: "Are the apps we use healthy?"
date: "Sep 27 2022"
tags: [
    "humane technology",
]
---

Wouldn't it be nice to know how an app abuses our biology before installing
it? I propose the Humane Score. An app rating based on several factors of how
respectful they are of the user's time, biology and data. Imagine an App store
that when searching for an app not only shows the users reviews score but also
an overall score of abusage.

The Humane Score is an amalgam of addictive, deceptive and controling UX
design and the way our data is collected and used. The following are the main
areas that compose the Humane Score.

- Dark Patterns
- Addictive Behaviour Design
- Emotions Triggering
- Unethical data usage
- Business Model

Dark patterns
-------------

Dark patterns are intentionally crafted UXs in order to make the user perform
some action against their own benefit.

We live in a world where 95% of the most used apps have dark patterns, 50%
more than 7 dark patterns whilst at least 55% of users don't recognize
them[^paper1]. We are in urgent need of conscientization and more visibility on
how the current incarnation of tech that affects us all.

Dark patterns can be categorized into 5 main strategies[^paper0]:

- *Nagging*: Redirection of expected functionality that persists beyond one or
  more interactions
- *Obstruction*: Making a process more difficult than it needs to be, with the
  intent of dissuading certain action(s)
- *Sneaking*: Attempting to hide, disguise, or delay the divulging of
  information that is relevant to the user
- *Interface Interference*: Manipulation of the user interface that privileges
  certain actions over others
- *Forced Action*: Requiring the user to perform a certain action to access
  (or continue to access) certain functionality

#TODO: add paper Figure 1

For an extended list of examples visit [^deceptive].

Addictive behaviour Design
--------------------------

Addictive behaviour design is not deceptive UX per se but a collection of used
tricks & tactics in the industry to keep users engaged without a conscious
desition. They do this by triggering a dopamine feedback loop and the removal
of cues that we use to decide to stop doing something.

- *Cravings*: physical and chemical responses human beings have to desired types
  of stimuli
  - Variable rewards
    - Notifications
    - Message Alerts
      - Align as dangers in natural life (red, flashing, etc.)
  - Gamification
- *Obligation*: human beings naturally seek stability and reassurance from other
  humans, and addictive design strategies in this category satiate these needs
  - Social Reciprocity
  - User investment
- *Deception*: manipulating a user into doing something they wouldn’t normally
  want to do through the design of an interface
  - Infinte scrolling
  - Illusion of choice
  - Autoplay next

Emotions triggering
-------------------

While some dark patterns incurr in slight emotion triggering there's whole
world of algorithms that select content based on engagement promoting
polarizing and toxic content like hate speech, violence & incitement content
and fake news. This content has been shown to rise engagement in detriment of
the users wellbeing. 

Even when the toxic/incitement content is filtered out the algorithms select
for the most engagement content and most useful.

This can be analyzed by manually looking at the quality of the content or by
measuring the users emotional response via Experience Sampling Methods (ESMs)
either by surveys[^paper3] or automatically based on biofeedback[^paper4].

Fear and FOMO triggering designs also abuses our emotions in order to
manipulate our actions.

- Engagement driven algorithms
  - Hate + Violence & Incitement content
  - Toxic content
  - Fake news
- Fear/FOMO triggering designes

Unehtical data usage
--------------------

How an app uses our data and how it displays relevant information is another
factor in the Humane Score. We can mostly gather this data from the terms of
service and the privacy policy but they can hide relevant information behind
walls of legal text without a clear and easy to digest message for the users.

Some existing projects like [Terms of Service Didn't Read](https://tosdr.org/)
or [tldr; legal](https://tldrlegal.com/) already provide scores for the
different services.

- Information selling to 3rd parties
- Targeted invasive ads
- Data export quality
- Terms of Service clarity

Business Model
--------------

Are we the users or the product? An app business model tells us a lot about
how they extract their value. Are we paying for the product or is the app
extracting value disregarding our wellbeing from us?

How far are they willing to go in order to extract value from us?

- Ads
  - Amount / Frecuency
  - Disguised Ads

Customization & wellbeing options
---------------------------------

The Humane Score must analyze de default behaviour of apps as most users don't
change them. Nonetheless does the app provide some non default behaviour to
increase our wellbeing? Is it pushed by the app and easly accesible?

- Wellbeing settings
    Notifications settings
  - Screen Time limit & alerts
  - Infinite scroll / autoplay next toggles
- Paying
  - instead of ads
  - for better results (Tinder)

Conslusions and the future
--------------------------

A project implenting the Humane Score would be the first step into providing a
glimpse of the current devious practices most popular apps use. We could then
integrate them into de app stores providing useful information to new users.

All these categories measure unpersonalised and generic ways the apps abuse
us. Wouldn't it be nice if the OS automatically detects when our behaviour is
driven by any of these devious practices? Generating consciousness at the same
time it's happening.

Hopefully we'll see more apps pop up that use persuasive design for our
wellbeing instead of against us. I like to call this *bright patterns*.

[^paper0]: [The Dark (Patterns) Side of UX Design](https://dl.acm.org/doi/10.1145/3173574.3174108)
[^paper1]: [UI Dark Patterns and Where to Find Them: A Study on Mobile Applications and User Perception](https://dl.acm.org/doi/fullHtml/10.1145/3313831.3376600)
[^paper3]: [The Experience Sampling Method on Mobile Devices](https://dl.acm.org/doi/abs/10.1145/3123988)
[^paper4]: [Emotion Recognition in the Wild from Long-term Heart Rate Recording using Wearable Sensor and Deep Learning Ensemble Classification](https://www.researchgate.net/publication/357851134_Emotion_Recognition_in_the_Wild_from_Long-term_Heart_Rate_Recording_using_Wearable_Sensor_and_Deep_Learning_Ensemble_Classification)
[^paper5]: [A Survey of Addictive Software Design](https://digitalcommons.calpoly.edu/cscsp/111/)
[^deceptive]: [Deceptive patterns Hall of Shame](https://www.deceptive.design/hall-of-shame/)


biases
https://betterhumans.pub/cognitive-bias-cheat-sheet-55a472476b18
