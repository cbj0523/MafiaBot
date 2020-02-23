module.exports = {

    getUsers : function(list, user){
        if(list.find(l => l === user)){
            
            return false;
        }
        list.push(user);
        console.log(list);
        return true;
    },

    getPlayersCount : function(list){
        return list.length  
    },
    deleteUsers : function(list, user){
        let array = list.filter(name => name != user);
        list = array;
        console.log(list);
    }
}