import React from 'react'
import Hero from './Components/Hero'
import RecentNews from './Components/RecentNews'
import Solution from './Components/Solution'
import TechnologyFramework from './Components/TechnologyFramework'
import CommunityEngagement from './Components/CommunityEngagement'
import AboutInitiative from './Components/AboutInitiative'
import IssueSubmission from './Components/IssueSubmission'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import ImpactSection from './Components/ImpactSection'
import ExpansionScalability from './Components/ExpansionScalability'

const App = () => {
  return (
    <>
    <Navbar/>
      <Hero/>
      <RecentNews/>
      <IssueSubmission/>
      <Solution/>
      <ImpactSection/>
      {/* <TechnologyFramework/> */}
      <CommunityEngagement/>
      <ExpansionScalability/>
      <AboutInitiative/>
      <Footer/>
    </>
  )
}

export default App
