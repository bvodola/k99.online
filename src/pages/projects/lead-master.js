import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Lead Master</H2>
      <Row>
        <Col>
          <img src="/img/projects/lead-master/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            Este é um CRM e gerador de documentos criado especificamente para
            escritórios de advocacia
          </P>
          <P>
            Dentre seus diversos benefícios, o maior de todos foi{" "}
            <mark>
              diminuir o tempo necessário para preencher os dados de um cliente
              e gerar seus formulários processuais de 10 minutos para em torno
              de 30 segundos.
            </mark>
            .
          </P>
          <P>
            Este é um projeto fechado por enqauanto, e não pode ser acessado.
          </P>
          <P>
            <b>Este projeto foi entregue em 1 mês.</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>Telas do Sistema</H3>
      <br />
      <ProjectImages project_name="lead-master" images={["app1", "app2"]} />
    </Section>
  </Layout>
)
