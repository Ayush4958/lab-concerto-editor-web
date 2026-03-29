import Diagram from './Diagram';
import DiagramTools from './DiagramTools';

function DiagramHost() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: 'calc(100vh - 120px)',
      width: '100%',
      overflow: 'hidden',
    }}>
      <div style={{
        width: '220px',
        minWidth: '220px',
        background: 'rgba(12, 12, 18, 0.95)',
        borderRight: '1px solid #1a1a1a',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        padding: '16px 12px',
      }}>
        <DiagramTools />
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <Diagram />
      </div>
    </div>
  );
}

export default DiagramHost;
