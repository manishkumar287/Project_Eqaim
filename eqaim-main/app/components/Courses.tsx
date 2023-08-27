"use client";
import { Button, Card, CardBody, CardFooter,Heading,Text } from "@chakra-ui/react";
import coursecss from "../styles/courses.module.css"
import Link from "next/link";
import { useEffect, useState } from "react";
const Courses = (props) => {

    const [count,setCount]=useState({planned:0,inprocess:0,live:0});    

    const setCourseCount=()=>{
            
    const arr1=props?.suggestion?.filter((it)=>it.status==="Planned");
    const arr2=props?.suggestion?.filter((it)=>it.status==="In-Process");
    const arr3=props?.suggestion?.filter((it)=>it.status==="Live");
    
    setCount({planned:arr1.length,inprocess:arr2.length,live:arr3.length});

    }

    useEffect(()=>{
        setCourseCount();

    },[props.suggestion])

  return (
    <div className={coursecss.coursecontainer}>
      <div>
        <Card className={coursecss.Eqaimcard}>
            <CardFooter className={coursecss.EqaimContent}>
                <Heading className={coursecss.heading}>Eqaim</Heading>
                <Text className={coursecss.subhead}>Feedback Board</Text>
            </CardFooter>
        </Card>
      </div>
      <div>
        <Card className={coursecss.feedbackCard}>
            <CardBody className={coursecss.feed}>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>All</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>UI</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>UX</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>Enhancement</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>Bug</Button>
                <Button className={coursecss.feedbtn} style={{marginLeft:"15px",marginBottom:"15px"}}>Feature</Button>
            </CardBody>
        </Card>
      </div>
      <div>
        <Card className={coursecss.roadmapCard}>
            <div className={coursecss.roadmapheader}>
                <Heading className={coursecss.roadmaphead}>Roadmap</Heading>
                <Link className={coursecss.roadmaplink} href="/roadmap">View</Link>
            </div>
            <div className={coursecss.ullist}>
                <ul className={coursecss.ul}>
                    <li>
                        <div className={coursecss.courselist}>
                            <Text className={coursecss.planned}>Planned</Text>
                            <Text className={coursecss.coursenumber}>{count.planned}</Text>
                        </div>
                    </li>
                    <li>
                        <div className={coursecss.courselist}>
                            <Text className={coursecss.inprogress}>In-Progress</Text>
                            <Text className={coursecss.coursenumber}>{count.inprocess}</Text>
                        </div>
                    </li>
                    <li>
                        <div className={coursecss.courselist}>
                            <Text className={coursecss.live}>Live</Text>
                            <Text className={coursecss.coursenumber}>{count.live}</Text>
                        </div>
                    </li>
                </ul>
            </div>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
