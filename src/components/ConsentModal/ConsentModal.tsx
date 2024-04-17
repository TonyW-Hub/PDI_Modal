import Styles from "./ConsentModal.module.scss";
import { ConsentModalBody } from "../Moleculs/Modal/ConsentModalBody/ConsentModalBody";
import { ConsentModalHeader } from "../Moleculs/Modal/ConsentModalHeader/ConsentModalHeader";
import { ConsentProvider } from "../../context/ConsentProvider";
import { ConsentModalBranding } from "../../types";
import { ConsentModalTop } from "../Moleculs/Modal/ConsentModalTop/ConsentModalTop";
import { ConsentModalExtra } from "../Moleculs/Modal/ConsentModalExtra/ConsentModalExtra";
import { ConsentModalFooter } from "../Moleculs/Modal/ConsentModalFooter/ConsentModalFooter";
import { useConsentContext } from "../../hooks/useConsentContext";

type ConsentModalProps = {
  visible: boolean;
  privacyNoticeEndpoint?: string;
  sessionCheckEndpoint: string;
  PDCAdminJWT: string;
  userIdentifier: string;
  branding?: ConsentModalBranding;
  demo?: boolean;
  onCancel: () => void;
};

export const ConsentModal = ({
  visible,
  privacyNoticeEndpoint,
  sessionCheckEndpoint,
  PDCAdminJWT,
  userIdentifier,
  branding,
  demo = false,
  onCancel,
}: ConsentModalProps) => {
  return (
    <ConsentProvider
      privacyNoticeEndpoint={privacyNoticeEndpoint}
      PDCAdminJWT={PDCAdminJWT}
      userIdentifier={userIdentifier}
      sessionCheckEndpoint={sessionCheckEndpoint}
      branding={branding}
      visible={visible}
      demo={demo}
      onCancel={onCancel}
    >
      <Modal />
    </ConsentProvider>
  );
};

const Modal = () => {
  const { modalContent, modalVisible } = useConsentContext();

  if (!modalVisible) return null;

  return (
    <div className={Styles.modalBackdrop}>
      <article className={Styles.ConsentModal}>
        <ConsentModalTop />
        <ConsentModalHeader />
        <ConsentModalBody />
        <ConsentModalFooter
          hide={
            modalContent === "chooseExchange" ||
            modalContent === "choosePrivacyNotice"
          }
        />
        <ConsentModalExtra />
      </article>
    </div>
  );
};
