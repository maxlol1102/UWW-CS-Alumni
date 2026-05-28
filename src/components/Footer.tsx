import { useState } from "react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const PlaneIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
);

const GradCapIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
  </svg>
);

const TutoringIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
    <path d="M12 3L1 9l4 2.18V15h.01c-.01.17-.01.33-.01.5C5 18.54 8.13 21 12 21s7-2.46 7-5.5c0-.17 0-.33-.01-.5H19v-3.82L21 9 12 3zm0 2.24l6.5 3.54-6.5 3.54L5.5 8.78 12 5.24zM17 15.5c0 1.93-2.24 3.5-5 3.5s-5-1.57-5-3.5v-.02L12 18l5-2.52v.02z"/>
  </svg>
);

const departments = [
  "Biology", "Chemistry", "Computer Science",
  "Geography, Geology & Environmental Science",
  "History", "Literature, Writing, & Film",
  "Mathematics", "Philosophy & Religious Studies",
  "Physics", "Politics, Government, and Law",
  "Psychology", "Social Work",
  "Sociology, Criminology & Anthropology",
  "Women's & Gender Studies", "World Languages and Cultures",
];

const resources = [
  "Maps/Addresses", "Accessibility", "Announcements",
  "Employment", "Emergency Information",
  "Hate/Bias Reporting", "Privacy Policy",
  "Safety Reports and Statistics", "Translation",
];

