import React from "react";

const Cart = () => {
  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24 px-4 font-bold">
      <h1 className="my-12 font-bold">Cart items</h1>
      <ul>
        <li className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/images/peproni.png" alt="pizza" />
              <span className="font-bold ml-4 w-48">Double Cheese</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                -
              </button>
              <b className="px-2">2</b>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                +
              </button>
            </div>
            <span>Rs: 500</span>
            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
              Delete
            </button>
          </div>
        </li>
        <li className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img className="h-16" src="/images/peproni.png" alt="pizza" />
              <span className="font-bold ml-4 w-48">Double Cheese</span>
            </div>
            <div className="flex flex-col md:flex-row">
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                -
              </button>
              <b className="px-2">2</b>
              <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">
                +
              </button>
            </div>
            <span>Rs: 500</span>
            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">
              Delete
            </button>
          </div>
        </li>
      </ul>
      <hr className="my-6" />
      <div>Grand Total: Rs1000</div>
      <div>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Cart;