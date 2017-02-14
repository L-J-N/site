import React, { Component } from 'react';

import {
  Section,
  Columns,
  Carousel,
  Image,
  Hero,
  Heading,
  Paragraph,
} from '../../components';

import  ProjetDuMois from '../../components/ProjetDuMois';
import  Categorie from '../../components/Categorie';

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque risus mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ellentesque risus mi.";

const HeroText = (props) => {
  return (
    <div>
      <Heading>{props.title}</Heading>
      <Paragraph>{props.text}</Paragraph>
    </div>
  );
};

const AppCarousel = () => {
  return (<Carousel>
    {
      [1, 2, 3, 4, 5, 6].map((i) => {
        return <Image key={i} src={`${process.env.PUBLIC_URL}/image/slider-${i}.jpg`} />;
      })
    }
  </Carousel>
  );
};

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero size="small" background={<AppCarousel />} />
        <Section>
          <Columns justify="center" size="large" >
            <HeroText title="Découvrir les projets" text={text} />
            <HeroText title="Démarrer un projet" text={text} />
          </Columns>
        </Section>
        <Section pad="medium">
          <ProjetDuMois {...this.props.projetDuMois} />
       </Section>
       <Categorie title="Projets populaires" liste={this.props.listeProjet} />
      </div>
    );
  }
}
