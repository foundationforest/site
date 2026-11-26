# Privacy notice

Last updated 25 November 2026.

## Who we are

Forest is run by Carlos Islas Garza ("we"), who has applied to register Open Forest Foundation ("the foundation") as a not-for-profit community interest company in England and Wales, with its registered office at 128 City Road, London EC1V 2NX. Until the company is registered, Carlos Islas Garza is the controller for what this notice describes: he decides why and how the data is used. Once it is registered, the company becomes the controller, and this notice will name it.

Write to us at support@forest.foundation about anything here, including your rights and complaints.

This notice covers the Forest app (app.forest.foundation), the site (forest.foundation) and the services the foundation runs: the verifier, the host, the index, places and the connector for AI apps. Forest's code is open, so anyone can run their own copy of these. When you use someone else's copy, their notice applies, not this one.

## The short version

- **Your seed stays with you.** The secret all your keys come from lives on your device, behind your passkey. We never receive it, so we can't see which profiles are yours.
- **A check gives you a stamp.** A stamp is a note our verifier signs and your device keeps. With it, a profile can show it belongs to a checked person without saying who.
- **Didit does the checking, then erases most of it.** Didit, our check provider, looks at your face, or your face and an ID. About an hour after your stamp is signed it erases the photos, the video and what it read from your ID. It keeps a face template (numbers, no photo) up to five years, so it can tell if the same face comes back, and for an ID check its record of your name, birth date and ID's country for as long as that template.
- **Our verifier looks only in passing.** It reads your selfie and what your ID says for the moment it signs your stamp, then keeps no readable copy.
- **One person, one ID stamp.** After an ID check our verifier keeps a scrambled copy of your name and birth date for five years, so nobody can get a second ID stamp in your name on another seed.
- **What you post is public. Messages are not.** Your listings, reviews and profile entries can be read by anyone. A message is locked so only its recipient can open it.
- **You can delete your face at any time,** in the app. Your stamps stay, and the scrambled copy stays until its five years end. We never sell data and never use it for ads.

## The face check and the ID check

Both checks are optional and both scan your face, so we take each only after you tick "I am 18 or older and I agree". We check people so each person is counted once: one person can't pose as many to fake reviews or vouches. A profile shows only that its person was checked, never your name, face or ID.

|  | Face check, free | ID check, $5 ($2 for each ID you add) |
| --- | --- | --- |
| What you give | A selfie and a short video, taken live, up to three tries | The same, plus photos of a government ID |
| What Didit does | Checks you're a live person, estimates your age, and looks for your face among other people's checks. A face it estimates to be under 21 is refused, and you can take the ID check instead | Also reads the ID, matches your face to its photo, and checks from its birth date that you're 18 or older |
| What Didit keeps when it passes | The photos and video for about an hour after your stamp is signed. Then only a face template (numbers, no photo), up to five years. None if you already hold a face stamp | Everything for about an hour after your stamp is signed. Then only a face template, up to five years, and its record of your full name, birth date and ID's country, for as long as the template |
| A check that doesn't pass | Deleted at Didit once we have the answer: a day after it began at the latest | The same |
| What our verifier does | Reads your selfie once, turns it into 128 numbers with an open face model, and signs them into your stamp | Reads every text field on the ID once and signs them into your stamp, plus a face stamp from the same selfie if you have none |
| What our verifier keeps | Your stamp number, the stamps it signed you, and how many free tries you used | The same, plus the scrambled copy (below) and a one-way hash of the payment, never beside your stamp |
| What you keep, on your device | Your stamp, with the 128 numbers beside it | Your stamp, with every text field from your ID beside it |
| Lawful basis | Your explicit consent | Your explicit consent; the scrambled copy, our legitimate interests |

- **Our verifier's link to you.** Your stamp number comes from your seed. The verifier holds a secret that ties a stamp number to its check at Didit, so whoever had both the secret and Didit's records could tell whose a stamp number is. Neither is published and the secret never leaves the verifier. We treat its records as personal data.
- **The list beside your stamp says who you are.** It stays on your device. You can choose to show some of it to someone, and we don't see when you do.
- **Decided by machine.** Didit and our verifier decide automatically whether a check passes, and nobody reviews it by hand. If you think a check refused you wrongly, write to us and we will tell you why, but we don't change outcomes by hand.
- **US state laws.** Where a US state's biometric law may apply to you, Didit shows its own consent too and may delete your face data sooner.
- **Taking back your yes.** You can withdraw consent at any time by deleting your face (see Your rights), which erases the face templates from both checks. It doesn't undo what was done lawfully before.

## The scrambled copy

After an ID check gives you a stamp, our verifier keeps a scrambled copy beside it for five years, so the same person can't get a second ID stamp on another seed. By then Didit has erased the check, so the copy is what remembers.

