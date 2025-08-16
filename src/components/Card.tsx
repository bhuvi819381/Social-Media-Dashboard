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
    <div
      className={`bg-Card-BG w-[255px] border-t-5 ${borderTop} flex flex-col items-center justify-center gap-4 rounded-md p-4 text-center`}
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
    </div>
  );
};
export default Card;
