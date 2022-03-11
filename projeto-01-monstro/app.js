new Vue({
    el: '#app',
    data:{
        startGame: false,
        scorePlayer: 100,
        scoreMonster: 100,
        log: [],
         
    },
    methods: {
        initialGame(){ 
            this.startGame = true;
            this.scorePlayer = 100;
            this.scoreMonster = 100;
            this.log = [];
        },

        quitGame(){
            this.startGame = false;
        },

        randomGame(min, max){
            return Math.floor( Math.random() * max + min);
        },

        attackPlayerMonster(player, monster){
            this.scorePlayer = this.scorePlayer - monster;
            this.scoreMonster = this.scoreMonster - player;
        },

        addLog(isPlayer, score, cure = false){
            const data = {
                isPlayer,
                score,
                cure
            }
            this.log.unshift(data);
        },

        attack(){
            const attackPlayer = this.randomGame(5, 10);
            const attackMonster = this.randomGame(7, 12);
            this.attackPlayerMonster(attackPlayer, attackMonster)
            const isPlayer = true;
            this.addLog(isPlayer, attackPlayer)
            this.addLog(!isPlayer, attackMonster)
        },

        attackEpecial(){
            const attackMonster = this.randomGame(5, 9);
            const attackPlayer = this.randomGame(7, 14);
            this.attackPlayerMonster(attackPlayer, attackMonster)
            
            const isPlayer = true;
            this.addLog(isPlayer, attackPlayer)
            this.addLog(!isPlayer, attackMonster)
        },

        cure(){
            const curePlayer = this.randomGame(1, 8);
            const attackMonster = this.randomGame(1, 5);
            
            if(this.scorePlayer < 100){
                this.scorePlayer = this.scorePlayer + curePlayer;
                this.scorePlayer = this.scorePlayer - attackMonster;

                const isPlayer = true;
                const isCure = true;
                this.addLog(isPlayer, curePlayer, isCure);
                this.addLog(!isPlayer, attackMonster);
                
            }else{
                alert('Valor de score maior que o limite!')
            }
            
        }, 
        showTitleMessage(isPlayer, isCure){
            const playerOne = isPlayer ? 'Jogador' : 'Monstro';
            const playerTwo = !isPlayer ? 'Jogador' : 'Monstro';
            const message = isCure ? 'Jogador ganhou força de' : `${playerOne} atingiu ${playerTwo} com`
            
            return message;
        },
       
    },
    computed: {
        showScorePlayer(){
            const score = this.scorePlayer;

            return score < 0 ? `${0}%` :` ${score}%` ;
        },
        showScoreMonster(){
            const score = this.scoreMonster;

            return score <= 0 ? `${0}%` :` ${score}%` ;
        },
        showDangerPlayer(){
            let score = this.scorePlayer;

            return score <= 20 ? true : false ;
        },
        showDangerMonster(){
            let score = this.scoreMonster;

            return score <= 20 ? true : false;
        }, 
        winnerPlayer(){ 
            if (this.scoreMonster < 0 && this.scorePlayer > this.scoreMonster){
                this.quitGame();
                this.scoreMonster = 0
                return true;
            }
            return false;
        },
        winnerMonster(){
            if (this.scorePlayer < 0 && this.scorePlayer < this.scoreMonster ){
                this.quitGame();
                this.scorePlayer = 0
                return true;
            }
            return false;
        }
        
    }
   
})