import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Memo Meister</H2>
      <Row>
        <Col>
          <img src="/img/projects/memo-meister/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            Este projeto consistiu em um contrato de 1 ano para manutenção,
            criação de novas telas e melhorias de performance no aplicativo
            nativo da empresa, nas plataformas iOS e Android.
          </P>
          <P>
            Dentre as várias tarefas realizadas, a mais impactante foi{" "}
            <mark>
              ter melhorado a performance das principais telas do aplicativo em
              200% mensuráveis
            </mark>
            .
          </P>
          <P>
            Você pode baixar esse App tanto na Play Store quanto na App Store.
            Procure por: <b>MemoMeister</b>
          </P>
          <P>
            <b>Este projeto foi um contrato que teve 1 ano de duração.</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>App Screens</H3>
      <br />
      <ProjectImages
        project_name="memo-meister"
        images={["app1", "app2", "app3", "app4"]}
      />
    </Section>
  </Layout>
)
