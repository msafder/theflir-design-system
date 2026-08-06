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
    /* Self-published on Bandcamp, same as suture8-01. Eyeliner Media handles
       merch, not this release — do not credit it as the label. */
    labelCredit: 'Self-released',
    recordedIn: 'Los Angeles',
    trackCount: 4,
    status: 'Out now',
    /* Square crop of the archive banner artwork — the band's own figure and
       lockup. The Bandcamp release art itself is not in the local archive. */
    cover: '../../assets/source/suture8-02-cover.png',
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

/* Past shows, read off the flyer scans in the archive. Dates are the
   filenames; venue names are those printed on the flyers. Where a flyer
   gives no venue the field is left empty rather than guessed. */
const PAST_SHOWS = [
  { date: '12.12.05', venue: '', city: 'Los Angeles', flyer: '../../assets/source/flyer-10272006.png' },
  { date: '18.02.06', venue: '', city: 'Los Angeles', flyer: null },
  { date: '27.10.06', venue: '', city: 'Los Angeles', flyer: '../../assets/source/flyer-10272006.png' },
  { date: '18.11.06', venue: '', city: 'Los Angeles', flyer: null },
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
