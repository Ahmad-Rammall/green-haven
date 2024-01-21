/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';

import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

import {useEffect} from "react"

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const currentUser = useSelector(state => state.User);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser._id === ""){
      navigate('/')
    }
  }, []);

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
