const jobProfile = {
    name: {
        first: "Anibal",
        last: "Hugo"
    },
    company: "Nike",
    pos: "Visual Athlete",
    loc: "Nike HOI",
    salary: 60000,
    hasBenefits: true,
  };
  function jobDescriptionWriter(jobProfile) {
    return `${jobProfile.name.first} is working for ${jobProfile.company}`;
  }
  console.log(jobDescriptionWriter(jobProfile))