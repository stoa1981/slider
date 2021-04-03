let logos = new Map();
logos.set(524, "psg.svg");
logos.set(521, "losc.svg");
logos.set(523, "lyon.svg");
logos.set(548, "monaco.svg");
logos.set(546, "lens.svg");
logos.set(516, "om.svg");
logos.set(529, "rennes.svg");
logos.set(518, "montpellier.svg");
logos.set(545, "metz.svg");
logos.set(532, "angers.svg");
logos.set(522, "nice.svg");
logos.set(547, "reims.svg");
logos.set(526, "bordeaux.svg");
logos.set(512, "brest.svg");
logos.set(576, "strasbourg.svg");
logos.set(527, "saintetienne.svg");
logos.set(525, "lorient.svg");
logos.set(556, "nimes.svg");
logos.set(543, "nantes.svg");
logos.set(528, "dijon.svg");

fetch("http://api.football-data.org/v2/competitions/FL1/standings", {
  method: "GET",
  headers: {
    "X-Auth-Token": "95c5c0b30bec44cdba8e8e37d68a4243",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const league = data.standings[0].table;
    console.log(league);
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".first-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logos.get(element.team.id));
      image.setAttribute("id", "myImg");
      image.classList.add("image");
      domLeague.append(image);
    });
  })
  .catch((err) => {
    console.error(err);
  });

fetch("http://api.football-data.org/v2/competitions/PD/standings", {
  method: "GET",
  headers: {
    "X-Auth-Token": "95c5c0b30bec44cdba8e8e37d68a4243",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const league = data.standings[0].table;
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".second-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logoUrl);
      image.classList.add("image");
      domLeague.append(image);
    });
  })
  .catch((err) => {
    console.error(err);
  });

fetch("http://api.football-data.org/v2/competitions/BL1/standings", {
  method: "GET",
  headers: {
    "X-Auth-Token": "95c5c0b30bec44cdba8e8e37d68a4243",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const league = data.standings[0].table;
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".third-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logoUrl);
      image.classList.add("image");
      domLeague.append(image);
    });
  })
  .catch((err) => {
    console.error(err);
  });

fetch("http://api.football-data.org/v2/competitions/SA/standings", {
  method: "GET",
  headers: {
    "X-Auth-Token": "95c5c0b30bec44cdba8e8e37d68a4243",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const league = data.standings[0].table;
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".fourth-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logoUrl);
      image.classList.add("image");
      domLeague.append(image);
    });
  })
  .catch((err) => {
    console.error(err);
  });

fetch("http://api.football-data.org/v2/competitions/PL/standings", {
  method: "GET",
  headers: {
    "X-Auth-Token": "95c5c0b30bec44cdba8e8e37d68a4243",
  },
})
  .then((res) => res.json())
  .then((data) => {
    const league = data.standings[0].table;
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".fifth-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logoUrl);
      image.classList.add("image");
      domLeague.append(image);
    });
  })
  .catch((err) => {
    console.error(err);
  });
