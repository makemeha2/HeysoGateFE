import React from "react";

import HomePortfolioList from "../components/Portfolio/HomePortfolioList";

function Home() {
  return (
    <div className="inner">
      <header>
        <h1>문제를 해결하는 손, 가능성을 여는 제품</h1>
        <p>
          작은 성과를 매일 쌓아 큰 가치를 만들어갑니다.
          <br />
          Hands that solve problems, products that unlock possibilities.
          Building small achievements every day to create lasting value.
        </p>
      </header>

      <HomePortfolioList />
    </div>
  );
}

export default Home;
