import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative"; // Ensure you import the effect's styles
import { EffectCreative } from "swiper/modules"; // Import EffectCreative module

function MovieRecomendation({ title, poster_path, plot }) {
  return (
    <div className="movie">
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]} // Pass the EffectCreative module here
        className="movieSwiper"
      >
        <SwiperSlide>
          <img src={poster_path} className="card-img-top" alt={title} />
        </SwiperSlide>

        <SwiperSlide>
          <div className="plot">
            <h3>{title}</h3>
            <p>{plot}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MovieRecomendation;
