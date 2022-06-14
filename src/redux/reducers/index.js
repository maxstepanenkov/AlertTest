const initial = {
  alerts: [],
  currentAlert: null,
  globalAlerts: []
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case 'SHOW_ALERT': {
      return {
        ...state,
        currentAlert: action.payload,
      }
    }
    case 'SHOW_GLOBAL_ALERT': {
      return {
        ...state,
        currentAlert: action.payload,
      }
    }
    case 'ADD_TO_SHOWN_ALERT': {
      return {
        ...state,
        alerts: [...state.alerts, { ...action.payload }]
      }
    }
    case 'ADD_TO_SHOWN_GLOBAL_ALERT': {
      return {
        ...state,
        globalAlerts: [...state.globalAlerts, { ...action.payload }]
      }
    }
    case 'REMOVE_FROM_SHOWN_ALERT': {
      const trimeredArray = state.alerts.filter(i => i.id !== action.payload.id);
      return {
        ...state,
        alerts: trimeredArray
      }
    }
    case 'REMOVE_FROM_SHOWN_GLOBAL_ALERT': {
      const trimeredArray = state.globalAlerts.filter(i => i.id !== action.payload.id);
      return {
        ...state,
        globalAlerts: trimeredArray
      }
    }
    default:
      return state;
  }
}