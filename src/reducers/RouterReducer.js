import TabRouter from '../router/TabRouter';

const initialState = TabRouter.router.getStateForAction(TabRouter.router.getActionForPathAndParams('Catalog'));

export default (state = initialState, action) => {
  const nextState = TabRouter.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

