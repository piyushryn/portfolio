import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import Layout from "../components/layout/Layout";
import portfolioConfig from "../config/portfolioConfig";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{portfolioConfig.seo.title}</title>
        <meta name="description" content={portfolioConfig.seo.description} />
        <meta
          name="keywords"
          content={portfolioConfig.seo.keywords.join(", ")}
        />
        <meta property="og:title" content={portfolioConfig.seo.title} />
        <meta
          property="og:description"
          content={portfolioConfig.seo.description}
        />
        {portfolioConfig.seo.ogImage && (
          <meta property="og:image" content={portfolioConfig.seo.ogImage} />
        )}
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={portfolioConfig.seo.title} />
        <meta
          name="twitter:description"
          content={portfolioConfig.seo.description}
        />
        {portfolioConfig.seo.ogImage && (
          <meta name="twitter:image" content={portfolioConfig.seo.ogImage} />
        )}
      </Helmet>

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
