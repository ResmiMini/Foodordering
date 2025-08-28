
export default function About() {
  return (
    <>
     <section className="text-center">
      <h1 className="text-4xl font-bold mb-4"><br></br>About Us</h1>
      <hr></hr>
      <p className="text-xl ">
        Hunger Station🍕 is your go-to food delivery app.<br></br> We bring delicious meals
        from your favorite restaurants right to your doorstep 🍹, <br></br>fast and fresh.🛵
      </p>
      <div className="flex justify-between items-right">
  <div>
    <img 
      src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/Sandwich-1-1194x1536.webp" 
      className="w-[6cm] h-[6cm] animate-pulse" 
      alt="Sandwich" 
    />
  </div>
  <div>
    <img 
      src="https://www.swiggy.com/corporate/wp-content/uploads/2024/10/yoga-day-2-1024x944.webp" 
      className="w-[6cm] h-[6cm] animate-bounce" 
      alt="Yoga"
    />
  </div>
</div>
    </section> 
    </>
  );
}
