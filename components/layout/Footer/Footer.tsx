import MainContent from "./MainContent";
import NewsLetter from "./NewsLetter";

export default function Footer() {
  return (
    <footer className="w-full bg-offWhite">
      {/* Main container */}
      <div className="container px-[clamp(1rem,-0.5rem+7.5vw,6.25rem)] py-10 flex flex-col gap-10">
        {/* Top Newsletter Bar */}
        <NewsLetter />
        {/* Main footer content */}
        <MainContent />
      </div>
    </footer>
  );
}
