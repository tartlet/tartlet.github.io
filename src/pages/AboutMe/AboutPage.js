import { useState, useEffect } from 'react';
import TypingComponent from './AboutMeTyping.js';
import './aboutme.css';
import myProfilePicture from './../../assets/jingsi.jpg';
import myResume from './../../assets/files/Jingsi Zhou — Resume.pdf';

const AboutPage = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const [line1Complete, setLine1Complete] = useState(false);
  const [line2Complete, setLine2Complete] = useState(false);
  const [line3Complete, setLine3Complete] = useState(false);
	const [line4Complete, setLine4Complete] = useState(false);
  const [showNewText, setShowNewText] = useState(false);
	// const [slideRight, setSlideRight] = useState(false);
	const [expandLeftDiv, setExpandLeftDiv] = useState(false);

  const handleAnimationComplete = () => {
    console.log('TypeIt animation completed!');
    setTypingComplete(true);
    window.localStorage.setItem('typingComplete', true);
  };

  useEffect(() => {
    setTypingComplete(JSON.parse(window.localStorage.getItem('typingComplete')));
    setLine1Complete(JSON.parse(window.localStorage.getItem('line1Complete')));
    setLine2Complete(JSON.parse(window.localStorage.getItem('line2Complete')));
    setLine3Complete(JSON.parse(window.localStorage.getItem('line3Complete')));
    setLine4Complete(JSON.parse(window.localStorage.getItem('line4Complete')));
    setShowNewText(JSON.parse(window.localStorage.getItem('showNewText')));
    setExpandLeftDiv(JSON.parse(window.localStorage.getItem('expandLeftDiv')));
  }, [])

  useEffect(() => {
    if (typingComplete) {
      setTimeout(() => {
        setLine1Complete(true);
        window.localStorage.setItem('line1Complete', true);
      }, 800); // Delay before fading in the first line
    }
  }, [typingComplete]);

  useEffect(() => {
    if (line1Complete) {
      setTimeout(() => {
        setLine2Complete(true);
        window.localStorage.setItem('line2Complete', true);
      }, 700); // Delay before fading in the second line
    }
  }, [line1Complete]);

  useEffect(() => {
    if (line2Complete) {
      setTimeout(() => {
        setLine3Complete(true);
        window.localStorage.setItem('line3Complete', true);
      }, 700); // Delay before fading in the third line
    }
  }, [line2Complete]);

  useEffect(() => {
    if (line3Complete) {
      setTimeout(() => {
        setLine4Complete(true);
        window.localStorage.setItem('line4Complete', true);
      }, 700); // Delay before fading in fourth line
    }
  }, [line3Complete]);

	useEffect(() => {
    if (line4Complete) {
      setTimeout(() => {
        setShowNewText(true);
        window.localStorage.setItem('showNewText', true);
      }, 1000); // Delay before fading in resume text
    }
  }, [line4Complete]);

	useEffect(() => {
    if (showNewText) {
      setTimeout(() => {
        setExpandLeftDiv(true);
        window.localStorage.setItem('expandLeftDiv', true);
				console.log("slid");
      }, 1000); // Delay before sliding
    }
  }, [showNewText]);

return (
	<div className="flex">
		<div className={`fade-in-image ${expandLeftDiv ? 'show' : ''}`}>
			<img src={myProfilePicture} className="pt-6 pl-4 rounded-full"/>
		</div>
		<div className="pr-10 basis-2/3 font-sans">
					{!typingComplete && <TypingComponent onAnimationComplete={handleAnimationComplete} />}
					<div className={`fade-in-text ${line1Complete ? 'show' : ''}`}>
						<div className="pt-10 pl-6 text-md md:text-lg">UT Austin, B.S. Mechanical Engineering & Minor in Computer Science.</div>
					</div>
					<div className={`fade-in-text ${line2Complete ? 'show' : ''}`}>
						<div className="pt-10 pl-6 text-md md:text-lg">Artist + maker + explorer + climber.</div>
					</div>
					<div className={`fade-in-text ${line3Complete ? 'show' : ''}`}>
						<div className="pt-10 pl-6 text-md md:text-lg">Programming Languages: JavaScript, Python, Swift, MATLAB</div>
					</div>
					<div className={`fade-in-text ${line4Complete ? 'show' : ''}`}>
						<div className="pt-10 pl-6 text-md md:text-lg">Other notable skills: PostgreSQL, SQLAlchemy, Database Design, API creation + documentation, React.js, Flask, GraphQL, CI/CD</div>
					</div>
					<div className={`fade-in-text ${showNewText ? 'show' : ''}`}>
						<div className="text-sm left pt-10 pl-6 md:text-base">My Resume:</div>
						<div className="pl-8">
								<button className="bg-white hover:bg-pinkycandy font-bold py-2 px-4 rounded inline-flex items-center">
									<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
									<span><a href={myResume} download="leResume_Jingsi">Download</a></span>
								</button>
						</div>
					</div>
		</div>
	</div>
);
};

export default AboutPage;
