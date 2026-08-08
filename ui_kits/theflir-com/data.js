/* THE FLIR — theflir.com: shared site data.
   Everything here is real. Releases come from theflir.bandcamp.com, ordered
   newest first. Catalogue numbers run in chronological order on the suture8
   series — the number the 2002 CD actually shipped with — so suture8-01 is the
   2002 record and suture8-02 the 2010 one.
   Past shows come from the flyer scans in the archive
   (THE_FLIR/Art Work/Flyers). Nothing is invented; where data does not
   exist the screen shows an empty state instead of placeholder rows. */

const RELEASES = [
  {
    id: 'singles',
    catalogue: 'suture8-02',
    title: 'Singles (Internet Only)',
    year: '2010',
    date: '14.02.10',
    dateLong: '14 FEBRUARY 2010',
    format: 'Digital',
    /* Self-published on Bandcamp, same as suture8-01. the label handles
       merch, not this release — do not credit it as the label. */
    labelCredit: 'Self-released',
    recordedIn: 'Los Angeles',
    trackCount: 4,
    status: 'Out now',
    /* The actual Bandcamp release art, 700×700, pulled into the archive on
       2026-08-06 and served locally. Supersedes the banner crop that stood in
       for it — that file is now assets/source/suture8-02-banner-crop.png and
       is not this record's cover. */
    cover: '../../assets/source/suture8-02-cover.jpg',
    url: 'https://theflir.bandcamp.com/album/singles-internet-only',
    tracks: [
      { n: '01', title: 'Again', vocals: 'Jessica Isaac' },
      { n: '02', title: 'Marea' },
      { n: '03', title: 'You Fade Away', vocals: 'Louise Fraser' },
      /* Bandcamp's album page lists four tracks but names only three. The
         fourth is Amethyst — it has its own track page and the band confirms
         Louise Fraser recorded it alongside You Fade Away. */
      { n: '04', title: 'Amethyst', vocals: 'Louise Fraser' },
    ],
  },
  {
    id: 'please',
    catalogue: 'suture8-01',
    title: 'Please, Please, Please',
    year: '2002',
    /* Was 01.09.02 / "01 SEPTEMBER 2002". Two things were wrong with that.

       The day was invented. Every source that gives a release date for this
       record gives a month and no day: the band's own Music page says "Sep
       2002 - (Self Released)", Discogs says 2002. Nothing anywhere says the
       first. The 01 was a placeholder that had been reading as a fact.

       And a better-sourced date exists. The band's archived news index carries
       "07.23.02 — DEBUT CD IS OUT!!!", which is the band saying the record was
       out, on the day they said it. That is a first-party statement with a day
       attached; "Sep 2002" is a summary field filled in later on the same
       site. Where the two disagree the contemporaneous announcement is closer
       to what happened, so the record now carries 23.07.02.

       The Sep 2002 line is not discarded — it is what their own catalogue page
       settled on, and it may well be a distribution or official date. Both are
       recorded here. Do not restore a first-of-the-month that no source
       supports. */
    date: '23.07.02',
    dateLong: '23 JULY 2002',
    /* EP, settled. Discogs holds the physical release: CD, EP, US, 2002.
       Bandcamp is the only source calling it an album.

       The band's own Music page (Wayback 2007-01-01 and 2009-07-02) confirms
       every credit below from a second, independent lineage: Sep 2002, self
       released, produced by THE FLIR, mixed by Mo Safder, loops and
       programming by Mo Safder and Sal Giuliano, and this exact track order.
       Discogs and the band's own site agree in full.

       That page also lists where the CD was sold in 2002: CD Baby, CDstreet,
       Projekt Records, Tone Vendor and Amazon. Projekt is the one that
       carries any signal now — it was the US home of this genre — but all
       five links are two decades dead, so this stays a note here rather than
       going on the page. Do not resurrect them as links. */
    format: 'EP · CD, Digital',
    labelCredit: 'Self-released',
    recordedIn: 'Los Angeles',
    styles: 'Trip hop · Ethereal',
    runtime: '19:31',
    credits: [
      ['Vocals', 'Caraleigh Baum'],
      ['Guitar, keyboards', 'Mo Safder'],
      ['Bass, keyboards', 'Sal Giuliano'],
      ['Loops, programming', 'Mo Safder · Sal Giuliano'],
      ['Mixed by', 'Mo Safder'],
      ['Produced by', 'THE FLIR'],
    ],
    trackCount: 5,
    status: 'Out now',
    /* Supplied master, 2501×2225. Square crop for the listing; the full
       artwork is assets/source/suture8-01-cover-full.png. */
    cover: '../../assets/source/suture8-01-cover.png',
    url: 'https://theflir.bandcamp.com/album/please-please-please',
    tracks: [
      { n: '01', title: 'Golden', time: '3:48' },
      { n: '02', title: 'Phere',  time: '4:48' },
      { n: '03', title: 'Ugli',   time: '3:52' },
      { n: '04', title: 'Lick',   time: '4:14' },
      { n: '05', title: 'Naked',  time: '2:49' },
    ],
  },
];

