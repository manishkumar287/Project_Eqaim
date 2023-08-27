"use client";
import roadmapstyle from "../styles/roadmapstyle.module.css";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { ChevronUpIcon, ChatIcon } from "@chakra-ui/icons";
interface RoadmapItem {
  heading: String;
  description: String;
  type: string;
  vote: number;
  noOfComments: number;
  workStatus: String;
}
const Roadmap = (props) => {
  
  const [feedbackData, setFeedbackData] = useState([]);
  const [live, setLive] = useState([]);
  const [planned, setPlanned] = useState([]);
  const [inprocess, setInprocess] = useState([]);

  async function fetchFeedbacks() {
  const response = await fetch("http://localhost:8080/allfeedback");
  const data = await response.json();
  
  setFeedbackData(data.data);
  console.log("data",data.data);

    const arr1=data.data.filter((it)=>it.status==="Planned");
    const arr2=data.data.filter((it)=>it.status==="In-Process");
    const arr3=data.data.filter((it)=>it.status==="Live");
    setPlanned(arr1);
    setInprocess(arr2)
    setLive(arr3);
    
 
}

console.log("planned ",planned);
    console.log("progree ",inprocess);
    console.log("live ",live);

useEffect(()=>{
    fetchFeedbacks();
  },[])




  return (
    <div className={roadmapstyle.roadmapCont}>
      
      <div className={roadmapstyle.leftcont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>Planned ({planned.length})</Heading>
          <Text className={roadmapstyle.maintext}>Ideas priortized for research</Text>
        </div>
        <div>
          {planned.map((item) => (
            <Card className={roadmapstyle.plannedCard}>
               <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.planned}>
                      Planned 
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.title}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.category}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.upvotes}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.comments.length}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className={roadmapstyle.middlecont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>In-Progress ({inprocess.length})</Heading>
          <Text className={roadmapstyle.maintext}>Ideas priortized for research</Text>
        </div>
        <div>
          {inprocess.map((item) => (
            <Card className={roadmapstyle.inprogresscard}>
               <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.inprocess}>
                      In-Progress 
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.title}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.category}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.upvotes}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.comments.length}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className={roadmapstyle.rightcont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>Live ({live.length})</Heading>
          <Text className={roadmapstyle.maintext}>Released features</Text>
        </div>
        <div>
          {live.map((item) => (
            <Card className={roadmapstyle.livecard}>
               <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.live}>
                      Live 
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.title}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.category}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.upvotes}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.comments.length}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {/* <div className={roadmapstyle.middlecont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>In-progress ({progressroadmapData.length})</Heading>
          <Text  className={roadmapstyle.maintext}>Currently being developed</Text>
        </div>
        <div>
          {progressroadmapData.map((item) => (
            <Card className={roadmapstyle.inprogresscard}>
              <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.inprogress}>
                      In-progress ({progressroadmapData.length})
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.heading}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.type}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.vote}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.noOfComments}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className={roadmapstyle.rightcont}>
        <div>
          <Heading className={roadmapstyle.mainhead}>Live ({liveroadmapData.length})</Heading>
          <Text  className={roadmapstyle.maintext}>Released features</Text>
        </div>
        <div>
          {liveroadmapData.map((item) => (
            <Card className={roadmapstyle.livecard}>
              <CardHeader>
                <ul className={roadmapstyle.ul}>
                  <li>
                    <Text className={roadmapstyle.live}>
                      Live ({liveroadmapData.length})
                    </Text>
                  </li>
                </ul>
              </CardHeader>
              <CardBody>
                <Heading className={roadmapstyle.plannedHead}>
                  {item.heading}
                </Heading>
                <Text className={roadmapstyle.planneddes}>
                  {item.description}
                </Text>
                <Text className={roadmapstyle.type}>{item.type}</Text>
              </CardBody>
              <CardFooter className={roadmapstyle.cardfooter}>
                <div className={roadmapstyle.votecontainer}>
                  <Button className={roadmapstyle.votebtn}>
                    <ChevronUpIcon color={"#4661E6"} />
                    <Text className={roadmapstyle.vote}>{item.vote}</Text>
                  </Button>
                </div>
                <div className={roadmapstyle.comment}>
                  <ChatIcon
                    style={{ color: "grey" }}
                    className={roadmapstyle.ChatIcon}
                  />
                  <p className={roadmapstyle.noOfComments}>
                    <Text id={roadmapstyle.commentNum}>
                      {item.noOfComments}
                    </Text>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Roadmap;
