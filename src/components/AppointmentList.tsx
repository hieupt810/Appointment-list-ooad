import Link from "next/link";
import { useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

export default function AppointmentList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const callData = async () => {
      const endpoint = "http://localhost:3000/api/appointment";
      const data = await fetch(endpoint, {
        method: "GET",
      }).then((data) => data.json());
      setData(data);
    };
    callData();
  }, [data]);

  return (
    <div>
      <div className="w-1/2 mx-auto items-center flex justify-around mb-8">
        <h3 className="text-3xl text-white text-center uppercase">
          List of available appointments
        </h3>
        <Link href="/addAppointment" className="p-2">
          <IoAddCircleSharp className="text-white text-2xl" />
        </Link>
      </div>
      <div className="flex flex-col gap-8 overflow-auto w-1/2 mx-auto">
        {data.map((value: any, index: any) => {
          return (
            <div
              key={index}
              className="rounded-xl border-[#E1D9A8] border-2 overflow-hidden"
            >
              <div className="flex items-center">
                <p className="text-lg border-[#E1D9A8] bg-[#E1D9A8] p-2 w-28 text-center text-black">
                  Name
                </p>
                <p className="text-lg text-white px-4">{value.name}</p>
              </div>

              <div className="flex items-center border-t-2 border-[#E1D9A8]">
                <p className="text-lg bg-[#E1D9A8] p-2 w-28 text-center text-black">
                  Date
                </p>
                <p className="text-lg text-white px-4">{value.date}</p>
              </div>

              <div className="flex items-center border-t-2 border-[#E1D9A8]">
                <p className="text-lg bg-[#E1D9A8] p-2 w-28 text-center text-black">
                  Start time
                </p>
                <p className="text-lg text-white px-4">{value.startTime}</p>
              </div>

              <div className="flex items-center border-t-2 border-[#E1D9A8]">
                <p className="text-lg bg-[#E1D9A8] p-2 w-28 text-center text-black">
                  End time
                </p>
                <p className="text-lg text-white px-4">{value.endTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
