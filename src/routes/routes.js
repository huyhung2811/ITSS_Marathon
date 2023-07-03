import ListTeacher from '../components/ListTeacher';
import Profile from '../components/Profile';
import Question from '../components/Question';
import TeacherDetails from '../components/TeacherDetails';
import DefaultLayout from '../layout/defaultLayout/DefaultLayout';
import Home from '../pages/home';

export const publicRoutes = [
    { path: '/list-teacher', element: ListTeacher, layout: DefaultLayout },
    { path: '/teacher/:id', element: TeacherDetails, layout: DefaultLayout },
    { path: '/profile', element: Profile, layout: DefaultLayout },
    { path: '/', element: Home, layout: DefaultLayout },
    { path: '/question', element: Question, layout: DefaultLayout },
];
