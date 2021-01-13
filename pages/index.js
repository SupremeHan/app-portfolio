import { Container } from '@material-ui/core'
import Card from '../components/Card/card'
import CardRev from '../components/CardRev/cardreverse'
import Contact from '../components/Contact/contact'
import Mouse from '../components/Mouse/mouse'
import Title from '../components/Title/title'


export default function Home() {
  return (
    <div>
      <main>
        <Container maxWidth="lg">
          <Title/>
          <Mouse/>
          <Card
            title="What i do"
            description={`
              Front end developer based in Belgrade, Serbia.
              My story is not that long. I fell in love with programming when i was 18, and that hasn't change since.
              When it comes to building stuff i mostly do websites and web apps, but i also started showing interestes towards mobile development.

            `}
            img="/images/desktop.jpg"
          />
          <CardRev
            title="Tehnologies"
            description={`
              I am using React with NextJs and Material-ui 
              as my main source of building applications and websites,
               NodeJs for the back end, mySql for databases and Figma 
               for the design process. You can check some of my stuff
                in the projects tab. 
            `}
            img="/images/mern.jpg"
          />
          <Contact/>
        </Container>
      </main>

    </div>
  )
}
