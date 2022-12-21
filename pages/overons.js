import {Container, Heading, SimpleGrid, Divider, Text} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import {BioSection, BioYear} from "../components/bio";

const Overons = () => (
    <Layout title="Team">
        <Heading as="h1" fontSize={30} mb={6} variant="section-title" color="lightgreen">
            Ons team
        </Heading>
        <Layout variant="hidden">
            <Section delay={0.4} mb={5} title="Bio">
                <Heading as="h2" fontSize={20} mb={4} variant="section-title" color="lightgreen">
                    Tijdlijn
                </Heading>
                Kopje 1
                <BioSection>
                    <BioYear>2007</BioYear>
                    Opgericht.
                </BioSection>
                Kopje 2
                <BioSection>
                    <BioYear>2008</BioYear>
                    En toen.
                </BioSection>
                Kopje 3
                <BioSection>
                    <BioYear>2009</BioYear>
                    En dan.
                </BioSection>
                Kopje 4
                <BioSection>
                    <BioYear>2022</BioYear>
                    En nu?
                </BioSection>
            </Section>
        </Layout>

        <Layout variant="hidden">
            <SimpleGrid columns={[1, 1, 2]} gap={10}>
                <Section>
                    <Heading as="h2" fontSize={20} mb={4} variant="section-title" color="lightgreen">
                        Wie zijn wij?
                    </Heading>
                    <Text>Wij bestaan al 15 jaar! Met 1 salon in de mooiste stad van het land zijn wij super makkelijk.</Text>
                    <Text>Je mag gerust binnenlopen of afspraak maken. Wij zijn een unieke kappersformule en leveren goede
                        kwa liteit voor een mooie prijs.</Text>
                    <Text>Bij ons vind je als klant gemak, wanneer je wilt. Eerlijke prijzen zonder verrassingen, met aantrekkelijke all-in pakketten.</Text>
                    <Text>Een sterke prijs-kwaliteit verhouding met service gefocust op de essentie. Door gekwalificeerde kappers die zijn opgeleid door vakexperts.</Text>
                    <Text>En in een welkome, informele en toegankelijke omgeving, met een goed advies zonder poespas.</Text>
                </Section>
                <Section>

                    <Heading as="h3" variant="section-title" color="lightgreen">
                        Onze kernwaarden
                    </Heading>
                    <Text>De formule van ons is gebaseerd op vier belangrijke pijlers:</Text>
                    <Text>Gemak – Wanneer je, je maakt eenvoudig een afspraak – Voldoet altijd aan de verwachtingen</Text>
                    <Text>Prijs – Eerlijke prijzen zonder verrassingen, met aantrekkelijke all-in pakketten – De slimste keuze voor iedereen</Text>
                    <Text> Kwaliteit – Sterke prijs-kwaliteit verhouding, service gefocust op de essentie, opgeleid door vakexperts – Wij doen waar we goed in zijn</Text>
                    <Text> Beleving – Welkom, informeel en toegankelijk, goed advies zonder poespas – Altijd met een glimlach</Text>
                </Section>
            </SimpleGrid>
        </Layout>
        <Paragraph>
        </Paragraph>

        <Layout variant="exit">
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>

                    <Divider my={5} />

                </Section>
                <Section>

                </Section>
            </SimpleGrid>
        </Layout>
    </Layout>
)

export default Overons