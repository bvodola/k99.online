import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

import Image from "src/components/image"
import {
  Banner,
  BannerRow,
  Section,
  Button,
  Layout,
  Row,
  Col,
} from "src/components/ui"
import { H1, H2, H3, P } from "src/components/text"

import { WhySectionImg, ProjectImg, ProjectCol } from "src/components/sections"
import content from "src/content"

const Home = () => {
  const { projects } = content.index

  return (
    <Layout>
      <Banner>
        <BannerRow>
          <Col size={"1.8"} alignItemsLg="flex-start">
            <H1>
              Procurando por uma agência com experiência REAL em criação de apps{" "}
              <mark>WEB</mark> and <mark>MOBILE</mark>?
            </H1>
            <Button onClick={() => scrollTo("#presentation")}>
              Sim! Por favor, me conte mais!
            </Button>
          </Col>
          <Col size={"1.2"} display={"block"} className="image-wrapper">
            <Image />
          </Col>
        </BannerRow>
      </Banner>
      <Section id="presentation" variant="secondary">
        <H2 secondary>Então, sua busca chegou ao fim! =D</H2>
        <H1 style={{ textAlign: "center" }}>
          Olá, nós somos a MNX.digital, uma agência especializada na criação de
          apps e sistemas, tanto para Web quando para Celular.
        </H1>
        <Row style={{ justifyContent: "center" }}>
          <ProjectImg src="/img/tech-logos.png" alt="" />
        </Row>
        <Button onClick={() => scrollTo("#projects")}>
          Confira nossos projetos
        </Button>
      </Section>
      <Section>
        <H2>Porque você deveria nos contratar?</H2>
        <Row stacked>
          <Col>
            <WhySectionImg src="/img/commitment.png" alt="" />
            <H3>
              Compromisso
              <br />
              com seu projeto
            </H3>
            <P>
              <b>
                Pare de correr atrás de programadores que não se comprometem
              </b>
              . Aqui, seu sucesso é nosso sucesso! Vamos entrar de cabeça em seu
              projeto e garantir que seja o melhor possível.
            </P>
          </Col>
          <Col>
            <WhySectionImg src="/img/chat.png" alt="" />
            <H3>
              Excelente
              <br />
              Comunicação
            </H3>
            <P>
              Estamos sempre disponíveis para responder suas perguntas - antes,
              durante e depois do término do seu projeto.
            </P>
          </Col>
          <Col>
            <WhySectionImg src="/img/medal.png" alt="" />
            <H3>
              Validados por
              <br />
              grandes clientes
            </H3>
            <P>
              Temos projetos bem-sucedidos feitos em parceria com grandes
              clientes, como Google. Confira alguns de nossos projetos abaixo e
              veja por si mesmo!
            </P>
          </Col>
        </Row>
        <Button onClick={() => scrollTo("#contact")}>Fazer orçamento</Button>
      </Section>
      <Section id="projects" variant="secondary">
        <H2>Projetos</H2>
        <H3>
          Confira alguns de nossos projetos que envolvem desenvolvimento WEB e
          MOBILE.
        </H3>
        <br />

        {projects.map(project => (
          <Row key={project.link}>
            <Col>
              <ProjectImg src={project.image} />
            </Col>
            <ProjectCol>
              <H3>{project.title}</H3>
              <P>{project.short_description}</P>
              <Link to={project.link}>
                <Button primary>Detalhes do projeto</Button>
              </Link>
            </ProjectCol>
          </Row>
        ))}
      </Section>
    </Layout>
  )
}

export default Home
