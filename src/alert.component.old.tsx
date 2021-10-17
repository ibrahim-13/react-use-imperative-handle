import Modal from "react-modal";

export type AlertProps = {
  message: string;
  onSuccess: () => void;
  onClose: () => void;
}

const customStyles = {
  content: {
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function Alert(props: AlertProps): JSX.Element {
  return (
    <Modal
      isOpen={true}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <b>{props.message ?? "Are you sure you want to continue?"}</b>
      <div className="btn-row default-margin">
        <button
          onClick={() => {
            props.onClose?.();
            props.onSuccess?.();
          }}
        >
          OK
        </button>
        <button onClick={props.onClose}>Cancel</button>
      </div>
    </Modal>
  );
}
