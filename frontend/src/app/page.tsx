import Card from "./components/Card";
import Chart from "./components/Chart";
import HalfTable from "./components/table/HalfTable";

export default function Home() {
  return (
    <div>
      {/* Main Container */}
      <div className="relative bg-white p-4 md:p-8 lg:p-12">
        {/* Revenue Cards */}
        <Card />

        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Chart */}
          <Chart />

          {/* Right Sales Order Table */}
          <HalfTable />
        </div>
      </div>
    </div>
  );
}
