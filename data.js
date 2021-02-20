class Article {
    constructor(category, date, title, img, points, comments) {
        this.category = category;
        this.date = date;
        this.title = title;
        this.img = img;
        this.points = points;
        this.comments = comments;
    }
}

const data = [];
data.push(new Article('bulgaria', '16.02.2021', 'Положението е трагично', 'images/data/0.jpg', '44', '4'));
data.push(new Article('bulgaria', '16.02.2021', 'Родната журналистика', 'images/data/1.jpg', '19', '4'));
data.push(new Article('bulgaria', '15.02.2021', 'В памет на полит елита', 'images/data/2.jpg', '41', '3'));
data.push(new Article('bulgaria', '15.02.2021', 'Високо, високо, високо!', 'images/data/3.jpg', '15', '6'));
data.push(new Article('bulgaria', '15.02.2021', 'Ugh...when you just wake-up and life allready is hating you', 'images/data/4.jpg', '12', '4'));
data.push(new Article('funny', '17.02.2021', 'Being rich comes with a price', 'images/data/5.jpg', '0', '19'));
data.push(new Article('funny', '17.02.2021', 'Texas never fails to entertain', 'images/data/6.jpg', '2010', '332'));
data.push(new Article('funny', '17.02.2021', 'Okay, class bring out your laptops and we rush at B site', 'images/data/7.jpg', '977', '55'));
data.push(new Article('funny', '17.02.2021', 'Is it fair?', 'images/data/8.jpg', '1045', '86'));
data.push(new Article('funny', '17.02.2021', 'F1 driver crashing at 200 mph vs. Soccer player getting shirt pulled.', 'images/data/9.jpg', '0', '13'));
data.push(new Article('nsfw', '19.02.2021', 'Who is this?', 'images/data/10.jpg', '323', '25'));
data.push(new Article('nsfw', '19.02.2021', 'Year of the Ox.', 'images/data/11.jpg', '0', '10'));
data.push(new Article('nsfw', '19.02.2021', 'Motherf**ker', 'images/data/12.jpg', '0', '4'));
data.push(new Article('nsfw', '19.02.2021', 'A man needs a link!', 'images/data/13.jpg', '92', '12'));
data.push(new Article('nsfw', '19.02.2021', 'Ashley Louise James', 'images/data/14.jpg', '0', '3'));
data.push(new Article('girl', '19.02.2021', 'Charly Jordan', 'images/data/15.jpg', '217', '8'));
data.push(new Article('girl', '19.02.2021', 'Love a flannel.', 'images/data/16.jpg', '110', '9'));
data.push(new Article('girl', '19.02.2021', 'School girl dress up, yay or nay?', 'images/data/17.jpg', '66', '4'));
data.push(new Article('girl', '19.02.2021', 'Emma Jones - Leeds Utd TV Presenter', 'images/data/18.jpg', '110', '5'));
data.push(new Article('girl', '19.02.2021', 'Nicole Deliah', 'images/data/19.jpg', '73', '0'));
data.push(new Article('wtf', '19.02.2021', 'If I didn\'t have a nose I would have been Voldemort...', 'images/data/20.jpg', '0', '48'));
data.push(new Article('wtf', '19.02.2021', 'Real inspirational Donald', 'images/data/21.jpg', '115', '14'));
data.push(new Article('wtf', '19.02.2021', 'Crows', 'images/data/22.jpg', '168', '8'));
data.push(new Article('wtf', '19.02.2021', 'Sweet merciful Christ...', 'images/data/23.jpg', '46', '18'));
data.push(new Article('wtf', '19.02.2021', 'Dang dude', 'images/data/24.jpg', '4236', '139'));
data.push(new Article('cryptocurrency', '19.02.2021', 'This is how close ETH is to a massive breakout', 'images/data/25.jpg', '9', '1'));
data.push(new Article('cryptocurrency', '19.02.2021', 'Black or yellow Lambo?', 'images/data/26.jpg', '0', '3'));
data.push(new Article('cryptocurrency', '19.02.2021', 'It\'s an okay post I would say', 'images/data/27.jpg', '5', '1'));
data.push(new Article('cryptocurrency', '19.02.2021', 'My actual portfolio, in total 1.700€ Tell me your thoughts', 'images/data/28.jpg', '12', '50'));
data.push(new Article('cryptocurrency', '19.02.2021', 'Bitcoin hitting this high and is now Dogecoin time', 'images/data/29.jpg', '0', '1'));
data.push(new Article('animeAndManga', '19.02.2021', 'Works for me', 'images/data/30.jpg', '137', '5'));
data.push(new Article('animeAndManga', '19.02.2021', 'Too weak Sasuke', 'images/data/31.jpg', '20', '1'));
data.push(new Article('animeAndManga', '19.02.2021', 'Yes, I am not crying...', 'images/data/32.jpg', '29', '2'));
data.push(new Article('animeAndManga', '19.02.2021', 'Mei Terumi', 'images/data/33.jpg', '197', '10'));
data.push(new Article('animeAndManga', '19.02.2021', 'A thigh one', 'images/data/34.jpg', '37', '0'));
data.push(new Article('random', '19.02.2021', 'Open', 'images/data/35.jpg', '2173', '468'));
data.push(new Article('random', '19.02.2021', 'That\'s a comfy sponge.', 'images/data/36.jpg', '82', '5'));
data.push(new Article('random', '19.02.2021', 'Double Standards', 'images/data/37.jpg', '102', '10'));
data.push(new Article('random', '19.02.2021', 'Nothing to see here. Keep scrolling', 'images/data/38.jpg', '137', '20'));
data.push(new Article('random', '19.02.2021', 'They last longer when you dry them after use. It is true though.', 'images/data/39.jpg', '321', '36'));
data.push(new Article('animals', '19.02.2021', 'Horses are such majestic creatures', 'images/data/40.jpg', '117', '13'));
data.push(new Article('animals', '19.02.2021', 'Safe and sound', 'images/data/41.jpg', '17', '1'));
data.push(new Article('animals', '19.02.2021', 'Pallas cat', 'images/data/42.jpg', '55', '2'));
data.push(new Article('animals', '19.02.2021', 'Me too ;-)', 'images/data/43.jpg', '41', '6'));
data.push(new Article('animals', '19.02.2021', 'Smaug protecting his hoard', 'images/data/44.jpg', '14', '0'));
data.push(new Article('animeWaifu', '19.02.2021', 'Eagle jump waifu #644 Wedding time?', 'images/data/45.jpg', '13', '12'));
data.push(new Article('animeWaifu', '19.02.2021', 'Sexy sucrose', 'images/data/46.jpg', '18', '0'));
data.push(new Article('animeWaifu', '19.02.2021', '"Giri choco?"', 'images/data/47.jpg', '9', '1'));
data.push(new Article('animeWaifu', '19.02.2021', '"Stay with me~"', 'images/data/48.jpg', '16', '0'));
data.push(new Article('animeWaifu', '19.02.2021', 'Hikari', 'images/data/49.jpg', '41', '0'));
data.push(new Article('awesome', '19.02.2021', 'Fun fact : Mars is 100% populated by robots.', 'images/data/50.jpg', '1913', '148'));
data.push(new Article('awesome', '19.02.2021', 'Well deserved after a long and fulfilling career', 'images/data/51.jpg', '134', '15'));
data.push(new Article('awesome', '19.02.2021', 'This is nubra valley in Ladakh, India', 'images/data/52.jpg', '146', '6'));
data.push(new Article('awesome', '19.02.2021', 'Lady of the Metro, Me, oil on canvas, 2021', 'images/data/53.jpg', '308', '20'));
data.push(new Article('awesome', '19.02.2021', 'Dragon glass', 'images/data/54.jpg', '200', '12'));
data.push(new Article('car', '19.02.2021', '1998 Quaife R4 GTS Road Car', 'images/data/55.jpg', '0', '2'));
data.push(new Article('car', '19.02.2021', 'Washing my baby today', 'images/data/56.jpg', '7', '3'));
data.push(new Article('car', '19.02.2021', 'MX-5 Roadster: 1.8L 187hp (2000)', 'images/data/57.jpg', '16', '12'));
data.push(new Article('car', '19.02.2021', 'Half your recommended daily dose of Ferrari', 'images/data/58.jpg', '3', '1'));
data.push(new Article('car', '19.02.2021', 'Lamborghini Essenza SCV12', 'images/data/59.jpg', '12', '2'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Sry, but I had to use my paint skills and correct it', 'images/data/60.jpg', '0', '12'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Bullshit', 'images/data/61.jpg', '230', '18'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Truely', 'images/data/62.jpg', '509', '7'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Learning with Lead', 'images/data/63.jpg', '162', '13'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Viva South Africa Viva', 'images/data/64.jpg', '49', '0'));
data.push(new Article('cosplay', '19.02.2021', 'JIUQUCKA as Jeanne d\'Arc', 'images/data/65.jpg', '0', '0'));
data.push(new Article('cosplay', '19.02.2021', 'CyberYennefer by oksana_frost', 'images/data/66.jpg', '11', '0'));
data.push(new Article('cosplay', '19.02.2021', 'Mashu Cosplay by Hana Bunny', 'images/data/67.jpg', '10', '0'));
data.push(new Article('cosplay', '19.02.2021', 'Swan Princess Odette cosplay by Le_Atlass', 'images/data/68.jpg', '5', '0'));
data.push(new Article('cosplay', '19.02.2021', 'Bunny Girl Mashu Cosplay by HedY', 'images/data/69.jpg', '11', '0'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Cyberpunk 2077', 'images/data/70.jpg', '11', '5'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Pulp fiction reference', 'images/data/71.jpg', '164', '8'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Rita wheeler fanart', 'images/data/72.jpg', '103', '7'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Cyberpunk 2077 - Johnny Silverhand stroking the furry wall', 'images/data/73.jpg', '14', '0'));
data.push(new Article('cyberpunk2077', '18.02.2021', 'You did great today choom <3', 'images/data/74.jpg', '27', '3'));
data.push(new Article('gaming', '19.02.2021', 'Took me 5 treats to get the right pose', 'images/data/75.jpg', '122', '15'));
data.push(new Article('gaming', '19.02.2021', 'Can you name them all?', 'images/data/76.jpg', '0', '8'));
data.push(new Article('gaming', '19.02.2021', '40€ for one year', 'images/data/77.jpg', '23', '28'));
data.push(new Article('gaming', '19.02.2021', 'The King', 'images/data/78.jpg', '271', '10'));
data.push(new Article('gaming', '19.02.2021', 'You died', 'images/data/79.jpg', '10', '4'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Supreme', 'images/data/80.jpg', '69', '7'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Elizabeth Turner', 'images/data/81.jpg', '19', '0'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Charlize Theron', 'images/data/82.jpg', '19', '0'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Caity Lotz', 'images/data/83.jpg', '17', '0'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Monica Bellucci', 'images/data/84.jpg', '16', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Shurima trailer be like', 'images/data/85.jpg', '10', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Support disapear', 'images/data/86.jpg', '6', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Fiddlesticks', 'images/data/87.jpg', '3', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Reject modernity, embrace old champions', 'images/data/88.jpg', '3', '1'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Now that\'s a lot of damage', 'images/data/89.jpg', '10', '4'));
data.push(new Article('meme', '19.02.2021', 'Hey, you! You reading this?', 'images/data/90.jpg', '0', '3'));
data.push(new Article('meme', '19.02.2021', 'All the single birdies...', 'images/data/91.jpg', '120', '2'));
data.push(new Article('meme', '19.02.2021', 'Despite the age ^ ~ thought it was funny!', 'images/data/92.jpg', '120', '4'));
data.push(new Article('meme', '19.02.2021', 'Will you?', 'images/data/93.jpg', '40', '4'));
data.push(new Article('meme', '19.02.2021', 'GPS took me home.', 'images/data/94.jpg', '28', '1'));
data.push(new Article('politics', '19.02.2021', 'A developed country', 'images/data/95.jpg', '0', '15'));
data.push(new Article('politics', '19.02.2021', 'Medieval Conservatives', 'images/data/96.jpg', '0', '19'));
data.push(new Article('politics', '19.02.2021', 'Ted Cruz did Nothing Wrong', 'images/data/97.jpg', '98', '15'));
data.push(new Article('politics', '19.02.2021', 'Fixed it', 'images/data/98.jpg', '0', '5'));
data.push(new Article('politics', '19.02.2021', 'Real democrats', 'images/data/99.jpg', '0', '4'));
data.push(new Article('relationship', '19.02.2021', 'Never-ending sandwich', 'images/data/100.jpg', '73', '9'));
data.push(new Article('relationship', '19.02.2021', 'Your reminder to give them a hug', 'images/data/101.jpg', '33', '10'));
data.push(new Article('relationship', '19.02.2021', 'Happens all the time. Right?', 'images/data/102.jpg', '17', '3'));
data.push(new Article('relationship', '19.02.2021', 'The nerve of some people!', 'images/data/103.jpg', '347', '24'));
data.push(new Article('relationship', '19.02.2021', '*Jealous*', 'images/data/104.jpg', '631', '10'));
data.push(new Article('savage', '19.02.2021', 'Gas pump (doesn\'t) go brrrrr', 'images/data/105.jpg', '0', '16'));
data.push(new Article('savage', '19.02.2021', 'But math and economics are sexist', 'images/data/106.jpg', '0', '10'));
data.push(new Article('savage', '19.02.2021', 'Saving as much battery as he can', 'images/data/107.jpg', '1272', '76'));
data.push(new Article('savage', '19.02.2021', 'Call of Duty Unique Insult', 'images/data/108.jpg', '27', '6'));
data.push(new Article('savage', '19.02.2021', 'League of Roasts', 'images/data/109.jpg', '0', '0'));
data.push(new Article('amongUs', '20.02.2021', '*distant sobbing*', 'images/data/110.jpg', '4', '6'));
data.push(new Article('amongUs', '20.02.2021', 'When you and your sister both get Impostor', 'images/data/111.jpg', '25', '5'));
data.push(new Article('amongUs', '20.02.2021', 'Host abusing their power 101', 'images/data/112.jpg', '20', '0'));
data.push(new Article('amongUs', '20.02.2021', 'We are missing one person among us', 'images/data/113.jpg', '0', '0'));
data.push(new Article('amongUs', '20.02.2021', 'Imposter and Ghost Chat', 'images/data/114.jpg', '37', '1'));
data.push(new Article('animeWallpaper', '20.02.2021', '"Festival of Fire" Lumine & Paimon', 'images/data/115.jpg', '6', '0'));
data.push(new Article('animeWallpaper', '20.02.2021', 'Zenith Greyrat', 'images/data/116.jpg', '7', '0'));
data.push(new Article('animeWallpaper', '20.02.2021', 'Houshou Marine', 'images/data/117.jpg', '7', '0'));
data.push(new Article('animeWallpaper', '20.02.2021', 'Kyaru', 'images/data/118.jpg', '14', '0'));
data.push(new Article('animeWallpaper', '19.02.2021', 'Idol Ayame', 'images/data/119.jpg', '16', '0'));
data.push(new Article('apexLegends', '20.02.2021', 'Wraith be like', 'images/data/120.jpg', '4', '0'));
data.push(new Article('apexLegends', '20.02.2021', 'Happy 2nd-anniversary Apex Legends!', 'images/data/121.jpg', '2', '0'));
data.push(new Article('apexLegends', '20.02.2021', 'C\'mon man!', 'images/data/122.jpg', '2', '0'));
data.push(new Article('apexLegends', '20.02.2021', 'Every Apex update ever', 'images/data/123.jpg', '6', '1'));
data.push(new Article('apexLegends', '20.02.2021', 'Thicc daddy caustic', 'images/data/124.jpg', '3', '0'));
data.push(new Article('ask9GAG', '20.02.2021', 'Anyone has a collection of this from beginning to end?', 'images/data/125.jpg', '12', '6'));
data.push(new Article('ask9GAG', '20.02.2021', 'Who do you feel more sorry for? The lady, the guy or the horse?', 'images/data/126.jpg', '10', '22'));
data.push(new Article('ask9GAG', '20.02.2021', 'I have no (social) life. What about your streak?', 'images/data/127.jpg', '3', '13'));
data.push(new Article('ask9GAG', '20.02.2021', 'I don\'t know what to do honestly.', 'images/data/128.jpg', '12', '84'));
data.push(new Article('ask9GAG', '20.02.2021', 'Does anyone have a clue?', 'images/data/129.jpg', '10', '38'));
data.push(new Article('coronavirus', '20.02.2021', 'Possible to bomb china now?', 'images/data/130.jpg', '14', '12'));
data.push(new Article('coronavirus', '20.02.2021', 'The state of Michigan has a very high percentage of black deaths', 'images/data/131.jpg', '2', '5'));
data.push(new Article('coronavirus', '20.02.2021', 'Just that', 'images/data/132.jpg', '15', '26'));
data.push(new Article('coronavirus', '19.02.2021', 'Unless your friends are anti-vax', 'images/data/133.jpg', '17', '19'));
data.push(new Article('coronavirus', '19.02.2021', 'I could definitely use some vacations or a bj. Or a bj during vacations.', 'images/data/134.jpg', '16', '5'));
data.push(new Article('countryballs', '20.02.2021', 'This is a evolutive meme. Feel free to alter it.', 'images/data/135.jpg', '19', '2'));
data.push(new Article('countryballs', '19.02.2021', 'Stop Sign Stronk', 'images/data/136.jpg', '14', '1'));
data.push(new Article('countryballs', '19.02.2021', 'The USA and another disaster', 'images/data/137.jpg', '38', '3'));
data.push(new Article('countryballs', '19.02.2021', 'Replace nuclear winter with regular winter', 'images/data/138.jpg', '76', '4'));
data.push(new Article('countryballs', '18.02.2021', 'Stoopid british', 'images/data/139.jpg', '389', '37'));
data.push(new Article('cozyAndComfy', '20.02.2021', 'Simplon-Orient-Express (London to Venice)', 'images/data/140.jpg', '287', '16'));
data.push(new Article('cozyAndComfy', '20.02.2021', 'Home libraries {820 X 1025}', 'images/data/141.jpg', '16', '6'));
data.push(new Article('cozyAndComfy', '20.02.2021', 'Chicago Bathroom Renovation Finally Finished', 'images/data/142.jpg', '19', '9'));
data.push(new Article('cozyAndComfy', '20.02.2021', 'Dogs, plants, and cozy lights. All you need.', 'images/data/143.jpg', '18', '2'));
data.push(new Article('cozyAndComfy', '20.02.2021', 'Perfect little spot for a lil cat nap.', 'images/data/144.jpg', '8', '0'));
data.push(new Article('crappyDesign', '20.02.2021', 'Perfect alignment.', 'images/data/145.jpg', '120', '10'));
data.push(new Article('crappyDesign', '20.02.2021', 'Getting blasted with notifications was fine until they used clickbait', 'images/data/146.jpg', '5', '2'));
data.push(new Article('crappyDesign', '20.02.2021', 'They made the words blend more with the background so it\'s harder to see', 'images/data/147.jpg', '4', '2'));
data.push(new Article('crappyDesign', '20.02.2021', 'How big is are things?', 'images/data/148.jpg', '14', '7'));
data.push(new Article('crappyDesign', '20.02.2021', 'No carts on the new carpet...', 'images/data/149.jpg', '4', '1'));
data.push(new Article('drawingDIY_AndCrafts', '20.02.2021', 'Tonights painting~', 'images/data/150.jpg', '24', '2'));
data.push(new Article('drawingDIY_AndCrafts', '20.02.2021', 'Do you like it?', 'images/data/151.jpg', '86', '5'));
data.push(new Article('drawingDIY_AndCrafts', '20.02.2021', 'Squidward', 'images/data/152.jpg', '14', '2'));
data.push(new Article('drawingDIY_AndCrafts', '20.02.2021', 'I am making realistic Pokémon in 3D.', 'images/data/153.jpg', '5146', '291'));
data.push(new Article('drawingDIY_AndCrafts', '20.02.2021', 'Procrastinate life, with art.', 'images/data/154.jpg', '417', '14'));
data.push(new Article('fashionAndBeauty', '20.02.2021', 'Be nice :)', 'images/data/155.jpg', '3', '2'));
data.push(new Article('fashionAndBeauty', '20.02.2021', 'Earth kingdom 1s', 'images/data/156.jpg', '2', '0'));
data.push(new Article('fashionAndBeauty', '20.02.2021', 'Rocker look with rainbows and leopard print', 'images/data/157.jpg', '2', '1'));
data.push(new Article('fashionAndBeauty', '20.02.2021', 'Technically racing overalls are an out fit', 'images/data/158.jpg', '3', '0'));
data.push(new Article('fashionAndBeauty', '20.02.2021', 'Magical', 'images/data/159.jpg', '5', '0'));
data.push(new Article('foodAndDrinks', '20.02.2021', 'Brownies', 'images/data/160.jpg', '11', '0'));
data.push(new Article('foodAndDrinks', '20.02.2021', 'Kimchee scrambled egg and ham toastie', 'images/data/161.jpg', '1', '0'));
data.push(new Article('foodAndDrinks', '20.02.2021', 'Blueberry Apple Pie', 'images/data/162.jpg', '7', '0'));
data.push(new Article('foodAndDrinks', '20.02.2021', 'Sunflower Seed and Raisin Breakfast Oats Porridge', 'images/data/163.jpg', '5', '0'));
data.push(new Article('foodAndDrinks', '20.02.2021', 'Homemade double cheeseburger', 'images/data/164.jpg', '9', '0'));
data.push(new Article('football', '20.02.2021', 'Brasileirão table with 2 matchdays remaining', 'images/data/165.jpg', '4', '1'));
data.push(new Article('football', '19.02.2021', 'Current UEFA League Ranking', 'images/data/166.jpg', '7', '4'));
data.push(new Article('football', '19.02.2021', 'Barcelona\'s wage list is abysmal...', 'images/data/167.jpg', '15', '5'));
data.push(new Article('football', '19.02.2021', 'Uefa cup and Europa League winners', 'images/data/168.jpg', '20', '7'));
data.push(new Article('football', '19.02.2021', 'Remontada not looking possible this time for Barca', 'images/data/169.jpg', '15', '3'));
data.push(new Article('fortnite', '20.02.2021', 'Kerberos ((SKIN CONCEPT))', 'images/data/170.jpg', '1', '0'));
data.push(new Article('fortnite', '20.02.2021', 'New street fighter skin looks great!', 'images/data/171.jpg', '1', '0'));
data.push(new Article('fortnite', '20.02.2021', 'This update wasn\'t tooooo bad guys! It has car damage!', 'images/data/172.jpg', '1', '0'));
data.push(new Article('fortnite', '20.02.2021', 'Current state of agent jonesy', 'images/data/173.jpg', '1', '0'));
data.push(new Article('fortnite', '20.02.2021', 'Chill vibes', 'images/data/174.jpg', '1', '0'));
data.push(new Article('gameOfThrones', '20.02.2021', 'KING IN THE NORTH', 'images/data/175.jpg', '9', '1'));
data.push(new Article('gameOfThrones', '19.02.2021', 'I wish it could be truth...', 'images/data/176.jpg', '13', '6'));
data.push(new Article('gameOfThrones', '18.02.2021', 'Last seen on holiday in Texas!', 'images/data/177.jpg', '26', '2'));
data.push(new Article('gameOfThrones', '18.02.2021', 'Congratulations!', 'images/data/178.jpg', '32', '6'));
data.push(new Article('gameOfThrones', '18.02.2021', 'Traveling after Corona', 'images/data/179.jpg', '31', '4'));
data.push(new Article('guy', '20.02.2021', 'Burn in 7', 'images/data/180.jpg', '0', '0'));
data.push(new Article('guy', '20.02.2021', 'Leander', 'images/data/181.jpg', '37', '2'));
data.push(new Article('guy', '20.02.2021', 'Douglas Scott Wreden AKA Doug Doug', 'images/data/182.jpg', '20', '0'));
data.push(new Article('guy', '20.02.2021', 'Henry Cavill smoldering in b&w', 'images/data/183.jpg', '0', '0'));
data.push(new Article('guy', '20.02.2021', 'Young David Duchovny', 'images/data/184.jpg', '8', '0'));
data.push(new Article('history', '20.02.2021', 'You had to look at his heel and poof', 'images/data/185.jpg', '5', '0'));
data.push(new Article('history', '20.02.2021', 'Ann Margret (1960s)', 'images/data/186.jpg', '2', '0'));
data.push(new Article('history', '20.02.2021', 'Sally Field, 1970s', 'images/data/187.jpg', '2', '0'));
data.push(new Article('history', '20.02.2021', 'Lynn-Holly Johnson (late 1970\'s)', 'images/data/188.jpg', '1', '1'));
data.push(new Article('history', '20.02.2021', 'Sigourney Weaver, 1979', 'images/data/189.jpg', '3', '0'));
data.push(new Article('horror', '19.02.2021', '"Hungry" by myself', 'images/data/190.jpg', '17', '0'));
data.push(new Article('horror', '19.02.2021', 'This Seaside Castle In Scotland', 'images/data/191.jpg', '16', '2'));
data.push(new Article('horror', '19.02.2021', 'You played yourself', 'images/data/192.jpg', '11', '0'));
data.push(new Article('horror', '19.02.2021', 'Hungry Tonight', 'images/data/193.jpg', '4', '0'));
data.push(new Article('horror', '19.02.2021', 'Abandoned church on Santorini, Greece', 'images/data/194.jpg', '22', '3'));
data.push(new Article('k-Pop', '20.02.2021', 'Eunha x3 (Weverse)', 'images/data/195.jpg', '0', '0'));
data.push(new Article('k-Pop', '20.02.2021', 'Eunha Weverse Update', 'images/data/196.jpg', '2', '0'));
data.push(new Article('k-Pop', '20.02.2021', 'WJSN - Chengxiao', 'images/data/197.jpg', '0', '0'));
data.push(new Article('k-Pop', '20.02.2021', '210220 Saku no Ki Blog Update With Miyawaki Sakura', 'images/data/198.jpg', '7', '0'));
data.push(new Article('k-Pop', '20.02.2021', 'GFriend Japan Twitter Update with Yerin', 'images/data/199.jpg', '5', '0'));
data.push(new Article('latestNews', '20.02.2021', 'Mars rover...', 'images/data/200.jpg', '43', '2'));
data.push(new Article('latestNews', '20.02.2021', 'More science fiction from disgusting China!', 'images/data/201.jpg', '23', '11'));
data.push(new Article('latestNews', '20.02.2021', 'A blessing from the God\'s.', 'images/data/202.jpg', '30', '33'));
data.push(new Article('latestNews', '20.02.2021', 'The question everyone should be asking is', 'images/data/203.jpg', '29', '10'));
data.push(new Article('latestNews', '19.02.2021', 'Who took the picture on Mars?', 'images/data/204.jpg', '241', '40'));
data.push(new Article('lego', '20.02.2021', 'I am this old. Who remembers the good old Western themes?', 'images/data/205.jpg', '17', '1'));
data.push(new Article('lego', '20.02.2021', 'Completed LEGO Whizzing Arrow!', 'images/data/206.jpg', '3', '1'));
data.push(new Article('lego', '20.02.2021', 'F14 Tomcat by Jeroen Ottens vs Lego 42066 (more pics in comments)', 'images/data/207.jpg', '7', '7'));
data.push(new Article('lego', '20.02.2021', 'Porsche added to the garage', 'images/data/208.jpg', '1', '0'));
data.push(new Article('lego', '20.02.2021', 'Brickheadz Snoppy', 'images/data/209.jpg', '7', '0'));
data.push(new Article('marvelAndDC', '20.02.2021', 'Oh Agnes, who among us hasn\'t?', 'images/data/210.jpg', '0', '4'));
data.push(new Article('marvelAndDC', '20.02.2021', 'I truly do miss The Mandolorian, this will do for now.', 'images/data/211.jpg', '27', '10'));
data.push(new Article('marvelAndDC', '20.02.2021', 'Missed opportunity right there...', 'images/data/212.jpg', '12', '0'));
data.push(new Article('marvelAndDC', '20.02.2021', 'Who\'s the Best MCU Villain?', 'images/data/213.jpg', '0', '0'));
data.push(new Article('marvelAndDC', '20.02.2021', 'Superman by Juan Ferreyra', 'images/data/214.jpg', '0', '1'));
data.push(new Article('movieAndTV', '20.02.2021', 'Where are his balls?', 'images/data/215.jpg', '240', '5'));
data.push(new Article('movieAndTV', '20.02.2021', 'The difference a horrible mistake of a hair cut makes!', 'images/data/216.jpg', '13', '6'));
data.push(new Article('movieAndTV', '20.02.2021', 'Help me Step-Scientist... I\'m Stuck', 'images/data/217.jpg', '6', '2'));
data.push(new Article('movieAndTV', '20.02.2021', 'Hello new friends!', 'images/data/218.jpg', '10', '1'));
data.push(new Article('movieAndTV', '20.02.2021', 'Watching Disney Marvel Physics', 'images/data/219.jpg', '15', '4'));
data.push(new Article('music', '20.02.2021', 'The Last Pannonian sailor RiP', 'images/data/220.jpg', '15', '1'));
data.push(new Article('music', '20.02.2021', 'UNLIMITED POWER!', 'images/data/221.jpg', '29', '8'));
data.push(new Article('music', '20.02.2021', 'Times when going to concerts was all about living the moment', 'images/data/222.jpg', '29', '10'));
data.push(new Article('music', '20.02.2021', 'Missing you on your Birthday, Kurt Cobain (Singer | Songwriter | Musician)', 'images/data/223.jpg', '23', '11'));
data.push(new Article('music', '20.02.2021', 'The Cure during quarantine...', 'images/data/224.jpg', '27', '2'));
data.push(new Article('nba', '20.02.2021', 'Switch Michael jordan and lebron\'s era. many people will hate mj until his post retirement', 'images/data/225.jpg', '0', '1'));
data.push(new Article('nba', '20.02.2021', 'Top 10 NCAA Tournament wins All-Time chart', 'images/data/226.jpg', '0', '0'));
data.push(new Article('nba', '18.02.2021', 'In honor of tonight\'s Capital City Classic, let\'s remember what will never change', 'images/data/227.jpg', '1', '0'));
data.push(new Article('nba', '20.02.2021', 'If Warriors lose tonight, they\'ll be consistent at losing after winning two games throughout the season.', 'images/data/228.jpg', '1', '1'));
data.push(new Article('nba', '17.02.2021', 'Enjoyed the cold, snowy, midwestern Saturday in the newly finished basement sports book and College Basketball.', 'images/data/229.jpg', '1', '0'));
data.push(new Article('overwatch', '20.02.2021', 'Some non-enemy NPCs in OW2', 'images/data/230.jpg', '0', '0'));
data.push(new Article('overwatch', '20.02.2021', 'Overwatch this year be like', 'images/data/231.jpg', '0', '0'));
data.push(new Article('overwatch', '20.02.2021', 'Blizzcon about OW1', 'images/data/232.jpg', '2', '0'));
data.push(new Article('overwatch', '20.02.2021', 'Can we all just admit that this was the best part?', 'images/data/233.jpg', '1', '0'));
data.push(new Article('overwatch', '20.02.2021', 'Hanzo contemplating life', 'images/data/234.jpg', '0', '0'));
data.push(new Article('pcMasterRace', '20.02.2021', 'Oh how the turntables', 'images/data/235.jpg', '0', '11'));
data.push(new Article('pcMasterRace', '20.02.2021', 'Cries in intel integrated graphics', 'images/data/236.jpg', '0', '6'));
data.push(new Article('pcMasterRace', '20.02.2021', 'Sad day, boys. RIP', 'images/data/237.jpg', '13', '8'));
data.push(new Article('pcMasterRace', '20.02.2021', 'Makes me cry...', 'images/data/238.jpg', '292', '5'));
data.push(new Article('pcMasterRace', '20.02.2021', 'It is done! My first ever build.', 'images/data/239.jpg', '10', '8'));
data.push(new Article('pokemon', '20.02.2021', 'Surprise Cameo of Philza Minecraft', 'images/data/240.jpg', '6', '1'));
data.push(new Article('pokemon', '20.02.2021', 'Say aaa.', 'images/data/241.jpg', '6', '0'));
data.push(new Article('pokemon', '19.02.2021', 'Who\'s that simplified Pokémon?! Day 65!!', 'images/data/242.jpg', '5', '6'));
data.push(new Article('pokemon', '19.02.2021', 'Back in the day, Pokemon toys weren\'t the best quality', 'images/data/243.jpg', '20', '7'));
data.push(new Article('pokemon', '19.02.2021', 'Pokemon Cards? Can you feel this hype!?', 'images/data/244.jpg', '13', '4'));
data.push(new Article('pubg', '19.02.2021', 'If you play sniper, you know this lesson!', 'images/data/245.jpg', '2', '0'));
data.push(new Article('pubg', '19.02.2021', 'MJ 45 degree angle?', 'images/data/246.jpg', '3', '0'));
data.push(new Article('pubg', '19.02.2021', 'True Enough', 'images/data/247.jpg', '5', '0'));
data.push(new Article('pubg', '19.02.2021', 'Spotted a large number of afk players today (got free 10 kills, teammates took 9)', 'images/data/248.jpg', '3', '0'));
data.push(new Article('pubg', '19.02.2021', '#metroroyale #pubgmobilemetroroyale', 'images/data/249.jpg', '1', '0'));
data.push(new Article('satisfying', '20.02.2021', 'Word jumbling is fun', 'images/data/250.jpg', '317', '10'));
data.push(new Article('satisfying', '20.02.2021', 'Captured the all 4s on bike', 'images/data/251.jpg', '20', '1'));
data.push(new Article('satisfying', '19.02.2021', 'Sunset at SP city', 'images/data/252.jpg', '8', '3'));
data.push(new Article('satisfying', '19.02.2021', 'And it continues', 'images/data/253.jpg', '68', '1'));
data.push(new Article('satisfying', '19.02.2021', 'When spontaneously both sides of your headphones work', 'images/data/254.jpg', '13', '15'));
data.push(new Article('scienceAndTech', '20.02.2021', 'Perseverance\'s First Full-Color Look at Mars. Credit: NASA/JPL.', 'images/data/255.jpg', '16', '3'));
data.push(new Article('scienceAndTech', '20.02.2021', 'Perseverance, Mars', 'images/data/256.jpg', '37', '3'));
data.push(new Article('scienceAndTech', '20.02.2021', 'Who Came First?', 'images/data/257.jpg', '30', '5'));
data.push(new Article('scienceAndTech', '20.02.2021', 'What a lovely saturday morning', 'images/data/258.jpg', '19', '18'));
data.push(new Article('scienceAndTech', '20.02.2021', 'Kurzgesagt did it again', 'images/data/259.jpg', '26', '3'));
data.push(new Article('sport', '20.02.2021', 'What does this group think about disc golf?', 'images/data/260.jpg', '6', '3'));
data.push(new Article('sport', '20.02.2021', 'Ronaldo and his family', 'images/data/261.jpg', '26', '23'));
data.push(new Article('sport', '20.02.2021', 'Wood Kraken logo', 'images/data/262.jpg', '9', '5'));
data.push(new Article('sport', '20.02.2021', 'NHL P/GP leaders each season since Gretzky\'s rookie year.', 'images/data/263.jpg', '5', '3'));
data.push(new Article('sport', '20.02.2021', 'Miller Park no more. The signage is officially down.', 'images/data/264.jpg', '8', '4'));
data.push(new Article('starWars', '20.02.2021', 'Don\'t worry, Rey unlocked the jedi time travel', 'images/data/265.jpg', '12', '4'));
data.push(new Article('starWars', '20.02.2021', 'I call him Mr. Egghead', 'images/data/266.jpg', '22', '1'));
data.push(new Article('starWars', '20.02.2021', 'Vader', 'images/data/267.jpg', '150', '9'));
data.push(new Article('starWars', '20.02.2021', 'Boba Fett by Eric Canete', 'images/data/268.jpg', '8', '0'));
data.push(new Article('starWars', '20.02.2021', 'Beautiful pieces of art!', 'images/data/269.jpg', '280', '7'));
data.push(new Article('teensCanRelate', '20.02.2021', 'Still using 1969', 'images/data/270.jpg', '340', '12'));
data.push(new Article('teensCanRelate', '19.02.2021', 'Not gonna lie, I barely remember the lessons I learnt in school', 'images/data/271.jpg', '385', '16'));
data.push(new Article('teensCanRelate', '19.02.2021', 'You know what it is', 'images/data/272.jpg', '11', '2'));
data.push(new Article('teensCanRelate', '19.02.2021', 'That\'s a bit dank', 'images/data/273.jpg', '498', '12'));
data.push(new Article('teensCanRelate', '19.02.2021', 'Damn true', 'images/data/274.jpg', '5458', '97'));
data.push(new Article('travelAndPhotography', '20.02.2021', 'Cold', 'images/data/275.jpg', '11', '1'));
data.push(new Article('travelAndPhotography', '20.02.2021', 'Residential buildings in Tashkent. Photo by Frank Baumgart, Uzbek SSR, 1969', 'images/data/276.jpg', '8', '0'));
data.push(new Article('travelAndPhotography', '20.02.2021', 'Sunrise in snow', 'images/data/277.jpg', '34', '1'));
data.push(new Article('travelAndPhotography', '20.02.2021', 'Fisherman\'s Bastion at sunset, Budapest, Hungary', 'images/data/278.jpg', '4', '1'));
data.push(new Article('travelAndPhotography', '20.02.2021', 'Dirt road to the mountains, Romania', 'images/data/279.jpg', '70', '7'));
data.push(new Article('wallpaper', '20.02.2021', 'Abstract Seahorse -', 'images/data/280.jpg', '2', '0'));
data.push(new Article('wallpaper', '20.02.2021', 'Off Pinterest', 'images/data/281.jpg', '4', '0'));
data.push(new Article('wallpaper', '20.02.2021', 'Judge C.R. Magney State Park, Minnesota (Photo credit to Vincent Ledvina)', 'images/data/282.jpg', '3', '0'));
data.push(new Article('wallpaper', '20.02.2021', '(1920x2812) Ikaruga', 'images/data/283.jpg', '2', '0'));
data.push(new Article('wallpaper', '20.02.2021', 'Eyes', 'images/data/284.jpg', '2', '0'));
data.push(new Article('warhammer', '20.02.2021', 'Five 90\'s Ungors', 'images/data/285.jpg', '10', '1'));
data.push(new Article('warhammer', '20.02.2021', 'For the emperor 9', 'images/data/286.jpg', '0', '0'));
data.push(new Article('warhammer', '20.02.2021', 'Lord Arkanum WIP', 'images/data/287.jpg', '10', '3'));
data.push(new Article('warhammer', '20.02.2021', 'A Space Wolves\' sniper in position, circa M35 (colorized)', 'images/data/288.jpg', '14', '6'));
data.push(new Article('warhammer', '20.02.2021', 'We\'ve been tricked, backstabbed, and quite possibly bamboozled', 'images/data/289.jpg', '17', '1'));
data.push(new Article('wholesome', '20.02.2021', 'This reminded me of Charlie. Gotta respect that dude.', 'images/data/290.jpg', '1237', '311'));
data.push(new Article('wholesome', '20.02.2021', 'I see this absolute win', 'images/data/291.jpg', '0', '4'));
data.push(new Article('wholesome', '20.02.2021', 'It\'s enough people.', 'images/data/292.jpg', '42', '24'));
data.push(new Article('wholesome', '20.02.2021', 'Quincy lost his cool', 'images/data/293.jpg', '71', '8'));
data.push(new Article('wholesome', '20.02.2021', 'Bikers are amazing!', 'images/data/294.jpg', '335', '17'));
data.push(new Article('darkHumor', '20.02.2021', 'A tale as old as time', 'images/data/295.jpg', '0', '7'));
data.push(new Article('darkHumor', '20.02.2021', 'It\'s no longer dark #4', 'images/data/296.jpg', '45', '0'));
data.push(new Article('darkHumor', '20.02.2021', 'True...', 'images/data/297.jpg', '73', '6'));
data.push(new Article('darkHumor', '20.02.2021', 'He can take a knee or three', 'images/data/298.jpg', '53', '6'));
data.push(new Article('darkHumor', '20.02.2021', 'My kind of movie', 'images/data/299.jpg', '88', '1'));