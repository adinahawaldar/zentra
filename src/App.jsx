import React from 'react'
import Hero from './Components/Hero'
import ProblemStatement from './Components/ProblemStatement'
import Solution from './Components/Solution'
import Implementation from './Components/Implementation'
import TechnologyFramework from './Components/TechnologyFramework'
import ExpectedImpact from './Components/ExpectedImpact'
import CommunityEngagement from './Components/CommunityEngagement'
import AboutInitiative from './Components/AboutInitiative'
import IssueSubmission from './Components/IssueSubmission'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero/>
      <IssueSubmission/>
      {/* <ProblemStatement/> */}
      <Solution/>
      {/* <Implementation/> */}
      <TechnologyFramework/>
      {/* <ExpectedImpact/> */}
      <CommunityEngagement/>
      <AboutInitiative/>
      <Footer/>
    </>
  )
}

export default App
