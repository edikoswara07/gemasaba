import Layout from "../components/Layout";
import Head from "next/head";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import NavbarBrands from "../components/NavbarBrands";
import NavbarItems from "../components/NavbarItems";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>DPW Gemasaba Jawa Barat</title>
      </Head>
      <Container>
        <Navbar>
          <div>
            <NavbarBrands>DPW Gemasaba Jawa Barat</NavbarBrands>
          </div>
          <div>
            <NavbarItems>Home</NavbarItems>
            <NavbarItems>About</NavbarItems>
            <NavbarItems>Gallery</NavbarItems>
            <NavbarItems>Contact Us</NavbarItems>
          </div>
        </Navbar>

        <Hero />
      </Container>
    </Layout>
  );
}
