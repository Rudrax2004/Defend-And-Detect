
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About.jsx'
import Contact from './components/Contacts/Contact.jsx'
import User from './components/User_Custom_Page/User.jsx'
// import GitHub, { githubInfoLoader } from './components/Github/Github.jsx'
import Register from './components/Pages/Register.jsx'
import Login from './components/Pages/login.jsx'
import Logout from './components/Pages/Logout.jsx';
import Blog from './components/Blogs/Blog.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import  Learn  from './components/learning/learn.jsx';
import { Admin } from './components/Admin/admin.jsx';
import {AdminUsers} from './components/Admin/AdminUsers.jsx';
import NewHome from "./components/Home/newHome.jsx"
import AdminUpdate from './components/Admin/AdminUpdate.jsx';
import AdminBlog from './components/Admin/AdminBlogs.jsx';
import { AdminContacts } from './components/Admin/adminContacts.jsx';
import { Labs } from './components/learning/labs.jsx';
import { Intro } from './components/learning/intro.jsx';
import {SqlInjection} from "./components/practice/lab1/practice_sql.jsx";
import { IntroSql } from './components/learning/sqlnjection.jsx';
import WebFundamentals from './components/learning/webfundamental.jsx';
import MovieCenter from './components/practice/xss-Movie.jsx';
import PhishingIntro from './components/learning/phishing.jsx';

function App() {

  
  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<NewHome/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/logout" element={<Logout/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/update/:userid' element={<AdminUpdate/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/intro" element={<Intro/>} />
        <Route path='/learn' element={<Learn/>}/>
        <Route path="/webfunda" element={<WebFundamentals/>} />
        <Route path='/learn' element={<Learn/>}/>
        <Route path='/lab1' element={<SqlInjection/>}/>
        <Route path='/introsql' element={<IntroSql/>}/>
        <Route path='/introphishing' element={<PhishingIntro/>}/>
        <Route path='/phishing' element={<MovieCenter/>}/>
        <Route path='/labs' element={<Labs/>}/>
        <Route path='/user/:userid' element={<User/>}/>{/*here user:__userid__ gives access in url and that __userid__ is drectly access in  User.jsx file with same name  */}   
      {/* <Route
        // loader={githubInfoLoader}
        path='github'
      element={<GitHub/>}/>*/}
    <Route path='/admin' element={<Admin/>}>
      <Route path='users' element={<AdminUsers/>}/>
      <Route path='blogs' element={<AdminBlog/>}/>
      <Route path='contacts' element={<AdminContacts/>}/>
  </Route>

      </Routes>
      </Router>

    <GoogleOAuthProvider clientId='829875598179-tlqg8232655k6mgg7sj5nmar9mvt55i4.apps.googleusercontent.com'>
    </GoogleOAuthProvider>
    </>
  )
}

export default App
