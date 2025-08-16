import Card from "./Card";
import { dashboardData } from "../data/dashboard";
import { overviewData } from "../data/Overview";
import Card2 from "./Card2";

const Main = () => {
  return (
    <main className="space-y-8 px-4 flex justify-center items-center flex-col">
      {/* Top section - Dashboard Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {dashboardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      {/* Bottom section - Overview Cards */}
      <section>
        <h2 className="text-2xl font-bold text-White mb-6">
          Overview - Today
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {overviewData.map((card2) => (
            <Card2 key={card2.id} {...card2} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
