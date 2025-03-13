import { useState, useEffect } from "react";

const items = [
  {
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/1378x774.jpg",
    text: "Sci-Fi. To Live, you need something to die for.",
    link: "#",
  },
  {
    image:
      "https://www.apple.com/tv-pr/shows-and-films/s/slow-horses/images/season-04/show-home-graphic-header/key-art-01/4x1/Apple_TV_Slow_Horses_key_art_graphic_header_4_1_show_home.jpg.og.jpg?1728515796318",
    text: "Thriller. Old sins cast new shadows.",
    link: "#",
  },
  {
    image: "https://ntvb.tmsimg.com/assets/p27313386_v_h8_ad.jpg?w=1280&h=720",
    text: "Action. Worst. Heist. Ever.",
    link: "#",
  },
  {
    image:
      "https://s.yimg.com/ny/api/res/1.2/JUxJzcG_6fI.eLopb_96Tg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/comingsoon_net_477/2c35a46e5148c6f1e123a962070c6d6f",
    text: "Crime. Presume nothing.",
    link: "#",
  },
  {
    image:
      "https://www.unitedworldproject.org/wp-content/uploads/2025/01/Apple_TV_Severance_key_art_16_9-Large-1200x620.jpg",
    text: "Crime. Presume nothing.",
    link: "#",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyM3M9j7GQP7sluklVK2TUjwyPzfbB4SNi8Q&s",
    text: "Crime. Presume nothing.",
    link: "#",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjtPM4dvB3n4SFu4-U0_3luNZCyYWX7IZgQ&s",
    text: "Crime. Presume nothing.",
    link: "#",
  },
];

const Slider = () => {
  const [offset, setOffset] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset - 100) % (100 * items.length));
    }, 3000); // Change slide every 3s

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative w-full h-[750px] overflow-hidden bg-black flex items-center">
      {/* Slider Track (Moves Left) */}
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {/* Duplicate images for smooth infinite effect */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <a
              href={item.link}
              className="relative flex justify-center items-center"
            >
              <img
                src={item.image}
                alt="Slide"
                className="w-[1500px] h-[1300px] object-contain rounded-xl shadow-xl"
              />
              <p className="absolute bottom-5 left-5 text-white px-4 py-2 rounded-lg text-lg">
                {item.text}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className="absolute bottom-5 right-10 border border-black bg-white text-black p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </div>
  );
};

export default Slider;
