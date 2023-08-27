"use client";
import React, { useEffect,useState } from "react";
import feedbackstyle from "../styles/feedback.module.css";
import { Card, CardBody, Heading, Text, Button } from "@chakra-ui/react";
import { ChatIcon, ChevronUpIcon } from "@chakra-ui/icons";
import Illustration from "../../public/illustration-empty.svg";
import Image from "next/image";
import navbarStyle from "../styles/navbar.module.css";
import {useRouter} from 'next/navigation';
import Link from 'next/link';


const API_URL = 'http://localhost:8080';

interface FeedbackItem {
  cardHead: string;
  cardDescription: string;
  type: string;
  vote: number;
  noOfComments: number;
}
const Feedbacks = (props) => {

  const [feedbackData, setFeedbackData] = useState([]);

  async function fetchFeedbacks() {
  const response = await fetch("http://localhost:8080/allfeedback");
  const data = await response.json();
  
  setFeedbackData(data.data);
  props.setSuggestion(data?.data);
  console.log(data.data);
 
}
  useEffect(()=>{
    fetchFeedbacks();
  },[])

  
  const router = useRouter();
  const handleRoute = () => {
    router.push("/newfeedback");
  };

  const handleEdit = (_id) => {
    router.push('/editfeedback',{query: { id: _id }});
  };

  const handleUpvote=async(_id)=>{
    console.log(_id);
       const response=await fetch("http://localhost:8080/upvote",{method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({_id})});
      const abc= await response.json(); 
      fetchFeedbacks();
      
  }
  

  return (
    <div>
      {feedbackData?.length > 0 ? (
        <div className={feedbackstyle.feedbackcontainer} style={{margin:"10",display: "flex",
    flexDirection: "column",
    rowGap: "8px"}}>
          {feedbackData.map((data) => (
            <Card id={feedbackstyle.id} key={data._id} style={{flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: "12px 18px"}}>
              <div className={feedbackstyle.votecontainer}>
                <Button className={feedbackstyle.votebtn} onClick={()=>handleUpvote(data._id)}>
                  <ChevronUpIcon />
                  {data.upvotes}
                </Button>
              </div>
              <Link href={`/editfeedback?_id=${data._id}`} style={{width: "100%"}}>
              <CardBody className={feedbackstyle.feedbackbody} >
                <Heading className={feedbackstyle.feedbackHeading} >
                  {data.title}
                </Heading>
                <Text
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    fontFamily: "jost,sans-serif",
                    color: "#647196",
                  }}
                  className={feedbackstyle.feedbackdes}
                >
                  {data.description}
                </Text>
                <Text className={feedbackstyle.feedbacktype}>
                  {data.category}
                </Text>
              </CardBody>
              </Link>
              <div className={feedbackstyle.comment}>
                <ChatIcon
                  style={{ color: "grey" }}
                  className={feedbackstyle.ChatIcon}
                />
                <p className={feedbackstyle.noOfComments}>
                  {data?.comments?.length}
                </p>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className={feedbackstyle.feedbackcontainer}>
          <Card className={feedbackstyle.emptyCard}>
            <CardBody className={feedbackstyle.emptycardbody}>
              <Image priority src={Illustration} alt="Finding feedback svg" />
              <Heading className={feedbackstyle.reporthead}>
                There is no Feedback yet
              </Heading>
              <Text className={feedbackstyle.reporttext}>
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app{" "}
              </Text>
              <Button
                className={navbarStyle.feedbackbtn}
                id={feedbackstyle.feedbackbtn}
                variant="solid"
                color="white"
                backgroundColor="#AD1FEA"
                onClick={handleRoute}
              >
                + Add Feedback
              </Button>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Feedbacks;
