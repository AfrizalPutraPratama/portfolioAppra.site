import "./card/card-get-know-japan.js";

class GetKnowJapanElement extends HTMLElement {
  datas = [
    {
      title: "UNIVERSITY",
      image: "/dist/assets/images/univ.jpg",
      description:
        "University of Muhammadiyah Surakarta. S1 -Informatics Engineering 2022 -present.",
    },
    {
      title: "H. SCHOOL",
      image: "/dist/assets/images/sma.jpg",
      description:
        "High School 01 Bawang, Mathematics and Natural Sciences, School Security Patrol Organization, 2019-2022.",
    },
    {
      title: "J.H. SCHOOL",
      image: "/dist/assets/images/smp.png",
      description:
        "Junior High School 01 Limpung, Focusing on Academics with Good Grades. 2016-2019.",
    },
    {
      title: "ORGANIZATION",
      image: "/dist/assets/images/fosti.jpg",
      description:
        "Open Source Forum on Informatics Engineering, Focusing on the Open Source field, Attended UI/UX designer training. 2022-present.",
    },
    {
      title: "P. SCHOOL",
      image: "/dist/assets/images/sd.jpg",
      description:
        "Primary School Wonokerso 02, Focusing on Academics with Good Grades. 2010-2016.",
    },
  ];

  connectedCallback() {
    this.render();
  }

  render() {
    let cardList = "";
    let dataToDisplay = this.datas;
    if (window.innerWidth < 1024) {
      dataToDisplay = this.datas.slice(0, 4);
    } else {
      dataToDisplay = this.datas;
    }
    dataToDisplay.map((data) => {
      cardList += `
        <card-get-know-japan
            title="${data.title}"
            image="${data.image}"
            description="${data.description}"
        ></card-get-know-japan>
        `;
    });
    this.innerHTML = `
      <div class="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5
      items-center justify-center md:gap-0">
        ${cardList}
    </div>`;
  }
}

customElements.define("get-know-japan-element", GetKnowJapanElement);
