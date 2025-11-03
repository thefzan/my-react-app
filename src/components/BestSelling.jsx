
import BestSellingProduct from "./BestSellingProduct";

const BestSelling = () => {
  return (
    <div className="w-[370px]  bg-[#ffffff] m-auto rounded-2xl mt-6 shadow-2xl">
      <h1 className="ms-9 font-semibold mb-1">Best Selling Products</h1>
      <div className="bg-white w-[340px] m-auto flex justify-between flex-wrap gap-2 pb-2">
        <BestSellingProduct/>
        <BestSellingProduct/>
        <BestSellingProduct/>
        <BestSellingProduct/>
        <BestSellingProduct/>
        <BestSellingProduct/>
      </div>
    </div>
  );
};

export default BestSelling;
