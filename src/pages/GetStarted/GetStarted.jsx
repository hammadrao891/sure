import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import '../../scss/pages/get-started.scss';
import GetStartedHero from '../../components/GetStartedHero/GetStartedHero';
import GetStartedForm from '../../components/GetStartedForm/GetStartedForm';
function GetStarted ()
{

    return(
        <>
          <GetStartedHero/>
          <GetStartedForm/>  
        </>
    )
}

export default GetStarted