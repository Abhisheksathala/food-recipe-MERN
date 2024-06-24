import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white mt-10 py-16 rounded-t-md ">
      <div className="max-w-screen-x1 mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
              subscribe to our news letter..
            </h1>
            <p className="mt-4 text-lg leading-8">
              Get notified when we add new recipes. Subscribe to our newsletter
            </p>
          </div>
        </div>

        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="w-full border border-gray-300 px-5 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
          />

          <button
            type="submit"
            className="bg-primary text-white px-5 py-3 rounded-md mt-4"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscription;
