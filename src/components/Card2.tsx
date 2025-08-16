import {motion} from 'motion/react'

type Card2Props = {
  title: string;
  icon: string;
  number: string;
  percentage: string;
  arrow: string;
  color: string;
};

const Card2 = ({
  title,
  icon,
  number,
  percentage,
  arrow,
  color,
}: Card2Props) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30}}
    animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
     whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
    >

      <div className="bg-Card-BG flex w-[255px] flex-col justify-between rounded-md p-6 gap-5">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <span className="text-text text-sm font-bold">{title}</span>
          <img src={icon} alt={title} />
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <p className="text-White text-3xl font-bold">{number}</p>
          <div className="flex items-center gap-1">
            <img src={arrow} alt="change arrow" />
            <p className={`font-bold ${color}`}>{percentage}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card2;
