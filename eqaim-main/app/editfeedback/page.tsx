
"use client";
import EditFeedBack from "../components/EditFeedBack";
import feedbackStyle from "../styles/newfeedback.module.css";
import navbarStyle from "../styles/navbar.module.css";
import { Card, CardBody, Heading, Text, Button } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Navbar from "../components/Navbar";

function EditFeedBackPage() {
  return (
    <div className={feedbackStyle.mainFeedBackContainer} style={{height: "100%",
    marginTop: "2%"}}>
      <div style={{width: 400, display:'flex' , justifyContent : 'space-between'}}>
        <div className={feedbackStyle.goback}>
        <ChevronLeftIcon /> 
        <Link className={feedbackStyle.gobackLink} href="/allfeedback">Go Back</Link>
      </div>
      <div>
        {/* <Button
          variant="solid"
          color="white"
          backgroundColor="#AD1FEA"
          // onClick={handleRoute}
        >
          Edit Feedback
        </Button> */}
      </div>
      </div>
      
      <div>
        <EditFeedBack />
      </div>
    </div>
  );
}
export default EditFeedBackPage;
