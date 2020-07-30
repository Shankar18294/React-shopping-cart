pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/basavarajbhavi/shopping-cart.git'
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
