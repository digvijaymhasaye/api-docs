import { MouseEventHandler } from 'react';

export default function Card({ title }: { title: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        minHeight: "100px",
        minWidth: "180px",
        border: "1px solid grey",
        borderRadius: "5px",
      }}
    >
      <h2 className='text-base font-semibold'>{title}</h2>
      <p
        className='text-sm'
      >
        v1.0.0
      </p>
    </div>
  );
}
