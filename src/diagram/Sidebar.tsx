import { DragEvent, MouseEventHandler } from 'react';

const onDragStart = (event: DragEvent, nodeType: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

type PaletteItem = {
  label: string;
  nodeType: string;
  accentColor: string;
  icon: string;
};

const paletteItems: PaletteItem[] = [
  {
    label: 'Concept',
    nodeType: 'concerto.metamodel.ConceptDeclaration',
    accentColor: '#00F0FF',
    icon: '◆',
  },
  {
    label: 'Enumeration',
    nodeType: 'concerto.metamodel.EnumDeclaration',
    accentColor: '#9D00FF',
    icon: '▦',
  },
];

const Sidebar = ({ onSave }: { onSave: MouseEventHandler }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {paletteItems.map((item) => (
        <div
          key={item.nodeType}
          className='palette-block'
          onDragStart={(event: DragEvent) => onDragStart(event, item.nodeType)}
          draggable
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            background: 'rgba(255,255,255,0.02)',
            border: `1px solid rgba(255,255,255,0.06)`,
            borderLeft: `2px solid ${item.accentColor}`,
            cursor: 'grab',
            transition: 'all 0.15s ease',
            borderRadius: '1px',
            userSelect: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${item.accentColor}0A`;
            e.currentTarget.style.borderColor = `${item.accentColor}33`;
            e.currentTarget.style.borderLeftColor = item.accentColor;
            e.currentTarget.style.boxShadow = `0 0 10px ${item.accentColor}15`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderLeftColor = item.accentColor;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{
            fontSize: '1rem',
            color: item.accentColor,
            lineHeight: 1,
            opacity: 0.8,
          }}>
            {item.icon}
          </span>
          <div>
            <div style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '0.3px',
            }}>
              {item.label}
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.55rem',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '1px',
            }}>
              drag to canvas
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
