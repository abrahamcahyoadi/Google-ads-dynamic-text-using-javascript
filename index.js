
var dynamic_id = new URL(document.location.href).searchParams.get('dynamic_id');

var h1 = false;

switch(dynamic_id) {
    case 'jual-pentol-goreng':
        h1 = "Jual Pentol goreng kwalitas No. 1";
    break;

    case 'jual-pentol-jakarta':
        h1 = 'Jual pentol jakarta enak dan higenies';
        break;
    
        case ''jual-pentol-bakar:
            h1 = 'Jual Pentol Bakar enak dan nikmat';
        break;

        case 'jual-pentol-pedas':
            h1 = 'Jual pentol pedas manis enak banget';
        break;

    default:
    break;
}

if(h1) {
    document.querySelector('h1').textContent = h1;
}