/* Compilation appearances, from the Apple Music artist page
   (music.apple.com/us/artist/the-flir/53854855). Three of these tracks exist
   nowhere else in the band's own catalogue.

   'url' is the best page for a reader to find out more, chosen per record
   rather than forced to one database. The four Static Waves go to Saint Marie
   Records' Bandcamp — the label these appearances came through, and the only
   destination where a reader can actually hear the track and buy the record.
   The two 2000s records predate Bandcamp and go to the best archival page
   that exists for each.

   'cover' is a repo-relative path. It is never a remote URL: the site's CSP is
   img-src 'self' data:, so an external image is blocked outright rather than
   merely discouraged. Both files are null-able. A null cover renders the row
   without an image instead of a broken box, and a null url renders a row that
   is not a link — the same convention PAST_SHOWS uses for flyer: null. */
const APPEARANCES = [
  { year: '2016', album: 'Static Waves 5', track: 'Blind Dumb Deaf',
    url: 'https://saintmarierecords.bandcamp.com/album/static-waves-5',
    cover: '../../assets/source/comp-static-waves-5.jpg' },
  { year: '2014', album: 'Static Waves 3', track: 'Golden (Electro Mix)',
    url: 'https://saintmarierecords.bandcamp.com/album/static-waves-3',
    cover: '../../assets/source/comp-static-waves-3.jpg' },
  { year: '2013', album: 'Static Waves 2', track: 'It Didn\'t Happen',
    url: 'https://saintmarierecords.bandcamp.com/album/static-waves-2',
    cover: '../../assets/source/comp-static-waves-2.jpg' },
  { year: '2012', album: 'Static Waves',   track: 'Again',
    url: 'https://saintmarierecords.bandcamp.com/album/static-waves',
    cover: '../../assets/source/comp-static-waves.jpg' },
  /* --- 2000s --- */
  /* 12 Tales is documented on Discogs (release 509352): Instinct Records
     INS594-2, CD digibook, US, 12 February 2002. THE FLIR is track 3 with
     'Lick', 4:20, produced and written by Mo Safder.

     Independently corroborated by the band's own Music page (Wayback captures
     2007-01-01 and 2009-07-02, identical), which prints the full running
     order. THE FLIR sits third, between Future Bible Heroes and Cranes, on a
     record that also carries Rasputina, Miranda Sex Garden, Violet Indiana,
     The Creatures, Russell Mills, Livid Kittens, Bitstream Dream, Devics and
     The Legendary Pink Dots. That company is the fact worth keeping: it is
     the strongest external signal in the catalogue, and it is printed on the
     band's own page rather than claimed on its behalf.

     The same page lists producer credits for the compilation as a flat set of
     names — Robin Guthrie, Stephin Merritt, Melora Creager, Rom Di Prisco,
     Mo Safder and others. Read that as each artist producing their own
     contribution, which is what Discogs's per-track credits show. Do NOT
     restate it as 'produced by Robin Guthrie'; the page's layout invites that
     reading and it would be false.

     url points at AllMusic, not at the Discogs release this entry is sourced
     from. Discogs sits behind a Cloudflare bot check, so its page cannot be
     verified as reachable, and working around that check is not on the table.
     AllMusic is already one of the three sources this section cites and
     returns 200. The Discogs id stays in this comment, where it is evidence
     rather than a link.

     cover is the 400px copy AllMusic serves, which is the largest clean one
     that exists. The band published their own copy at
     theflir.com/i/12tales_cover_small.png — recoverable from Wayback capture
     20060505034146 — but it is 150×150, too soft above a small thumbnail. It
     is the better provenance and the worse asset, so it is recorded here and
     not used. */
  { year: '2002', album: '12 Tales', track: 'Lick', label: 'Instinct Records', position: '3', runtime: '4:20',
    url: 'https://www.allmusic.com/album/12-tales-mw0000212956',
    cover: '../../assets/source/comp-12-tales.jpg' },
  /* Test Tones Volume 02, Discogs release 1088461: Clairecords fern 036, CD
     sampler, US, 2003, limited to 1000 copies. THE FLIR is track 10 with
     'Golden', 3:48. AllMusic dates this 2002 — Discogs says 2003, and Discogs
     carries the catalogue number and pressing detail, so 2003 stands.

     Cover recovered 2026-08-08. Mo supplied a direct i.discogs.com CDN URL,
     which sidesteps the bot check on the release page without going around it.
     The URL carries its own provenance: its base64 segment decodes to
     s3://discogs-database-images/R-1088461-1191154552.jpeg, and R-1088461 is
     the release id this entry already cited.

     The artwork then settled an argument recorded below. It reads "test tones
     volume 02 / winter 2003 / A TONEVENDOR QUARTERLY COMPILATION / A
     CLAIRECORDS PRODUCTION". So AllMusic's 2002 is wrong, Discogs' 2003 is
     right, and the record itself is now the source rather than a tiebreak
     between two databases. It also confirms the Clairecords label credit, and
     names Tonevendor -- one of the five shops the 2002 archive shows was
     selling this band's own EP.

     600x598, not square. Left at native size; the grid crops one pixel with
     object-fit rather than upscaling or distorting the scan.

     url is UNVERIFIED for the same reason — the id is corroborated by this
     comment's own sourcing and by the sibling Volume 03 release, but the page
     could not be loaded to confirm it resolves. It needs one human click. If
     it turns out to be dead, set this to null: a row with no link beats a row
     with a broken one. */
  { year: '2003', album: 'Test Tones Volume 02', track: 'Golden', label: 'Clairecords', position: '10', runtime: '3:48',
    url: 'https://www.discogs.com/release/1088461',
    cover: '../../assets/source/comp-test-tones-02.jpg' },
];

