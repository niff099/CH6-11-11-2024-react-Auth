import { useEffect, useState } from "react";
import axios from "axios";

import "../App.css";

function HomeView() {
  //store data secara state reactnya
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  // fetch data => fetch/axios
  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get("http://localhost:3000/api/v1/shops", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);

        const data = response.data;
        if (data.isSuccess) {
          setShops(data.data.shops);
        } else {
          console.log(response);
          setError("error");
        }
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const filteredShops = shops.filter((shop) =>
    shop.products[0].name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* HEADER */}
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>

          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700">
              Our Services
            </a>

            <a href="#" className="text-gray-700">
              Why Us
            </a>

            <a href="#" className="text-gray-700">
              Testimonial
            </a>

            <a href="#" className="text-gray-700">
              FAQ
            </a>
          </nav>
        </div>

        <button className="px-4 py-2 text-white bg-green-500 rounded-md">
          Register
        </button>
      </header>

      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Cari nama produk..."
          className="p-2 border rounded-md w-full"
        />
      </div>
      <main className=""></main>
      {loading && <p>loading</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.length === 0 ? (
            <p className="text-gray-500">No Data Available</p>
          ) : (
            filteredShops.map((shop, index) => (
              <div
                key={index}
                className="p-4 border rounded-md bg-white shadow-md"
              >
                <img
                  src={shop.products[0].images[0]}
                  alt={shop.products[0].name}
                  className="w-full h-40 object-cover mb-4"
                />
                <h3 className="font-semibold">{shop.products[0].name}</h3>
                <p className="text-green-500 font-bold">
                  Rp {shop.products[0].price} / hari
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                  <span>4 orang</span> <span>Manual</span>{" "}
                  <span>Tahun 2020</span>
                </div>
                <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                  Pilih Mobil
                </button>
              </div>
            ))
          )}
        </section>
      )}
    </>
  );
}

export default HomeView;
