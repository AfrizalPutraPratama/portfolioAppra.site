import "./slider/tourist-slider.js";

class PhotoFromTouristElement extends HTMLElement {
  datas = [
    {
      destination: "FIGMA TRAINING",
      photoBy: "AFRIZAL PUTRA PRATAMA",
      image: "/dist/assets/images/figma.jpg",
    },
    {
      destination: "PHOTO COMPETITION",
      photoBy: "AFRIZAL PUTRA PRATAMA",
      image: "/dist/assets/images/foto.jpg",
    },
    {
      destination: "VIDEO COMPETITION",
      photoBy: "AFRIZAL PUTRA PRATAMA",
      image: "/dist/assets/images/vid.jpg",
    },
  ];

  connectedCallback() {
    this.render();
  }

  render() {
    let sliderImageWrapper = "";
    this.datas.map((data) => {
      sliderImageWrapper += `
        <div class="swiper-slide">
          <img
            src="${data.image}"
            alt="${data.destination}"
            class="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[550px]
            xl:w-[650px] h-[420px] md:h-[540px] 2xl:w-[768px] rounded-md
            object-cover"
          />
        </div>`;
    });
    const touristSlider = document.createElement("tourist-slider");
    touristSlider.setAttribute("imageItem", sliderImageWrapper);
    this.appendChild(touristSlider);

    var swiper = new Swiper(".mySwiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    swiper.on("slideChange", () => {
      var index = swiper.realIndex;
      var slide = this.datas[index];
      document.querySelector("#destination").textContent = slide.destination;
      document.querySelector("#photoBy").textContent = slide.photoBy;
    });
  }
}

customElements.define("photo-from-tourist-element", PhotoFromTouristElement);
