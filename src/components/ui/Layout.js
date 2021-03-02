import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Link } from "gatsby"

import SEO from "../seo"
import Nav from "./Nav"
import Section from "./Section"
import ContactSection from "src/components/ContactSection"

const theme = {
  contentPadding: `padding-left: 24px; padding-right: 24px; @media(min-width: 900px) { padding-left: 16%; padding-right: 16%; }`,
  sectionPadding: `padding-top: 72px;
  padding-bottom: 72px;`,
  fontSize: {
    h1: "36px",
    h1_lg: "36px",
    h2: "28px",
    h3: "20px",
    normal: "14px",
  },
  colors: {
    main: "#2c74d2",
    contrast: "#c2772e",
    text: {
      main: "#454351",
      contrast: "#fff",
    },
    bg: {
      main: "#fff",
      secondary: "#f2f4fb",
    },
  },
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'ubuntu';
  }

  * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
  }

  @media(max-width: 899px) {
    .hidden-xs {
      display: none;
    }
  }

  a {
    color: ${theme.colors.main}
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SEO title="Home" />
    <Nav>
      <Link to="/">
        <h1>MNX.digital</h1>
      </Link>

      <ul>
        <li className="hidden-xs">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/#projects">Projetos</Link>
        </li>
        <li>
          <Link to="/#contact">Contato</Link>
        </li>
      </ul>
    </Nav>
    <div style={{ paddingTop: "20px" }}></div>
    {children}
    <ContactSection />
    <Section>
      &copy; {new Date().getFullYear()} - Criado por MNX.digital
      <br />
      Ícones criados por{" "}
      <a
        href="https://www.flaticon.com/authors/pixel-perfect"
        title="Pixel perfect"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pixel perfect
      </a>
      {", "}
      <a
        href="https://www.flaticon.com/authors/vectors-market"
        title="Vectors Market"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vectors Market
      </a>{" "}
      and{" "}
      <a
        href="https://www.flaticon.com/authors/monkik"
        title="monkik"
        target="_blank"
        rel="noopener noreferrer"
      >
        monkik{" "}
      </a>
      from{" "}
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        www.flaticon.com
      </a>
    </Section>
  </ThemeProvider>
)

export default Layout
