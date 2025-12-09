export default function BookingForm() {
  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-xl w-[350px]">
      <h3 className="text-xl font-semibold mb-4">
        <span className="text-yellow-500">BOOK A</span> CAB
      </h3>

      <form className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="Phone" />
        <input className="border p-2 rounded" placeholder="Start Location" />
        <input className="border p-2 rounded" placeholder="End Location" />

        <select className="border p-2 rounded">
          <option>Select vehicle</option>
          <option>Swift Dzire</option>
          <option>Scorpio</option>
          <option>Ertiga</option>
        </select>

        <button className="bg-black text-white py-2 rounded">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
