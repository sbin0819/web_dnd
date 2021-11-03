import { useState, useEffect } from 'react';
import produce from 'immer';
import styled from 'styled-components';
import { defaultCategory } from '@lib/CONST/datas';
import {
  CategoryObjType,
  CategoryType,
  CategoryItemsType,
} from '@lib/CONST/types';

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

const defaultCate = {
  title: '관심 카테고리',
  items: [],
  type: 'main',
};

interface IProps {
  initialData: CategoryType;
}
function CategoryModal({ initialData = defaultCate }: IProps) {
  const [personalCategory, setPersonalCategory] = useState(initialData);
  const [activeCategoryType, setActiveCategoryType] = useState<string>('dev');
  const [cateObj, setCateObj] = useState<CategoryObjType>({});

  useEffect(() => {
    const result = createInitCateObject(defaultCategory, personalCategory);
    setCateObj(result);
  }, [personalCategory]);

  const handleActiveCategoryType = (e: any) => {
    const { id } = e.currentTarget;
    if (!id) return;
    setActiveCategoryType(id);
  };

  const handleSelectItem = (e: any) => {
    const { className } = e.target;
    if (!className) return;
    const nextState = produce(cateObj, (draft: CategoryObjType) => {
      draft[activeCategoryType].items = draft[activeCategoryType].items.map(
        (item: any) => {
          if (item.loc === className) {
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
          Object.values(cateObj).map((el: CategoryType, i) => (
            <div
              className={
                el.type === activeCategoryType ? 'nav-item on' : 'nav-item'
              }
              key={i}
              onClick={handleActiveCategoryType}
              id={el.type}
            >
              <a className={el.type}>{el.title}</a>
            </div>
          ))}
      </NavContainer>
      <BodyContainer>
        {cateObj[activeCategoryType]?.items?.map((el: CategoryItemsType, i) => (
          <div
            className={el.selected ? 'item on' : 'item'}
            key={i}
            onClick={handleSelectItem}
          >
            <a className={el.loc}>{el.title}</a>
          </div>
        ))}
      </BodyContainer>
      <FootContainer>
        <a className="btn" onClick={handlePersonalCategory}>
          다 했어요!
        </a>
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
  padding: 40px 0 120px;
  width: 100%;
  max-width: 800px;
  height: 630px;
  background: #2b2d31;
  border-radius: 25px;
`;

const HeaderContainer = styled.div`
  display: flex;
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .nav-item {
    display: flex;
    width: 120px;
    height: 60px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 15px 0 5px;
    border-bottom: 3px solid transparent;
  }
  & > .on {
    border-bottom: 3px solid #3562ff;
  }
`;
const BodyContainer = styled.div`
  border-top: 1px solid #43454a;
  padding: 45px 50px;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .item {
    border-radius: 16px;
    font-size: 14px;
    font-weight: 700;
    width: 160px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a0a1a7;
    background: #393a40;
    cursor: pointer;
    position: relative;
    word-break: keep-all;
    user-select: none;
    line-height: 1.2;
  }
  .on {
    color: #fff;
    background: #3562ff;
  }
`;

const FootContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 25px;
  padding: 45px 50px;
  justify-content: center;
  align-items: center;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 246px;
    height: 56px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 100px;
    color: #fff;
    background: #3562ff;
  }
`;
