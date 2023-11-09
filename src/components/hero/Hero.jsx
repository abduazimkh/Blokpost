import { Button, Container } from '../../utils'
import hero from '../../assets/image/hero.svg'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <div className="hero__wrapper">
          <div className="hero__content">
        <h2>Stay curios.</h2>
        <p>Discover stories, thinking, and expertise from writers on any topic</p>
        <Button type={'large'} text={'Get started'}/>
      </div>
        <div className='hero__image'>
          <img src={hero} alt="" />
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero