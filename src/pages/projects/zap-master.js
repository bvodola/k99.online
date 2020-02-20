import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Zap Master</H2>
      <Row>
        <Col>
          <img src="/img/projects/zap-master/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            Trata-se de uma solução voltada para o Marketing para WhatsApp,
            assim como sistema de envio automático de mensagens e bot de
            atendimento ao cliente.
          </P>

          <P>
            <mark>
              Este projeto permitirá a empresas que usam o WhatsApp para
              marketing possam alavancar significamente seus esforços e,
              consequentemente, transformá-los em mais vendas.
            </mark>
          </P>
          <P>
            <b>Este é um projeto em andamento</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>App Screens</H3>
      <br />
      <ProjectImages
        project_name="zap-master"
        images={["zap1", "zap2", "zap3"]}
      />
    </Section>
  </Layout>
)
