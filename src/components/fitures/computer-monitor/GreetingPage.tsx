import pixelCat from "../../../assets/pixel-cat.png";

export default function GreetingPage() {
  const stars = [
    { top: "10%", left: "20%" },
    { top: "15%", left: "60%" },
    { top: "5%", left: "80%" },
    { top: "25%", left: "10%" },
    { top: "30%", left: "90%" }, //5
    { top: "40%", left: "15%" },
    { top: "45%", left: "75%" },
    { top: "60%", left: "8%" },
    { top: "55%", left: "95%" },
    { top: "60%", left: "25%" }, //10
    { top: "65%", left: "85%" },
    { top: "85%", left: "35%" },
    { top: "75%", left: "70%" },
    { top: "80%", left: "20%" },
    { top: "85%", left: "60%" }, //15
    { top: "5%", left: "45%" },
    { top: "95%", left: "50%" },
    { top: "20%", left: "40%" },
    { top: "35%", left: "55%" },
    { top: "90%", left: "80%" },
  ];

  return (
    <div className="greeting-container">
        {stars.map((pos, index) => (
          <span
            key={index}
            className='greeting-container__pixel-star'
            style={{ 
              top: pos.top, 
              left: pos.left,
              animationDelay: `${Math.random() * 1000}ms` 
            }}
          />
        ))}

      <img
        src={pixelCat}
        className="greeting-container__pixel-cat"
        alt="pixel cat"
        width="300"
        height="224"
        loading="lazy"
      />
    </div>
  );
}