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
            Front end developer based in Belgrade, Serbia.
            My story is not that long. I fell in love with programming when i was 18, and that hasn't change since.
            When it comes to building stuff i mostly do websites and web apps, but i also started showing interestes towards mobile development.

          `}
          img="/images/desktop.jpg"
        />
        <CardRev
          title="Tehnologies i use"
          description={`
            I’m mainly focused on the front end using react libary with nextjs,
             i can also do some back end stuff in nodejs, for the database
              i will likely use mysql, and for the desing process Figma is there.
               You can check out some of my stuff in the project tab.
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
