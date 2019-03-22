export default ({store,redirect})=>{
    if(store.state.username){
        redirect('/');
    }
}