import React from "react"
import { Section, Row, WhatsappLink } from "src/components/ui"
import { H2, H3 } from "src/components/text"

const Contact = () => (
  <Section id="contact">
    <H2>Entre em contato ou Faça um Orçamento</H2>
    <H3>contato@k99.online</H3>
    <Row paddedSm>
      <WhatsappLink
        displayPhone="+55 (11) 94072-8896"
        linkPhone="5511940728896"
      />
    </Row>
  </Section>
)

export default Contact
