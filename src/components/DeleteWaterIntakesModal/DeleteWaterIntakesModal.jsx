import { ButtonContainer, ModalBox } from './DeleteWaterIntakesModal.styled';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useDispatch } from 'react-redux';
import { deleteDrinkThunk } from '../../store/water/waterOperations';

const DeleteWaterIntakesModal = ({
  onModalClose,
  isModalOpen,
  currentIntakes,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const data = currentIntakes.id;

    dispatch(deleteDrinkThunk(data));
    onModalClose();
  };

  return (
    <>
      {isModalOpen && (
        <ModalContainer onClose={onModalClose}>
          <ModalBox>
            <div>
              <div className="topline">
                <h2>Delete water intakes</h2>
                <CloseOutlinedIcon className="close" onClick={onModalClose} />
              </div>
              <p>Do you really want delete that water intakes?</p>
            </div>
            <ButtonContainer>
              <button className="confirm" onClick={handleDelete}>
                Delete
              </button>
              <button className="cancel" onClick={onModalClose}>
                Cancel
              </button>
            </ButtonContainer>
          </ModalBox>
        </ModalContainer>
      )}
    </>
  );
};

export default DeleteWaterIntakesModal;
