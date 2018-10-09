import { ping } from './services'
import { show } from './views/message'

const supportedAPI = ['init'];

/**
    The main entry of the application
    */
function app(window) {
    // set default configurations
    // let configurations = {
    //     someDefaultConfiguration: false
    // };

    // all methods that were called till now and stored in queue
    // needs to be called now 
    let globalObject = window[window['JS-Widget']];
    let queue = globalObject.q;
    if (queue) {
        for (var i = 0; i < queue.length; i++) {
                apiHandler(queue[i][0], queue[i][0]);
        }
    }
    globalObject = apiHandler;
    //globalObject.configurations = configurations;
}

/**
    Method that handles all API calls
    */
function apiHandler(params , api) {
    if (!api) throw Error('API method required');
    api = api.toLowerCase();
    if (supportedAPI.indexOf(api) === -1) throw Error(`Method ${api} is not supported`);
    switch (api) {
        case 'init':
            show(params);
            break;
        default:
            console.warn(`No handler defined for ${api}`);
    }
}



app(window);