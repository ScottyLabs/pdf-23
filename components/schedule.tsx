import clsx from "clsx";
import React from "react";

function Cell({
  color,
  rows,
  cols,
  children,
}: {
  color: "blue" | "yellow" | "pink" | "neutral";
  rows: 1 | 2 | 3;
  cols: 1 | 2 | 3;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        color === "blue"
          ? "bg-primary-blue"
          : color === "yellow"
          ? "bg-primary-yellow"
          : color === "pink"
          ? "bg-primary-pink"
          : "bg-neutral",
        rows === 1 ? "row-span-1" : rows === 2 ? "row-span-2" : "row-span-3",
        cols === 1 ? "col-span-1" : cols === 2 ? "col-span-2" : "col-span-3",
        "py-16 flex items-center justify-center -m-2 mix-blend-multiply"
      )}
    >
      {children}
    </div>
  );
}

export default function Schedule() {
  return (
    <>
      <h1 className="text-5xl font-extrabold">Schedule</h1>
      <p className="font-bold mt-2">See you there at Rashid (GHC 4401)!</p>
      <p className="font-thin">*Javascript Lab hosted separately at GHC 4307</p>
      <div className="grid grid-cols-4 max-w-3xl mx-auto mt-8 font-bold">
        <Cell color="blue" rows={1} cols={1}>
          <span className="text-xl">10:30 AM</span>
        </Cell>
        <Cell color="blue" rows={1} cols={3}>
          <span className="text-xl">
            <div>Opening Ceremony</div>
            <div className="text-sm font-thin">Rashid (GHC 4401)</div>
          </span>
        </Cell>
        <Cell color="yellow" rows={1} cols={1}>
          <div className="text-xl">11:00 AM</div>
        </Cell>
        <Cell color="yellow" rows={1} cols={1}>
          <div>
            <div className="text-xl">Content</div>
            <div className="font-thin text-sm">Rashid (GHC 4401)</div>
          </div>
        </Cell>
        <Cell color="neutral" rows={3} cols={2}>
          <div>
            <div className="text-xl">Office Hours</div>
            <div className="font-thin text-sm">GHC 4215</div>
          </div>
        </Cell>
        <Cell color="pink" rows={1} cols={1}>
          <div>
            <div className="text-xl">11:45 AM</div>
          </div>
        </Cell>
        <Cell color="pink" rows={1} cols={1}>
          <div>
            <div className="text-xl">Snacks</div>
            <div className="font-thin text-sm">GHC 4215</div>
          </div>
        </Cell>
        <Cell color="blue" rows={1} cols={1}>
          <div>
            <div className="text-xl">12:00 PM</div>
          </div>
        </Cell>
        <Cell color="blue" rows={1} cols={1}>
          <div>
            <div className="text-xl">Design</div>
            <div className="font-thin text-sm">GHC 4401</div>
          </div>
        </Cell>
        <Cell color="pink" rows={1} cols={1}>
          <div>
            <div className="text-xl">1:00 PM</div>
          </div>
        </Cell>
        <Cell color="pink" rows={1} cols={3}>
          <div>
            <div className="text-xl">Lunch & Panel</div>
            <div className="font-thin text-sm">GHC 4307</div>
          </div>
        </Cell>
        <Cell color="yellow" rows={1} cols={1}>
          <div className="text-xl">2:00 PM</div>
        </Cell>
        <Cell color="yellow" rows={1} cols={1}>
          <div>
            <div className="text-xl">HTML Lab</div>
            <div className="font-thin text-sm">GHC 4401</div>
          </div>
        </Cell>
        <Cell color="blue" rows={2} cols={1}>
          <div>
            <div className="text-xl">JavaScript Lab</div>
            <div className="font-thin text-sm">GHC 4307</div>
          </div>
        </Cell>
        <Cell color="neutral" rows={2} cols={1}>
          <div>
            <div className="text-xl">Office Hours</div>
            <div className="font-thin text-sm">GHC 4215</div>
          </div>
        </Cell>
        <Cell color="pink" rows={1} cols={1}>
          <div>
            <div className="text-xl">3:00 PM</div>
          </div>
        </Cell>
        <Cell color="pink" rows={1} cols={1}>
          <div>
            <div className="text-xl">CSS</div>
            <div className="font-thin text-sm">GHC 4401</div>
          </div>
        </Cell>
        <Cell color="yellow" rows={1} cols={1}>
          <div>
            <div className="text-xl">4:00 PM</div>
          </div>
        </Cell>
        <Cell color="yellow" rows={1} cols={3}>
          <div>
            <div className="text-xl">Break</div>
          </div>
        </Cell>
        <Cell color="blue" rows={1} cols={1}>
          <div>
            <div className="text-xl">4:15 PM</div>
          </div>
        </Cell>
        <Cell color="blue" rows={1} cols={1}>
          <div>
            <div className="text-xl">Deployment</div>
            <div className="font-thin text-sm">GHC 4401</div>
          </div>
        </Cell>
        <Cell color="neutral" rows={1} cols={2}>
          <div>
            <div className="text-xl">Office Hours</div>
            <div className="font-thin text-sm">GHC 4215</div>
          </div>
        </Cell>
        <Cell color="yellow" rows={1} cols={1}>
          <div>
            <div className="text-xl">5:15 PM</div>
          </div>
        </Cell>
        <Cell color="yellow" rows={1} cols={3}>
          <div>
            <div className="text-xl">Closing + Raffle</div>
            <div className="font-thin text-sm">GHC 4401</div>
          </div>
        </Cell>
      </div>
    </>
  );
}
