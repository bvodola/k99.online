import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Waze CarPool Vouchers</H2>
      <Row>
        <Col>
          <img src="/img/projects/waze-vouchers/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            Este projeto, liderado pelo Waze CarPool, teve como objetivo criar
            um sistema de recompensas baseado em caronas dadas pelos usuários do
            App Waze CarPool.
          </P>
          <P>
            Primeiramente, o usuário recebia um código gerado por nosso sistema
            através do seu app Waze CarPool
          </P>
          <P>
            Com o voucher em mãos, ele deveria acessar a página da promoção que
            explica todas as mecânicas da promoção.
          </P>
          <P>
            Finalmente, ele acessaria o sistema de vouchers e trocaria seu
            voucher por um dos brindes disponíveis, desde que tivesse pontos
            suficientes para tal.
          </P>
          <P>
            <b>Esse projeto foi entregue em 2 semanas.</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>Telas do sistema de vouchers</H3>
      <br />
      <ProjectImages
        project_name="waze-vouchers"
        images={["file1", "file2", "file3"]}
      />
      <br />
      <H3>Painel Administrativo</H3>
      <br />
      <ProjectImages
        project_name="waze-vouchers"
        images={["painel-1", "painel-2", "painel-3"]}
      />
    </Section>
  </Layout>
)
