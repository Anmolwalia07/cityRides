export default function BookingSection() {
  return (
    <div className="w-full bg-white mt-10 pt-16 px-6 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-12">

      {/* LEFT SIDE TEXT */}
      <div className="md:w-1/2">
        <h4 className="text-gray-700 font-bold tracking-widest uppercase">
          Best in City
        </h4>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-2">
          TRUSTED CAB SERVICE <br /> IN MELBOURNE
        </h1>

       <p className="text-gray-600 mt-6 leading-relaxed">
        Experience comfortable, safe, and reliable cab service across Melbourne.
        Whether you need airport transfers, city rides, or outstation trips, our
        professional drivers ensure a smooth and hassle-free journey. We focus on
        punctuality, clean vehicles, and transparent pricing — making us the preferred
        choice for commuters, travellers, and families across the city.
        </p>


        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">
          More..
        </button>
      </div>

      {/* RIGHT SIDE BOOKING FORM */}
      <div className="md:w-[350px] w-full">
        <div className="bg-black text-yellow-300 text-center py-3 rounded-t-xl font-bold">
          BOOK A CAB
        </div>

        <div className="bg-white shadow-xl rounded-b-xl p-6">

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 border px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-1/2 border px-3 py-2 rounded-lg"
            />
          </div>

          <input
            type="date"
            className="w-full border px-3 py-2 rounded-lg mb-4"
          />

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              placeholder="Start location"
              className="w-1/2 border px-3 py-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="End location"
              className="w-1/2 border px-3 py-2 rounded-lg"
            />
          </div>

          <select className="w-full border px-3 py-2 rounded-lg mb-6">
            <option>Select vehicle</option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Traveller</option>
          </select>

          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}
