import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>FGM dá Sorte</H2>
      <Row>
        <Col>
          <img src="/img/projects/fgm/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            <a
              target="_blank"
              href="https://fgmdasorte.com.br/"
              rel="noopener noreferrer"
            >
              Link do projeto (Landing Page)
            </a>
          </P>
          <P>
            Esse projeto, criado em parceria com a FGM, referência mundial da
            indústria de equipamentos para dentistas, é um sistema de promoção e
            sorteios mensais para os clientes da empresa.
          </P>
          <P>
            Os usuários, depois de comprarem equipamentos odontológicos, acessam{" "}
            <a
              target="_blank"
              href="https://fgmdasorte.com.br/"
              rel="noopener noreferrer"
            >
              a página principal da campanha
            </a>{" "}
            que explica toda a mecânica da promoção.
          </P>
          <P>
            <b>Obs: Este projeto ainda está em andamento</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>Telas da página de promoção</H3>
      <br />
      <ProjectImages project_name="fgm" images={["proj-1", "proj-2"]} />
      <br />
      <H3> Telas do painel de controle</H3>
      <br />
      <ProjectImages project_name="fgm" images={["painel-1", "painel-2"]} />
    </Section>
  </Layout>
)
