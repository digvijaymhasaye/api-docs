"use client";
import { useRouter } from "next/navigation";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import TopBar from "@/components/TopBar";

function RecentProjects() {
  const router = useRouter();

  const handleClick = (e) => {
    console.info(e);
    e.preventDefault();
    router.push("/docs/1");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "1000px",
        margin: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h4 className="text-lg font-semibold">Recent Projects</h4>
        <ul style={{ padding: "5px" }}>
          <li
            className="my-4 mr-4"
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <Card className="w-[230px]" onClick={handleClick}>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
              </CardHeader>
              <CardFooter>
                <p>v1.0.0</p>
              </CardFooter>
            </Card>
          </li>
          <li className="my-4 mr-4" style={{ display: "inline-block" }}>
            <Card className="w-[230px]" title="Project 2" onClick={handleClick}>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
              </CardHeader>
              <CardFooter>
                <p>v1.0.0</p>
              </CardFooter>
            </Card>
          </li>
          <li className="my-4 mr-4" style={{ display: "inline-block" }}>
            <Card className="w-[230px]" title="Project 2" onClick={handleClick}>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
              </CardHeader>
              <CardFooter>
                <p>v1.0.0</p>
              </CardFooter>
            </Card>
          </li>
          <li className="my-4 mr-4" style={{ display: "inline-block" }}>
            <Card className="w-[230px]" title="Project 2" onClick={handleClick}>
              <CardHeader>
                <CardTitle>Project 4</CardTitle>
              </CardHeader>
              <CardFooter>
                <p>v1.0.0</p>
              </CardFooter>
            </Card>
          </li>
          {/* <li className="my-4 mr-4" style={{ display: "inline-block" }}>
            <Card className="w-[250px]" title="Project 2">
              <CardHeader>
                <CardTitle>Project 5</CardTitle>
              </CardHeader>
              <CardContent>
                <p>v1.0.0</p>
              </CardContent>
            </Card>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

function RecentActivity() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "1000px",
        margin: "10px",
        padding: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h4 className="text-lg font-semibold">Recent Activity</h4>
        <div style={{ padding: "10px" }}>
          <ul role="list" className="divide-y divide-gray-600">
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <span className="text-sm font-semibold leading-6 text-gray-200">
                    Digvijay Mhasaye{" "}
                  </span>
                  <span className="mt-1 truncate text-sm leading-5 text-gray-400">
                    edited the project{" "}
                  </span>
                  <span className="mt-1 truncate text-sm leading-5 text-gray-200">
                    Sealink API
                  </span>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    13 hrs ago
                  </p>
                </div>
              </div>
              {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Co-Founder / CEO</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
              </div> */}
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <span className="text-sm font-semibold leading-6 text-gray-200">
                    Vijay Solanki{" "}
                  </span>
                  <span className="mt-1 truncate text-sm leading-5 text-gray-400">
                    edited the project{" "}
                  </span>
                  <span className="mt-1 truncate text-sm leading-5 text-gray-200">
                    Sealink API
                  </span>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    January 01, 2024
                  </p>
                </div>
              </div>
              {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Co-Founder / CTO</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
              </div> */}
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <span className="text-sm font-semibold leading-6 text-gray-200">
                    Yash Patil{" "}
                  </span>
                  <span className="mt-1 truncate text-sm leading-5 text-gray-400">
                    created a project{" "}
                  </span>
                  <span className="mt-1 truncate text-sm leading-5 text-gray-200">
                    Test
                  </span>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    December 11, 2023
                  </p>
                </div>
              </div>
              {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Business Relations</p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              </div> */}
            </li>
            {/* <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Lindsay Walton</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">lindsay.walton@example.com</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Front-end Developer</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Courtney Henry</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">courtney.henry@example.com</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Designer</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Tom Cook</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">tom.cook@example.com</p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">Director of Product</p>
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TopBar />
      <RecentProjects />
      <RecentActivity />
    </div>
  );
}
