import { Container } from '@material-ui/core'
import Head from 'next/head'
import Card from '../components/Card/card'
import CardRev from '../components/CardRev/cardreverse'
import Contact from '../components/Contact/contact'
import Mouse from '../components/Mouse/mouse'
import Title from '../components/Title/title'


export default function Home() {
  
  return (
    <div>
      <main>
         <Head>
                <title>Nikola Zivojinovic | Front End Developer</title>
        </Head>
        <Container maxWidth="lg">
          <Title/>
          <Mouse/>
          <Card
            title="What I do"
            description={`
              Front-end developer based in Belgrade, Serbia.
              I discovered web programming in college, 
              and I've loved it ever since. When we talk 
              about the things I do, there are mostly websites
               and web applications but I am also interested in 
               mobile development and UX/UI design.

            `}
            img="/images/code.jpg"
          />
          <CardRev
            title="Tehnologies"
            description={`
              I am using React with Next.js and Material-UI as my main
              source for building applications and websites, 
              Node.js for the back-end,
              MySQL for database and Figma for the design process. 
              You can check out some of my work in the project tab.
            `}
            img="/images/mern.jpg"
          />
          <Contact/>
        </Container>
      </main>

    </div>
  )
}
