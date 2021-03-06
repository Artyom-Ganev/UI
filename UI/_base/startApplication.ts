/// <amd-module name="UI/_base/startApplication" />
import { default as AppInit, isInit } from 'Application/Initializer';
import PresentationService from 'SbisEnv/PresentationService';
import StateReceiver from 'UI/_base/StateReceiver';

/**
 * Инициализация Application/Env для Sbis приложения
 * @param {Record<string, any>} Настройки приложения
 */
export default function startApplication(cfg?: Record<string, any>) {
    if (isInit()) {
        return;
    }

    let config = cfg || window && window['wsConfig'];

    let environmentFactory;
    if (typeof window === 'undefined') {
        environmentFactory = PresentationService;
    }

    const stateReceiverInst = new StateReceiver();
    AppInit(config, environmentFactory, stateReceiverInst);

    if (typeof window !== 'undefined' && window['receivedStates']) {
        stateReceiverInst.deserialize(window['receivedStates']);
    }
}