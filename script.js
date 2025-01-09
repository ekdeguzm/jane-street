// JSON file
const programs = [
  {
    name: "AMP",
    locations: [{ office: "New York", accepting_applications: true }],
    description:
      "A multi-week summer program for same-year high school graduates who have experienced barriers to access and opportunity within advanced STEM educational experiences.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/amp",
  },

  {
    name: "FOCUS",
    locations: [
      { office: "New York", accepting_applications: false },
      { office: "London", accepting_applications: true },
    ],
    description:
      "Students currently enrolled in university at any level who self-identify with underrepresented ethnic or racial minority groups are introduced to Jane Street in this fun and engaging program.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/focus",
  },

  {
    name: "FTTP",
    locations: [
      { office: "New York", accepting_applications: false },
      { office: "London", accepting_applications: false },
    ],
    description:
      "First-year university students learn about our trading and technology models for a couple of days in our office.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/fttp",
  },

  {
    name: "Graduate Research Fellowship",
    locations: [
      { office: "New York", accepting_applications: true },
      { office: "London", accepting_applications: true },
      { office: "Hong Kong", accepting_applications: true },
    ],
    description:
      "Our Graduate Research Fellowship is aimed specifically at PhD students only (not faculty). It is a financial award to recognize excellence in mathematics, computer science, physics, and statistics. This program supports students while they continue their studies at their home institution..",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/graduate-research-fellowship",
  },

  {
    name: "IN FOCUS",
    locations: [
      { office: "New York", accepting_applications: false },
      { office: "London", accepting_applications: false },
    ],
    description:
      "Over the course of a few days, undergraduate and graduate students who self-identify with historically underrepresented ethnic or racial minority groups explore our trading, software development, and strategy and product teams in this interactive program.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/in-focus",
  },

  {
    name: "Internship",
    locations: [
      { office: "New York", accepting_applications: true },
      { office: "London", accepting_applications: true },
      { office: "Hong Kong", accepting_applications: true },
    ],
    description:
      "Students and recent graduates join any office location to meet our teams and learn about quantitative trading, software engineering, quantitative research, strategy and product, and more.",
    learn_more_url: "https://www.janestreet.com/join-jane-street/internships",
  },

  {
    name: "JSIP",
    locations: [{ office: "New York", accepting_applications: true }],
    description:
      "Undergraduates between their first and second years who identify with an underrepresented ethnic or racial minority group in tech spend eight weeks learning and developing skills that will help to prepare them for a career in software engineering.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/jsip",
  },

  {
    name: "SEE",
    locations: [
      { office: "New York", accepting_applications: false },
      { office: "Hong Kong", accepting_applications: true },
    ],
    description:
      "University students explore how we use math and computer science to solve real-world problems in this educational multi-day program.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/see",
  },

  {
    name: "Unboxed",
    locations: [{ office: "New York", accepting_applications: false }],
    description:
      "Students graduating high school next year and who self-identify with an underrepresented racial or ethnic minority group are invited to spend three weeks learning STEM skills alongside Jane Street employees.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/unboxed",
  },

  {
    name: "WiSE",
    locations: [
      { office: "New York", accepting_applications: false },
      { office: "London", accepting_applications: false },
      { office: "Hong Kong", accepting_applications: false },
    ],
    description:
      "Self-identifying women and gender-expansive university students, including incoming first-year students, learn how math and computer science are used to solve real-world problems in this interactive multi-day program.",
    learn_more_url:
      "https://www.janestreet.com/join-jane-street/programs-and-events/wise",
  },
];

const bannerMap = {
  AMP: "https://assets.codepen.io/8753197/banner-AMP.png",
  FOCUS: "https://assets.codepen.io/8753197/banner-FOCUS.png",
  FTTP: "https://assets.codepen.io/8753197/banner-FTTP.png",
  "Graduate Research Fellowship":
    "https://assets.codepen.io/8753197/banner-Graduate-Research-Fellowship.png",
  "IN FOCUS": "https://assets.codepen.io/8753197/banner-IN-FOCUS.png",
  Internship: "https://assets.codepen.io/8753197/banner-Internship.png",
  JSIP: "https://assets.codepen.io/8753197/banner-JSIP.png",
  SEE: "https://assets.codepen.io/8753197/banner-SEE.png",
  Unboxed: "https://assets.codepen.io/8753197/banner-Unboxed.png",
  WiSE: "https://assets.codepen.io/8753197/banner-WiSE.png",
};

