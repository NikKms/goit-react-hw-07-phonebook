import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledContainer } from './App.styled';

const LazyHome = lazy(() => import('../../pages/Home/Home'));
const LazyContacts = lazy(() => import('../../pages/Contacts/Contacts'));
const LazyAddContact = lazy(() => import('../../pages/AddContact/AddContact'));

export const App = () => {
  return (
    <StyledContainer>
      <Suspense>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/contacts" element={<LazyContacts />} />
          <Route path="/contacts/addcontact" element={<LazyAddContact />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};
