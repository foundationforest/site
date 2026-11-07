# Forest

Almost everything you need, someone else already makes or does. The hard part is finding and trusting them. Among people you know, word of mouth solves it. Among strangers, platforms like Uber, Airbnb, and Amazon solve it at scale. It's why you can get into a stranger's car or rent their home without thinking twice.

The catch is that solving it made us depend on them. Our profiles and reviews live inside their apps, and the more we use them, the harder it is to leave. So their focus shifts from serving us to extracting from us: bigger cuts from our deals, more ads in our search results, and any other way they can find to profit.

It doesn't have to work this way anymore. Today's technology lets us rethink how we find and trust people, with no dependency and an even better experience. We built Forest to prove it.

## How it works

The core rule: **you own your profiles.** If you own them, you can switch, and if you can switch, nobody can lock you in. Everything else a platform does (verifying users, storing listings, ranking results) unbundles into a mix of open standards and independent services competing to serve you. Coordinating all of this by hand would be too complex, so your AI handles it for you in plain English.

### 1. Open standards: your profiles and markets

**Your profiles.** To own your profiles, you start by creating one secret seed held in your password manager. From it, your device creates a separate profile for each role you play (seller, renter, tutor) following a public recipe, so any app with your seed opens the same profiles. Nothing public links your profiles to each other, or to you.

**Markets.** Each category where people deal with each other (clothing sales, car rentals, tutoring) is called a market. Each market has an open JSON standard that defines its roles and the exact shape of its listings and reviews.

### 2. Independent services

Most markets need the same basic services to work, and anyone can run them. For example:

**Verifier.** Platforms check who is real so bad actors can't simply start over. Now, independent verifiers check that you're a real, unique person and sign your seed without ever seeing it. From that signature, your device proves that every profile you create comes from a verified seed without showing which one, allowing only one profile per role in each market.

**Host.** Platforms lock your listings and reviews inside their apps. Now, your profiles post them in each market's standard shape to a host you choose, signed so nobody can fake them and kept online for anyone to read. Messages to your profiles wait there too, locked so only you can read them.

**Index.** Platforms decide what you see with their own private algorithm. Now, because hosts are public, anyone can read a market's listings and reviews to create their own indexes and rank profiles with their own algorithms.

**Escrow.** Platforms hold your money in the middle of a deal. Now, payments can be locked in code-based escrows in digital dollars and released only on the terms you both agreed to, with the option to pick an arbiter in advance in case of a disagreement.

These few services are enough for many markets to work. Each of them is a market of its own, so providers compete for your choice and you can switch anytime.

### 3. Using it: your AI

How we interact with software is moving to plain English, with AI apps even starting to generate UI on demand depending on what you are doing. Through a standard connector (MCP), the AI app you already use (like ChatGPT or Claude) gets its own access keys to your profiles, under your permissions, so it can search, post, and message for you. You can also do it all yourself in the web app, but your AI is the easy way.

## What this changes

**Fair competition.** Indexes rank profiles by public reviews and the verifiers behind them. The way up is a better reputation earned through good work at a fair price, not a bigger ad spend.

**One shared network.** Buyers and sellers in each market find each other in one place, instead of splitting across rival apps. You get the reach of a monopoly without the monopolist.

**Any market can exist.** Anyone can propose a new market without building a company or an app. Joining takes one tap, and because you verify once, every new profile you create starts verified.

**Beyond platforms.** Many companies exist just to bundle separate markets together. Once each piece is an open market on the same network, your AI can put multi-step deals together on the spot without needing a company in the middle.

## Where we are

