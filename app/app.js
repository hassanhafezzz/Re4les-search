'use strict';

(function() {
    var app = angular.module('app',  ['rzModule']);

    app.controller('mainController', ['$scope','$http', '$q', '$log',mainController]);

    function mainController($scope, $http, $q, $log){
      var vm = this;
      $scope.query = {
         price__gte :  1000,
         price__lt : 4000,
      };

      var autocomplete = new google.maps.places.Autocomplete(document.getElementById('nav-search'), {
        types: ['geocode']
      });
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        $scope.$evalAsync(fillInAddress);
      });

      function fillInAddress() {
        var place = autocomplete.getPlace();
        $scope.query.coords = [place.geometry.location.lat(), place.geometry.location.lng()];
      }

      $scope.response = {
        "count": 60,
        "next": "http://192.168.33.55:8000/api/listings/search.json?page=2&text=villa",
        "previous": null,
        "results": [
          {
            "description": "Frontline beach a few meters from Puerto Banús this impressive contemporary villa of recent construction and modern design rises, the property is distributed on 3 floors with 7 bedrooms, 7 bathrooms and 2 toilets. On the main floor is a spacious living room equipped with fireplace, fully furnished and equipped with all appliances, 2 bedrooms, 1 bathroom and 1 toilet huge American-style open kitchen. On the first floor there is a huge master bedroom with ensuite and dressing room, 3 bedrooms with 3 bathrooms ensuite, several terraces with stunning panoramic sea views. In the basement are 1 bedroom with bathroom for guests or service, laundry room, machine room, bar, theater, sauna and gym. Excellent finishing with quality materials, Italian marble floors and heating system, AC / DC Central heat pump throughout the house, home control system, private parking for 3 cars. On the outside, spacious private garden with pool and large jacuzzi, direct access to the beach, great location next to the Golden Mile of Marbella, 5 minutes from the city center and few meters from the port, close to entertainment and shopping. Useful M²: 1168m² M² built: 1168m² M² plot: 1873m²",
            "offer": "buy",
            "text": "7 bedroom detached villa for sale\nNone\nN N",
            "image": "/media/cache/16/c3/16c3fa10233e656be50720e8e941c153.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "7 bedroom detached villa for sale",
            "absolute_url": "/listing/7-bedroom-detached-villa-for-sale-2/",
            "beds": 0,
            "coords": "0, 0",
            "type": "detached-villa",
            "price": 14900000
          },
          {
            "description": "A very impressive mansion on a cul-de-sac street in the much sought-after estate of La Zagaleta. This property has the most amazing, open sea views and of the whole area. A driveway leads to the main entrance of this very special property. The accommodation is distributed on 3 levels and comprises, on entrance level: large hall with cathedral ceiling which leads to the split level living area with dining room; large drawing room with a huge fireplace; beautiful, lovely sun room with fireplace and wooden floor enjoying the most magnificent coastal views; library; fully glassed-in and spacious porch; guest toilet; very spacious and modern kitchen with access to another glassed-in porch with fireplace and walk-in cool room; en-suite bedroom. Upstairs: landing with wooden floor and with views to the entrance hall; en-suite master bedroom with fireplace, 2 offices, one with fireplace, \"his\" and \"her\" bathrooms, 2 dressing rooms and access to 3 terraces on different sides of the property. Lower level: small reception area; home cinema; laundry room; children's play room; wine cellar; 2 large en-suite bedrooms with sitting areas and with spectacular views; Turkish bath with shower; beautiful indoor swimming pool with incredible views to the sea; massage room. The garden area is levelled with various ponds and cascades and on the lowest level there is an amazing freeform swimming pool with pool house in the middle and pool kitchen aside; 3 separate Bali-type guest houses with en-suite bedrooms and various terraces with beautiful Balinese decorations. There is also a lift coming down to the guest house area. Extra features: underfloor heating throughout the main house, air conditioning, separate garage for 3 cars, separate staff quarters including 2 bedrooms, bathroom and living area. An absolutely amazing and very special property, it must be viewed to be appreciated!",
            "offer": "buy",
            "text": "7 bedroom villa for sale\nBenahavís, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/8a/92/8a927846fb076adaefb88fc6f61039f5.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "7 bedroom villa for sale",
            "absolute_url": "/listing/7-bedroom-villa-for-sale/",
            "beds": 0,
            "coords": "36.51802, -5.04297",
            "type": "villa",
            "price": 13000000
          },
          {
            "description": "The history of this hidden gem begins in the 50 s in Kenya, where the legendary Hollywood heartthrob Stewart Granger was filming King Solomon s Mines. In love with those places, he found in this valley of 80 hectares on the Costa del Sol the ideal spot for building an estate of indescribable beauty, surrounded by completely virgin vegetation, tropical gardens and mountains with panoramic views, all completely fenced, enabling walks to explore on horseback or by car. The cottage itself, which is reached through a long avenue lined with 30 palm trees, was designed by renowned architect Manuel Camisuli and is an amalgam of Andalusian, Arabian and Mexican influences. The main door of the sixteenth century gives access to the central courtyard and all the rooms, completely renovated in 2015. Its 11 suites with fireplace feature fine craftsmanship details, such as wrought iron decorated with rosettes or redpine beams reinforced with bamboo. The kitchen enjoys in its dining area of a Venetian marble table, surrounded by Sevillian tiles. The lounge surprises with its wonderful roofing and the fireplace, crowned with an antique mantel, conceals a craft fence behind which you can access through a few marble steps the main chambers with a huge bathroom and an amazing dressing room with beautifully carved and painted doors. In the garden, the heated pool and jacuzzi are surrounded by a bar area. The estate also features several water wells, a private heliport and a guest house with separate entrance at the top of the mountain. A hidden treasure, only 5 minutes from the sea. The New Golden Mile Beachside is the stretch of coastline on the Costa del Sol, between the west of Marbella and the town of Estepona. Dotted with a host of superb restaurants, trendy beach clubs, luxury hotels, shops, boutiques and amenities, life here is easy, fun and ideal for both holidays and permanent residence. Some of the exclusive beachside hotels and resorts include the five-star Hotel Kempinski, Las Dunas Hotel and the Selena Thalasso Spa. The beach clubs include Laguna Village, Puro Beach and the Villa Padierna Palace´s Beach Club which belongs to the only 6 * hotel in Spain, Villa Padierna.  The popular area features frontline beach residences and urbanizations including exclusive villas, townhouses, modern apartments and penthouses with breathtaking sea views. An excellent price to quality ratio here makes the smart choice for the discerning buyer seeking a beachside property on the Costa del Sol.  Estepona, Puerto Banús and Marbella centre are all within a five to fifteen minute drive and Málaga and Gibraltar airports are easily reached within 45 min.",
            "offer": "buy",
            "text": "11 bedroom villa for sale\nEstepona, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/05/e1/05e15ab589f9d963c9dbbd9659547612.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "11 bedroom villa for sale",
            "absolute_url": "/listing/11-bedroom-villa-for-sale/",
            "beds": 0,
            "coords": "36.42979, -5.14475",
            "type": "villa",
            "price": 12500000
          },
          {
            "description": "Outstanding villa in Sotogrande Alto, offering panoramic views towards the sea, Gibraltar, Africa and mountains. Situated only a few minutes drive from Sotogrande Port, the prestigious Valderrama golf course and other amenities. The main features include a fabulous private garden with swimming pool, air conditioning hot/ cold, marble floors, fully fitted kitchen, games room, cinema room, garage for 20 cars, and so much more!<br />REF: R2307689<br /><br />(Posted by proppyrealestate.com)",
            "offer": "buy",
            "text": "8 bedroom villa for sale\nCádiz, CA, Andalucía, Spain\nN N",
            "image": "/media/cache/1e/cb/1ecb772e5278de906c6b037309594b89.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "8 bedroom villa for sale",
            "absolute_url": "/listing/8-bedroom-villa-for-sale/",
            "beds": 0,
            "coords": "36.5267, -6.2863",
            "type": "villa",
            "price": 13000000
          },
          {
            "description": "Fabulous luxury property  with impressive space and classical proportions just minutes from local amenities, the beach, Marbella and the connecting motorways from Gibraltar to Malaga.<br /><br />Situated in a  peaceful  area of Guadalmina  this exceptional villa comes with  enormous dimensions , and sits beautifully in 20.000m2 of expertly landscaped gardens and has its own stables, paddocks and a tennis court.<br /> Built in a neo classic style, the best materials have been used throughout and the property has beautiful sea and mountain views. <br /><br />Distributed over 3 floors:<br />Entrance level: central indoor patio; large hall; large industrial kitchen with breakfast area; storage room; main reception room with adjacent formal dining room on one side and TV room on the other side; 2 large bedroom suites with private upstairs living room; 2 guest suites and guest WC.<br /> Top floor: master bedroom suite, dressing and bathroom, 1 guest bedroom with bathroom, private office, library.<br /> Basement level: 6 car garage, fully equipped gymnasium, indoor heated swimming pool; Jacuzzi; wine cellar; dining area; games room; cold pool; Turkish bath; shower room; massage room; laundry.<br /><br /> Exteriors: gallery; terraces; extensive landscaped French gardens; salt water pool; central lake; orchard; machine room.<br /><br />There is underfloor heating throughout and a lift that connects all floors. <br /><br />This is a substantial and luxury property offering the highest level of lifestyle in Marbella.",
            "offer": "buy",
            "text": "6 bedroom villa for sale\nMarbella, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/96/6b/966b25a0de5c50819024fb495c68241e.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "6 bedroom villa for sale",
            "absolute_url": "/listing/6-bedroom-villa-for-sale/",
            "beds": 0,
            "coords": "36.48552, -4.98452",
            "type": "villa",
            "price": 12750000
          },
          {
            "description": "Amazing and unique 7 bedroom mansion, situated within a quiet and peaceful area on a cul-de-sac, within a highly sought development, with stunning views towards the sea and of the whole area. <br /><br />Accessed via a private driveway, this superb villa comprises of:<br />Entrance level: large entrance hall with cathedral ceiling and access to the split level living area with dining room; large drawing room with a huge fireplace; beautiful sun room with fireplace and wooden floor enjoying the most magnificent coastal views; library; fully glassed-in and spacious porch; guest WC; very spacious and modern kitchen with access to another glassed-in porch with fireplace and walk-in cool room; en-suite bedroom. <br /><br />Upstairs: landing with wooden floor and views to the entrance hall; en-suite master bedroom with fireplace, 2 offices, 1 with fireplace, his & her bathrooms, 2 dressing rooms and access to 3 terraces on different sides of the property. <br /><br />Lower level: small reception area; home cinema; laundry room; children's play room; wine cellar; 2 large en-suite bedrooms with sitting areas and spectacular views; Turkish bath with shower; beautiful indoor swimming pool with incredible sea views; massage room. <br /><br />Garden area: levelled with various ponds and cascades and on the lowest level there is an amazing freeform swimming pool with pool house in the middle and pool kitchen aside; 3 separate Bali-type guest houses with en-suite bedrooms and various terraces with beautiful Balinese decorations. There is also a lift coming down to the guest house area. <br /><br />Extra features include:<br />- Underfloor heating throughout the main house<br />- Air conditioning<br />- Separate 3 car garage<br />- Separate staff quarters (2 bedrooms, bathroom and living area)<br /><br />This is an absolutely amazing and very special property.",
            "offer": "buy",
            "text": "7 bedroom villa for sale\nBenahavís, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/65/e2/65e2c92f54efaf7a2a3b3d04423392fe.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "7 bedroom villa for sale",
            "absolute_url": "/listing/7-bedroom-villa-for-sale-2/",
            "beds": 0,
            "coords": "36.51802, -5.04297",
            "type": "villa",
            "price": 13000000
          },
          {
            "description": "GUADALMINA ALTA. A superior luxurious residence designed as a Roman Palladium, set in extensive gated grounds, containing a salt water olympic sized swimming pool & whirl pool, fabulous water features with curved jet streams, fountains, a lake enhanced by a bridge joining the central island, ponds, crocodile lake, pavilions, tennis court, riding area and horse boxes. Built over three levels with vast terraces and positioned in a high and elevated region with views over the garden and the distant coastline. This residence comprises of an imperial entrance hall, Andalusian inner courtyard with fountains, reception room, dining room, cinema room, industrial sized kitchen, two guest suites with living areas, two guest suites, guest cloakroom and stately columned sheltered terrace. First floor offers master suite with dressing room, fireplace, jacuzzi bath & separate glass enclosed shower, library and fifth guest suite. Lower ground floor has a laundry room, snooker room, indoor heated swimming pool, whirlpool, relaxation room, sauna, Turkish bath, Roman style cold water plunge pool, shower room, gym, wine bar & cellar and garage for six cars. Finished to the finest of qualities, intricate in-laid marble floors, wood floors, fabulous columns, underfloor heating, air conditioning, massage showers all round sound system, alarm and well & purified water system. The electric video entry system allows one to enter a privileged world of total luxury, every detail attended to for the most discerning and meticulous security conscious client, blending beauty, tranquillity, uniqueness with perfection and grandnes. Must be seen!<br />REF: R734320<br /><br />(Posted by proppyrealestate.com)",
            "offer": "buy",
            "text": "6 bedroom villa for sale\nPorcuna, Jaén, Andalucía, Spain\nN N",
            "image": "/media/cache/96/d4/96d432f6ab25786091237e782ab6247a.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "6 bedroom villa for sale",
            "absolute_url": "/listing/6-bedroom-villa-for-sale-2/",
            "beds": 0,
            "coords": "37.83144, -4.2229",
            "type": "villa",
            "price": 12750000
          },
          {
            "description": "Magnificent villa in Los Monteros, 10 bedrooms and 8 bathrooms, consisting of a main house, guest house and pavilion. This unique location guarantees total privacy and tranquility with exceptionally uninterrupted panoramic views of the famous golf course of Los Monteros, the Sierra Blanca mountains and the coast of the Mediterranean and into Africa.<br />REF: R2152999<br /><br />(Posted by proppyrealestate.com)",
            "offer": "buy",
            "text": "10 bedroom villa for sale\nPorcuna, Jaén, Andalucía, Spain\nN N",
            "image": "/media/cache/61/f6/61f6fd103fac7b0f4ffc365394aca598.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "10 bedroom villa for sale",
            "absolute_url": "/listing/10-bedroom-villa-for-sale/",
            "beds": 0,
            "coords": "37.83144, -4.2229",
            "type": "villa",
            "price": 12900000
          },
          {
            "description": "<b>Luxurious Beach Front Villa</b>\n<br />\n<br />Often referred to as the most luxurious Villa on Spain's Costa del Sol, this villa is truly a jewel nestled in the heart of paradise. \n<br />\n<br />Enjoying 180 degree ocean views this 2,250 m2 built home sits ideally on a 7,000 m2 plot of beautifully landscaped gardens. \n<br />\n<br />Conveniently situated just off the main N.340 motorway to Malaga the villa was designed with practicality, peace and privacy in mind. \n<br />\n<br />The large gardens offer many quiet areas where you can sit back, relax and enjoy the sounds of the Mediterranean Sea gently lapping against the 2 km of shore line and the direct beach access that this impressive villa enjoys. \n<br />\n<br />In the past its team of staff have had the pleasure of welcoming Royalty, Presidents,Billionaires, Sheikhs and Superstars. Some of whom return year after year and others that tell us that they will \"treasure the memories of their stay here forever\". \n<br />\n<br />Even the world famous \"One Direction\" gave their debut performance here in the X factor \"judges homes\" screening. \n<br />\n<br />All bedrooms are en Suite and enjoy fantastic sea views towards Africa.\n<br />\n<br /><b>Paradise</b>\n<br />\n<br />-------------------------------------\n<br />\n<br /><b>MARBELLA FOR LESS</b>\n<br />\n<br />\"Marbella For Less\", as our name suggests, specialise in finding the latest bargain properties in Marbella and surrounding areas. Our team of experienced property professionals spend a great deal of time researching the local property market in order to offer our clients the best deals available in the Marbella area.\n<br />\n<br />Drawing on many years of experience we have a particular focus on Marbella property, and property in the surrounding areas of Nueva Andalucia, Puerto Banus, La Quinta, Aloha, and The Golden Mile. These areas are amongst the most sought-after in Europe given their unrivalled location between the beautiful La Concha Mountain on one side and the Mediterranean Sea on the other and are all within easy reach of Málaga international airport just 40 minutes away.\n<br /> \n<br />Whether you require a studio apartment or a front line beach villa we guarantee that you will not find a wider selection of bargain properties anywhere. Our aim is to offer a professional and personal, one on one service, that clients will not find anywhere else. Due to the fantastic prices which are currently available more and more investors are taking advantage of the current global situation and are snapping up the best bargains as soon as they appear on the market, so make sure you subscribe to our FREE NEWSLETTER so that you receive all the latest property bargains as they happen.\n<br />Marbella for Less also collaborate with every agency along the Coast, therefore we have access to not only our own properties but ANY property for sale on the Costa del Sol. Please feel free to request information on any properties you come across, even if they are not featured on our website and we will furnish you with full details for that property. \n<br />\n<br />Whether you want to be close to all the numerous shops, bars, restaurants, marinas, and nightlife that the coast has to offer or you want to be away from it all enjoying a game of golf on one of the many courses or retreat to a secluded hilltop villa in an area such as La Zagaleta, which we are particular specialists in, then you will not find a better selection of properties than Marbella For Less can offer you. With over 30 years' experience in the Costa del Sol property market, we have built up a network of valuable contacts and have an unrivalled knowledge of the market which can only be achieved by giving outstanding service to our clients, borne out by the numerous testimonials we receive.\n<br />\n<br />With Marbella For Less you do not get the hard sell and we do not employ commission only salespeople. The majority of our clients come from recommendations and we are proud of the reputation which we have built. We will only show you properties which fit your criteria and budget unlike some agencies that steer their clients towards properties which give them the highest commission.\n<br />\n<br />Give us a try - Marbella For Less give you \"That Old Fashioned Courteous Service\" and we promise that you will not be disappointed.\n<br />\n<br /><b>Looking To Sell Your Property In Marbella?</b>\n<br />\n<br />Marbella For Less are specialists in the Marbella property market and have a constant stream of clients looking to buy in the area as a result of our on-going international marketing. Although we cover the whole of the Costa del Sol our marketing is concentrated on Marbella and with one of the largest property portfolios on Rightmove Overseas for the Marbella region we have a huge database of clients to market your property to. \n<br />\n<br /><b>Please give us a call today on 03339396277 or 34 951 204 227\n<br />\n<br />View our full list of over 20,000 properties for sale at www.marbellaforless.com</b>\n<br />",
            "offer": "buy",
            "text": "12 bedroom villa for sale\nMarbella, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/93/bb/93bbfb9d9f4225f392ee1e017202abe6.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "12 bedroom villa for sale",
            "absolute_url": "/listing/12-bedroom-villa-for-sale/",
            "beds": 0,
            "coords": "36.51468, -4.87064",
            "type": "villa",
            "price": 40000000
          },
          {
            "description": "This is truly the most amazing estate of hacienda dimensions in the very heart of the exclusive and gated urbanisation of Sierra Blanca in the hills of Marbella. When you are asking for the biggest, the most exclusive, the most private and the most impressive, this is it! Nothing compares to this ample mansion in cortijo/French castle style built in the centre of a 17.000m2 plot with manicured, lush, tropical gardens with a huge infinity pool, several putting greens and an outdoor tennis court for entertainment. The impressive landscaped driveway leads to an entrance with an ample parking space for 10 or more vehicles. Entering the cortijo like patio with a fountain in its centre one steps into a world of Louis XIV of France. An impressive salon with double height ceiling and beautiful views over the Mediterranean is the centrepiece of this grandeur estate. This villa with 7 bedrooms en-suite, dining room, chimney room, ample fitted kitchen and al fresco dining has everything for a luxury lifestyle. The basement contains the amazing SPA area with a bar, bodega, roman indoor pool, sauna, Jacuzzi, hamam and a professional cinema room. Together with separate staff quarters and a big car garage for 6 cars round up this magnificent Mansion with the very best panoramic sea views Sierra Blanca has to offer. Sierra Blanca is the most luxurious and elegant gated community in Marbella, also known as the Beverly Hills of the Costa del Sol due to the most beautiful villas and the elegant flair of the community. Sierra Blanca boasts 24 hours security service and consists mostly of private houses. Properties for sale in Sierra Blanca are of high demand from international wealthy clients who search for exclusivity, security and privacy while being close to Marbella's city centre, amenities and the beach. In this exclusive residential community there are two apartment complexes, El Alfar and Lagos de Sierra Blanca. The international renowned school Swans is situated just next to Sierra Blanca.",
            "offer": "buy",
            "text": "7 bedroom villa for sale\nOjén, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/43/b7/43b7c132984930f801ac7ddae3f3e6fd.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "7 bedroom villa for sale",
            "absolute_url": "/listing/7-bedroom-villa-for-sale-3/",
            "beds": 0,
            "coords": "36.566667, -4.9",
            "type": "villa",
            "price": 22500000
          },
          {
            "description": "A magnificent FRONTLINE beach mansion set in the grounds of the Puente Romano Hotel. Built on three levels, this impressive property is accessed through a private driveway and ornate gardens. The accommodation consists of, ground floor:- entrance hall; guest cloakroom; fully fitted and equipped kitchen with independent entrance; utility room; dining room with steps leading to a bright lounge; two en-suite guest bedrooms with direct access to the terrace with sea views. The lower floor:-  games room;  lounge with minstrels gallery and French windows leading to a covered terrace with bar; guest cloakroom with shower and changing facilities and a large swimming pool with direct access to the gardens and beach. The upper floor:- master bedroom with en-suite Jacuzzi bathroom, dressing room; en-suite guest bedroom. Other features include eight working fireplaces, wine cellar, pool bar, BBQ area with covered terrace. There are separate staff quarters with two bedrooms and one bathroom.<br />REF: R2578358<br /><br />(Posted by proppyrealestate.com)",
            "offer": "buy",
            "text": "8 bedroom villa for sale\nPorcuna, Jaén, Andalucía, Spain\nN N",
            "image": "/media/cache/ee/49/ee4926ebb0e905abd04ef286571f1802.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "8 bedroom villa for sale",
            "absolute_url": "/listing/8-bedroom-villa-for-sale-2/",
            "beds": 0,
            "coords": "37.83144, -4.2229",
            "type": "villa",
            "price": 20000000
          },
          {
            "description": "Superb 7 bedroom, 7 bathroom villa, located in a very sought after area in Marbella, with panoramic sea and mountain views. <br /><br />This spectacular contemporary-style mansion, built using top quality fixtures and fittings, has a substantial living area of 1,846m2, which is set out over 3 levels, which comprises of:<br />Ground floor: entrance hall; living room with fireplace; dining room; kitchen with top quality appliances; lounge with access to 2 en-suite bedrooms; guest WC; garage for 3 cars; large covered terrace with sea views.<br /><br />Upstairs: master en-suite bedroom with private terrace; lounge with access to 2 further en-suite bedrooms sharing a terrace. <br /><br />Lower level: spa area with Jacuzzi; gym; cinema/games room; 2 bedrooms sharing a bathroom; guest WC; staff apartment with en-suite bedroom and independent access. <br /><br />Mature garden with heated swimming pool. <br /><br />This is a unique property in an excellent location.<br /><br />",
            "offer": "buy",
            "text": "7 bedroom villa for sale\nMarbella, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/3e/75/3e75c8c5c588d9857f35e7c1e409c498.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "7 bedroom villa for sale",
            "absolute_url": "/listing/7-bedroom-villa-for-sale-4/",
            "beds": 0,
            "coords": "36.51468, -4.87064",
            "type": "villa",
            "price": 15900000
          },
          {
            "description": "This spectacular mansion is situated in one of Europe s most famous private properties! Apart from its spectacular location,  La Zagaleta  offers two golf courses with respective club houses, a private riding course, 24-hours security service, restaurants, tennis courts as well as all kinds of services (banking, babysitters, limousine service) which can be used additionally.  This villa offers an unobstructed view over La Zagaleta, San Pedro up to the sea and the African coast. During 4 years this property was constructed by the architect   Pablo Villarroel  and only the most precious material was used (by: Marieux, handmade blown crystal glass, different kinds of marble: Bianco Statuario, Onyx ...). There is a library storing 2500 volumes, home-cinema for 18 persons and fully equipped according to latest technical standards, a SPA, fully equipped kitchen with lift and fireplace, three dinner areas, all constructed differently, a bodega/wine cellar, staff quarters (2 ensuites), pool house with changing rooms to name only a few details which stand for the luxuriously equipped interior decoration. A private mansion which was rightfully named  Palazzo delle Luce ! La Zagaleta Golf & Country Club is widely regarded as being the most prestigious and sought after address in Europe. This magnificent country estate of almost 900 hectares (2.200 acres) is situated in one of the most beautiful areas of the Costa del Sol, only 15 minutes from Marbella and Puerto Banús. La Zagaleta enjoys breath-taking views of the Mediterranean, Strait of Gibraltar, North African coast, its own golf courses and the stunning Serranía de Ronda mountain range. La Zagaleta enjoys quiet and natural surroundings with individual villas and plots. Amongst the private facilities members can enjoy the stunning 5.100 m2 clubhouse. It includes a pro-shop, restaurant, bars, swimming pool, billiard room, bridge room, function room, clay and hard surface tennis courts, bowling alley and pistol range. A separate equestrian centre has exceptional facilities including personal instruction on one of the clubs Spanish or Arab horses, or ponies and Farabella horses for the younger riders. There are 23 stables and 4 rings for the horses belonging to La Zagaleta and property owners and also changing and leisure facilities. Obviously one of the most prestigious country clubs in Europe would not be complete without its own heliport recognised by the Civil Aviation Authorities. La Zagaleta spoils you with a choice of 2 private 18-hole courses. The original course designed by the Californian Bradford Benz has been joined recently by a second course Los Barrancos with its own separate Clubhouse.  Office Marbella - Puerto Banús / Costa del Sol",
            "offer": "buy",
            "text": "7 bedroom villa for sale\nBenahavís, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/78/4a/784abede7ee99d2593612fc3d22db97f.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "7 bedroom villa for sale",
            "absolute_url": "/listing/7-bedroom-villa-for-sale-5/",
            "beds": 0,
            "coords": "36.543784, -5.023665",
            "type": "villa",
            "price": 16700000
          },
          {
            "description": "Due for completion in June 2016 this truly breathtaking modern, opulent villa is currently under construction in La Zagaleta, one of the most exclusive residential communities in Europe, and boasts uninterrupted, panoramic views of the countryside, mountains, and Mediterranean. Once completed, it will offer well over 2,000m2 of light-filled, flexible living spaces on three levels, including an entire 'entertainment' floor on the sub-garden level.    The wealth of accommodation includes, on the entry level, double-height hallway with lift; leading to an expansive living room, with full-width glass doors to the terrace; a dining room; a second sitting room; a 55m2 kitchen, with its own dining area; and two guest bedrooms, both with en-suite bathrooms. The upper level houses the master suite - with sitting area, dressing room, bathroom, and semi-covered terrace - as well as two en-suite bedrooms, both with dressing areas and access to the terrace.    The lower entertainment level contains two additional guest suites, both with living rooms; office; cinema; wine cellar, with tasting room; gym and fitness suite; bar and entertainment area by the indoor infinity pool and jacuzzi. There's garage space for at least six vehicles, with sufficient additional room for an entire car collection, if desired. Outdoors, set in landscaped gardens, a chill-out area and barbecue overlooks the infinity swimming pool and jacuzzi.    The property has been designed with range of energy-efficient features, to cut running costs to a minimum, and will be finished to an incredibly high standard, in keeping with its surroundings. Residents of La Zagaleta enjoy access to two members-only golf courses, equestrian centre, club house, and heliport, all located on a 2,200-acre former hunting estate, less than 15 minutes' drive from Marbella and Puerto Banús. The property is offered fully furnished with bespoke made to measure contemporary furniture. For more information, visit the Heaven 11 website.",
            "offer": "buy",
            "text": "8 bedroom villa for sale\nBenahavís, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/bb/6c/bb6c9345c7a9c57fe78223d944159d21.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "8 bedroom villa for sale",
            "absolute_url": "/listing/8-bedroom-villa-for-sale-3/",
            "beds": 0,
            "coords": "36.543784, -5.023665",
            "type": "villa",
            "price": 16500000
          },
          {
            "description": "Stunning second-line beach mansion in El Paraíso Barronal, just a 10-minute drive to Puerto Banús. Constructed on a palatial level and totally renovated around 8 years ago, with many quality and luxury fittings. Situated in a quiet residential area, this completely private mansion distributed over 2 levels comprises, on ground floor: impressive entrance hall with skylight; gallery leading to an enormous living room with access to a covered porch and the garden; TV/cinema room; dining room, industrial-style kitchen by Siematic with access to terrace; en-suite bedroom; guest toilet. Upstairs: en-suite master bedroom with dressing rooms, seating area and access to terrace; 3 en-suite bedrooms; gym and sauna. Guest house with panoramic sea views, built over 3 levels: 2 en-suite bedrooms and storage on the ground floor, 2 further en-suite bedrooms on the first level and a roof terrace with lovely sea views and overlooking the garden. Caretakers house built over one level with 2 bedrooms, lounge, kitchen and bathroom. Wine cellar with temperature control and capacity for 500 botles. Closed garage for 4 cars. Amazing mature, landscaped garden perfectly maintained, with automatic irrigation system, a variety of plants and fruit trees, pool of 25x10 metres, African lodge with imported material and a sophisticated \"al fresco\" designer house with an exceptional BBQ and outdoor bar. All-season tennis court with lighting and artificial grass and automatic irrigation. Features include: built-in water cascade, water softener system, dual water system, security glass windows, perimetral alarm, centralised music system, electricity generator, underfloor heating. There is a potential license to build a 1,000-m2 house on the premises. A unique property, a paradise steps to the beach!",
            "offer": "buy",
            "text": "10 bedroom villa for sale\nEstepona, Málaga, Andalucía, Spain\nN N",
            "image": "/media/cache/b0/a9/b0a9289cd81c7b29f357f9bec1de973e.jpg",
            "agent": "N N",
            "currency": "EUR",
            "baths": 0,
            "size": 0,
            "title": "10 bedroom villa for sale",
            "absolute_url": "/listing/10-bedroom-villa-for-sale-3/",
            "beds": 0,
            "coords": "36.42979, -5.14475",
            "type": "villa",
            "price": 15000000
          }
        ]
      }
      $scope.houses = $scope.response.results;
      $scope.slider = {
          options: {
              floor: 0,
              ceil: 5000,
              step: 100
          }
      };


      $scope.search = function () {
        var jsonQuery= angular.toJson($scope.query);
        // var jsonQuery= JSON.stringify($scope.query);
        console.log($scope.query);

        $http({
          method: 'GET',
          headers : {'Accept' : 'application/json'},
          url: 'http://192.168.33.55:3000/api/listings/search.json',
          params: jsonQuery
        }).then(function(response) {
           $scope.response.results = response;
        })
        .catch(function(response) {
          $log.error('Error retrieving projects for the keyword (): ' + response.statusText);
          return $q.reject('Error retrieving data.');
        })

      }
    }
}());
