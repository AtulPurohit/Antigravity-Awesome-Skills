import { useState, useEffect } from 'react';

export default function App() {
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch dynamic JSON catalog index
    fetch('/skills_index.json')
      .then(res => res.json())
      .then(data => {
        setSkills(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching catalog index:', err);
        setLoading(false);
      });
  }, []);

  const categories = ['all', ...new Set(skills.map(s => s.category))];

  const filteredSkills = skills.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(search.toLowerCase()) || 
                          s.description.toLowerCase().includes(search.toLowerCase()) ||
                          s.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === 'all' || s.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  const handleCopy = (skillName) => {
    const cmd = `npx antigravity-awesome-skills --bundle ${skillName}`;
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <header className="app-header">
        <h1 className="app-title">Antigravity Skills Explorer</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Interactive browser for 313 high-quality, production-ready AI agent skills
        </p>
      </header>

      {loading ? (
        <div style={{ textAlignment: 'center', padding: '3rem' }}>Loading skills index...</div>
      ) : (
        <div className="layout-grid">
          {/* Sidebar Filters */}
          <aside className="glass-panel" style={{ height: 'fit-content' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.1rem' }}>Categories</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {categories.map(cat => (
                <div
                  key={cat}
                  className={`cat-item ${selectedCat === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCat(cat)}
                >
                  <span style={{ textTransform: 'capitalize' }}>{cat.replace('-', ' ')}</span>
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                    ({cat === 'all' ? skills.length : skills.filter(s => s.category === cat).length})
                  </span>
                </div>
              ))}
            </div>
          </aside>

          {/* Main List */}
          <main style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input
              type="text"
              placeholder="Search skills (e.g. laravel, docker, clean architecture)..."
              className="search-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <div className="skills-list">
              {filteredSkills.map(s => (
                <div
                  key={s.name}
                  className="glass-panel skill-card"
                  onClick={() => setSelectedSkill(s)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span className="badge badge-blue">{s.category}</span>
                    <span className="badge badge-green">{s.complexity}</span>
                  </div>
                  <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{s.title}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      )}

      {/* Modal Dialog */}
      {selectedSkill && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', zIndex: 1000, padding: '1rem'
        }}>
          <div className="glass-panel" style={{ maxWidth: '600px', width: '100%', padding: '2rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{selectedSkill.title}</h3>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 1.5rem 0' }}>{selectedSkill.description}</p>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div><strong>Category:</strong> <span style={{ textTransform: 'capitalize' }}>{selectedSkill.category}</span></div>
              <div><strong>Complexity:</strong> <span style={{ textTransform: 'capitalize' }}>{selectedSkill.complexity}</span></div>
              <div><strong>Risk:</strong> <span style={{ textTransform: 'uppercase' }}>{selectedSkill.risk}</span></div>
            </div>

            <div style={{ background: '#1c1d24', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <code style={{ fontSize: '0.9rem', color: '#ff79c6' }}>
                npx antigravity-awesome-skills --bundle {selectedSkill.name}
              </code>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button className="accent-btn" onClick={() => handleCopy(selectedSkill.name)}>
                {copied ? 'Copied!' : 'Copy Install Command'}
              </button>
              <button style={{
                background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid var(--border-color)',
                padding: '10px 20px', borderRadius: '8px', cursor: 'pointer'
              }} onClick={() => setSelectedSkill(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
