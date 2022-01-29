
const Slider = ({ title, listData }) => {
  console.log('listData ', listData);
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <div className="mb-4 pl-5 font-extrabold">
        {title}
      </div>
      <div
        className="flex overflow-x-scroll pb-10 hide-scroll-bar no-scrollbar"
      >
        <div
          className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          {
            listData.map(slide => (
              <div className="inline-block px-3">
                <div
                  className="w-64 h-120 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                  <img className="w-32 h-32"
                       src={slide.image}
                       alt={slide.title} />
                  <div className="mt-2">
                    <h2 className="mt-1 text-left ml-6 text-gray-900 w-100 h-16">{slide.title}</h2>
                    <div className="font-medium ml-6 w-32 h-16 mt-2">
                      {slide.price}€
                    </div>
                  </div>
                  <button
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Slider;
