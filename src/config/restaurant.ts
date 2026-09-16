// Fictional demonstration content. Replace details before launching a real business.
export const restaurant = {
 name: 'Golden Dragon', fullName: 'Golden Dragon Chinese Cuisine',
 phone: '(415) 555-0148', phoneHref: 'tel:+14155550148',
 address: '123 Lantern Lane', city: 'San Francisco, CA 94108',
 orderUrl: process.env.NEXT_PUBLIC_ORDER_URL || '',
 reservationUrl: process.env.NEXT_PUBLIC_RESERVATION_URL || '',
 hours: [['Monday – Thursday','11:00 am – 9:00 pm'],['Friday – Saturday','11:00 am – 10:00 pm'],['Sunday','12:00 pm – 9:00 pm']],
};
export const menu = {
 'House favorites': [
 {name:'Golden Sesame Chicken',price:'18',description:'Crisp chicken, toasted sesame & a glossy ginger-soy glaze.',tag:'HOUSE FAVORITE'},
 {name:'Kung Pao Chicken',price:'19',description:'Wok-fired chicken, roasted peanuts, chilies & scallions.',tag:'SPICY'},
 {name:'Mongolian Beef',price:'22',description:'Tender beef, sweet onions & scallions in a rich savory sauce.',tag:''},
 {name:'Mapo Tofu',price:'17',description:'Silken tofu, mushrooms & Sichuan pepper in a warming chili sauce.',tag:'VEGETARIAN · SPICY'}],
 'Dim sum & starters': [
 {name:'Pan-Fried Pork Dumplings',price:'10',description:'Six crisp-bottom dumplings with ginger dipping sauce.',tag:'GUEST FAVORITE'},
 {name:'Vegetable Spring Rolls',price:'8',description:'Four golden rolls with cabbage, carrots & sweet chili sauce.',tag:'VEGETARIAN'},
 {name:'Shrimp Shumai',price:'11',description:'Six open-top steamed dumplings with shrimp and pork.',tag:''},
 {name:'Hot & Sour Soup',price:'7',description:'Mushrooms, tofu, bamboo shoots & egg in peppery broth.',tag:'SPICY'}],
 'Rice & noodles': [
 {name:'Golden Dragon Fried Rice',price:'16',description:'Wok-tossed rice with shrimp, chicken, egg & garden vegetables.',tag:'HOUSE FAVORITE'},
 {name:'Vegetable Lo Mein',price:'14',description:'Soft wheat noodles, seasonal vegetables & savory soy sauce.',tag:'VEGETARIAN'},
 {name:'Dan Dan Noodles',price:'17',description:'Wheat noodles, seasoned pork & a fragrant sesame-chili sauce.',tag:'SPICY'},
 {name:'Steamed Jasmine Rice',price:'4',description:'A simple, fragrant companion to every shared plate.',tag:'VEGAN'}]
};
