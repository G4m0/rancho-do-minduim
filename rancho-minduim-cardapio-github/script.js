const navLinks = [...document.querySelectorAll(".category-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("active", active);
      if (active) link.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    });
  },
  { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.35] }
);

sections.forEach((section) => observer.observe(section));
