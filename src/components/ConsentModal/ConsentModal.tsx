import Styles from "./ConsentModal.module.scss";
import { ConsentModalBody } from "../Moleculs/Modal/ConsentModalBody/ConsentModalBody";
import { ConsentModalHeader } from "../Moleculs/Modal/ConsentModalHeader/ConsentModalHeader";
import { ConsentModalTop } from "../Moleculs/Modal/ConsentModalTop/ConsentModalTop";
import { ConsentModalExtra } from "../Moleculs/Modal/ConsentModalExtra/ConsentModalExtra";
import { ConsentModalFooter } from "../Moleculs/Modal/ConsentModalFooter/ConsentModalFooter";
import { useConsentContext } from "../../hooks/useConsentContext";

export const Modal = () => {
    const { modalContent } = useConsentContext();

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
