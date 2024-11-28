export default async function decorate(block) {

    [...block.children].forEach((row) => {
        
        const label = row.children[0];
        console.log(label.firstChild);

    });

}