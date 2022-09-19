import path from 'path';

export default function principal(args) {
    const entrada = args[0];
    const saida = args[1];

    console.log(path.resolve('.'));

    console.log(`alou dentro do main ${args[0]} , ${args[1]}`);
}