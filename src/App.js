import React from 'react';
import Tapioka from './Tapioka';

const TapiokaCooking = [
  { count: 0, Name: '抹茶', Topping: 'きな粉', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjawxsADevYO5C6omq2Z8-L2gp95ozhBhlGrKYD9blcjTDTsJ&s' },
  { count: 0, Name: 'ココア', Topping: '生クリーム', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9J9MaTdr4YDyBGlPXvJP43EjHquxSRrGu_6mOJkhr2Ff5E09lg&s' },
  { count: 0, Name: '北海道牛乳', Topping: '黒蜜', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DLm75Tbq-ookaTFbGIc8V3KXVVKfdRIe_C4jtNAFhhJ86hHr&s' }
];

function App() {

  return (
    <div >
      【menu】
      <Tapioka count={TapiokaCooking[0].count} Name={TapiokaCooking[0].Name} Topping={TapiokaCooking[0].Topping} img={TapiokaCooking[0].img}></Tapioka>
      <Tapioka count={TapiokaCooking[1].count} Name={TapiokaCooking[1].Name} Topping={TapiokaCooking[1].Topping} img={TapiokaCooking[1].img}></Tapioka>
      <Tapioka count={TapiokaCooking[2].count} Name={TapiokaCooking[2].Name} Topping={TapiokaCooking[2].Topping} img={TapiokaCooking[2].img}></Tapioka>

    </div>
  );
}

export default App;
