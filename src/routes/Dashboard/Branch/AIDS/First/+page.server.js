import PocketBase from 'pocketbase';

// eslint-disable-next-line no-empty-pattern
export async function load({}){
    const pb = new PocketBase("https://dist.techwe.me/");

    const records = await pb.collection('Subjects').getList(1, 10,{
        filter: 'created >= "2022-01-01 00:00:00" && Branch="AIDS" && Sem="1"',
    });


    const results = records.items.map((record)=> {return {Subjects:record.Subjects,Branch:record.Branch,Sem:record.Sem}})
    return{
        records: results
    }
}