const locationBadges = {
  "New York": "https://assets.codepen.io/8753197/location-new-york.svg",
  London: "https://assets.codepen.io/8753197/location-london.svg",
  "Hong Kong": "https://assets.codepen.io/8753197/location-hong-kong.svg",
};

function createProgramCards(programs) {
  const container = document.getElementById("program-cards-container");

  // Sort programs by accepting applications status, then by name
  programs.sort((a, b) => {
    const aAccepting = a.locations.some(
      (location) => location.accepting_applications
    );
    const bAccepting = b.locations.some(
      (location) => location.accepting_applications
    );

    if (aAccepting && !bAccepting) return -1;
    if (!aAccepting && bAccepting) return 1;
    if (a.name === "Internship") return 1; // Internship always last if accepting
    if (b.name === "Internship") return -1;

    return a.name.localeCompare(b.name); // Alphabetical order for ties
  });

  // Generate a card for each program
  programs.forEach((program) => {
    const cardHolder = document.createElement("div");
    cardHolder.classList.add("card-holder");

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.position = "relative"; // Position for the stamp

    // Add "Accepting Applications" stamp with link
    if (program.locations.some((location) => location.accepting_applications)) {
      const acceptingStampLink = document.createElement("a");
      acceptingStampLink.href = program.learn_more_url; // Link to program URL
      acceptingStampLink.target = "_blank"; // Open in new tab

      const acceptingStamp = document.createElement("div");
      acceptingStamp.classList.add("accepting-stamp");
      acceptingStamp.textContent = "ACCEPTING APPLICATIONS";

      acceptingStampLink.appendChild(acceptingStamp); // Wrap stamp in the link
      card.appendChild(acceptingStampLink); // Add to the card
    }

    // Add program banner image as a link
    const bannerImg = document.createElement("img");
    bannerImg.classList.add("card-image");
    const bannerUrl = bannerMap[program.name];
    bannerImg.src = bannerUrl;
    bannerImg.alt = `${program.name} banner`;

    // Create an anchor tag around the image to make it clickable
    const bannerLink = document.createElement("a");
    bannerLink.href = program.learn_more_url;
    bannerLink.target = "_blank";

    // Append the image inside the anchor tag
    bannerLink.appendChild(bannerImg);

    // Append the anchor tag to the card
    card.appendChild(bannerLink);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Add location badges or grey circles for locations
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("card-location");

    program.locations.forEach((location) => {
      if (location.accepting_applications) {
        const locationIcon = document.createElement("img");
        const locationBadge = locationBadges[location.office];
        locationIcon.src = locationBadge;
        locationIcon.alt = `${location.office} badge`;
        locationContainer.appendChild(locationIcon);
      } else {
        const greyCircle = document.createElement("div");
        greyCircle.classList.add("location-grey-circle");

        const text = document.createElement("span");
        text.classList.add("location-grey-text");
        text.textContent =
          location.office === "New York"
            ? "NYC"
            : location.office === "London"
            ? "LDN"
            : "HKG";

        greyCircle.appendChild(text);
        locationContainer.appendChild(greyCircle);
      }
    });

    cardContent.appendChild(locationContainer);

    // Add program description
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = program.description;
    cardContent.appendChild(cardDescription);

    // Add "Learn More" button with link
    const learnMoreButton = document.createElement("button");
    learnMoreButton.classList.add("learn-more-button");
    learnMoreButton.textContent = "learn more";
    learnMoreButton.onclick = () =>
      window.open(program.learn_more_url, "_blank");
    cardContent.appendChild(learnMoreButton);

    card.appendChild(cardContent);
    cardHolder.appendChild(card);
    container.appendChild(cardHolder);
  });
}

// Run the program card creation function when the page loads
window.onload = function () {
  createProgramCards(programs);
};
