import React from "react";
import "./css/Feedback.css";
import bg from "../images/bg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";
import "../../node_modules/react-slick/dist/react-slick";
const Feedback = () => {
  const arr = [
    {
      img:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/c348.0.1052.1050a/s851x315/44178731_884706678392154_5530281237010186240_o.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=86GnSln8qzUAX9V6uYJ&_nc_ht=scontent.fbbi1-1.fna&tp=28&oh=b145b3461afabad8b3bbc2d226a890e4&oe=6032B0C2",
      details:
        "By default, simple arrows are rendered on each side. If you need to customize them and the css is not enough, use the renderArrowPrev and renderArrowNext. The click handler is passed .",
      name: "Suraj Mohanty",
      pos: "Web Developer",
    },
    {
      img:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/30221790_2002955299971533_8414518034458214400_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=dD-8QUZgAlYAX93c9Hf&_nc_ht=scontent.fbbi1-1.fna&oh=1b1c87b8f2ac858e36630e113180c2d0&oe=6034DF15",
      details:
        "By default, simple arrows are rendered on each side. If you need to customize them and the css is not enough, use the renderArrowPrev and renderArrowNext. The click handler is passed .",
      name: "Subhrajit Biswal",
      pos: "Web Developer",
    },
    {
      img:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t31.0-8/14612555_724605767692802_2637206299359818226_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_ohc=OPY2UjyHxaYAX8rrAET&_nc_ht=scontent.fbbi1-2.fna&oh=fb6724db19de193d0253fe5cfb0d563b&oe=60359067",
      details:
        "By default, simple arrows are rendered on each side. If you need to customize them and the css is not enough, use the renderArrowPrev and renderArrowNext. The click handler is passed .",
      name: "Abinash Panda",
      pos: "Web Developer",
    },
    {
      img:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/95838896_1375066802687055_2877215097149718528_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=gq-y7BPdi3cAX-andOk&_nc_ht=scontent.fbbi1-1.fna&oh=b89f2cde8f2bc39506c523b1713c2e14&oe=6032C582",
      details:
        "By default, simple arrows are rendered on each side. If you need to customize them and the css is not enough, use the renderArrowPrev and renderArrowNext. The click handler is passed .",
      name: "Smrutiranjan Das",
      pos: "Web Developer",
    },
    {
      img:
        "https://shahidafridifoundation.org/wp-content/uploads/2020/06/no-preview.jpg",
      details:
        "By default, simple arrows are rendered on each side. If you need to customize them and the css is not enough, use the renderArrowPrev and renderArrowNext. The click handler is passed .",
      name: "Srikunsa Ranjan",
      pos: "Web Developer",
    },
    {
      img:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/116335488_2691850857738842_6337386320884249054_o.jpg?_nc_cat=110&ccb=2&_nc_sid=e3f864&_nc_ohc=t7DqqqmP5PoAX-ExvTU&_nc_ht=scontent.fbbi1-2.fna&oh=fa26933594457059de4c9997bb553e58&oe=60323174",
      details:
        "By default, simple arrows are rendered on each side. If you need to customize them and the css is not enough, use the renderArrowPrev and renderArrowNext. The click handler is passed .",
      name: "Amiya Bhusan Sahoo",
      pos: "Web Developer",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    autoplaySpeed: 3000,
    className: "carousel",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          rows: 1,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          rows: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          rows: 1,
        },
      },
    ],
  };
  return (
    <div className="feedback">
      <div className="container text-center">
        <h4 className="text-center font-weight-bold">OUR BELOVED CLIENTS</h4>
        <p>Some positive vibes about us by our clients</p>
      </div>
      <div className="container">
        <Slide right>
          <Slider {...settings}>
            {arr.map((info) => (
              <div className="carousel">
                <div className="row ">
                  <div className="col-lg-12 col-md-12 image-size d-flex justify-content-around">
                    <img
                      src={info.img}
                      alt=""
                      className=" col-lg-4 col-md-4 img-fluid  my-4 "
                    />

                    <div className="cardss col-lg-8 col-md-12 d-flex justify-content-center align-items-center">
                      <div className="card-body">
                        <Flip left cascade>
                          <h4 className="my-3">{info.name}</h4>
                        </Flip>
                        <p className="my-3">{info.details}</p>
                        <span className="my-3"> {info.pos}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Slide>
      </div>
    </div>
  );
};

export default Feedback;
