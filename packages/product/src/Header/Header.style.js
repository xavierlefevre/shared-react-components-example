// @flow
import {
  SharedComponentsColors,
  Grid,
  typography,
} from '@shared-components/atoms';
import styled from 'styled-components';

export default {
  Header: styled.section`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    min-height: ${Grid(26)};
    padding: ${Grid(3)} ${Grid(10)} ${Grid(2)} ${Grid(7)};
    color: #fff;
    border-left: 15px solid ${SharedComponentsColors.brandGreen};
  `,
  HeaderContent: styled.div`
    width: 100%;
    margin: 0 auto;
  `,
  HeaderTopSection: styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
  `,
  HeaderFundDescription: styled.div`
    display: flex;
    align-items: flex-start;
  `,
  HeaderTitle: styled.span`
    display: inline-block;
    font-size: 31px;
    line-height: 37px;
    -webkit-font-smoothing: antialiased;
  `,
  HeaderIcon: styled.span`
    display: inline-block;
    font-size: 31px;
    line-height: 37px;
    -webkit-font-smoothing: antialiased;
  `,
  BookmarkIcon: styled.span`
    margin-left: 10px;
  `,
  FavoriteButton: styled.button`
    height: 40px;
    margin: 5px;
    ${typography.links('white')}
    text-decoration: none;
    background: ${props =>
      props.isFavorite ? SharedComponentsColors.brandGreen : 'transparent'};
    border: 1px solid
      ${props =>
        props.isFavorite
          ? SharedComponentsColors.brandGreen
          : SharedComponentsColors.white};
  `,
  BackButton: styled.button`
    padding: 0 5px;
    color: ${SharedComponentsColors.white};
    background: transparent;
    border: none;
    cursor: pointer;
  `,
};
