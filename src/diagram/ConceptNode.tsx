import { Handle, Position } from 'react-flow-renderer';
import { colors, getTypeBadgeColor } from '../theme';
import { ConceptNodeData } from '../types';
import { getClassDescription, getModifiers, getNameOfType } from '../modelUtil';

import './Node.css';
import { MAX_PROPERTIES } from '../diagramUtil';

export default function ConceptNode({ data }: { data: ConceptNodeData }) {
    const declaration = data.declaration;
    const headerColor = colors[declaration.$class] || '#00F0FF';
    const isAbstract = declaration.isAbstract;

    return (
        <>
            <Handle type='target' position={Position.Bottom} />
            <Handle type='source' position={Position.Top} />
            <div className={`Node ${isAbstract ? 'is-abstract' : ''}`}
                 style={{ borderColor: `${headerColor}22` }}>
                <div className='header' style={{ background: `linear-gradient(135deg, ${headerColor}18, ${headerColor}08)` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div className='DeclarationName'>{declaration.name}</div>
                        {isAbstract && <span className='abstract-badge'>abstract</span>}
                    </div>
                    <div className='DeclarationType'>
                        {getClassDescription(declaration)}
                    </div>
                    {/* Accent line */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0,
                        height: '2px', background: headerColor, opacity: 0.7
                    }} />
                </div>
                <div className='node-properties'>
                    {declaration.properties.slice(0, MAX_PROPERTIES).map(prop => {
                        const typeName = getNameOfType(prop);
                        const modifiers = getModifiers(prop);
                        const badgeColor = getTypeBadgeColor(typeName);
                        return (
                            <div className='property-row' key={prop.name}>
                                <span className='property-name'>{prop.name}</span>
                                <div className='property-meta'>
                                    {modifiers && modifiers.trim().length > 0 && (
                                        modifiers.trim().split(' ').map((mod, i) => (
                                            <span className='modifier-badge' key={i}>{mod}</span>
                                        ))
                                    )}
                                    <span className='type-badge' style={{ color: badgeColor, borderColor: `${badgeColor}55` }}>
                                        {typeName}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                    {declaration.properties.length > MAX_PROPERTIES && (
                        <div className='overflow-row'>···</div>
                    )}
                </div>
                <div className='footer' />
            </div>
        </>
    );
}