/* Where the band is listed. Apple Music files THE FLIR under Electronic;
   Spotify lists Please, Please, Please as an EP. */
const LINKS = {
  bandcamp: 'https://theflir.bandcamp.com/',
  appleMusic: 'https://music.apple.com/us/artist/the-flir/53854855',
  spotify: 'https://open.spotify.com/artist/31VcyCiOGkU3WhtshNYZmq',
  allMusic: 'https://www.allmusic.com/artist/the-flir-mn0000066502',
  instagram: 'https://instagram.com/theflir',
};

/* Spotify, read from the artist page. These are real counts at the time of
   reading and will drift — treat them as a snapshot, not a fixed value. */
const STREAMING = {
  monthlyListeners: '205',
  followers: '325',
  readOn: '06.08.26',
  topTracks: [
    { title: 'Again', plays: '18,850' },
    { title: 'Phere', plays: '12,387' },
    { title: 'Lick', plays: '10,814' },
    { title: 'Golden', plays: '9,335' },
    { title: 'Ugli', plays: '4,963' },
  ],
};

/* Past shows. Every row comes off the band's own Shows page, recovered from the
   Wayback Machine — theflir.com/Shows captured 2007-01-01 and 2007-07-13, and
   the same page at 2006-04-13 and 2006-05-02 for everything up to 18.02.06.
   The four captures agree row for row. The predecessor page, shows.cfm,
   captured 2002-09-29, 2002-12-31 and 2003-12-13, holds 16, 21 and 24 rows as
   the run grew; every row it carries appears in the later page with the same
   city. So the v04 list pruned nothing, and two independently built versions
   of the site corroborate every date before 2004.

   That replaces the old sourcing rule here. This list used to hold four rows
   read off flyer scans, three of them with venue: '' because no flyer named a
   venue. The band's own site named all of them all along. 35 shows,
   01.12.00 to 18.11.06.

   Dates are DD.MM.YY. The source prints them MM.DD.YY — 10.27.06 there is
   27.10.06 here. Getting that backwards silently swaps day and month on the
   rows where both are ≤ 12, so check any new row against the capture.

   Two deliberate departures from the source string:
     - 'Anaheim' — the source prints "Anahiem" in all captures. A misspelt city
       is a typo, not a fact about the show.
     - "SALON D'ARTE" keeps its capitals because that is how the source sets
       it, and there is no second source to say whether that is the venue's
       styling or the page's.
   Venue names are otherwise verbatim, including 'ål-térn’ati’v-áh' (a real
   club night, alternativah.com) and the typographic apostrophes.

   'city' is the city the source names, so Hollywood and Los Angeles stay
   distinct — the band's own page drew that line and it is not ours to redraw.

   flyer is null wherever no scan exists in assets/, which is everywhere but
   27.10.06. A flyer is a second source for one date, not the source for the
   list.

   'with' and 'billing' name the other act and say which way the bill ran.
   'detail' is the door: price, ages, times, and the night's own theme where it
   had one. All three are optional and most rows have none.

   These exist because these shows are otherwise gone. The venues are closed,
   the promoters' sites are dead or dying, and the listings that recorded them
   survive in one archive apiece. Where a source printed what a ticket cost or
   when the band went on, that goes on the page rather than into a comment —
   this site is plausibly the last place any of it is readable. Quote the
   source's own wording; do not tidy it into house style, and do not infer a
   detail that was not printed. */
