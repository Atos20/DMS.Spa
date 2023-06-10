import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { REQUEST_METHOD, useAxios } from './hooks/useAxios';
import { Classroom } from './interfaces/classRoom';
import { Classes } from './pages/Classes';
import { Home } from './pages/Home';
import { GET_ALL_SCHOOLS } from './routes/routes';

export interface School {
  schoolId: number;
  schoolName: string;
  directorName: string;
}

const App = (): JSX.Element => {
  const [schools, setSchools] = useState<School[]>([]);
  const [classes, setClasses] = useState<Classroom[]>([]);
  const [schoolId, setSchoolId] = useState<number | null>(null);
  const [currentSchool, setCurrentSchool] = useState<School>();

  const {
    getResponse: getSchoolsData,
    response,
    loading,
  } = useAxios({
    method: REQUEST_METHOD.GET,
    url: GET_ALL_SCHOOLS,
  });

  useEffect(() => {
    getSchoolsData();
  }, []);

  useEffect(() => {
    if (response) {
      setSchools(response?.data as unknown as School[]);
    }
  }, [response]);

  const handleSchoolChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const schoolId = event.currentTarget.id;
    const parsedNumber = parseInt(schoolId, 10);
    setSchoolId(parsedNumber);
  };

  return (
    <Routes>
      <Route path="" element={<NavBar />} />
      <Route
        path="home"
        element={
          <Home schools={schools} handleSchoolChange={handleSchoolChange} />
        }
      />
      <Route path="classes" element={<Classes />} />
    </Routes>
  );
};

export default App;
