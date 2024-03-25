import '../../scss/pages/privacy.scss';
import Navigation from "../../components/Navigation/Navigation"
import Footer from "../../components/Footer/Footer"
import { useEffect } from 'react';
import PrivacyHero from '../../components/PrivacyHero/PrivacyHero';
import PrivacyNotice from '../../components/PrivacyNotice/PrivacyNotice';
import InformationWeCollect from '../../components/InformationWeCollect/InformationWeCollect';
import InformationCollectionTable1 from '../../components/InformationCollectionTable1/InformationCollectionTable1';
import InformationCollectionTable2 from '../../components/InformationCollectionTable2/InformationCollectionTable2';
import RegisteredUser from '../../components/RegisteredUser/RegisteredUser';
import InformationCollectionTable3 from '../../components/InformationCollectionTable3/InformationCollectionTable3';
import HowAndWhyWeUseCookies from '../../components/HowAndWhyWeUseCookies/HowAndWhyWeUseCookies';
import HowWeUsePersonalInformation from '../../components/HowWeUsePersonalInformation/HowWeUsePersonalInformation';
import HowWeSecurePersonalInformation from '../../components/HowWeSecurePersonalInformation/HowWeSecurePersonalInformation';
import PrivacyNotices from '../../components/PrivacyNotices/PrivacyNotices';
import InternationalTransferOfData from '../../components/InternationalTransferOfData/InternationalTransferOfData';
import AdditionalCCPA from '../../components/AdditionalCCPA/AdditionalCCPA';
import AdditionalGDPR from '../../components/AdditionalGDPR/AdditionalGDPR';
import NotificationOfChanges from '../../components/NotificationOfChanges/NotificationOfChanges';
const Privacy =()=>
{

    return (
        <>
     <Navigation/>
     <div id="page-wrapper">
        <main>
            <section class="shared-hero">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/privacy/ColorsHero.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/privacy/ColorsHero@mobile.svg"
                        alt=""
                    />
                </div>
                <PrivacyHero/>
            </section>

            <section class="shared-section section-privacy">
                <div class="decor">
                    <img
                        class="colors d-none d-md-block"
                        src="img/privacy/ColorsBody.svg"
                        alt=""
                    />
                    <img
                        class="colors d-block d-md-none"
                        src="img/privacy/ColorsBody@mobile.svg"
                        alt=""
                    />
                </div>
                <div class="container">
                    <div class="container-narrow">
                        <div class="rich-text-block">
                            <PrivacyNotice/>
                            <InformationWeCollect/>
                            <InformationCollectionTable1/>
                            <InformationCollectionTable2/>
                            <RegisteredUser/>
                            <InformationCollectionTable3/>
                            <HowAndWhyWeUseCookies/> 
                            <HowWeUsePersonalInformation/>
                            <HowWeSecurePersonalInformation/>
                            <PrivacyNotices/>
                            <InternationalTransferOfData/>
                            <AdditionalCCPA/>
                            <AdditionalGDPR/>
                            <NotificationOfChanges/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
     </div>
        </>
    )

}

export default Privacy