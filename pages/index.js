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
              I discovered web programming in college, 
              and I've loved it ever since. When we talk 
              about the things I do, there are mostly websites
               and web applications but I am also interested in 
               mobile development and UX/UI design.

            `}
            img="/images/desktop.jpg"
          />
          <CardRev
            title="Tehnologies"
            description={`
              I am using React with NextJs and Material-ui 
              as my main source of building applications and websites,
               NodeJs for the back end, MySQL for database and Figma 
               for the design process. You can check out some of my work
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
