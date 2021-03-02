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
    <Row paddedSm>
      <WhatsappLink
        displayPhone="+55 (11) 99966-8246"
        linkPhone="5511999668246"
      />
    </Row>
  </Section>
)

export default Contact
