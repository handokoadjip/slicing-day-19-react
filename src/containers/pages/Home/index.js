import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionHeader,
  SectionContent1,
  SectionContent2,
  SectionContent3,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Diogo Akio | Quadra Collective";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionContent1 />
          <SectionContent2 />
          <SectionContent3 />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
