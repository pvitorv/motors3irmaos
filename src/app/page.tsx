
import { Submenu } from "@/components/home/submenu";
import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from "@/utils/actions/home.type"
import { Hero } from '@/components/hero'
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";
import {Container} from '@/components/container'
import { Footer } from '@/components/home/footer'

export default async function Home() {
  const {object}: HomeProps = await getDataHome();
  console.log(object);

  return (
    <main>
      <Submenu/>

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#fff"/>}
      />
      <Container>
        <Services object={object}/>
        <Footer object={object}/>
      </Container>
    </main>
  )
}
