const products = [
    {
        id: 1,
        name: "Pantene Shampoo and Conditioner...",
        price:  3.9,
        category: "haircare",
        description:"Get shiny, healthy looking hair with Pantene shampoos, conditioners, styling products and hair treatments, designed to meet your hair's individual needs.",
        image: "album/pantene.jpg"
    },
    {
        id: 2,
        name: "Dove Shampoo and Conditioner pack...",
        price:  4.8,
        category: "haircare",
        description:"New Dove Straight & Silky Shampoo upgraded with Keratin Tri-Silk Serum has Amino Essence, an essential amino acid to boost hair health for deep nourishment up to the core of your hair fibres.",
        image: "album/Dove.jpg"
    },
    {
        id: 3,
        name: "TRESemmé Shampoo with Conditioner...",
        price: 5,
        category: "haircare",
        description:"Smoother, shinier, stronger-looking hair starts in the shower – with a great shampoo.",
        image: "album/tresemme.jpg"
    },
    {
        id: 4,
        name: "L'Oréal Shampoo and Conditioner pack...",
        price: 4.5,
        category: "haircare",
        description:"The L'Oréal Paris shampoos are made of mild ingredients that thoroughly cleanse your hair without stripping away the moisture or natural oils.",
        image: "album/lorealshampoo.jpg"
    },
    {
        id: 5,
        name: "Haid&Shoulder Shampoo, Conditioner...",
        price: 5.2,
        category: "haircare",
        description:"Head & Shoulders Cool Anti Dandruff Shampoo invigorates both your hair and mind effectively and makes your hair look healthy and radiant.",
        image: "album/haid&shoulder.jpg"
    },
    {
        id: 6,
        name: "Kérastase Shampoo, Conditioner...",
        price: 3.1,
        category: "haircare",
        description:"Infused with nourishing ingredients, the anti-frizz hair shampoos deeply hydrate and tame unruly locks, leaving the hair silky and manageable.",
        image: "album/kerastaseshampoo.jpg"
    },




    {
        id: 7,
        name: "Aerin Lilac Path Perfume",
        price:  2.3,
        category: "perfume",
        description:"Lilac Path is a rich floral lilac perfume inspired by the fresh spring blooms that line an idyllic garden path.",
        image: "album/aerinperfume.jpg"
    },
    {
        id: 8,
        name: "Bvlgari Rose Goldea",
        price:  3.4,
        category: "perfume",
        description:"Rose Goldea eau de parfum is an unprecedented tribute to femininity combining the radiant rose and sophisticated musks into a blend imbued with desire.",
        image: "album/bvlgariperfume.jpg"
    },
    {
        id: 9,
        name: "Jimmy Choo Floral",
        price: 4,
        category: "perfume",
        description:"The texture of each flower petal is almost tangible, subtle yet luminous, sophisticated yet urban, a radiant expression of femininity and a symphony of floral, fruity and musky notes.",
        image: "album/jimmychooperfume.jpg"
    },
    {
        id: 10,
        name: "Jeanne Lanvin Perfume",
        price: 6.3,
        category: "perfume",
        description:"The key note of the perfume are green and fruit notes of black currant, the base notes combine cosmone and a silky musk.",
        image: "album/leannelanvinPerfume.jpg"
    },
    {
        id: 11,
        name: "Miniso Flipped",
        price: 4.4,
        category: "perfume",
        description:"This perfume gives you a superior aroma of bergamot, apple, black currant and pear. Heart notes: Jasmine, peony and lily. Background: musk, cedar and amber.",
        image: "album/minisoPerfume.jpg"
    },
    {
        id: 12,
        name: "Narciso Perfume",
        price: 3.1,
        category: "perfume",
        description:"An elegant, sensual, mysterious and voluptuous fragrance. Three notes enhance the heart of musk: floral-fruity, amber and woody notes.",
        image: "album/narcisoperfume.jpg"
    },




    {
        id: 13,
        name: "Dove Face wash...",
        price:  2.9,
        category: "facewash",
        description:"Made from a range of quality ingredients like glycerin, water and myristic acid, the gentle face wash cleanses and moisturizes skin.",
        image: "album/dovefashwash.jpg"
    },
    {
        id: 14,
        name: "Garnier Lemon Face wash...",
        price:  3.8,
        category: "facewash",
        description:"Infused with vitamin C and lemon, this gel face wash eliminates dirt, dust and impurities, oil from the skin and makes it glow from the inside.",
        image: "album/garnierlemon.jpg"
    },
    {
        id: 15,
        name: "Dove Soap...",
        price: 1.2,
        category: "facewash",
        description:"With its patented blend of mild cleansers and ¼ moisturising cream, Dove's iconic Beauty Bar rinses cleaner than soap, leaving skin clean, soft and smooth.",
        image: "album/dovesoap.jpg"
    },
    {
        id: 16,
        name: "Garnier PureActive...",
        price: 2.5,
        category: "facewash",
        description:"The soap-free formula, enriched with Neem Leaf Extract and Tea-Tree Oil, helps prevent pimples through 3 purifying actions.",
        image: "album/garnierPure.jpg"
    },
    {
        id: 17,
        name: "Lakmé Face wash...",
        price: 3.2,
        category: "facewash",
        description:"Made from the enriching strawberry extracts and fruit antioxidants, the Lakmé Blush and glow face wash is gentle for your skin. It removes deep embedded impurities, excess oil and dirt from your skin, keeping the natural moisture balance intact.",
        image: "album/lakmefashwash.jpg"
    },
    {
        id: 18,
        name: "Nivea Face wash...",
        price: 2.4,
        category: "facewash",
        description:"The face washes give you a natural, healthy glow while removing dirt, sebum, and dead cells from the skin.",
        image: "album/nivea.jpg"
    },



     {
        id: 19,
        name: "Desk Calendar...",
        price:  2.7,
        category: "roomdecore",
        description:"Calendars. 2024 Desk Calendar – Bright & Beautiful.",
        image: "album/calender.jpg"
    },
    {
        id: 20,
        name: "Modern Chair...",
        price:  7.8,
        category: "roomdecore",
        description:"Modern & luxury chair online and make your space cosy & relaxing.",
        image: "album/chair.jpg"
    },
    {
        id: 21,
        name: "Table Lamp...",
        price: 6.5,
        category: "roomdecore",
        description:"Table Lamp - Bedside Side Table Lamp with metalic Base for Night Reading,Bed Room,Living Room.",
        image: "album/lamp.jpg"
    },
    {
        id: 22,
        name: "Pineapple Shape Storage Box...",
        price: 1.5,
        category: "roomdecore",
        description:" Pineapple Shape Bottle Mini Storage for Home Decor. Sealed Glass Jar Aromatherapy Container for Accessories.",
        image: "album/ministoragebox.jpg"
    },
    {
        id: 23,
        name: "Table Photo Frame...",
        price: 2.2,
        category: "roomdecore",
        description:"Art Street plastic Double Sided Table Photo Frames for Home Décor Beige Photo Frame for Table & Desk Decoration.",
        image: "album/photoalbum.jpg"
    },
    {
        id: 24,
        name: "Wall Clock For Room...",
        price: 3.7,
        category: "roomdecore",
        description:"Wooden Wall Clock, Designer Watch for Living Room (10 Inch).",
        image: "album/wallwatch.jpg"
    },



    {
        id: 25,
        name: "Dinnerware Set...",
        price:  3.9,
        category: "kitchen",
        description:"Elevate your dining experience with sophistication by incorporating our stoneware dinner set, featuring a rich, muddy brown palette.",
        image: "album/dinnerwareset.jpg"
    },
    {
        id: 26,
        name: "Heat Resistant Oven Gloves...",
        price:  4.8,
        category: "kitchen",
        description:"Style Freak Pair of Extra Padded Unique Check Pattern Oven Gloves Heat Resistant, Protection of Hands from Hot Utensils, Grill.",
        image: "album/glufzkitchen.jpg"
    },
    {
        id: 27,
        name: "Cookware Sets Combo...",
        price: 5,
        category: "kitchen",
        description:"FOUR IN ONE COMBO -The combo contains a Kadai, a Tawa, and a Fry pan.",
        image: "album/cooker&pan.jpg"
    },
    {
        id: 28,
        name: "blender Mixer...",
        price: 4.5,
        category: "kitchen",
        description:"260 Watt Hand Blender Mixer Electric Egg Beater For Cake Making and Beater For Whipping.",
        image: "album/mixer.jpg"
    },
    {
        id: 29,
        name: "Serving Spoons...",
        price: 5.2,
        category: "kitchen",
        description:"Buy high-quality serving spoon sets online for elegant dining.",
        image: "album/soopspon.jpg"
    },
    {
        id: 30,
        name: "Chop Tools Set...",
        price: 3.1,
        category: "kitchen",
        description:"Shop our great selection of Mandolines, Spiral Slicers and other manual cutting tools for the kitchen.",
        image: "album/regularchoptool.jpg"
    },



     {
        id: 31,
        name: "TYMO Hair Straightener Brush...",
        price:  39.99,
        category: "hairtool",
        description:"The TYMO Hair Straightener Brush is a game-changer in the world of hair styling, offering an innovative solution for achieving sleek, straight locks with ease.",
        image: "album/hairbrushstraigtner.jpg"
    },
    {
        id: 32,
        name: "Electric Hair Curler Rollers...",
        price:  4.8,
        category: "hairtool",
        description:"Professional hair curler machine for women Electric Hair curler rollers.",
        image: "album/haircurler.jpg"
    },
    {
        id: 33,
        name: "Eyelash Curler...",
        price: 5,
        category: "hairtool",
        description:"Eyelash Curler For Women Long-lasting Lash Curls for All Eye Shapes.",
        image: "album/eyelashcurler.jpg"
    },
    {
        id: 34,
        name: "Flat Iron Hair Straightener...",
        price: 4.5,
        category: "hairtool",
        description:"Straighteners have more versatile usage in hairstyling. These flat irons can also be used to curl up your hair.",
        image: "album/flatiron.jpg"
    },
    {
        id: 35,
        name: "Hair Dryer...",
        price: 5.2,
        category: "hairtool",
        description:"Online shopping for Hair Dryers & Accessories from a great selection at Beauty Store.",
        image: "album/hairdryer.jpg"
    },
    {
        id: 36,
        name: "AsaVea Hair Straightener Brush...",
        price: 3.1,
        category: "hairtool",
        description:"AsaVea Hair Straightener Brush with MCH Heating Technology and Anti-Scald Design at Ubuy India.",
        image: "album/hairstraightnerbrush.jpg"
    }
];
export default products;