export function Footer() {
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", width: "100%" }}>
      {/* More Opportunities Section */}
      <section style={{
        background: "#ffffff",
        padding: "60px 40px",
        textAlign: "center",
      }}>
        <h2 style={{
          fontSize: "2rem",
          color: "#3d2260",
          fontFamily: "'Georgia', serif",
          fontWeight: 400,
          marginBottom: "48px",
          letterSpacing: "0.01em",
        }}>
          More opportunities
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "80px",
          flexWrap: "wrap",
        }}>
          {[
            { icon: <PlaneIcon />, label: "Study Abroad", color: "#29abe2" },
            { icon: <GradCapIcon />, label: "Honors Program", color: "#8dc63f" },
            { icon: <TutoringIcon />, label: "Tutoring", color: "#f7941d" },
          ].map(({ icon, label, color }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", cursor: "pointer" }}>
              <div style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 28px ${color}55`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {icon}
              </div>
              <span style={{ color: "#3d2260", fontSize: "0.95rem", fontFamily: "'Georgia', serif", fontWeight: 600 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* College Info / Departments / Contact */}
      <section style={{
        background: "#e8e6d9",
        padding: "48px 60px",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr 1fr",
          gap: "48px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {/* College Address */}
          <div>
            <h4 style={{ color: "#3d2260", fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              College of Letters and Sciences
            </h4>
            <p style={{ color: "#444", fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
              Laurentide Hall 4100<br />
              University of Wisconsin-Whitewater<br />
              800 W. Main Street<br />
              Whitewater, WI 53190-1790
            </p>
            <a href="#" style={{ display: "inline-block", marginTop: "14px", color: "#3d2260", fontSize: "0.82rem", textDecoration: "underline" }}>
              About Us
            </a>
          </div>

          {/* Departments */}
          <div>
            <h4 style={{ color: "#3d2260", fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Departments
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, columns: 2, columnGap: "16px" }}>
              {departments.map(dept => (
                <li key={dept} style={{ marginBottom: "4px", breakInside: "avoid" }}>
                  <a
                    href="#"
                    onMouseEnter={() => setHoveredDept(dept)}
                    onMouseLeave={() => setHoveredDept(null)}
                    style={{
                      color: hoveredDept === dept ? "#8dc63f" : "#3d2260",
                      fontSize: "0.8rem",
                      textDecoration: "underline",
                      transition: "color 0.15s ease",
                    }}
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#3d2260", fontSize: "0.9rem", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Contact Us
            </h4>

            <p style={{ fontWeight: 700, color: "#222", fontSize: "0.82rem", marginBottom: "4px" }}>Faculty/Staff Contact</p>
            <p style={{ color: "#444", fontSize: "0.82rem", margin: "0 0 4px" }}>Office of the Dean</p>
            <p style={{ color: "#444", fontSize: "0.82rem", margin: "0 0 4px" }}>262-472-1621</p>
            <a href="mailto:cols@uww.edu" style={{ color: "#3d2260", fontSize: "0.82rem", textDecoration: "underline" }}>cols@uww.edu</a>

            <p style={{ fontWeight: 700, color: "#222", fontSize: "0.82rem", marginTop: "16px", marginBottom: "4px" }}>Student Contact</p>
            <p style={{ color: "#444", fontSize: "0.82rem", margin: "0 0 4px" }}>Advising Office</p>
            <p style={{ color: "#444", fontSize: "0.82rem", margin: "0 0 4px" }}>262-472-1550</p>
            <a href="mailto:lsadvise@uww.edu" style={{ color: "#3d2260", fontSize: "0.82rem", textDecoration: "underline" }}>lsadvise@uww.edu</a>

            <p style={{ fontWeight: 700, color: "#222", fontSize: "0.82rem", marginTop: "16px", marginBottom: "8px" }}>Follow Us</p>
            <div style={{ display: "flex", gap: "8px" }}>
              {[
                { icon: <FacebookIcon />, color: "#1877f2" },
                { icon: <YouTubeIcon />, color: "#ff0000" },
                { icon: <LinkedInIcon />, color: "#0a66c2" },
              ].map(({ icon, color }, i) => (
                <a key={i} href="#" style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  background: color, display: "flex", alignItems: "center",
                  justifyContent: "center", color: "white",
                  transition: "opacity 0.2s ease",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = "1"}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Purple Footer */}
      <footer style={{
        background: "#5c2d91",
        padding: "48px 60px",
        color: "white",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 0.5fr",
          gap: "48px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          {/* UWW Branding */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "white", display: "flex", alignItems: "center",
                justifyContent: "center",
              }}>
                <span style={{ color: "#5c2d91", fontWeight: 900, fontSize: "1rem" }}>UW</span>
              </div>
              <div>
                <div style={{ fontSize: "0.65rem", letterSpacing: "0.12em", opacity: 0.85 }}>University of Wisconsin</div>
                <div style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "0.02em" }}>Whitewater</div>
              </div>
            </div>

            <p style={{ fontSize: "0.82rem", opacity: 0.8, margin: "0 0 4px", lineHeight: 1.7 }}>262-472-1234</p>
            <p style={{ fontSize: "0.82rem", opacity: 0.8, margin: "0 0 4px", lineHeight: 1.7 }}>800 W. Main St.</p>
            <p style={{ fontSize: "0.82rem", opacity: 0.8, margin: "0 0 20px", lineHeight: 1.7 }}>Whitewater, WI 53190</p>
            <p style={{ fontSize: "0.75rem", opacity: 0.65, marginBottom: "16px" }}>© 2026 UW Board of Regents</p>

            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: <FacebookIcon />, bg: "#1877f2" },
                { icon: <LinkedInIcon />, bg: "#0a66c2" },
                { icon: <InstagramIcon />, bg: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
                { icon: <YouTubeIcon />, bg: "#ff0000" },
              ].map(({ icon, bg }, i) => (
                <a key={i} href="#" style={{
                  width: "34px", height: "34px", borderRadius: "50%",
                  background: bg, display: "flex", alignItems: "center",
                  justifyContent: "center", color: "white",
                  transition: "transform 0.2s ease",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"}
                >
                  {icon}
                </a>
              ))}
            </div>

            <div style={{ marginTop: "28px", display: "flex", alignItems: "center", gap: "8px", opacity: 0.75 }}>
              <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}>UNIVERSITIES OF</span>
              <span style={{ fontWeight: 900, fontSize: "1rem", letterSpacing: "0.05em" }}>WISCONSIN</span>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.9rem", fontWeight: 700, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Resources
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {resources.map(r => (
                <li key={r} style={{ marginBottom: "6px" }}>
                  <a href="#" style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.82rem",
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "white"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)"}
                  >
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logos */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
            <div style={{
              width: "70px", height: "70px", borderRadius: "50%",
              background: "white", display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden",
            }}>
              <span style={{ fontSize: "0.6rem", color: "#5c2d91", fontWeight: 700, textAlign: "center", lineHeight: 1.2, padding: "4px" }}>UW SEAL</span>
            </div>
            <div style={{
              width: "70px", height: "50px", borderRadius: "8px",
              background: "#2c7be5", display: "flex", alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{ color: "white", fontWeight: 900, fontSize: "1.4rem", letterSpacing: "0.05em" }}>JED</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom CTA Bar */}
      <div style={{
        background: "#1a1a2e",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}>
        {[
          { label: "REQUEST INFORMATION", accent: "#e94560" },
          { label: "VISIT", accent: "#f7941d" },
          { label: "APPLY", accent: "#29abe2" },
        ].map(({ label, accent }) => (
          <button
            key={label}
            style={{
              background: "transparent",
              border: "none",
              borderTop: `3px solid ${accent}`,
              color: "white",
              padding: "20px 24px",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              cursor: "pointer",
              transition: "background 0.2s ease",
              fontFamily: "'Georgia', serif",
            }}
            onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = `${accent}22`}
            onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "transparent"}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
