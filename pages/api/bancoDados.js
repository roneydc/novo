
export default function handler(req, res) {
    res.status(200).json({
        list:[
        {id:'0',name:'João Henrique',tel:'(66) 9 9230-5135',altura:'1,80',idade:'26 anos'},
        {id:'1',name:'Pedro Afonço ',tel:'(66) 9 9658-9758',altura:'1,80',idade:'26 anos'},
        {id:'2',name:'Thiago miller',tel:'(66) 9 9213-6418',altura:'1,80',idade:'26 anos'},
        {id:'3',name:'Felipe Souza ',tel:'(66) 9 8457-1327',altura:'1,80',idade:'26 anos'},
        {id:'4',name:'Mathes Silva ',tel:'(66) 9 9926-9251',altura:'1,80',idade:'26 anos'},
        {id:'5',name:'Ricardo alves',tel:'(66) 9 9974-5814',altura:'1,80',idade:'26 anos'}]

  })
}
  