import { useCallback } from 'react';
import { useStore, getBezierPath, EdgeProps, getEdgeCenter, EdgeText } from 'react-flow-renderer';
import { getEdgeParams } from '../diagramUtil';

function FloatingEdge({ id, source, target, markerEnd, style, label, data }:EdgeProps) {
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);

  const [centerX, centerY] = getEdgeCenter({
    sourceX: sx,
    sourceY: sy,
    targetX: tx,
    targetY: ty,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
  });

  const d = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });

  const fill = data.type === 'property' ? 'rgba(157, 0, 255, 0.7)' : 'rgba(57, 255, 20, 0.5)';

  return (
    <g className="react-flow__connection">
      <path id={id} className="react-flow__edge-path" d={d} markerEnd={markerEnd} style={style} />
      <EdgeText
        x={centerX}
        y={centerY}
        label={label}
        labelStyle={{ fill: '#ffffff', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.3px' }}
        labelShowBg
        labelBgStyle={{ fill }}
        labelBgPadding={[3, 6]}
        labelBgBorderRadius={1}
      />
    </g>
  );
}

export default FloatingEdge;