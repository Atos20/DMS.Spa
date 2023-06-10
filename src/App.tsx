import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { REQUEST_METHOD, useAxios } from './hooks/useAxios';
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
  const [schoolId, setSchoolId] = useState<number | null>(null);
  // required when persistin school Data accross component
  // const [currentSchool, setCurrentSchool] = useState<School>();

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

  // the school id is then passes down to the classes
  // => classes will make the call to get all classes
  const handleSchoolChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const schoolId = event.currentTarget.id;
    const parsedNumber = parseInt(schoolId, 10);
    setSchoolId(parsedNumber);
  };

  // TODO: create ROUTE_SLUG file for path const
  return (
    <Routes>
      <Route path="" element={<NavBar />} />
      <Route
        path="home"
        element={
          <Home schools={schools} handleSchoolChange={handleSchoolChange} />
        }
      />
      <Route
        path="home/classes/:id"
        element={<Classes schoolId={schoolId} />}
      />
      <Route path="*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
};

export default App;
