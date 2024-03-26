const vjezbeLinks = [
  {
    url: "/about",
    label: "About",
  },
  {
    url: "/contact",
    label: "Contact",
  },
  {
    url: "/pokemon",
    label: "Pokemon",
  },
  {
    url: "/croatia",
    label: "Croatia",
  },
  {
    url: "/profile",
    label: "Profile",
  },
  {
    url: "/data-types",
    label: "Data Types",
  },
];

const Vjezbe = () => {
  return (
    <>
      <h1>Popis vježbi</h1>
      <div>
        {vjezbeLinks.map((vjezba) => {
          return (
            <>
              <a className="link" href={vjezba.url}>
                {vjezba.label}
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Vjezbe;
