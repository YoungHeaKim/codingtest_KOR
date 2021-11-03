/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { connect } from 'react-redux';
import { actions as columnActions } from '../../Modules/column';
import Axios from 'axios';
import { Header, Modal } from '../components';
import { List } from '../../styles/style';

const BearList = ({ location, columns, setColumnList }) => {
  const [bearList, setBears] = useState([]);
  const [filter, setFilter] = useState({ start: 0, end: 55 });
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState(null);

  useEffect(() => {
    const getBears = async () => {
      const res = await Axios.get('https://api.punkapi.com/v2/beers');
      setBears(res.data);
    };
    getBears();

    if (columns.length === 0) {
      setColumnList([
        {
          title: 'ID',
          field: 'id',
        },
        {
          title: '대표 이미지',
          field: 'image_url',
          render: data => (
            <img src={data.image_url} alt="대표 이미지" height="100px" />
          ),
        },
        {
          title: '맥주 이름',
          field: 'name',
        },
        {
          title: '도수',
          field: 'abv',
        },
        {
          title: '설명',
          field: 'description',
          render: data => (
            <List.Description>{data.description}</List.Description>
          ),
        },
      ]);
    }
  }, []);

  const columnChange = (prev, now) => {
    const select = columns.splice(prev, 1)[0];
    columns.splice(now, 0, select);
    setColumnList(columns);
  };

  const filterFunc = () => {
    const filtering = bearList.filter(bear => {
      if (bear.abv >= filter.start && bear.abv <= filter.end) return bear;
      else return;
    });
    setBears(filtering);
  };

  return (
    <List.Wrapper>
      <Header pathname={location.pathname} />
      <List.Inner>
        <List.Title>도수로 필터링: </List.Title>
        <List.Input
          type="number"
          min="0"
          max="55"
          value={filter.start}
          onChange={e => setFilter({ ...filter, start: e.target.value })}
        />
        ~
        <List.Input
          type="number"
          min="0"
          max="55"
          value={filter.end}
          onChange={e => setFilter({ ...filter, end: e.target.value })}
        />
        <List.Button onClick={filterFunc}>적용</List.Button>
      </List.Inner>
      <MaterialTable
        title="맥주 리스트"
        columns={columns}
        data={bearList}
        onColumnDragged={columnChange} // column drag시 변경
        options={{
          search: false,
          draggable: true,
          sorting: false,
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF',
          },
        }}
        onRowClick={(e, data) => {
          setToggle(true);
          setSelect(data);
        }}
      />
      {toggle && (
        <Modal
          isModal={toggle}
          isCancel={() => {
            setToggle(false);
            setSelect(null);
          }}
          select={select}
        />
      )}
    </List.Wrapper>
  );
};

const mapStateToProps = state => ({ columns: state.columns.columnList });

export default connect(mapStateToProps, columnActions)(BearList);