const PAST_SHOWS = [
  { date: '01.12.00', venue: "SALON D'ARTE", city: 'San Diego', flyer: null },
  { date: '11.05.01', venue: 'The Aztec Bowl', city: 'San Diego', flyer: null },
  { date: '14.05.01', venue: 'The Casbah', city: 'San Diego', flyer: null },
  { date: '14.06.01', venue: 'The Vortex', city: 'San Diego', flyer: null },
  { date: '26.07.01', venue: 'Brick By Brick', city: 'San Diego', flyer: null },
  { date: '18.08.01', venue: 'Winston’s', city: 'San Diego', flyer: null },
  { date: '29.08.01', venue: 'Caffiend’s', city: 'San Diego', flyer: null },
  { date: '28.11.01', venue: 'Hard Rock Café', city: 'San Diego', flyer: null },
  /* socalgoth.com's 2001 listings, "Sun, Dec 9th 2001 — SUNDAY SKOOL - San
     Diego 101 / VX Twitch | The Flir | (pleasuresick)". Venue printed as
     "Sunday Skool", which is the night, not the room — the door text gives the
     room away: "$5 with Xanth Club card". So this row's Club Xanth was right
     all along, and the two sources agree. https://socalgoth.com/m-2001.html
     Full bill: VX Twitch, THE FLIR, (pleasuresick). 'with' names only the act
     above, since "supporting X and Y" would claim two headliners. */
  { date: '09.12.01', venue: 'Club Xanth', city: 'San Diego', flyer: null,
    with: 'VX Twitch', billing: 'support',
    detail: '$7, $6 in school uniform, $5 with Xanth club card · all ages · 7pm-2am' },
  { date: '19.12.01', venue: 'Hard Rock Café', city: 'San Diego', flyer: null },
  { date: '17.01.02', venue: 'Riverside Brewing Co.', city: 'Riverside', flyer: null },
  { date: '07.04.02', venue: 'Club Violaine', city: 'Los Angeles', flyer: null },
  { date: '12.04.02', venue: 'Echo Art Center', city: 'San Diego', flyer: null },
  /* socalgoth.com's 2002 listings: "Sat, May 11th — Trespassers William | The
     Flir | MOV. With club Violaine DJ's playing in between bands. $5 all
     night. First band on at 10pm. Venue: Reggae Lounge."
     https://socalgoth.com/m-2002.html
     Trespassers William were a Nettwerk act and are billed above, so this is a
     support slot. MOV completed the bill. */
  { date: '11.05.02', venue: 'The Reggae Lounge', city: 'Pasadena', flyer: null,
    with: 'Trespassers William', billing: 'support',
    detail: '$5 all night · 18 and up · first band 10pm' },
  { date: '10.08.02', venue: 'Club Antigone', city: 'Anaheim', flyer: null },
  { date: '19.09.02', venue: 'Cafe Club Fais Do-Do', city: 'Los Angeles', flyer: null },
  /* The best-corroborated show in the archive. socalgoth.com's 2002 listings:
     "Fri, Oct 4th — Gene Loves Jezebel (M. Aston) | Proteus | The Flir |
     Wailing Wall | Elseworth's Dragon. Advance $10, $12 at the door. All Ages,
     7:30pm. Venue: Corona Showcase Theatre."
     https://socalgoth.com/m-2002.html

     And THE FLIR's own site said so at the time, in the upcoming-shows block of
     the 2002-09-29 Wayback capture: "We will be opening for GENE LOVES GEZEBEL
     at the Showcase Theatre in Corona!!!" Their spelling. Both sources, written
     independently and twenty-four years apart in retrieval, say the same thing.

     'with' names the headliner only. Proteus, Wailing Wall and Elseworth's
     Dragon were also on it. */
  { date: '04.10.02', venue: 'Showcase Theatre', city: 'Corona', flyer: null,
    with: 'Gene Loves Jezebel', billing: 'support',
    detail: '$10 advance, $12 door · all ages · 7:30pm' },
  { date: '05.10.02', venue: 'Knitting Factory', city: 'Hollywood', flyer: null },
  { date: '07.10.02', venue: 'Riverside Brewing Co.', city: 'Riverside', flyer: null },
  { date: '10.10.02', venue: 'Brick By Brick', city: 'San Diego', flyer: null },
  { date: '22.12.02', venue: 'Martini Lounge', city: 'Hollywood', flyer: null },
  { date: '31.12.02', venue: 'ål-térn’ati’v-áh', city: 'Los Angeles', flyer: null },
  { date: '18.10.03', venue: 'Coffee Depot', city: 'Riverside', flyer: null },
  /* socalgoth.com's 2003 listings: "Fri, Oct 24th — The Flir | Sway. 18 and
     up. Violaine, Los Angeles County." https://socalgoth.com/m-2003.html
     Venue reads "Violaine", the night; this row keeps Club Violaine, which is
     the same thing named in full. */
  { date: '24.10.03', venue: 'Club Violaine', city: 'Hollywood', flyer: null,
    with: 'Sway', billing: 'headline',
    detail: '18 and up' },
  { date: '01.09.04', venue: 'Coffee Depot', city: 'Riverside', flyer: null },
  /* The only row with a named bill, and the only one sourced from the other
     band's own records. Black Tape for a Blue Girl's gigography lists it as
     show #101: "Fri Sept 10 2004 | Showcase Theatre ~ Corona, CA / 683 South
     Main Street. 951-276-7770. With The Flir. $9. All Ages."
     https://www.blacktapeforabluegirl.com/gigography/

     Third independent confirmation of this date: THE FLIR's own Shows page,
     the shows.cfm page before it, and now a third party's gigography. The
     street address also matches the one the band's 2002 site printed for this
     venue — a detail neither page could have copied from the other.

     Worth naming rather than leaving buried in the data: Black Tape for a Blue
     Girl is Sam Rosenthal's band, and Rosenthal founded Projekt Records — the
     label the 2002 archive shows was selling this band's CD (see the
     suture8-01 note above). The support slot and the distribution are the same
     relationship seen from two sides, and together they are the strongest
     external connection anywhere in this archive.

     'with' names the other act; 'billing' says which way round it was, and the
     pair is meaningless without it. This row is 'support': Black Tape for a
     Blue Girl toured this date and THE FLIR opened. 05.12.04 is 'headline'.
     Rendering both as "with X" was the first attempt and it was wrong — it
     reads as though THE FLIR topped both bills, which is precisely the
     distinction this comment used to warn against flattening.

     Still deliberately absent from 27.10.06: alū and Maktwain played under
     THE FLIR, so they are support acts on a bill this band headlined, and
     'with' would put them in the same slot as Black Tape for a Blue Girl. They
     stay in that row's comment until there is a field for a full bill. */
  { date: '10.09.04', venue: 'Showcase Theatre', city: 'Corona', flyer: null,
    with: 'Black Tape for a Blue Girl', billing: 'support',
    detail: '$9 · all ages' },
  { date: '22.10.04', venue: 'Club Violaine', city: 'Hollywood', flyer: null },
  /* This row said 'Club London' because that is what the band's own Shows page
     called it. Club London is a night, not a building. socalgoth.com's 2004
     listings name the building and explain the arrangement:

       "VIOLAINE - Special Event / Red Flag | The Flir
        Club Violaine has decided to go to Hollywood for one night only. While
        Club London is in the front room of Boardners, Club Violaine will be
        taking place in the patio!
        $5 before 10:30 or $7 after w/flyer, 18 and up (ID Req'd), 10PM-2AM"
       Venue: Boardner's — https://socalgoth.com/2004.html

     So the two sources never disagreed. One named the night, the other named
     the address. venue is now the building, because a venue is the thing you
     can play again and a club night from 2004 is not.

     BOTH OPEN QUESTIONS SETTLED BY MO, 2026-08-08, first-hand as a member of
     the band. Recorded as the band's own account, which is a different kind of
     source from the listings above and is labelled so on purpose:

     1. THE FLIR headlined. The printed bill reads "Red Flag | The Flir", Red
        Flag first, and a listing order is not a billing order. Do not "correct"
        this back from the flyer text.

     2. The patio, not the front room. Boardner's only stage is the outdoor one
        at the back, so a band on that night played the Club Violaine side by
        definition — which is also where socalgoth files THE FLIR. The band's
        own page saying "Club London" was naming the night on the door, not the
        room they played.

     Door detail kept here because PAST_SHOWS has no field for it: $5 before
     10:30, $7 after with flyer, 18 and up, 10PM-2AM. */
  { date: '05.12.04', venue: 'Boardner’s', city: 'Hollywood', flyer: null,
    with: 'Red Flag', billing: 'headline',
    detail: '$5 before 10:30, $7 after with flyer · 18 and up · 10pm-2am' },
  /* socalgoth.com's 2005 listings: "Wed, Mar 30th 2005 — The Flir | Mankind is
     Obsolete | Eternal Unborn. 21 and up. Venue: Brick by Brick, San Diego
     County." https://socalgoth.com/m-2005.html

     THE FLIR is printed first. On that site's other entries the first name is
     the top-billed act — compare 12.12.05 below, where Conjure One leads and
     THE FLIR follows. Ordering alone would be thin evidence, but Mo confirmed
     the same reading for 05.12.04, where the printed order also put the other
     act first and the band still headlined. Treat listing order as a signal
     here, not proof; if Mo says otherwise for this date, he is right. */
  { date: '30.03.05', venue: 'Brick By Brick', city: 'San Diego', flyer: null,
    with: 'Mankind is Obsolete · Eternal Unborn', billing: 'headline',
    detail: '21 and up' },
  { date: '05.04.05', venue: 'Good Hurt', city: 'Los Angeles', flyer: null },
  { date: '14.04.05', venue: '14 Below', city: 'Santa Monica', flyer: null },
  /* This row said Los Angeles until the archive was read. The source has it in
     San Diego, at Brick By Brick, in all four captures that cover it — and the
     band played that room four times across five years, which is what a home
     venue looks like. The city was wrong on the live site, not merely missing.

     Now confirmed a third time, by a source with no relationship to the other
     two: "Mon, Dec 12th 2005 — Klub Therapy & Brick by Brick Presents /
     Conjure One | The Flir. Tix $11 Adv & $13 Day of, 21 and up, Doors @ 8pm.
     Venue: Brick by Brick, San Diego County."
     https://socalgoth.com/m-2005.html

     Conjure One is Rhys Fulber — Front Line Assembly, Delerium — and he is
     billed above THE FLIR here, so this is a support slot. Along with Black
     Tape for a Blue Girl on 10.09.04, it is the second time the band opened
     for a name from exactly the scene the 12 Tales compilation placed them in.

     Mo, 2026-08-08: this was the big one for the band. Recorded because it is
     the band's own weighting and nothing in a listing carries it — but it does
     not license calling the slot anything other than support on the page. The
     fact is the bill; how much it meant is Mo's to say, not the site's. */
  { date: '12.12.05', venue: 'Brick By Brick', city: 'San Diego', flyer: null,
    with: 'Conjure One', billing: 'support',
    detail: '$11 advance, $13 door · 21 and up · doors 8pm' },
  /* socalgoth.com's 2006 listings: "Sat, Feb 18th — VIOLAINE - My Bloody
     Valentine Night / The Flir | Love Like Fire. First band on at 10:15pm
     Sharp! Plus our DJ's present a My Bloody Valentine Tribute Night also FREE
     MBV T-SHIRTS for this Special Occasion. 9:30pm - 2am, 18 and up."
     https://socalgoth.com/m-2006.html

     The night's theme is not modelled — there is no field for it — but it is
     the single most on-the-nose detail in this archive about where this band
     sat: they headlined a My Bloody Valentine tribute night. */
  { date: '18.02.06', venue: 'Club Violaine', city: 'Los Angeles', flyer: null,
    with: 'Love Like Fire', billing: 'headline',
    detail: 'My Bloody Valentine tribute night · free MBV shirts · 18 and up · 9:30pm-2am, first band 10:15' },
  /* The one row with two independent sources. The flyer prints the venue
     large — "AT TANGIER, 2138 Hillhurst Avenue, Los Angeles, CA 90027,
     323-666-8666" — and the Shows page names it too.

     The bill is now modelled rather than stranded in this comment. It was held
     back while 'with' could only name one act and could not say which way the
     billing ran; both of those are fixed, so the flyer's own running order can
     be read straight into the fields. THE FLIR at 11:00 PM, alū at 10:00,
     Maktwain at 9:00 — the latest slot tops the bill, so this is 'headline'.

     Still not modelled, because there is no field for it: a Halloween show,
     costumes encouraged, $8, 21+. Kept here so the facts survive. */
  { date: '27.10.06', venue: 'Tangier', city: 'Los Angeles', flyer: '../../assets/source/flyer-10272006.png',
    with: 'alū · Maktwain', billing: 'headline',
    detail: 'Halloween show, costumes encouraged · THE FLIR 11pm, alu 10pm, Maktwain 9pm · $8 · 21 and up' },
  /* socalgoth.com's 2006 listings: "Sat, Nov 18th — VIOLAINE / The Flir | Red
     Lily. DJ's and special guests spin Shoegaze, Ethereal, Indie, & Blisspop.
     18 and up." https://socalgoth.com/m-2006.html
     The last date in this archive, and the room described itself in the same
     words the band would use. */
  { date: '18.11.06', venue: 'Club Violaine', city: 'Los Angeles', flyer: null,
    with: 'Red Lily', billing: 'headline',
    detail: 'shoegaze, ethereal, indie and blisspop · 18 and up' },
];

