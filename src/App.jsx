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

const App = () => {
  return (
    <>
      <Hero/>
      <IssueSubmission/>
      {/* <ProblemStatement/> */}
      <Solution/>
      <Implementation/>
      <TechnologyFramework/>
      <ExpectedImpact/>
      <CommunityEngagement/>
      <AboutInitiative/>
    </>
  )
}

export default App
