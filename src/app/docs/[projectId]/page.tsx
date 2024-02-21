import TopBar from "@/components/TopBar";
import DocSideBar from "./SideBar";
import MainArea from "./MainArea";

export default function DocsPage() {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <TopBar />
      <div className="h-full flex-row">
        <DocSideBar />
        <MainArea />
      </div>
    </div>
  );
}
