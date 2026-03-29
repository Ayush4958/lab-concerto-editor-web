import { useMemo } from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
} from 'react-flow-renderer';

import './Diagram.css';

import useStore from '../store';
import ConceptNode from './ConceptNode';
import EnumNode from './EnumNode';
import FloatingEdge from './FloatingEdge';

function Diagram() {
  const nodeTypes = useMemo(() => ({ concept: ConceptNode, enum: EnumNode }), []);
  const edgeTypes = useMemo(() => ({ floating: FloatingEdge }), []);
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const onNodesChange = useStore((state) => state.onNodesChange);
  const onEdgesChange = useStore((state) => state.onEdgesChange);
  const onConnect = useStore((state) => state.onConnect);
  return (
    <div className='diagram'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        style={{ background: '#060609' }}
      >
        <MiniMap
          nodeColor={() => '#1a1a2e'}
          nodeStrokeColor={() => '#333'}
          maskColor='rgba(0, 0, 0, 0.7)'
        />
        <Controls />
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={0.8}
          color='rgba(255, 255, 255, 0.04)'
        />
      </ReactFlow>
    </div>
  );
}

export default Diagram;
