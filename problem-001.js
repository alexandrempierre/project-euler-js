function generate_multiples(m, ceiling) {
    let s = 0;

    for (let i = 0; i < ceiling; i+=m) {
        s += i;
    }

    return s;
}

function main() {
    let s;
    let ceiling = 1000;
    s = generate_multiples(3, ceiling);
    s += generate_multiples(5, ceiling);
    s -= generate_multiples(15, ceiling);

    console.log(s);
}

main();