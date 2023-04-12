import Link from "next/link";

export default function DateTime() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      date:
        event.target.year.value +
        "/" +
        event.target.month.value +
        "/" +
        event.target.day.value,
      startTime:
        event.target.startHour.value + ":" + event.target.startMin.value,
      endTime: event.target.endHour.value + ":" + event.target.endMin.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/appointment";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const result = await response.json();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-2xl flex flex-col items-center"
      >
        <div className="grid grid-cols-2 gap-24">
          <div>
            <h3 className="text-white font-semibold mb-4">
              What is the name of this appointment?
            </h3>
            <div className="rounded-xl bg-[#0f1438] border-[#E1D9A8] border-2 px-6 pt-2 pb-4">
              <input
                type="text"
                name="name"
                id="name"
                className="outline-none text-white bg-[#0f1438] w-full h-12 text-center focus:border-b-2 focus:border-white"
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              What date does the appointment happen?
            </h3>
            <div className="rounded-xl bg-[#0f1438] border-[#E1D9A8] border-2 px-6 pt-2 pb-4">
              <div className="flex items-center w-full justify-center gap-4">
                <input
                  type="number"
                  id="day"
                  name="day"
                  required
                  minLength={1}
                  maxLength={2}
                  className="outline-none text-white bg-[#0f1438] w-16 h-12 text-center focus:border-b-2 focus:border-white"
                />
                <p className="text-white text-3xl">/</p>
                <input
                  type="number"
                  id="month"
                  name="month"
                  required
                  minLength={1}
                  maxLength={2}
                  className="outline-none text-white bg-[#0f1438] w-16 h-12 text-center focus:border-b-2 focus:border-white"
                />
                <p className="text-white text-3xl">/</p>
                <input
                  type="number"
                  id="year"
                  name="year"
                  required
                  minLength={4}
                  maxLength={4}
                  className="outline-none text-white bg-[#0f1438] w-24 h-12 text-center focus:border-b-2 focus:border-white"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              What time does the appointment start?
            </h3>
            <div className="rounded-xl bg-[#0f1438] border-[#E1D9A8] border-2 px-6 pt-2 pb-4">
              <div className="flex items-center w-full justify-center gap-4">
                <input
                  type="number"
                  id="startHour"
                  name="startHour"
                  required
                  minLength={1}
                  maxLength={2}
                  className="outline-none text-white bg-[#0f1438] w-24 h-12 text-center focus:border-b-2 focus:border-white"
                />
                <p className="text-white text-3xl">:</p>
                <input
                  type="number"
                  id="startMin"
                  name="startMin"
                  required
                  minLength={1}
                  maxLength={2}
                  className="outline-none text-white bg-[#0f1438] w-24 h-12 text-center focus:border-b-2 focus:border-white"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              What time does the appointment end?
            </h3>
            <div className="rounded-xl bg-[#0f1438] border-[#E1D9A8] border-2 px-6 pt-2 pb-4">
              <div className="flex items-center w-full justify-center gap-4">
                <input
                  type="number"
                  id="endHour"
                  name="endHour"
                  required
                  minLength={1}
                  maxLength={2}
                  className="outline-none text-white bg-[#0f1438] w-24 h-12 text-center focus:border-b-2 focus:border-white"
                />
                <p className="text-white text-3xl">:</p>
                <input
                  type="number"
                  id="endMin"
                  name="endMin"
                  required
                  minLength={1}
                  maxLength={2}
                  className="outline-none text-white bg-[#0f1438] w-24 h-12 text-center focus:border-b-2 focus:border-white"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#E1D9A8] text-black px-16 py-3 w-1/2 rounded-md mt-20 hover:bg-[#ebe5c1]"
        >
          <Link href="/">Add new appointment</Link>
        </button>
      </form>
    </>
  );
}
