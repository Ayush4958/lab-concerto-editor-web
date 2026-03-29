import NamespaceVisibility from '../NamespaceVisibility';
import useStore, { Orientation } from '../store';
import Sidebar from './Sidebar';

function DiagramTools() {
    const layoutChanged = useStore((state) => state.layoutChanged);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
                <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '10px',
                    paddingBottom: '6px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                    Layout
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                    {[
                        { label: '↓ TB', orient: Orientation.TOP_TO_BOTTOM },
                        { label: '↑ BT', orient: Orientation.BOTTOM_TO_TOP },
                        { label: '→ LR', orient: Orientation.LEFT_TO_RIGHT },
                        { label: '← RL', orient: Orientation.RIGHT_TO_LEFT },
                    ].map(({ label, orient }) => (
                        <button
                            key={label}
                            onClick={() => layoutChanged(orient)}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: 'rgba(255,255,255,0.6)',
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.65rem',
                                padding: '6px 4px',
                                cursor: 'pointer',
                                borderRadius: '1px',
                                transition: 'all 0.15s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#00F0FF';
                                e.currentTarget.style.color = '#00F0FF';
                                e.currentTarget.style.boxShadow = '0 0 6px rgba(0,240,255,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '10px',
                    paddingBottom: '6px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                    Components
                </div>
                <Sidebar onSave={() => { }} />
            </div>

            <div>
                <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '10px',
                    paddingBottom: '6px',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}>
                    Namespaces
                </div>
                <NamespaceVisibility />
            </div>
        </div>
    );
}

export default DiagramTools;
