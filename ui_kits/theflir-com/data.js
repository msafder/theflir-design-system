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
    date: '01.09.02',
    dateLong: '01 SEPTEMBER 2002',
    /* EP, settled. Discogs holds the physical release: CD, EP, US, 2002.
       Bandcamp is the only source calling it an album. */
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
   nowhere else in the band's own catalogue. */
const APPEARANCES = [
  { year: '2016', album: 'Static Waves 5', track: 'Blind Dumb Deaf' },
  { year: '2014', album: 'Static Waves 3', track: 'Golden (Electro Mix)' },
  { year: '2013', album: 'Static Waves 2', track: 'It Didn\'t Happen' },
  { year: '2012', album: 'Static Waves',   track: 'Again' },
  /* --- 2000s --- */
  /* 12 Tales is documented on Discogs (release 509352): Instinct Records
     INS594-2, CD digibook, US, 12 February 2002. THE FLIR is track 3 with
     'Lick', 4:20, produced and written by Mo Safder. */
  { year: '2002', album: '12 Tales', track: 'Lick', label: 'Instinct Records', position: '3', runtime: '4:20' },
  /* Test Tones Volume 02, Discogs release 1088461: Clairecords fern 036, CD
     sampler, US, 2003, limited to 1000 copies. THE FLIR is track 10 with
     'Golden', 3:48. AllMusic dates this 2002 — Discogs says 2003, and Discogs
     carries the catalogue number and pressing detail, so 2003 stands. */
  { year: '2003', album: 'Test Tones Volume 02', track: 'Golden', label: 'Clairecords', position: '10', runtime: '3:48' },
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
   list. */
const PAST_SHOWS = [
  { date: '01.12.00', venue: "SALON D'ARTE", city: 'San Diego', flyer: null },
  { date: '11.05.01', venue: 'The Aztec Bowl', city: 'San Diego', flyer: null },
  { date: '14.05.01', venue: 'The Casbah', city: 'San Diego', flyer: null },
  { date: '14.06.01', venue: 'The Vortex', city: 'San Diego', flyer: null },
  { date: '26.07.01', venue: 'Brick By Brick', city: 'San Diego', flyer: null },
  { date: '18.08.01', venue: 'Winston’s', city: 'San Diego', flyer: null },
  { date: '29.08.01', venue: 'Caffiend’s', city: 'San Diego', flyer: null },
  { date: '28.11.01', venue: 'Hard Rock Café', city: 'San Diego', flyer: null },
  { date: '09.12.01', venue: 'Club Xanth', city: 'San Diego', flyer: null },
  { date: '19.12.01', venue: 'Hard Rock Café', city: 'San Diego', flyer: null },
  { date: '17.01.02', venue: 'Riverside Brewing Co.', city: 'Riverside', flyer: null },
  { date: '07.04.02', venue: 'Club Violaine', city: 'Los Angeles', flyer: null },
  { date: '12.04.02', venue: 'Echo Art Center', city: 'San Diego', flyer: null },
  { date: '11.05.02', venue: 'The Reggae Lounge', city: 'Pasadena', flyer: null },
  { date: '10.08.02', venue: 'Club Antigone', city: 'Anaheim', flyer: null },
  { date: '19.09.02', venue: 'Cafe Club Fais Do-Do', city: 'Los Angeles', flyer: null },
  { date: '04.10.02', venue: 'Showcase Theatre', city: 'Corona', flyer: null },
  { date: '05.10.02', venue: 'Knitting Factory', city: 'Hollywood', flyer: null },
  { date: '07.10.02', venue: 'Riverside Brewing Co.', city: 'Riverside', flyer: null },
  { date: '10.10.02', venue: 'Brick By Brick', city: 'San Diego', flyer: null },
  { date: '22.12.02', venue: 'Martini Lounge', city: 'Hollywood', flyer: null },
  { date: '31.12.02', venue: 'ål-térn’ati’v-áh', city: 'Los Angeles', flyer: null },
  { date: '18.10.03', venue: 'Coffee Depot', city: 'Riverside', flyer: null },
  { date: '24.10.03', venue: 'Club Violaine', city: 'Hollywood', flyer: null },
  { date: '01.09.04', venue: 'Coffee Depot', city: 'Riverside', flyer: null },
  { date: '10.09.04', venue: 'Showcase Theatre', city: 'Corona', flyer: null },
  { date: '22.10.04', venue: 'Club Violaine', city: 'Hollywood', flyer: null },
  { date: '05.12.04', venue: 'Club London', city: 'Hollywood', flyer: null },
  { date: '30.03.05', venue: 'Brick By Brick', city: 'San Diego', flyer: null },
  { date: '05.04.05', venue: 'Good Hurt', city: 'Los Angeles', flyer: null },
  { date: '14.04.05', venue: '14 Below', city: 'Santa Monica', flyer: null },
  /* This row said Los Angeles until the archive was read. The source has it in
     San Diego, at Brick By Brick, in all four captures that cover it — and the
     band played that room four times across five years, which is what a home
     venue looks like. The city was wrong on the live site, not merely missing. */
  { date: '12.12.05', venue: 'Brick By Brick', city: 'San Diego', flyer: null },
  { date: '18.02.06', venue: 'Club Violaine', city: 'Los Angeles', flyer: null },
  /* The one row with two independent sources. The flyer prints the venue
     large — "AT TANGIER, 2138 Hillhurst Avenue, Los Angeles, CA 90027,
     323-666-8666" — and the Shows page names it too.

     Also printed on the flyer and deliberately not modelled here, because
     PAST_SHOWS has no field for any of it: a Halloween show, costumes
     encouraged; THE FLIR at 11:00 PM, alū at 10:00, Maktwain at 9:00; $8,
     21+. Kept in this comment so the facts survive until there is somewhere
     to put them. */
  { date: '27.10.06', venue: 'Tangier', city: 'Los Angeles', flyer: '../../assets/source/flyer-10272006.png' },
  { date: '18.11.06', venue: 'Club Violaine', city: 'Los Angeles', flyer: null },
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
   full-bleed hero. See readme.md. */
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
