import Question from '../components/Question';
import ListTeacher from '../components/ListTeacher';
import Profile from '../components/Profile';
import TeacherDetails from '../components/TeacherDetails';
import DefaultLayout from '../layout/defaultLayout/DefaultLayout';
import Home from '../pages/home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import CreatClass from '../pages/admin/createClass';
import adminLayout from '../layout/adminLayout/adminLayout';
import Classes from '../pages/admin/classes';
import ClassDetail from '../pages/admin/classDetail';

export const publicRoutes = [
    { path: '/list-teacher', element: ListTeacher, layout: DefaultLayout },
    { path: '/teacher/:id', element: TeacherDetails, layout: DefaultLayout },
    { path: '/profile', element: Profile, layout: DefaultLayout },
    { path: '/', element: Home, layout: DefaultLayout },
    { path: '/question', element: Question, layout: DefaultLayout },
    { path: '/signin', element: SignIn, layout: DefaultLayout },
    { path: '/signup', element: SignUp, layout: DefaultLayout },
    { path: '/admin/create-class', element: CreatClass, layout: adminLayout },
    { path: '/admin/class', element: Classes, layout: adminLayout },
    { path: '/admin/class-detail', element: ClassDetail, layout: adminLayout },
];
