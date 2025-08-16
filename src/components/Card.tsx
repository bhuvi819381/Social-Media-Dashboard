import { motion } from "motion/react";

type CardProps = {
  icon: string;
  title: string;
  followers: number | string;
  change: number;
  arrow: string;
  borderTop: string;
  textColor: string;
};

const Card = ({
  icon,
  title,
  followers,
  change,
  arrow,
  borderTop,
  textColor,
}: CardProps) => {
  return (
    <motion.div
      className={`bg-Card-BG w-[255px] border-t-5 ${borderTop} flex flex-col items-center justify-center gap-4 rounded-md p-4 text-center`}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="flex items-center justify-center gap-2">
        <span>
          <img src={icon} alt="" />
        </span>
        <span className="text-xs">{title}</span>
      </div>
      <p className="text-White text-6xl font-bold">{followers}</p>
      <p className="text-text text-xs tracking-[0.3em] uppercase">followers</p>
      <div className="flex items-center justify-center gap-2">
        <img src={arrow} alt="" />

        <p className={`${textColor} font-bold`}>{change} Today</p>
      </div>
    </motion.div>
  );
};
export default Card;
