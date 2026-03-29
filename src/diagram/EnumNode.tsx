import { Handle, Position } from 'react-flow-renderer';
import { colors } from '../theme';
import { EnumNodeData } from '../types';
import { getClassDescription } from '../modelUtil';

import './Node.css';
import { MAX_PROPERTIES } from '../diagramUtil';

export default function EnumNode({ data }: { data: EnumNodeData }) {
    const declaration = data.declaration;
    const headerColor = colors[declaration.$class] || '#9D00FF';

    return (
        <>
            <Handle type='target' position={Position.Bottom} />
            <Handle type='source' position={Position.Top} />
            <div className='Node' style={{ borderColor: `${headerColor}22` }}>
                <div className='header' style={{ background: `linear-gradient(135deg, ${headerColor}18, ${headerColor}08)` }}>
                    <div className='DeclarationName'>{declaration.name}</div>
                    <div className='DeclarationType'>
                        {getClassDescription(declaration)}
                    </div>
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0,
                        height: '2px', background: headerColor, opacity: 0.7
                    }} />
                </div>
                <div className='node-properties'>
                    {declaration.properties.slice(0, MAX_PROPERTIES).map(prop => (
                        <div className='enum-value-row' key={prop.name}>
                            <span className='enum-dot' style={{ background: headerColor }} />
                            <span className='enum-value-name'>{prop.name}</span>
                        </div>
                    ))}
                    {declaration.properties.length > MAX_PROPERTIES && (
                        <div className='overflow-row'>···</div>
                    )}
                </div>
                <div className='footer' />
            </div>
        </>
    );
}