- **What it is:** your first name, first last name and birth date, scrambled together with a secret key and a deliberately slow method. Nothing else from your ID is kept. It can't be read back: even with the key, someone could only test a guess about one specific person, and each guess takes deliberate effort.
- **What it does:** when an ID check on another seed shows the same first name, first last name and birth date, Didit compares its face with yours. The same face is refused. A different face passes, since it is a different person. If you have deleted your face, such a match is refused.
- **How long:** until five years after Didit first kept your face, the same date Didit's record of you is erased. Then the copy is deleted.
- **What it means for you:** if you lose your seed, a new one can't get an ID stamp for you until that date, whether or not you delete your face. Your own seed is never refused, so you can add more IDs.
- **Same details, different person:** if you share a first name, first last name and birth date with someone already counted who has deleted their face, your ID check is refused until their five years end. Nobody overrides it by hand, and you can still get a face stamp.
- **Lawful basis:** our legitimate interest, and that of everyone who relies on Forest's stamps, in counting each person once. It is a separate purpose from the check, named before you start. You can object (see Your rights), and we will weigh your reasons.

## Paying for the ID check and credits

Stripe takes the payment, and we never see your card.

- **What Stripe sees:** how you pay, your email, the name, country and (in some countries) postal code it asks for, your device's network address, and the page you came from. Stripe uses these as its own [privacy notice](https://stripe.com/privacy) says, including keeping the records the law asks of it.
- **What we tell Stripe:** the price, and whether it is for an ID check or credits. Never your stamp number, your profiles, your check at Didit or anything from your ID.
- **An ID check is a hold, not a charge.** The price is taken only if the check gives you a new stamp, and is otherwise released within two days.
- **Credits are charged when you buy them.** They are signed blind, so none of them carries anything that ties it to your payment.
- **What we keep:** a one-way hash of each payment and what it paid for, for 30 days. Never beside your stamp or your profiles.
- **Lawful basis:** our contract with you, since you asked us for the check or the credits. The records a UK company must keep for its accounts stay at Stripe for six years.

## Your profiles, posts and messages

What you post on a host is public on purpose, and only messages are private. Each profile has a folder on a host you choose; our host, host.forest.foundation, is the first. Another host's operator answers for its own copy.

- **Public:** your profile entries, listings, photos, and the reviews, vouches and reports you write. Any person, app or index can read and copy them, which is how Forest works with nobody in the middle. Don't put in them anything you want kept private.
- **Signed, not named:** each entry is signed by its profile's key. Nothing on the host ties your profiles to each other or to you, unless you write it yourself.
- **About you, by others:** a review, vouch or report about your profile lives in its writer's folder.
- **Messages:** locked on the sender's device so only you can open them. The host keeps the locked message and when it arrived, can't read it, and deletes it after 30 days.
- **What the host keeps:** your current entries and the files they name, until you delete them or we stop running the host; an older version of an entry for 30 days after you replace it; and each folder's balance of credits, which are signed blind so the host can't tie a credit to whoever received it.
- **The morning email, if you turn it on:** the host keeps your email address, your time zone and which profiles it covers, and Resend sends the email. So the host learns those profiles are one person's. It never publishes this, and turning the email off deletes all of it at once.
- **Lawful basis:** our contract with you, to store and serve what you post; your consent, for the morning email.

## Search, the trust number and AI apps

Our index ranks only what is already public, and keeps no account of who searches.

- **The index** (index.forest.foundation) reads public profiles on the hosts it chooses, counts only checked ones, and ranks them. It shows each profile's ratings, its checks and a trust number. The trust number comes from a published formula over the vouches, ratings and reports others wrote, weighted by how trusted each writer is. Nobody at Forest sets it by hand. Lawful basis: our legitimate interest in making public listings findable and honest. You can object (see Your rights).
- **What you type to search.** Search words and the place you search near travel in the page's address. The index and places store neither, but our hosting provider's request logs hold them with your network address for 90 days (see Who else).
- **Places** (places.forest.foundation) turns a typed town or area into a point on the map, from a public file it holds itself. It asks no one else and stores nothing.
- **AI apps.** If you connect an AI app (Claude or ChatGPT, say), you hand it access keys from your Forest app. Our connector (mcp.forest.foundation) acts with those keys only while the AI app asks, and keeps nothing of yours between calls. What you tell the AI app is between you and its maker, under its own privacy notice.
- **The app and the site** keep your seed, keys and stamps on your device. They use no cookies or trackers for ads or analytics, so there is nothing to accept.

## Who else handles data, and where

Six companies handle data for us, each under a contract that limits what they may do with it. Stripe also acts for itself, under its own notice, and Didit keeps a few uses of its own, such as keeping its service secure; its training on our data is switched off.

