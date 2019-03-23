import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <h1>About</h1>

        <p>
          In 1991 I was attending George Mason University just outside of
          Washington, DC. I was ending my semester as an Accounting major and
          hated every Accounting class I was in. As I selected my courses for
          the upcoming semester I decided to take a computer programming class.
          That was the beginning of my love for technology.
        </p>
        <p>
          My first course was programming in BASIC. Those first programs were
          nothing to get excited about but when the program finally worked and
          did what I intended it to do, I had experienced magic. I was hooked. I
          switched my major to Management Information Systems (MIS) and dove
          into programming and everything to do with computers. I cut my teeth
          on a bit of COBOL, then some Pascal, and ultimately C before jumping
          headfirst into C++ - it was the hot language emerging at that time.
        </p>

        <p>
          I graduated school and was hired into the illustrious Systems Engineer
          Development (SED) program at Electronic Data Systems (EDS). As part of
          the program, you begin as a Business Associate. I was lucky enough to
          get to design and deploy Windows for Workgroups and Netware networks
          for the Immigration and Naturalization Service (INS). We traveled
          across the country and were literally swapping typewriters for
          computers and teaching people how to use a mouse. The SED program had
          2 phases, learn the business then prove you had what it took. That
          second part was known as Tech Training.
        </p>
        <p>
          Tech Training was feared by all that attended. It was a 10 week fully
          immersive and rigorous test meant to weed out the poor performers. It
          was full of individual assignments and if you failed the coding tests,
          you were fired. No joke. I was able to get through training and was
          offered the sought after position as a Teaching Assistant for the next
          class. I refused though because I wanted to get to coding in
          production!
        </p>

        <p>
          Over the next 14 years at EDS I was able to create amazing systems
          using an incredible array of technologies, including multi-modal
          biometrics, smart cards, RFID, PKI, etc. I continued coding with Java
          and C++ up to the initial release of .NET and migrated my skills to
          C#. Some time around 2007 I made the (poor?) decision to walk away
          from coding and move into solution architecture.
        </p>
        <p>
          After implementing one of the biggest federal smart card issuance
          systems in the United States while at EDS, I then moved on to Booz
          Allen and Hamilton to work on actually using those cards. I worked
          with the Department of Treasury to implement the Federal Identity and
          Credential Access Management (FICAM) initiative. I was only there 10
          months though as I wasn't in the weeds deep enough and was itching to
          go back and get my hands dirty with actual implementation.
        </p>
        <p>
          I then went to Unisys where I again got to use my architeture skills
          to field a number of nationwide production systems. Most were related
          to pedestrian processing using face biometrics and other cool
          technologies.
        </p>

        <p>
          Fast forward to today and I'm currently serving as the Chief
          Technology Officer (CTO) for a woman-owned small business in the
          Washington, D.C. area - Dignari. In my current role I serve as the
          lead in one of the Emerging Technology branches of a large federal
          agency. That basically means I get to play with a lot of toys! This
          includes significant work with biometrics, IoT, cloud, and of course
          some blockchain. Recently, I've rediscovered my love for coding and
          I'm soaking up all kinds of technologies. I'm mostly focused on React
          right now but looking forward to continuing to refresh and expand my
          full stack skills.
        </p>

        <p>
          So, welcome to my website. If you are here you are probably a lot like
          me and your love for technology is strong. One of the reasons I chose
          a career in technology is the fact you are constantly learning. I love
          to expand my horizons and have also done some work in online business,
          blogging, and podcasting. I also love to write and have been featured
          on numerous online sites such as Entrepreneur.com. In the end, I try
          to share my journey exploring innovative technology and creative
          entrepreneurship in order to hopefully make your journey just a little
          bit easier. Feel free to reach out and get in touch with me. I’m
          always looking to learn from others and help out however I can.
        </p>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
