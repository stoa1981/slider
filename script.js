let logos = new Map();
logos.set(524, "logos/psg.svg");
logos.set(521, "logos/losc.svg");
logos.set(523, "logos/lyon.svg");
logos.set(548, "logos/monaco.svg");
logos.set(546, "logos/lens.svg");
logos.set(516, "logos/om.svg");
logos.set(529, "logos/rennes.svg");
logos.set(518, "logos/montpellier.svg");
logos.set(545, "logos/metz.svg");
logos.set(532, "logos/angers.svg");
logos.set(522, "logos/nice.svg");
logos.set(547, "logos/reims.svg");
logos.set(526, "logos/bordeaux.svg");
logos.set(512, "logos/brest.svg");
logos.set(576, "logos/strasbourg.svg");
logos.set(527, "logos/saintetienne.svg");
logos.set(525, "logos/lorient.svg");
logos.set(556, "logos/nimes.svg");
logos.set(543, "logos/nantes.svg");
logos.set(528, "logos/dijon.svg");


fetch("http://api.football-data.org/v2/competitions/FL1/standings", {
  method: "GET",
  headers: {
    "X-Auth-Token": "95c5c0b30bec44cdba8e8e37d68a4243",
  },
})
  .then((res) => res.json())
  .then((data) => {
    let names = new Map();
    names.set(524, "PSG");
    names.set(521, "LILLE");
    names.set(523, "OL");
    names.set(548, "AS MONACO");
    names.set(546, "LENS");
    names.set(516, "OM");
    names.set(529, "RENNES");
    names.set(518, "MONTPELLIER");
    names.set(545, "METZ");
    names.set(532, "ANGERS");
    names.set(522, "OGC NICE");
    names.set(547, "REIMS");
    names.set(526, "BORDEAUX");
    names.set(512, "BREST");
    names.set(576, "STRASBOURG");
    names.set(527, "ASSE");
    names.set(525, "LORIENT");
    names.set(556, "NIMES");
    names.set(543, "NANTES");
    names.set(528, "DIJON");
    
    const league = data.standings[0].table;
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".first-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logos.get(element.team.id));
      image.setAttribute("id", "myImg");
      image.classList.add("image");
      const teamContainer = document.createElement('article');
      const teamName = document.createElement('p');
      teamName.append(names.get(element.team.id));
      teamContainer.append(image);
      teamContainer.append(teamName);
      teamContainer.classList.add('team-container')
      domLeague.append(teamContainer);
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
    let names = new Map();
    names.set(78, "ATLETICO");
    names.set(86, "REAL");
    names.set(81, "BARCELONE");
    names.set(559, "SEVILLE");
    names.set(94, "VILLAREAL");
    names.set(92, "SOCIEDAD");
    names.set(90, "BETIS");
    names.set(83, "GRENADE");
    names.set(77, "BILBAO");
    names.set(88, "LEVANTE");
    names.set(558, "CELTA VIGO");
    names.set(95, "VALENCE");
    names.set(79, "OSASUNA");
    names.set(82, "GETAFE");
    names.set(264, "CADIX");
    names.set(250, "VALLADOLID");
    names.set(285, "ELCHE");
    names.set(299, "HUESCA");
    names.set(278, "EIBAR");
    names.set(263, "ALAVES");

    const league = data.standings[0].table;
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".second-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logoUrl);
      image.classList.add("image");
      const teamContainer = document.createElement('article');
      const teamName = document.createElement('p');
      teamName.append(names.get(element.team.id));
      teamContainer.append(image);
      teamContainer.append(teamName);
      teamContainer.classList.add('team-container')
      domLeague.append(teamContainer);
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
    let names = new Map();
names.set(5, "BAYERN");
names.set(721, "LEIPZIG");
names.set(11, "WOLFSBURG");
names.set(19, "FRANCFORT");
names.set(4, "BvB");
names.set(3, "LEVERKUSEN");
names.set(10, "STUTTGART");
names.set(18, "MONCHENGLADBACH");
names.set(28, "BERLIN");
names.set(17, "FRIBOURG");
names.set(16, "AUGSBURG");
names.set(2, "HOFFENHEIM");
names.set(12, "WERDER");
names.set(9, "HERTA");
names.set(15, "MAINZ 05");
names.set(1, "COLOGNE");
names.set(38, "ARMINIA");
names.set(6, "SCHALKE");

    const league = data.standings[0].table;
    console.log(league);
    league.forEach((element) => {
      const logoUrl = element.team.crestUrl;
      const domLeague = document.querySelector(".third-slide");
      const image = document.createElement("img");
      image.setAttribute("src", logoUrl);
      image.classList.add("image");
      const teamContainer = document.createElement('article');
      const teamName = document.createElement('p');
      teamName.append(names.get(element.team.id));
      teamContainer.append(image);
      teamContainer.append(teamName);
      teamContainer.classList.add('team-container')
      domLeague.append(teamContainer);
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
