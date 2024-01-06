import { useDispatch } from 'react-redux';
import {
  BodyModal,
  ButCancel,
  ButDelete,
  Titel,
  Text,
  Del,
  Can,
  Wrap,
  ButtonWrap,
} from './DeleteWater.styled';
import { deleteWater } from 'components/redux/water/operations';

export const DeleteWater = ({ deleteId, close }) => {
  const dispatch = useDispatch();
  const onDelete = async deleteId => {
    console.log(deleteId);
    await dispatch(deleteWater(deleteId));
    close();
  };

  return (
    <BodyModal>
      <Wrap>
        <Titel>Delete entry</Titel>
      </Wrap>

      <Text>Are you sure you want to delete the entry?</Text>
      <ButtonWrap>
        <ButDelete>
          <Del onClick={() => onDelete(deleteId)}>Delete</Del>
        </ButDelete>
        <ButCancel>
          <Can onClick={close}>Cancel</Can>
        </ButCancel>
      </ButtonWrap>
    </BodyModal>
  );
};
