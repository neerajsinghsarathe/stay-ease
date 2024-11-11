import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
import {RouterLink} from '@angular/router';
import {Place} from '../../models/place.model';
import {PlaceCardComponent} from '../../helpers/place-card/place-card.component';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [
    RouterLink,
    PlaceCardComponent
  ],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent implements OnInit {
  places: Place[] = [
    {
      "_id": "64116bea6f6b01ef935b1cb7",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Cider Chalet-F: 2BRK MountainView Apartment",
      "address": "Manali, Himachal Pradesh, India",
      "perks": [
        "enterence",
        "wifi",
        "radio",
        "tv"
      ],
      "extraInfo": "-Check-in time is 1pm & Check-out time is 10 am. Early check-in or late checkout is permitted based on availability and prior intimation.\n*Based on availability, early checkin is permitted from 10am onwards. If you wish to check-in before 10am, an early checkin fee will be applicable.\n*Late checkout is permitted based on availability and a fee may be applicable based on checkout time. Please contact host regarding the same.",
      "checkIn": 13,
      "checkOut": 10,
      "maxGuests": 4,
      "price": 2840,
      "__v": 3,
      "description": "Ménage - By The Beas , A colonial style hill cottage near Manali, this delightful vacation home promises the perfect mix of hills with a scenic river side in the privacy of your own space. It offers a great stay on the river bank amidst a small Apple orchard.\nTastefully done up interiors, 3 cosy bedrooms, a large living room with fireplace, sun bathing attic with a view of the river and mountains, bon-fire & barbecue by our cook, absolutely perfect for a laid-back friends or family staycation.",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1694365883/Airbnb/Places/liz5ro0ahknewjsdjgsb.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694365796/Airbnb/Places/j2nyjfrkfocnmypobxyy.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694365907/Airbnb/Places/meewrjm30dxwi2bjhsgj.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694365919/Airbnb/Places/bnzwau9h3wllv7bckjxr.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694365935/Airbnb/Places/maaqd97vn8gntdhxqgwm.jpg"
      ]
    },
    {
      "_id": "64116d866f6b01ef935b1cc4",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Whispering Pines Cottages|Treehouse|Tandi",
      "address": " Jibhi, Himachal Pradesh, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863606/Airbnb/Places/y0lytplburvclb73snwg.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863614/Airbnb/Places/ncaq2bbprjrorruwbztm.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863627/Airbnb/Places/uolfzcl6tajguxm8qtff.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863635/Airbnb/Places/xze04l4bxsfzwpvk84ls.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863643/Airbnb/Places/w9wkxxdqcj0bm1bw3vtl.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863650/Airbnb/Places/b7vuk8zx5qiiv3pfx3xk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863659/Airbnb/Places/rqgcdbe184truv9ipx1b.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863665/Airbnb/Places/xwbkd11wsh7zx5rdsvua.jpg"
      ],
      "perks": [
        "wifi",
        "tv",
        "parking",
        "radio"
      ],
      "extraInfo": "You will get whatever you need from the market at your doorstep.\n•You will also get your clothes washed, dried and ironed at a modest price.\n•We'll make bonfire at request.\n•We cook delicious Himachali food.\n•We go with guests on short hikes.\n•We'll arrange the cabs for you, or provide you the number of the taxi union.\nThe cab prices aren't within our control, and fluctuate widely.",
      "checkIn": 13,
      "checkOut": 11,
      "maxGuests": 3,
      "price": 5999,
      "__v": 2,
      "description": "The treehouse is nestled in the Himalayan subtropical pine forests. It is made keeping in mind to provide a comfortable and memorable stay to travelers seeking a break from the hustle of city life. The house is cozy both in winter and summer. It has a 360-degree view of the greater Himalayas."
    },
    {
      "_id": "64116e856f6b01ef935b1cca",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Suite ~ PATAN MAHAL",
      "address": "Patan, Rajasthan, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863877/Airbnb/Places/itt1teaqbgh4rdguxwhx.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863894/Airbnb/Places/bs8g40oqewee2imytcxe.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863903/Airbnb/Places/nyk8tdqnwuweyb28dxii.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863918/Airbnb/Places/lpzfcl3hhtyzf0mxohpa.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863940/Airbnb/Places/epkgtuvjrikzqfr50xap.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1678863950/Airbnb/Places/o7hkkas1p3fvrzvhok62.jpg"
      ],
      "perks": [
        "wifi",
        "radio",
        "pets",
        "parking",
        "tv",
        "enterence"
      ],
      "extraInfo": "The historical city of Patan is about 70 miles northeast of Jaipur,on the Kotputli Sikar road, off the National Highway 8, the road which connects Jaipur and Delhi.\n\nNestled in a valley formed by 3 hills, Patan Mahal rises in the distance at the end of the city. The palace is well-located with an unhindered birds-eye view of the 13th century ancestral fort and another palace called Badal Mahal which stands loftily at an imposing 2000 ft above sea level.\n",
      "checkIn": 14,
      "checkOut": 11,
      "maxGuests": 4,
      "price": 11997,
      "__v": 0,
      "description": "The family came and built the impregnable fort at Patan and also the Badalgarh Mahal, halfway up the mountain in the 13th century. The Patan Mahal was built a few years later.\nPatan Mahal, home to Rao Digvijay Singh,  is situated on the foot hills. He has now opened his home to the discerning traveler. The Patan Mahal is a heritage hotel with 18 rooms with all modern amenities,  maintaining it’s original character"
    },
    {
      "_id": "642e89c11e89eed6d7dc09a6",
      "owner": "6411acd86f6b01ef935b1dbf",
      "title": "4BHK Pool Villa Areca by The Rentalgram",
      "address": "  Lonavla, Maharashtra, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1680771390/Airbnb/Places/umrvoqzy7ry9go7ju3uv.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1680771398/Airbnb/Places/qtb2yspb0k5oirsnav2r.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1680771406/Airbnb/Places/gifhwogwwmmye0zeecsi.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1680771413/Airbnb/Places/z3k7hggigjals2xkjnfk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1680771420/Airbnb/Places/kwydfw36vmszcl46haik.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1680771438/Airbnb/Places/xuuxrwu0gopupofvxwpm.jpg"
      ],
      "description": "Ornate in look, equipped with luxurious and essential furniture, Pool Villa Areca is the perfect space for someone looking for privacy away from the hustle and bustle of the city not too far away from the city!\n",
      "perks": [
        "wifi",
        "tv",
        "radio",
        "parking",
        "pets",
        "enterence"
      ],
      "extraInfo": "Tucked in frondescent hills and serene laps of nature, the 4 BHK villa has a terrace with seating arrangements that offers an endless view of the lush green landscape.\nThis 2 storey villa is extremely spacious and has 4 bedrooms with attached bathrooms, a private pool and a small lawn area.\n• Ground floor of the villa is designed with a spacious, air conditioned living area and is equipped with a bathroom\n• The ground floor of the villa consists of a 2 occupancy air-conditioned bedroom with attached bathroom, air-conditioned living area, and a bathroom\n• A workspace set up is created near the living area",
      "checkIn": 2,
      "checkOut": 1,
      "maxGuests": 3,
      "price": 15400,
      "__v": 0
    },
    {
      "_id": "648b2af57de76c2607d477ce",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Centre place Graslin - Chambre privée La Cambronne",
      "address": "Nantes, Pays de la Loire, France",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1686841899/Airbnb/Places/qcixfhj7vlhoqu8dzhqh.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686841915/Airbnb/Places/nogcehkqhkr8hduyg7fu.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686841924/Airbnb/Places/y0m8q3xzotwmlxmdy0fk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686841937/Airbnb/Places/m5tuhpoa7fglbpqafkff.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686841952/Airbnb/Places/mhxoxnxlaelhjrtrrg17.jpg"
      ],
      "description": "Enjoy an elegant private room of 20 m2 in a renovated 160 m2 apartment in the heart of downtown Nantes, in the Graslin neighborhood.\nThe charm of the renovated old: ceiling height of 3.60m, period parquet flooring, black marble fireplace, comfortable bathroom.",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "Step through the door of this Haussmann-style building dating back to 1793. You will enter a majestic entrance hall and climb a wide stone staircase to the 3rd floor (no elevator).\nThe room can accommodate 2 people. If you are traveling with an additional adult, the \"La Graslin\" room in the same accommodation may be available to accommodate them, depending on the availability of that room. Please see the \"La Graslin\" listing on my profile.\nYou will be close to all the amenities of downtown: restaurants, cafes, the Graslin theater, grocery stores, and all kinds of shops.\nThe central transportation hub for public transportation in Nantes (tram, bus, busway) is a 2-minute walk from the building.\nThe train station is less than 10 minutes away by tram without changing trains (3 stops to Commerce).\nFor our environmentally friendly friends, a \"bicloo\" bike rental station is available right outside the building.\nThe apartment is ideally located for your sightseeing activities: it is situated 10 minutes away from the Machines de l'Ile and Les Nefs, 2 minutes from the Passage Pommeray and the Place Royale, and a 10-minute walk from the Castle of the Dukes.",
      "checkIn": 13,
      "checkOut": 11,
      "maxGuests": 3,
      "price": 36488,
      "__v": 0
    },
    {
      "_id": "648b2ce07de76c2607d477e0",
      "owner": "6411acd86f6b01ef935b1dbf",
      "title": "The Cloudberry, Cozy 2BHK radiator heated, Shimla",
      "address": "  Mashobra, Himachal Pradesh, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1686842471/Airbnb/Places/vhtwx0pn5gqva7jizu2t.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686842484/Airbnb/Places/rujbhmqvhwy1r4j1iexh.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686842494/Airbnb/Places/p2yo0ed2cj00mqjojqlc.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686842503/Airbnb/Places/m1ae79dxsmxgfqoak53r.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686842514/Airbnb/Places/nwzu4hl2db4hjkz7zhac.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686842523/Airbnb/Places/utwpysphrwubray6t3ld.jpg"
      ],
      "description": "Our woody 2 bhk apartment will make sure you have the best view that Shimla has to offer from the comfort of your own home.\n\n- 30 mins from Shimla mall\n- Sloping wooden roof\n- High speed broadband\n- HOME STYLE FRESH FOOD available for delivery\n- New renovated bathrooms & kitchen",
      "perks": [
        "wifi",
        "tv",
        "parking",
        "radio",
        "enterence"
      ],
      "extraInfo": "This top floor Attic home has a unique woody feel and panoramic views of the mountains.\n\nThe spacious terrace has a sitting arrangement for 4 and has the most gorgeous views you can soak in from all of the Shimla region ( influencers vouch for it) . We can arrange for a bonfire or barbecue in the terrace as well.\n\nWe don't let out rooms individually and the whole apartment together as the living space and the terrace is common. There is an independent staircase to the house. If you are a big group we can club this apartment with the one below to accommodate your gang - check out Plumcove",
      "checkIn": 14,
      "checkOut": 11,
      "maxGuests": 1,
      "price": 3512,
      "__v": 0
    },
    {
      "_id": "648b4716cb4ec12c764f410e",
      "owner": "6411acd86f6b01ef935b1dbf",
      "title": "Jobless Wanderer's Home | A Kathkuni Heritag",
      "address": "  Tandi, Himachal Pradesh, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1686848350/Airbnb/Places/vsbroszff9pc5q7wmgxn.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686848361/Airbnb/Places/fmudvb7edv4nng89ipky.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686848371/Airbnb/Places/dnovfm47riskzsfwio5p.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686848381/Airbnb/Places/hfmuqtw4wenxb1z4elsz.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686848388/Airbnb/Places/j9e87ar1ieirfpbkwcd7.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686848401/Airbnb/Places/k3huicow0s96mit2wwcw.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849156/Airbnb/Places/l5x0vtsxoo8elrrcxfsu.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849182/Airbnb/Places/gazm89dof8dmmef6haic.jpg"
      ],
      "description": "Ours is a traditional Himachali home, made of deodar, stones & mud, surrounded by a 360-degree view of the greater Himalayas. We live in an acre of farmland with our three dogs- Bhairon,Badal & Bijli. If your definition of luxury includes breath-taking views of mountains with colorful skies, hiking with mountain dogs and eating home grown/homemade meals, you couldn’t find a better place than ours! We also have excellent internet connectivity.",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "NOTE- READ ALL THE DESCRIPTION, HOUSE RULES CAREFULLY BEFORE CONFIRMING YOUR RESERVATION.\nOur property is located at the top of TANDI village and is the last house, bordering a giant pine wood forest as our backyard. Earlier a homestead to a local king, the base of our home is nearly 150 years old! Sat atop perching on a commanding angle, the spectacular views all around justifies the location astutely. The kilometer long hike to reach our place would make sense to our guests, we promise! (the place might not be ideal for Minors and senior citizens because of it's landscape)\n\nPlease Read the Instructions and \" OTHER DETAILS TO NOTE\" section properly before confirming your reservation .",
      "checkIn": 10,
      "checkOut": 14,
      "maxGuests": 3,
      "price": 10320,
      "__v": 0
    },
    {
      "_id": "648b48f0cb4ec12c764f4126",
      "owner": "642e87521e89eed6d7dc098c",
      "title": "Atithi Homestay (mountain view room)",
      "address": "Bir, Himachal Pradesh, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849655/Airbnb/Places/bdkwaqmryz2by6htyban.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849660/Airbnb/Places/op3httwyuph7joiodwvp.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849665/Airbnb/Places/azmthicwsbnzemmybmbd.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849672/Airbnb/Places/jtl1q7xnmmaz2a2m1rpc.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849825/Airbnb/Places/usno5txysjh112wtcnhe.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849831/Airbnb/Places/cxlaafjrsagw93ini71x.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849837/Airbnb/Places/ztpl7nyq0wpo1trhf88j.jpg"
      ],
      "description": "You'll enjoy your time at this cheerful getaway.",
      "perks": [
        "wifi",
        "tv",
        "radio",
        "parking"
      ],
      "extraInfo": "sirf shanti or sakoon",
      "checkIn": 10,
      "checkOut": 9,
      "maxGuests": 4,
      "price": 9123,
      "__v": 1
    },
    {
      "_id": "648b4a0acb4ec12c764f4133",
      "owner": "642e87521e89eed6d7dc098c",
      "title": "Steigen Lodge Sjøhytte Våg nr 1",
      "address": "Engeløya, Nordland, Norway",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849912/Airbnb/Places/k2jkwnfij0ohtztxwp83.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849917/Airbnb/Places/v5qu23q20y84hmkxdek1.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849922/Airbnb/Places/vm36dkb3hmib3bevdzmz.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849925/Airbnb/Places/iucdtcg5v2iiqulqjxh7.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849930/Airbnb/Places/bgsppbdkmephqo0pxz99.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849940/Airbnb/Places/vcza4ogbldxazhr0hadt.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686849946/Airbnb/Places/k6revlqiieqx19foupst.jpg"
      ],
      "description": "We want everyone to experience nature as closely as possible. That's why we have built three small cabins/houses with large glass windows everywhere, so you can sit inside and enjoy the mountains, the horizon, the sea, the sunsets, and the midnight sun.\n\nIt's not always sunny on the island, so we have a comfortable sofa that can also be converted into a daybed for moments when you want to sit inside, snuggle under a blanket, watch the rain and the wind, yet still have a wonderful experience of the ever-changing nature.",
      "perks": [
        "tv",
        "wifi",
        "enterence",
        "pets",
        "radio",
        "parking"
      ],
      "extraInfo": "We have two bedrooms, one with a bunk bed and one with a double bed. All of them have large windows so you can stay in bed and be just centimeters away from spectacular nature. Most of the beds offer a sea view. There is a small loft for storage, and the cabins/house are equipped with everything you need for daily use.\n\nDespite their small size, the cabins feel spacious, and there are many private areas if you want to be alone.\n\nThe cabins are located in Vågsnesset, surrounded by the sea and mountains. There is no direct road access, so you have to walk 150 meters from the parking area. Since there is no road, you can take your coffee cup out onto the porch and be right in one of the most beautiful hiking areas of Engeløya.",
      "checkIn": 12,
      "checkOut": 10,
      "maxGuests": 6,
      "price": 96000,
      "__v": 0
    },
    {
      "_id": "648b4b34cb4ec12c764f413e",
      "owner": "642e87521e89eed6d7dc098c",
      "title": "Leafy Greens Chiangmai : Mushroom M2",
      "address": "Mueang Chiang Mai District, Chiang Mai, Thailand",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1686850296/Airbnb/Places/pxo2g99d41gujrvwrntm.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686850300/Airbnb/Places/oyalppcrknzunaqohqvj.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686850305/Airbnb/Places/veqfvwy4aq9rh8pfppag.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686850310/Airbnb/Places/ddxffjryafpqq9zlrlqa.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686850316/Airbnb/Places/v2mzj1cs44pyaiszlxnz.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1686850323/Airbnb/Places/sjogaszuhhhfmhaatke5.jpg"
      ],
      "description": "Leafy Greens was built as a retreat center for our family and friends. It is where people would visit to refreshing their souls and mind. We work so hard to make this place to be one of the place that we can live in harmony with nature. That is why the cob houses are the right choice for us. Not only the buildings are eco-friendly but also the garden is organic. Visit here you will be able to take a deep breath and enjoy the fresh air with organic environment. It is a perfect place to getaway!!",
      "perks": [
        "tv",
        "wifi",
        "parking",
        "radio",
        "enterence"
      ],
      "extraInfo": "This clay house was built for a meditation course and It was designed for people to learn being with themselves that is why the function of the house is simple. The house is 35 square meters with essential facilities. It might be considered as a tiny house, yet it’s comfortable for 3 people living together. It has 2 stories:-2 futons on the upper area is like an attic room and 1 bed on the ground floor. The entire house was made of clay (earth), it is not only an eco-friendly building but also good for our health. We believe that our body will absorb good energy from the earth, this means an earthy house brings you close to nature and eliminates bad energy out. It is a very special house for us, too special actually to keep it only for family and friends so we decided to share our paradise to everyone. Hope you would love it like we do.\n",
      "checkIn": 10,
      "checkOut": 9,
      "maxGuests": 3,
      "price": 9827,
      "__v": 0
    },
    {
      "_id": "64e4c4240b40a98595189ea9",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": " GAAJ by Green Gold Coastal Agro Resort-COTTAGE - 4",
      "address": "Palshet, Maharashtra, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1692713926/Airbnb/Places/kgose8dnycaitlrnuhjc.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692713930/Airbnb/Places/si7lbbsex3lzihfjh3of.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692713935/Airbnb/Places/n4gvmcgau5gl6q4rertr.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692713938/Airbnb/Places/khd0spp3fgvltqsysoby.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692713944/Airbnb/Places/kzhanrguhxbo3okmlyxa.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692713949/Airbnb/Places/sebgwp8j8n1cusaqnq57.jpg"
      ],
      "description": "Silent Features\n8.5 Acers sea side Property\nVirgin beach\nInfinity Pool\nMachan\nGenerator Back up\nA/C Villas\nEach Villa Have Refrigerator\nEach Villa Have Electronic Safe\nIntercom Facility\nOpen Theater\nHomely Food\nIndoor Games :- Carom,Cards\nOut door Games :- Cricket,Foot Ball,Volley Ball,Badminton\nSurrounded by Cashew , Mango & Coconut Trees",
      "perks": [
        "wifi",
        "radio",
        "enterence",
        "tv"
      ],
      "extraInfo": "We have Five Bamboo Villas ,each having Double occupancy. We can provided One Extra Bed in Each Villa.\nMore than Three Guest have to book Two bamboo Villas.",
      "checkIn": 14,
      "checkOut": 13,
      "maxGuests": 1,
      "price": 7500,
      "__v": 0
    },
    {
      "_id": "64e4c81e0b40a98595189eca",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Lake View Deluxe Double Room Alleppey",
      "address": "Kainakary South, Kerala, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1692714980/Airbnb/Places/eopo8kuwj1ayiyvzjrln.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692714984/Airbnb/Places/sw2yxy0hw6spvcxrowlj.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692714990/Airbnb/Places/enysoingabkl6jiqpyhz.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692714996/Airbnb/Places/tm2dyeq3xm5kdi95xpow.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1692715005/Airbnb/Places/zjgjjrqqcsd5kxwt9ghn.jpg"
      ],
      "description": "You could view sunset from the property. Backwater in front of our property makes you feel great and relaxed stay. Explore the backwaters and experience tranquility and its scenic surroundings. Wake up to the greetings of the sun and indulge in the classic beauty of Kerala in all its glory. My place is good for couples, solo adventurers, business travelers, families (with kids), big groups",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "enterence"
      ],
      "extraInfo": "Houseboats in Kerala, south India, are huge, slow-moving barges used for leisure trips. They are a reworked model of Kettuvallams (in the Malayalam language, Kettu means \"tied with ropes\", andvallam means \"boat\"), which, in earlier times, were used to carry rice and spices from\nKuttanad to the Kochi port. Kerala houseboats were considered a convenient means of transportation. The popularity of Kettuvallams has returned in the function as major tourist attractions. Such a houseboat is about 60 to 120 feet (18 to 36 m) long and about 15 feet (4.6 m) wide at the middle. The hull is made of wooden planks that are held together by ropes of coconut fiber; the usual wood is 'Anjili'. The roof is made of bamboo poles and palm leaves. The exterior of the boat is painted with protective coats of cashew nut oil.",
      "checkIn": null,
      "checkOut": null,
      "maxGuests": 4,
      "price": 4700,
      "__v": 0
    },
    {
      "_id": "65048befb7406825560e4278",
      "owner": "65011f53ee31c731d4c1ad16",
      "title": "Exclusive & Private Island Resort: Floral Island",
      "address": "El Nido, MIMAROPA, Philippines",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1694796609/Airbnb/Places/fxvm5vykq1gbwib7r1xb.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694796627/Airbnb/Places/x9wowqmmoqp9yzx2squf.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694796639/Airbnb/Places/rwkveenqukldtr6vax7b.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694796647/Airbnb/Places/zgy5qnalk7rvgkmckzuf.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1694796658/Airbnb/Places/kwwpo3id53wpea1grgf7.jpg"
      ],
      "description": "Floral Island Resort is nestled in the middle of Talacanen island and offers a secluded and exclusive atmosphere. With only 8 rooms, restaurant, chill-out place, bonfire- and grill on the beach and a lovely\noverlooking massage hut, Floral Island Resort is perfect for small groups up to 24 guests.\n\nWe provide you with boat transfers, healthy and fresh meals from the region (breakfast, lunch and dinner), free use of kayaks, free wi-fi in the restaurant, 24hrs. solar power and comfortable accommodation with\nprivate shower and electric fan. Drinks and other services like island hopping, fishing trips, etc. are not included. Scuba diving on request!",
      "perks": [
        "wifi",
        "tv",
        "pets",
        "enterence",
        "parking"
      ],
      "extraInfo": "IMPORTANT FACTS ABOUT THE PROPERTY\n\n- Floral Island Resort is located North-East of Palawan, on Talacanen Island, Taytay Bay and NOT in El Nido Bay (Please see our location pin on the Map). We are est. 1.5 hour away from El Nido Town Proper and 4 hours from Puerto Princesa City.\n\n- Your main Host on the Island will be my Parents, Martin (59 y/o, swiss, living in the Philippines since 1983) and my Mom Flora (58 y/o, Filipina)\n\n- Every drop of water is brought to the Island from the Mainland. We hope you respect and save water as well as possible.\n\n- Floral Island Resort is completely Solar powered. Please turn off all lights, electric Fan and other appliances if not being used .\n\n- We have a complete First Aid Set on site for minor injuries. The next hospital is in Taytay, an hour away from the Island.",
      "maxGuests": 9,
      "price": 97000,
      "__v": 0
    },
    {
      "_id": "65503adf91cc3461199d6dd7",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "LOGGINN KY@Suite B",
      "address": "Room in Bhowali, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756598/Airbnb/Places/mdajkrajzjzjwfsvyplr.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756621/Airbnb/Places/eimrusvvhmjpoknvktdg.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756630/Airbnb/Places/hzpfbl27r0whbt6ecujm.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756639/Airbnb/Places/hoomxh9uauyvco5smvqn.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756654/Airbnb/Places/od28z52oltx9fnscb3j5.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756668/Airbnb/Places/spnyjqwzpvccqd9emcnq.jpg"
      ],
      "description": "Happiness is ready to be served at Wooden Cottages at Logginn KY. Situated on a superb hill side location, only 12 km from Nainital. Logginn KY has something to suit the needs and budget of everyone. Standing in extensive grounds, LOGGINN KY offers an impressive range of facilities and an unrivalled standard of sheer comfort, complete with every basic amentity, you can take glamping to the whole new level.",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "At Logginn KY Wooden Cottages are fully furnished and equipped with every modern amenity, such as the room heater, 32” LED TV, juices, tea & coffee making facilities, as well as Free Wi-Fi internet connection. Iron & Hairdryer is also included in the room itself and the comfortable furnishings include comfortable bedding, a sofa set, luggage/store having full-length mirror. Personal reading lights, USB sockets and hidden lighting are also part of the room’s enhanced functionality. The Toilet & Bathroom is equipped with modern fixtures and has 24hour hot water supply, essentials such as towels & basic toiletries are provided is the bathroom. Spacious furnished balconies provide magnificent views of the hills and our beautiful gardens or local countryside & convenient access from road makes it ideal for family. Adequate parking space is available in the premises itself and is free of cost. Bornfire can also be organised by the Caretaker on demand.\n\nKitchen & Meals :\n- The kitchen is equipped with basic cooking utensils, a gas stove and a water dispenser.\n- The kitchen is shared and can be used at an additional cost.\n- Groceries & vegetables can be sourced from the nearby market.\n- Delicious meals can be arranged per the menu, at an additional cost.",
      "maxGuests": 3,
      "price": 2500,
      "__v": 0
    },
    {
      "_id": "65503bbb91cc3461199d6de2",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Zostel Sissu | Bed in 6 Bed Mixed Dorm",
      "address": "Room in Keylong, India",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756869/Airbnb/Places/gyhklao8dyfmgaa4fidy.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756877/Airbnb/Places/s73z8hdnbzoxu8uboaft.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756887/Airbnb/Places/njb2lco6olxqjgwan3en.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756898/Airbnb/Places/ktdomuzvp8vdvffbbodu.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756912/Airbnb/Places/kxyc2vrs4hinvrjr18nz.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756920/Airbnb/Places/aetq7ohjvg5dkdivhwbs.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699756934/Airbnb/Places/txtmklbaesntdjzpbk6g.jpg"
      ],
      "description": "Offering a spectacular view of Himalayan glaciers and the majestic Sissu waterfall, Our hostel in Sissu is your key to exploring Himachal’s enchanting Lahaul region. A sprawling space decorated with outdoor seating and a field to play volleyball welcome you into the premises. Dorm rooms with balconies make you comfortable for work and rest, while vibrant common rooms keep the fun meter alive with indoor games.",
      "perks": [
        "wifi",
        "tv",
        "radio"
      ],
      "extraInfo": "Situated at only 40 km from Manali and now made accessible by the Atal Tunnel, Sissu is a riverside hamlet perched upon a highland, in a landscape that serves as a perfect introduction to Lahaul. With every season, this village changes its colours and moods—abundantly snowy winters make way for blooming springs, which pass the ball to incredibly gorgeous autumns. Furthermore, a lake, a waterfall, multiple glacier hikes, and spectacular mountain views make this region special. And for those of you who like to explore places at length, there is a collection of brilliant, underrated, and culturally rich places you’d like to journey through in Lahaul. But for that, you must first make it to the magical village of Sissu.",
      "maxGuests": 10,
      "price": 8990,
      "__v": 0
    },
    {
      "_id": "65503ccc91cc3461199d6de7",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Domos Blue, Maxi blue",
      "address": "Room in Aquitania, Colombia",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1699757108/Airbnb/Places/nxlmu60ubrui0wsn77ev.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699757126/Airbnb/Places/hzy43n2one5fyq6ypobv.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699757137/Airbnb/Places/odfczcxuhodoxppo6cug.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699757148/Airbnb/Places/quujb6awpr11l5mu1ve9.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699757165/Airbnb/Places/zudqwsj59uodrwy5cvud.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699757175/Airbnb/Places/msqsd0i8tqiefb1ffthe.jpg"
      ],
      "description": "Dome on a rural lot on Lake Tota Peninsula, cold climate, Páramo atmosphere surrounded by nature and cultivations immersed in the beauty of Boyacense culture with a beautiful view of Lake Tota and the municipality of Aquitaine",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "pets"
      ],
      "extraInfo": "A property surrounded by nature, with access to Lake Tota, with incredible sunsets and beautiful sunrises, a space of peace and communion with nature.\n\nBreakfast does not INCLUDE BREAKFAST.\nThere is a restaurant service approximately 200 meters from glmaping, where you can order breakfast , lunch, or dinner as available. Inside the dome, there is a kitchen and utensils in case the guests wish to cook. In addition, there is a parking lot , a campfire area, and BBQ in a shared area.\n\nDue to the characteristics of the terrain , the height and the climate , we recommend using mountain clothes and packing a good coat ,so you can enjoy your stay much more, don't forget that we are 3,100 meters above sea level",
      "maxGuests": 2,
      "price": 41280,
      "__v": 0
    },
    {
      "_id": "6553547791cc3461199d6e8c",
      "owner": "655353de91cc3461199d6e7f",
      "title": "kolkata",
      "address": "kolkata",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1699959861/Airbnb/Places/ipcz1fcj7hxr5oevgogt.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699959889/Airbnb/Places/v7esry3t1bvzjrce5bvm.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699959905/Airbnb/Places/oaimm8hpfciho3sqgvzm.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699959912/Airbnb/Places/faal0k4domk2y3lfletu.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1699959921/Airbnb/Places/nmvo4kytn44g0wfbcrtk.jpg"
      ],
      "description": "gjvdvv",
      "perks": [
        "parking"
      ],
      "extraInfo": "deodhoih",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "65586d3191cc3461199d6f1a",
      "owner": "65586a9491cc3461199d6f0d",
      "title": "gugugug",
      "address": "ashtydyuugloin dfxe-cfxkuyvjl",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1700293894/Airbnb/Places/s5selngujj6pkzughmre.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700293931/Airbnb/Places/awmwolrb3oqieispitpn.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700293931/Airbnb/Places/d9z6jcdnmjcjsqjqmwxz.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700293932/Airbnb/Places/rfir5lvkydyihhclobxc.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700293933/Airbnb/Places/ulo64kqx7ahwk9ae8jop.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700293933/Airbnb/Places/mogadx1kenhjdwavb3pj.png"
      ],
      "description": "qwertyuioplkjdsazxcvbnmkjhgfdqwertyuiop",
      "perks": [],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "655effad91cc3461199d7021",
      "owner": "655eff0991cc3461199d700d",
      "title": "Test",
      "address": "Sahiwal, Punjab, Pakistan",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1700724585/Airbnb/Places/wqjcym2n4jxcaxoeiegu.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700724628/Airbnb/Places/gtrfapdsjub0ixsn7oxh.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700724637/Airbnb/Places/z3o7tcttkbrsgm18wejg.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700724642/Airbnb/Places/ouorec8gqaoy0zfiwd3l.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700724648/Airbnb/Places/l3x8tpvtnyjf3osinm2y.jpg"
      ],
      "description": "Test",
      "perks": [
        "wifi",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "Test",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "655f061591cc3461199d7040",
      "owner": "655eff0991cc3461199d700d",
      "title": "Test",
      "address": "Iris Hotel, Sahiwal, Punjab, Pakistan",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1700726244/Airbnb/Places/liqh5uvquf8mm7mij6ef.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700726255/Airbnb/Places/jrdho6hi47bcnqeigqvj.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700726260/Airbnb/Places/tjzg0ngubuin3wh3zfd6.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700726267/Airbnb/Places/o1cdxftm313hgxldmvcj.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1700726274/Airbnb/Places/aqvh8lgljyblp3myzo08.jpg"
      ],
      "description": "Test",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "pets",
        "enterence"
      ],
      "extraInfo": "Test Extra info",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "656de13939b93f6174e4c398",
      "owner": "656d762639b93f6174e4c34a",
      "title": "New Palace",
      "address": "Najafgarh",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1701699805/Airbnb/Places/m0m5yplhs4fhbfkxfcym.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701699856/Airbnb/Places/qf1zhpiyvoexrfjv1rdn.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701699875/Airbnb/Places/llzuwt6mzp8yjed0gehw.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701699884/Airbnb/Places/uqnmqmhvpxosydomolkw.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701699893/Airbnb/Places/ipks8r0robixmvxqqmfk.jpg"
      ],
      "description": "gdjhd",
      "perks": [
        "wifi",
        "parking",
        "tv"
      ],
      "extraInfo": "rjser",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "6571a66c39b93f6174e4c51e",
      "owner": "6571a57239b93f6174e4c513",
      "title": "Taj Hotel",
      "address": "Bhopal",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1701946797/Airbnb/Places/oz8vlxpyjjnvxiwcofry.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701946887/Airbnb/Places/qnds5xean40t17fknvkp.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701946886/Airbnb/Places/hgijufaycmick1peqtju.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701946940/Airbnb/Places/apyllkzuopbqo8dozkbo.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1701946972/Airbnb/Places/oaqriwmxawksbxuhcpbu.jpg"
      ],
      "description": "Best Hotel",
      "perks": [
        "wifi",
        "parking",
        "tv"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 1000,
      "__v": 0
    },
    {
      "_id": "657655218268db65ea634429",
      "owner": "657654ba8268db65ea634422",
      "title": "test",
      "address": "test",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1702253789/Airbnb/Places/zsktii9hj3urorzvxnxr.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1702253804/Airbnb/Places/aitucehynpbjk2ri31vo.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1702253809/Airbnb/Places/ualhacludqjokrqpvypx.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1702253841/Airbnb/Places/hj8y2vh7nb5evy6kcbpl.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1702253854/Airbnb/Places/jvuyjxyk4ha4b4mbea6p.jpg"
      ],
      "description": "test wow",
      "perks": [
        "wifi",
        "radio"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "6594e7263ddc8273919ffe97",
      "owner": "6594e5c93ddc8273919ffe81",
      "title": "welcome",
      "address": "Velliangiri Foothills, Mahashivaratri Grounds, Ishana Vihar, Coimbatore, Tamil Nadu 641114",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1704257186/Airbnb/Places/hifcvkgmlra3bgcvmg8p.ico",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704257287/Airbnb/Places/k3h97yykgij8dyv89zqf.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704257295/Airbnb/Places/z7z6ozgmosqxifazxoxe.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704257304/Airbnb/Places/jsdkxtz09szu0vwcc64p.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704257313/Airbnb/Places/rbu3yxio0ysmxjyactrf.jpg"
      ],
      "description": "welcome to my home",
      "perks": [
        "wifi"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 5000,
      "__v": 1
    },
    {
      "_id": "65953621420a022d6ee5ca71",
      "owner": "659534fa420a022d6ee5ca5d",
      "title": "Home sweet home",
      "address": "Shivaji Nagar",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1704277433/Airbnb/Places/olgpu9nkqbxvtxqxotu1.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704277434/Airbnb/Places/itknmhetxuccgz9cpws2.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704277436/Airbnb/Places/skgfgfare4nxsbbjvngh.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704277437/Airbnb/Places/iohrmsqviwcforcb0kdx.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704277440/Airbnb/Places/oicetbdtetstvggqrkam.jpg"
      ],
      "description": "find this place as your home",
      "perks": [
        "wifi",
        "parking",
        "tv"
      ],
      "extraInfo": "No party after 10 pm",
      "maxGuests": 3,
      "price": 5000,
      "__v": 0
    },
    {
      "_id": "659ad294420a022d6ee5cbb6",
      "owner": "659ad1b4420a022d6ee5cbac",
      "title": "my lovely apt",
      "address": "lusaka,zambia",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1704645179/Airbnb/Places/raqyf9cc8xf6dapcs8s7.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704645196/Airbnb/Places/gjc8m2fx6t0vtqkmov0e.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704645251/Airbnb/Places/lqiooqt9edc12dffvebg.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704645253/Airbnb/Places/pahuenahswhuyl6cnxk2.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704645258/Airbnb/Places/eonumxobitd3ixlcdwxl.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1704645261/Airbnb/Places/i0gxyz38kh7um9p5jicc.png"
      ],
      "description": "awesome place , you've got to love it",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "pets",
        "enterence"
      ],
      "extraInfo": "kjnonl",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "65cdde067dbcdcd39df15938",
      "owner": "659534fa420a022d6ee5ca5d",
      "title": "Beautiful Place",
      "address": "Shivaji Nagar",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1707990449/Airbnb/Places/jbbtqfc2jg74tligucr9.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1707990412/Airbnb/Places/bayusrxnlbacnfdphync.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1707990500/Airbnb/Places/aaurg5oqarmfxagbavri.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1707990502/Airbnb/Places/dunqgpincg9zhhnentsx.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1707990503/Airbnb/Places/qrcplqnd94svwsjzrxsb.png"
      ],
      "description": "qwertyuiop",
      "perks": [
        "wifi"
      ],
      "extraInfo": "no rules",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "65d03c497dbcdcd39df1599c",
      "owner": "65d03bc77dbcdcd39df1598a",
      "title": "first",
      "address": "Kolkata, West Bengal",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1708145695/Airbnb/Places/cgtolflkcewlhxqm3bh4.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1708145697/Airbnb/Places/trqr6yutcbzhwh6kpm1p.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1708145699/Airbnb/Places/pp1h02byqpotbesc31wo.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1708145702/Airbnb/Places/v0011fqi52diks5a6nv3.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1708145727/Airbnb/Places/flxo4atitgchlq6olbm5.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1708145731/Airbnb/Places/o8ium5c5u3zsrccdcvio.jpg"
      ],
      "description": "test",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets"
      ],
      "extraInfo": "test",
      "maxGuests": 10,
      "price": 50000,
      "__v": 0
    },
    {
      "_id": "65e3288e35bf32c3be5cab84",
      "owner": "65e3280635bf32c3be5cab78",
      "title": "kmkm",
      "address": "kmkm",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1709385810/Airbnb/Places/tfdi8y8sl7s0xnryxk2n.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709385853/Airbnb/Places/lurywky2sekc1nymjkmf.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709385854/Airbnb/Places/oe1wrteduryueplxf5hn.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709385855/Airbnb/Places/nlofz4ht4zpk7ct4javt.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709385857/Airbnb/Places/pr1achlkil8cuwahmqgo.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709385858/Airbnb/Places/b9hnfeezjwr8f8kibugz.png"
      ],
      "description": "kmkm",
      "perks": [
        "wifi",
        "parking",
        "radio",
        "tv",
        "enterence",
        "pets"
      ],
      "extraInfo": "kmkm",
      "maxGuests": 10,
      "price": 5000000,
      "__v": 0
    },
    {
      "_id": "65e553f707226188706697cf",
      "owner": "65e5537f07226188706697ca",
      "title": "CRM for Law Industry",
      "address": "iran,tehran",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1709528029/Airbnb/Places/in6chxwfj7tc70csr1lk.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709528036/Airbnb/Places/tfqwfz7ltbc7cez5k7jl.webp",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709528037/Airbnb/Places/ogs35no797qvkmbxaqvj.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709528037/Airbnb/Places/bnjibbimtngtrbjdxlyg.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709528038/Airbnb/Places/sjik4opsons4tlzvqrxg.webp",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709528044/Airbnb/Places/r6oeilxbikvkytaco2bb.webp"
      ],
      "description": "منامنامامامامنمامنام",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "65e6131f0722618870669843",
      "owner": "65e612b6072261887066983a",
      "title": "vpp",
      "address": "noida",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1709576951/Airbnb/Places/cfy2phdh6rgtwtxpvxji.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709576961/Airbnb/Places/fkhvnsykrnse7nheh1cj.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709576967/Airbnb/Places/dzuqsps6b0csdusvv5vt.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709576977/Airbnb/Places/cjqkbguunmeyylqzlhah.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1709576986/Airbnb/Places/h2mvynp9diy5pbm3xh6w.png"
      ],
      "description": "sdxa",
      "perks": [
        "wifi"
      ],
      "extraInfo": "sadxd",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "65f6aee57eb0dbce65095653",
      "owner": "65f6ae847eb0dbce65095640",
      "title": "22",
      "address": "222",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1710665407/Airbnb/Places/gzwacy82pm7x7mjftscq.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710665429/Airbnb/Places/shsyglhj1bekhcipcbpf.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710665434/Airbnb/Places/xehavpfmzf5rz0h8zn9x.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710665439/Airbnb/Places/gubj5whwtxis2ztwmunx.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710665442/Airbnb/Places/mwshumwxtvs6pbhgqjbe.jpg"
      ],
      "description": "sdfsdf",
      "perks": [
        "parking",
        "tv"
      ],
      "extraInfo": "qwewe",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "65fac4f37eb0dbce65095719",
      "owner": "65fac3f17eb0dbce65095712",
      "title": "Test",
      "address": "Asia",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1710933187/Airbnb/Places/mlpqgko0iumerjzspncp.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710933205/Airbnb/Places/bymfsterhp7j2znirztk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710933212/Airbnb/Places/yvghpxgmddekwhvcqmdy.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710933222/Airbnb/Places/rznssqhilzplcwelthbd.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1710933230/Airbnb/Places/n0lo2lprikfxndvqmklm.jpg"
      ],
      "description": "Fyjbbkkk",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "66298291ce6fe356e1cd04e6",
      "owner": "662981c3ce6fe356e1cd04df",
      "title": "Jgg",
      "address": "4 hgg",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1713996343/Airbnb/Places/cgeawtvmwylxcd7njxtb.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1713996377/Airbnb/Places/juwskdtah4kbqm0muih1.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1713996386/Airbnb/Places/xzdqohpxb2em3jlj8izc.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1713996397/Airbnb/Places/wkppmpg13cv1xg3uucqp.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1713996408/Airbnb/Places/ofqipqjy5nbcgy8lcsyp.jpg"
      ],
      "description": "Nice",
      "perks": [
        "parking"
      ],
      "extraInfo": "Leave before 4pm",
      "maxGuests": 1,
      "price": 5,
      "__v": 0
    },
    {
      "_id": "662ab81dce6fe356e1cd054e",
      "owner": "662ab72bce6fe356e1cd0542",
      "title": "Vv",
      "address": "Ggg",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1714075657/Airbnb/Places/rykdggyio6b27slnzeez.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714075512/Airbnb/Places/tbzgqxsq06t91dvmuari.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714075655/Airbnb/Places/mtu6yclpecngyognvbde.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714075656/Airbnb/Places/ayj7j35nf44nh06il4t7.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714075658/Airbnb/Places/qssgq6a3ho6yrbnho9ri.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714075660/Airbnb/Places/b0pwgwiwzk15zlgg2bnr.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714075672/Airbnb/Places/qgcbhonrdbggshfi8cds.jpg"
      ],
      "description": "Vvv",
      "perks": [
        "wifi",
        "parking"
      ],
      "extraInfo": "Vvv",
      "maxGuests": 10,
      "price": 500,
      "__v": 1
    },
    {
      "_id": "662de2b556f29e8e61f450b9",
      "owner": "662de1f356f29e8e61f450a1",
      "title": "check",
      "address": "sssss",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1714283150/Airbnb/Places/fgxb1vei6virj1iovghz.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714283175/Airbnb/Places/x7kxf9srzpkulibtaybs.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714283177/Airbnb/Places/swjvv4o19wpxk4x6nqlx.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714283178/Airbnb/Places/buvaxjzpkge1cdjbf43u.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714283179/Airbnb/Places/gdrb9hwd5yys6vcsg63p.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714581098/Airbnb/Places/dk57kiaedlakmodcnqvw.png"
      ],
      "description": "ghhtrhyt",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "hgh",
      "maxGuests": 10,
      "price": 500,
      "__v": 1
    },
    {
      "_id": "662ff31d5e5147037d837b0c",
      "owner": "662f01085e5147037d837a34",
      "title": "Mandi",
      "address": "HOP 222 old tree",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418315/Airbnb/Places/dltchdtdspjrfitz2xyd.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418401/Airbnb/Places/v9bfwalmjwvl0egikz6r.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418402/Airbnb/Places/kpxhvsiu3u9snoha9jpk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418403/Airbnb/Places/qz3puqh48pgygwut0eb8.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418404/Airbnb/Places/ulnjnbvjmcrirdx3wvnx.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418406/Airbnb/Places/qdyos3hglgnpacb8ins8.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418406/Airbnb/Places/vc8dfxn8ill7jwxo4h6e.jpg"
      ],
      "description": "A commercial hub and a former capital of the princely state, the heritage town retains its historic charm and character. The town was founded in 1526 AD and at the creation of Himachal Pradesh on 15 April, 1948 it made the district headquarter by merger of the princely states of Mandi and Suket",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "A commercial hub and a former capital of the princely state, the heritage town retains its historic charm and character. The town was founded in 1526 AD and at the creation of Himachal Pradesh on 15 April, 1948 it made the district headquarter by merger of the princely states of Mandi and Suket",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "662ff31e5e5147037d837b0f",
      "owner": "662f01085e5147037d837a34",
      "title": "Mandi",
      "address": "HOP 222 old tree",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418315/Airbnb/Places/dltchdtdspjrfitz2xyd.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418401/Airbnb/Places/v9bfwalmjwvl0egikz6r.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418402/Airbnb/Places/kpxhvsiu3u9snoha9jpk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418403/Airbnb/Places/qz3puqh48pgygwut0eb8.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418404/Airbnb/Places/ulnjnbvjmcrirdx3wvnx.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418406/Airbnb/Places/qdyos3hglgnpacb8ins8.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1714418406/Airbnb/Places/vc8dfxn8ill7jwxo4h6e.jpg"
      ],
      "description": "A commercial hub and a former capital of the princely state, the heritage town retains its historic charm and character. The town was founded in 1526 AD and at the creation of Himachal Pradesh on 15 April, 1948 it made the district headquarter by merger of the princely states of Mandi and Suket",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "A commercial hub and a former capital of the princely state, the heritage town retains its historic charm and character. The town was founded in 1526 AD and at the creation of Himachal Pradesh on 15 April, 1948 it made the district headquarter by merger of the princely states of Mandi and Suket",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "663cb4aeb3093276836da77f",
      "owner": "663cb237b3093276836da6fa",
      "title": "Bengaluru",
      "address": "Bengaluru,Karnataka",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1715254322/Airbnb/Places/jqmsbhmqyp9rpmby6ndz.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715254406/Airbnb/Places/waxj0deagyklnjadoxmw.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715254419/Airbnb/Places/nvcmjmy9hojfpt043iod.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715254429/Airbnb/Places/ks6bgxgv00ohlwwnhwwc.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715254438/Airbnb/Places/mv87dkncdimqj9tvsrrw.jpg"
      ],
      "description": "Best in the world",
      "perks": [
        "wifi",
        "parking",
        "enterence",
        "pets"
      ],
      "extraInfo": "Do not break anything....; )",
      "maxGuests": 10,
      "price": 50000,
      "__v": 0
    },
    {
      "_id": "6642831b86f064266ade55f9",
      "owner": "6642828886f064266ade55df",
      "title": "My apartment",
      "address": "20, Avenue Mohamed V",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1715634929/Airbnb/Places/vn6hi99jr49rpehsmxm5.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715634930/Airbnb/Places/rko0mudc91upaho6poyn.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715634931/Airbnb/Places/j4vetsspvq2ezlolzhty.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715634932/Airbnb/Places/fslhbmt6a5qt2gj4spvx.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1715634932/Airbnb/Places/phlgj6xiiuoewtkh5yhn.png"
      ],
      "description": "Description can't be empty",
      "perks": [
        "parking",
        "wifi",
        "tv",
        "radio"
      ],
      "extraInfo": "",
      "maxGuests": 3,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "6648db1a86f064266ade572c",
      "owner": "6648d9ef86f064266ade570a",
      "title": "cozy zottage",
      "address": " Shivaji Nagar, Rural Area, At Post Mudkhed, TQ Mudkhed , Dist. Nanded",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1716050564/Airbnb/Places/fx1ogpverecgdmqd8ljt.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1716050565/Airbnb/Places/zpk8vnhsw3syymr1aukq.avif",
        "https://res.cloudinary.com/rahul4019/image/upload/v1716050566/Airbnb/Places/xjyofbwk9pbmr04ryork.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1716050702/Airbnb/Places/cieisvwhy9xrnd0mul37.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1716050703/Airbnb/Places/ptyuy2l0zcen3q9nu1lc.png"
      ],
      "description": "xdcfvgbhnjmk",
      "perks": [
        "tv",
        "parking",
        "wifi"
      ],
      "extraInfo": "dfcvgbhnjm,",
      "maxGuests": 5,
      "price": 1500,
      "__v": 0
    },
    {
      "_id": "669cae4ccf67000728967d45",
      "owner": "669caddfcf67000728967d3e",
      "title": "demo",
      "address": "Muzaffarabad AJK",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1721544222/Airbnb/Places/n4ss1obfwax8t65ivss3.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721544253/Airbnb/Places/lzgxux05qcv1m5nw3pvo.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721544254/Airbnb/Places/fcjtc1xhrwn0xv43mcca.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721544255/Airbnb/Places/yx7ul1vdkt7rovuwhakp.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721544256/Airbnb/Places/yoqhpvzcgrheom8gfdg5.jpg"
      ],
      "description": "demo",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio",
        "pets",
        "enterence"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "669eeccdcf67000728967e6f",
      "owner": "669eec86cf67000728967e66",
      "title": "test",
      "address": "Costa Rica",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1721691334/Airbnb/Places/kilwwo7a8yjgw5oxmmon.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721691314/Airbnb/Places/uxkdwuekz3xxplckvbrv.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721691331/Airbnb/Places/lc6dy5n2h3mk53gznrim.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721691332/Airbnb/Places/rh95tcl1tulm5wf4x4ai.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721691333/Airbnb/Places/bj8ehkrpwbc3w6duymjs.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1721691339/Airbnb/Places/iuz2a0kq6q9fuvhlwmc5.jpg"
      ],
      "description": "tyry yrt yu ryu ryur tyur uy",
      "perks": [
        "wifi",
        "parking"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 1
    },
    {
      "_id": "66a997275e7b4df82a1456ee",
      "owner": "66a85df55e7b4df82a1456a0",
      "title": "My listings",
      "address": "delhi",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1722390256/Airbnb/Places/usxah58glq0x7dqjkxgk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722390293/Airbnb/Places/skaysuhlo9pguwmuls8v.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722390294/Airbnb/Places/ttlwffqkbarnsk8txz9d.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722390296/Airbnb/Places/i0akp6pnbor9xk9ti9ud.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722390297/Airbnb/Places/rvh1crtjytkpjkpqeoqp.png"
      ],
      "description": "adasd",
      "perks": [
        "wifi"
      ],
      "extraInfo": "adfa",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "66b0816ff6b61aa4e58a1d67",
      "owner": "66b07cedf6b61aa4e58a1d38",
      "title": "icon",
      "address": "icon address",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1722843460/Airbnb/Places/a7hdp0u7ttf6kmixutcy.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722843472/Airbnb/Places/qfuyoy1kon3ym5z71ieb.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722843479/Airbnb/Places/b5xnwa553ymzh2diu82k.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722843485/Airbnb/Places/virg0hwnp5neolnrd16d.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1722843489/Airbnb/Places/uh8ehpbmbdqtnrnrmzyy.jpg"
      ],
      "description": "sdasdasfjfkjn",
      "perks": [
        "tv",
        "enterence"
      ],
      "extraInfo": "csadfasdfsdfsdf",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "66cda2acf6b61aa4e58a2093",
      "owner": "66cda0fff6b61aa4e58a2084",
      "title": "totoplace",
      "address": "totoaddress",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1724752488/Airbnb/Places/ak8uw4hlvllsbou57xjo.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1724752536/Airbnb/Places/ldud151gqnyzacwrforg.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1724752537/Airbnb/Places/qgksnepv077jfnxqrg4o.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1724752539/Airbnb/Places/zbfma1fkkox5j3fw1xle.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1724757911/Airbnb/Places/v4huji0zj6enaxkprwju.jpg"
      ],
      "description": "This is a rabbit",
      "perks": [],
      "extraInfo": "extra rabbit for max 15 days",
      "maxGuests": 10,
      "price": 1,
      "__v": 1
    },
    {
      "_id": "66d494e3f6b61aa4e58a21d0",
      "owner": "644fefc86570e42d58f1adfa",
      "title": "test",
      "address": "2016",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1725207744/Airbnb/Places/dvavr33p3mpfixfvmeny.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725207745/Airbnb/Places/lzyqh7vlqzfyeecv625p.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725207747/Airbnb/Places/epp3ewryqmcbo8ozjbm8.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725207748/Airbnb/Places/zypivuq2ylbmua2cz5mk.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725207774/Airbnb/Places/ivj1ekuijbvggyez1y2v.jpg"
      ],
      "description": "test",
      "perks": [],
      "extraInfo": "test",
      "maxGuests": 1,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "66dac4e9a4e7cac17987a41b",
      "owner": "66dac34af6b61aa4e58a2341",
      "title": "smashdown",
      "address": "Hyderabad ",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1725613200/Airbnb/Places/mdu4ot1udqdjkt2vk2jg.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725613208/Airbnb/Places/boxftuzxacu1bccp5r3t.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725613272/Airbnb/Places/razota0zxssiehzyydlo.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725613276/Airbnb/Places/pfo5pw2t1p7klcv0fe96.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1725613285/Airbnb/Places/glcncryjdcxaqws9ziye.jpg"
      ],
      "description": "khatharom ka khiladi.\nbe aware of cctv's....",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "enterence"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 5000,
      "__v": 0
    },
    {
      "_id": "66ef0bcaa8bc4a8754f10d4d",
      "owner": "66ea7ce7b900ce4652927476",
      "title": "hary",
      "address": "patna",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1726942066/Airbnb/Places/cress3nxbfvazxqkcxgg.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1726942095/Airbnb/Places/kmjfvf2hyiddhif66jy4.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1726942114/Airbnb/Places/zzeiycbpkf4chteyfwkw.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1726942124/Airbnb/Places/xrdwxxfjb6pbf00mp8zg.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1726942147/Airbnb/Places/gusgj9tpr6vbg34r9jet.jpg"
      ],
      "description": "good place",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "radio"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "670438a1b8cc950a542675c6",
      "owner": "670437a3b8cc950a542675b2",
      "title": "Kaliningrad",
      "address": "Kaliningrad, 1",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1728329858/Airbnb/Places/mojvjmwki4euwttfoslw.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728329862/Airbnb/Places/sjd3z7ufbr21t3cikjzw.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728329869/Airbnb/Places/cq51ork2zsvyjd0k9az1.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728329873/Airbnb/Places/uzrv5nyqvrpauy5hhtdc.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728329877/Airbnb/Places/znefvsxfgmmqvykvsdrz.jpg"
      ],
      "description": "Testingno",
      "perks": [
        "wifi",
        "tv"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 5000,
      "__v": 0
    },
    {
      "_id": "670673abb8cc950a54267766",
      "owner": "6706735cb8cc950a54267761",
      "title": "Kamare valley",
      "address": "palghar",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1728476042/Airbnb/Places/qaimw2hueykujp2wwbl7.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728476067/Airbnb/Places/gvpwo0nf2ob4bomdprbr.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728476069/Airbnb/Places/mfaqllkjztpfaot7msf7.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728476070/Airbnb/Places/kh5fc0iuqfn6ru2sj9c2.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728476071/Airbnb/Places/q72flblblqefzohwd8sy.png"
      ],
      "description": "Lorem Ipsuium",
      "perks": [
        "wifi",
        "parking",
        "tv",
        "pets",
        "enterence"
      ],
      "extraInfo": "",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    },
    {
      "_id": "670d1f5ad5f656cfe6ced892",
      "owner": "670d1eaad5f656cfe6ced880",
      "title": "tytutyut ",
      "address": "rytutyuty u",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1728913188/Airbnb/Places/x7cxqshbdtxb2scl62qt.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728913196/Airbnb/Places/ke1kg2xopn2c8ynxteih.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728913207/Airbnb/Places/a9nxccnrscbizvzsqsiv.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728913226/Airbnb/Places/bmqre2a5pcmcsyn4plur.png",
        "https://res.cloudinary.com/rahul4019/image/upload/v1728913235/Airbnb/Places/jpu7yjo4m2h6z2fgejeq.png"
      ],
      "description": "tyuryurtyutyuriurirtiruirt irirturturtyuri",
      "perks": [
        "parking"
      ],
      "extraInfo": "5y7yutuyuiiu ",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    }
  ];
  constructor() {}

  ngOnInit() {

  }

}
