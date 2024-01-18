import { teamCard5 } from "../assets";
import { teamCard6 } from "../assets";
import { teamCard7 } from "../assets";
import { teamCard8 } from "../assets";
import Heading from "../components/Heading";
import TeamCard from "../components/TeamCard"; //Team component

// team Data
const teamData = [
  {
    name: "James Williams",
    position: "(Shop Owner)",
    profilePic: teamCard8
  },
  {
    name: "John Smith",
    position: "(Shop Manager)",
    profilePic: teamCard6
  },
  {
    name: "Mun Ji Lee",
    position: "(Shop Worker)",
    profilePic: teamCard7
  },
  {
    name: "Phoebe Sanders",
    position: "(Shop Director)",
    profilePic: teamCard5
  },
]

const MeetOurTeam = () => {
  return (
    <section className="mx-[2rem] md:mx-[3rem] lg:mx-[5rem] my-12 flex flex-col gap-20">
      <Heading title="Meet Our Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mt-6">
        {teamData.map((staff,index)=> <TeamCard key={index} name={staff.name} position={staff.position} pic={staff.profilePic} />)}
      </div>
    </section>
  )
}

export default MeetOurTeam;