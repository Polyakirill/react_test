import React from 'react';
import { Container, Nav, Section, HeroBanner } from './components';

import './App.scss';
import FirstImg from './img/01.png';
import SecondImg from './img/02.png';
import ThirdImg from './img/03.png';
import AccountIcon from './img/Icons/account.png';


function App() {
  return (
    <>
      <Nav
        menuItems={[
          {
            label: 'Equipment',
            href: '#01'
          },
          {
            label: 'About Us',
            href: '#02'
          },
          {
            label: 'Blog',
            href: '#03'
          },
        ]}
        accountButton={{
          label: 'Account',
          href: '#',
          icon: AccountIcon,
        }}
      />
      <HeroBanner />
      <Container>
        <Section
          number='01'
          tagline='get started'
          title='What level of  hiker are you?'
          text='Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?'
          link='read more'
          img={FirstImg}
        />
        <Section
          number='02'
          tagline='Hiking Essentials'
          title='Picking the right Hiking Gear!'
          text='The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.'
          link='read more'
          img={SecondImg}
          changePlaces
        />
        <Section
          number='03'
          tagline='where you go is the key'
          title='Understand Your Map & Timing'
          text='To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..'
          link='read more'
          img={ThirdImg}
        />
      </Container>
    </>
  );
}

export default App;
