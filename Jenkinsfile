pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '216e5c2e-1262-4284-b659-457d9f80b415', url: 'https://github.com/Shankar18294/React-shopping-cart.git']]])
      }
    }
     
    stage('Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('start') {
      steps {
         sh 'npm start'
      }
    }
