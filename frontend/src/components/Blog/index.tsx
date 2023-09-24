import React from "react";
import Style from "./style.module.css";

const Blog = () => {
  return (
    <main className={Style.wrapper}>
      <div className={Style.user}>
        <img
          className={Style.userImage}
          src="https://miro.medium.com/v2/resize:fill:112:112/1*y6C4nSvy2Woe0m7bWEn4BA.png"
          alt="alt"
        />
        <span>İsmi</span>
      </div>
      <div className={Style.main}>
        <div className={Style.description}>
          <h2 className={Style.title}>React Js</h2>
          <p>
            React has become one of the most popular front-end libraries in
            recent years due to its simplicity and flexibility. Yet, when
            applications expand in complexity, it can become tough to manage
            state, handle asynchronous input, and maintain a scalable
            architecture. We’ll look at four advanced React patterns in this
            article that will assist you in overcoming these
          </p>
        </div>
        <div>
          <img
            className={Style.img}
            src="https://miro.medium.com/v2/resize:fill:112:112/1*y6C4nSvy2Woe0m7bWEn4BA.png"
            alt="react"
          />
        </div>
      </div>
    </main>
  );
};

export default Blog;
