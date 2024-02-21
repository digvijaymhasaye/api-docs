"use client";

import { useRouter } from 'next/router';

export default function ProjectItem() {
  const router = useRouter();
  return (
    <div
      className="md:container md:mx-auto border-slate-500 border m-5 p-5 rounded"
      onClick={() => router.push('/docs/1')}
    >
      <h3 className="font-bold text-lg">Project Name</h3>
      <h6 className="text-xs">Updated 1d ago</h6>
    </div>
  );
}
