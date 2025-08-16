import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="flex md:items-center items-between justify-between px-2 md:px-4 py-9 flex-col md:flex-row mx-auto">
      <div className="pb-3 md:pb-0">
        <p className="tracking-[-0.3px] text-White text-lg md:text-3xl font-bold">
          Social Media Dashboard
        </p>
        <small className="text-Text">Total Followers: 23,004</small>
      </div>
      <ThemeToggle />
    </header>
  );
}
export default Header;
