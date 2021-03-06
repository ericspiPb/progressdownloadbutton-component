import React from 'react';
import './App.css';
import LinearDownloadButton from './components/buttons/lineardownloadbutton.component';
import DownloadButton from './components/buttons/downloadbutton.component';

function App() {
  const [progress, setProgress] = React.useState<number>(0);
  const [timer, setTimer] = React.useState<NodeJS.Timeout>({} as NodeJS.Timeout);
  
  const handleDownloadStart = () => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    setTimer(interval);
  }

  const handleDownloadComplete = () => {
    clearInterval(timer);
  }

  const handleDownloadResume = () => {
    setProgress(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <LinearDownloadButton
          progress={progress}
          onClick={handleDownloadStart}
          onComplete={handleDownloadComplete}
          onDownloadResume={handleDownloadResume}
        >
        </LinearDownloadButton>
        <DownloadButton
          progress={progress}
          onClick={handleDownloadStart}
          onComplete={handleDownloadComplete}
          onDownloadResume={handleDownloadResume}
        >
        </DownloadButton>
      </header>
    </div>
  );
}

export default App;
