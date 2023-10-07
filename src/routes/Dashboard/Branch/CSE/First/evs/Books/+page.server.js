import PocketBase from 'pocketbase';

// eslint-disable-next-line no-empty-pattern
export async function load({}){
    const pb = new PocketBase("https://dist.techwe.me/");

    const records = await pb.collection('Books').getList(1, 10,{
        filter: 'created >= "2022-01-01 00:00:00" && Subject="evs"',
    });


    const results = records.items.map((record)=> {return {Subjects:record.Subjects,Branch:record.Branch,Sem:record.Sem,Link:record.Link,Author:record.Author,Image_Link:record.Image_Link,Name:record.Name}})
    return{
        records: results
    }
}