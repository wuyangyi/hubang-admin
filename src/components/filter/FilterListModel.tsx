import React, { useState } from 'react';
import styles from './FilterListModel.less';

const FilterListModel: React.FC<{
  list: BASEAPI.FilterBean[];
  type: string;
  onClick: (type: string, item: BASEAPI.FilterBean) => void;
}> = (props) => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <div>
      {props.list.map((item: BASEAPI.FilterBean, index) => {
        return (
          <div
            key={item.value}
            onClick={() => {
              setSelectIndex(index);
              props.onClick(props.type, item);
            }}
            className={styles.item}
            style={{
              backgroundColor: selectIndex === index ? '#1890ff' : undefined,
              color: selectIndex === index ? '#fff' : undefined,
            }}
          >
            {item.lable}
          </div>
        );
      })}
    </div>
  );
};

export default FilterListModel;
