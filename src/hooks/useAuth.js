import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

const injected = new InjectedConnector();

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();

  const login = () => {
    activate(injected);
  };

  const logout = () => {
    deactivate();
  };

  return { login, logout };
};

export default useAuth;
