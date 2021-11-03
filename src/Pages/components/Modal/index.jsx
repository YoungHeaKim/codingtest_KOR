import React from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { Dialog } from '../../../styles/style';

const ModalContainer = ({ isModal, isCancel, select }) => {
  return (
    <Modal
      title="맥주 자세히 보기"
      visible={isModal}
      onOk={isCancel}
      onCancel={isCancel}
      width={800}
    >
      <Dialog.Table>
        <Dialog.Thead>
          <tr>
            <th colSpan="4">맥주</th>
          </tr>
        </Dialog.Thead>
        <tbody>
          <tr>
            <Dialog.Th>이름</Dialog.Th>
            <Dialog.Td>{select.name}</Dialog.Td>
            <Dialog.Th>도수</Dialog.Th>
            <Dialog.Td>{select.abv}</Dialog.Td>
          </tr>
          <tr>
            <Dialog.Th colSpan="2">태그 라인</Dialog.Th>
            <Dialog.Td colSpan="2">{select.tagline}</Dialog.Td>
          </tr>
          <tr>
            <Dialog.Th colSpan="2">설명</Dialog.Th>
            <Dialog.Th colSpan="2">사진</Dialog.Th>
          </tr>
          <tr>
            <Dialog.Td colSpan="2">{select.description}</Dialog.Td>
            <Dialog.Td colSpan="2">
              <Dialog.Img src={select.image_url} alt={`${select.name} 사진`} />
            </Dialog.Td>
          </tr>
        </tbody>
      </Dialog.Table>
    </Modal>
  );
};

export default ModalContainer;
