import "./Team.css";
import cindy from "../assets/team/Cindy-Cheah.png";
import erlyna from "../assets/team/Erlyna.png";
import francis from "../assets/team/Francis.png";
import jason from "../assets/team/Jason-Ting.png";
import lei from "../assets/team/Lei-Chin.png";
import stephan from "../assets/team/Stephan-Tey.png";
import vee from "../assets/team/Vee-Li.png";


const teamMembers = [
  { name: "Cindy Cheah", role: "Director", photo: cindy },
  { name: "Jason Ting", role: "CEO", photo: jason },
  { name: "Erlyna", role: "Senior Consultant", photo: erlyna },
  { name: "Francis", role: "Senior Consultant", photo: francis },
  { name: "Lei Chin", role: "Senior Consultant", photo: lei },
  { name: "Stephan Tey", role: "Estate Consultant", photo: stephan },
  { name: "Vee Li", role: "Senior Consultant", photo: vee },
];

export default function Team() {
  return (
    <section className="team-section">
      <h2 className="team-title">Our Team</h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image">
               <img src={member.photo} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
