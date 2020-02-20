import React from "react"
import { Section, Row, Col, WhatsappLink, ContactForm } from "src/components/ui"
import { H2, H3 } from "src/components/text"

const Contact = () => (
  <Section id="contact">
    <H2>Entre em contato ou Faça um Orçamento</H2>

    <Row padded>
      <Col>
        <ContactForm />
      </Col>
    </Row>
    <Row padded>
      <Col>
        <H3>contato@k99.online</H3>
      </Col>
    </Row>
    <Row paddedSm>
      <WhatsappLink
        displayPhone="+55 (11) 94072-8896"
        linkPhone="5511940728896"
      />
    </Row>
  </Section>
)

export default Contact
