(function solve(){
    String.prototype.ensureStart = function(str){
        if(this.startsWith(str)){
            return this.toString();
        }
        else{
            return `${str}${this.toString()}`;
        }
    };
    String.prototype.ensureEnd = function(str){
        if(this.endsWith(str)){
            return this.toString();
        }
        else{
            return `${this.toString()}${str}`;
        }
    };
    String.prototype.isEmpty = function(){
        return this.length == 0;
    };
    String.prototype.truncate = function(n){
        if(this.length < n){
            return this.toString();
        }
        if(n < 4){
            let str = this.toString().substring(0,this.length-n);
            str += '.'.repeat(n);
            return str;
        }
        else{
            const splitted = this.toString().split(' ');
            if(splitted.length == 1){
                return this.toString().substring(0, n-3) + '...';
            } else {
                let result = '';
                for(let i = 0; i < splitted.length; i++){
                    if(result.length + splitted[i].length <= n){
                        result += (' ' + splitted[i]);
                    }
                    else{
                        return result.trim();
                    }
                }
                return result;
            }
        }
    };
    String.format = function(string, ...params){
        let result = string;

        for(let i=0; i < params.length; i++){
            result = result.replace(`{${i}}`, params[i]);
        }
        return result;
    };
})();