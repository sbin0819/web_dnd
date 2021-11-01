import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultCategory, defaultCategory2 } from '@lib/CONST/datas';
import { CategoryType, CategoryItemsType } from '@lib/CONST/types';

const favCate = {
  title: '관심 카테고리',
  items: [
    { title: '일반 개발', loc: 'dev-0' },
    { title: '웹 개발', loc: 'dev-1' },
    { title: '일반 기획', loc: 'plan-0' },
    { title: '웹 기획', loc: 'plan-1' },
  ],
  type: 'main',
  include: ['dev', 'plan'],
};

function arrToObj(target: CategoryType[]) {
  const obj = target.reduce((acc: any, curr: CategoryType) => {
    acc[curr.type] = curr;
    return acc;
  }, {});
  return obj;
}

function CategoryModal() {
  const [activeCategoryType, setActiveCategoryType] = useState('dev');
  const [objCate, setValue] = useState<any>({});
  useEffect(() => {
    const result = arrToObj(defaultCategory);
    setValue(result);
  }, []);
  const handleActiveCategoryType = (e: any) => {
    const { textContent } = e.target;
    setActiveCategoryType(textContent);
  };
  const handleSelectItem = (e: any) => {
    const { textContent } = e.target;
    setValue((prev: any) => ({
      ...prev,
    }));
  };
  return (
    <Container>
      <HeaderContainer></HeaderContainer>
      <NavContainer>
        {objCate &&
          Object.values(objCate).map((val: CategoryType | any, i) => (
            <div key={i} onClick={handleActiveCategoryType}>
              {val.type}
            </div>
          ))}
      </NavContainer>
      <BodyContainer>
        {objCate[activeCategoryType].items.map(
          (el: CategoryType | any, i: number) => (
            <div key={i}>{el.title}</div>
          ),
        )}
      </BodyContainer>
    </Container>
  );
}

export default CategoryModal;

const Container = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 30;
  padding: 40px 50px 120px;
  width: 100%;
  max-width: 800px;
  height: 660px;
  background: #2b2d31;
  border-radius: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BodyContainer = styled.div`
  display: flex;
  gap: 20px;
`;
