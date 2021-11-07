const navbar = {
  navbar: [
    {
      title: "Home",
      uri: "#",
    },
    {
      title: "About",
      uri: "#",
      dropdown: [
        { title: "History & Background", uri: "#" },
        { title: "Our Team", uri: "#" },
        { title: "Mission & Vision", uri: "#" },
      ],
    },
    {
      title: "Products",
      uri: "#",
    },
    {
      title: "Gallery",
      uri: "#",
    },
    {
      title: "Contact",
      uri: "#",
    },
  ],
  social: [
    {
      icon: "facebook",
      uri: "#",
    },
    {
      icon: "youtube",
      uri: "#",
    },
    {
      icon: "instagram",
      uri: "#",
    },
  ],
  contacts: {
    telephone: "+27 123 456 789",
    email: "email@company.domain",
  },
  navbtn: [
    {
      label: "Register",
      icon: "plus",
      uri: "#",
    },
    {
      label: "Login",
      icon: "lock",
      uri: "#",
    },
  ],
};

export { navbar };
