import Card from "./Card";
import { dashboardData } from "../data/dashboard";
import { overviewData } from "../data/Overview";
import Card2 from "./Card2";
import { motion } from "motion/react";

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center space-y-8 px-4">
      {/* Top section - Dashboard Cards */}
      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {dashboardData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </motion.div>

      {/* Bottom section - Overview Cards */}
      <section>
        <h2 className="text-White mb-6 text-2xl font-bold">Overview - Today</h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {overviewData.map((card2) => (
            <Card2 key={card2.id} {...card2} />
          ))}
        </motion.div>
      </section>
    </main>
  );
};

export default Main;
