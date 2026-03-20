import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
// We will create these shortly
import Scene1Greeting from './components/scenes/Scene1_Greeting';
import Scene2MoodMeter from './components/scenes/Scene2_MoodMeter';
import Scene3SafeZone from './components/scenes/Scene3_SafeZone';
import Scene4Coupons from './components/scenes/Scene4_Coupons';
import Scene5CTA from './components/scenes/Scene5_CTA';
import FloatingParticles from './components/ui/FloatingParticles';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));

  return (
    <div className="w-full h-full flex justify-center items-center relative p-4">
      <FloatingParticles />
      <AnimatePresence mode="wait">
        {step === 1 && <Scene1Greeting key="step1" onNext={nextStep} />}
        {step === 2 && <Scene2MoodMeter key="step2" onNext={nextStep} />}
        {step === 3 && <Scene3SafeZone key="step3" onNext={nextStep} />}
        {step === 4 && <Scene4Coupons key="step4" onNext={nextStep} />}
        {step === 5 && <Scene5CTA key="step5" />}
      </AnimatePresence>
    </div>
  );
}

export default App;
