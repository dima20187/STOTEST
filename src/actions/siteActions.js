import { createActions } from './actionsCreator';

export const LOAD_SITE = 'LOAD_SITE';
export const {
  LOAD_SITE_SUCCESS,
  LOAD_SITE_FAILED,
  loadSite,
  loadSiteFailed,
  loadSiteSuccess,
} = createActions(LOAD_SITE);
