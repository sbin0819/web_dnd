import { useState, useEffect } from 'react';
import produce from 'immer';
import styled from 'styled-components';
import { defaultCategory } from '@lib/CONST/datas';
import {
  CategoryObjType,
  CategoryType,
  CategoryItemsType,
} from '@lib/CONST/types';

const favCate = {
  title: '관심 카테고리',
  items: [
    { title: '일반 개발', loc: 'dev-0' },
    { title: '웹 개발', loc: 'dev-1' },
    { title: '일반 기획', loc: 'plan-0' },
    { title: '웹 기획', loc: 'plan-1' },
  ],
  type: 'main',
};

function createInitCateObject(
  target: CategoryType[],
  personalCate: CategoryType,
) {
  const validateArr = personalCate.items.map((i) => i.loc);
  const obj = target.reduce((acc: any, curr: CategoryType) => {
    acc[curr.type] = {
      ...curr,
      items: curr.items.map((item) => {
        let selected = false;
        if (validateArr.includes(item.loc)) {
          selected = true;
        }
        return { ...item, selected };
      }),
    };
    return acc;
  }, {});
  return obj;
}

function CategoryModal() {
  const [personalCategory, setPersonalCategory] = useState(favCate);
  const [activeCategoryType, setActiveCategoryType] = useState<string>('dev');
  const [cateObj, setCateObj] = useState<CategoryObjType>({});

  useEffect(() => {
    const result = createInitCateObject(defaultCategory, personalCategory);
    setCateObj(result);
  }, [personalCategory]);

  const handleActiveCategoryType = (e: any) => {
    const { textContent } = e.target;
    setActiveCategoryType(textContent);
  };

  const handleSelectItem = (e: any) => {
    const { textContent } = e.target;
    const nextState = produce(cateObj, (draft: CategoryObjType) => {
      draft[activeCategoryType].items = draft[activeCategoryType].items.map(
        (item: any) => {
          if (item.loc === textContent) {
            return { ...item, selected: true };
          }
          return item;
        },
      );
    });
    setCateObj(nextState);
  };

  const handlePersonalCategory = () => {
    const seltedTruthyItems = Object.values(cateObj)
      .map((el: CategoryType) =>
        el.items.filter((i: CategoryItemsType) => i.selected),
      )
      .flat();
    const nextState = produce(personalCategory, (draft: CategoryType) => {
      draft.items = seltedTruthyItems;
    });
    setPersonalCategory(nextState);
    // api 요청
  };
  return (
    <Container>
      <HeaderContainer></HeaderContainer>
      <NavContainer>
        {cateObj &&
          Object.values(cateObj).map((val: CategoryType, i) => (
            <div key={i} onClick={handleActiveCategoryType}>
              {val.type}
            </div>
          ))}
      </NavContainer>
      <BodyContainer>
        {cateObj[activeCategoryType]?.items?.map((el: CategoryItemsType, i) => (
          <div
            key={i}
            style={{
              color: el.selected ? 'red' : 'white',
            }}
            onClick={handleSelectItem}
          >
            {el.loc}
          </div>
        ))}
      </BodyContainer>
      <FootContainer>
        <button onClick={handlePersonalCategory}>button</button>
      </FootContainer>
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

const FootContainer = styled.div`
  display: flex;
  gap: 20px;
`;
