export default (json:any,image:any):FormData=>{
    let arr = JSON.parse(JSON.stringify(json));
    let formData = new FormData();
    for(let v in arr){
        if(v !== 'image'){
            formData.append(v, arr[v]);
        }
    }
    formData.append('image',image);
    console.log(formData.get('image'));
    return formData;
}