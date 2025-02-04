import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './input/input';
import Add from './Add/Add';
import Navbar from './Navbar/Navbar';
import Sidebar from './sidebar/sidebar';
import { Route, Routes } from 'react-router-dom';
import Edit from './student/Edit/edit';
import Serice from './student/seric/serice';
import Profile from './student/Profile/profile';
import Admin from './student/Admin/Admin';
import Cours from './student/courses/cours';
import Clesson from './student/courseslesson/clesson';
import Takecors from './student/takecors/takecors';
import Takequiz from './student/takequiz/takequiz';
import Sinup from './student/signup/signup';
import Dash from './student/dashbord/dashbord';
import Billing from './student/billing/billing';
import Login from './student/login/login';

import  Dashboard  from './instructor/dashbordins/dashbordins';
import Mycorses from './instructor/mycorses/mycorses';
import Editcorses from './instructor/Editcorses/editcorses';
import Editelesson from './instructor/editlesson/editelesson';
import Createquiz from './instructor/createquiz/createquiz';
import Erning from './instructor/erning/erning';
import Profileins from './instructor/profileins/profileins';
import Pay from './instructor/payout/payout';
import Button from './UI/buttons/button';
import Model from './UI/models/model';
import Avatar from './UI/avater/avatar';
import Chart from './UI/charts/chart';
import Formui from './UI/forms/form';
import Range from './UI/rangeslider/range';
import Time from './UI/timedate/time';
import Table from './UI/table/table';
import Taps from './UI/taps/taps';
import Icons from './UI/icons/icons';
import Vector from './UI/vectormap/vector';
import Updatpass from './student/updatepass/updatepass';
import AddCourse from './student/Addcourses/addcourses';
import ViewCourse from './instructor/view/view';
import Addfriends from './student/addfriends/addfriends';
import FollowersList from './student/Profile/followers/followers';
import Profilefollower from './student/Profile/followerpage/followerpage';
import Score from './student/takequiz/score/score';
import Myquiz from './instructor/myquiz/myquiz';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <div className='row'>
      <div className='col-3 ss'>
      <Sidebar/>
      </div>
      <div className='col-9 allc'>
      <Routes>
    <Route path='/' element={ <Dash/>}/>
    <Route path='/edit' element={ <Edit/>}/>
    <Route path='/serice' element={ <Serice/>}/>
    <Route path='/Admin' element={ <Admin/>}/>
    <Route path='/profile' element={ <Profile/>}/>
    <Route path='/cours' element={ <Cours/>}/>
    <Route path='/clesson' element={ <Clesson/>}/>
    <Route path='/takecors' element={ <Takecors/>}/>
    <Route path='/takequiz/:quizid' element={ <Takequiz/>}/>
    <Route path='/billing' element={ <Billing/>}/>
    <Route path='/login' element={ <Login/>}/>
    <Route path='/sinup' element={ <Sinup/>}/>
    <Route path='/updatepass' element={ <Updatpass/>}/>
    <Route path='/score/:quizid' element={ <Score/>}/>
    {/* instrctor */}
    <Route path='/dashbord' element={ <Dashboard/>}/>
    <Route path='/mycorses' element={ <Mycorses/>}/>
    <Route path='/myquiz' element={ <Myquiz/>}/>
    <Route path='/editcorses' element={ <Editcorses/>}/>
    <Route path='/editlesson' element={ <Editelesson/>}/>
    <Route path='/createquiz/:courseId' element={ <Createquiz/>}/>
    <Route path='/erning' element={ <Erning/>}/>
    <Route path='/profileins' element={ <Profileins/>}/>
    <Route path='/pay' element={ <Pay/>}/>
    {/* ui */}
    <Route path='/button' element={ <Button/>}/>
    <Route path='/model' element={ <Model/>}/>
    <Route path='/avatar' element={ <Avatar/>}/>
    <Route path='/chart' element={ <Chart/>}/>
    <Route path='/formui' element={ <Formui/>}/>
    <Route path='/range' element={ <Range/>}/>
    <Route path='/time' element={ <Time/>}/>
    <Route path='/table' element={ <Table/>}/>
    <Route path='/taps' element={ <Taps/>}/>
    <Route path='/icons' element={ <Icons/>}/>
    <Route path='/vector' element={ <Vector/>}/>
    
    <Route path='/followers' element={<FollowersList/>} />
    <Route path='/addcourss' element={ <AddCourse/>}/>
    <Route path='/editcorses/:courseid' element={<Editcorses />} />
    <Route path='/view/:courseId' element={<ViewCourse/>} />
    <Route path='/Addfriends' element={<Addfriends/>} />
    <Route path='/profilefollow/:userid' element={<Profilefollower/>} />
      </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
