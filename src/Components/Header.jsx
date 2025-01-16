import { CiSettings } from "react-icons/ci";
function Header({ length }) {
  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = new Date(date).getDate();
    const month = months[new Date(date).getMonth()]; // Get the month as a string

    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";

    return `${month} ${day}${suffix}`;
  };
  const date = "2025-10-13";
  return (
    <header className="bg-[#162B3B] w-full  h-24 flex justify-between px-4 lg:p-10  items-center  text-[#51E5FE]">
      <div>
        <p className="text-[#51E5FE] md:text-2xl lg:text-3xl">
          {formatDate(date)}
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl">{length} Active Tasks</p>
      </div>

      <h1 className="  text-[#51E5FE] md:text-2xl lg:text-4xl ">To Do List</h1>
      <CiSettings className="text-4xl hidden lg:block" />
    </header>
  );
}

export default Header;
