import "../../styles/LatestNews.module.css";
import NewsCard from "./NewsCard";

export default function LatestNews() {
  return (
    <div className="py-8 mx-5">
      <h2 className="text-2xl font-bold text-primary border-b border-primary mb-6 uppercase">
        Latest News
      </h2>
      {/* news */}
      <div className="flex gap-6">
        <a href="" className="w-[50%]">
          <div className="feature-news  flex flex-col text-white justify-center px-6 rounded-md">
            <h2 className="text-3xl font-bold">Mbappe v Messi</h2>
            <p>
              Statistics, head-to-head records, milestones and trivia feature as
              we spotlight the Argentina and France No10s ahead of the Qatar
              2022 final.
            </p>
          </div>
        </a>
        <div className="w-[50%]">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
