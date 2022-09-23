import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Container from "../components/Container";
import BuiltInFormatsDemo from "../components/BuiltInFormatsDemo";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <main>
        <div className="jumbotron" styles="{{ backgroundColor: '#dbebf7;' }}">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <h2 align="center" id="tubame">NAMAKEMO Photos will carry happiness to your life.</h2>
                        <br/>
                        <div className="row">
                            <div className="col-xs-6 col-md-2 col-md-offset-2">
                                <div className="thumbnail tile tile-medium" styles="{{ border: 'none;' }}">
                                    <a href="http://tubame.github.io/ja/tutorial/tutorial.html" className="fa-links">
                                        <h4 className="tile-text">Dogs</h4>
                                        <i className="fas fa-dog"></i>
                                        <i className="fas fa-dog"></i>
                                        <i className="fas fa-dog"></i>
                                    </a>

                                </div>
                            </div>
                            <div className="col-xs-6 col-md-2">
                                <div className="thumbnail tile tile-medium tile-pink" styles="{{ border: 'none;' }}">
                                    <a href="http://tubame.github.io/ja/quickstart/quickstart.html"
                                       className="fa-links">
                                        <h4 className="tile-text">Cats</h4>
                                        <i className="fas fa-cat"></i>
                                        <i className="fas fa-cat"></i>
                                        <i className="fas fa-cat"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-2">
                                <div className="thumbnail tile tile-medium tile-lime" styles="{{ border: 'none;' }}">
                                    <a href="http://tubame.github.io/ja/docs/docs.html" className="fa-links">
                                        <h4 className="tile-text">GUIDES</h4> <i className="fa fa-book"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xs-6 col-md-2">
                                <div className="thumbnail tile tile-medium tile-orange" styles="{{ border: 'none;' }}">
                                    <a href="http://tubame.github.io/ja/knowledge/knowledge.html" className="fa-links">
                                        <h4 className="tile-text">ABOUT</h4> <i className="fa fa-question-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <hr />
      <Container />
      <BuiltInFormatsDemo />

      <hr />
      {/* Render the form here */}

    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "newsletter", // Add newsletter translations
        "built-in-demo", // Add the built-in demo translations
      ])),
      // Will be passed to the page component as props
    },
  };
}
