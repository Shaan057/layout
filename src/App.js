import './App.css';
import Assurance from './components/100%Accurance';
import BecomeAcc from './components/BecomeAcc';
import Header from './components/Header';
import WhatWillYouLearn from './components/WhatWillLearn';
import WhyChooseUs from './components/WhyChooseUs';
import KickStartSection from './components/kickOffYourAccA';

const App = () => {
  return (
    <div className="bg-container">
      <Header />
      <BecomeAcc />
      <WhyChooseUs />
      <WhatWillYouLearn />
      <Assurance />
      <KickStartSection />
    </div>
  );
}

export default App;
