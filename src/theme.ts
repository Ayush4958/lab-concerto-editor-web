export const colors: Record<string, string> = {
  'concerto.metamodel@1.0.0.EnumDeclaration': '#9D00FF',
  'concerto.metamodel@1.0.0.ConceptDeclaration': '#00F0FF',
  'concerto.metamodel@1.0.0.ParticipantDeclaration': '#39FF14',
  'concerto.metamodel@1.0.0.TransactionDeclaration': '#888888',
  'concerto.metamodel@1.0.0.EventDeclaration': '#FF0055',
  'concerto.metamodel@1.0.0.AssetDeclaration': '#FFAA00',
};

// Maps property type short names to neon badge colors
export const typeBadgeColors: Record<string, string> = {
  'String': '#00F0FF',
  'Integer': '#39FF14',
  'Long': '#39FF14',
  'Double': '#FFAA00',
  'Boolean': '#FF0055',
  'DateTime': '#9D00FF',
};

export function getTypeBadgeColor(typeName: string): string {
  return typeBadgeColors[typeName] || '#888888';
}
