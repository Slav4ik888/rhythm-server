

/** Label */
export enum DocumentItemLabelType {
  SECTION = 'section', // This is the highest element H1
  HEADING = 'heading', // then comes the heading      H2
  TOPIC   = 'topic',   // followed by topic           H3
  LABEL   = 'label',   // and these are the values for the above
  
  POINT_1 = 'point_1',
  POINT_2 = 'point_2',
  POINT_3 = 'point_3',

  DUTIES  = 'duties',  // Place for duties

  ADDI_1  = 'additional_1', // For customers settings
  ADDI_2  = 'additional_2',
  ADDI_3  = 'additional_3',
  ADDI_4  = 'additional_4',
  ADDI_5  = 'additional_5'
}


export interface DocumentItemLabel {
  type     : DocumentItemLabelType
  value    : string // Значение
  tooltip? : string // Всплывающая подсказка / пояснение
}
