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
data.push(new Article('Bulgaria 🇧🇬', '16.02.2021', 'Положението е трагично','images/data/0.jpg', '44', '4'));
data.push(new Article('Bulgaria 🇧🇬', '16.02.2021', 'Родната журналистика','images/data/1.jpg', '19', '4'));
data.push(new Article('Bulgaria 🇧🇬', '15.02.2021', 'В памет на полит елита','images/data/2.jpg', '41', '3'));
data.push(new Article('Bulgaria 🇧🇬', '15.02.2021', 'Високо, високо, високо!','images/data/3.jpg', '15', '6'));
data.push(new Article('Bulgaria 🇧🇬', '15.02.2021', 'Ugh...when you just wake-up and life allready is hating you','images/data/4.jpg', '12', '4'));
data.push(new Article('Funny', '17.02.2021', 'Being rich comes with a price','images/data/5.jpg', '0', '19'));
data.push(new Article('Funny', '17.02.2021', 'Texas never fails to entertain','images/data/6.jpg', '2010', '332'));
data.push(new Article('Funny', '17.02.2021', 'Okay, class bring out your laptops and we rush at B site','images/data/7.jpg', '977', '55'));
data.push(new Article('Funny', '17.02.2021', 'Is it fair?','images/data/8.jpg', '1045', '86'));
data.push(new Article('Funny', '17.02.2021', 'F1 driver crashing at 200 mph vs. Soccer player getting shirt pulled.','images/data/9.jpg', '0', '13'));