import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: block;
	width: 100%;
	padding: 5em 1.5em 1.5em 16.5em;
`

const Content = styled.div`
  padding: 1.5em;
`

const Header = styled.p`
  font-size: 1.5rem;
	line-height: 2rem;
`
const PT2 = styled.div`
  padding-top: 0.5rem;
`

const TextGrey = styled.p`
  color: rgb(156 163 175);
  font-size: 1.125rem;
	line-height: 1.75rem;
`

const Image = styled.img`
	width: 24rem;
	float: right;
`
const TextBase = styled.p`
  font-size: 1rem;
	line-height: 1.5rem;
	padding-top: 1rem;
	margin: 0;
`
const Home = () => {
  return (
    <Section>
      <Content>
        <Header>
          Welcome to Northwind Traders
        </Header>
        <PT2>
          <TextGrey>
            Running on Cloudflare's D1
          </TextGrey>
        </PT2>
        <Image
          src="https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public"
          alt="home-page"
        />
        <TextBase>
          {"This is a demo of the Northwind dataset, running on "}
          <a
            href="https://workers.cloudflare.com/"
            target="_new">{"Cloudflare Workers"}
          </a>
          {", and D1 - Cloudflare's newest SQL database, running on SQLite."}
        </TextBase>
        <TextBase>
         {"Read our "}
          <a
            href="https://blog.cloudflare.com/introducing-d1"
            target="_new">{"D1 announcement"}
          </a> 
         {" to learn more about D1."}
        </TextBase>
        <TextBase>
          {"This dataset was sourced from "}
          <a
            href="https://github.com/jpwhite3/northwind-SQLite3"
            target="_new">
            {"northwind-SQLite3."}
          </a>
        </TextBase>
        <TextBase>
          You can use the UI to explore Supplies, Orders, Customers, Employees and Products, or you can use search if you know what you're looking for.
        </TextBase>
      </Content>
    </Section>
  );
};

export default Home;