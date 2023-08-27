
import RoadMapNav from "../components/RoadMapNav";
import Roadmap from "../components/Roadmap";
import roadmapstyle from "../styles/roadmapstyle.module.css";

const RoadmapPage = () => {
  
  return (
    <div className={roadmapstyle.roadmapcontainer}>
      <div>
        <RoadMapNav/>
      </div>
      <div>
        <Roadmap/>
      </div>
    </div>
  );
};

export default RoadmapPage;