/* Personnel. Roles come from the Discogs credits on suture8-01 (release
   2095405), the AllMusic writing credits, and the band's own Facebook album
   folder names — the Collaborators album labels each photograph with the
   person's instrument, which is where the six names beyond the credited three
   come from. No biography exists in any source, so none is written.

   Three separate facts, tracked separately:
     'member'   — held a standing role in the band at some point.
     'credited' — named on the suture8-01 sleeve (Mo, Sal, Caraleigh).
     'tenure'   — when, and what they played on.
   A credit is a fact about one record, not a description of who is in the band,
   and a former member is still a member. The page groups Members and
   Collaborators under their own headings and lets the tenure line say what each
   person played on — the heading carries the distinction, so the individual
   cards do not need to label anyone as former or hired.

   PHOTOGRAPH RESOLUTION: these come off Facebook and top out at 604px. They
   are fine at portrait size on screen and NOT usable for print or for a
   full-bleed hero. See readme.md.

   ORIGINS. This block used to say no biography existed in any source, so none
   was written. That held while the only sources were archived listings. It no
   longer holds — Mo gave this account first-hand on 2026-08-08:

     In 2000 Sal lived in Riverside; Mo and Caraleigh lived in San Diego. They
     all went back and forth. Sal met Joe in Riverside, while Joe was playing
     with his previous band.

   Which settles something the show archive had been implying without ever
   saying it. The first eight dates, 12.00 through 12.01, are San Diego rooms,
   and Riverside recurs from 01.02 onward — Riverside Brewing Co. twice, Coffee
   Depot twice. That is not a band relocating. It is a band with two home cities
   at once and a freeway between them, which is also why the early routing looks
   scattered: San Diego, Riverside, Corona, Pasadena, Anaheim, Hollywood.

   THE 2004 VOCALIST CHANGE. The archived news index carries three posts dated
   08.30.04: "NEW SINGER!!!", "Album Update", and "Please, Please, Please CD at
   Projekt.com". Only the headlines survive — the archived site ignores its own
   ?newsid= parameter, so every post id serves the same index page and no body
   text was captured. The singer is therefore not named by any document.

   Mo named her on 2026-08-08: Louise. Louise Fraser, who turns up six years
   later singing You Fade Away and Amethyst on suture8-02.

   That single date carries more than it looks. A new singer, an album update
   and Projekt picking up the CD, all posted together — and six weeks later,
   on 10.09.04, the band opened for Black Tape for a Blue Girl, Sam Rosenthal's
   band, and Rosenthal founded Projekt. Four facts from four unrelated sources
   landing inside seven weeks.

   Treat all of this as the band's own account where Mo supplied it. It is a
   different class of source from the archived listings the rest of this file
   rests on, and the two should never be silently merged. */
