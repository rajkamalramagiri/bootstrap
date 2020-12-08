let link='<https://sunnyuat.myshopify.com/admin/api/2020-10/orders.json?page_info=eyJkaXJlY3Rpb24iOiJwcmV2IiwibGFzdF9pZCI6MjgzNjc5ODUzNzg1NywibGFzdF92YWx1ZSI6IjIwMjAtMTEtMzAgMDc6MDQ6MjAuMDQzMzI0In0>; rel="previous", <https://sunnyuat.myshopify.com/admin/api/2020-10/orders.json?page_info=eyJkaXJlY3Rpb24iOiJuZXh0IiwibGFzdF9pZCI6MjgzMjMyODc1MzI4MSwibGFzdF92YWx1ZSI6IjIwMjAtMTEtMjYgMDg6MDU6MjAuNzU4ODE2In0>; rel="next"'
let link1='<https://sunnyuat.myshopify.com/admin/api/2020-10/orders.json?page_info=eyJsYXN0X2lkIjoyODM2ODM4MDIzMjk3LCJsYXN0X3ZhbHVlIjoiMjAyMC0xMS0zMCAxMDowMDo1OC4zMjg3MDQiLCJkaXJlY3Rpb24iOiJuZXh0In0>; rel="next"'

async function CreateTableFromJSON() {
    let url = 'http://localhost:8081/dashboard'
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    orders = await response.json();
    console.log(orders)
}
CreateTableFromJSON();
function nextlink(link)
{
let resultantarray = link.split(" ");
let arraylength=resultantarray.length;
if(resultantarray.includes('rel="next"'))
{

    if(arraylength===4){
        resultantarray.splice(0,2)
    }
    let relativelink=resultantarray[0]
    let newlink=relativelink.slice(1,relativelink.length-2)
    return newlink;
}
return null;

}


// let x=nextlink(link1)
// console.log(x)
