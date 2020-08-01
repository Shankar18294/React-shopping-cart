properties([parameters([choice(choices: ['master', 'dev', 'release'], description: '', name: 'branch')]), pipelineTriggers([githubPush()])])
   node{
      
      stage('Scm Checkout') {
          
          
          echo "pulling the changes from the branch ${params.branch}"
          git url: 'https://github.com/basavarajbhavi/shopping-cart.git' , branch:"${params.branch}"
           }
       }                  
      
