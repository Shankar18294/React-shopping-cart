properties([parameters([choice(choices: 'master\ndev\nrelease', description: '', name: 'branch')]), pipelineTriggers([githubPush()])])
   node{
      
      stage('Scm Checkout') {
          
          
          echo "pulling the changes from the branch ${params.branch}"
          git url: 'https://github.com/Shankar18294/React-shopping-cart.git' , branch:"${params.branch}"
           }
       }                  
      
