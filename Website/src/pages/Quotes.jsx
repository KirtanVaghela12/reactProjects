import Luffy1 from '../assets/Luffy1.jpg'
import Nami1 from '../assets/Nami1.jpg'

const Quotes = () => {
  return (
    <div>
      <div className='flex justify-evenly'>
          <img src={Luffy1} className='h-100 w-200'/>
          <div>
            <h1 className='mt-20 mb-10 m-8 text-2xl font-bold'>“If I give up now, I’m gonna regret it!”<sub>~ Monkey D.Luffy</sub></h1>
            <h1 className='m-8 text-2xl font-bold'>“As long as I live, there are infinite chances!”<sub>~ Monkey D.Luffy</sub></h1>
            <h1 className='m-8 text-2xl font-bold'>“It’s not about whether I can or not. I’m gonna do it because I want to.”<sub>~ Monkey D.Luffy</sub></h1>
          </div>
      </div>
      
    </div>
  )
}

export default Quotes