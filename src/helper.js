import { useLocation } from 'react-router-dom';

const getQueryParam = param => {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == param) {
            return decodeURIComponent(pair[1]);
        }
    }
}

export function getQueryVariable(variable) {
    if (variable === 'imageOnly'){
        return getQueryParam(variable);
    }

    const result = window.location.pathname.split('/').filter(value => !!value);
    if (result.length > 0 && variable === 'project'){
        return result[0];
    }

    if (result.length > 1 && variable === 'index'){
        return result[1];
    }
}

export function buildQueryParamOfProject(type, index){
    return `/${type}/${index}${window.location.search}`
}

export function addMetaTag(type, typeValue, content){
    const meta = document.createElement('meta');
    meta[type] = typeValue;
    meta.content = content;
    document.getElementsByTagName('head')[0].appendChild(meta);
}
