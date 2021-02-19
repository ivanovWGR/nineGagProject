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
data.push(new Article('bulgaria', '16.02.2021', 'Положението е трагично','images/data/0.jpg', '44', '4'));
data.push(new Article('bulgaria', '16.02.2021', 'Родната журналистика','images/data/1.jpg', '19', '4'));
data.push(new Article('bulgaria', '15.02.2021', 'В памет на полит елита','images/data/2.jpg', '41', '3'));
data.push(new Article('bulgaria', '15.02.2021', 'Високо, високо, високо!','images/data/3.jpg', '15', '6'));
data.push(new Article('bulgaria', '15.02.2021', 'Ugh...when you just wake-up and life allready is hating you','images/data/4.jpg', '12', '4'));
data.push(new Article('funny', '17.02.2021', 'Being rich comes with a price','images/data/5.jpg', '0', '19'));
data.push(new Article('funny', '17.02.2021', 'Texas never fails to entertain','images/data/6.jpg', '2010', '332'));
data.push(new Article('funny', '17.02.2021', 'Okay, class bring out your laptops and we rush at B site','images/data/7.jpg', '977', '55'));
data.push(new Article('funny', '17.02.2021', 'Is it fair?','images/data/8.jpg', '1045', '86'));
data.push(new Article('funny', '17.02.2021', 'F1 driver crashing at 200 mph vs. Soccer player getting shirt pulled.','images/data/9.jpg', '0', '13'));
data.push(new Article('nsfw', '19.02.2021', 'Who is this?','images/data/10.jpg', '323', '25'));
data.push(new Article('nsfw', '19.02.2021', 'Year of the Ox.','images/data/11.jpg', '0', '10'));
data.push(new Article('nsfw', '19.02.2021', 'Motherf**ker','images/data/12.jpg', '0', '4'));
data.push(new Article('nsfw', '19.02.2021', 'A man needs a link!','images/data/13.jpg', '92', '12'));
data.push(new Article('nsfw', '19.02.2021', 'Ashley Louise James','images/data/14.jpg', '0', '3'));
data.push(new Article('girl', '19.02.2021', 'Charly Jordan','images/data/15.jpg', '217', '8'));
data.push(new Article('girl', '19.02.2021', 'Love a flannel.','images/data/16.jpg', '110', '9'));
data.push(new Article('girl', '19.02.2021', 'School girl dress up, yay or nay?','images/data/17.jpg', '66', '4'));
data.push(new Article('girl', '19.02.2021', 'Emma Jones - Leeds Utd TV Presenter','images/data/18.jpg', '110', '5'));
data.push(new Article('girl', '19.02.2021', 'Nicole Deliah','images/data/19.jpg', '73', '0'));
data.push(new Article('wtf', '19.02.2021', 'If I didn\'t have a nose I would have been Voldemort...','images/data/20.jpg', '0', '48'));
data.push(new Article('wtf', '19.02.2021', 'Real inspirational Donald','images/data/21.jpg', '115', '14'));
data.push(new Article('wtf', '19.02.2021', 'Crows','images/data/22.jpg', '168', '8'));
data.push(new Article('wtf', '19.02.2021', 'Sweet merciful Christ...','images/data/23.jpg', '46', '18'));
data.push(new Article('wtf', '19.02.2021', 'Dang dude','images/data/24.jpg', '4236', '139'));
data.push(new Article('cryptocurrency', '19.02.2021', 'This is how close ETH is to a massive breakout','images/data/25.jpg', '9', '1'));
data.push(new Article('cryptocurrency', '19.02.2021', 'Black or yellow Lambo?','images/data/26.jpg', '0', '3'));
data.push(new Article('cryptocurrency', '19.02.2021', 'It\'s an okay post I would say','images/data/27.jpg', '5', '1'));
data.push(new Article('cryptocurrency', '19.02.2021', 'My actual portfolio, in total 1.700€ Tell me your thoughts','images/data/28.jpg', '12', '50'));
data.push(new Article('cryptocurrency', '19.02.2021', 'Bitcoin hitting this high and is now Dogecoin time','images/data/29.jpg', '0', '1'));
data.push(new Article('animeAndManga', '19.02.2021', 'Works for me','images/data/30.jpg', '137', '5'));
data.push(new Article('animeAndManga', '19.02.2021', 'Too weak Sasuke','images/data/31.jpg', '20', '1'));
data.push(new Article('animeAndManga', '19.02.2021', 'Yes, I am not crying...','images/data/32.jpg', '29', '2'));
data.push(new Article('animeAndManga', '19.02.2021', 'Mei Terumi','images/data/33.jpg', '197', '10'));
data.push(new Article('animeAndManga', '19.02.2021', 'A thigh one','images/data/34.jpg', '37', '0'));
data.push(new Article('random', '19.02.2021', 'Open','images/data/35.jpg', '2173', '468'));
data.push(new Article('random', '19.02.2021', 'That\'s a comfy sponge.','images/data/36.jpg', '82', '5'));
data.push(new Article('random', '19.02.2021', 'Double Standards','images/data/37.jpg', '102', '10'));
data.push(new Article('random', '19.02.2021', 'Nothing to see here. Keep scrolling','images/data/38.jpg', '137', '20'));
data.push(new Article('random', '19.02.2021', 'They last longer when you dry them after use. It is true though.','images/data/39.jpg', '321', '36'));
data.push(new Article('animals', '19.02.2021', 'Horses are such majestic creatures','images/data/40.jpg', '117', '13'));
data.push(new Article('animals', '19.02.2021', 'Safe and sound','images/data/41.jpg', '17', '1'));
data.push(new Article('animals', '19.02.2021', 'Pallas cat','images/data/42.jpg', '55', '2'));
data.push(new Article('animals', '19.02.2021', 'Me too ;-)','images/data/43.jpg', '41', '6'));
data.push(new Article('animals', '19.02.2021', 'Smaug protecting his hoard','images/data/44.jpg', '14', '0'));
data.push(new Article('animeWaifu', '19.02.2021', 'Eagle jump waifu #644 Wedding time?','images/data/45.jpg', '13', '12'));
data.push(new Article('animeWaifu', '19.02.2021', 'Sexy sucrose','images/data/46.jpg', '18', '0'));
data.push(new Article('animeWaifu', '19.02.2021', '"Giri choco?"','images/data/47.jpg', '9', '1'));
data.push(new Article('animeWaifu', '19.02.2021', '"Stay with me~"','images/data/48.jpg', '16', '0'));
data.push(new Article('animeWaifu', '19.02.2021', 'Hikari','images/data/49.jpg', '41', '0'));
data.push(new Article('awesome', '19.02.2021', 'Fun fact : Mars is 100% populated by robots.','images/data/50.jpg', '1913', '148'));
data.push(new Article('awesome', '19.02.2021', 'Well deserved after a long and fulfilling career','images/data/51.jpg', '134', '15'));
data.push(new Article('awesome', '19.02.2021', 'This is nubra valley in Ladakh, India','images/data/52.jpg', '146', '6'));
data.push(new Article('awesome', '19.02.2021', 'Lady of the Metro, Me, oil on canvas, 2021','images/data/53.jpg', '308', '20'));
data.push(new Article('awesome', '19.02.2021', 'Dragon glass','images/data/54.jpg', '200', '12'));
data.push(new Article('car', '19.02.2021', '1998 Quaife R4 GTS Road Car','images/data/55.jpg', '0', '2'));
data.push(new Article('car', '19.02.2021', 'Washing my baby today','images/data/56.jpg', '7', '3'));
data.push(new Article('car', '19.02.2021', 'MX-5 Roadster: 1.8L 187hp (2000)','images/data/57.jpg', '16', '12'));
data.push(new Article('car', '19.02.2021', 'Half your recommended daily dose of Ferrari','images/data/58.jpg', '3', '1'));
data.push(new Article('car', '19.02.2021', 'Lamborghini Essenza SCV12','images/data/59.jpg', '12', '2'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Sry, but I had to use my paint skills and correct it','images/data/60.jpg', '0', '12'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Bullshit','images/data/61.jpg', '230', '18'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Truely','images/data/62.jpg', '509', '7'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Learning with Lead','images/data/63.jpg', '162', '13'));
data.push(new Article('comicAndWebtoon', '19.02.2021', 'Viva South Africa Viva','images/data/64.jpg', '49', '0'));
data.push(new Article('cosplay', '19.02.2021', 'JIUQUCKA as Jeanne d\'Arc','images/data/65.jpg', '0', '0'));
data.push(new Article('cosplay', '19.02.2021', 'CyberYennefer by oksana_frost','images/data/66.jpg', '11', '0'));
data.push(new Article('cosplay', '19.02.2021', 'Mashu Cosplay by Hana Bunny','images/data/67.jpg', '10', '0'));
data.push(new Article('cosplay', '19.02.2021', 'Swan Princess Odette cosplay by Le_Atlass','images/data/68.jpg', '5', '0'));
data.push(new Article('cosplay', '19.02.2021', 'Bunny Girl Mashu Cosplay by HedY','images/data/69.jpg', '11', '0'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Cyberpunk 2077','images/data/70.jpg', '11', '5'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Pulp fiction reference','images/data/71.jpg', '164', '8'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Rita wheeler fanart','images/data/72.jpg', '103', '7'));
data.push(new Article('cyberpunk2077', '19.02.2021', 'Cyberpunk 2077 - Johnny Silverhand stroking the furry wall','images/data/73.jpg', '14', '0'));
data.push(new Article('cyberpunk2077', '18.02.2021', 'You did great today choom <3','images/data/74.jpg', '27', '3'));
data.push(new Article('gaming', '19.02.2021', 'Took me 5 treats to get the right pose','images/data/75.jpg', '122', '15'));
data.push(new Article('gaming', '19.02.2021', 'Can you name them all?','images/data/76.jpg', '0', '8'));
data.push(new Article('gaming', '19.02.2021', '40€ for one year','images/data/77.jpg', '23', '28'));
data.push(new Article('gaming', '19.02.2021', 'The King','images/data/78.jpg', '271', '10'));
data.push(new Article('gaming', '19.02.2021', 'You died','images/data/79.jpg', '10', '4'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Supreme','images/data/80.jpg', '69', '7'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Elizabeth Turner','images/data/81.jpg', '19', '0'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Charlize Theron','images/data/82.jpg', '19', '0'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Caity Lotz','images/data/83.jpg', '17', '0'));
data.push(new Article('girlCelebrity', '19.02.2021', 'Monica Bellucci','images/data/84.jpg', '16', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Shurima trailer be like','images/data/85.jpg', '10', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Support disapear','images/data/86.jpg', '6', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Fiddlesticks','images/data/87.jpg', '3', '0'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Reject modernity, embrace old champions','images/data/88.jpg', '3', '1'));
data.push(new Article('leagueOfLegends', '19.02.2021', 'Now that\'s a lot of damage','images/data/89.jpg', '10', '4'));
data.push(new Article('meme', '19.02.2021', 'Hey, you! You reading this?','images/data/90.jpg', '0', '3'));
data.push(new Article('meme', '19.02.2021', 'All the single birdies...','images/data/91.jpg', '120', '2'));
data.push(new Article('meme', '19.02.2021', 'Despite the age ^ ~ thought it was funny!','images/data/92.jpg', '120', '4'));
data.push(new Article('meme', '19.02.2021', 'Will you?','images/data/93.jpg', '40', '4'));
data.push(new Article('meme', '19.02.2021', 'GPS took me home.','images/data/94.jpg', '28', '1'));








