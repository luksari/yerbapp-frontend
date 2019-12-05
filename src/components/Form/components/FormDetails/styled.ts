import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    display: grid;
    flex-direction: column;
    align-items: flex-start;
`;

/** Component is used in order to style particular text in Form Details
 * @param bold : boolean applies bolder font-weight to text
 * @param isLabel: boolean specifies if text is label, it means that it will be darker than component without this property
 * @param withMargin: boolean specifies if there should be margin-left on the text
  */
export const AdditionalText = styled.p<{ bold?: boolean; isLabel?: boolean; withMargin?: boolean}>`
    font-size: 11px;
    font-weight: ${({ bold }) => bold ? '700' : '500'};
    color: ${({ theme, isLabel }) => isLabel ? theme.colors.alternativeText : theme.colors.primaryText};
    flex: ${({ isLabel }) => isLabel ? '1 1 100%' : '0 0 auto'};
    margin-left: ${({ withMargin }) => withMargin && '10px'}
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;
