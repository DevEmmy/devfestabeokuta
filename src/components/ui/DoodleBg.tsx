import React from 'react'

const DoodleBg = () => {
  const IconsaxPattern =
    "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23000' stroke-opacity='0.10' stroke-width='2' fill='none'%3E%3Crect x='10' y='10' width='25' height='25' rx='5'/%3E%3Cpath d='M60 15c10 10 10 30 0 40-10-10-10-30 0-40z'/%3E%3Ccircle cx='120' cy='25' r='12'/%3E%3Cpath d='M160 10l15 15-15 15-15-15z'/%3E%3Cpath d='M20 70l15 15 15-15'/%3E%3Cpath d='M80 60h20M90 50v20'/%3E%3Crect x='130' y='55' width='30' height='18' rx='3'/%3E%3Ccircle cx='175' cy='70' r='10'/%3E%3Cpath d='M20 120h25v25H20z'/%3E%3Cpath d='M70 120l20 10-20 10z'/%3E%3Cpath d='M110 110l10 20-20 10z'/%3E%3Ccircle cx='150' cy='120' r='12'/%3E%3Cpath d='M180 110h10v25h-10z'/%3E%3Cpath d='M30 160c10-15 30-15 40 0'/%3E%3Ccircle cx='95' cy='165' r='8'/%3E%3Cpath d='M130 150l15 15-15 15-15-15z'/%3E%3Cpath d='M165 150h25'/%3E%3Ccircle cx='185' cy='175' r='6'/%3E%3C/g%3E%3C/svg%3E\")";

  return (
    <div
      className="absolute inset-0 text-[#111]"
      style={{
        backgroundImage: IconsaxPattern,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    />
  )
}

export default DoodleBg