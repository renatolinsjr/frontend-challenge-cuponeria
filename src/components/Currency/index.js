export default function Currency(props) {
    let f = props.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return f;
}
