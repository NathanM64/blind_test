import { initFirebase, listenAuthChange } from "../pages/User/userEffects";
import { appActions } from "./appActions";
import { getPlayerData } from './playerEffects';

export const launchApp = () => (dispatch) => {
  dispatch({ type: appActions.APP_JUST_LAUNCHED });

  initFirebase();

  // Place authentication listener on Firebase auth SDK
  const handleUser = (user) => {
      dispatch({ type: appActions.USER_IS_AUTHENTICATED, user });

      dispatch(getPlayerData());
  };

  const handleAnonymous = () => {
      dispatch({ type: appActions.USER_IS_ANONYMOUS });
  };
  listenAuthChange(handleUser, handleAnonymous);
};
