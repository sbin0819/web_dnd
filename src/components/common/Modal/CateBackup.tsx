import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultCategory } from '@lib/CONST/datas';
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

function handleallCategoryCate(
  target: CategoryType[],
  validate: { items: CategoryItemsType[] },
) {
  const validateArr = validate.items.map((i) => i.loc);
  return target.map((obj) => {
    return {
      ...obj,
      items: obj.items.map((item) => {
        let selected = false;
        if (validateArr.includes(item.loc)) {
          selected = true;
        }
        return { ...item, selected };
      }),
      selected: obj.items.filter((item) => {
        return validateArr.includes(item.loc);
      }),
    };
  });
}

function CategoryModal() {
  const [currentCateType, setCurrentCateType] = useState('dev');
  const [currentCateItems, setCurrentCateItems] = useState<CategoryType | null>(
    null,
  );
  const [allCategory, setAllCategory] = useState<CategoryType[]>([]);

  const handleCateTypeById = (e: any) => {
    const { id } = e.target;
    setCurrentCateType(id);
  };

  const handleallCategory = (e: any) => {
    const loc = e.target?.value;
    const result =
      currentCateItems &&
      currentCateItems?.items?.map((item) => ({
        ...item,
        selected: item.loc === loc ? !item.selected : item.selected,
      }));
    console.log(result);
    // my 컨트롤
  };

  useEffect(() => {
    const result = handleallCategoryCate(defaultCategory, favCate);
    setAllCategory(result);
  }, []);
  useEffect(() => {
    const result = allCategory.filter((i) => i.type === currentCateType)[0];
    setCurrentCateItems(result);
  }, [allCategory, currentCateType]);

  return (
    <Container>
      <HeaderContainer></HeaderContainer>
      <NavContainer>
        {allCategory.map((item, i) => (
          <div key={i} onClick={handleCateTypeById}>
            <a id={item.type}>
              {item.title} <span>{item?.selected?.length}</span>
            </a>
          </div>
        ))}
      </NavContainer>
      <BodyContainer>
        {currentCateItems?.items?.map((item, i) => (
          <div
            key={i}
            style={{
              width: 100,
              height: 50,
              background: item.selected ? 'black' : 'grey',
            }}
            onClick={handleallCategory}
          >
            <input id={item.loc} type="checkbox" value={item.loc} />
            <label htmlFor={item.loc}>{item.title}</label>
          </div>
        ))}
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
