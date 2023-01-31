import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <section className='home-section'>
      <div className="home-content">
        <p className="home-header">
          Welcome to Northwind Traders
        </p>
        <div className="pt-2">
          <p className="text-grey-400 text-lg">
            Running on Cloudflare's D1
        </p>
        </div>
        <img
          className="home-image"
          src="https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public"
          alt="home-page"
        />
        <p className="text-base">
          {"This is a demo of the Northwind dataset, running on "}
          <a className="link" href="https://workers.cloudflare.com/" target="_new">{"Cloudflare Workers"}</a>
          {", and D1 - Cloudflare's newest SQL database, running on SQLite."}
        </p>
        <p className="text-base">
         {"Read our "}
          <a className="link" href="https://blog.cloudflare.com/introducing-d1" target="_new">{"D1 announcement" }</a> 
         {" to learn more about D1."}
        </p>
        <p className="text-base">
          {"This dataset was sourced from "}
          <a className="link" href="https://github.com/jpwhite3/northwind-SQLite3" target="_new">
          {"northwind-SQLite3."}</a>
        </p>
        <p className="text-base">
          You can use the UI to explore Supplies, Orders, Customers, Employees and Products, or you can use search if you know what you're looking for.
        </p>
      </div>
    </section>
  );
};

export default Home;