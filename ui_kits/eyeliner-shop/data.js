/* THE FLIR collection on eyeliner.media — content.

   Two products exist as artwork. The tee art is real
   (assets/source/human-butterfly-shirt.png — the Human Butterfly heat map,
   the exemplar for --flir-photo-filter-hot). The CD is the Bandcamp release
   pressed through Kunaki.

   PRICING IS NOT SET. The figures below are placeholders and are labelled as
   such on the collection page. Do not ship them. Discontinued items carry no
   price at all — the mini poster's was never recorded, so the field is empty
   rather than filled with a guess.

   Catalogue runs on the suture8 series: suture8-M01, suture8-M02 for merch,
   suture8-02-CD for the disc. */

const SHOP = {
  store: 'Eyeliner Media',
  collection: 'THE FLIR',
  pricingIsPlaceholder: true,
  products: [
    {
      id: 'human-butterfly-tee',
      sku: 'suture8-M01',
      title: 'Human Butterfly — T-shirt',
      type: 'T-shirt',
      price: '32.00',
      status: 'No longer available',
      /* Out of production. Kept in the collection as an archive entry rather
         than deleted — the artwork is the exemplar --flir-photo-filter-hot and
         --flir-heatmap-stops were derived from, and it is part of the record. */
      discontinued: true,
      art: '../../assets/source/human-butterfly-shirt.png',
      garment: 'Black · 100% cotton',
      print: 'One-pass screen print, front',
      note: 'The artwork is a gradient map read literally — black through #C00000 to white. The blown highlights and crushed blacks are what make it survive a single screen pass on a dark garment.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      soldOut: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 'human-butterfly-poster',
      sku: 'suture8-M02',
      title: 'Human Butterfly — Mini poster',
      type: 'Mini poster',
      price: '',
      status: 'No longer available',
      /* Also out of production. Same artwork as the tee — the run is finished
         and the entry is kept for the record. Price was never recorded. */
      discontinued: true,
      art: '../../assets/source/human-butterfly-shirt.png',
      garment: 'Mini poster',
      print: 'Not recorded',
      note: 'A short run of mini posters carrying the same heat-map artwork as the shirt. Finished, and not reprinted.',
      sizes: [],
      soldOut: [],
    },
    {
      id: 'singles-cd',
      sku: 'suture8-02-CD',
      title: 'Singles (Internet Only)',
      type: 'CD',
      price: '12.00',
      status: 'Available',
      discontinued: false,
      art: '../../assets/source/suture8-02-cover.jpg',
      garment: 'Kunaki · 4.75in jacket',
      print: 'Four-colour, chalk tray card',
      note: 'Four tracks. Also on Bandcamp as a digital release.',
      sizes: [],
      soldOut: [],
    },
  ],
};

Object.assign(window, { SHOP });
