pipeline {
    agent any
    tools {
        nodejs 'node20'   // Name from NodeJS config in Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',credentialsId: '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', url: 'https://github.com/YOUR_USERNAME/YOUR_REPO.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=list'
            }
        }
    }
    post {
        always {
            junit '**/playwright-report/*.xml' // Optional if you enable junit reporter
        }
    }
}
