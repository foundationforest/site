---
button: Try Forest
link: https://app.forest.foundation
---

# Forest

Almost everything you need, someone else makes or does. So it all starts with finding someone you can trust. Among people you know, word of mouth does that. Among strangers, platforms like Uber, Airbnb and Amazon do it at scale. It's why you can get into a stranger's car or rent their home without thinking twice.

The catch is that solving it made us depend on them. Our profiles live inside their apps and only count there. We're captured inside their walls, and they use it to their advantage: bigger cuts from our deals, more ads in our search results.

It doesn't have to work this way. Today's technology lets us rethink how we find people we can trust, with no dependency and an even better experience. We built Forest to prove it.

## How it works

The core rule: **you own your profiles.** If you own them, you can switch, and if you can switch, nobody can lock you in. Everything a platform does unbundles into independent services that compete to serve you, not capture you.

**Profiles.** Platforms make sure there's one real person behind every account, so bad actors can't start over. Now, you hold one **secret seed** in your password manager. A **verifier** checks that you're a real, unique person and signs your seed without ever seeing it. From that one seed, you create a separate profile for each role you play (seller, renter, patient, student), each one accountable, with nothing public linking them.

**Posting.** Platforms keep posts (listings and reviews) inside their app. Now, each market (rentals, tutoring, anything) has an open standard for what a post looks like. You have one profile per role in each market, and its posts live on a **host** you choose, open for anyone to read.

**Finding.** Platforms decide what you see, with their own private algorithm. Now, because every post is public, anyone can build an index with its own algorithm. You choose the index you trust, so indexes compete on the quality of their rankings.

**Using it.** Platforms each have their own app, but the way we use software is moving to plain English. Now, you connect your profiles to the AI app you already use, and it can find, post and message for you, under your permissions. You're verified and connected in five minutes, and your AI handles the rest.

Of course, platforms do more than this: payments, insurance, disputes. Each of those can become an independent service too, built on top.

## What this changes

**Fair competition.** Indexes rank profiles by public reviews and the verifiers behind them. The way up is a better reputation, earned through good work at a fair price, not a bigger ad spend.

**Any market can exist.** A new market is just an open JSON standard. Anyone can make one, without building a company or an app. Joining takes one tap, and you're findable as soon as an index picks the market up.

**One shared network.** Buyers and sellers meet in one open market instead of splitting across rival apps. You get the reach of a monopoly without the monopolist.

**Coordinating.** Many companies exist to bundle markets and services together for you. With open markets and your AI, the bundling happens on the spot, as those markets fill.

## Where we are

The architecture is built and the first version of the app is live. You can get verified, make profiles, post listings, message, and connect your AI. Everything is open source:

**[Standard](https://github.com/foundationforest/standard):** shared formats and cryptography (keys from your seed, the proof behind each profile, profile folders, and an escrow for payments).

**[Markets](https://github.com/foundationforest/markets):** what a listing and a review hold in each market. Anyone can propose one.

**[Services](https://github.com/foundationforest/services):** the first verifier, host, index and AI connector. We run them so the network works from day one.

**[App](https://github.com/foundationforest/app):** the web control panel at [app.forest.foundation](https://app.forest.foundation), to get verified, manage profiles and connect your AI.

What comes next:

- **Payments**, the first of those other services. Every profile already has its own pay address. Next is an escrow: a program that holds the money, in digital dollars, and releases it only on the terms you both agreed. You can pay a stranger, or let your AI do it, without trusting them with the money first. It's built and being tested; once live, nobody can change it, us included.
- **More ways to use it:** a phone app with notifications, screens inside your AI app, and an AI that runs on your own device.

It's not perfect yet, but it's enough to show this can work. If you also believe in a fairer, more open and more efficient future, here's who we need:

- Coders to stress-test and improve the architecture
- People to add markets and mature them
- Founders to build services on top, including ones that compete with ours
- Most of all, users: it's free to start and takes five minutes

The Forest Foundation is a non-profit building this open network. Some services, like the ID check, charge a small fee to sustain it. Our finances are public.

## FAQ

**Why now? Haven't people tried this before?** Yes, and most attempts failed for two reasons: nobody was accountable, so reviews meant little, or they were too hard to use. We believe this solves both: a verifier makes every profile accountable, and your AI handles the hard parts in plain English.

**Who will I find there?** Early on, few people, and honestly we don't know how fast that changes. We expect simple markets to start first, where a profile and its reviews are enough. Share your profile's link wherever you already sell, so the people you already deal with build a reputation you own. Anyone can find you: through their AI once it's connected, or on [an index's website](https://index.forest.foundation) with no sign-up.

**Is it free?** To start, yes. The app and the face check are free, and they come with credits for thousands of posts and messages. After that, your host charges a tiny fraction of a cent for each. The ID check is $5: a stronger verification that also helps fund the foundation.

**What stops fake reviews?** Nothing stops someone from writing one. But every review is signed by the profile that wrote it, and our index ignores reviews from profiles that aren't verified. So every review that counts there has a real person behind it. Other indexes can weigh reviews their own way.

**If more verifiers appear, can't someone make one seed per verifier?** Yes. But each index decides how much each verifier counts, and one seed verified by three is worth more than three seeds verified by one each. So people who want to look trustworthy get verified by several.

**What if I lose my seed?** It's kept in your password manager, which syncs it across your devices, and you can export a backup copy. Lose both and it's gone: nobody can recover it, us included.
