"use client";

export default function NavbarCoverLayer() {
  return (
    <div
      className="fixed left-0 right-0 pointer-events-none h-[87px] md:h-[119px]"
      style={{
        top: "0px",
        backgroundColor: "#2d2d34",
        zIndex: 10000,
        width: "100vw",
      }}
    />
  );
}
