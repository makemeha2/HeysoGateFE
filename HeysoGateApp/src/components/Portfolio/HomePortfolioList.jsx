import React from "react";
import usePortfolios from "../../hooks/usePortfolios";
import { toTwoDigits } from "../../utils/format";

function HomePortfolioList() {
  const { data: dataList, loading, error } = usePortfolios();

  if (loading) return <p>Loading…</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <section className="tiles">
      {dataList.map((item, index) => {
        return (
          <article className={`style${(index % 6) + 1}`}>
            <span className="image">
              <img src={`images/pic${toTwoDigits(index + 1)}.jpg`} alt="" />
            </span>
            <a href="generic.html">
              <h2>{item.title}</h2>
              <div className="content">
                <p>{item.desc}</p>
              </div>
            </a>
          </article>
        );
      })}
    </section>
  );
}

export default HomePortfolioList;
