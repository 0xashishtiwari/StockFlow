import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <Hero />

      {/* Kite */}
      <LeftSection
        imageURL="media/kite.png"
        productName="Kite"
        productDescription="Kite is our premier trading platform, built for speed, precision, and clarity. It offers real-time market data, advanced charts, and seamless order execution. Whether you’re exploring the market for the first time or executing complex strategies, Kite’s intuitive interface adapts to your style. Available on web and mobile, trading has never been this effortless."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        AppStore="#"
      />

      {/* Console */}
      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDescription="Console is a comprehensive portfolio management hub. Track your investments across assets, analyze performance trends, and access actionable insights—all from a single dashboard. Designed for both individual investors and professionals, Console makes decision-making smarter and portfolio management simpler."
        learnMore="#"
      />

      {/* Coin */}
      <LeftSection
        imageURL="media/coin.png"
        productName="Coin"
        productDescription="Coin revolutionizes long-term investing in mutual funds and bonds. With zero commission on direct mutual funds, seamless portfolio tracking, and goal-based planning tools, Coin empowers you to grow your wealth efficiently. Its clean and transparent design ensures investing is effortless and paperless."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        AppStore="#"
      />

      {/* Kite Connect API */}
      <RightSection
        imageURL="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Kite Connect API is a developer-first platform enabling algorithmic trading, custom dashboards, and advanced order strategies. With secure, low-latency access to market data and trade execution, it’s perfect for fintech developers and trading startups looking to build powerful trading tools."
        learnMore="#"
      />

      {/* Varsity Mobile */}
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity Mobile"
        productDescription="Varsity Mobile turns complex stock market concepts into interactive learning modules. With quizzes, bite-sized lessons, and visual guides, it’s ideal for students, hobbyists, and aspiring traders. Learn at your own pace and gain the confidence to navigate the financial markets effectively."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        AppStore="#"
      />

      <p className="text-center">
        Want to know more about our technology stack? Check out the StockFlow tech blog.
      </p>

      <Universe />
    </>
  );
};

export default ProductPage;
