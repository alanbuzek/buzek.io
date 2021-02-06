export function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

export function buildQueryParamOfProject(type, index, imageOnly){
    return `?project=${type}&index=${index}${imageOnly ? '&imageOnly=true': ''}`
}

export function addMetaTag(type, typeValue, content){
    const meta = document.createElement('meta');
    meta[type] = typeValue;
    meta.content = content;
    document.getElementsByTagName('head')[0].appendChild(meta);
}