const BAND = [
  {
    name: 'Mo Safder',
    role: 'Guitar, keyboards',
    also: 'Loops, programming · Mixing',
    member: true,
    credited: true,
    current: true,
    /* Supplied live shot. Lit green and magenta by the venue rig — the exact
       case --flir-photo-filter exists for. */
    photo: '../../assets/source/mo-safder-live.jpg',
  },
  { name: 'Sal Giuliano', role: 'Bass, keyboards', also: 'Loops, programming', member: true, credited: true, current: true, photo: '../../assets/live/sal-04.jpg' },
  {
    name: 'Caraleigh Baum',
    role: 'Vocals',
    member: true,
    credited: true,
    tenure: 'Vocals from the beginning through suture8-01',
    photo: '../../assets/people/caraleigh-baum.jpg',
  },
  {
    name: 'Louise Fraser',
    role: 'Vocals',
    member: true,
    tenure: 'Vocals on Amethyst and You Fade Away',
    photo: '../../assets/people/louise-fraser.jpg',
  },
  {
    name: 'Jessica Isaac',
    role: 'Vocals',
    tenure: 'Vocals on Again',
    /* Shot under a red wash. The grayscale pass crushes it to solid black, so
       this one keeps its colour — the documented native exception. */
    photo: '../../assets/people/jessica-isaac.jpg',
    filter: 'var(--flir-photo-filter-native)',
  },
  /* Not on the 2002 sleeve — he arrived after it. Supported the band live
     first, then joined as an official member, and has been one since. This is
     exactly why 'member' and 'credited' are tracked separately: the sleeve is a
     snapshot of 2002, not a description of the band. */
  {
    name: 'Joe Ibarra',
    role: 'Bass, guitar',
    member: true,
    current: true,
    tenure: 'Live support after suture8-01, then a member since',
    photo: '../../assets/people/joe-ibarra.jpg',
  },
  { name: 'Jacqui Lay', role: 'Vocals', photo: '../../assets/people/jacqui-lay.jpg' },
  /* Lit red by the stage rig — also native. */
  { name: 'Luis Hermosillo', role: 'Bass', photo: '../../assets/people/luis-hermosillo.jpg', filter: 'var(--flir-photo-filter-native)' },
];

const PHOTOS = [
  '../../assets/source/dbnelson-09.jpg',
  '../../assets/source/dbnelson-03.jpg',
  '../../assets/source/dbnelson-12.jpg',
  '../../assets/source/ref-face-oculta.jpg',
  '../../assets/source/studio-mo2.jpg',
  '../../assets/source/band-photo.png',
];

Object.assign(window, { RELEASES, APPEARANCES, LINKS, STREAMING, BAND, PAST_SHOWS, PHOTOS });
