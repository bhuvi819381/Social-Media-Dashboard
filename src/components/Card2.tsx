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
    <div className="">

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
    </div>
  );
};

export default Card2;
