import Styles from "./ConsentModalTop.module.scss";
import { useConsentContext } from "../../../../hooks/useConsentContext";
import logoVT from "../../../../assets/logoVT.png";
import { CloseSVG } from "../../../Atoms/SVGs/CloseSVG/CloseSVG";

export const ConsentModalTop = () => {
    const { branding, onCancel, consentLogout } = useConsentContext();

    const renderCurrentLogo = () => {
        if (branding?.img) {
            return (
                <img
                    className={Styles.mainLogo}
                    src={branding.img.src}
                    alt={branding.img.alt}
                    style={
                        branding.img.size
                            ? {
                                  width: branding.img.size?.width,
                                  height: branding.img.size?.height,
                                  transform:
                                      branding?.img?.size?.translateY &&
                                      `translateY(${branding?.img?.size?.translateY})`,
                              }
                            : {}
                    }
                />
            );
        }

        return (
            <img
                className={Styles.mainLogo}
                src={logoVT}
                alt="Logo VisionsTrust"
            />
        );
    };

    return (
        <div className={Styles.ConsentModalTop}>
            <div className={Styles.logout} onClick={consentLogout}>Logout</div>
            <CloseSVG className={Styles.close} onClick={onCancel} />{" "}
            {renderCurrentLogo()}
        </div>
    );
};
