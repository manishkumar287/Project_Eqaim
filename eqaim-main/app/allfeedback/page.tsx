"use client";
import { useState } from "react"
import suggestionStyle from "../styles/suggestions.module.css"
import Navbar from "../components/Navbar"
import Feedbacks from "../components/Feedbacks"
import Courses from "../components/Courses"

const SuggestionsPage = () => {

  const [suggestion,setSuggestion]=useState([]);

  return (
    <div className={suggestionStyle.suggestionContainer}>
        <div className={suggestionStyle.leftContainer}><Courses suggestion={suggestion}/></div>
        <div className={suggestionStyle.rightContainer}>
            <nav><Navbar suggestion={suggestion}/></nav>
            <section><Feedbacks setSuggestion={setSuggestion}/></section>
        </div>
    </div>
  )
}

export default SuggestionsPage;