We built the initial standards and services so the network works from day one, and the first version is live with some simple markets. You can [open the web app](https://app.forest.foundation) to get verified, create profiles, and connect your AI in under five minutes, or [browse the live index](https://index.forest.foundation) for free with no sign-up.

Everything is open source on GitHub (visit each repository for full technical details):

**[Standard](https://github.com/foundationforest/standard):** The shared formats and cryptography (keys derived from your seed, zero-knowledge proofs, signed folders where each profile's data lives, and on-chain escrows for payments).

**[Markets](https://github.com/foundationforest/markets):** The open JSON standards defining the roles, listings, and reviews in each market. Anyone can propose a new one.

**[Services](https://github.com/foundationforest/services):** The first verifier, host, index, and AI connector (MCP), which we run so the network works out of the box, while anyone can run their own to compete.

**[App](https://github.com/foundationforest/app):** The web control panel to get verified, manage your profiles, and connect your AI.

The Forest Foundation is a non-profit building this open network. Starting is free, and to sustain the foundation we charge small fees on some of our services. Our finances are public.

## What comes next

**Payments.** Payments are not live yet, but every profile already has its own pay address, and the on-chain escrow is built and being tested. Next is turning it on in the app so you and your AI can transact safely.

**Upgraded app.** A mobile app with new features, like notifications, easy ways to move money in and out, and its own AI chat, with the option to run models on your device for more privacy.

**Private data.** The same folder that holds a profile's public listings can also hold private data, locked so only you and the access keys you choose can open it, like health records for your doctor or notes your AI keeps for you. The standard already supports it; next is putting it to use in the app.

**More complex markets.** As payments, stronger evidence for reviews (like payment receipts), and new services like arbiters, guarantees, or live tracking mature, more complex markets can begin to exist on top of them.

It's not perfect yet, but it's enough to show this can work. Growing Forest from simple deals into the rest of the economy takes a community: we need coders to stress-test and improve the architecture, people to propose and mature new markets, founders to build the missing services (or better versions of ours), and most of all, users to try it out.

## FAQ

**Why now? Haven't people tried this before?**

Yes, and previous attempts failed for two main reasons: nobody was accountable, so reviews meant little, and they were too hard for normal people to use. Today, a quick face check and a zero-knowledge proof make every profile accountable without exposing who you are, and AI makes it simple to use.

**What stops Forest from becoming the next platform?**

Nothing here depends on us. Your seed is yours, the standards are open, and anyone can run a verifier, host, index, or app, or propose a better market format. We built the first ones to prove this can work. If we ever stop serving you, you switch, and the network can keep going without us.

**Is it only for buying and selling?**

No. A market is any way people deal with each other, with or without money, and even with just one side: authors and filmmakers sharing their work for people to review, finding a tennis partner, a language exchange, even a date.

**What does my profile show about me?**

Nothing personal by default: only that a verified, unique person is behind it (and whether by a face check or an ID), its listings, and the reviews it has received. No name, no photo. To find out more or deal with someone, you message them and choose what to share there, like your name, photo, or contact info.

**What is free and what costs?**

The app and basic face verification are free, and come with starter credits that cover enough posts and messages to get started. Optional services, like the ID check or extra host credits once your starter credits run out, charge a small fee to sustain the foundation.

**What stops fake or unfair reviews?**

First, indexes ignore reviews from unverified profiles, so nobody can create fake accounts to spam scores. Second, if a real, verified person starts writing fake or unfair reviews, others can report them, and indexes weigh each reviewer by their own reputation and habits so they start counting for very little.

**Do I have to start from zero in every market?**

No. In your first market, you can share your profile link with people you already deal with so they can review you and build a reputation you own. Across markets, the standard includes a zero-knowledge proof generated on your device that will let a new profile carry over the reputation you earned on your other profiles, while keeping them completely unlinked.

**If more verifiers appear, can't someone make one seed per verifier?**

Yes, across different verifiers. That is why each index decides which verifiers it trusts and how much each counts. One seed verified by three verifiers is worth more than three seeds verified by one each, so people who want to look trustworthy get verified by several.

**How does my AI act for me? Is it safe?**

Your seed and your profiles' main keys are only unlocked on your device for the moment of each action. Your AI never touches them: it gets its own access key for each profile you choose, limited to what you allow (reading, posting, messaging), and you can end its access anytime.

**How is my seed kept safe?**

Your seed stays locked in a passkey inside your password manager. Nobody else ever sees it, us included. The one rule: never share it, because whoever has it controls your profiles.

**What if I lose my device?**

Your password manager syncs your passkey across your devices, and you can also export your seed as a backup, so losing a phone or computer doesn't lose your seed. Only if you lose every copy is it gone, and then no one can recover it, us included, because we never see it.

**What happens if this works at scale?**

A lot of how the economy looks today would change. Many existing companies would stop making sense, while many new ones would emerge to build the markets and services an open network needs. We don't know every way it will play out, but we believe it leads to a fairer, more open, and more efficient economy.
