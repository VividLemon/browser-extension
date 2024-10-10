import SLStorage from './SLStorage'
import EventManager from './EventManager'

export const SETTINGS = {
  apiKey: '',
  apiUrl: ''
}

export const reloadSettings = async () => {
  ;[SETTINGS.apiKey, SETTINGS.apiUrl] = await Promise.all([
    SLStorage.getItem(SLStorage.SETTINGS.API_KEY),
    SLStorage.getItem(SLStorage.SETTINGS.API_URL)
  ])
}

export const initService = async () => {
  await reloadSettings()

  EventManager.addListener(EventManager.EVENT.SETTINGS_CHANGED, reloadSettings)
}

export const apiKeyRoute = '/api/api_key'
export const newRandomAliasRoute = (hostname: string) =>
  `/api/alias/random/new?hostname=${hostname}`