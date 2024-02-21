export default function DocSideBar() {
  const apis = [
    {
      operationId: "getProfile",
      path: "/my/profile",
      method: "GET",
    },
    {
      operationId: "updateProfile",
      path: "/my/profile",
      method: "PATCH",
    },
    {
      operationId: "getBlogsList",
      path: "/blogs",
      method: "GET",
    },
    {
      operationId: "getBlogsCount",
      path: "/blogs/count",
      method: "GET",
    },
    {
      operationId: "getBlog",
      path: "/blogs/{id}",
      method: "GET",
    },
    {
      operationId: "addBlog",
      path: "/blogs",
      method: "POST",
    },
    {
      operationId: "updateBlog",
      path: "/blogs/{id}",
      method: "PUT",
    },
    {
      operationId: "deleteBlog",
      path: "/blogs/{id}",
      method: "DELETE",
    },
    {
      path: "/blogs/{id}",
      method: "DELETE",
    },
  ];
  return (
    <div
      className="h-full max-w-[250px] border-r border-solid border-[#2c2d3c]"
      // style={{
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "flex-start",
      // maxWidth: "300px",
      // width: "100%",
      // borderRight: "1px solid grey",
      // height: "100%",
      // }}
    >
      <ul>
        {apis.map((api) => {
          return (
            <li
              key={
                api.operationId
                  ? api.operationId
                  : `${api.method.toLowerCase()}${api.path
                      .replace("/", "")
                      .toLocaleLowerCase()}`
              }
            >
              <div className="flex flex-row px-5 py-2">
                {api.operationId ? (
                  <span className="mx-2 items-end">
                    {`${api.method} ${api.operationId}`}
                  </span>
                ) : (
                  <span className="mx-2">
                    {`${api.method} ${api.path}`}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
