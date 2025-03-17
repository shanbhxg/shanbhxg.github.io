
import React, { useState, useEffect, useRef } from 'react';
import { handleCommand } from '../utils/terminalCommands';

const Terminal = () => {
  const [history, setHistory] = useState([
    { text: 'Welcome to my portfolio! Type "help" to see available commands.', type: 'system' }
  ]);
  const [input, setInput] = useState('');
  const [prompt, setPrompt] = useState('visitor@portfolio:~$');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const executeCommand = (cmd) => {
    // Add command to history
    setHistory(prev => [...prev, { text: cmd, type: 'command', prompt }]);
    
    // Process command and get response
    const response = handleCommand(cmd);
    
    // Check if it's the clear command
    if (cmd.trim().toLowerCase() === 'clear') {
      // Clear the terminal
      setHistory([]);
    } else {
      // Add response to history
      setHistory(prev => [...prev, { text: response, type: 'response' }]);
    }
    
    // Clear input
    setInput('');
    
    // Scroll to bottom
    setTimeout(() => {
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  // Auto focus on the terminal input when clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="terminal" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="terminal-control control-close"></div>
          <div className="terminal-control control-minimize"></div>
          <div className="terminal-control control-maximize"></div>
        </div>
        <div className="terminal-title">portfolio ~ bash</div>
        <div></div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {history.map((item, index) => (
          <div key={index} className="terminal-line">
            {item.type === 'command' && (
              <span className="terminal-prompt">{item.prompt}</span>
            )}
            <span 
              className={item.type === 'system' ? 'comment' : ''}
              dangerouslySetInnerHTML={{ __html: item.text }}
            ></span>
          </div>
        ))}
        <div className="terminal-line">
          <span className="terminal-prompt">{prompt}</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--foreground)',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              width: '100%',
              outline: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
