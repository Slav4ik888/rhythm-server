import { getValidResult, SCHEMA_NAME, validate } from '../../../../../../libs/validators';
import { cloneObj } from '../../../../../../shared/utils/objects';
import { getMockStrLength } from '../../../../../../shared/utils/strings';
import { MOCK_FOLDER_EMPTY_WITH_PARENT } from '../../../../mocks';
import { Folder } from '../../../../types';
// import { SCHEMA_NAME } from '../../../../../libs/validators/ajv/schemas';


describe('Validator folder', () => {
  it('All data in folder right', () => {
    const folder = cloneObj(MOCK_FOLDER_EMPTY_WITH_PARENT);
    folder.parentId = '';

    expect(validate(SCHEMA_NAME.FOLDER, folder)).toEqual(getValidResult())
  });


  it('All data in folder is empty & label is long', () => {
    expect(validate(SCHEMA_NAME.FOLDER, { label: getMockStrLength(51) })).toEqual({
      errors: {
        id        : "Отсутствует обязательное поле \"id\".",
        label     : "Поле \"Заголовок\" не должно быть больше 50 символов."
      }, valid: false
    });
  });

  it('Label is no string & parentId is long', () => {
    const folder: Folder = cloneObj(MOCK_FOLDER_EMPTY_WITH_PARENT);
    folder.label = 123 as unknown as string;
    folder.parentId = getMockStrLength(31);
    
    expect(validate(SCHEMA_NAME.FOLDER, folder)).toEqual({
      errors: {
        parentId : "Не соответствует допустимым значениям, для поля \"parentId\".",
        label    : "Не верный формат данных, для поля \"Заголовок\"."
      }, valid: false
    });
  });

  it('Label is empty', () => {
    const folder: Folder = cloneObj(MOCK_FOLDER_EMPTY_WITH_PARENT);
    folder.label = '';

    expect(validate(SCHEMA_NAME.FOLDER, folder)).toEqual(getValidResult());
  });
});

// npm run test:unit validate-folder-schema.test.ts
