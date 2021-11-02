import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { connect } from 'react-redux';
import { actions as bearActions } from '../../Modules/bear';
import Axios from 'axios';
import { Header } from '../components';

const BearList = ({ location }) => {
  const [bearList, setBears] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const getBears = async () => {
      const res = await Axios.get('https://api.punkapi.com/v2/beers');
      setBears(res.data);
    };
    getBears();
    setColumns([
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
    ]);
  }, []);

  return (
    <div>
      <Header pathname={location.pathname} />
      <MaterialTable
        columns={columns}
        data={bearList}
        options={{ search: false, draggable: true, sorting: false }}
      />
    </div>
  );
};
const mapStateToProps = state => ({ bears: state });

export default connect(mapStateToProps, bearActions)(BearList);
