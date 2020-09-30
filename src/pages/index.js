/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Article from '../components/Article';
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import UnderFooter from '../components/UnderFooter';
import Etiquette from '../components/Etiquette';

import './styles.css';

function Index() {

  const [makeUpMenu, setUpHeaderContent] = useState(false);
  const sizeIcon = 18;

  const articles = [
    <Article
      title="Many doctors use wrong test to diagnose kids food allergies"
      date="SET 05, 2020"
      description="Maecenas etos sit amet consectetur adipiscing elit ornare terminal volutpat rutrum metro amet sollicitudin interdum suspendisse pulvinar velit etos pharetra interdum, ante tellus gravida at mollis… "
      comment=" 02" />,
    <Article
      title="Many doctors use wrong test to diagnose kids food allergies"
      date="SET 05, 2020"
      description="Maecenas etos sit amet consectetur adipiscing elit ornare terminal volutpat rutrum metro amet sollicitudin interdum suspendisse pulvinar velit etos pharetra interdum, ante tellus gravida at mollis… "
      comment=" 02" />,
    <Article
      title="Many doctors use wrong test to diagnose kids food allergies"
      date="SET 05, 2020"
      description="Maecenas etos sit amet consectetur adipiscing elit ornare terminal volutpat rutrum metro amet sollicitudin interdum suspendisse pulvinar velit etos pharetra interdum, ante tellus gravida at mollis… "
      comment=" 02" />,
    <Article
      title="Many doctors use wrong test to diagnose kids food allergies"
      date="SET 05, 2020"
      description="Maecenas etos sit amet consectetur adipiscing elit ornare terminal volutpat rutrum metro amet sollicitudin interdum suspendisse pulvinar velit etos pharetra interdum, ante tellus gravida at mollis… "
      comment=" 02" />
  ]

  useEffect(() => {
    const UpHeader = () => { (window.scrollY > 10) ? setUpHeaderContent(true) : setUpHeaderContent(false); }
    window.addEventListener('scroll', UpHeader)
    {
      return () => { window.removeEventListener('scroll', UpHeader) }
    }
  }, [])

  return (
    <section>
      <Header makeUpMenu={makeUpMenu} sizeIcon={sizeIcon} upHeaderContent={makeUpMenu} />
      <section className='app--container'>
        <section className='app--box'>
          <section className='app--box--content'>
            <Etiquette title="Latest News" />
            <section className='app--box--content-all-article'>
              {
                articles.map((item, key) => (
                  <div className="app--box--content-each-article" key={key}>{item} </div>)
                )
              }
            </section>
          </section>
          <aside className='app--box--aside--content'>
            <Aside />
          </aside>
        </section>
      </section>
      <Footer />
      <UnderFooter />
    </section>
  )

}

export default Index;
