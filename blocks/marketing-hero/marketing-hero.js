export default async function decorate(block) {

    [...block.children].forEach((row) => {
        console.log(row);
        const label = row.children[0];
        console.log(label);
    });

}