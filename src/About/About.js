import classes from "./About.module.css";
import ra from "../About/ra.jpg"

  const About = () => {
      return(
          <div className={classes.About}>
          <h2>This is about page</h2>
          <p className={classes.paragraf}>
Welcome to Karakol.<br></br>
<img className={classes.img2}  src = {ra} alt = "ra" width="500px"/> <br></br>

Maybe you’re just passing through, but why not stay awhile?

The city of Karakol has long been considered a gateway to the natural wonders of the Tian Shan mountains and Lake Issyk-Kul. However, its unique location and fascinating history have slowly enabled its transformation into one of Kyrgyzstan's most engaging cultural and culinary destinations, too. Karakol is a town with many secrets to reveal, and it’s ready to tell you its story.<br></br>

"Located at the very border of unexplored land, Karakol became a base, a starting point for the expeditions of Nikolai Mikhalovich Przhevalsky, Vsevolod Ivanovich Roborovsky, Petr Kuzmich Kozlov and many others. They prepared food, engaged guides, drovers, selected security and tested their equipment a last time before the before the long journey ahead."<br></br>

History of Karakol, a project of Leadership NGO

Holy Trinity Cathedral<br></br>

Dungan Mosque
During ancient times, Karakol sat in the middle of a sprawling region called Turkestan, which spread from the Gobi Desert of Mongolia to the Caspian Sea. In the mid-1800s, noted explorer Nikolay Przhevalsky crossed the Russian Empire in search of a magic cure for an ailing Tsar, and having passed through — and by all accounts enjoyed — the city, he gifted it with his name. Until 1991, the city was known as Przhevalsk.<br></br>

Sitting at the crossroads of China to the east and the rest of Central Asia to the west, modern Karakol is a living encyclopedia of cultures and ethnicities who call Karakol home: Kyrgyz, Tatar, Russian, Dungan, Uighur, Kalmyk, and Uzbek among others.<br></br>

Centuries of activity, trade, and migration have shaped the city and molded Karakol into this unique crossroads of food, culture, and nature. Once a small 19th-century Russian military outpost, then a busy 20th-century Soviet state, and now a vibrant independent Kyrgyz city, present-day Karakol is a place to explore and treasure the region's unique history.<br></br>

Although Karakol is known as one of Central Asia's premiere trekking destinations, there also happens to be no better place to experience Kyrgyz culture and hospitality before, during, and after your outdoor adventure. The ethnic diversity of its food and markets, the welcoming nature of its peoples and homes, and the vestiges of so many eras of change make the city a fascinating place to relax, eat, shop, interact, and learn.


          </p>
          
        </div>
      );
    };
  
  export default About;