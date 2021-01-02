import { Container } from '@material-ui/core'
import Card from '../components/Card/card'
import CardRev from '../components/CardRev/cardreverse'
import Mouse from '../components/Mouse/mouse'
import Title from '../components/Title/title'

export default function Home() {
  return (
    <div>
      <main>
        <Title/>
        <Mouse/>
        <Container maxWidth="lg">
        <Card
          title="What i do"
          description={`
            Frontend developer based in Belgrade, Serbia
              My story is not that long, i discovered programming 
              in collage and fell in love with it, especially 
              front end part as you can tell by my title. 
              I mostly build websites and web apps using
               ReactJs as my primary source. I also do some
                backend stuff (if needed), with NodeJS 
                (im using NestJS framework). You can check 
                out some of my work here.
          `}
          img="/images/desktop.jpg"
        />
        <CardRev
          title="Tehnologies i use"
          description={`
            I’m mainly focused on the frontend using react libary with nextjs,
             i can also do some backend stuff in node, for the database
              i will liklye use mysql, and for the desing process Figma is there.
               You can check out some of my projects in here.
          `}
          img="/images/code.jpg"
        />
        <Card
          title="Get in touch with me"
          description={`
            You can reach out to me on my social media or you can just send me an email whichever you prefer.
          `}
          img="/images/contact.jpg"
          link="https://github.com/SupremeHan?tab=repositories"
        />
        </Container>
      </main>

    </div>
  )
}
