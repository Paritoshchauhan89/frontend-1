import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './App.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Faq from './Pages/Faq/Faq';
import Singleblog from './Pages/Blog/SingleBlog/Singleblog';
import BlogList from './Pages/Blog/BlogList/BlogList';
import Speakers from './Pages/Speakers/Speakers';
import SpeakerDetaiil from './Pages/Speakers/Speakerdetail/SpeakerDetaiil';
import Venue from './Pages/Venue/Venue';
import Terms from './Pages/Terms/Terms';
import PublicManagement from './Pages/Terms/Publlication/PublicManagement';
import Organizerdetail from './Pages/Organizers/Organizerdetail/Organizerdetail';
import Organizers from './Pages/Organizers/Organizers';
import Error from './Pages/Error/Error';
import Conferences from './Pages/Conferences/Conferences';
import ScrollToTop from "./components/ScrollToTop";
import Services1 from './Pages/Services/services-detail/Services-detail';
import Login from './components/Account/Login';
import Sponsers from './Pages/Sponsers/Sponsers';
import Register from './components/Account/Register';
import SponserForm from './Pages/Forms/Sponser/AddSponser';
import AddConference from './Pages/Forms/Conference/AddConference';
import ViewSponser from './Pages/Forms/Sponser/ViewSponser';
import EditSponser from './Pages/Forms/Sponser/EditSponser';
import SpeakerForm from './Pages/Forms/Speaker/AddSpeaker';
import ViewSpeaker from './Pages/Forms/Speaker/ViewSpeaker';
import EditSpeaker from './Pages/Forms/Speaker/EditSpeaker';
import AddOrganizer from './Pages/Forms/Oraganizer/AddOrganizer';
import EditOrganizer from './Pages/Forms/Oraganizer/EditOrganizer';
import ViewOrganizer from './Pages/Forms/Oraganizer/ViewOrganizer';
import Feedback from './Pages/Testnomialfeedback/Feedback';
import ViewTestnomial from './Pages/Testnomialfeedback/ViewFeedback';
import Subscribe from './Pages/Forms/Subscribe/Subscribe-view';
import AddNews from './Pages/Forms/News/AddNews';
import EditNews from './Pages/Forms/News/EditNews';
import SponserDetaiil from './Pages/Sponsers/Sponserdetail/SponserDetaiil';

const App = () => {


  return (
    <>
    <BrowserRouter>
   
    <ScrollToTop>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
        <Route  path='*' element={<Error/>}/>
        <Route path='/all-sponsers' element={<Sponsers/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/blogs' element={<BlogList/>}/>
        <Route path='/blogs/singleblog' element={<Singleblog/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/all-speakers' element={<Speakers/>}/>
        <Route path='/all-organizers' element={<Organizers/>}/>
        <Route path='/all-conferences' element={<Conferences/>}/>
        <Route path='/Venue' element={<Venue/>}/>
        <Route path='/terms-and-conditions' element={<Terms/>}/>
        <Route path='/publication-management' element={<PublicManagement/>}/>
        <Route path='/speaker-detail' element={<SpeakerDetaiil/>}/>
        <Route path='/sponser-detail' element={<SponserDetaiil/>}/>
        <Route path='/organizer-detail' element={<Organizerdetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services-detail' element={<Services1/>}/>
<Route path='/login'element={<Login/>}/>
<Route path='/add-conference' element={<AddConference/>}/>

{/*  sponser forms */}
<Route path='/dashboard/add-sponser' element={<SponserForm/>}/>
<Route path='/dashboard/all-sponsers' element={<ViewSponser/>}/>
<Route path='/dashboard/edit-sponser/:id' element={<EditSponser/>}/>

{/* speaker form */}
<Route path='/dashboard/add-speaker' element={<SpeakerForm/>}/>
<Route path='/dashboard/all-speakers' element={<ViewSpeaker/>}/>
<Route path='/dashboard/edit-speaker/:id' element={<EditSpeaker/>}/>

{/* Organizer Form */}
<Route path='dashboard/add-organizer' element={<AddOrganizer/>}/>
<Route path='/dashboard/all-organizers' element={<ViewOrganizer/>}/>
<Route path='/dashboard/edit-organizer/:id' element={<EditOrganizer/>}/>
        
        {/* testnomial  feedback */}
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/dashboard/view-testnomial' element={<ViewTestnomial/>}/>


{/*   subscriber  */}
<Route path='/dashboard/all-subscribers' element={<Subscribe/>}/>


{/* news section */}
<Route path='/dashboard/add-news' element={<AddNews/>}/>
<Route path='/dashboard/edit-news/:id' element={<EditNews/>}/>
<Route path='/dashboard/detail-news/:id' element={<Singleblog/>}/>
       
       
        
<Route path='/register'element={<Register/>}/>
        



    </Routes>
    
     </ScrollToTop>

     </BrowserRouter>    
    </>
  )
}

export default App