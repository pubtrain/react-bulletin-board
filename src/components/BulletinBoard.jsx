import React from 'react';
import ReactPost from './ReactPost';

function BulletinBoard() {
  const data = [
    {
      question: 'Vad är tre fördelar med att använda React?',
      answer:
        'React underlättar våran utvecklartid och våra plånböcker, det går snabbare att hantera HTML och JS i React. ReactJS skapar enkel kod som hjälper oss att undvika oförutsägbara scenarier. Vi som utvecklare kan återanvända våra enskilda delar i koden och göra ändringar i den.',
    },
    {
      question:
        'Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?',
      answer:
        'Om en hemsida är kodad i ett ramverk som använder sig av SPA så hämtas hela sidan direkt, utan att du behöver vänta på att HTML ska hämtas och sedan söka efter resterande information. En sådan hemsida tar lite längre tid att ladda från första början, men när man sedan börjar navigera sig så går det väldigt fort. Man kan säga att SPA hämtar all info från sidan direkt, och sedan navigerar man sig runt där, jämfört med klassiska sidor där man hämtar relevant data för varje sida man klickar sig in på.',
    },
    {
      question: 'Vad finns det för skillnader mellan React och Angular?',
      answer:
        'En stor skillnad är att Angular är mer inbakat med andra verktyg, medans React behöver fler externa tillägg för att bli optimalt, t.ex. Redux. En annan är att React är baserat på virtual DOM, medans Angular är baserat på Model View Controller. En tredje skillnad är att React är baserat på JavaScript medans Angular är baserat på TypeScript.',
    },
  ];
  return (
    <>
      {data.map((faq, i) => {
        return <ReactPost key={i} props={faq} />;
      })}
    </>
  );
}

export default BulletinBoard;
