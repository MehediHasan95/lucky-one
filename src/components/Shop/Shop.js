import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import LuckyCar from "../LuckyCar/LuckyCar";

const Shop = () => {
  const [cars, setCars] = useState([]);
  const [items, setItems] = useState([]);
  const [lucky, setLucky] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleAddToCart = (cart) => {
    const newCart = [...items, cart];
    setItems(newCart);
  };

  const luckyCar = (spin) => {
    const selectedName = spin[Math.floor(Math.random() * spin.length)];
    setLucky(selectedName);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-10">
          <div className="row">
            {cars.map((element) => (
              <Car
                key={element.id}
                cars={element}
                handleAddToCart={handleAddToCart}
                luckyCar={luckyCar}
              ></Car>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-2">
          <h3>Selected Car</h3>
          <hr />
          {items.map((element) => (
            <LuckyCar key={element.id} luckycar={element}></LuckyCar>
          ))}
          <button
            type="button"
            className="btn btn-outline-success w-100 rounded-0 mb-2"
            onClick={() => luckyCar(items)}
          >
            CHOOSE 1 FOR ME
          </button>
          <button
            type="button"
            className="btn btn-outline-danger w-100 rounded-0 mb-4"
            onClick={() => setItems([])}
          >
            CHOOSE AGAIN
          </button>

          {
            <div className="text-center">
              <img src={lucky.img} alt="" className="w-100" />
              <h5>{lucky.name}</h5>
            </div>
          }
        </div>
      </div>
      {/* Question */}
      <div className="my-5">
        <h1 className="text-center">Question and Answer</h1>
        <div class="card mb-3">
          <div class="card-body">
            <h3 class="card-title">How React work?</h3>
            <p class="card-text">
              React কাজ করতে মুলত দুইটা node package এর দরকার পরে একটা হল react
              অন্যটি হল react-dom যখন আমরা কোন একটা component এ কোড লিখি তখন
              সেটা JavaScript code থাকে আর এই javascript কোড টাকে HTML code এ
              কনভার্ট করার প্রয়োজন পরে কারণ আমরা ওয়েবসাইটে জা দেখতে পাই সবই HTML
              code আর এই HTML code এ কনভার্ট করার কাজ টা যে করে সেটা হল react
              নামে package. এখন কাজ হল এই HTML code টাকে সরাসরি ওয়েবসাইট এ
              দেখানো আর এই কাজ টা যে করে সে হল react-dom.
            </p>
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body">
            <h3 class="card-title">Props vs State</h3>
            <p class="card-text">
              Props are read-only. State can be changes asynchronous.Props
              cannot be modified. State can be modified using this.setState
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
