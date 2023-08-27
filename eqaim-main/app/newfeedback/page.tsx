"use client";
import NewFeedBack from "../components/NewFeedBack";
import feedbackStyle from "../styles/newfeedback.module.css";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
function NewFeedBackPage() {
  return (
    <div className={feedbackStyle.mainFeedBackContainer} style={{height: "100%",
    marginTop: "2%"}}>
      <div className={feedbackStyle.goback}>
        <ChevronLeftIcon /> 
        <Link className={feedbackStyle.gobackLink} href="/allfeedback">Go Back</Link>
      </div>
      <div>
        <NewFeedBack />
      </div>
    </div>
  );
}
export default NewFeedBackPage;
