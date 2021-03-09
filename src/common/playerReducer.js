import { appActions } from './appEffects';
import { playerActions } from './playerActions';

export const playerReducer = (state = {}, action) => {
    switch (action.type) {
        case playerActions.SET_PLAYER:
            return action.player;
        case playerActions.UPDATE_PLAYER_AVATAR:
            return { ...state, nb_played_games: state.nb_played_games + 1};
        case appActions.USER_IS_ANONYMOUS:
            return {};
        default:
            break;
    }
}