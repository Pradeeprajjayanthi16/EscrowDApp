import { ConnectButton } from "@web3uikit/web3";

export default function Header({ setChoice }) {
  function handleClick(choice) {
    setChoice(choice);
  }
  return (
    <div className="header">
      <div className="heading" onClick={() => handleClick(0)}>
        Escrow App
      </div>
      <div className="rightS">
        <div className="cCon" onClick={() => handleClick(1)}>
          Create_Contract
        </div>
        <div className="eCon" onClick={() => handleClick(2)}>
          Existing_Contracts
        </div>
        <ConnectButton />
      </div>
    </div>
  );
}
