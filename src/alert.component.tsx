import React from "react";
import Modal from "react-modal";

type AlertData = {
  msg?: string;
  onSuccess?: Function;
};

export type AlertInstance = {
  open: (alertData: AlertData) => void;
  close: () => void;
};

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

const AlertComponent = React.forwardRef<{}, {}>((props, ref) => {
  const [data, setData] = React.useState<AlertData>();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const closeAlert = React.useCallback(() => setIsOpen(false), []);
  React.useImperativeHandle(
    ref,
    (): AlertInstance => ({
      open: (data) => {
        setData(data);
        setIsOpen(true);
      },
      close: closeAlert,
    }),
    [closeAlert]
  );
  return (
    <Modal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <b>{data?.msg ?? "Are you sure you want to continue?"}</b>
      <div className="btn-row default-margin">
        <button
          onClick={() => {
            closeAlert();
            data?.onSuccess?.();
          }}
        >
          OK
        </button>
        <button onClick={closeAlert}>Cancel</button>
      </div>
    </Modal>
  );
});

export const Alert = React.memo(AlertComponent);