| Who | What for | What they handle | Where |
| --- | --- | --- | --- |
| [Didit](https://didit.me) | The face and ID checks | Everything in a check, as above | European Union (Ireland), on Amazon Web Services. Didit's own providers are on its [sub-processors page](https://didit.me/terms/sub-processors) |
| [Stripe](https://stripe.com/privacy) | Payments for ID checks and credits | How you pay, email, name, country, network address | United States and elsewhere |
| [Railway](https://railway.com) | Runs the verifier, host, index, places and connector | Everything those services handle. Its request logs keep each request's network address, time and page address (search words and places included) for 90 days | United States |
| [Vercel](https://vercel.com) | Serves the app and the site | Your network address and the page you ask for | United States, and servers near you |
| [Resend](https://resend.com) | Sends the morning email; receives mail to support@forest.foundation | Your email address and the email itself | United States |
| [GitHub](https://github.com) | Holds Forest's open code | Only what you post there yourself, under GitHub's terms | United States |

- **Outside the UK:** for the EU, the UK's adequacy rules cover the transfer. For the US, the UK-US data bridge where the company is certified, or the UK's standard transfer clauses otherwise.
- **Authorities:** we share data with police or a court only when the law makes us, and then only what it asks for. Since we hold almost nothing that names you, that is usually very little.
- **Never:** we don't sell data, share it for ads, or use it to train AI.

## How long we keep things

Didit erases a check within about an hour of your stamp and keeps a face template five years at most. The scrambled copy goes on the same date as that template. Only our verifier's record of your stamps stays for good, so it can hand lost stamps back.

| What | Where | How long |
| --- | --- | --- |
| Your seed, keys, stamps and the lists beside them | Your device | Until you remove them |
| A check's photos, video and everything read from an ID | Didit | About an hour after your stamp is signed |
| A face template | Didit | Up to five years, or until you delete your face; sooner where a US state's law says so |
| Didit's record of your name, birth date and ID's country | Didit | As long as your face template |
| A check that doesn't pass, or is left unfinished | Didit | A day after it began, at the latest |
| The scrambled copy | Our verifier | Until five years after Didit first kept your face |
| Your stamp number, the stamps signed, free tries used, gifts given | Our verifier | For good, so lost stamps can be handed back |
| A payment's hash and what it paid for | Our verifier or host | 30 days |
| Checks in progress | Our verifier | A day at most |
| Payment details | Stripe | As Stripe's notice says; six years for accounts |
| Your entries, listings, photos and reviews | Our host | Until you delete them, or we stop running the host |
| Older versions of entries, and messages | Our host | 30 days |
| Morning email details | Our host | Until you turn it off |
| Request logs: network address, time, page address | Railway | 90 days |
| Request logs | Vercel | Up to a day |
| Emails you send us | Our inbox, at Resend | Two years after your matter is closed |

## Your rights

**Deleting your face.** In the Forest app, open Your checks and choose Delete my face.

1. Nothing changes for 28 days, so you can change your mind. Until then, Didit still uses your face to refuse a second check on another seed.
2. On day 28, Didit erases the face templates from both checks, and its record of your name, birth date and ID's country.
3. Your stamps keep working, and our verifier still holds them so it can hand them back. The scrambled copy stays until five years after Didit first kept your face, and until then no new seed can get an ID stamp for you, the same as if you had kept it.

Only the device that holds your seed can ask, so you need no ID to delete. If you've lost your device, write to us: a face check finds your record, and we delete it once we know it's you.

**Your profiles and posts** aren't accounts we hold. They come from your seed, so we can't delete a profile; you can delete any entry yourself in the app, and we can remove what is on our host.

**Your other rights.** Write to support@forest.foundation. It's free, and we answer within a month.

- **See a copy** of what our verifier and Didit hold about you. Your stamps' lists are already on your device.
- **Correct it.** A check records your ID as it was read. If it was misread, tell us and we will fix what we can.
- **Object** to the scrambled copy, the index's ranking or the request logs. We stop unless our reasons outweigh yours, and we tell you what they are.
- **Restrict** what we do with your data, or **take a copy** to move elsewhere.
- **Withdraw your consent,** by deleting your face.

**Complaints.** Write to us first: we confirm we have it within 30 days and tell you what we did. You can also complain to the UK regulator, the [ICO](https://ico.org.uk/make-a-complaint/), at any time. In the EU or in Mexico (the Secretaría Anticorrupción y Buen Gobierno), you can go to your own country's authority.

**Age.** Forest is for people 18 and older. If we learn that someone under 18 took a check, we delete it.

**Changes.** Each version of this notice is dated. Before a change that matters takes effect, we tell you in the app.
