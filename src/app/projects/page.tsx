import ProjectItem from "./ProjectItem";

export default function ProjectsPage() {
  return (
    <div
      style={{
        padding: "20px",
        overflow: "auto",
        flex: 1,
      }}
    >
      <div style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        justifyItems: "center",
      }}>
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
}
