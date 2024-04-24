import {useState} from "react";
import "./App.css";
import {RegistrationForm} from "./components/Organismes/Forms/RegistrationForm/RegistrationForm";
import {ConsentModalBranding, FormType} from "../src/types";
import {ConsentProvider} from "./context/ConsentProvider";


interface AppProps {
    ConsentModalBranding?: ConsentModalBranding
}

function App({ConsentModalBranding}: AppProps) {
    const [visible, setVisible] = useState(false);
    const [userIdentifier, setUserIdentifier] = useState<string>(
        "65646d4320ec42ff2e719706"
    );
    const [participantId, setParticipantId] = useState<string>(
        "65e9efa7763a35583274dec5"
    );
    const [currentForm, setCurrentForm] = useState<FormType>("login");

    const handleFormChange = (type: FormType) => {
        setCurrentForm(type);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <div>
                <ConsentProvider
                    PDCAdminJWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXJ2aWNlS2V5IjoiQTVkdzY5OHNuWGlKUlZmYjZjTTR1RDd3M2JDTWdhbllKZ2VIWmZERGNIcE41QnlESmJOUE1XQm50TktCYVhqTlJ6dVd6NzRRUDlHVU5ZWEdxR2plVWJNMzY3YUhaTnNaRlNKNCIsImlhdCI6MTcxMzI1NTIwNzA0NSwiZXhwIjoxNzEzMjU1MjA3MzQ1fQ.ZhnBBzCQU9HF8dTY12eNp4AcYHFCpoK298oNJJqRVXo"
                    userIdentifier={userIdentifier}
                    sessionCheckEndpoint="https://provider-data-connector-253244a6c16c.herokuapp.com/private/consent?triggerDataExchange=true"
                    branding={ConsentModalBranding}
                    visible={visible}
                    demo={false}
                    onCancel={handleCancel}
                    enableToggle={true}
                    consentEndpoint="http://localhost:8887/v1"
                    participantId={participantId}
                >
                    <RegistrationForm
                        formType={currentForm}
                        onFormChange={handleFormChange}
                    />
                </ConsentProvider>
            </div>
        </>
    );
}

export default App;
