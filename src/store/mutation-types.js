/**
 * Defines all the possible mutations that can be carried out on the Vuex store.
 */

 export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

 // Error module mutations
 export const SET_AUTHENTICATION_ERROR_MESSAGE = 'SET_AUTHENTICATION_ERROR_MESSAGE';
 export const CLEAR_AUTHENTICATION_ERROR_MESSAGE = 'CLEAR_AUTHENTICATION_ERROR_MESSAGE';
 export const SET_MANDATE_PREVIEW_ERROR_MESSAGE = 'SET_MANDATE_PREVIEW_ERROR_MESSAGE';
 export const SET_RESET_PASSWORD_ERROR_MESSAGE = 'SET_RESET_PASSWORD_ERROR_MESSAGE';
 export const CLEAR_RESET_PASSWORD_ERROR_MESSAGE = 'CLEAR_RESET_PASSWORD_ERROR_MESSAGE';
 export const SET_CHANGE_PASSWORD_ERROR_MESSAGE = 'SET_CHANGE_PASSWORD_ERROR_MESSAGE';
 export const CLEAR_CHANGE_PASSWORD_ERROR_MESSAGE = 'CLEAR_CHANGE_PASSWORD_ERROR_MESSAGE';

 // Message Module mutauions
 export const SET_MANDATE_PLACEMENT_STATE = 'SET_MANDATE_PLACEMENT_STATE';
 export const CLEAR_MANDATE_PLACEMENT_STATE = 'CLEAR_MANDATE_PLACEMENT_STATE';

 // Dashboard mutations
 export const SAVE_DASHBOARD_DATA_TO_STORE = 'SAVE_DASHBOARD_DATA_TO_STORE';
 export const SAVE_NEWSFEED_TO_STORE = 'SAVE_NEWSFEED_TO_STORE';

 // User store module mutations
 export const SAVE_AUTHENTICATED_USER_TO_STORE = 'SAVE_AUTHENTICATED_USER_TO_STORE';
 export const SAVE_USER_STOCKBROKING_DATA_TO_STORE = 'SAVE_USER_STOCKBROKING_DATA_TO_STORE';
 export const SAVE_USER_FIXEDINCOME_DATA_TO_STORE = 'SAVE_USER_FIXEDINCOME_DATA_TO_STORE ';
 export const SAVE_USER_CASH_DATA_TO_STORE = 'SAVE_USER_CASH_DATA_TO_STORE';
 export const CLEAR_USER_STORE = 'CLEAR_USER_STORE';
 export const CLEAR_FI_STORE = 'CLEAR_FI_STORE';

 // Stockbroking module mutations
 export const SET_STOCKBROKING_TOTAL_VALUE = 'SET_STOCKBROKING_TOTAL_VALUE';
 export const SAVE_TRADE_ORDERS_TO_STORE = 'SAVE_TRADE_ORDERS_TO_STORE';
 export const SAVE_MARKET_DATA_TO_STORE = 'SAVE_MARKET_DATA_TO_STORE';
 export const CHANGE_CURRENT_PORTFOLIO = 'CHANGE_CURRENT_PORTFOLIO';
 export const SAVE_TRADE_ORDER_TERMS = 'SAVE_TRADE_ORDER_TERMS';
 export const SAVE_SECURITY_NAMES = 'SAVE_SECURITY_NAMES';
 export const SET_SECURITY_SELECTED_ON_TRADE_PAGE = 'SET_SECURITY_SELECTED_ON_TRADE_PAGE';
 export const CLEAR_SECURITY_SELECTED_ON_TRADE_PAGE = 'CLEAR_SECURITY_SELECTED_ON_TRADE_PAGE';
 export const SET_TRADE_ORDER_TO_CANCEL = 'SET_TRADE_ORDER_TO_CANCEL';
 export const SET_SHOW_TRADE_CANCELLED_SNACKBAR = 'SET_SHOW_TRADE_CANCELLED_SNACKBAR';
 export const SAVE_SELECTED_SECURITY_MARKET_SNAPSHOT = 'SAVE_SELECTED_SECURITY_MARKET_SNAPSHOT';
 export const SAVE_SELECTED_SECURITY_STATUS_INFO = 'SAVE_SELECTED_SECURITY_STATUS_INFO';
 export const RESET_MARKET_SNAPSHOT = 'RESET_MARKET_SNAPSHOT';
 export const UPDATE_USER_STOCKBROKING_DATA_IN_STORE = 'UPDATE_USER_STOCKBROKING_DATA_IN_STORE';
 export const CLEAR_STOCKBROKING_STORE = 'CLEAR_STOCKBROKING_STORE';

// Cash Account Mutations
 export const CHANGE_SELECTED_NAIRA_CASH_ACCOUNT = 'CHANGE_SELECTED_NAIRA_CASH_ACCOUNT';
 export const CHANGE_SELECTED_DOLLAR_CASH_ACCOUNT = 'CHANGE_SELECTED_DOLLAR_CASH_ACCOUNT';
 export const SET_NAIRA_CASH_STATEMENTS = 'SET_NAIRA_CASH_STATEMENTS';
 export const SET_NAIRA_SEARCH_START_DATE = 'SET_NAIRA_SEARCH_START_DATE';
 export const SET_NAIRA_SEARCH_END_DATE = 'SET_NAIRA_SEARCH_END_DATE';
 export const SET_DOLLAR_CASH_STATEMENTS = 'SET_DOLLAR_CASH_STATEMENTS';
 export const SET_DOLLAR_SEARCH_START_DATE = 'SET_DOLLAR_SEARCH_START_DATE';
 export const SET_DOLLAR_SEARCH_END_DATE = 'SET_DOLLAR_SEARCH_END_DATE';
 export const UPDATE_USER_CASH_DATA_IN_STORE = 'UPDATE_USER_CASH_DATA_IN_STORE';
 export const CLEAR_CASH_STORE = 'CLEAR_CASH_STORE';

 // SMA Mutations
 export const SAVE_USER_SMA_DATA_TO_STORE = 'SAVE_USER_SMA_DATA_TO_STORE';

 // WatchList Mutations
 export const SET_SECURITY_SELECTED_ON_WATCHLIST_PAGE = 'SET_SECURITY_SELECTED_ON_WATCHLIST_PAGE';
