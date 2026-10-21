import React, { useState, useEffect, useRef } from 'react';
import { handleCommand } from '../utils/terminalCommands';

const Terminal = () => {
  const [history, setHistory] = useState([
    { text: 'Welcome to my portfolio. Type "help" to list available commands.', type: 'system' },
  ]);
  const [input, setInput] = useState('');
  const [prompt] = useState('visitor@portfolio:~$');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  React.useEffect(() => {
    let active = true;
  
    const handleResume = async () => {
      setInput('');
  
      for (let i = 1; i <= 'resume'.length; i++) {
        if (!active) return;
  
        setInput('resume'.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    };
  
    window.addEventListener('terminal-resume', handleResume);
  
    return () => {
      active = false;
      window.removeEventListener('terminal-resume', handleResume);
    };
  }, [setInput]);
  const executeCommand = (command) => {
    const trimmed = command.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    setHistory((previous) => [
      ...previous,
      { text: trimmed, type: 'command', prompt },
      { text: handleCommand(trimmed), type: 'response' },
    ]);
    setInput('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') executeCommand(input);
  };

  const focusInput = () => inputRef.current?.focus();

  useEffect(() => {
    if (terminalRef.current) terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [history]);

  return (
    <section className="terminal" onClick={focusInput} role="region" aria-label="Interactive portfolio terminal">
      <div className="terminal-header">
        <div className="terminal-controls" aria-hidden="true">
          <span className="terminal-control control-close" />
          <span className="terminal-control control-minimize" />
          <span className="terminal-control control-maximize" />
        </div>
        <div className="terminal-title">TERMINAL <span>·</span> portfolio — bash</div>
        <span className="terminal-header-menu" aria-hidden="true">•••</span>
      </div>
      <div className="terminal-session-bar"><span>bash</span><span>visitor@portfolio</span><span>×</span></div>
      <div className="terminal-body" ref={terminalRef}>
        {history.map((item, index) => (
          <div key={`${item.type}-${index}`} className={`terminal-line terminal-line-${item.type}`}>
            {item.type === 'command' && <span className="terminal-prompt">{item.prompt}</span>}
            <span className={item.type === 'system' ? 'comment' : ''}>
              {item.type === 'response' ? <span dangerouslySetInnerHTML={{ __html: item.text }} /> : item.text}
            </span>
          </div>
        ))}
        <div className="terminal-line terminal-input-line">
          <span className="terminal-prompt">{prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Enter a portfolio terminal command"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="terminal-cursor" aria-hidden="true" />
        </div>
      </div>
      <div className="terminal-hint">Try <span className="keyword">help</span>, <span className="keyword">projects</span>, <span className="keyword">experience</span>, or <span className="keyword">clear</span>.</div>
    </section>
  );
};

export default Terminal;
