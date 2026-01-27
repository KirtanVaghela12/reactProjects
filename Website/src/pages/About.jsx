import React from 'react'
import Cards from '../Components/cards/Cards'
import Luffy from '../assets/Luffy.jpg'
import Zoro from '../assets/Zoro.jpg'
import Nami from '../assets/Nami.png'
import Sanji from '../assets/Sanji.jpg'
import Usopp from '../assets/Usopp.jpg'
import Chopper from '../assets/Chopper.jpg'
import Robin from '../assets/Robin.avif'
import Franky from '../assets/Franky.jpg'
import Brook from '../assets/Brook.jpg'
import Jinbe from '../assets/Jinbe.avif'

const About = () => {
  return (
    <div className='grid grid-cols-3 items-center'>
      <div className=' col-span-3 flex justify-center -mb-5'>
        <Cards 
        image={Luffy}
        name={"Monkey D. Luffy"}
        title={"Monkey D. Luffy, commonly known as \"Straw Hat Luffy\" or simply \"Straw Hat\" is the founder and captain of the Straw Hat Pirates. He pursues the legendary treasure of the late Gold D. Roger in order to become the new Pirate King and reach a further, untold dream (currently known to only his crew, family and closest friends). He believes that being the Pirate King means having the most freedom in the world."}
        />
      </div>

      <Cards
      image={Zoro}
      name={"Roronoa Zoro"}
      title={"Roronoa Zoro, also known as \"Pirate Hunter\" Zoro is the master swordsman and combatant of the Straw Hat Pirates, one of the Senior Officers of the Straw Hat Grand Fleet, and is publicly recognized as the right-hand man and number two of his crew's captain, Monkey D. Luffy. Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it, doing so in the Romance Dawn Arc."}
    />

    <Cards 
    image={Nami}
    name={"Nami"}
    title={"\"Cat Burglar\" Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the third member of the crew and the second to join, doing so during the Orange Town Arc. She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère."}
    />

    <Cards 
    image={Usopp}
    name={"Usopp"}
    title={"\"God\" Usopp is the sniper of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fourth member of the crew and the third to join, doing so at the end of the Syrup Village Arc. Although he left the crew during the Water 7 Arc, he rejoined at the end of the Post-Enies Lobby Arc."}
    />

    <Cards 
    image={Sanji}
    name={"Vinsmoke Sanji"}
    title={"\"Black Leg\" Sanji is the cook of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc. His dream is to find the rumored chef's paradise, the All Blue, which is where the East Blue, West Blue, North Blue, and South Blue meet, along with their wildlife. He is one of the top three fighters of the Straw Hats, alongside Luffy and Zoro, who is referred to as the \"Monster Trio\"."}
    />

    <Cards 
    image={Chopper}
    name={"Tony Tony Chopper"}
    title={"Tony Tony Chopper, also known as \"Cotton Candy Lover\" Chopper, is the doctor of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the sixth member of the crew and the fifth to join, doing so at the end of the Drum Island Arc. He was temporarily forced to join the Foxy Pirates during the Long Ring Long Land Arc but was quickly returned to Luffy's crew."}
    />

    <Cards 
    image={Robin}
    name={"Nico Robin"}
    title={"Nico Robin, also known by her epithet \"Devil Child\" and the \"Light of the Revolution\", is the archaeologist of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the seventh member of the crew and the sixth to join, doing so at the end of the Arabasta Arc. She temporarily left the crew during the Water 7 Arc but rejoined during the Enies Lobby Arc."}
    />

    <Cards 
    image={Franky}
    name={"Franky (Cutty Flam)"}
    title={"\"Iron Man\" Franky is the shipwright of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the crew's eighth member and the seventh to join, doing so at the end of the Post-Enies Lobby Arc. Franky was born in the South Blue to Scien, an infamous scientist and pirate who would later be known as Queen of the Beasts Pirates. After his parents abandoned him as a 10-year-old, he eventually made his way to Water 7."}
    />

    <Cards 
    image={Brook}
    name={"Brook"}
    title={"\"Soul King\" Brook is the musician of the Straw Hat Pirates, one of their two swordsmen, and one of the Senior Officers of the Straw Hat Grand Fleet. He is the ninth member of the crew and the eighth to join, doing so at the end of the Thriller Bark Arc. Brook ate the Yomi Yomi no Mi, which allowed him to return to life after death once. Brook eventually learned to tap deeper into the powers of his Devil Fruit, giving him significant control over his own soul and the souls of others."}
    />

    
      <Cards 
      image={Jinbe}
      name={"Jinbe"}
      title={"\"Knight of the Sea\" Jinbe is the helmsman of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. He is the tenth member of the crew and the ninth to join, doing so during the Wano Country Arc. Jinbe is a whale shark fish-man and a powerful master of Fish-Man Karate. His dream is to fulfill his former captain Fisher Tiger's dying wish of coexistence and equality between humans and fish-men."}
      />
    
    </div>
  )
}

export default About