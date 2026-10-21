import React, { useCallback, useEffect, useState } from 'react';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Miscellaneous from '../components/Miscellaneous';
import Contact from '../components/Contact';

const files = [
  { id: 'about', label: 'about.tsx', component: About },
  { id: 'skills', label: 'skills.tsx', component: Skills },
  { id: 'experience', label: 'experience.tsx', component: Experience },
  { id: 'projects', label: 'projects.tsx', component: Projects },
  { id: 'miscellaneous', label: 'miscellaneous.tsx', component: Miscellaneous },
  { id: 'contact', label: 'contact.tsx', component: Contact },
];

const Index = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 760);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (isMobile) {
      setOpenFiles(files.map((file) => file.id));
    }
  }, [isMobile]);
  const initialFile = files.some((file) => file.id === window.location.hash.slice(1))
    ? window.location.hash.slice(1)
    : 'about';
  const [activeFile, setActiveFile] = useState(initialFile);
  const [openFiles, setOpenFiles] = useState(
    window.innerWidth <= 760 ? files.map((file) => file.id) : [initialFile]
  );
  const openFile = useCallback((id, updateHistory = true) => {
    if (!files.some((file) => file.id === id)) return;
    setOpenFiles((current) => current.includes(id) ? current : [...current, id]);
    setActiveFile(id);
    if (updateHistory) window.history.pushState({ file: id }, '', `#${id}`);
  }, []);

  const closeFile = useCallback((id) => {
    if (isMobile) return;
    setOpenFiles((current) => {
      if (current.length === 1) return current;
      const nextOpenFiles = current.filter((file) => file !== id);
      if (activeFile === id) {
        const closedIndex = current.indexOf(id);
        const nextFile = nextOpenFiles[Math.max(0, closedIndex - 1)] || nextOpenFiles[0] || 'about';
        setActiveFile(nextFile);
        window.history.pushState({ file: nextFile }, '', `#${nextFile}`);
      }
      return nextOpenFiles;
    });
  }, [activeFile, isMobile]);

  useEffect(() => {
    const handlePopState = () => {
      const id = window.location.hash.slice(1);
      const nextFile = files.some((file) => file.id === id) ? id : 'about';
      setOpenFiles((current) => current.includes(nextFile) ? current : [...current, nextFile]);
      setActiveFile(nextFile);
    };
    const handleKeyDown = (event) => {
      const modifier = event.ctrlKey || event.metaKey;
      if (modifier && event.key.toLowerCase() === 'w') {
        event.preventDefault();
        closeFile(activeFile);
      }
      if (modifier && event.key === 'Tab' && openFiles.length > 1) {
        event.preventDefault();
        const currentIndex = openFiles.indexOf(activeFile);
        const nextIndex = (currentIndex + 1) % openFiles.length;
        openFile(openFiles[nextIndex]);
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeFile, closeFile, openFile, openFiles]);

  const ActiveComponent = files.find((file) => file.id === activeFile)?.component || About;
  const activeLabel = files.find((file) => file.id === activeFile)?.label || 'about.tsx';

  return (
    <div className="portfolio-app ide-frame">
      <div className="ide-titlebar"><span className="ide-titlebar-brand">◈</span><span><strong>deepti-portfolio</strong> — Visual Studio Code</span><span className="ide-titlebar-hint">Ctrl+Tab to switch files · Ctrl+W to close</span></div>

      <div className="ide-workspace">
        <aside className="explorer" aria-label="Portfolio file explorer">
          <div className="explorer-heading">Explorer</div>
          <div className="explorer-group">
            <div className="explorer-group-title">DEEpti-PORTFOLIO</div>
            {files.map((file) => (
              <button
                key={file.id}
                type="button"
                className={`explorer-link ${activeFile === file.id ? 'active' : ''}`}
                data-file={file.id}
                onClick={() => openFile(file.id)}
                aria-current={activeFile === file.id ? 'page' : undefined}
              >
                {file.label}
              </button>
            ))}
          </div>
          <div className="explorer-group">
            <div className="explorer-group-title">Social</div>
            <a className="explorer-link external-link" href="https://github.com/shanbhxg" target="_blank" rel="noreferrer">github</a>
            <a className="explorer-link external-link" href="https://in.linkedin.com/in/deeptishanbhag" target="_blank" rel="noreferrer">linkedin</a>
            <a className="explorer-link external-link" href="https://medium.com/@shanbhxg" target="_blank" rel="noreferrer">medium</a>
          </div>
          <div className="explorer-group">
            <div className="explorer-group-title">Workspace</div>
            <div className="explorer-meta">Bengaluru, IN</div>
          </div>
        </aside>

        <div className="editor-area">
          <div className="editor-tabs" role="tablist" aria-label="Open files">
            {openFiles.map((id) => {
              const file = files.find((item) => item.id === id);
              if (!file) return null;
              return (
                <div className={`editor-tab ${activeFile === id ? 'active' : ''}`} key={id}>
                  <button type="button" role="tab" aria-selected={activeFile === id} tabIndex={activeFile === id ? 0 : -1} onClick={() => openFile(id)}>{file.label}</button>
                  {!isMobile && ( <button type="button" className="editor-tab-close" aria-label={`Close ${file.label}`} onClick={() => closeFile(id)} disabled={openFiles.length === 1} > × </button> )}                </div>
              );
            })}
          </div>
          <div className="editor-breadcrumbs"><span>src</span><span className="breadcrumb-separator">/</span><span>portfolio</span><span className="breadcrumb-separator">/</span><span>{activeLabel}</span></div>

          <main className="editor-content" key={activeFile}>
            <ActiveComponent />
          </main>
        </div>
      </div>
      <div className="statusbar">
        <div className="statusbar-left"><span className="statusbar-item">main</span><span className="statusbar-item">All systems operational</span></div>
        <div className="statusbar-right"><span className="statusbar-item">UTF-8</span><span className="statusbar-item">TypeScript React</span><span className="statusbar-item">{activeLabel}</span></div>
      </div>
    </div>
  );
};

export default Index;
